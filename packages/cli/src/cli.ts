#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Command } from 'commander';
import {
  runAgentComponent,
  runAgentComponents,
  runAgentContext,
  runAgentIcon,
  runAgentIcons,
  runAgentThemes,
  runAgentToken,
  runAgentTokens,
  runAgentUtilities,
  type AgentComponentData,
  type AgentComponentsData,
  type AgentContextData,
  type AgentIconData,
  type AgentIconListOptions,
  type AgentIconsData,
  type AgentListOptions,
  type AgentOptions,
  type AgentThemesData,
  type AgentTokenListOptions,
  type AgentTokensData,
  type AgentUtilitiesData,
  type AgentTokenData,
} from './agent.js';
import { getComponent, listComponents } from './component-catalog.js';
import {
  cobaltSources,
  configKeys,
  skillCommandTargets,
  templates,
  type SkillCommandTarget,
} from './constants.js';
import {
  assertKnownConfigKey,
  getConfigValue,
  readConfig,
  resolveConfigPath,
  setConfigValue,
  unsetConfigValue,
  writeConfig,
} from './config.js';
import {
  createResult,
  diagnosticLine,
  printResult,
  type CommandResult,
  type DiagnosticRecord,
} from './diagnostics.js';
import { runDoctor } from './doctor.js';
import { nextCommands } from './output.js';
import { resolveOptions, resolveSkillTarget, type SkillCommandOptions } from './options.js';
import { inspectProject, type ProjectInspection } from './project-inspect.js';
import { createPrompts } from './prompts.js';
import { scaffoldProject } from './scaffold.js';
import {
  computeSkillStatus,
  harnessNames,
  installSkill,
  removeSkill,
  updateSkill,
  type HarnessName,
  type HarnessOutcome,
  type SkillStatus,
} from './skill.js';
import { renderStartupArt, shouldUseColor } from './startup-art.js';
import type { NewCommandOptions, PromptAdapter } from './types.js';

const packageRoot = path.resolve(fileURLToPath(import.meta.url), '../..');

interface CreateProgramOptions {
  argv?: readonly string[];
  root?: string;
  prompts?: PromptAdapter;
  env?: NodeJS.ProcessEnv;
  isTty?: boolean;
  out?: (message?: string) => void;
}

interface GlobalCliOptions {
  json?: boolean;
  quiet?: boolean;
  cwd?: string;
}

export async function main(argv = process.argv.slice(2)): Promise<void> {
  const program = createProgram({ argv });
  await program.parseAsync(argv, { from: 'user' });
}

