import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const defaultPackageDir = join(__dirname, '..');
const defaultTokensDir = resolve(defaultPackageDir, '..', '..', 'exports', 'tokens');

const CATEGORY_MAP = {
  border: 'Border',
  breakpoint: 'Breakpoint',
  color: 'Color',
  control: 'Control',
  elevation: 'Elevation',
  font: 'Font',
  radius: 'Radius',
  size: 'Size',
  space: 'Space',
  theme: 'Theme',
};

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

function parseCssCustomProperties(css) {
  const values = new Map();
  const re = /(--co-[\w-]+)\s*:\s*([^;]+);/g;
  let match;

  while ((match = re.exec(css)) !== null) {
    values.set(match[1], match[2].trim());
  }

  return values;
}

function readCssCustomProperties(filePath) {
  if (!existsSync(filePath)) {
    throw new Error(`Missing generated CSS required for tooling manifest: ${filePath}`);
  }

  return parseCssCustomProperties(readFileSync(filePath, 'utf-8'));
}

function deriveCategory(name) {
  const firstSegment = name.replace(/^--co-/, '').split('-')[0];
  return CATEGORY_MAP[firstSegment] ?? firstSegment;
}

function deriveTier(name, value) {
  if (name.startsWith('--co-component-')) return 'component';
  if (value.startsWith('var(')) return 'semantic';
  return 'primitive';
}

function resolveTokenValue(name, valueMap, trail = new Set()) {
  if (trail.has(name)) return null;

  const value = valueMap.get(name);
  if (!value) return null;

  const reference = value.match(/^var\((--co-[\w-]+)\)$/)?.[1];
  if (!reference) return value;

  const nextTrail = new Set(trail);
  nextTrail.add(name);
  return resolveTokenValue(reference, valueMap, nextTrail);
}

function buildDescriptionMap(tokensDir) {
  const descriptions = new Map();
  const files = readdirSync(tokensDir)
    .filter((fileName) => fileName.endsWith('.tokens-dtcg.json'))
    .sort();

  function walk(node, segments = []) {
    if (!node || typeof node !== 'object' || Array.isArray(node)) return;

    if ('$value' in node) {
      if (typeof node.$description === 'string' && node.$description.trim()) {
        descriptions.set(`--${segments.join('-')}`, node.$description.trim());
      }
      return;
    }

    for (const [key, value] of Object.entries(node)) {
      if (key === '$root') {
        walk(value, segments);
      } else if (!key.startsWith('$')) {
        walk(value, [...segments, key]);
      }
    }
  }

  for (const fileName of files) {
    walk(readJson(join(tokensDir, fileName)));
  }

  return descriptions;
}

function discoverThemeValueMaps(packageDir) {
  const cssDir = join(packageDir, 'dist', 'css');
  const themeDir = join(cssDir, 'themes');
  const themes = [
    {
      theme: 'default',
      mode: 'light',
      values: readCssCustomProperties(join(cssDir, 'tokens.css')),
    },
    {
      theme: 'default',
      mode: 'dark',
      values: readCssCustomProperties(join(cssDir, 'tokens-dark.css')),
    },
  ];

  const themedFiles = readdirSync(themeDir)
    .map((fileName) => ({ fileName, match: fileName.match(/^tokens-(.+)-(light|dark)\.css$/) }))
    .filter(({ match }) => match)
    .sort((left, right) => left.fileName.localeCompare(right.fileName));

  for (const { fileName, match } of themedFiles) {
    themes.push({
      theme: match[1],
      mode: match[2],
      values: readCssCustomProperties(join(themeDir, fileName)),
    });
  }

  return themes;
}

function normalizeCssBlock(block) {
  return block
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join(' ');
}

function normalizeUtilityClassName(selector) {
  return selector.replace(/^\\32xl\\:/, '2xl:').replace('\\:', ':');
}

