import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { localCobaltPackages, localPackagesDirectory } from './constants.js';
import type { CobaltSource } from './constants.js';

interface PackageJson {
  name?: string;
  version?: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  overrides?: Record<string, string>;
  pnpm?: {
    overrides?: Record<string, string>;
  };
}

export function normalizePackageName(name: string): string {
  const normalized = name
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9._~-]+/g, '-')
    .replace(/^[._-]+|[._-]+$/g, '')
    .replace(/-+/g, '-');

  return normalized || 'cobalt-app';
}

export async function updatePackageJson(
  targetDir: string,
  name: string,
  version: string,
  options: { scss: boolean; cobaltSource: CobaltSource },
): Promise<void> {
  const packageJsonPath = path.join(targetDir, 'package.json');
  const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8')) as PackageJson;
  const cobaltVersion = options.cobaltSource === 'local' ? undefined : `^${version}`;

  packageJson.name = name;

  for (const section of ['dependencies', 'devDependencies'] as const) {
    if (!packageJson[section]) continue;

    for (const dependencyName of Object.keys(packageJson[section])) {
      if (dependencyName.startsWith('@cobalt/')) {
        packageJson[section][dependencyName] =
          options.cobaltSource === 'local'
            ? localTarballSpecifier(dependencyName, version)
            : (cobaltVersion as string);
      }
    }
  }

  if (options.scss) {
    packageJson.devDependencies = {
      ...packageJson.devDependencies,
      sass: packageJson.devDependencies?.sass ?? '^1.99.0',
    };
  }

  if (options.cobaltSource === 'local') {
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

export async function getPackageVersion(root: string): Promise<string> {
  const packageJson = JSON.parse(
    await readFile(path.join(root, 'package.json'), 'utf8'),
  ) as PackageJson;

  if (!packageJson.version) {
    throw new Error(`Package version is missing from ${path.join(root, 'package.json')}.`);
  }

  return packageJson.version;
}

export function localTarballSpecifier(packageName: string, version: string): string {
  return `file:./${localPackagesDirectory}/${localTarballName(packageName, version)}`;
}

export function localTarballName(packageName: string, version: string): string {
  const unscopedName = packageName.replace('@cobalt/', 'cobalt-');
  return `${unscopedName}-${version}.tgz`;
}
