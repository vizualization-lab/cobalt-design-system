import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import test from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

import {
  normalizePackageName,
  parseArgs,
  resolveOptions,
  scaffoldProject,
} from '../bin/create-cobalt.js';

const packageRoot = path.resolve(fileURLToPath(import.meta.url), '../..');
const frameworkTemplateFiles = [
  'templates/react/_variants/base/src/App.tsx',
  'templates/react/_variants/app-shell/src/App.tsx',
  'templates/vue/_variants/base/src/App.vue',
  'templates/vue/_variants/app-shell/src/App.vue',
  'templates/angular/_variants/base/src/app/app.component.ts',
  'templates/angular/_variants/app-shell/src/app/app.component.ts',
];

test('parses template, scss, and app shell flags', () => {
  assert.deepEqual(
    parseArgs([
      'my-app',
      '--template',
      'react',
      '--scss',
      '--app-shell',
      '--cobalt-source',
      'registry',
      '--configure-registry',
      '--registry-url',
      'https://registry.example.com',
      '--ca-bundle',
      '/path/to/ca.pem',
    ]),
    {
      targetDir: 'my-app',
      template: 'react',
      scss: true,
      appShell: true,
      cobaltSource: 'registry',
      configureRegistry: true,
      registryUrl: 'https://registry.example.com',
      caBundle: '/path/to/ca.pem',
      yes: false,
      help: false,
    },
  );
});

test('rejects unknown templates before scaffolding', async () => {
  await assert.rejects(
    () => resolveOptions(parseArgs(['--template', 'svelte', '--yes'])),
    /Unknown template "svelte"/,
  );
});

test('rejects unknown package sources before scaffolding', async () => {
  await assert.rejects(
    () => resolveOptions(parseArgs(['--cobalt-source', 'cdn', '--yes'])),
    /Unknown Cobalt package source "cdn"/,
  );
});

test('requires registry details in non-interactive registry setup', async () => {
  await assert.rejects(
    () => resolveOptions(parseArgs(['--configure-registry', '--yes'])),
    /requires both --registry-url and --ca-bundle/,
  );
});

test('normalizes the generated package name from the target directory', () => {
  assert.equal(normalizePackageName('Cobalt Starter_App'), 'cobalt-starter-app');
});

