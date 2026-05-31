#!/usr/bin/env node
import { constants } from 'node:fs';
import { access, cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { confirm, input, select } from '@inquirer/prompts';

export const templates = ['vanilla-ts', 'react', 'vue', 'angular'];
export const cobaltSources = ['registry', 'local'];

const packageRoot = path.resolve(fileURLToPath(import.meta.url), '../..');
const localPackagesDirectory = 'cobalt-packages';
const localCobaltPackages = [
  '@cobalt/angular',
  '@cobalt/components',
  '@cobalt/icons',
  '@cobalt/react',
  '@cobalt/tokens',
  '@cobalt/vue',
];
const textFileExtensions = new Set([
  '.css',
  '.html',
  '.js',
  '.json',
  '.md',
  '.scss',
  '.ts',
  '.tsx',
  '.vue',
]);

export function parseArgs(argv) {
  const options = {
    targetDir: undefined,
    template: undefined,
    scss: undefined,
    appShell: undefined,
    cobaltSource: undefined,
    configureRegistry: undefined,
    registryUrl: undefined,
    caBundle: undefined,
    yes: false,
    help: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--help' || arg === '-h') {
      options.help = true;
      continue;
    }

    if (arg === '--yes' || arg === '-y') {
      options.yes = true;
      continue;
    }

    if (arg === '--scss') {
      options.scss = true;
      continue;
    }

    if (arg === '--no-scss') {
      options.scss = false;
      continue;
    }

    if (arg === '--app-shell') {
      options.appShell = true;
      continue;
    }

    if (arg === '--no-app-shell') {
      options.appShell = false;
      continue;
    }

    if (arg === '--configure-registry') {
      options.configureRegistry = true;
      continue;
    }

    if (arg === '--no-configure-registry') {
      options.configureRegistry = false;
      continue;
    }

    if (arg === '--template') {
      options.template = readOptionValue(argv, index, '--template');
      index += 1;
      continue;
    }

    if (arg.startsWith('--template=')) {
      options.template = arg.slice('--template='.length);
      continue;
    }

    if (arg === '--cobalt-source') {
      options.cobaltSource = readOptionValue(argv, index, '--cobalt-source');
      index += 1;
      continue;
    }

    if (arg.startsWith('--cobalt-source=')) {
      options.cobaltSource = arg.slice('--cobalt-source='.length);
      continue;
    }

    if (arg === '--registry-url') {
      options.registryUrl = readOptionValue(argv, index, '--registry-url');
      index += 1;
      continue;
    }

    if (arg.startsWith('--registry-url=')) {
      options.registryUrl = arg.slice('--registry-url='.length);
      continue;
    }

    if (arg === '--ca-bundle') {
      options.caBundle = readOptionValue(argv, index, '--ca-bundle');
      index += 1;
      continue;
    }

    if (arg.startsWith('--ca-bundle=')) {
      options.caBundle = arg.slice('--ca-bundle='.length);
      continue;
    }

    if (arg.startsWith('-')) {
      throw new Error(`Unknown option: ${arg}`);
    }

    if (options.targetDir) {
      throw new Error(`Unexpected argument: ${arg}`);
    }

    options.targetDir = arg;
  }

  return options;
}

function readOptionValue(argv, index, optionName) {
  const value = argv[index + 1];
  if (!value || value.startsWith('-')) {
    throw new Error(`Expected a value after ${optionName}.`);
  }

  return value;
}

export function normalizePackageName(name) {
  const normalized = name
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9._~-]+/g, '-')
    .replace(/^[._-]+|[._-]+$/g, '')
    .replace(/-+/g, '-');

  return normalized || 'cobalt-app';
}

