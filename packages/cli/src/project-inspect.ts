import { existsSync } from 'node:fs';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { localCobaltPackages, localPackagesDirectory } from './constants.js';

type DependencySection =
  | 'dependencies'
  | 'devDependencies'
  | 'peerDependencies'
  | 'optionalDependencies';

interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
}

export interface CobaltDependency {
  name: string;
  version: string;
  section: DependencySection;
  local: boolean;
}

export interface StyleImport {
  file: string;
  importPath: string;
}

export interface BarrelImport {
  file: string;
  importPath: string;
}

export interface ProjectInspection {
  root: string;
  packageJsonFound: boolean;
  packageManager: 'pnpm' | 'npm' | 'yarn' | 'bun' | 'unknown';
  frameworks: string[];
  cobaltDependencies: CobaltDependency[];
  cobaltVersions: string[];
  styleImports: StyleImport[];
  hasTokenCss: boolean;
  hasFontCss: boolean;
  hasBaseCss: boolean;
  hasPreUpgradeCss: boolean;
  hasDataCoBase: boolean;
  npmrc: {
    found: boolean;
    exampleFound: boolean;
    hasCobaltRegistry: boolean;
    hasCaBundle: boolean;
  };
  localPackages: {
    mode: boolean;
    directory: string;
    directoryFound: boolean;
    tarballs: string[];
    missingTarballs: string[];
  };
  barrelImports: BarrelImport[];
}

const scanExtensions = new Set(['.css', '.scss', '.html', '.js', '.jsx', '.ts', '.tsx', '.vue']);
const ignoredDirectories = new Set([
  'node_modules',
  'dist',
  'build',
  'out',
  '.git',
  '.angular',
  '.cache',
  '.claude',
  '.next',
  '.nuxt',
  '.turbo',
  '.vite',
  '.worktrees',
  'coverage',
]);

export async function inspectProject(root: string): Promise<ProjectInspection> {
  const projectRoot = path.resolve(root);
  const packageJson = await readPackageJson(projectRoot);
  const files = await collectTextFiles(projectRoot);
  const contents = await Promise.all(
    files.map(async (file) => ({
      file: path.relative(projectRoot, file),
      contents: await readFile(file, 'utf8'),
    })),
  );
  const cobaltDependencies = packageJson ? collectCobaltDependencies(packageJson) : [];
  const styleImports = collectStyleImports(contents);
  const localPackagesDir = path.join(projectRoot, localPackagesDirectory);
  const localMode = cobaltDependencies.some((dependency) => dependency.local);
  const tarballs = existsSync(localPackagesDir)
    ? (await readdir(localPackagesDir)).filter((fileName) => fileName.endsWith('.tgz')).sort()
    : [];

  return {
    root: projectRoot,
    packageJsonFound: Boolean(packageJson),
    packageManager: detectPackageManager(projectRoot),
    frameworks: detectFrameworks(packageJson),
    cobaltDependencies,
    cobaltVersions: [...new Set(cobaltDependencies.map((dependency) => dependency.version))].sort(),
    styleImports,
    hasTokenCss: styleImports.some((entry) =>
      ['@cobalt/tokens/css', '@cobalt/tokens/scss', '@cobalt/tokens/scss/styles'].includes(
        entry.importPath,
      ),
    ),
    hasFontCss: styleImports.some((entry) =>
      ['@cobalt/tokens/css/fonts', '@cobalt/tokens/scss/styles'].includes(entry.importPath),
    ),
    hasBaseCss: styleImports.some((entry) =>
      ['@cobalt/tokens/css/base', '@cobalt/tokens/scss/styles'].includes(entry.importPath),
    ),
    hasPreUpgradeCss: styleImports.some((entry) =>
      ['@cobalt/components/pre-upgrade.css', '@cobalt/components/pre-upgrade'].includes(
        entry.importPath,
      ),
    ),
    hasDataCoBase: contents.some((entry) => /\bdata-co-base\b/.test(entry.contents)),
    npmrc: await inspectNpmrc(projectRoot),
    localPackages: {
      mode: localMode,
      directory: localPackagesDirectory,
      directoryFound: existsSync(localPackagesDir),
      tarballs,
      missingTarballs: localMode ? missingLocalTarballs(cobaltDependencies, tarballs) : [],
    },
    barrelImports: collectBarrelImports(contents),
  };
}

async function readPackageJson(root: string): Promise<PackageJson | undefined> {
  try {
    return JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8')) as PackageJson;
  } catch {
    return undefined;
  }
}

function detectPackageManager(root: string): ProjectInspection['packageManager'] {
  if (existsSync(path.join(root, 'pnpm-lock.yaml'))) return 'pnpm';
  if (existsSync(path.join(root, 'package-lock.json'))) return 'npm';
  if (existsSync(path.join(root, 'yarn.lock'))) return 'yarn';
  if (existsSync(path.join(root, 'bun.lockb')) || existsSync(path.join(root, 'bun.lock')))
    return 'bun';
  return 'unknown';
}

