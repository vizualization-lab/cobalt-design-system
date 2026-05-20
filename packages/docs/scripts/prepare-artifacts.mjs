import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const docsRoot = resolve(__dirname, '..');
const repoRoot = resolve(docsRoot, '../..');
const vscodeRoot = resolve(repoRoot, 'packages/vscode');
const artifactDir = resolve(docsRoot, 'public/assets/artifacts/vscode');

const vsixFileName = 'cobalt-tokens-explorer.vsix';
const screenshotFileName = 'cobalt-tokens-explorer.png';
const vsixSource = resolve(vscodeRoot, 'dist', vsixFileName);
const screenshotSource = resolve(vscodeRoot, 'resources/vscode-cobalt-screenshot.png');

run('pnpm', ['--filter', './packages/vscode', 'package']);

mkdirSync(artifactDir, { recursive: true });
copyRequiredFile(vsixSource, resolve(artifactDir, vsixFileName));
copyRequiredFile(screenshotSource, resolve(artifactDir, screenshotFileName));

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function copyRequiredFile(source, target) {
  if (!existsSync(source)) {
    throw new Error(`Expected artifact source does not exist: ${source}`);
  }

  copyFileSync(source, target);
}
