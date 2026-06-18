#!/usr/bin/env node
const { mkdir, mkdtemp, rm } = require('node:fs/promises');
const { spawnSync } = require('node:child_process');
const path = require('node:path');
const { tmpdir } = require('node:os');

const rootDir = path.resolve(__dirname, '..');
const skillSource = path.join(rootDir, 'packages', 'cli', 'skills', 'cobalt');
const artifactsDir = path.join(rootDir, 'packages/docs/public/assets/artifacts/skills');
const zipPath = path.join(artifactsDir, 'cobalt-agent-skill.zip');

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

async function main() {
  const tempDir = await mkdtemp(path.join(tmpdir(), 'cobalt-skill-artifact-'));

  try {
    await mkdir(artifactsDir, { recursive: true });
    run('cp', ['-R', skillSource, path.join(tempDir, 'cobalt')], rootDir);
    await rm(zipPath, { force: true });
    run('zip', ['-qr', zipPath, 'cobalt'], tempDir);
    console.log(`Created ${path.relative(rootDir, zipPath)}`);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed with exit code ${result.status}`);
  }
}