export async function resolveOptions(parsed, prompts = {}) {
  if (parsed.help) {
    return parsed;
  }

  if (parsed.template !== undefined && !templates.includes(parsed.template)) {
    throw new Error(
      `Unknown template "${parsed.template}". Choose one of: ${templates.join(', ')}.`,
    );
  }

  if (parsed.cobaltSource !== undefined && !cobaltSources.includes(parsed.cobaltSource)) {
    throw new Error(
      `Unknown Cobalt package source "${parsed.cobaltSource}". Choose one of: ${cobaltSources.join(
        ', ',
      )}.`,
    );
  }

  if (parsed.yes) {
    const cobaltSource = parsed.cobaltSource ?? 'registry';
    const configureRegistry =
      cobaltSource === 'registry' ? (parsed.configureRegistry ?? false) : false;

    if (configureRegistry && (!parsed.registryUrl || !parsed.caBundle)) {
      throw new Error(
        'Registry configuration requires both --registry-url and --ca-bundle when --yes is used.',
      );
    }

    return {
      targetDir: parsed.targetDir ?? 'cobalt-app',
      template: parsed.template ?? 'vanilla-ts',
      scss: parsed.scss ?? false,
      appShell: parsed.appShell ?? false,
      cobaltSource,
      configureRegistry,
      registryUrl: parsed.registryUrl,
      caBundle: parsed.caBundle,
      yes: true,
    };
  }

  const targetDir = parsed.targetDir ?? (await prompts.text('Project name', 'cobalt-app'));
  const template = parsed.template ?? (await prompts.select('Template', templates, 'vanilla-ts'));
  const scss = parsed.scss ?? (await prompts.confirm('Use SCSS and Cobalt Sass helpers?', false));
  const appShell =
    parsed.appShell ?? (await prompts.confirm('Use the Cobalt app shell pattern?', false));
  const cobaltSource =
    parsed.cobaltSource ??
    (await prompts.select('Cobalt package source', cobaltSources, 'registry'));

  if (!templates.includes(template)) {
    throw new Error(`Unknown template "${template}". Choose one of: ${templates.join(', ')}.`);
  }

  if (!cobaltSources.includes(cobaltSource)) {
    throw new Error(
      `Unknown Cobalt package source "${cobaltSource}". Choose one of: ${cobaltSources.join(
        ', ',
      )}.`,
    );
  }

  const configureRegistry =
    cobaltSource === 'registry'
      ? (parsed.configureRegistry ??
        (await prompts.confirm('Configure npm registry for @cobalt packages now?', false)))
      : false;

  let registryUrl = parsed.registryUrl;
  let caBundle = parsed.caBundle;

  if (configureRegistry) {
    registryUrl =
      registryUrl ??
      (await prompts.text('Cobalt npm registry URL', 'https://registry.example.com'));
    caBundle = caBundle ?? (await prompts.text('Path to CA bundle', '/path/to/ca-bundle.pem'));

    if (!registryUrl || !caBundle) {
      throw new Error('Registry configuration requires both a registry URL and CA bundle path.');
    }
  }

  return {
    targetDir,
    template,
    scss,
    appShell,
    cobaltSource,
    configureRegistry,
    registryUrl,
    caBundle,
    yes: false,
  };
}

export async function scaffoldProject(options, root = packageRoot) {
  const templateDir = path.join(root, 'templates', options.template);
  const targetDir = path.resolve(process.cwd(), options.targetDir);
  const targetBaseName = path.basename(targetDir);

  await assertWritableTarget(targetDir);
  await cp(templateDir, targetDir, { recursive: true });

  const variant = options.appShell ? 'app-shell' : 'base';
  await cp(path.join(targetDir, '_variants', variant), targetDir, {
    recursive: true,
    force: true,
  });
  await rm(path.join(targetDir, '_variants'), { recursive: true, force: true });

  await applyStyleChoice(targetDir, options.scss);
  await writeGitignore(targetDir);
  await writeProjectReadme(targetDir, {
    template: options.template,
    scss: options.scss,
    appShell: options.appShell,
    cobaltSource: options.cobaltSource ?? 'registry',
  });
  await updatePackageJson(
    targetDir,
    normalizePackageName(targetBaseName),
    await getCreatorVersion(root),
    {
      scss: options.scss,
      cobaltSource: options.cobaltSource ?? 'registry',
    },
  );
  await applyPackageSourceChoice(targetDir, {
    cobaltSource: options.cobaltSource ?? 'registry',
    configureRegistry: options.configureRegistry ?? false,
    registryUrl: options.registryUrl,
    caBundle: options.caBundle,
    version: await getCreatorVersion(root),
  });

  return targetDir;
}

