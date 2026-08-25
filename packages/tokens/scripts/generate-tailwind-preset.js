/**
 * Generates Tailwind CSS v3 preset and v4 theme CSS from Cobalt design tokens.
 *
 * Reads dist/css/tokens.css (built by Style Dictionary) and writes:
 *   - dist/tailwind/preset.js   (Tailwind v3 preset, ES module)
 *   - dist/tailwind/preset.d.ts (TypeScript declarations)
 *   - dist/tailwind/theme.css   (Tailwind v4 @theme block)
 */

import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const FONT_FAMILIES = {
  sans: ["'Inter Variable'", "'Noto Sans Variable'", 'system-ui', 'sans-serif'],
  mono: ["'JetBrains Mono Variable'", "'Fira Code'", 'monospace'],
};

function loadTokens(rootDir) {
  const css = readFileSync(join(rootDir, 'dist/css/tokens.css'), 'utf-8');
  const tokens = {};
  const re = /--(co-[\w-]+)\s*:\s*([^;]+);/g;
  let match;

  while ((match = re.exec(css)) !== null) {
    tokens[`--${match[1]}`] = match[2].trim();
  }

  if (Object.keys(tokens).length === 0) {
    throw new Error('No --co-* CSS variables found while generating the Tailwind preset.');
  }

  return tokens;
}

function tokenReference(tokens, varName) {
  if (!(varName in tokens)) {
    throw new Error(`Missing required Tailwind token: ${varName}`);
  }

  return `var(${varName})`;
}

function setNested(target, path, value) {
  let current = target;

  for (const segment of path.slice(0, -1)) {
    current[segment] ??= {};
    current = current[segment];
  }

  current[path.at(-1)] = value;
}

function discoverNestedTokens(tokens, prefix) {
  const result = {};

  for (const varName of Object.keys(tokens).sort()) {
    if (!varName.startsWith(prefix)) continue;

    const path = varName.slice(prefix.length).split('-');
    const value = `var(${varName})`;
    setNested(result, path, value);

    // Tailwind uses DEFAULT to make a nested role available without a suffix,
    // while the explicit "default" key preserves the DTCG token name.
    if (path.at(-1) === 'default') {
      setNested(result, [...path.slice(0, -1), 'DEFAULT'], value);
    }
  }

  return result;
}

function discoverFlatTokens(tokens, prefix) {
  const result = {};

  for (const varName of Object.keys(tokens).sort()) {
    if (!varName.startsWith(prefix)) continue;
    result[varName.slice(prefix.length)] = `var(${varName})`;
  }

  return result;
}

function buildMappings(tokens) {
  // All co.color primitives and semantic roles retain their refreshed token
  // hierarchy: neutral, iris, background, text, icon, border, and link.
  const colors = discoverNestedTokens(tokens, '--co-color-');
  colors.theme = discoverFlatTokens(tokens, '--co-theme-');
  colors.elevation = {
    shadow: discoverFlatTokens(tokens, '--co-elevation-shadow-'),
  };
  colors.white = tokenReference(tokens, '--co-color-neutral-0');
  colors.black = tokenReference(tokens, '--co-color-neutral-1000');
  colors.transparent = 'transparent';
  colors.current = 'currentColor';

  const spacing = {};
  for (const [key, value] of Object.entries(discoverFlatTokens(tokens, '--co-space-'))) {
    if (/^\d+$/.test(key)) spacing[key] = value;
  }
  spacing.px = '1px';

  for (const role of ['gap', 'padding', 'margin']) {
    const roleTokens = discoverFlatTokens(tokens, `--co-space-${role}-`);
    for (const [key, value] of Object.entries(roleTokens)) {
      spacing[`${role}-${key}`] = value;
    }
  }

  const borderRadius = discoverFlatTokens(tokens, '--co-radius-');
  borderRadius.none = tokenReference(tokens, '--co-border-radius-none');
  borderRadius.DEFAULT = tokenReference(tokens, '--co-radius-default');

  const fontFamily = FONT_FAMILIES;
  const fontSize = discoverFlatTokens(tokens, '--co-font-size-');
  const fontWeight = discoverFlatTokens(tokens, '--co-font-weight-');
  fontWeight.normal = fontWeight.regular;
  const lineHeight = discoverFlatTokens(tokens, '--co-font-line-height-');
  const letterSpacing = discoverFlatTokens(tokens, '--co-font-tracking-');

  const zIndex = discoverFlatTokens(tokens, '--co-elevation-surface-');
  Object.assign(zIndex, discoverFlatTokens(tokens, '--co-elevation-z-'));

  // Breakpoints must be raw values because CSS custom properties are not
  // supported in media query conditions.
  const screens = {};
  for (const bp of ['sm', 'md', 'lg', 'xl', '2xl']) {
    const varName = `--co-breakpoint-${bp}`;
    if (varName in tokens) screens[bp] = tokens[varName];
  }

  return {
    colors,
    spacing,
    borderRadius,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    zIndex,
    screens,
  };
}