export function createProgram({
  argv = process.argv.slice(2),
  root = packageRoot,
  prompts = createPrompts(),
  env = process.env,
  isTty = Boolean(process.stdout.isTTY),
  out = (message = '') => console.log(message),
}: CreateProgramOptions = {}): Command {
  const program = new Command();
  const version = readPackageVersion(root);
  const color = shouldUseColor({ env, isTty });
  const noArt = argv.includes('--no-art');
  const startupArt = noArt ? '' : `${renderStartupArt({ color, version })}\n\n`;
  program.configureOutput({
    writeOut: (message) => out(message.replace(/\n$/, '')),
  });

  program
    .name('co')
    .description('Cobalt design system command line tool')
    .version(version, '-v, --version', 'Print CLI version')
    .option('--no-art', 'Disable the Cobalt startup art')
    .option(
      '--json',
      'Print supported command output as JSON (default for `co agent *` when stdout is not a terminal)',
    )
    .option('--no-json', 'Force human-readable output, overriding the `co agent *` non-TTY default')
    .option('--quiet', 'Suppress human-readable command output')
    .option('--cwd <path>', 'Project directory for inspection commands')
    .showHelpAfterError()
    .showSuggestionAfterError()
    .action(() => {
      out(program.helpInformation());
    });
  includeStartupArtInHelp(program, startupArt);

  const newCommand = program
    .command('new')
    .description('Create a new Cobalt starter application')
    .argument('[project-name]', 'Project directory')
    .option('--template <name>', `Template to use: ${templates.join(', ')}`)
    .option('--scss', 'Include SCSS and Cobalt Sass helper setup')
    .option('--no-scss', 'Use plain CSS')
    .option('--app-shell', 'Use the Cobalt app shell pattern')
    .option('--no-app-shell', 'Use the base page layout')
    .option('--cobalt-source <source>', `Cobalt package source: ${cobaltSources.join(', ')}`)
    .option('--configure-registry', 'Create a project .npmrc from CLI config or flags')
    .option('--no-configure-registry', 'Keep .npmrc.example without creating .npmrc')
    .option('--registry-url <url>', 'Cobalt npm registry URL')
    .option('--ca-bundle <path>', 'Path to the CA bundle used for the Cobalt registry')
    .option('--agent-skill <target>', 'Install Cobalt AI agent skill: none, codex, claude, or both')
    .option('-y, --yes', 'Accept defaults for omitted options')
    .action(async (targetDir: string | undefined, commandOptions: NewCommandOptions) => {
      if (!noArt && shouldShowNewCommandArt({ targetDir, commandOptions })) {
        out(renderStartupArt({ color, version }));
        out();
      }

      const configPath = resolveConfigPath(env);
      const config = await readConfig(configPath);
      const options = await resolveOptions({ ...commandOptions, targetDir }, prompts, config);

      if (
        options.saveConfig &&
        (await prompts.confirm('Save registry settings for future co new runs?', true))
      ) {
        await writeConfig(options.saveConfig, configPath);
      }

      const createdDir = await scaffoldProject(options, root);

      out(`\nCreated ${path.basename(createdDir)} with the ${options.template} template.`);
      out('\nNext steps:');
      for (const commandLine of nextCommands(createdDir, options)) {
        out(`  ${commandLine}`);
      }
    });

  includeStartupArtInHelp(newCommand, startupArt);

  const inspect = program.command('inspect').description('Inspect Cobalt usage in a project');
  inspect.action(async () => {
    const globalOptions = getGlobalOptions(program);
    const inspection = await inspectProject(resolveCommandCwd(globalOptions));
    const result = {
      command: 'inspect',
      cwd: inspection.root,
      summary: {
        status: 'pass' as const,
        pass: 0,
        warn: 0,
        fail: 0,
      },
      diagnostics: [],
      data: inspection,
    } satisfies CommandResult<ProjectInspection>;

    printResult(result, globalOptions, out, formatInspectResult);
  });
  includeStartupArtInHelp(inspect, startupArt);

  const doctor = program
    .command('doctor')
    .description('Check a project for common Cobalt adoption issues')
    .option('--strict', 'Exit with an error when warnings or failures are found');
  doctor.action(async (commandOptions: { strict?: boolean }) => {
    const globalOptions = getGlobalOptions(program);
    const result = await runDoctor(resolveCommandCwd(globalOptions));

    printResult(result, { ...globalOptions, color }, out, (doctorResult) =>
      formatDoctorResult(doctorResult, color),
    );

    if (commandOptions.strict && (result.summary.warn > 0 || result.summary.fail > 0)) {
      process.exitCode = 1;
    }
  });
  includeStartupArtInHelp(doctor, startupArt);

  const components = program.command('components').description('Look up Cobalt component metadata');
  includeStartupArtInHelp(components, startupArt);

  const componentsList = components.command('list').description('List Cobalt components');
  componentsList.action(() => {
    const globalOptions = getGlobalOptions(program);
    printResult(listComponents(), globalOptions, out, formatComponentListResult);
  });
  includeStartupArtInHelp(componentsList, startupArt);

  const componentsStatus = components
    .command('status')
    .description('Print Cobalt component status')
    .argument('<name>', 'Component name, with or without the co- prefix');
  componentsStatus.action((name: string) => {
    const globalOptions = getGlobalOptions(program);
    printResult(getComponent(name), globalOptions, out, formatComponentStatusResult);
  });
  includeStartupArtInHelp(componentsStatus, startupArt);

  const componentsUsage = components
    .command('usage')
    .description('Print Cobalt component import paths')
    .argument('<name>', 'Component name, with or without the co- prefix');
  componentsUsage.action((name: string) => {
    const globalOptions = getGlobalOptions(program);
    printResult(
      getComponent(name, 'components usage'),
      globalOptions,
      out,
      formatComponentUsageResult,
    );
  });
  includeStartupArtInHelp(componentsUsage, startupArt);

  const agent = program
    .command('agent')
    .description('Print AI-agent-oriented Cobalt context')
    .option('--metadata-source <source>', 'Metadata source: auto, workspace, or bundled', 'auto');
  includeStartupArtInHelp(agent, startupArt);

  const resolveAgentOutput = (globalOptions: GlobalCliOptions): GlobalCliOptions => ({
    ...globalOptions,
    json: globalOptions.json ?? !isTty,
  });

  const agentContext = agent
    .command('context')
    .description('Print Cobalt project and metadata context');
  agentContext.action(async () => {
    const globalOptions = getGlobalOptions(program);
    const result = await runAgentContext({
      root: resolveCommandCwd(globalOptions),
      packageRoot: root,
      options: getAgentOptions(agent),
    });
    printResult(result, resolveAgentOutput(globalOptions), out, formatAgentContextResult);
  });
  includeStartupArtInHelp(agentContext, startupArt);

  const agentComponents = agent
    .command('components')
    .description('Print normalized Cobalt component metadata')
    .option(
      '--framework <target>',
      'Guidance framework: auto, web-components, react, vue, or angular',
      'auto',
    );
  agentComponents.action(async (commandOptions: { framework?: string }) => {
    const globalOptions = getGlobalOptions(program);
    const result = await runAgentComponents({
      root: resolveCommandCwd(globalOptions),
      packageRoot: root,
      options: { ...getAgentOptions(agent), framework: commandOptions.framework },
    });
    printResult(result, resolveAgentOutput(globalOptions), out, formatAgentComponentsResult);
  });
  includeStartupArtInHelp(agentComponents, startupArt);

  const agentComponent = agent
    .command('component')
    .description('Print normalized metadata for one Cobalt component')
    .argument('<name>', 'Component name, with or without the co- prefix')
    .option(
      '--framework <target>',
      'Guidance framework: auto, web-components, react, vue, or angular',
      'auto',
    );
  agentComponent.action(async (name: string, commandOptions: { framework?: string }) => {
    const globalOptions = getGlobalOptions(program);
    const result = await runAgentComponent({
      root: resolveCommandCwd(globalOptions),
      packageRoot: root,
      name,
      options: { ...getAgentOptions(agent), framework: commandOptions.framework },
    });
    printResult(result, resolveAgentOutput(globalOptions), out, formatAgentComponentResult);
  });
  includeStartupArtInHelp(agentComponent, startupArt);

  const agentTokens = agent
    .command('tokens')
    .description('Search Cobalt design tokens')
    .option('--tier <tier>', 'Token tier: primitive, semantic, or component')
    .option('--category <category>', 'Token category, such as Color or Space')
    .option('--query <text>', 'Search token names, categories, tiers, and descriptions')
    .option('--theme <theme>', 'Filter token theme values by theme')
    .option('--mode <mode>', 'Filter token theme values by mode')
    .option('--limit <count>', 'Maximum tokens to return', '50')
    .option('--all', 'Return all matching tokens');
  agentTokens.action(async (commandOptions: AgentTokenListOptions) => {
    const globalOptions = getGlobalOptions(program);
    const result = await runAgentTokens({
      root: resolveCommandCwd(globalOptions),
      packageRoot: root,
      options: getAgentOptions(agent),
      listOptions: commandOptions,
    });
    printResult(result, resolveAgentOutput(globalOptions), out, formatAgentTokensResult);
  });
  includeStartupArtInHelp(agentTokens, startupArt);

  const agentToken = agent
    .command('token')
    .description('Print metadata for one Cobalt design token')
    .argument('<name>', 'Token name, such as --co-color-text-default')
    .allowUnknownOption(true);
  agentToken.action(async (name: string) => {
    const globalOptions = getGlobalOptions(program);
    const result = await runAgentToken({
      root: resolveCommandCwd(globalOptions),
      packageRoot: root,
      name,
      options: getAgentOptions(agent),
    });
    printResult(result, resolveAgentOutput(globalOptions), out, formatAgentTokenResult);
  });
  includeStartupArtInHelp(agentToken, startupArt);

  const agentUtilities = agent
    .command('utilities')
    .description('Search Cobalt utility classes')
    .option('--query <text>', 'Search utility class names, CSS, descriptions, and token refs')
    .option('--limit <count>', 'Maximum utilities to return', '50')
    .option('--all', 'Return all matching utilities');
  agentUtilities.action(async (commandOptions: AgentListOptions) => {
    const globalOptions = getGlobalOptions(program);
    const result = await runAgentUtilities({
      root: resolveCommandCwd(globalOptions),
      packageRoot: root,
      options: getAgentOptions(agent),
      listOptions: commandOptions,
    });
    printResult(result, resolveAgentOutput(globalOptions), out, formatAgentUtilitiesResult);
  });
  includeStartupArtInHelp(agentUtilities, startupArt);

  const agentIcons = agent
    .command('icons')
    .description('Search Cobalt icon names (Material Symbols + custom Cobalt icons)')
    .option('--query <text>', 'Search icon names, categories, descriptions, and search terms')
    .option('--kind <kind>', 'Filter by kind: material, custom, override, or animated')
    .option(
      '--category <category>',
      'Filter by Material Symbols category (workspace metadata only)',
    )
    .option('--limit <count>', 'Maximum icons to return', '50')
    .option('--all', 'Return all matching icons');
  agentIcons.action(async (commandOptions: AgentIconListOptions) => {
    const globalOptions = getGlobalOptions(program);
    const result = await runAgentIcons({
      root: resolveCommandCwd(globalOptions),
      packageRoot: root,
      options: getAgentOptions(agent),
      listOptions: commandOptions,
    });
    printResult(result, resolveAgentOutput(globalOptions), out, formatAgentIconsResult);
  });
  includeStartupArtInHelp(agentIcons, startupArt);

  const agentIcon = agent
    .command('icon')
    .description('Print metadata for one Cobalt icon')
    .argument('<name>', 'Icon name, kebab-case (also accepts snake_case or camelCase)');
  agentIcon.action(async (name: string) => {
    const globalOptions = getGlobalOptions(program);
    const result = await runAgentIcon({
      root: resolveCommandCwd(globalOptions),
      packageRoot: root,
      name,
      options: getAgentOptions(agent),
    });
    printResult(result, resolveAgentOutput(globalOptions), out, formatAgentIconResult);
  });
  includeStartupArtInHelp(agentIcon, startupArt);

  const agentThemes = agent
    .command('themes')
    .description('List Cobalt themes exported from @cobalt/tokens (name, import paths, modes)');
  agentThemes.action(async () => {
    const globalOptions = getGlobalOptions(program);
    const result = await runAgentThemes({
      root: resolveCommandCwd(globalOptions),
      packageRoot: root,
      options: getAgentOptions(agent),
    });
    printResult(result, resolveAgentOutput(globalOptions), out, formatAgentThemesResult);
  });
  includeStartupArtInHelp(agentThemes, startupArt);

  const skill = program.command('skill').description('Manage the Cobalt agent skill in a project');
  includeStartupArtInHelp(skill, startupArt);

  const skillList = skill
    .command('list')
    .description('List available Cobalt skills and per-harness install state');
  skillList.action(async () => {
    const globalOptions = getGlobalOptions(program);
    const targetRoot = resolveCommandCwd(globalOptions);
    const status = await computeSkillStatus({ targetRoot, packageRoot: root });
    const result = createResult<SkillListData>({
      command: 'skill list',
      cwd: targetRoot,
      diagnostics: buildSkillListDiagnostics([status]),
      data: { skills: [status] },
    });
    printResult(result, globalOptions, out, formatSkillListResult);
  });
  includeStartupArtInHelp(skillList, startupArt);

  const skillStatusCommand = skill
    .command('status')
    .description('Report the Cobalt skill install state for both harnesses');
  skillStatusCommand.action(async () => {
    const globalOptions = getGlobalOptions(program);
    const targetRoot = resolveCommandCwd(globalOptions);
    const status = await computeSkillStatus({ targetRoot, packageRoot: root });
    const result = createResult<SkillStatusData>({
      command: 'skill status',
      cwd: targetRoot,
      diagnostics: buildSkillStatusDiagnostics(status),
      data: { skill: status },
    });
    printResult(result, globalOptions, out, formatSkillStatusResult);
  });
  includeStartupArtInHelp(skillStatusCommand, startupArt);

  const skillAdd = skill
    .command('add')
    .description('Install the Cobalt agent skill; offer to update outdated installs')
    .option('--target <target>', `Skill target: ${skillCommandTargets.join(', ')}`)
    .option('-y, --yes', 'Accept defaults; auto-update when an existing install is outdated');
  skillAdd.action(async (commandOptions: SkillCommandOptions) => {
    const globalOptions = getGlobalOptions(program);
    const targetRoot = resolveCommandCwd(globalOptions);
    const target = await resolveSkillTarget(commandOptions, prompts, { interactive: isTty });
    const status = await computeSkillStatus({ targetRoot, packageRoot: root });
    const requested = harnessesForTarget(target);
    const actions: HarnessOutcome[] = [];
    const outdated: HarnessName[] = [];

    for (const harness of requested) {
      const harnessStatus = findHarnessStatus(status, harness);
      if (harnessStatus.state === 'not-installed') {
        actions.push(await installSkill({ targetRoot, packageRoot: root, harness }));
      } else if (harnessStatus.state === 'current') {
        actions.push({
          harness,
          path: harnessStatus.path,
          outcome: 'current',
          backups: [],
        });
      } else {
        outdated.push(harness);
      }
    }

    if (outdated.length > 0) {
      const shouldUpdate = commandOptions.yes
        ? true
        : isTty
          ? await prompts.confirm(
              `Cobalt skill for ${outdated.join(' and ')} is outdated. Update now?`,
              true,
            )
          : false;

      for (const harness of outdated) {
        if (shouldUpdate) {
          actions.push(await updateSkill({ targetRoot, packageRoot: root, harness }));
        } else {
          const harnessStatus = findHarnessStatus(status, harness);
          actions.push({
            harness,
            path: harnessStatus.path,
            outcome: 'skipped',
            backups: [],
          });
        }
      }
    }

    const result = createResult<SkillActionData>({
      command: 'skill add',
      cwd: targetRoot,
      diagnostics: buildSkillActionDiagnostics('add', actions),
      data: { target, actions },
    });
    printResult(result, globalOptions, out, (cmdResult) =>
      formatSkillActionResult('add', cmdResult),
    );
  });
  includeStartupArtInHelp(skillAdd, startupArt);

  const skillUpdate = skill
    .command('update')
    .description('Refresh the installed Cobalt skill; backs up modified files to <file>.bak')
    .option('--target <target>', `Skill target: ${skillCommandTargets.join(', ')}`)
    .option('-y, --yes', 'Accept defaults for omitted options');
  skillUpdate.action(async (commandOptions: SkillCommandOptions) => {
    const globalOptions = getGlobalOptions(program);
    const targetRoot = resolveCommandCwd(globalOptions);
    const target = await resolveSkillTarget(commandOptions, prompts, { interactive: isTty });
    const actions: HarnessOutcome[] = [];

    for (const harness of harnessesForTarget(target)) {
      actions.push(await updateSkill({ targetRoot, packageRoot: root, harness }));
    }

    const result = createResult<SkillActionData>({
      command: 'skill update',
      cwd: targetRoot,
      diagnostics: buildSkillActionDiagnostics('update', actions),
      data: { target, actions },
    });
    printResult(result, globalOptions, out, (cmdResult) =>
      formatSkillActionResult('update', cmdResult),
    );
  });
  includeStartupArtInHelp(skillUpdate, startupArt);

  const skillRemove = skill
    .command('remove')
    .description('Uninstall the Cobalt skill; locally modified files are backed up to <dir>.bak/')
    .option('--target <target>', `Skill target: ${skillCommandTargets.join(', ')}`)
    .option('-y, --yes', 'Accept defaults for omitted options');
  skillRemove.action(async (commandOptions: SkillCommandOptions) => {
    const globalOptions = getGlobalOptions(program);
    const targetRoot = resolveCommandCwd(globalOptions);
    const target = await resolveSkillTarget(commandOptions, prompts, { interactive: isTty });
    const actions: HarnessOutcome[] = [];

    for (const harness of harnessesForTarget(target)) {
      actions.push(await removeSkill({ targetRoot, packageRoot: root, harness }));
    }

    const result = createResult<SkillActionData>({
      command: 'skill remove',
      cwd: targetRoot,
      diagnostics: buildSkillActionDiagnostics('remove', actions),
      data: { target, actions },
    });
    printResult(result, globalOptions, out, (cmdResult) =>
      formatSkillActionResult('remove', cmdResult),
    );
  });
  includeStartupArtInHelp(skillRemove, startupArt);

  const config = program.command('config').description('Manage Cobalt CLI settings');
  includeStartupArtInHelp(config, startupArt);

  const configSet = config
    .command('set')
    .description('Set a Cobalt CLI config value')
    .argument('<key>', `Config key: ${configKeys.join(', ')}`)
    .argument('<value>', 'Config value')
    .action(async (key: string, value: string) => {
      assertKnownConfigKey(key);
      const configPath = resolveConfigPath(env);
      const current = await readConfig(configPath);
      await writeConfig(setConfigValue(current, key, value), configPath);
      out(`${key} saved to ${configPath}`);
    });
  includeStartupArtInHelp(configSet, startupArt);

  const configGet = config
    .command('get')
    .description('Print a Cobalt CLI config value')
    .argument('<key>', `Config key: ${configKeys.join(', ')}`)
    .action(async (key: string) => {
      assertKnownConfigKey(key);
      const value = getConfigValue(await readConfig(resolveConfigPath(env)), key);
      if (value !== undefined) {
        out(value);
      }
    });
  includeStartupArtInHelp(configGet, startupArt);

  const configList = config
    .command('list')
    .description('Print Cobalt CLI config as JSON')
    .action(async () => {
      out(JSON.stringify(await readConfig(resolveConfigPath(env)), null, 2));
    });
  includeStartupArtInHelp(configList, startupArt);

  const configUnset = config
    .command('unset')
    .description('Remove a Cobalt CLI config value')
    .argument('<key>', `Config key: ${configKeys.join(', ')}`)
    .action(async (key: string) => {
      assertKnownConfigKey(key);
      const configPath = resolveConfigPath(env);
      const current = await readConfig(configPath);
      await writeConfig(unsetConfigValue(current, key), configPath);
      out(`${key} removed from ${configPath}`);
    });
  includeStartupArtInHelp(configUnset, startupArt);

  return program;
}

