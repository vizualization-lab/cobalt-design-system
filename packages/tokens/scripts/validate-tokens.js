import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { discoverTokenSets } from './token-set-utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

function deepMerge(target, source) {
  for (const [key, value] of Object.entries(source)) {
    if (
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      !Object.prototype.hasOwnProperty.call(value, '$value')
    ) {
      target[key] ??= {};
      deepMerge(target[key], value);
      continue;
    }

    target[key] = value;
  }

  return target;
}

function flattenTokens(node, path = [], out = []) {
  for (const [key, value] of Object.entries(node)) {
    const nextPath = [...path, key];
    if (
      value &&
      typeof value === 'object' &&
      Object.prototype.hasOwnProperty.call(value, '$value')
    ) {
      out.push({ path: nextPath.join('.'), token: value });
      continue;
    }

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flattenTokens(value, nextPath, out);
    }
  }

  return out;
}

function getNode(root, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], root);
}

function resolveTokenValue(root, path, trail = new Set()) {
  if (trail.has(path)) {
    throw new Error(`Circular token reference detected: ${[...trail, path].join(' -> ')}`);
  }

  const node = getNode(root, path);
  if (!node || typeof node !== 'object' || !Object.prototype.hasOwnProperty.call(node, '$value')) {
    throw new Error(`Missing token: ${path}`);
  }

  const value = node.$value;
  if (typeof value === 'string' && /^\{.+\}$/.test(value)) {
    const nextTrail = new Set(trail);
    nextTrail.add(path);
    return resolveTokenValue(root, value.slice(1, -1), nextTrail);
  }

  return value;
}

function hexToRgb(hex) {
  const normalized = hex.replace('#', '');
  const full =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => char + char)
          .join('')
      : normalized;
  const numeric = Number.parseInt(full, 16);
  return [(numeric >> 16) & 255, (numeric >> 8) & 255, numeric & 255];
}

function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(foreground, background) {
  const foregroundLuminance = luminance(foreground);
  const backgroundLuminance = luminance(background);
  const [lighter, darker] =
    foregroundLuminance > backgroundLuminance
      ? [foregroundLuminance, backgroundLuminance]
      : [backgroundLuminance, foregroundLuminance];

  return (lighter + 0.05) / (darker + 0.05);
}

function validateThemeSchemas(tokensDir, discovery, errors) {
  if (discovery.themeTokenSets.length === 0) {
    errors.push('At least one semantic.theme.<theme-id>.<mode>.json token set is required.');
    return;
  }

  const themeSchemas = discovery.themeTokenSets.map((tokenSet) => {
    const tokens = readJson(join(tokensDir, tokenSet.fileName));
    return {
      name: tokenSet.name,
      paths: new Set(flattenTokens(tokens).map((entry) => entry.path)),
    };
  });

  const baseline = themeSchemas[0];
  for (const schema of themeSchemas.slice(1)) {
    const missing = [...baseline.paths].filter((path) => !schema.paths.has(path));
    const extra = [...schema.paths].filter((path) => !baseline.paths.has(path));

    if (missing.length > 0) {
      errors.push(`${schema.name} is missing theme tokens: ${missing.join(', ')}`);
    }

    if (extra.length > 0) {
      errors.push(`${schema.name} defines unexpected theme tokens: ${extra.join(', ')}`);
    }
  }
}

function validateComponentColorReferences(tokensDir, discovery, errors) {
  for (const tokenSet of discovery.componentTokenSets) {
    const tokens = readJson(join(tokensDir, tokenSet.fileName));
    for (const entry of flattenTokens(tokens)) {
      if (entry.token.$type !== 'color' || typeof entry.token.$value !== 'string') {
        continue;
      }

      if (entry.token.$value.startsWith('{co.color.primitive.')) {
        errors.push(
          `${tokenSet.name} token ${entry.path} references a primitive color directly. Reference semantic color tokens instead.`,
        );
      }
    }
  }
}

function validateContrast(tokensDir, discovery, errors) {
  const sharedRoot = {};
  const sharedTokenSets = [
    ...discovery.primitives,
    ...discovery.sharedSemantic,
    ...discovery.componentTokenSets,
  ];

  for (const tokenSet of sharedTokenSets) {
    deepMerge(sharedRoot, readJson(join(tokensDir, tokenSet.fileName)));
  }

  const checks = [
    {
      foreground: 'co.color.text.default',
      background: 'co.color.surface.default',
      minimum: 4.5,
    },
    {
      foreground: 'co.color.text.placeholder',
      background: 'co.color.surface.default',
      minimum: 4.5,
    },
    {
      foreground: 'co.color.text.disabled',
      background: 'co.color.surface.disabled',
      minimum: 4.5,
    },
    {
      foreground: 'co.color.text.on.primary',
      background: 'co.color.primary.base',
      minimum: 4.5,
    },
    {
      foreground: 'co.color.primary.contrast',
      background: 'co.color.primary.base',
      minimum: 4.5,
    },
    {
      foreground: 'co.color.danger.contrast',
      background: 'co.color.danger.base',
      minimum: 4.5,
    },
    {
      foreground: 'co.color.success.contrast',
      background: 'co.color.success.base',
      minimum: 4.5,
    },
    {
      foreground: 'co.color.feedback.danger.text',
      background: 'co.color.feedback.danger.background',
      minimum: 4.5,
    },
    {
      foreground: 'co.color.feedback.success.text',
      background: 'co.color.feedback.success.background',
      minimum: 4.5,
    },
    {
      foreground: 'co.color.feedback.warning.text',
      background: 'co.color.feedback.warning.background',
      minimum: 4.5,
    },
  ];

  for (const themeTokenSet of discovery.themeTokenSets) {
    const resolvedRoot = deepMerge(
      structuredClone(sharedRoot),
      readJson(join(tokensDir, themeTokenSet.fileName)),
    );

    for (const check of checks) {
      try {
        const foreground = resolveTokenValue(resolvedRoot, check.foreground);
        const background = resolveTokenValue(resolvedRoot, check.background);
        const ratio = contrastRatio(foreground, background);

        if (ratio < check.minimum) {
          errors.push(
            `${themeTokenSet.name} fails contrast for ${check.foreground} on ${check.background}: ${ratio.toFixed(2)} < ${check.minimum.toFixed(1)}`,
          );
        }
      } catch (error) {
        errors.push(`${themeTokenSet.name} contrast check failed: ${error.message}`);
      }
    }
  }
}

export function validateTokens(tokensDir) {
  const discovery = discoverTokenSets(tokensDir);
  const errors = [];

  if (discovery.uncategorized.length > 0) {
    errors.push(
      `Unsupported token sets detected: ${discovery.uncategorized.map((tokenSet) => tokenSet.name).join(', ')}`,
    );
  }

  if (
    !discovery.themeTokenSets.some(
      (tokenSet) => tokenSet.themeId === 'default' && tokenSet.mode === 'light',
    )
  ) {
    errors.push('Missing required token set: semantic.theme.default.light');
  }

  validateThemeSchemas(tokensDir, discovery, errors);
  validateComponentColorReferences(tokensDir, discovery, errors);
  validateContrast(tokensDir, discovery, errors);

  return { discovery, errors };
}

const isCLI =
  process.argv[1] && fileURLToPath(import.meta.url).endsWith(process.argv[1].replace(/.*\//, ''));

if (isCLI) {
  const tokensDir = join(__dirname, '..', 'tokens');
  const { errors } = validateTokens(tokensDir);

  if (errors.length > 0) {
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log('Token validation passed.');
}
