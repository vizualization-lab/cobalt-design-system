import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'dist');

const STYLES = ['rounded'];

/**
 * Normalize Material Symbols filename (snake_case) to kebab-case.
 * e.g. "arrow_forward" → "arrow-forward"
 */
function toKebab(name) {
  return name.replace(/_/g, '-');
}

/**
 * Extract the inner content of an SVG (everything inside the <svg> tag).
 * This strips the outer <svg …> wrapper so consumers can embed it in their own.
 */
function extractSvgContent(svgString) {
  const inner = svgString
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim();
  return inner;
}

function build() {
  mkdirSync(outDir, { recursive: true });

  const msBase = join(root, 'node_modules', '@material-symbols', 'svg-300');

  // registry: Map<style, Map<kebab-name, svgContent>>
  const registry = new Map();
  const baseNames = new Set();

  for (const style of STYLES) {
    const styleDir = join(msBase, style);
    const styleMap = new Map();

    let files;
    try {
      files = readdirSync(styleDir).filter((f) => f.endsWith('.svg'));
    } catch {
      console.warn(`Warning: style directory not found: ${styleDir}`);
      registry.set(style, styleMap);
      continue;
    }

    for (const file of files) {
      const rawName = basename(file, '.svg');
      const kebabName = toKebab(rawName);
      const svgString = readFileSync(join(styleDir, file), 'utf-8');
      const content = extractSvgContent(svgString);
      styleMap.set(kebabName, content);

      // Track base icon names (without -fill suffix) for the iconNames export
      const baseName = kebabName.endsWith('-fill') ? kebabName.slice(0, -5) : kebabName;
      baseNames.add(baseName);
    }

    registry.set(style, styleMap);
  }

  // Scan custom icons from custom/rounded/
  const customBase = join(root, 'custom');
  const customBaseNames = new Set();

  for (const style of STYLES) {
    const customStyleDir = join(customBase, style);
    if (!existsSync(customStyleDir)) continue;

    const styleMap = registry.get(style);
    let files;
    try {
      files = readdirSync(customStyleDir).filter((f) => f.endsWith('.svg'));
    } catch {
      continue;
    }

    for (const file of files) {
      const kebabName = basename(file, '.svg');

      // Validate co- prefix (check base name without -fill suffix)
      const nameToCheck = kebabName.endsWith('-fill') ? kebabName.slice(0, -5) : kebabName;
      if (!nameToCheck.startsWith('co-')) {
        console.warn(`Warning: custom icon "${file}" does not start with "co-" prefix — skipping`);
        continue;
      }

      const svgString = readFileSync(join(customStyleDir, file), 'utf-8');
      const content = extractSvgContent(svgString);
      styleMap.set(kebabName, content);

      // Track base icon names
      const baseName = kebabName.endsWith('-fill') ? kebabName.slice(0, -5) : kebabName;
      baseNames.add(baseName);
      customBaseNames.add(baseName);
    }
  }

  // Scan override icons from overrides/{style}/
  const overridesBase = join(root, 'overrides');
  const overrideBaseNames = new Set();

  for (const style of STYLES) {
    const overrideStyleDir = join(overridesBase, style);
    if (!existsSync(overrideStyleDir)) continue;

    const styleMap = registry.get(style);
    let files;
    try {
      files = readdirSync(overrideStyleDir).filter((f) => f.endsWith('.svg'));
    } catch {
      continue;
    }

    for (const file of files) {
      const kebabName = basename(file, '.svg');
      const nameToCheck = kebabName.endsWith('-fill') ? kebabName.slice(0, -5) : kebabName;

      // Warn if the override doesn't match an existing Material Symbols icon
      if (!styleMap.has(nameToCheck) && !styleMap.has(nameToCheck + '-fill')) {
        console.warn(
          `Warning: override icon "${file}" does not match any existing icon in "${style}" — possible typo`,
        );
      }

      const svgString = readFileSync(join(overrideStyleDir, file), 'utf-8');
      const content = extractSvgContent(svgString);
      styleMap.set(kebabName, content);

      // Track base icon names
      const baseName = kebabName.endsWith('-fill') ? kebabName.slice(0, -5) : kebabName;
      overrideBaseNames.add(baseName);
    }
  }

  // Scan animated icon variants from animated/{style}/
  const animatedBase = join(root, 'animated');
  const animatedRegistry = new Map();
  const animatedBaseNames = new Set();

  for (const style of STYLES) {
    const animatedStyleDir = join(animatedBase, style);
    const animatedStyleMap = new Map();

    if (existsSync(animatedStyleDir)) {
      let files;
      try {
        files = readdirSync(animatedStyleDir).filter((f) => f.endsWith('.svg'));
      } catch {
        files = [];
      }

      for (const file of files) {
        const kebabName = basename(file, '.svg');
        const svgString = readFileSync(join(animatedStyleDir, file), 'utf-8');
        const content = extractSvgContent(svgString);
        animatedStyleMap.set(kebabName, content);

        const baseName = kebabName.endsWith('-fill') ? kebabName.slice(0, -5) : kebabName;
        animatedBaseNames.add(baseName);
      }
    }

    animatedRegistry.set(style, animatedStyleMap);
  }

  const sortedNames = [...baseNames].sort();
  const sortedCustomNames = [...customBaseNames].sort();
  const sortedOverrideNames = [...overrideBaseNames].sort();
  const sortedAnimatedNames = [...animatedBaseNames].sort();

  // Build the JS registry module
  const lines = [
    '// Auto-generated by build-registry.js — do not edit',
    '',
    '/** @typedef {"rounded"} IconStyle */',
    '',
    '/** @type {Record<string, Record<string, string>>} */',
    'const registry = {',
  ];

  for (const style of STYLES) {
    const styleMap = registry.get(style);
    lines.push(`  "${style}": {`);
    for (const [name, content] of styleMap) {
      // Escape backticks and backslashes in SVG content
      const escaped = content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
      lines.push(`    "${name}": \`${escaped}\`,`);
    }
    lines.push('  },');
  }

  lines.push('};');
  lines.push('');
  lines.push('/**');
  lines.push(' * Get the inner SVG content for an icon.');
  lines.push(' * @param {string} name - Kebab-case icon name (e.g. "arrow-forward")');
  lines.push(' * @param {IconStyle} [style="rounded"] - Icon style variant');
  lines.push(' * @param {boolean} [fill=false] - Whether to use the filled version');
  lines.push(' * @returns {string | undefined}');
  lines.push(' */');
  lines.push('export function getIcon(name, style = "rounded", fill = false) {');
  lines.push("  const key = fill ? name + '-fill' : name;");
  lines.push('  return registry[style]?.[key];');
  lines.push('}');
  lines.push('');
  lines.push(`/** All available icon names (kebab-case, without -fill suffix). */`);
  lines.push(`export const iconNames = ${JSON.stringify(sortedNames)};`);
  lines.push('');
  lines.push(`/** Set of icon names that use the 24×24 viewBox (custom icons). */`);
  lines.push(`export const customIconNames = new Set(${JSON.stringify(sortedCustomNames)});`);
  lines.push('');
  lines.push(
    `/** Set of icon names that are overrides of Material Symbols icons (24×24 viewBox). */`,
  );
  lines.push(`export const overrideIconNames = new Set(${JSON.stringify(sortedOverrideNames)});`);
  lines.push('');

  // Animated registry
  lines.push('/** @type {Record<string, Record<string, string>>} */');
  lines.push('const animatedReg = {');

  for (const style of STYLES) {
    const styleMap = animatedRegistry.get(style);
    lines.push(`  "${style}": {`);
    for (const [name, content] of styleMap) {
      const escaped = content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
      lines.push(`    "${name}": \`${escaped}\`,`);
    }
    lines.push('  },');
  }

  lines.push('};');
  lines.push('');
  lines.push('/**');
  lines.push(' * Get the animated SVG variant for an icon.');
  lines.push(' * @param {string} name - Kebab-case icon name');
  lines.push(' * @param {IconStyle} [style="rounded"] - Icon style variant');
  lines.push(' * @param {boolean} [fill=false] - Whether to use the filled version');
  lines.push(' * @returns {string | undefined}');
  lines.push(' */');
  lines.push('export function getAnimatedIcon(name, style = "rounded", fill = false) {');
  lines.push("  const key = fill ? name + '-fill' : name;");
  lines.push('  return animatedReg[style]?.[key];');
  lines.push('}');
  lines.push('');
  lines.push(
    `/** Set of icon names that have animated variants (kebab-case, without -fill suffix). */`,
  );
  lines.push(`export const animatedIconNames = new Set(${JSON.stringify(sortedAnimatedNames)});`);
  lines.push('');

  writeFileSync(join(outDir, 'index.js'), lines.join('\n'));

  // Build TypeScript declarations
  const dts = [
    '// Auto-generated by build-registry.js — do not edit',
    '',
    "export type IconStyle = 'rounded';",
    '',
    '/**',
    ' * Get the inner SVG content for an icon.',
    ' * @param name - Kebab-case icon name (e.g. "arrow-forward")',
    ' * @param style - Icon style variant (default: "rounded")',
    ' * @param fill - Whether to use the filled version (default: false)',
    ' * @returns The inner SVG content string, or undefined if not found',
    ' */',
    'export declare function getIcon(name: string, style?: IconStyle, fill?: boolean): string | undefined;',
    '',
    '/** All available icon names (kebab-case, without -fill suffix). */',
    'export declare const iconNames: string[];',
    '',
    '/** Set of icon names that use the 24×24 viewBox (custom icons). */',
    'export declare const customIconNames: Set<string>;',
    '',
    '/** Set of icon names that are overrides of Material Symbols icons (24×24 viewBox). */',
    'export declare const overrideIconNames: Set<string>;',
    '',
    '/**',
    ' * Get the animated SVG variant for an icon.',
    ' * @param name - Kebab-case icon name',
    ' * @param style - Icon style variant (default: "rounded")',
    ' * @param fill - Whether to use the filled version (default: false)',
    ' * @returns The animated SVG content string, or undefined if not found',
    ' */',
    'export declare function getAnimatedIcon(name: string, style?: IconStyle, fill?: boolean): string | undefined;',
    '',
    '/** Set of icon names that have animated variants (kebab-case, without -fill suffix). */',
    'export declare const animatedIconNames: Set<string>;',
    '',
  ];

  writeFileSync(join(outDir, 'index.d.ts'), dts.join('\n'));

  console.log(
    `Icon registry built: ${sortedNames.length} icons (${sortedCustomNames.length} custom, ${sortedOverrideNames.length} overrides, ${sortedAnimatedNames.length} animated) across ${STYLES.length} styles → dist/index.js`,
  );
}

build();
