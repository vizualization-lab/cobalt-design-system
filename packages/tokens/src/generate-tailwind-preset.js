/**
 * Generates Tailwind CSS v3 preset and v4 theme CSS from Cobalt design tokens.
 *
 * Reads dist/tokens.json (built by Style Dictionary) and writes:
 *   - dist/tailwind/preset.js   (Tailwind v3 preset, ES module)
 *   - dist/tailwind/preset.d.ts (TypeScript declarations)
 *   - dist/tailwind/theme.css   (Tailwind v4 @theme block)
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

/**
 * Read the built CSS tokens file and extract all CSS variable declarations.
 * Returns a map of variable name → raw value (e.g. "--co-breakpoint-sm" → "640px").
 */
function loadTokens(rootDir) {
  const css = readFileSync(join(rootDir, 'dist/css/tokens.css'), 'utf-8');
  const tokens = {};
  const re = /--(co-[\w-]+)\s*:\s*([^;]+);/g;
  let match;
  while ((match = re.exec(css)) !== null) {
    tokens[`--${match[1]}`] = match[2].trim();
  }
  return tokens;
}

/**
 * Build the Tailwind v3 theme object and v4 CSS @theme entries from token CSS variables.
 */
function buildMappings(tokens) {
  // ── Colors ──────────────────────────────────────────────────────────────────
  const colors = {};

  // Semantic color scales: primary, neutral, danger, success, warning
  for (const role of ['primary', 'neutral', 'danger', 'success', 'warning']) {
    colors[role] = {};
    for (const shade of ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']) {
      const varName = `--co-color-${role}-${shade}`;
      if (varName in tokens) {
        colors[role][shade] = `var(${varName})`;
        if (shade === '500') colors[role].DEFAULT = `var(${varName})`;
      }
    }
  }

  // Contextual colors: background, foreground, border
  const contextualGroups = {
    background: { default: 'default', subtle: 'subtle', muted: 'muted' },
    foreground: { default: 'default', muted: 'muted', 'on-primary': 'on-primary' },
    border: { default: 'default', strong: 'strong' },
  };

  for (const [group, variants] of Object.entries(contextualGroups)) {
    colors[group] = {};
    for (const [twKey, tokenKey] of Object.entries(variants)) {
      const varName = `--co-color-${group}-${tokenKey}`;
      if (varName in tokens) {
        colors[group][twKey] = `var(${varName})`;
        if (twKey === 'default') colors[group].DEFAULT = `var(${varName})`;
      }
    }
  }

  // Primitive colors (escape hatch)
  for (const hue of [
    'neutral',
    'blue',
    'navy',
    'teal',
    'lime',
    'purple',
    'indigo',
    'brick',
    'rust',
    'gold',
    'red',
    'green',
    'orange',
    'yellow',
  ]) {
    const key = `primitive-${hue}`;
    colors[key] = {};
    for (const shade of [
      '50',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
      '950',
    ]) {
      const varName = `--co-color-primitive-${hue}-${shade}`;
      if (varName in tokens) {
        colors[key][shade] = `var(${varName})`;
      }
    }
  }

  // Primitive white & black
  colors.white = 'var(--co-color-primitive-white)';
  colors.black = 'var(--co-color-primitive-black)';
  colors.transparent = 'transparent';
  colors.current = 'currentColor';

  // ── Spacing ─────────────────────────────────────────────────────────────────
  const spacing = {};
  for (const step of ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24']) {
    const varName = `--co-spacing-${step}`;
    if (varName in tokens) {
      spacing[step] = `var(${varName})`;
    }
  }
  spacing.px = '1px';

  // ── Border Radius ───────────────────────────────────────────────────────────
  const borderRadius = {};
  for (const key of ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full']) {
    const varName = `--co-radius-${key}`;
    if (varName in tokens) {
      borderRadius[key] = `var(${varName})`;
    }
  }
  borderRadius.DEFAULT = 'var(--co-radius-md)';

  // ── Font Family ─────────────────────────────────────────────────────────────
  const fontFamily = {
    sans: ['var(--co-font-family-sans)'],
    mono: ['var(--co-font-family-mono)'],
  };

  // ── Font Size ───────────────────────────────────────────────────────────────
  const fontSize = {};
  const fontSizeMap = {
    xs: 'xs',
    sm: 'sm',
    base: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
    '3xl': '3xl',
    '4xl': '4xl',
  };
  for (const [twKey, tokenKey] of Object.entries(fontSizeMap)) {
    fontSize[twKey] = `var(--co-font-size-${tokenKey})`;
  }

  // ── Font Weight ─────────────────────────────────────────────────────────────
  const fontWeight = {
    normal: 'var(--co-font-weight-regular)',
    medium: 'var(--co-font-weight-medium)',
    semibold: 'var(--co-font-weight-semibold)',
    bold: 'var(--co-font-weight-bold)',
  };

  // ── Line Height ─────────────────────────────────────────────────────────────
  const lineHeight = {
    tight: 'var(--co-font-line-height-tight)',
    normal: 'var(--co-font-line-height-normal)',
    relaxed: 'var(--co-font-line-height-relaxed)',
  };

  // ── Box Shadow ──────────────────────────────────────────────────────────────
  const boxShadow = {
    sm: 'var(--co-shadow-sm)',
    DEFAULT: 'var(--co-shadow-md)',
    md: 'var(--co-shadow-md)',
    lg: 'var(--co-shadow-lg)',
    xl: 'var(--co-shadow-xl)',
    none: 'none',
  };

  // ── Z-Index ─────────────────────────────────────────────────────────────────
  const zIndex = {
    dropdown: 'var(--co-z-index-dropdown)',
    sticky: 'var(--co-z-index-sticky)',
    fixed: 'var(--co-z-index-fixed)',
    'modal-backdrop': 'var(--co-z-index-modal-backdrop)',
    modal: 'var(--co-z-index-modal)',
    popover: 'var(--co-z-index-popover)',
    tooltip: 'var(--co-z-index-tooltip)',
  };

  // ── Transition Duration ─────────────────────────────────────────────────────
  const transitionDuration = {
    fast: 'var(--co-transition-duration-fast)',
    DEFAULT: 'var(--co-transition-duration-normal)',
    normal: 'var(--co-transition-duration-normal)',
    slow: 'var(--co-transition-duration-slow)',
  };

  // ── Transition Timing Function ──────────────────────────────────────────────
  const transitionTimingFunction = {
    DEFAULT: 'var(--co-transition-easing-default)',
    in: 'var(--co-transition-easing-in)',
    out: 'var(--co-transition-easing-out)',
    'in-out': 'var(--co-transition-easing-in-out)',
  };

  // ── Breakpoints (raw values — var() not supported in @media) ────────────────
  const screens = {};
  for (const bp of ['sm', 'md', 'lg', 'xl', '2xl']) {
    const varName = `--co-breakpoint-${bp}`;
    if (varName in tokens) {
      screens[bp] = tokens[varName];
    }
  }

  return {
    colors,
    spacing,
    borderRadius,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    boxShadow,
    zIndex,
    transitionDuration,
    transitionTimingFunction,
    screens,
  };
}