function serializeJS(value, indent) {
  const pad = ' '.repeat(indent);
  const innerPad = ' '.repeat(indent + 2);

  if (typeof value === 'string') {
    return `'${value.replaceAll('\\', '\\\\').replaceAll("'", "\\'")}'`;
  }

  if (Array.isArray(value)) {
    return `[${value.map((item) => serializeJS(item, indent + 2)).join(', ')}]`;
  }

  if (typeof value === 'object' && value !== null) {
    const keys = Object.keys(value);
    if (keys.length === 0) return '{}';

    const lines = ['{'];
    for (const key of keys) {
      const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`;
      lines.push(`${innerPad}${safeKey}: ${serializeJS(value[key], indent + 2)},`);
    }
    lines.push(`${pad}}`);
    return lines.join('\n');
  }

  return String(value);
}

function generateV3Preset(mappings) {
  const lines = [
    '/**',
    ' * Cobalt Design System — Tailwind CSS v3 Preset',
    ' * Auto-generated from design tokens. Do not edit.',
    ' */',
    '',
    '/** @type {import("tailwindcss").Config} */',
    'const cobaltPreset = {',
    '  theme: {',
  ];

  for (const [key, value] of Object.entries(mappings)) {
    lines.push(`    ${key}: ${serializeJS(value, 4)},`);
  }

  lines.push('  },', '};', '', 'export default cobaltPreset;', '');
  return lines.join('\n');
}

function generateV3Dts() {
  return [
    'import type { Config } from "tailwindcss";',
    '',
    'declare const cobaltPreset: Config;',
    'export default cobaltPreset;',
    '',
  ].join('\n');
}

function emitV4Colors(lines, colors, path = []) {
  for (const [group, value] of Object.entries(colors)) {
    if (typeof value === 'string') {
      const colorPath = group === 'DEFAULT' ? path : [...path, group];
      lines.push(`  --color-${colorPath.join('-')}: ${value};`);
      continue;
    }

    emitV4Colors(lines, value, [...path, group]);
  }
}

function emitV4Entries(lines, label, prefix, entries, defaultKey = null) {
  lines.push('', `  /* ${label} */`);
  for (const [key, value] of Object.entries(entries)) {
    const outputKey = key === defaultKey ? prefix : `${prefix}-${key}`;
    lines.push(`  --${outputKey}: ${value};`);
  }
}

function generateV4ThemeCSS(mappings) {
  const lines = [
    '/**',
    ' * Cobalt Design System — Tailwind CSS v4 Theme',
    ' * Auto-generated from design tokens. Do not edit.',
    ' */',
    '',
    '@theme {',
    '  /* Colors */',
  ];

  emitV4Colors(lines, mappings.colors);
  emitV4Entries(lines, 'Spacing', 'spacing', mappings.spacing);
  emitV4Entries(lines, 'Border Radius', 'radius', mappings.borderRadius, 'DEFAULT');

  lines.push('', '  /* Font Family */');
  for (const [key, value] of Object.entries(mappings.fontFamily)) {
    lines.push(`  --font-${key}: ${value.join(', ')};`);
  }

  emitV4Entries(lines, 'Font Size', 'text', mappings.fontSize);
  emitV4Entries(lines, 'Font Weight', 'font-weight', mappings.fontWeight);
  emitV4Entries(lines, 'Line Height', 'leading', mappings.lineHeight);
  emitV4Entries(lines, 'Letter Spacing', 'tracking', mappings.letterSpacing);
  emitV4Entries(lines, 'Z-Index', 'z', mappings.zIndex);
  emitV4Entries(lines, 'Breakpoints', 'breakpoint', mappings.screens);

  lines.push('}', '');
  return lines.join('\n');
}

function validateReferences(tokens, generatedFiles) {
  for (const [fileName, content] of Object.entries(generatedFiles)) {
    const references = [...content.matchAll(/var\((--co-[\w-]+)\)/g)].map((match) => match[1]);
    const missing = [...new Set(references.filter((varName) => !(varName in tokens)))];

    if (missing.length > 0) {
      throw new Error(
        `Tailwind ${fileName} references missing tokens:\n${missing.map((name) => `  - ${name}`).join('\n')}`,
      );
    }
  }
}

export async function generateTailwindPreset(rootDir) {
  const outDir = join(rootDir, 'dist/tailwind');
  mkdirSync(outDir, { recursive: true });

  const tokens = loadTokens(rootDir);
  const mappings = buildMappings(tokens);
  const generatedFiles = {
    'preset.js': generateV3Preset(mappings),
    'preset.d.ts': generateV3Dts(),
    'theme.css': generateV4ThemeCSS(mappings),
  };

  validateReferences(tokens, generatedFiles);

  for (const [fileName, content] of Object.entries(generatedFiles)) {
    writeFileSync(join(outDir, fileName), content);
    console.log(`  → dist/tailwind/${fileName}`);
  }
}