export function usage() {
  return `Usage: npm create cobalt [project-name] -- [options]

Options:
  --template <name>     Template to use: ${templates.join(', ')}
  --scss               Include SCSS and Cobalt Sass helper setup
  --no-scss            Use plain CSS
  --app-shell          Use the Cobalt app shell pattern
  --no-app-shell       Use the base page layout
  --cobalt-source      Cobalt package source: ${cobaltSources.join(', ')}
  --configure-registry Create a project .npmrc from the registry prompts
  --no-configure-registry
                       Keep the .npmrc.example file without creating .npmrc
  --registry-url       Cobalt npm registry URL
  --ca-bundle          Path to the CA bundle used for the Cobalt registry
  --yes, -y            Accept defaults for omitted options
  --help, -h           Show this help message

Examples:
  npm create cobalt
  npm create cobalt my-app -- --template react --scss --app-shell --configure-registry --registry-url https://registry.example.com --ca-bundle /path/to/ca.pem
  npm create cobalt my-vue-app -- --template vue --no-scss --no-app-shell --cobalt-source local`;
}

async function assertWritableTarget(targetDir) {
  try {
    const targetStat = await stat(targetDir);
    if (!targetStat.isDirectory()) {
      throw new Error(`Target exists and is not a directory: ${targetDir}`);
    }

    const entries = await readdir(targetDir);
    if (entries.length > 0) {
      throw new Error(`Target directory is not empty: ${targetDir}`);
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    await mkdir(targetDir, { recursive: true });
  }

  await access(path.dirname(targetDir), constants.W_OK);
}

async function applyStyleChoice(targetDir, useScss) {
  const unusedStyle = path.join(targetDir, 'src', useScss ? 'styles.css' : 'styles.scss');
  await rm(unusedStyle, { force: true });

  if (useScss) {
    await replaceInTextFiles(targetDir, (contents) =>
      contents
        .replaceAll('./styles.css', './styles.scss')
        .replaceAll('src/styles.css', 'src/styles.scss'),
    );
  }
}

async function updatePackageJson(targetDir, name, version, { scss, cobaltSource }) {
  const packageJsonPath = path.join(targetDir, 'package.json');
  const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'));
  const cobaltVersion = cobaltSource === 'local' ? undefined : `^${version}`;

  packageJson.name = name;

  for (const section of ['dependencies', 'devDependencies']) {
    if (!packageJson[section]) continue;

    for (const dependencyName of Object.keys(packageJson[section])) {
      if (dependencyName.startsWith('@cobalt/')) {
        packageJson[section][dependencyName] =
          cobaltSource === 'local' ? localTarballSpecifier(dependencyName, version) : cobaltVersion;
      }
    }
  }

  if (scss) {
    packageJson.devDependencies = {
      ...packageJson.devDependencies,
      sass: packageJson.devDependencies?.sass ?? '^1.99.0',
    };
  }

  if (cobaltSource === 'local') {
    const localOverrides = Object.fromEntries(
      localCobaltPackages.map((packageName) => [
        packageName,
        localTarballSpecifier(packageName, version),
      ]),
    );

    packageJson.overrides = {
      ...packageJson.overrides,
      ...localOverrides,
    };

    packageJson.pnpm = {
      ...packageJson.pnpm,
      overrides: {
        ...packageJson.pnpm?.overrides,
        ...localOverrides,
      },
    };
  }

  await writeFile(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);
}

function localTarballSpecifier(packageName, version) {
  return `file:./${localPackagesDirectory}/${localTarballName(packageName, version)}`;
}

function localTarballName(packageName, version) {
  const unscopedName = packageName.replace('@cobalt/', 'cobalt-');
  return `${unscopedName}-${version}.tgz`;
}

async function getCreatorVersion(root) {
  const packageJson = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
  return packageJson.version;
}

async function replaceInTextFiles(directory, replace) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await replaceInTextFiles(entryPath, replace);
      continue;
    }

    if (!textFileExtensions.has(path.extname(entry.name))) {
      continue;
    }

    const current = await readFile(entryPath, 'utf8');
    const next = replace(current);

    if (next !== current) {
      await writeFile(entryPath, next);
    }
  }
}

function createPrompts() {
  return {
    async text(label, defaultValue) {
      return input({
        message: label,
        default: defaultValue,
      });
    },
    async select(label, choices, defaultValue) {
      return select({
        message: label,
        choices: choices.map((choice) => ({ name: choice, value: choice })),
        default: defaultValue,
      });
    },
    async confirm(label, defaultValue) {
      return confirm({
        message: label,
        default: defaultValue,
      });
    },
  };
}