// ── V3 Preset Generation ────────────────────────────────────────────────────

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

  const entries = [
    ['colors', mappings.colors],
    ['spacing', mappings.spacing],
    ['borderRadius', mappings.borderRadius],
    ['fontFamily', mappings.fontFamily],
    ['fontSize', mappings.fontSize],
    ['fontWeight', mappings.fontWeight],
    ['lineHeight', mappings.lineHeight],
    ['boxShadow', mappings.boxShadow],
    ['zIndex', mappings.zIndex],
    ['transitionDuration', mappings.transitionDuration],
    ['transitionTimingFunction', mappings.transitionTimingFunction],
    ['screens', mappings.screens],
  ];

  for (const [key, value] of entries) {
    lines.push(`    ${key}: ${serializeJS(value, 4)},`);
  }

  lines.push('  },');
  lines.push('};');
  lines.push('');
  lines.push('export default cobaltPreset;');
  lines.push('');

  return lines.join('\n');
}

/**
 * Serialize a value to readable JS source. Handles nested objects, arrays, and strings.
 */
function serializeJS(value, indent) {
  const pad = ' '.repeat(indent);
  const innerPad = ' '.repeat(indent + 2);

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  if (Array.isArray(value)) {
    const items = value.map((v) => serializeJS(v, indent + 2));
    return `[${items.join(', ')}]`;
  }

  if (typeof value === 'object' && value !== null) {
    const keys = Object.keys(value);
    if (keys.length === 0) return '{}';

    const lines = ['{'];
    for (const k of keys) {
      const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `'${k}'`;
      lines.push(`${innerPad}${safeKey}: ${serializeJS(value[k], indent + 2)},`);
    }
    lines.push(`${pad}}`);
    return lines.join('\n');
  }

  return String(value);
}

// ── V3 TypeScript Declarations ──────────────────────────────────────────────

function generateV3Dts() {
  return [
    'import type { Config } from "tailwindcss";',
    '',
    'declare const cobaltPreset: Config;',
    'export default cobaltPreset;',
    '',
  ].join('\n');
}

// ── V4 Theme CSS Generation ────────────────────────────────────────────────

