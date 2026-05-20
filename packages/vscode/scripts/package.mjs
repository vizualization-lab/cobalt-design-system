import { readdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageRoot = resolve(__dirname, '..');
const distDir = resolve(packageRoot, 'dist');
const vsixName = 'cobalt-tokens-explorer.vsix';
const require = createRequire(import.meta.url);
const tscPackagePath = require.resolve('typescript/package.json', { paths: [packageRoot] });
const tscCliPath = resolve(dirname(tscPackagePath), 'bin', 'tsc');
const vscePackagePath = require.resolve('@vscode/vsce/package.json', { paths: [packageRoot] });
const vsceCliPath = resolve(dirname(vscePackagePath), 'vsce');

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}

function main() {
  runNodeScript(resolve(packageRoot, 'scripts', 'copy-manifest.mjs'), []);
  runNodeScript(tscCliPath, ['-p', 'tsconfig.json', '--noEmit']);
  runNodeScript(resolve(packageRoot, 'scripts', 'esbuild.mjs'), []);
  removeExistingVsixFiles();
  runNodeScript(vsceCliPath, [
    'package',
    '--allow-missing-repository',
    '--no-rewrite-relative-links',
    '--out',
    `dist/${vsixName}`,
  ]);
}

function formatCommand(command, args) {
  return [command, ...args].join(' ');
}

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: packageRoot,
    env: process.env,
    stdio: 'inherit',
    shell: false,
    windowsHide: true,
  });

  if (result.error) {
    throw new Error(`${formatCommand(command, args)} failed: ${result.error.message}`);
  }

  if (result.status !== 0) {
    throw new Error(`${formatCommand(command, args)} failed with exit code ${result.status}`);
  }
}

function runNodeScript(scriptPath, args) {
  run(process.execPath, [scriptPath, ...args]);
}

function removeExistingVsixFiles() {
  let entries = [];

  try {
    entries = readdirSync(distDir, { withFileTypes: true });
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      return;
    }

    throw error;
  }

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.vsix')) continue;
    rmSync(resolve(distDir, entry.name));
  }
}
