/**
 * Legacy tooling-manifest generator backed by tokens-tokstd sources.
 * Retained until the tooling manifest is migrated to native Figma Variables inputs.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { discoverTokenSets } from './tokstd-token-set-utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const defaultPackageDir = join(__dirname, '..');
const defaultTokensDir = join(defaultPackageDir, 'tokens-tokstd');

const CATEGORY_MAP = {
  border: 'Border',
  breakpoint: 'Breakpoint',
  color: 'Color',
  component: 'Component',
  control: 'Control',
  elevation: 'Elevation',
  focus: 'Focus',
  font: 'Font',
  layout: 'Layout',
  motion: 'Motion',
  opacity: 'Opacity',
  shape: 'Shape',
  sizing: 'Sizing',
  space: 'Space',
  typography: 'Typography',
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
  if (!existsSync(filePath)) return new Map();
  return parseCssCustomProperties(readFileSync(filePath, 'utf-8'));
}

function deriveCategory(name) {
  const firstSegment = name.replace(/^--co-/, '').split('-')[0];
  return CATEGORY_MAP[firstSegment] ?? firstSegment;
}

function deriveTier(name, value) {
  if (name.startsWith('--co-component-')) return 'component';
  if (name.startsWith('--co-color-primitive-')) return 'primitive';
  if (value.startsWith('var(')) return 'semantic';
  return 'primitive';
}

function resolveTokenValue(name, valueMap, depth = 0) {
  if (depth > 10) return null;
  const value = valueMap.get(name);
  if (!value) return null;

  const varMatch = value.match(/^var\((--co-[\w-]+)\)$/);
  if (!varMatch) return value;

  return resolveTokenValue(varMatch[1], valueMap, depth + 1);
}

function buildDescriptionMap(tokensDir) {
  const descriptions = new Map();
  const files = [...discoverTokenSets(tokensDir).tokenSets.map((tokenSet) => tokenSet.fileName)];

  function walk(node, segments) {
    if (!node || typeof node !== 'object' || Array.isArray(node)) return;

    for (const [key, value] of Object.entries(node)) {
      if (key.startsWith('$')) continue;

      const tokenPath = [...segments, key];
      if (value && typeof value === 'object' && '$value' in value) {
        if (typeof value.$description === 'string' && value.$description.trim()) {
          descriptions.set(`--${tokenPath.join('-')}`, value.$description.trim());
        }
        continue;
      }

      walk(value, tokenPath);
    }
  }

  for (const file of files) {
    walk(readJson(join(tokensDir, file)), []);
  }

  return descriptions;
}

function getThemeCssPath(packageDir, tokenSet) {
  if (tokenSet.themeId === 'default' && tokenSet.mode === 'light') {
    return join(packageDir, 'dist', 'css', 'tokens.css');
  }

  if (tokenSet.themeId === 'default' && tokenSet.mode === 'dark') {
    return join(packageDir, 'dist', 'css', 'tokens-dark.css');
  }

  return join(
    packageDir,
    'dist',
    'css',
    'themes',
    `tokens-${tokenSet.themeId}-${tokenSet.mode}.css`,
  );
}

function normalizeCssBlock(block) {
  return block
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join(' ');
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
  if (base.startsWith('co-max-w-')) return 'Sets content max width using Cobalt layout tokens.';
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
  const classBlockRe = /\.((?:[a-z0-9-]+\\:)?co-[a-z0-9-]+)\s*\{([^{}]+)\}/g;
  let match;

  while ((match = classBlockRe.exec(css)) !== null) {
    const className = match[1].replace('\\:', ':');
    if (seen.has(className)) continue;
    seen.add(className);

    const responsivePrefix = className.includes(':') ? className.split(':')[0] : undefined;
    const cssBlock = normalizeCssBlock(match[2]);
    const tokenRefs = [
      ...new Set([...cssBlock.matchAll(/var\((--co-[\w-]+)\)/g)].map((m) => m[1])),
    ];

    utilities.push({
      className,
      css: cssBlock,
      tokenRefs,
      ...(responsivePrefix ? { responsivePrefix } : {}),
      description: describeUtility(className),
    });
  }

  utilities.sort((left, right) => left.className.localeCompare(right.className));
  return utilities;
}

export function buildToolingManifest(packageDir = defaultPackageDir, tokensDir = defaultTokensDir) {
  const packageJson = readJson(join(packageDir, 'package.json'));
  const discovery = discoverTokenSets(tokensDir);
  const defaultValues = readCssCustomProperties(join(packageDir, 'dist', 'css', 'tokens.css'));
  const descriptions = buildDescriptionMap(tokensDir);
  const themeValueMaps = discovery.themeTokenSets.map((tokenSet) => ({
    theme: tokenSet.themeId,
    mode: tokenSet.mode,
    values: readCssCustomProperties(getThemeCssPath(packageDir, tokenSet)),
  }));

  const tokens = [...defaultValues.entries()]
    .map(([name, value]) => {
      const resolvedValue = resolveTokenValue(name, defaultValues);
      const themeModes = themeValueMaps
        .map((themeMap) => {
          const themeValue = themeMap.values.get(name);
          if (!themeValue) return null;
          return {
            theme: themeMap.theme,
            mode: themeMap.mode,
            value: themeValue,
          };
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
  writeFileSync(join(outputDir, 'cobalt.manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  return manifest;
}

const isCLI =
  process.argv[1] && fileURLToPath(import.meta.url).endsWith(process.argv[1].replace(/.*\//, ''));

if (isCLI) {
  generateToolingManifest();
}