test('framework templates use component subpath imports', async () => {
  for (const file of frameworkTemplateFiles) {
    const contents = await readFile(path.join(packageRoot, file), 'utf8');

    assert.doesNotMatch(contents, /from ['"]@cobalt\/(?:react|vue|angular)['"]/);
  }
});

test('scaffolds a base vanilla TypeScript project', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'create-cobalt-'));
  const cwd = process.cwd();

  try {
    process.chdir(tempDir);
    const targetDir = await scaffoldProject(
      { targetDir: 'Starter App', template: 'vanilla-ts', scss: false, appShell: false },
      packageRoot,
    );
    const html = await readFile(path.join(targetDir, 'index.html'), 'utf8');
    const main = await readFile(path.join(targetDir, 'src', 'main.ts'), 'utf8');
    const packageJson = JSON.parse(await readFile(path.join(targetDir, 'package.json'), 'utf8'));
    const srcEntries = await readdir(path.join(targetDir, 'src'));

    assert.equal(packageJson.name, 'starter-app');
    assert.equal(packageJson.dependencies['@cobalt/components'], '^0.1.0');
    assert.match(html, /<main class="starter-page">/);
    assert.match(html, /<co-banner label="Cobalt starter banner">/);
    assert.doesNotMatch(html, /<div id="app"><\/div>/);
    assert.doesNotMatch(main, /innerHTML/);
    assert.doesNotMatch(main, /<co-banner/);
    assert.doesNotMatch(main, /co-app-shell/);
    assert.deepEqual(srcEntries.includes('styles.css'), true);
    assert.deepEqual(srcEntries.includes('styles.scss'), false);

    const gitignore = await readFile(path.join(targetDir, '.gitignore'), 'utf8');
    const readme = await readFile(path.join(targetDir, 'README.md'), 'utf8');
    const npmrcExample = await readFile(path.join(targetDir, '.npmrc.example'), 'utf8');

    assert.match(gitignore, /node_modules\//);
    assert.match(gitignore, /dist\//);
    assert.match(gitignore, /cobalt-packages\/\*\.tgz/);
    assert.match(readme, /npm run dev/);
    assert.match(readme, /npm run build/);
    assert.match(npmrcExample, /%REGISTRY_URL%/);
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('scaffolds a vanilla TypeScript app shell project with static HTML', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'create-cobalt-'));
  const cwd = process.cwd();

  try {
    process.chdir(tempDir);
    const targetDir = await scaffoldProject(
      { targetDir: 'vanilla-shell', template: 'vanilla-ts', scss: false, appShell: true },
      packageRoot,
    );
    const html = await readFile(path.join(targetDir, 'index.html'), 'utf8');
    const main = await readFile(path.join(targetDir, 'src', 'main.ts'), 'utf8');

    assert.match(html, /<co-app-shell rail-width="96px" drawer-width="260px">/);
    assert.match(html, /<co-nav-drawer slot="drawer"/);
    assert.match(html, /<co-mode-toggle slot="avatar" storage-namespace="cobalt-starter">/);
    assert.doesNotMatch(main, /innerHTML/);
    assert.doesNotMatch(main, /<co-app-shell/);
    assert.match(main, /@cobalt\/components\/app-shell/);
    assert.match(main, /@cobalt\/components\/mode-toggle/);
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('scaffolds an app shell React project with SCSS', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'create-cobalt-'));
  const cwd = process.cwd();

  try {
    process.chdir(tempDir);
    const targetDir = await scaffoldProject(
      { targetDir: 'react-shell', template: 'react', scss: true, appShell: true },
      packageRoot,
    );
    const app = await readFile(path.join(targetDir, 'src', 'App.tsx'), 'utf8');
    const styles = await readFile(path.join(targetDir, 'src', 'styles.scss'), 'utf8');
    const packageJson = JSON.parse(await readFile(path.join(targetDir, 'package.json'), 'utf8'));

    assert.match(app, /CoAppShell/);
    assert.match(app, /CoNavDrawer/);
    assert.match(app, /CoModeToggle/);
    assert.match(app, /@cobalt\/react\/app-shell/);
    assert.doesNotMatch(app, /from '@cobalt\/react'/);
    assert.match(styles, /@use '@cobalt\/tokens\/scss' as co;/);
    assert.equal(packageJson.devDependencies.sass, '^1.99.0');
    assert.equal(packageJson.dependencies['@cobalt/react'], '^0.1.0');
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('writes .npmrc and removes .npmrc.example when registry configuration is provided', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'create-cobalt-'));
  const cwd = process.cwd();

  try {
    process.chdir(tempDir);
    const targetDir = await scaffoldProject(
      {
        targetDir: 'registry-app',
        template: 'vue',
        scss: false,
        appShell: false,
        cobaltSource: 'registry',
        configureRegistry: true,
        registryUrl: 'https://registry.example.com/npm/',
        caBundle: '/etc/ssl/cobalt.pem',
      },
      packageRoot,
    );

    const npmrc = await readFile(path.join(targetDir, '.npmrc'), 'utf8');

    assert.match(npmrc, /@cobalt:registry=https:\/\/registry\.example\.com\/npm\//);
    assert.match(npmrc, /cafile=\/etc\/ssl\/cobalt\.pem/);
    await assert.rejects(() => readFile(path.join(targetDir, '.npmrc.example'), 'utf8'), {
      code: 'ENOENT',
    });
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('scaffolds a local tarball project with package overrides and copy instructions', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'create-cobalt-'));
  const cwd = process.cwd();

  try {
    process.chdir(tempDir);
    const targetDir = await scaffoldProject(
      {
        targetDir: 'local-app',
        template: 'react',
        scss: false,
        appShell: false,
        cobaltSource: 'local',
      },
      packageRoot,
    );

    const packageJson = JSON.parse(await readFile(path.join(targetDir, 'package.json'), 'utf8'));
    const localReadme = await readFile(
      path.join(targetDir, 'cobalt-packages', 'README.md'),
      'utf8',
    );
    const projectReadme = await readFile(path.join(targetDir, 'README.md'), 'utf8');
    const npmrcExample = await readFile(path.join(targetDir, '.npmrc.example'), 'utf8');

    assert.equal(
      packageJson.dependencies['@cobalt/react'],
      'file:./cobalt-packages/cobalt-react-0.1.0.tgz',
    );
    assert.equal(
      packageJson.overrides['@cobalt/components'],
      'file:./cobalt-packages/cobalt-components-0.1.0.tgz',
    );
    assert.equal(
      packageJson.pnpm.overrides['@cobalt/components'],
      'file:./cobalt-packages/cobalt-components-0.1.0.tgz',
    );
    assert.match(localReadme, /copy the generated tarballs/i);
    assert.match(projectReadme, /Local Cobalt Packages/);
    assert.match(npmrcExample, /%REGISTRY_URL%/);
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('aborts when the target directory is not empty', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'create-cobalt-'));
  const cwd = process.cwd();

  try {
    process.chdir(tempDir);
    await writeFile(path.join(tempDir, 'existing.txt'), 'content');
    await assert.rejects(
      () =>
        scaffoldProject(
          { targetDir: '.', template: 'vue', scss: false, appShell: false },
          packageRoot,
        ),
      /Target directory is not empty/,
    );
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});