function getGlobalOptions(program: Command): GlobalCliOptions {
  return program.opts<GlobalCliOptions>();
}

function resolveCommandCwd(options: GlobalCliOptions): string {
  return path.resolve(options.cwd ?? process.cwd());
}

function getAgentOptions(command: Command): AgentOptions {
  return command.opts<AgentOptions>();
}

function formatInspectResult(result: CommandResult<ProjectInspection>): string {
  const inspection = result.data;
  const dependencies =
    inspection.cobaltDependencies.length === 0
      ? 'none'
      : inspection.cobaltDependencies
          .map((dependency) => `${dependency.name}@${dependency.version}`)
          .join(', ');

  return [
    `Cobalt project inspection: ${inspection.root}`,
    `Package manager: ${inspection.packageManager}`,
    `Frameworks: ${inspection.frameworks.length > 0 ? inspection.frameworks.join(', ') : 'unknown'}`,
    `Cobalt packages: ${dependencies}`,
    `Styles: tokens=${yesNo(inspection.hasTokenCss)} fonts=${yesNo(inspection.hasFontCss)} base=${yesNo(inspection.hasBaseCss)}`,
    `Base scope: data-co-base=${yesNo(inspection.hasDataCoBase)}`,
    `Package source: ${inspection.localPackages.mode ? 'local tarballs' : 'registry or workspace'}`,
  ].join('\n');
}

