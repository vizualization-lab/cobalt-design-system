import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'dist');
const categoryMetadataFile = join(root, 'src', 'icon-categories.json');
const customSearchMetadataFile = join(root, 'custom', 'metadata.json');

const STYLES = ['rounded'];
const FALLBACK_CATEGORIES = [
  { id: 'cobalt', label: 'Cobalt Custom Icons' },
  { id: 'other', label: 'Other' },
];

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

function readCategoryMetadata() {
  try {
    return JSON.parse(readFileSync(categoryMetadataFile, 'utf-8'));
  } catch (error) {
    throw new Error(
      `Unable to read icon category metadata from ${categoryMetadataFile}. Run "pnpm --filter @cobalt/icons refresh-categories" to regenerate it. ${error.message}`,
    );
  }
}

function readCustomSearchMetadata() {
  if (!existsSync(customSearchMetadataFile)) {
    return {};
  }

  try {
    return JSON.parse(readFileSync(customSearchMetadataFile, 'utf-8'));
  } catch (error) {
    throw new Error(
      `Unable to read custom icon search metadata from ${customSearchMetadataFile}. ${error.message}`,
    );
  }
}

function iconCategoriesFor(entry) {
  if (Array.isArray(entry)) {
    return entry;
  }

  if (entry && Array.isArray(entry.categories)) {
    return entry.categories;
  }

  return [];
}

function iconTagsFor(entry) {
  if (entry && Array.isArray(entry.tags)) {
    return entry.tags;
  }

  return [];
}

function normalizeSearchTerms(terms, source) {
  if (!Array.isArray(terms)) {
    throw new Error(`${source} must be an array of search term strings.`);
  }

  return [
    ...new Set(
      terms
        .filter((term) => typeof term === 'string')
        .map((term) => term.trim())
        .filter(Boolean),
    ),
  ];
}

function buildCategoryExports(sortedNames, sortedCustomNames, metadata) {
  const customNames = new Set(sortedCustomNames);
  const categoryDefinitions = [...metadata.categories, ...FALLBACK_CATEGORIES];
  const knownCategoryIds = new Set(categoryDefinitions.map((category) => category.id));
  const iconsByCategory = new Map(categoryDefinitions.map((category) => [category.id, []]));
  const categoryByIconName = {};

  for (const name of sortedNames) {
    let categoryIds = customNames.has(name) ? ['cobalt'] : iconCategoriesFor(metadata.icons[name]);

    categoryIds = categoryIds.filter((categoryId) => knownCategoryIds.has(categoryId));
    if (categoryIds.length === 0) {
      categoryIds = ['other'];
    }

    categoryByIconName[name] = categoryIds;

    for (const categoryId of categoryIds) {
      iconsByCategory.get(categoryId).push(name);
    }
  }

  const categories = categoryDefinitions
    .map((category) => ({
      ...category,
      iconNames: iconsByCategory.get(category.id) ?? [],
    }))
    .filter((category) => category.iconNames.length > 0);

  return {
    categories,
    categoryByIconName,
  };
}

function buildSearchTermExports(sortedNames, sortedCustomNames, metadata, customSearchMetadata) {
  const customNames = new Set(sortedCustomNames);
  const searchTermsByIconName = {};

  for (const [name, terms] of Object.entries(customSearchMetadata)) {
    if (!customNames.has(name)) {
      console.warn(`Warning: custom icon search metadata references unknown icon "${name}"`);
      continue;
    }

    searchTermsByIconName[name] = normalizeSearchTerms(terms, `Search metadata for "${name}"`);
  }

  for (const name of sortedNames) {
    if (customNames.has(name)) {
      searchTermsByIconName[name] ??= [];
      continue;
    }

    const terms = normalizeSearchTerms(
      iconTagsFor(metadata.icons[name]),
      `Search tags for "${name}"`,
    );
    if (terms.length > 0) {
      searchTermsByIconName[name] = terms;
    }
  }

  return searchTermsByIconName;
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
  const categoryMetadata = readCategoryMetadata();
  const customSearchMetadata = readCustomSearchMetadata();
  const { categories: iconCategories, categoryByIconName } = buildCategoryExports(
    sortedNames,
    sortedCustomNames,
    categoryMetadata,
  );
  const iconSearchTermsByIconName = buildSearchTermExports(
    sortedNames,
    sortedCustomNames,
    categoryMetadata,
    customSearchMetadata,
  );

  // Build the JS registry module
  const lines = [
    '// Auto-generated by build-registry.js — do not edit',
    '',
    '/** @typedef {"rounded"} IconStyle */',
    '/** @typedef {{ id: string, label: string, iconNames: string[] }} IconCategory */',
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
  lines.push('/** Ordered icon categories with the icon names available in each category. */');
  lines.push(`export const iconCategories = ${JSON.stringify(iconCategories)};`);
  lines.push('');
  lines.push('/** Lookup from icon name to the category ids assigned to that icon. */');
  lines.push(`export const iconCategoryByIconName = ${JSON.stringify(categoryByIconName)};`);
  lines.push('');
  lines.push(
    '/** Search terms from committed Material Symbols metadata and custom icon metadata. */',
  );
  lines.push(
    `export const iconSearchTermsByIconName = ${JSON.stringify(iconSearchTermsByIconName)};`,
  );
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
    'export interface IconCategory {',
    '  id: string;',
    '  label: string;',
    '  iconNames: string[];',
    '}',
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
    '/** Ordered icon categories with the icon names available in each category. */',
    'export declare const iconCategories: IconCategory[];',
    '',
    '/** Lookup from icon name to the category ids assigned to that icon. */',
    'export declare const iconCategoryByIconName: Record<string, string[]>;',
    '',
    '/** Search terms from committed Material Symbols metadata and custom icon metadata. */',
    'export declare const iconSearchTermsByIconName: Record<string, string[]>;',
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
