import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import test from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

import { createProgram } from '../dist/cli.js';
import { getConfigValue, readConfig, setConfigValue, unsetConfigValue } from '../dist/config.js';
import { resolveOptions } from '../dist/options.js';
import { normalizePackageName } from '../dist/package-json.js';
import { scaffoldProject } from '../dist/scaffold.js';
import { renderStartupArt } from '../dist/startup-art.js';

const packageRoot = path.resolve(fileURLToPath(import.meta.url), '../..');
const prompts = {
  async text(_label, defaultValue) {
    return defaultValue;
  },
  async select(_label, _choices, defaultValue) {
    return defaultValue;
  },
  async confirm(_label, defaultValue) {
    return defaultValue;
  },
};

function scriptedPrompts({ text = {}, select = {}, confirm = {} } = {}) {
  return {
    async text(label, defaultValue) {
      return text[label] ?? defaultValue;
    },
    async select(label, _choices, defaultValue) {
      return select[label] ?? defaultValue;
    },
    async confirm(label, defaultValue) {
      return confirm[label] ?? defaultValue;
    },
  };
}

const frameworkTemplateFiles = [
  'templates/react/_variants/base/src/App.tsx',
  'templates/react/_variants/app-shell/src/App.tsx',
  'templates/vue/_variants/base/src/App.vue',
  'templates/vue/_variants/app-shell/src/App.vue',
  'templates/angular/_variants/base/src/app/app.component.ts',
  'templates/angular/_variants/app-shell/src/app/app.component.ts',
];

test('co exposes new and config subcommands', () => {
  const program = createProgram();
  const rootHelp = program.helpInformation();
  const newCommand = program.commands.find((command) => command.name() === 'new');
  const configCommand = program.commands.find((command) => command.name() === 'config');

  assert.match(rootHelp, /Usage: co/);
  assert.match(rootHelp, /new/);
  assert.match(rootHelp, /config/);
  assert.match(newCommand.helpInformation(), /--template <name>/);
  assert.match(newCommand.helpInformation(), /--app-shell/);
  assert.match(configCommand.helpInformation(), /set/);
  assert.match(configCommand.helpInformation(), /unset/);
});