function formatDoctorResult(result: CommandResult<ProjectInspection>, color = false): string {
  return [
    `Cobalt doctor: ${result.cwd}`,
    `Summary: ${result.summary.pass} passed, ${result.summary.warn} warnings, ${result.summary.fail} failures`,
    ...result.diagnostics.map((diagnostic) => diagnosticLine(diagnostic, { color })),
  ].join('\n');
}

function formatComponentListResult(result: ReturnType<typeof listComponents>): string {
  return result.data.components
    .map((component) => `${component.tagName}  ${component.docsPath}`)
    .join('\n');
}

function formatComponentStatusResult(result: ReturnType<typeof getComponent>): string {
  const component = result.data.component;
  if (!component) {
    return result.diagnostics.map((diagnostic) => diagnosticLine(diagnostic)).join('\n');
  }

  const statuses = Object.entries(component.status)
    .map(([phase, status]) => `${phase}=${status}`)
    .join(' ');

  return [`${component.tagName} (${component.name})`, `Docs: ${component.docsPath}`, statuses].join(
    '\n',
  );
}

function formatComponentUsageResult(result: ReturnType<typeof getComponent>): string {
  const component = result.data.component;
  if (!component) {
    return result.diagnostics.map((diagnostic) => diagnosticLine(diagnostic)).join('\n');
  }

  return [
    `${component.tagName} import paths`,
    `Web Component: import '${component.imports.webComponent}';`,
    `React: import { ${component.name} } from '${component.imports.react}';`,
    `Vue: import { ${component.name} } from '${component.imports.vue}';`,
    `Angular: import { ${component.name} } from '${component.imports.angular}';`,
  ].join('\n');
}