function allDependencies(packageJson?: PackageJson): Record<string, string> {
  return {
    ...packageJson?.dependencies,
    ...packageJson?.devDependencies,
    ...packageJson?.peerDependencies,
    ...packageJson?.optionalDependencies,
  };
}

function detectFrameworks(packageJson?: PackageJson): string[] {
  const dependencies = allDependencies(packageJson);
  const frameworks = [];

  if (dependencies.react || dependencies['@cobalt/react']) frameworks.push('react');
  if (dependencies.vue || dependencies['@cobalt/vue']) frameworks.push('vue');
  if (dependencies['@angular/core'] || dependencies['@cobalt/angular']) frameworks.push('angular');
  if (
    frameworks.length === 0 &&
    (dependencies['@cobalt/components'] || dependencies['@cobalt/tokens'])
  ) {
    frameworks.push('web-components');
  }

  return frameworks;
}

function collectCobaltDependencies(packageJson: PackageJson): CobaltDependency[] {
  const dependencies: CobaltDependency[] = [];
  const sections: DependencySection[] = [
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'optionalDependencies',
  ];

  for (const section of sections) {
    for (const [name, version] of Object.entries(packageJson[section] ?? {})) {
      if (!name.startsWith('@cobalt/')) continue;
      dependencies.push({
        name,
        version,
        section,
        local: version.startsWith('file:'),
      });
    }
  }

  return dependencies.sort((a, b) => a.name.localeCompare(b.name));
}

async function collectTextFiles(root: string): Promise<string[]> {
  const files: string[] = [];

  async function walk(directory: string): Promise<void> {
    let entries;
    try {
      entries = await readdir(directory, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        if (!shouldIgnoreDirectory(entry.name)) {
          await walk(entryPath);
        }
        continue;
      }

      if (entry.isFile() && scanExtensions.has(path.extname(entry.name))) {
        const entryStat = await stat(entryPath);
        if (entryStat.size < 250_000) {
          files.push(entryPath);
        }
      }
    }
  }

  await walk(root);
  return files;
}

function shouldIgnoreDirectory(name: string): boolean {
  return ignoredDirectories.has(name);
}

function collectStyleImports(files: Array<{ file: string; contents: string }>): StyleImport[] {
  const imports: StyleImport[] = [];
  const stylesheetPattern = /@(?:import|use)\s+(?:url\()?['"](@cobalt\/[\w-]+\/[^'")]+)['"]/g;
  const modulePattern = /import\s+(?:[^'"]*from\s+)?['"](@cobalt\/[\w-]+\/[^'"]+)['"]/g;

  for (const file of files) {
    for (const match of file.contents.matchAll(stylesheetPattern)) {
      imports.push({ file: file.file, importPath: match[1] });
    }

    for (const match of file.contents.matchAll(modulePattern)) {
      imports.push({ file: file.file, importPath: match[1] });
    }
  }

  return imports;
}

function collectBarrelImports(files: Array<{ file: string; contents: string }>): BarrelImport[] {
  const imports: BarrelImport[] = [];
  const pattern = /(?:import\s+[^'"]*from\s+|import\s*)['"](@cobalt\/components)['"]/g;

  for (const file of files) {
    for (const match of file.contents.matchAll(pattern)) {
      imports.push({ file: file.file, importPath: match[1] });
    }
  }

  return imports;
}

async function inspectNpmrc(root: string): Promise<ProjectInspection['npmrc']> {
  const npmrcPath = path.join(root, '.npmrc');
  const npmrcExamplePath = path.join(root, '.npmrc.example');
  const found = existsSync(npmrcPath);
  const exampleFound = existsSync(npmrcExamplePath);
  const contents = found ? await readFile(npmrcPath, 'utf8') : '';

  return {
    found,
    exampleFound,
    hasCobaltRegistry: /@cobalt:registry\s*=/.test(contents),
    hasCaBundle: /^cafile\s*=/m.test(contents),
  };
}

function missingLocalTarballs(dependencies: CobaltDependency[], tarballs: string[]): string[] {
  const tarballSet = new Set(tarballs);

  return dependencies
    .filter((dependency) => dependency.local)
    .map((dependency) => dependency.version.replace(/^file:\.?\//, ''))
    .map((specifier) => path.basename(specifier))
    .filter((tarball) => !tarballSet.has(tarball));
}

export function expectedLocalPackages(): readonly string[] {
  return localCobaltPackages;
}

// Packages that, when present in a project, indicate the app will render
// `co-*` custom elements at runtime (either directly or via a wrapper). Used
// by the doctor to decide whether component-specific checks should apply.
const componentRenderingPackages = new Set([
  '@cobalt/components',
  '@cobalt/react',
  '@cobalt/vue',
  '@cobalt/angular',
]);

export function cobaltComponentDependencies(dependencies: CobaltDependency[]): CobaltDependency[] {
  return dependencies.filter((dependency) => componentRenderingPackages.has(dependency.name));
}

export function usesCobaltComponents(inspection: ProjectInspection): boolean {
  return cobaltComponentDependencies(inspection.cobaltDependencies).length > 0;
}