async function applyPackageSourceChoice(
  targetDir,
  { cobaltSource, configureRegistry, registryUrl, caBundle, version },
) {
  if (cobaltSource === 'local') {
    await writeLocalPackagesReadme(targetDir, version);
    return;
  }

  if (!configureRegistry) {
    return;
  }

  const npmrcExamplePath = path.join(targetDir, '.npmrc.example');
  const npmrcTemplate = await readFile(npmrcExamplePath, 'utf8');
  const npmrc = npmrcTemplate
    .replaceAll('%REGISTRY_URL%', registryUrl)
    .replaceAll('%CA_BUNDLE_PATH%', caBundle);

  await writeFile(path.join(targetDir, '.npmrc'), npmrc);
  await rm(npmrcExamplePath, { force: true });
}

async function writeGitignore(targetDir) {
  await writeFile(
    path.join(targetDir, '.gitignore'),
    `# Dependencies
node_modules/

# Build output
dist/
build/
.angular/
.vite/

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Environment
.env
.env.*
!.env.example

# Local Cobalt tarballs
${localPackagesDirectory}/*.tgz

# macOS
.DS_Store
._*
.AppleDouble
.Spotlight-V100
.Trashes
`,
  );
}

async function writeProjectReadme(targetDir, { template, scss, appShell, cobaltSource }) {
  const title = path.basename(targetDir);
  const frameworkLabel = {
    'vanilla-ts': 'Vanilla TypeScript',
    react: 'React',
    vue: 'Vue',
    angular: 'Angular',
  }[template];

  const localInstallNote =
    cobaltSource === 'local'
      ? `\n## Local Cobalt Packages\n\nThis project is configured to install Cobalt packages from local tarballs. Before installing dependencies, copy every \`cobalt-*.tgz\` file created by \`pnpm pack:local\` in the Cobalt repo into \`./${localPackagesDirectory}/\`.\n`
      : '';

  await writeFile(
    path.join(targetDir, 'README.md'),
    `# ${title}

${frameworkLabel} starter generated by \`npm create cobalt\`.

${appShell ? 'This project includes the Cobalt app shell starter layout.' : 'This project includes the base Cobalt starter layout.'}
${scss ? 'SCSS and Cobalt Sass helpers are enabled.' : 'Plain CSS is enabled.'}
${localInstallNote}
## Install

\`\`\`bash
npm install
\`\`\`

## Develop

\`\`\`bash
npm run dev
\`\`\`

## Build

\`\`\`bash
npm run build
\`\`\`
`,
  );
}

async function writeLocalPackagesReadme(targetDir, version) {
  const localPackagesPath = path.join(targetDir, localPackagesDirectory);
  await mkdir(localPackagesPath, { recursive: true });
  await writeFile(
    path.join(localPackagesPath, 'README.md'),
    `# Local Cobalt packages

This project is configured to install Cobalt from local tarballs.

1. In the Cobalt repository, run:

   \`\`\`bash
   pnpm pack:local
   \`\`\`

2. Copy the generated tarballs into this folder:

   \`\`\`bash
   cp /path/to/design-system-poc/local-packs/cobalt-*.tgz ./${localPackagesDirectory}/
   \`\`\`

3. Install dependencies from the project root:

   \`\`\`bash
   npm install
   \`\`\`

Expected Cobalt tarballs for version ${version}:

${localCobaltPackages
  .map((packageName) => `- \`${localTarballName(packageName, version)}\``)
  .join('\n')}
`,
  );
}

function nextCommands(targetDir, options) {
  const relativeTarget = path.relative(process.cwd(), targetDir) || '.';
  const lines = [];

  if (relativeTarget !== '.') {
    lines.push(`cd ${shellQuote(relativeTarget)}`);
  }

  if (options.cobaltSource === 'local') {
    lines.push(`copy cobalt-*.tgz files into ./${localPackagesDirectory}/`);
  }

  lines.push('npm install', 'npm run dev');
  return lines;
}

function shellQuote(value) {
  if (/^[\w./-]+$/.test(value)) {
    return value;
  }

  return `'${value.replaceAll("'", "'\\''")}'`;
}

export async function main(argv = process.argv.slice(2)) {
  try {
    const parsed = parseArgs(argv);
    if (parsed.help) {
      console.log(usage());
      return;
    }

    const options = await resolveOptions(parsed, createPrompts());
    const targetDir = await scaffoldProject(options);

    console.log(`\nCreated ${path.basename(targetDir)} with the ${options.template} template.`);
    console.log('\nNext steps:');
    for (const command of nextCommands(targetDir, options)) {
      console.log(`  ${command}`);
    }
  } catch (error) {
    console.error(`\n${error.message}`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