function formatAgentContextResult(result: CommandResult<AgentContextData>): string {
  const data = result.data;
  return [
    `Cobalt agent context: ${result.cwd}`,
    `Metadata: ${data.metadata.source}`,
    `Guidance: ${data.metadata.guidanceManifestPath ? 'loaded' : 'missing'}`,
    `Components: ${data.metadata.components.count}`,
    `Tokens: ${data.metadata.tokens.count}`,
    `Utilities: ${data.metadata.utilities.count}`,
    `Frameworks: ${data.project.frameworks.length > 0 ? data.project.frameworks.join(', ') : 'unknown'}`,
    `Doctor: ${data.doctor.summary.status} (${data.doctor.summary.pass} passed, ${data.doctor.summary.warn} warnings, ${data.doctor.summary.fail} failures)`,
  ].join('\n');
}

function formatAgentComponentsResult(result: CommandResult<AgentComponentsData>): string {
  return result.data.components
    .map((component) => `${component.tagName}  ${component.docsPath}`)
    .join('\n');
}

function formatAgentComponentResult(result: CommandResult<AgentComponentData>): string {
  const component = result.data.component;
  if (!component) {
    return result.diagnostics.map((diagnostic) => diagnosticLine(diagnostic)).join('\n');
  }

  const usageLines =
    component.usage.examples.length > 0
      ? [
          `Framework: ${component.usage.framework ?? 'ambiguous'}`,
          `Imports: ${component.usage.requiredImports.join(' ') || 'none'}`,
          'Usage:',
          ...component.usage.examples.map((example) =>
            [`- ${example.title}`, example.code].filter(Boolean).join('\n  '),
          ),
        ]
      : [
          `Framework: ${component.usage.framework ?? 'ambiguous'}`,
          `Available frameworks: ${component.usage.availableFrameworks.join(', ') || 'none'}`,
        ];

  return [
    `${component.tagName} (${component.name})`,
    `Docs: ${component.docsPath}`,
    `Attributes: ${component.attributes.map((attribute) => attribute.name).join(', ') || 'none'}`,
    `Events: ${component.events.map((event) => event.name).join(', ') || 'none'}`,
    `Slots: ${component.slots.map((slot) => slot.name).join(', ') || 'none'}`,
    `CSS parts: ${component.cssParts.map((part) => part.name).join(', ') || 'none'}`,
    ...usageLines,
    'Notes:',
    ...component.usage.notes.map((note) => `- ${note}`),
  ].join('\n');
}