function describeUtility(className) {
  const base = className.includes(':') ? className.split(':')[1] : className;

  if (base.startsWith('co-gap-')) return 'Sets gap using the Cobalt spacing scale.';
  if (base.startsWith('co-px-')) return 'Sets inline padding using the Cobalt spacing scale.';
  if (base.startsWith('co-py-')) return 'Sets block padding using the Cobalt spacing scale.';
  if (base.startsWith('co-p-')) return 'Sets padding using the Cobalt spacing scale.';
  if (base.startsWith('co-mx-')) return 'Sets inline margin.';
  if (base.startsWith('co-my-')) return 'Sets block margin.';
  if (base.startsWith('co-mt-')) return 'Sets top margin using the Cobalt spacing scale.';
  if (base.startsWith('co-mb-')) return 'Sets bottom margin using the Cobalt spacing scale.';
  if (base.startsWith('co-m-')) return 'Sets margin.';
  if (base.startsWith('co-max-w-')) return 'Sets content max width using Cobalt breakpoints.';
  if (base.startsWith('co-type-')) return 'Applies a Cobalt semantic typography role.';
  if (base.startsWith('co-text-')) return 'Sets font size using Cobalt font tokens.';
  if (base.startsWith('co-font-')) return 'Sets font family or weight using Cobalt font tokens.';
  if (base.startsWith('co-leading-')) return 'Sets line height using Cobalt font tokens.';
  if (base.startsWith('co-tracking-')) return 'Sets letter spacing using Cobalt font tokens.';
  if (base === 'co-truncate') return 'Applies single-line text truncation.';
  if (base === 'co-sr-only') return 'Visually hides content while preserving screen reader access.';

  return 'Applies a Cobalt token-backed utility class.';
}

export function extractUtilityManifestEntries(css) {
  const utilities = [];
  const seen = new Set();
  const classBlockRe = /\.((?:(?:\\32xl|[a-z][a-z0-9-]*)\\:)?co-[a-z0-9-]+)\s*\{([^{}]+)\}/g;
  let match;

  while ((match = classBlockRe.exec(css)) !== null) {
    const className = normalizeUtilityClassName(match[1]);
    if (seen.has(className)) continue;
    seen.add(className);

    const responsivePrefix = className.includes(':') ? className.split(':')[0] : undefined;
    const cssBlock = normalizeCssBlock(match[2]);
    const tokenRefs = [
      ...new Set([...cssBlock.matchAll(/var\((--co-[\w-]+)\)/g)].map((entry) => entry[1])),
    ];

    utilities.push({
      className,
      css: cssBlock,
      tokenRefs,
      ...(responsivePrefix ? { responsivePrefix } : {}),
      description: describeUtility(className),
    });
  }

  return utilities.sort((left, right) => left.className.localeCompare(right.className));
}

export function buildToolingManifest(packageDir = defaultPackageDir, tokensDir = defaultTokensDir) {
  const packageJson = readJson(join(packageDir, 'package.json'));
  const defaultValues = readCssCustomProperties(join(packageDir, 'dist', 'css', 'tokens.css'));
  const descriptions = buildDescriptionMap(tokensDir);
  const themeValueMaps = discoverThemeValueMaps(packageDir);

  const tokens = [...defaultValues.entries()]
    .map(([name, value]) => {
      const resolvedValue = resolveTokenValue(name, defaultValues);
      const themeModes = themeValueMaps
        .map((themeMap) => {
          const themeValue = themeMap.values.get(name);
          return themeValue
            ? { theme: themeMap.theme, mode: themeMap.mode, value: themeValue }
            : null;
        })
        .filter(Boolean);

      return {
        name,
        category: deriveCategory(name),
        tier: deriveTier(name, value),
        value,
        ...(resolvedValue && resolvedValue !== value ? { resolvedValue } : {}),
        ...(descriptions.has(name) ? { description: descriptions.get(name) } : {}),
        ...(themeModes.length > 0 ? { themeModes } : {}),
      };
    })
    .sort((left, right) => left.name.localeCompare(right.name));

  const utilitiesCss = readFileSync(join(packageDir, 'dist', 'css', 'utilities.css'), 'utf-8');

  return {
    schemaVersion: 1,
    cobaltVersion: packageJson.version,
    tokens,
    utilities: extractUtilityManifestEntries(utilitiesCss),
  };
}

export function generateToolingManifest(
  packageDir = defaultPackageDir,
  tokensDir = defaultTokensDir,
) {
  const manifest = buildToolingManifest(packageDir, tokensDir);
  const outputDir = join(packageDir, 'dist', 'tooling');
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'cobalt.manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  return manifest;
}

const isCLI =
  process.argv[1] && fileURLToPath(import.meta.url).endsWith(process.argv[1].replace(/.*\//, ''));

if (isCLI) generateToolingManifest();
