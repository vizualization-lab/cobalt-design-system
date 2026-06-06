import { constants } from 'node:fs';
import { access, cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { localCobaltPackages, localPackagesDirectory, textFileExtensions } from './constants.js';
import {
  getPackageVersion,
  localTarballName,
  normalizePackageName,
  updatePackageJson,
} from './package-json.js';
import type { ResolvedNewOptions } from './types.js';

export async function scaffoldProject(options: ResolvedNewOptions, root: string): Promise<string> {
  const templateDir = path.join(root, 'templates', options.template);
  const targetDir = path.resolve(process.cwd(), options.targetDir);
  const targetBaseName = path.basename(targetDir);
  const version = await getPackageVersion(root);

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
    cobaltSource: options.cobaltSource,
  });
  await updatePackageJson(targetDir, normalizePackageName(targetBaseName), version, {
    scss: options.scss,
    cobaltSource: options.cobaltSource,
  });
  await applyPackageSourceChoice(targetDir, {
    cobaltSource: options.cobaltSource,
    configureRegistry: options.configureRegistry,
    registryUrl: options.registryUrl,
    caBundle: options.caBundle,
    version,
  });

  return targetDir;
}

async function assertWritableTarget(targetDir: string): Promise<void> {
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
    if (!isNodeError(error) || error.code !== 'ENOENT') {
      throw error;
    }
    await mkdir(targetDir, { recursive: true });
  }

  await access(path.dirname(targetDir), constants.W_OK);
}

async function applyStyleChoice(targetDir: string, useScss: boolean): Promise<void> {
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

async function replaceInTextFiles(
  directory: string,
  replace: (contents: string) => string,
): Promise<void> {
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

async function applyPackageSourceChoice(
  targetDir: string,
  {
    cobaltSource,
    configureRegistry,
    registryUrl,
    caBundle,
    version,
  }: {
    cobaltSource: ResolvedNewOptions['cobaltSource'];
    configureRegistry: boolean;
    registryUrl?: string;
    caBundle?: string;
    version: string;
  },
): Promise<void> {
  if (cobaltSource === 'local') {
    await writeLocalPackagesReadme(targetDir, version);
    return;
  }

  if (!configureRegistry) {
    return;
  }

  if (!registryUrl) {
    throw new Error('Registry configuration requires a registry URL.');
  }

  const npmrcExamplePath = path.join(targetDir, '.npmrc.example');
  const npmrc = [`@cobalt:registry=${registryUrl}`, caBundle ? `cafile=${caBundle}` : undefined]
    .filter(Boolean)
    .join('\n');

  await writeFile(path.join(targetDir, '.npmrc'), `${npmrc}\n`);
  await rm(npmrcExamplePath, { force: true });
}

async function writeGitignore(targetDir: string): Promise<void> {
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

async function writeProjectReadme(
  targetDir: string,
  {
    template,
    scss,
    appShell,
    cobaltSource,
  }: Pick<ResolvedNewOptions, 'template' | 'scss' | 'appShell' | 'cobaltSource'>,
): Promise<void> {
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

${frameworkLabel} starter generated by \`co new\`.

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

async function writeLocalPackagesReadme(targetDir: string, version: string): Promise<void> {
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

   \`\`\`sh
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

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && 'code' in error;
}