function formatAgentTokensResult(result: CommandResult<AgentTokensData>): string {
  const header = `Cobalt tokens: ${result.data.returned}/${result.data.total}`;
  return [
    header,
    ...result.data.tokens.map((token) => `${token.name}  ${token.tier}  ${token.category}`),
  ].join('\n');
}

function formatAgentTokenResult(result: CommandResult<AgentTokenData>): string {
  const token = result.data.token;
  if (!token) {
    return result.diagnostics.map((diagnostic) => diagnosticLine(diagnostic)).join('\n');
  }

  return [
    token.name,
    `Tier: ${token.tier}`,
    `Category: ${token.category}`,
    `Value: ${token.value}`,
    token.resolvedValue ? `Resolved: ${token.resolvedValue}` : undefined,
    token.description ? `Description: ${token.description}` : undefined,
  ]
    .filter(Boolean)
    .join('\n');
}

function formatAgentUtilitiesResult(result: CommandResult<AgentUtilitiesData>): string {
  const header = `Cobalt utilities: ${result.data.returned}/${result.data.total}`;
  return [
    header,
    ...result.data.utilities.map((utility) => `${utility.className}  ${utility.css}`),
  ].join('\n');
}

function formatAgentIconsResult(result: CommandResult<AgentIconsData>): string {
  const header = `Cobalt icons: ${result.data.returned}/${result.data.total}`;
  return [
    header,
    ...result.data.icons.map((icon) => {
      const animated = icon.hasAnimated ? ' (animated)' : '';
      const category = icon.category ? `  ${icon.category}` : '';
      return `${icon.name}  ${icon.kind}${animated}${category}`;
    }),
  ].join('\n');
}

