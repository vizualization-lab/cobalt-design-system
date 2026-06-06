#!/usr/bin/env node
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Command } from 'commander';
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
import { nextCommands } from './output.js';
import { resolveOptions } from './options.js';
import { createPrompts } from './prompts.js';
import { scaffoldProject } from './scaffold.js';
import type { NewCommandOptions, PromptAdapter } from './types.js';

const packageRoot = path.resolve(fileURLToPath(import.meta.url), '../..');

interface CreateProgramOptions {
  root?: string;
  prompts?: PromptAdapter;
  env?: NodeJS.ProcessEnv;
  out?: (message?: string) => void;
}

export async function main(argv = process.argv.slice(2)): Promise<void> {
  const program = createProgram();
  await program.parseAsync(argv, { from: 'user' });
}

export function createProgram({
  root = packageRoot,
  prompts = createPrompts(),
  env = process.env,
  out = (message = '') => console.log(message),
}: CreateProgramOptions = {}): Command {
  const program = new Command();

  program
    .name('co')
    .description('Cobalt design system command line tool')
    .showHelpAfterError()
    .showSuggestionAfterError();

  program
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
      const configPath = resolveConfigPath(env);
      const config = await readConfig(configPath);
      const options = await resolveOptions({ ...commandOptions, targetDir }, prompts, config);

      if (
        options.saveConfig &&
        (await prompts.confirm('Save registry settings for future Cobalt cli runs?', true))
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

  const config = program.command('config').description('Manage Cobalt CLI settings');

  config
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

  config
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

  config
    .command('list')
    .description('Print Cobalt CLI config as JSON')
    .action(async () => {
      out(JSON.stringify(await readConfig(resolveConfigPath(env)), null, 2));
    });

  config
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

  return program;
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
