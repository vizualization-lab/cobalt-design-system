import { access, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
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
import { buildComponentGuidance } from '../scripts/generate-component-guidance.mjs';

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

async function pathExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
  const inspectCommand = program.commands.find((command) => command.name() === 'inspect');
  const doctorCommand = program.commands.find((command) => command.name() === 'doctor');
  const componentsCommand = program.commands.find((command) => command.name() === 'components');

  assert.match(rootHelp, /Usage: co/);
  assert.match(rootHelp, /new/);
  assert.match(rootHelp, /config/);
  assert.match(rootHelp, /inspect/);
  assert.match(rootHelp, /doctor/);
  assert.match(rootHelp, /components/);
  assert.match(newCommand.helpInformation(), /--template <name>/);
  assert.match(newCommand.helpInformation(), /--app-shell/);
  assert.match(newCommand.helpInformation(), /--agent-skill/);
  assert.match(configCommand.helpInformation(), /set/);
  assert.match(configCommand.helpInformation(), /unset/);
  assert.match(inspectCommand.helpInformation(), /Inspect Cobalt usage/);
  assert.match(doctorCommand.helpInformation(), /--strict/);
  assert.match(componentsCommand.helpInformation(), /list/);
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

test('version output omits startup art', async () => {
  for (const flag of ['--version', '-v']) {
    const output = [];
    const program = createProgram({
      argv: [flag],
      isTty: false,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync([flag], { from: 'user' });

    assert.deepEqual(output, ['0.1.0']);
  }
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
        agentSkill: 'claude',
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
      agentSkill: 'claude',
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

test('rejects unknown agent skill targets before scaffolding', async () => {
  await assert.rejects(
    () => resolveOptions({ agentSkill: 'cursor', yes: true }, prompts),
    /Unknown agent skill target "cursor"/,
  );
});

test('resolves agent skill targets with both as the default', async () => {
  assert.equal(
    (await resolveOptions({ targetDir: 'default-agent', yes: true }, prompts)).agentSkill,
    'both',
  );

  for (const agentSkill of ['none', 'codex', 'claude', 'both']) {
    assert.equal(
      (
        await resolveOptions(
          {
            targetDir: `agent-${agentSkill}`,
            template: 'vanilla-ts',
            scss: false,
            appShell: false,
            cobaltSource: 'registry',
            configureRegistry: false,
            agentSkill,
          },
          prompts,
        )
      ).agentSkill,
      agentSkill,
    );
  }
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
      agentSkill: 'both',
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
        '--agent-skill',
        'both',
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
        '--agent-skill',
        'both',
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

test('inspect command reports project inventory as JSON', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const output = [];

  try {
    await writeFile(path.join(tempDir, 'pnpm-lock.yaml'), 'lockfileVersion: 9.0\n');
    await writeFile(
      path.join(tempDir, 'package.json'),
      JSON.stringify(
        {
          dependencies: {
            '@cobalt/react': '^0.1.0',
            '@cobalt/tokens': '^0.1.0',
            react: '^18.3.0',
          },
        },
        null,
        2,
      ),
    );
    await writeFile(
      path.join(tempDir, 'index.html'),
      '<html data-co-base><body><div id="root"></div></body></html>',
    );
    await writeFile(
      path.join(tempDir, 'src.tsx'),
      [
        "import '@cobalt/tokens/css';",
        "import '@cobalt/tokens/css/fonts';",
        "import '@cobalt/tokens/css/base';",
      ].join('\n'),
    );
    await mkdir(path.join(tempDir, '.claude', 'worktrees', 'noise'), { recursive: true });
    await writeFile(
      path.join(tempDir, '.claude', 'worktrees', 'noise', 'src.ts'),
      "import '@cobalt/tokens/css/dark';\n",
    );

    const program = createProgram({
      argv: ['--json', '--cwd', tempDir, 'inspect'],
      isTty: false,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(['--json', '--cwd', tempDir, 'inspect'], { from: 'user' });

    const result = JSON.parse(output.join('\n'));
    assert.equal(result.command, 'inspect');
    assert.equal(result.data.packageManager, 'pnpm');
    assert.deepEqual(result.data.frameworks, ['react']);
    assert.equal(result.data.hasTokenCss, true);
    assert.equal(result.data.hasFontCss, true);
    assert.equal(result.data.hasBaseCss, true);
    assert.equal(result.data.hasDataCoBase, true);
    assert.equal(
      result.data.styleImports.some((entry) => entry.file.includes('.claude')),
      false,
    );
    assert.deepEqual(
      result.data.cobaltDependencies.map((dependency) => dependency.name),
      ['@cobalt/react', '@cobalt/tokens'],
    );
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('doctor command reports adoption blockers as JSON', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const output = [];

  try {
    await writeFile(
      path.join(tempDir, 'package.json'),
      JSON.stringify(
        {
          dependencies: {
            '@cobalt/components': '^0.1.0',
            '@cobalt/tokens': '^0.2.0',
          },
        },
        null,
        2,
      ),
    );
    await writeFile(path.join(tempDir, 'main.ts'), "import '@cobalt/components';\n");

    const program = createProgram({
      argv: ['--json', '--cwd', tempDir, 'doctor'],
      isTty: false,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(['--json', '--cwd', tempDir, 'doctor'], { from: 'user' });

    const result = JSON.parse(output.join('\n'));
    const ids = result.diagnostics.map((diagnostic) => diagnostic.id);

    assert.equal(result.command, 'doctor');
    assert.equal(result.summary.status, 'fail');
    assert.ok(ids.includes('cobalt.styles.tokens'));
    assert.ok(ids.includes('cobalt.versions.mismatch'));
    assert.ok(ids.includes('cobalt.imports.barrel'));
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('doctor command formats human diagnostics with status markers', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const output = [];

  try {
    await writeFile(
      path.join(tempDir, 'package.json'),
      JSON.stringify({ dependencies: { '@cobalt/tokens': '^0.1.0' } }, null, 2),
    );

    const program = createProgram({
      argv: ['--cwd', tempDir, 'doctor'],
      isTty: false,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(['--cwd', tempDir, 'doctor'], { from: 'user' });

    const humanOutput = output.join('\n');
    assert.match(humanOutput, /✓ cobalt\.package-json:/);
    assert.match(humanOutput, /! cobalt\.styles\.fonts:/);
    assert.match(humanOutput, /× cobalt\.styles\.tokens:/);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('doctor command colors human status markers in color terminals', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const output = [];

  try {
    await writeFile(
      path.join(tempDir, 'package.json'),
      JSON.stringify({ dependencies: { '@cobalt/tokens': '^0.1.0' } }, null, 2),
    );

    const program = createProgram({
      argv: ['--cwd', tempDir, 'doctor'],
      env: {},
      isTty: true,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(['--cwd', tempDir, 'doctor'], { from: 'user' });

    const humanOutput = output.join('\n');
    assert.match(humanOutput, /\u001B\[32m✓\u001B\[0m cobalt\.package-json:/);
    assert.match(humanOutput, /\u001B\[33m!\u001B\[0m cobalt\.styles\.fonts:/);
    assert.match(humanOutput, /\u001B\[31m×\u001B\[0m cobalt\.styles\.tokens:/);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('doctor strict mode sets a failing exit code for warnings or failures', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const previousExitCode = process.exitCode;

  try {
    await writeFile(
      path.join(tempDir, 'package.json'),
      JSON.stringify({ dependencies: { '@cobalt/tokens': '^0.1.0' } }, null, 2),
    );

    const program = createProgram({
      argv: ['--quiet', '--cwd', tempDir, 'doctor', '--strict'],
      isTty: false,
      out: () => {},
    });

    await program.parseAsync(['--quiet', '--cwd', tempDir, 'doctor', '--strict'], {
      from: 'user',
    });

    assert.equal(process.exitCode, 1);
  } finally {
    process.exitCode = previousExitCode;
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('components commands expose status and usage metadata', async () => {
  const statusOutput = [];
  const usageOutput = [];
  const listOutput = [];

  const statusProgram = createProgram({
    argv: ['--json', 'components', 'status', 'button'],
    isTty: false,
    out: (message = '') => statusOutput.push(message),
  });
  await statusProgram.parseAsync(['--json', 'components', 'status', 'button'], { from: 'user' });

  const usageProgram = createProgram({
    argv: ['components', 'usage', 'button'],
    isTty: false,
    out: (message = '') => usageOutput.push(message),
  });
  await usageProgram.parseAsync(['components', 'usage', 'button'], { from: 'user' });

  const listProgram = createProgram({
    argv: ['components', 'list'],
    isTty: false,
    out: (message = '') => listOutput.push(message),
  });
  await listProgram.parseAsync(['components', 'list'], { from: 'user' });

  const status = JSON.parse(statusOutput.join('\n'));
  assert.equal(status.data.component.tagName, 'co-button');
  assert.match(usageOutput.join('\n'), /@cobalt\/react\/button/);
  assert.match(listOutput.join('\n'), /co-button/);
});

test('agent context reports project and bundled metadata as JSON', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const output = [];

  try {
    await writeFile(
      path.join(tempDir, 'package.json'),
      JSON.stringify(
        {
          dependencies: {
            '@cobalt/react': '^0.1.0',
            '@cobalt/tokens': '^0.1.0',
            react: '^18.3.0',
          },
        },
        null,
        2,
      ),
    );

    const program = createProgram({
      argv: ['--json', '--cwd', tempDir, 'agent', 'context'],
      isTty: false,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(['--json', '--cwd', tempDir, 'agent', 'context'], { from: 'user' });

    const result = JSON.parse(output.join('\n'));
    assert.equal(result.command, 'agent context');
    assert.equal(result.data.metadata.source, 'bundled');
    assert.equal(result.data.metadata.components.count, 28);
    assert.match(result.data.metadata.guidanceManifestPath, /component-guidance\.json$/);
    assert.equal(result.data.metadata.tokens.count > 500, true);
    assert.equal(result.data.metadata.utilities.count > 50, true);
    assert.deepEqual(result.data.project.frameworks, ['react']);
    assert.ok(
      result.diagnostics.some((diagnostic) => diagnostic.id === 'cobalt.agent.metadata.fallback'),
    );
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('component guidance generator extracts framework usage from docs', () => {
  const manifest = buildComponentGuidance({
    docsDir: path.resolve(packageRoot, '../docs/components'),
  });
  const input = manifest.components.find((component) => component.tagName === 'co-input');
  const button = manifest.components.find((component) => component.tagName === 'co-button');
  const select = manifest.components.find((component) => component.tagName === 'co-select');
  const icon = manifest.components.find((component) => component.tagName === 'co-icon');

  assert.equal(manifest.components.length, 22);
  assert.ok(
    manifest.components.every(
      (component) =>
        JSON.stringify(Object.keys(component.frameworks).sort()) ===
        JSON.stringify(['angular', 'react', 'vue', 'web-components']),
    ),
  );
  assert.ok(input);
  assert.ok(button);
  assert.ok(select);
  assert.ok(icon);
  assert.deepEqual(Object.keys(input.frameworks).sort(), [
    'angular',
    'react',
    'vue',
    'web-components',
  ]);
  assert.ok(
    input.frameworks['web-components'].examples.some((example) =>
      example.code.includes('<co-input label="Email address"'),
    ),
  );
  assert.ok(
    input.frameworks.react.examples.some((example) =>
      example.code.includes('<CoInput label="Email address"'),
    ),
  );
  assert.ok(input.frameworks.react.recommendedAttributes.includes('label'));
  assert.ok(input.frameworks.react.recommendedAttributes.includes('helpText'));
  assert.ok(input.frameworks.react.relatedComponents.some((entry) => entry.tagName === 'co-icon'));
  assert.ok(
    button.frameworks.react.requiredImports.includes(
      "import { CoButton, CoIcon } from '@cobalt/react';",
    ),
  );
  assert.ok(
    select.frameworks['web-components'].relatedComponents.some(
      (entry) => entry.tagName === 'co-option',
    ),
  );
  assert.ok(
    icon.frameworks['web-components'].requiredImports.includes("import '@cobalt/components/icon';"),
  );
});

test('agent component command normalizes custom elements manifest API metadata', async () => {
  const output = [];
  const program = createProgram({
    argv: ['--json', 'agent', 'component', 'button'],
    isTty: false,
    out: (message = '') => output.push(message),
  });

  await program.parseAsync(['--json', 'agent', 'component', 'button'], { from: 'user' });

  const result = JSON.parse(output.join('\n'));
  const component = result.data.component;

  assert.equal(component.tagName, 'co-button');
  assert.equal(component.imports.webComponent, '@cobalt/components/button');
  assert.ok(component.attributes.some((attribute) => attribute.name === 'variant'));
  assert.ok(component.events.some((event) => event.name === 'co-focus'));
  assert.ok(component.slots.some((slot) => slot.name === 'default'));
  assert.ok(component.cssParts.some((part) => part.name === 'base'));
  assert.equal(result.data.frameworkSelection.selected, 'web-components');
  assert.ok(component.usage.examples.some((example) => example.code.includes('<co-button')));
  assert.ok(component.usage.requiredImports.includes("import '@cobalt/components/button';"));
  assert.equal(
    component.methods.some((method) => method.name.startsWith('_')),
    false,
  );
  assert.equal(
    component.events.some((event) => event.name === 'type' || event.name === 'name'),
    false,
  );
});

test('agent component command selects React guidance for React projects', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const output = [];

  try {
    await writeFile(
      path.join(tempDir, 'package.json'),
      JSON.stringify({
        dependencies: {
          '@cobalt/react': '^0.1.0',
          react: '^18.3.0',
        },
      }),
    );

    const program = createProgram({
      argv: ['--json', '--cwd', tempDir, 'agent', 'component', 'input'],
      isTty: false,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(['--json', '--cwd', tempDir, 'agent', 'component', 'input'], {
      from: 'user',
    });

    const result = JSON.parse(output.join('\n'));
    const component = result.data.component;
    const examples = component.usage.examples.map((example) => example.code).join('\n\n');
    const attributes = component.attributes.map((attribute) => attribute.name);

    assert.equal(result.data.frameworkSelection.selected, 'react');
    assert.equal(component.usage.framework, 'react');
    assert.ok(
      component.usage.requiredImports.includes("import { CoInput, CoIcon } from '@cobalt/react';"),
    );
    assert.match(examples, /<CoInput label="Email address" name="email" type="email"/);
    assert.ok(component.usage.recommendedAttributes.includes('helpText'));
    assert.ok(component.usage.relatedComponents.some((entry) => entry.tagName === 'co-icon'));
    assert.equal(attributes.includes('label'), false);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('agent component command selects Vue, Angular, native, and explicit framework guidance', async () => {
  const cases = [
    {
      dependencies: { '@cobalt/vue': '^0.1.0', vue: '^3.5.0' },
      expected: 'vue',
      expectedImport: "import { CoInput, CoIcon } from '@cobalt/vue';",
      expectedSnippet: '<CoInput label="Email address"',
    },
    {
      dependencies: { '@angular/core': '^20.0.0', '@cobalt/angular': '^0.1.0' },
      expected: 'angular',
      expectedImport: "import { CoInput, CoIcon } from '@cobalt/angular';",
      expectedSnippet: '<co-input label="Email address"',
    },
    {
      dependencies: { '@cobalt/components': '^0.1.0', '@cobalt/tokens': '^0.1.0' },
      expected: 'web-components',
      expectedImport: "import '@cobalt/components/input';",
      expectedSnippet: '<co-input label="Email address"',
    },
  ];

  for (const testCase of cases) {
    const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
    const output = [];

    try {
      await writeFile(
        path.join(tempDir, 'package.json'),
        JSON.stringify({ dependencies: testCase.dependencies }),
      );
      const program = createProgram({
        argv: ['--json', '--cwd', tempDir, 'agent', 'component', 'input'],
        isTty: false,
        out: (message = '') => output.push(message),
      });

      await program.parseAsync(['--json', '--cwd', tempDir, 'agent', 'component', 'input'], {
        from: 'user',
      });

      const result = JSON.parse(output.join('\n'));
      const examples = result.data.component.usage.examples
        .map((example) => example.code)
        .join('\n\n');

      assert.equal(result.data.frameworkSelection.selected, testCase.expected);
      assert.ok(result.data.component.usage.requiredImports.includes(testCase.expectedImport));
      assert.match(examples, new RegExp(escapeRegExp(testCase.expectedSnippet)));
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  }

  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const output = [];

  try {
    await writeFile(
      path.join(tempDir, 'package.json'),
      JSON.stringify({
        dependencies: {
          '@cobalt/react': '^0.1.0',
          '@cobalt/vue': '^0.1.0',
          react: '^18.3.0',
          vue: '^3.5.0',
        },
      }),
    );

    const program = createProgram({
      argv: ['--json', '--cwd', tempDir, 'agent', 'component', 'button', '--framework', 'react'],
      isTty: false,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(
      ['--json', '--cwd', tempDir, 'agent', 'component', 'button', '--framework', 'react'],
      { from: 'user' },
    );

    const result = JSON.parse(output.join('\n'));
    assert.equal(result.data.frameworkSelection.selected, 'react');
    assert.equal(result.data.frameworkSelection.ambiguous, false);
    assert.ok(
      result.data.component.usage.examples.some((example) => example.code.includes('<CoButton')),
    );
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('agent component command reports ambiguous framework guidance', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const output = [];

  try {
    await writeFile(
      path.join(tempDir, 'package.json'),
      JSON.stringify({
        dependencies: {
          '@cobalt/react': '^0.1.0',
          '@cobalt/vue': '^0.1.0',
          react: '^18.3.0',
          vue: '^3.5.0',
        },
      }),
    );

    const program = createProgram({
      argv: ['--json', '--cwd', tempDir, 'agent', 'component', 'button'],
      isTty: false,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(['--json', '--cwd', tempDir, 'agent', 'component', 'button'], {
      from: 'user',
    });

    const result = JSON.parse(output.join('\n'));
    assert.equal(result.data.frameworkSelection.ambiguous, true);
    assert.equal(result.data.frameworkSelection.selected, null);
    assert.equal(result.data.component.usage.examples.length, 0);
    assert.deepEqual(Object.keys(result.data.component.usage.frameworkExamples).sort(), [
      'angular',
      'react',
      'vue',
      'web-components',
    ]);
    assert.ok(
      result.diagnostics.some((diagnostic) => diagnostic.id === 'cobalt.agent.framework.ambiguous'),
    );
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('agent token commands search and return token metadata', async () => {
  const listOutput = [];
  const tokenOutput = [];

  const listProgram = createProgram({
    argv: ['--json', 'agent', 'tokens', '--query', 'surface', '--tier', 'semantic', '--limit', '3'],
    isTty: false,
    out: (message = '') => listOutput.push(message),
  });
  await listProgram.parseAsync(
    ['--json', 'agent', 'tokens', '--query', 'surface', '--tier', 'semantic', '--limit', '3'],
    { from: 'user' },
  );

  const tokenProgram = createProgram({
    argv: ['--json', 'agent', 'token', '--co-color-text-default'],
    isTty: false,
    out: (message = '') => tokenOutput.push(message),
  });
  await tokenProgram.parseAsync(['--json', 'agent', 'token', '--co-color-text-default'], {
    from: 'user',
  });

  const listResult = JSON.parse(listOutput.join('\n'));
  const tokenResult = JSON.parse(tokenOutput.join('\n'));

  assert.equal(listResult.command, 'agent tokens');
  assert.equal(listResult.data.returned, 3);
  assert.ok(listResult.data.tokens.every((token) => token.tier === 'semantic'));
  assert.equal(tokenResult.data.token.name, '--co-color-text-default');
  assert.equal(tokenResult.data.token.category, 'Color');
});

test('agent workspace metadata source reports missing metadata without fallback', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const output = [];

  try {
    await writeFile(path.join(tempDir, 'package.json'), JSON.stringify({ dependencies: {} }));

    const program = createProgram({
      argv: ['--json', '--cwd', tempDir, 'agent', '--metadata-source', 'workspace', 'context'],
      isTty: false,
      out: (message = '') => output.push(message),
    });

    await program.parseAsync(
      ['--json', '--cwd', tempDir, 'agent', '--metadata-source', 'workspace', 'context'],
      { from: 'user' },
    );

    const result = JSON.parse(output.join('\n'));
    assert.equal(result.summary.status, 'fail');
    assert.equal(result.data.metadata.components.count, 0);
    assert.ok(
      result.diagnostics.some(
        (diagnostic) => diagnostic.id === 'cobalt.agent.metadata.workspace-missing',
      ),
    );
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('agent utility command searches utility metadata', async () => {
  const output = [];
  const program = createProgram({
    argv: ['--json', 'agent', 'utilities', '--query', 'gap', '--limit', '2'],
    isTty: false,
    out: (message = '') => output.push(message),
  });

  await program.parseAsync(['--json', 'agent', 'utilities', '--query', 'gap', '--limit', '2'], {
    from: 'user',
  });

  const result = JSON.parse(output.join('\n'));
  assert.equal(result.command, 'agent utilities');
  assert.equal(result.data.returned, 2);
  assert.ok(result.data.utilities.every((utility) => utility.className.includes('gap')));
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
    const skill = await readFile(
      path.join(targetDir, '.codex', 'skills', 'cobalt', 'SKILL.md'),
      'utf8',
    );
    const skillMetadata = await readFile(
      path.join(targetDir, '.codex', 'skills', 'cobalt', 'agents', 'openai.yaml'),
      'utf8',
    );

    assert.match(gitignore, /node_modules\//);
    assert.match(gitignore, /dist\//);
    assert.match(gitignore, /cobalt-packages\/\*\.tgz/);
    assert.match(readme, /npm run dev/);
    assert.match(readme, /npm run build/);
    assert.match(readme, /\.codex\/skills\/cobalt/);
    assert.match(readme, /\.claude\/skills\/cobalt/);
    assert.match(npmrcExample, /%REGISTRY_URL%/);
    assert.match(skill, /name: cobalt/);
    assert.match(skill, /co --json --cwd <project-root> agent context/);
    assert.match(skillMetadata, /display_name: 'Cobalt'/);
    assert.equal(
      await pathExists(path.join(targetDir, '.claude', 'skills', 'cobalt', 'SKILL.md')),
      true,
    );
    assert.equal(
      await pathExists(
        path.join(targetDir, '.claude', 'skills', 'cobalt', 'agents', 'openai.yaml'),
      ),
      false,
    );
  } finally {
    process.chdir(cwd);
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('scaffolds selected agent skill harness folders', async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'cobalt-cli-'));
  const cwd = process.cwd();

  try {
    process.chdir(tempDir);

    for (const agentSkill of ['codex', 'claude', 'none']) {
      const targetDir = await scaffoldProject(
        {
          targetDir: `skill-${agentSkill}`,
          template: 'vanilla-ts',
          scss: false,
          appShell: false,
          cobaltSource: 'registry',
          configureRegistry: false,
          agentSkill,
        },
        packageRoot,
      );

      const hasCodexSkill = await pathExists(
        path.join(targetDir, '.codex', 'skills', 'cobalt', 'SKILL.md'),
      );
      const hasClaudeSkill = await pathExists(
        path.join(targetDir, '.claude', 'skills', 'cobalt', 'SKILL.md'),
      );
      const hasClaudeOpenAiMetadata = await pathExists(
        path.join(targetDir, '.claude', 'skills', 'cobalt', 'agents', 'openai.yaml'),
      );
      const readme = await readFile(path.join(targetDir, 'README.md'), 'utf8');

      assert.equal(hasCodexSkill, agentSkill === 'codex');
      assert.equal(hasClaudeSkill, agentSkill === 'claude');
      assert.equal(hasClaudeOpenAiMetadata, false);

      if (agentSkill === 'codex') {
        assert.match(readme, /\.codex\/skills\/cobalt/);
        assert.doesNotMatch(readme, /\.claude\/skills\/cobalt/);
      } else if (agentSkill === 'claude') {
        assert.match(readme, /\.claude\/skills\/cobalt/);
        assert.doesNotMatch(readme, /\.codex\/skills\/cobalt/);
      } else {
        assert.doesNotMatch(readme, /AI Agent Skill/);
      }
    }
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
    assert.equal(packageJson.dependencies['@angular/common'], '^20.3.24');
    assert.equal(packageJson.dependencies['@angular/compiler'], '^20.3.24');
    assert.equal(packageJson.dependencies['@angular/core'], '^20.3.24');
    assert.equal(packageJson.devDependencies['@angular/build'], '^20.3.27');
    assert.equal(packageJson.devDependencies['@angular/cli'], '^20.3.27');
    assert.equal(packageJson.devDependencies['@angular/compiler-cli'], '^20.3.24');
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