test('startup art includes Cobalt and the CLI version', () => {
  const plain = renderStartupArt({ version: '0.1.0' });
  const color = renderStartupArt({ version: '0.1.0', color: true });

  assert.match(plain, /COBALT/);
  assert.match(plain, /@cobalt\/cli v0\.1\.0/);
  assert.doesNotMatch(plain, /\u001B\[/);
  assert.match(color, /\u001B\[/);
});

test('help output includes startup art unless disabled', () => {
  const withArt = createProgram({ argv: ['--help'], isTty: false }).helpInformation();
  const withoutArt = createProgram({
    argv: ['--no-art', '--help'],
    isTty: false,
  }).helpInformation();

  assert.match(withArt, /COBALT/);
  assert.match(withArt, /@cobalt\/cli v0\.1\.0/);
  assert.doesNotMatch(withoutArt, /COBALT/);
  assert.doesNotMatch(withoutArt, /@cobalt\/cli v0\.1\.0/);
});

test('running co without arguments prints startup art and help', async () => {
  const output = [];
  const program = createProgram({
    argv: [],
    isTty: false,
    out: (message = '') => output.push(message),
  });

  await program.parseAsync([], { from: 'user' });

  assert.match(output.join('\n'), /COBALT/);
  assert.match(output.join('\n'), /Usage: co/);
});

test('package binary points to the compiled CLI entrypoint', async () => {
  const packageJson = JSON.parse(await readFile(path.join(packageRoot, 'package.json'), 'utf8'));

  assert.equal(packageJson.bin.co, 'dist/cli.js');
  assert.equal(packageJson.main, 'dist/cli.js');
  assert.equal(packageJson.types, 'dist/cli.d.ts');
});

test('resolves template, scss, and app shell options', async () => {
  assert.deepEqual(
    await resolveOptions(
      {
        targetDir: 'my-app',
        template: 'react',
        scss: true,
        appShell: true,
        cobaltSource: 'registry',
        configureRegistry: true,
        registryUrl: 'https://registry.example.com',
        caBundle: '/path/to/ca.pem',
        yes: true,
      },
      prompts,
    ),
    {
      targetDir: 'my-app',
      template: 'react',
      scss: true,
      appShell: true,
      cobaltSource: 'registry',
      configureRegistry: true,
      registryUrl: 'https://registry.example.com',
      caBundle: '/path/to/ca.pem',
      yes: true,
    },
  );
});

test('rejects unknown templates before scaffolding', async () => {
  await assert.rejects(
    () => resolveOptions({ template: 'svelte', yes: true }, prompts),
    /Unknown template "svelte"/,
  );
});

test('rejects unknown package sources before scaffolding', async () => {
  await assert.rejects(
    () => resolveOptions({ cobaltSource: 'cdn', yes: true }, prompts),
    /Unknown Cobalt package source "cdn"/,
  );
});

test('requires registry URL in non-interactive registry setup', async () => {
  await assert.rejects(
    () => resolveOptions({ configureRegistry: true, yes: true }, prompts),
    /requires --registry-url or registry.url config/,
  );
});

test('uses saved registry config for non-interactive scaffolding', async () => {
  assert.deepEqual(
    await resolveOptions({ targetDir: 'configured-app', yes: true }, prompts, {
      registry: { url: 'https://registry.example.com/npm/', caBundle: '/etc/cobalt.pem' },
    }),
    {
      targetDir: 'configured-app',
      template: 'vanilla-ts',
      scss: false,
      appShell: false,
      cobaltSource: 'registry',
      configureRegistry: true,
      registryUrl: 'https://registry.example.com/npm/',
      caBundle: '/etc/cobalt.pem',
      yes: true,
    },
  );
});

test('sets, gets, and unsets supported config values', () => {
  const first = setConfigValue({}, 'registry.url', 'https://registry.example.com/npm/');
  const second = setConfigValue(first, 'registry.caBundle', '/etc/cobalt.pem');

  assert.equal(getConfigValue(second, 'registry.url'), 'https://registry.example.com/npm/');
  assert.equal(getConfigValue(second, 'registry.caBundle'), '/etc/cobalt.pem');
  assert.equal(
    getConfigValue(unsetConfigValue(second, 'registry.caBundle'), 'registry.caBundle'),
    undefined,
  );
});

test('config command writes user config JSON', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const configPath = path.join(tempDir, '.cobalt.config.json');
  const output = [];

  try {
    const program = createProgram({
      env: { COBALT_CONFIG: configPath },
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(
      ['config', 'set', 'registry.url', 'https://registry.example.com/npm/'],
      { from: 'user' },
    );
    await program.parseAsync(['config', 'set', 'registry.caBundle', '/etc/cobalt.pem'], {
      from: 'user',
    });

    const config = await readConfig(configPath);
    assert.equal(config.registry.url, 'https://registry.example.com/npm/');
    assert.equal(config.registry.caBundle, '/etc/cobalt.pem');
    assert.match(output.join('\n'), /registry.url saved/);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('co new writes project .npmrc from saved config', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const configPath = path.join(tempDir, '.cobalt.config.json');
  const cwd = process.cwd();

  try {
    await writeFile(
      configPath,
      JSON.stringify(
        { registry: { url: 'https://registry.example.com/npm/', caBundle: '/etc/cobalt.pem' } },
        null,
        2,
      ),
    );

    process.chdir(tempDir);
    const program = createProgram({
      root: packageRoot,
      env: { COBALT_CONFIG: configPath },
      out: () => {},
    });

    await program.parseAsync(['new', 'configured-app', '--yes'], { from: 'user' });

    const npmrc = await readFile(path.join(tempDir, 'configured-app', '.npmrc'), 'utf8');
    assert.match(npmrc, /@cobalt:registry=https:\/\/registry\.example\.com\/npm\//);
    assert.match(npmrc, /cafile=\/etc\/cobalt\.pem/);
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('co new saves prompted registry settings when confirmed', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const configPath = path.join(tempDir, '.cobalt.config.json');
  const cwd = process.cwd();

  try {
    process.chdir(tempDir);
    const program = createProgram({
      root: packageRoot,
      env: { COBALT_CONFIG: configPath },
      prompts: scriptedPrompts({
        text: {
          'Cobalt npm registry URL': 'https://registry.example.com/npm/',
          'Path to CA bundle (optional)': '/etc/cobalt.pem',
        },
        confirm: {
          'Configure npm registry for @cobalt packages now?': true,
          'Save registry settings for future co new runs?': true,
        },
      }),
      out: () => {},
    });

    await program.parseAsync(['new', 'saved-registry'], { from: 'user' });

    const config = await readConfig(configPath);
    const npmrc = await readFile(path.join(tempDir, 'saved-registry', '.npmrc'), 'utf8');

    assert.equal(config.registry.url, 'https://registry.example.com/npm/');
    assert.equal(config.registry.caBundle, '/etc/cobalt.pem');
    assert.match(npmrc, /@cobalt:registry=https:\/\/registry\.example\.com\/npm\//);
    assert.match(npmrc, /cafile=\/etc\/cobalt\.pem/);
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('co new leaves config unchanged when prompted registry save is declined', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const configPath = path.join(tempDir, '.cobalt.config.json');
  const cwd = process.cwd();

  try {
    await writeFile(
      configPath,
      JSON.stringify({ registry: { url: 'https://old.example.com/npm/' } }, null, 2),
    );

    process.chdir(tempDir);
    const program = createProgram({
      root: packageRoot,
      env: { COBALT_CONFIG: configPath },
      prompts: scriptedPrompts({
        text: {
          'Cobalt npm registry URL': 'https://new.example.com/npm/',
          'Path to CA bundle (optional)': '',
        },
        confirm: {
          'Save registry settings for future co new runs?': false,
        },
      }),
      out: () => {},
    });

    await program.parseAsync(['new', 'declined-registry'], { from: 'user' });

    const config = await readConfig(configPath);
    const npmrc = await readFile(path.join(tempDir, 'declined-registry', '.npmrc'), 'utf8');

    assert.equal(config.registry.url, 'https://old.example.com/npm/');
    assert.match(npmrc, /@cobalt:registry=https:\/\/new\.example\.com\/npm\//);
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('co new does not ask to save unchanged registry settings', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const configPath = path.join(tempDir, '.cobalt.config.json');
  const cwd = process.cwd();
  const confirmLabels = [];

  try {
    await writeFile(
      configPath,
      JSON.stringify(
        { registry: { url: 'https://registry.example.com/npm/', caBundle: '/etc/cobalt.pem' } },
        null,
        2,
      ),
    );

    process.chdir(tempDir);
    const program = createProgram({
      root: packageRoot,
      env: { COBALT_CONFIG: configPath },
      prompts: {
        ...scriptedPrompts({
          text: {
            'Cobalt npm registry URL': 'https://registry.example.com/npm/',
            'Path to CA bundle (optional)': '/etc/cobalt.pem',
          },
        }),
        async confirm(label, defaultValue) {
          confirmLabels.push(label);
          return defaultValue;
        },
      },
      out: () => {},
    });

    await program.parseAsync(['new', 'unchanged-registry'], { from: 'user' });

    assert.deepEqual(
      confirmLabels.filter((label) => label === 'Save registry settings for future co new runs?'),
      [],
    );
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('interactive co new prints startup art before prompting', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const cwd = process.cwd();
  const output = [];

  try {
    process.chdir(tempDir);
    const program = createProgram({
      argv: ['new', 'interactive-art'],
      root: packageRoot,
      prompts,
      isTty: false,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(['new', 'interactive-art'], { from: 'user' });

    assert.match(output.join('\n'), /COBALT/);
    assert.match(output.join('\n'), /@cobalt\/cli v0\.1\.0/);
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('non-interactive co new omits startup art', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const cwd = process.cwd();
  const output = [];

  try {
    process.chdir(tempDir);
    const program = createProgram({
      argv: ['new', 'quiet-art', '--yes'],
      root: packageRoot,
      isTty: false,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(['new', 'quiet-art', '--yes'], { from: 'user' });

    assert.doesNotMatch(output.join('\n'), /COBALT/);
    assert.match(output.join('\n'), /Created quiet-art/);
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('fully flag-driven co new omits startup art', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const cwd = process.cwd();
  const output = [];

  try {
    process.chdir(tempDir);
    const program = createProgram({
      argv: [
        'new',
        'flag-art',
        '--template',
        'react',
        '--no-scss',
        '--no-app-shell',
        '--cobalt-source',
        'registry',
        '--no-configure-registry',
      ],
      root: packageRoot,
      isTty: false,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(
      [
        'new',
        'flag-art',
        '--template',
        'react',
        '--no-scss',
        '--no-app-shell',
        '--cobalt-source',
        'registry',
        '--no-configure-registry',
      ],
      { from: 'user' },
    );

    assert.doesNotMatch(output.join('\n'), /COBALT/);
    assert.match(output.join('\n'), /Created flag-art/);
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('config command omits startup art during normal execution', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const configPath = path.join(tempDir, '.cobalt.config.json');
  const output = [];

  try {
    await writeFile(configPath, JSON.stringify({ registry: { url: 'https://example.com' } }));
    const program = createProgram({
      argv: ['config', 'list'],
      env: { COBALT_CONFIG: configPath },
      isTty: false,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(['config', 'list'], { from: 'user' });

    assert.doesNotMatch(output.join('\n'), /COBALT/);
    assert.match(output.join('\n'), /registry/);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
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
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
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
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
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
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
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

test('scaffolds an Angular project with SCSS without Sass import deprecations', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const cwd = process.cwd();

  try {
    process.chdir(tempDir);
    const targetDir = await scaffoldProject(
      { targetDir: 'angular-scss', template: 'angular', scss: true, appShell: true },
      packageRoot,
    );
    const styles = await readFile(path.join(targetDir, 'src', 'styles.scss'), 'utf8');
    const angularJson = await readFile(path.join(targetDir, 'angular.json'), 'utf8');
    const packageJson = JSON.parse(await readFile(path.join(targetDir, 'package.json'), 'utf8'));

    assert.match(styles, /@use '@cobalt\/tokens\/scss\/styles' as co;/);
    assert.doesNotMatch(styles, /@use '@cobalt\/tokens\/scss\/css/);
    assert.doesNotMatch(styles, /@use '@cobalt\/tokens\/scss\/themes/);
    assert.doesNotMatch(styles, /@import ['"]@cobalt\/tokens/);
    assert.doesNotMatch(styles, /@import url\('@cobalt\/tokens/);
    assert.match(angularJson, /"styles": \["src\/styles\.scss"\]/);
    assert.match(angularJson, /"builder": "@angular\/build:application"/);
    assert.match(angularJson, /"builder": "@angular\/build:dev-server"/);
    assert.equal(packageJson.devDependencies['@angular/build'], '^21.2.0');
    assert.equal(packageJson.devDependencies['@angular-devkit/build-angular'], undefined);
    assert.equal(packageJson.devDependencies.typescript, '~5.9.0');
    assert.equal(packageJson.devDependencies.sass, '^1.99.0');
    assert.equal(packageJson.dependencies['@cobalt/angular'], '^0.1.0');
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('writes .npmrc and removes .npmrc.example when registry configuration is provided', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
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

test('writes registry .npmrc without cafile when CA bundle is omitted', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const cwd = process.cwd();

  try {
    process.chdir(tempDir);
    const targetDir = await scaffoldProject(
      {
        targetDir: 'registry-no-ca',
        template: 'vue',
        scss: false,
        appShell: false,
        cobaltSource: 'registry',
        configureRegistry: true,
        registryUrl: 'https://registry.example.com/npm/',
      },
      packageRoot,
    );

    const npmrc = await readFile(path.join(targetDir, '.npmrc'), 'utf8');

    assert.match(npmrc, /@cobalt:registry=https:\/\/registry\.example\.com\/npm\//);
    assert.doesNotMatch(npmrc, /cafile=/);
    await assert.rejects(() => readFile(path.join(targetDir, '.npmrc.example'), 'utf8'), {
      code: 'ENOENT',
    });
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('scaffolds a local tarball project with package overrides and copy instructions', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
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
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
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
