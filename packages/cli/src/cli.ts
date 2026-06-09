#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Command } from 'commander';
import { getComponent, listComponents } from './component-catalog.js';
import { cobaltSources, configKeys, templates } from './constants.js';
import {
  assertKnownConfigKey,
  getConfigValue,
  readConfig,
  resolveConfigPath,
  setConfigValue,
  unsetConfigValue,
  writeConfig,
} from './config.js';
import { diagnosticLine, printResult, type CommandResult } from './diagnostics.js';
import { runDoctor } from './doctor.js';
import { nextCommands } from './output.js';
import { resolveOptions } from './options.js';
import { inspectProject, type ProjectInspection } from './project-inspect.js';
import { createPrompts } from './prompts.js';
import { scaffoldProject } from './scaffold.js';
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

  program
    .name('co')
    .description('Cobalt design system command line tool')
    .option('--no-art', 'Disable the Cobalt startup art')
    .option('--json', 'Print supported command output as JSON')
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
