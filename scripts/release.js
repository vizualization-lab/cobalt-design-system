#!/usr/bin/env node

/**
 * Publishes Cobalt packages through Changesets, then creates a global
 * lockstep-version tag and pushes both the current branch and all tags.
 */

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const releaseArgs = process.argv.slice(2);
const isDryRun = releaseArgs.includes('--dry-run');

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    env: process.env,
    stdio: options.stdio ?? 'inherit',
    encoding: 'utf8',
  });

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed with exit code ${result.status}`);
  }

  return result.stdout?.trim() ?? '';
}

function listPublishablePackages() {
  const packagesDir = path.join(root, 'packages');

  return fs
    .readdirSync(packagesDir)
    .map((name) => {
      const packageJsonPath = path.join(packagesDir, name, 'package.json');
      if (!fs.existsSync(packageJsonPath)) return null;
      return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    })
    .filter((pkg) => pkg?.name?.startsWith('@cobalt/') && pkg.private !== true);
}

function getReleaseVersion() {
  const packages = listPublishablePackages();

  if (packages.length === 0) {
    throw new Error('No publishable @cobalt packages were found.');
  }

  const versions = new Set(packages.map((pkg) => pkg.version));
  if (versions.size !== 1) {
    const mismatches = packages.map((pkg) => `${pkg.name}@${pkg.version}`).join(', ');
    throw new Error(`Publishable package versions are not aligned: ${mismatches}`);
  }

  return packages[0].version;
}

function tagExists(tagName) {
  const result = spawnSync('git', ['rev-parse', '-q', '--verify', `refs/tags/${tagName}`], {
    cwd: root,
    stdio: 'ignore',
  });

  return result.status === 0;
}

function getBranchName() {
  if (process.env.RELEASE_BRANCH) return process.env.RELEASE_BRANCH;
  if (process.env.GITHUB_REF_NAME) return process.env.GITHUB_REF_NAME;

  return run('git', ['branch', '--show-current'], { stdio: 'pipe' });
}

function main() {
  run('changeset', ['publish', ...releaseArgs]);

  const releaseVersion = getReleaseVersion();
  const tagName = `v${releaseVersion}`;

  if (isDryRun) {
    console.log(`[dry-run] Would create global tag ${tagName} with message ${tagName}.`);
    console.log('[dry-run] Would push the current branch and tags.');
    return;
  }

  if (tagExists(tagName)) {
    console.log(`Global tag ${tagName} already exists locally; skipping tag creation.`);
  } else {
    run('git', ['tag', '-a', tagName, '-m', tagName]);
  }

  const branchName = getBranchName();
  if (!branchName) {
    throw new Error('Could not determine the current branch. Set RELEASE_BRANCH and retry.');
  }

  const remote = process.env.RELEASE_REMOTE || 'origin';
  run('git', ['push', remote, `HEAD:${branchName}`, '--tags']);
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