function generateV4ThemeCSS(mappings) {
  const lines = [
    '/**',
    ' * Cobalt Design System — Tailwind CSS v4 Theme',
    ' * Auto-generated from design tokens. Do not edit.',
    ' */',
    '',
    '@theme {',
  ];

  // Colors
  lines.push('  /* Colors */');
  emitV4Colors(lines, mappings.colors);

  // Spacing
  lines.push('');
  lines.push('  /* Spacing */');
  for (const [key, value] of Object.entries(mappings.spacing)) {
    lines.push(`  --spacing-${key}: ${value};`);
  }

  // Border radius
  lines.push('');
  lines.push('  /* Border Radius */');
  for (const [key, value] of Object.entries(mappings.borderRadius)) {
    if (key === 'DEFAULT') {
      lines.push(`  --radius: ${value};`);
    } else {
      lines.push(`  --radius-${key}: ${value};`);
    }
  }

  // Font family
  lines.push('');
  lines.push('  /* Font Family */');
  for (const [key, [value]] of Object.entries(mappings.fontFamily)) {
    lines.push(`  --font-${key}: ${value};`);
  }

  // Font size
  lines.push('');
  lines.push('  /* Font Size */');
  for (const [key, value] of Object.entries(mappings.fontSize)) {
    lines.push(`  --text-${key}: ${value};`);
  }

  // Font weight
  lines.push('');
  lines.push('  /* Font Weight */');
  for (const [key, value] of Object.entries(mappings.fontWeight)) {
    lines.push(`  --font-weight-${key}: ${value};`);
  }

  // Line height
  lines.push('');
  lines.push('  /* Line Height */');
  for (const [key, value] of Object.entries(mappings.lineHeight)) {
    lines.push(`  --leading-${key}: ${value};`);
  }

  // Box shadow
  lines.push('');
  lines.push('  /* Box Shadow */');
  for (const [key, value] of Object.entries(mappings.boxShadow)) {
    if (key === 'DEFAULT') {
      lines.push(`  --shadow: ${value};`);
    } else {
      lines.push(`  --shadow-${key}: ${value};`);
    }
  }

  // Z-index
  lines.push('');
  lines.push('  /* Z-Index */');
  for (const [key, value] of Object.entries(mappings.zIndex)) {
    lines.push(`  --z-${key}: ${value};`);
  }

  // Transition duration
  lines.push('');
  lines.push('  /* Transition Duration */');
  for (const [key, value] of Object.entries(mappings.transitionDuration)) {
    if (key === 'DEFAULT') {
      lines.push(`  --duration: ${value};`);
    } else {
      lines.push(`  --duration-${key}: ${value};`);
    }
  }

  // Transition timing function
  lines.push('');
  lines.push('  /* Transition Timing Function */');
  for (const [key, value] of Object.entries(mappings.transitionTimingFunction)) {
    if (key === 'DEFAULT') {
      lines.push(`  --ease: ${value};`);
    } else {
      lines.push(`  --ease-${key}: ${value};`);
    }
  }

  // Breakpoints
  lines.push('');
  lines.push('  /* Breakpoints */');
  for (const [key, value] of Object.entries(mappings.screens)) {
    lines.push(`  --breakpoint-${key}: ${value};`);
  }

  lines.push('}');
  lines.push('');

  return lines.join('\n');
}

/**
 * Emit v4 color theme variables. Handles nested color objects and DEFAULT keys.
 */
function emitV4Colors(lines, colors) {
  for (const [group, value] of Object.entries(colors)) {
    if (typeof value === 'string') {
      lines.push(`  --color-${group}: ${value};`);
    } else {
      for (const [shade, colorValue] of Object.entries(value)) {
        if (shade === 'DEFAULT') {
          lines.push(`  --color-${group}: ${colorValue};`);
        } else {
          lines.push(`  --color-${group}-${shade}: ${colorValue};`);
        }
      }
    }
  }
}

// ── Main ────────────────────────────────────────────────────────────────────

export async function generateTailwindPreset(rootDir) {
  const outDir = join(rootDir, 'dist/tailwind');
  mkdirSync(outDir, { recursive: true });

  const tokens = loadTokens(rootDir);
  const mappings = buildMappings(tokens);

  writeFileSync(join(outDir, 'preset.js'), generateV3Preset(mappings));
  writeFileSync(join(outDir, 'preset.d.ts'), generateV3Dts());
  writeFileSync(join(outDir, 'theme.css'), generateV4ThemeCSS(mappings));

  console.log(`  → dist/tailwind/preset.js`);
  console.log(`  → dist/tailwind/preset.d.ts`);
  console.log(`  → dist/tailwind/theme.css`);
}