function formatAgentThemesResult(result: CommandResult<AgentThemesData>): string {
  const header = `Cobalt themes: ${result.data.total}`;
  return [
    header,
    ...result.data.themes.map((theme) => {
      const modes = theme.modes.join('/');
      return `${theme.name}  ${theme.cssImportPath}  modes=${modes}`;
    }),
  ].join('\n');
}

function formatAgentIconResult(result: CommandResult<AgentIconData>): string {
  const icon = result.data.icon;
  if (!icon) {
    return result.diagnostics.map((diagnostic) => diagnosticLine(diagnostic)).join('\n');
  }

  return [
    icon.name,
    `Kind: ${icon.kind}${icon.hasAnimated ? ' (has animated variant)' : ''}`,
    `Import: ${icon.importPath}`,
    icon.category ? `Category: ${icon.category}` : undefined,
    icon.description ? `Description: ${icon.description}` : undefined,
    icon.searchTerms && icon.searchTerms.length > 0
      ? `Search terms: ${icon.searchTerms.join(', ')}`
      : undefined,
  ]
    .filter(Boolean)
    .join('\n');
}

interface SkillListData {
  skills: SkillStatus[];
}

interface SkillStatusData {
  skill: SkillStatus;
}

interface SkillActionData {
  target: SkillCommandTarget;
  actions: HarnessOutcome[];
}

type SkillActionKind = 'add' | 'update' | 'remove';

function harnessesForTarget(target: SkillCommandTarget): HarnessName[] {
  if (target === 'both') return [...harnessNames];
  return [target];
}

function findHarnessStatus(status: SkillStatus, harness: HarnessName) {
  const match = status.harnesses.find((entry) => entry.harness === harness);
  if (!match) {
    throw new Error(`Missing harness status for "${harness}".`);
  }
  return match;
}

function harnessStateEvidence(state: SkillStatus['harnesses'][number]): string {
  if (state.state === 'outdated') {
    return state.modifiedFiles.length > 0
      ? `outdated (${state.modifiedFiles.join(', ')})`
      : 'outdated';
  }
  return state.state;
}

function buildSkillListDiagnostics(skills: SkillStatus[]): DiagnosticRecord[] {
  return skills.map((skill) => ({
    id: 'cobalt.skill.list',
    status: 'pass',
    severity: 'info',
    message: `${skill.name}: ${skill.description}`,
    evidence: skill.harnesses
      .map((entry) => `${entry.harness}=${harnessStateEvidence(entry)}`)
      .join(' '),
  }));
}

function buildSkillStatusDiagnostics(skill: SkillStatus): DiagnosticRecord[] {
  return skill.harnesses.map((entry) => ({
    id: `cobalt.skill.status.${entry.state}`,
    status: 'pass',
    severity: 'info',
    message: `${entry.harness}: ${harnessStateEvidence(entry)}`,
    evidence: entry.path,
  }));
}

function buildSkillActionDiagnostics(
  kind: SkillActionKind,
  actions: HarnessOutcome[],
): DiagnosticRecord[] {
  const allCurrentForAdd =
    kind === 'add' && actions.length > 0 && actions.every((action) => action.outcome === 'current');

  if (allCurrentForAdd) {
    const harnessList = actions.map((action) => action.harness).join(' and ');
    return [
      {
        id: 'cobalt.skill.add.all-current',
        status: 'pass',
        severity: 'info',
        message: `Cobalt skill is already installed and up to date for ${harnessList}. No action taken.`,
      },
    ];
  }

  return actions.map((action) => buildSkillOutcomeDiagnostic(kind, action));
}

