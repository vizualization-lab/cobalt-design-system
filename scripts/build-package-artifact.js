#!/usr/bin/env node
const { copyFile, mkdir, mkdtemp, readdir, rm, writeFile } = require('node:fs/promises');
const { spawnSync } = require('node:child_process');
const path = require('node:path');
const { tmpdir } = require('node:os');

const rootDir = path.resolve(__dirname, '..');
const localPacksDir = path.join(rootDir, 'local-packs');
const artifactsDir = path.join(rootDir, 'packages/docs/public/assets/artifacts/npm');
const zipPath = path.join(artifactsDir, 'cobalt-packages.zip');

const args = process.argv.slice(2);
const skipBuild = args.includes('--skip-build');
const buildPackages = args.includes('--build-packages');

if (buildPackages) {
  buildPackablePackages();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

async function main() {
  run(
    'bash',
    [
      path.join(rootDir, 'scripts/pack-local.sh'),
      ...(skipBuild || buildPackages ? ['--skip-build'] : []),
    ],
    rootDir,
  );

  await mkdir(artifactsDir, { recursive: true });

  const tempDir = await mkdtemp(path.join(tmpdir(), 'cobalt-package-artifact-'));
  const bundleDir = path.join(tempDir, 'cobalt-packages');

  try {
    await mkdir(bundleDir, { recursive: true });

    const tarballs = (await readdir(localPacksDir))
      .filter((fileName) => fileName.endsWith('.tgz'))
      .sort();

    if (tarballs.length === 0) {
      throw new Error(`No .tgz files found in ${localPacksDir}.`);
    }

    for (const tarball of tarballs) {
      await copyFile(path.join(localPacksDir, tarball), path.join(bundleDir, tarball));
    }

    await writeFile(path.join(bundleDir, 'README.md'), buildBundleReadme(tarballs));

    await rm(zipPath, { force: true });
    run('zip', ['-qr', zipPath, 'cobalt-packages'], tempDir);

    console.log(`Created ${path.relative(rootDir, zipPath)}`);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

function run(command, commandArgs, cwd) {
  const result = spawnSync(command, commandArgs, {
    cwd,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    throw new Error(`${command} ${commandArgs.join(' ')} failed with exit code ${result.status}`);
  }
}

function buildPackablePackages() {
  const filters = [
    '@cobalt/tokens',
    '@cobalt/icons',
    '@cobalt/components',
    '@cobalt/react',
    '@cobalt/vue',
    '@cobalt/angular',
    '@cobalt/cli',
  ];

  for (const filter of filters) {
    run('pnpm', ['--filter', filter, 'build'], rootDir);
  }
}

function buildBundleReadme(tarballs) {
  const list = tarballs.map((tarball) => `- ${tarball}`).join('\n');
  const cliTarball = tarballs.find((tarball) => tarball.startsWith('cobalt-cli-'));

  return `# Cobalt Packages

This folder contains locally packed Cobalt npm packages for teams that cannot install from the private Cobalt npm registry.

## Use with co new

Create a project in local package mode:

\`\`\`bash
co new my-app --cobalt-source local
\`\`\`

Copy this \`cobalt-packages\` folder into the generated project before installing dependencies:

\`\`\`bash
cp -R cobalt-packages my-app/cobalt-packages
cd my-app
pnpm install
pnpm dev
\`\`\`

Generated projects include the Cobalt agent skill at \`.codex/skills/cobalt\` and \`.claude/skills/cobalt\` by default.

## Use the included starter generator without registry access

${
  cliTarball
    ? `If you cannot install \`@cobalt/cli\` from a registry, run it from the included tarball:

\`\`\`bash
npm exec --package ./cobalt-packages/${cliTarball} -- co new my-app --cobalt-source local
\`\`\``
    : 'This bundle does not include the Cobalt CLI tarball.'
}

## Included packages

${list}
`;
}