function buildSkillOutcomeDiagnostic(
  kind: SkillActionKind,
  action: HarnessOutcome,
): DiagnosticRecord {
  const backupNote = action.backups.length > 0 ? ` (backed up ${action.backups.join(', ')})` : '';

  switch (action.outcome) {
    case 'installed':
      return {
        id: 'cobalt.skill.add.installed',
        status: 'pass',
        severity: 'info',
        message: `Installed Cobalt skill for ${action.harness}.`,
        evidence: action.path,
      };
    case 'current':
      return {
        id: `cobalt.skill.${kind}.current`,
        status: 'pass',
        severity: 'info',
        message: `Cobalt skill for ${action.harness} is already up to date.`,
        evidence: action.path,
      };
    case 'updated':
      return {
        id: `cobalt.skill.${kind === 'add' ? 'add' : 'update'}.updated`,
        status: 'pass',
        severity: 'info',
        message: `Updated Cobalt skill for ${action.harness}${backupNote}.`,
        evidence: action.path,
      };
    case 'skipped':
      return {
        id: 'cobalt.skill.add.outdated',
        status: 'warn',
        severity: 'warning',
        message: `Cobalt skill for ${action.harness} is outdated and was not updated.`,
        evidence: action.path,
        suggestedAction: `Run "co skill update --target ${action.harness}" to refresh.`,
      };
    case 'missing':
      return {
        id: 'cobalt.skill.update.missing',
        status: 'fail',
        severity: 'error',
        message: `Cobalt skill is not installed for ${action.harness}.`,
        evidence: action.path,
        suggestedAction: `Run "co skill add --target ${action.harness}" first.`,
      };
    case 'removed':
      return {
        id: 'cobalt.skill.remove.removed',
        status: 'pass',
        severity: 'info',
        message: `Removed Cobalt skill for ${action.harness}.`,
        evidence: action.path,
      };
    case 'removed-with-backup':
      return {
        id: 'cobalt.skill.remove.removed-with-backup',
        status: 'pass',
        severity: 'info',
        message: `Removed Cobalt skill for ${action.harness}${backupNote}.`,
        evidence: action.path,
      };
    case 'absent':
      return {
        id: 'cobalt.skill.remove.absent',
        status: 'pass',
        severity: 'info',
        message: `Cobalt skill is not installed for ${action.harness}; nothing to remove.`,
        evidence: action.path,
      };
    case 'failed':
      return {
        id: 'cobalt.skill.failed',
        status: 'fail',
        severity: 'error',
        message: `Cobalt skill ${kind} failed for ${action.harness}.`,
        evidence: action.errorMessage ?? action.path,
      };
  }
}

function formatSkillListResult(result: CommandResult<SkillListData>): string {
  return result.data.skills
    .flatMap((skill) => [
      `${skill.name} — ${skill.description}`,
      ...skill.harnesses.map((entry) => `  ${entry.harness}: ${harnessStateEvidence(entry)}`),
    ])
    .join('\n');
}

function formatSkillStatusResult(result: CommandResult<SkillStatusData>): string {
  return [
    `Cobalt skill status: ${result.data.skill.name}`,
    ...result.data.skill.harnesses.map(
      (entry) => `${entry.harness}: ${harnessStateEvidence(entry)} (${entry.path})`,
    ),
  ].join('\n');
}

function formatSkillActionResult(
  kind: SkillActionKind,
  result: CommandResult<SkillActionData>,
): string {
  return [
    `Cobalt skill ${kind} (${result.data.target}): ${result.cwd}`,
    ...result.diagnostics.map((diagnostic) => diagnosticLine(diagnostic)),
  ].join('\n');
}

function yesNo(value: boolean): string {
  return value ? 'yes' : 'no';
}

function includeStartupArtInHelp(command: Command, startupArt: string): void {
  if (!startupArt) {
    return;
  }

  const helpInformation = command.helpInformation.bind(command);
  command.helpInformation = () => `${startupArt}${helpInformation()}`;
}

function readPackageVersion(root: string): string {
  const packageJson = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8')) as {
    version?: string;
  };

  return packageJson.version ?? '0.0.0';
}

function shouldShowNewCommandArt({
  targetDir,
  commandOptions,
}: {
  targetDir?: string;
  commandOptions: NewCommandOptions;
}): boolean {
  if (commandOptions.yes) {
    return false;
  }

  return (
    targetDir === undefined ||
    commandOptions.template === undefined ||
    commandOptions.scss === undefined ||
    commandOptions.appShell === undefined ||
    commandOptions.cobaltSource === undefined ||
    commandOptions.agentSkill === undefined ||
    shouldPromptForRegistryConfiguration(commandOptions) ||
    shouldPromptForRegistryValues(commandOptions)
  );
}

function shouldPromptForRegistryConfiguration(commandOptions: NewCommandOptions): boolean {
  return (
    commandOptions.cobaltSource !== 'local' &&
    commandOptions.configureRegistry === undefined &&
    commandOptions.registryUrl === undefined
  );
}

function shouldPromptForRegistryValues(commandOptions: NewCommandOptions): boolean {
  return (
    commandOptions.configureRegistry === true &&
    (commandOptions.registryUrl === undefined || commandOptions.caBundle === undefined)
  );
}

export async function runCli(argv = process.argv.slice(2)): Promise<void> {
  try {
    await main(argv);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`\n${message}`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await runCli();
}
