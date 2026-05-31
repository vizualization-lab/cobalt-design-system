import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'dist');
const iconsOutDir = join(outDir, 'icons');
const animatedOutDir = join(outDir, 'animated');
const categoryMetadataFile = join(root, 'src', 'icon-categories.json');
const coreIconMetadataFile = join(root, 'src', 'core-icons.json');
const customSearchMetadataFile = join(root, 'custom', 'metadata.json');

const STYLES = ['rounded'];
const MATERIAL_VIEW_BOX = '0 -960 960 960';
const CUSTOM_VIEW_BOX = '0 0 24 24';
const FALLBACK_CATEGORIES = [
  { id: 'cobalt', label: 'Cobalt Custom Icons' },
  { id: 'other', label: 'Other' },
];

function toKebab(name) {
  return name.replace(/_/g, '-');
}

const RESERVED_WORDS = new Set([
  'arguments',
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'eval',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'implements',
  'import',
  'in',
  'instanceof',
  'interface',
  'let',
  'new',
  'null',
  'package',
  'private',
  'protected',
  'public',
  'return',
  'static',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
]);

function toCamel(kebab) {
  const camel = kebab.replace(/-([a-z0-9])/g, (_, ch) => ch.toUpperCase());
  // JS identifiers cannot start with a digit and cannot be reserved words.
  // Material Symbols includes such names (10k, 4g-mobiledata, delete, function,
  // switch, …) so prefix any conflict with an underscore.
  if (/^[0-9]/.test(camel) || RESERVED_WORDS.has(camel)) {
    return '_' + camel;
  }
  return camel;
}

function extractSvgContent(svgString) {
  return svgString
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim();
}

function escapeForTemplateLiteral(content) {
  return content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function readJsonFile(file, label) {
  try {
    return JSON.parse(readFileSync(file, 'utf-8'));
  } catch (error) {
    throw new Error(`Unable to read ${label} from ${file}. ${error.message}`);
  }
}

function readOptionalJsonFile(file) {
  if (!existsSync(file)) return {};
  try {
    return JSON.parse(readFileSync(file, 'utf-8'));
  } catch (error) {
    throw new Error(`Unable to read custom icon search metadata from ${file}. ${error.message}`);
  }
}

function iconCategoriesFor(entry) {
  if (Array.isArray(entry)) return entry;
  if (entry && Array.isArray(entry.categories)) return entry.categories;
  return [];
}

function iconTagsFor(entry) {
  return entry && Array.isArray(entry.tags) ? entry.tags : [];
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

function buildCoreIconExports(sortedNames, coreIconMetadata) {
  if (!Array.isArray(coreIconMetadata)) {
    throw new Error(`${coreIconMetadataFile} must be an array of core icon metadata objects.`);
  }
  const availableNames = new Set(sortedNames);
  const seenNames = new Set();
  const coreIconNames = [];
  const iconDescriptionsByIconName = {};

  for (const [index, entry] of coreIconMetadata.entries()) {
    const source = `Core icon metadata entry ${index + 1}`;
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      throw new Error(`${source} must be an object with "name" and "description" fields.`);
    }
    const name = typeof entry.name === 'string' ? entry.name.trim() : '';
    const description = typeof entry.description === 'string' ? entry.description.trim() : '';
    if (!name) throw new Error(`${source} is missing a valid "name" field.`);
    if (!description) {
      throw new Error(`Core icon metadata for "${name}" is missing a valid "description" field.`);
    }
    if (!availableNames.has(name)) {
      throw new Error(`Core icon metadata references unknown icon "${name}".`);
    }
    if (seenNames.has(name)) {
      throw new Error(`Core icon metadata includes duplicate icon "${name}".`);
    }
    seenNames.add(name);
    coreIconNames.push(name);
    iconDescriptionsByIconName[name] = description;
  }

  return { coreIconNames, iconDescriptionsByIconName };
}

function buildCategoryExports(sortedNames, sortedCustomNames, metadata) {
  const customNames = new Set(sortedCustomNames);
  const categoryDefinitions = [...metadata.categories, ...FALLBACK_CATEGORIES];
  const knownCategoryIds = new Set(categoryDefinitions.map((c) => c.id));
  const iconsByCategory = new Map(categoryDefinitions.map((c) => [c.id, []]));
  const categoryByIconName = {};

  for (const name of sortedNames) {
    let categoryIds = customNames.has(name) ? ['cobalt'] : iconCategoriesFor(metadata.icons[name]);
    categoryIds = categoryIds.filter((id) => knownCategoryIds.has(id));
    if (categoryIds.length === 0) categoryIds = ['other'];
    categoryByIconName[name] = categoryIds;
    for (const id of categoryIds) iconsByCategory.get(id).push(name);
  }

  const categories = categoryDefinitions
    .map((c) => ({ ...c, iconNames: iconsByCategory.get(c.id) ?? [] }))
    .filter((c) => c.iconNames.length > 0);

  return { categories, categoryByIconName };
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
    if (terms.length > 0) searchTermsByIconName[name] = terms;
  }

  return searchTermsByIconName;
}

function collectSvgs(dir, validate) {
  const result = new Map();
  if (!existsSync(dir)) return result;
  const files = readdirSync(dir).filter((f) => f.endsWith('.svg'));
  for (const file of files) {
    const kebabName = toKebab(basename(file, '.svg'));
    if (validate && !validate(kebabName, file)) continue;
    const content = extractSvgContent(readFileSync(join(dir, file), 'utf-8'));
    result.set(kebabName, content);
  }
  return result;
}

function writeIconModule(filePath, name, content, viewBox, kind, registerImport, registerFn) {
  const exportName = toCamel(name);
  const escaped = escapeForTemplateLiteral(content);
  const js = `import { ${registerFn} } from '${registerImport}';

const ${exportName} = Object.freeze({
  name: ${JSON.stringify(name)},
  content: \`${escaped}\`,
  viewBox: ${JSON.stringify(viewBox)},
  kind: ${JSON.stringify(kind)},
});

export { ${exportName} };
export default ${exportName};
${registerFn}(${exportName});
`;
  writeFileSync(filePath, js);
}

function build() {
  // Clean output directory entirely so stale icons don't linger.
  if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });
  mkdirSync(iconsOutDir, { recursive: true });
  mkdirSync(animatedOutDir, { recursive: true });

  const msBase = join(root, 'node_modules', '@material-symbols', 'svg-300');
  const customBase = join(root, 'custom');
  const overridesBase = join(root, 'overrides');
  const animatedBase = join(root, 'animated');

  const style = STYLES[0]; // currently only 'rounded'

  // Collect all SVGs by source, preserving precedence: overrides win over Material, customs are separate names.
  const materialSvgs = collectSvgs(join(msBase, style));
  const customSvgs = collectSvgs(join(customBase, style), (name, file) => {
    const base = name.endsWith('-fill') ? name.slice(0, -5) : name;
    if (!base.startsWith('co-')) {
      console.warn(`Warning: custom icon "${file}" does not start with "co-" prefix — skipping`);
      return false;
    }
    return true;
  });
  const overrideSvgs = collectSvgs(join(overridesBase, style), (name, file) => {
    const base = name.endsWith('-fill') ? name.slice(0, -5) : name;
    if (!materialSvgs.has(base) && !materialSvgs.has(`${base}-fill`)) {
      console.warn(
        `Warning: override icon "${file}" does not match any existing Material Symbols icon — possible typo`,
      );
    }
    return true;
  });
  const animatedSvgs = collectSvgs(join(animatedBase, style));

  // Per-icon module: (kebabName) -> { content, viewBox, kind }
  const iconModules = new Map();
  for (const [name, content] of materialSvgs) {
    iconModules.set(name, { content, viewBox: MATERIAL_VIEW_BOX, kind: 'material' });
  }
  for (const [name, content] of overrideSvgs) {
    iconModules.set(name, { content, viewBox: CUSTOM_VIEW_BOX, kind: 'override' });
  }
  for (const [name, content] of customSvgs) {
    iconModules.set(name, { content, viewBox: CUSTOM_VIEW_BOX, kind: 'custom' });
  }

  // Animated modules — store as their own descriptor set.
  const animatedModules = new Map();
  for (const [name, content] of animatedSvgs) {
    // Animated icons inherit viewBox from the matching base material/override/custom when present.
    const base = name.endsWith('-fill') ? name.slice(0, -5) : name;
    const matching = iconModules.get(name) || iconModules.get(base);
    const viewBox = matching ? matching.viewBox : MATERIAL_VIEW_BOX;
    animatedModules.set(name, { content, viewBox, kind: 'animated' });
  }

  // Build name lists (base names without -fill suffix).
  const baseNamesFromKey = (key) => (key.endsWith('-fill') ? key.slice(0, -5) : key);

  const allBase = new Set();
  for (const key of iconModules.keys()) allBase.add(baseNamesFromKey(key));
  const customBaseNames = new Set();
  for (const key of customSvgs.keys()) customBaseNames.add(baseNamesFromKey(key));
  const overrideBaseNames = new Set();
  for (const key of overrideSvgs.keys()) overrideBaseNames.add(baseNamesFromKey(key));
  const animatedBaseNames = new Set();
  for (const key of animatedModules.keys()) animatedBaseNames.add(baseNamesFromKey(key));

  const sortedNames = [...allBase].sort();
  const sortedCustomNames = [...customBaseNames].sort();
  const sortedOverrideNames = [...overrideBaseNames].sort();
  const sortedAnimatedNames = [...animatedBaseNames].sort();

  // Metadata.
  const categoryMetadata = readJsonFile(categoryMetadataFile, 'icon category metadata');
  const coreIconMetadata = readJsonFile(coreIconMetadataFile, 'core icon metadata');
  const customSearchMetadata = readOptionalJsonFile(customSearchMetadataFile);
  const { coreIconNames, iconDescriptionsByIconName } = buildCoreIconExports(
    sortedNames,
    coreIconMetadata,
  );
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

  // ── registry.js ──────────────────────────────────────────────────────────────
  writeFileSync(
    join(outDir, 'registry.js'),
    `// Auto-generated by build-registry.js — do not edit
// Runtime icon registry singleton. Icons populate this map via side-effect
// imports of \`@cobalt/icons/<name>\`.

const iconRegistry = new Map();
const animatedRegistry = new Map();
const warnedNames = new Set();

function isProduction() {
  return (
    typeof process !== 'undefined' &&
    process &&
    process.env &&
    process.env.NODE_ENV === 'production'
  );
}

function warnMissing(name, kind) {
  if (isProduction()) return;
  const key = kind + ':' + name;
  if (warnedNames.has(key)) return;
  warnedNames.add(key);
  if (typeof console === 'undefined' || !console.warn) return;
  const importPath = kind === 'animated' ? '@cobalt/icons/animated/' + name : '@cobalt/icons/' + name;
  console.warn(
    '[@cobalt/icons] No ' + kind + ' icon registered for "' + name +
    '". Add \`import "' + importPath + '"\` to register it, ' +
    'or \`import "@cobalt/icons/all"\` to register everything.',
  );
}

export function registerIcon(descriptor) {
  if (!descriptor || typeof descriptor.name !== 'string' || typeof descriptor.content !== 'string') return;
  iconRegistry.set(descriptor.name, descriptor);
}

export function registerAnimatedIcon(descriptor) {
  if (!descriptor || typeof descriptor.name !== 'string' || typeof descriptor.content !== 'string') return;
  animatedRegistry.set(descriptor.name, descriptor);
}

export function getIcon(name, opts) {
  if (!name) return undefined;
  const key = opts && opts.fill ? name + '-fill' : name;
  const desc = iconRegistry.get(key);
  if (!desc) warnMissing(key, 'static');
  return desc;
}

export function getAnimatedIcon(name, opts) {
  if (!name) return undefined;
  const key = opts && opts.fill ? name + '-fill' : name;
  return animatedRegistry.get(key);
}

export function hasIcon(name) {
  return iconRegistry.has(name);
}

export function hasAnimatedIcon(name) {
  return animatedRegistry.has(name);
}

export function listRegistered() {
  return {
    icons: [...iconRegistry.keys()],
    animated: [...animatedRegistry.keys()],
  };
}
`,
  );

  writeFileSync(
    join(outDir, 'registry.d.ts'),
    `// Auto-generated by build-registry.js — do not edit

export type IconStyle = 'rounded';
export type IconKind = 'material' | 'custom' | 'override' | 'animated';

export interface IconDescriptor {
  readonly name: string;
  readonly content: string;
  readonly viewBox: string;
  readonly kind: IconKind;
}

export interface GetIconOptions {
  readonly fill?: boolean;
}

export declare function registerIcon(descriptor: IconDescriptor): void;
export declare function registerAnimatedIcon(descriptor: IconDescriptor): void;
export declare function getIcon(name: string, opts?: GetIconOptions): IconDescriptor | undefined;
export declare function getAnimatedIcon(name: string, opts?: GetIconOptions): IconDescriptor | undefined;
export declare function hasIcon(name: string): boolean;
export declare function hasAnimatedIcon(name: string): boolean;
export declare function listRegistered(): { icons: string[]; animated: string[] };
`,
  );

  // ── manifest.js ──────────────────────────────────────────────────────────────
  writeFileSync(
    join(outDir, 'manifest.js'),
    `// Auto-generated by build-registry.js — do not edit
// Static lists of known icon names. No SVG content — safe to import cheaply.

export const iconNames = ${JSON.stringify(sortedNames)};
export const customIconNames = new Set(${JSON.stringify(sortedCustomNames)});
export const overrideIconNames = new Set(${JSON.stringify(sortedOverrideNames)});
export const animatedIconNames = new Set(${JSON.stringify(sortedAnimatedNames)});
export const coreIconNames = ${JSON.stringify(coreIconNames)};
`,
  );

  writeFileSync(
    join(outDir, 'manifest.d.ts'),
    `// Auto-generated by build-registry.js — do not edit

/** All available icon names (kebab-case, without -fill suffix). */
export declare const iconNames: readonly string[];

/** Set of icon names defined as custom Cobalt icons (24×24 viewBox, co- prefix). */
export declare const customIconNames: ReadonlySet<string>;

/** Set of icon names that are overrides of Material Symbols icons (24×24 viewBox). */
export declare const overrideIconNames: ReadonlySet<string>;

/** Set of icon names that have animated variants. */
export declare const animatedIconNames: ReadonlySet<string>;

/** Curated core icons recommended for baseline actions and navigation. */
export declare const coreIconNames: readonly string[];
`,
  );

  // ── metadata.js ──────────────────────────────────────────────────────────────
  writeFileSync(
    join(outDir, 'metadata.js'),
    `// Auto-generated by build-registry.js — do not edit
// Icon categorization, search terms, and curated descriptions.
// Import this only when you need icon discovery/browsing UI — it is large.

export const iconCategories = ${JSON.stringify(iconCategories)};
export const iconCategoryByIconName = ${JSON.stringify(categoryByIconName)};
export const iconSearchTermsByIconName = ${JSON.stringify(iconSearchTermsByIconName)};
export const iconDescriptionsByIconName = ${JSON.stringify(iconDescriptionsByIconName)};
`,
  );

  writeFileSync(
    join(outDir, 'metadata.d.ts'),
    `// Auto-generated by build-registry.js — do not edit

export interface IconCategory {
  id: string;
  label: string;
  iconNames: string[];
}

export declare const iconCategories: readonly IconCategory[];
export declare const iconCategoryByIconName: Readonly<Record<string, readonly string[]>>;
export declare const iconSearchTermsByIconName: Readonly<Record<string, readonly string[]>>;
export declare const iconDescriptionsByIconName: Readonly<Record<string, string>>;
`,
  );

  // ── icons/<name>.js + animated/<name>.js ────────────────────────────────────
  for (const [name, { content, viewBox, kind }] of iconModules) {
    writeIconModule(
      join(iconsOutDir, `${name}.js`),
      name,
      content,
      viewBox,
      kind,
      '../registry.js',
      'registerIcon',
    );
  }
  for (const [name, { content, viewBox, kind }] of animatedModules) {
    writeIconModule(
      join(animatedOutDir, `${name}.js`),
      name,
      content,
      viewBox,
      kind,
      '../registry.js',
      'registerAnimatedIcon',
    );
  }

  // ── icons.d.ts + animated.d.ts (ambient module declarations) ────────────────
  // A single file declares every per-icon module path so consumers get types
  // for both named and default imports without generating 7,700 d.ts files.
  const iconAmbient = [
    '// Auto-generated by build-registry.js — do not edit',
    '',
    "import type { IconDescriptor } from './registry.js';",
    '',
  ];
  for (const name of [...iconModules.keys()].sort()) {
    const camel = toCamel(name);
    iconAmbient.push(`declare module '@cobalt/icons/${name}' {`);
    iconAmbient.push(`  export const ${camel}: IconDescriptor;`);
    iconAmbient.push(`  const _default: IconDescriptor;`);
    iconAmbient.push(`  export default _default;`);
    iconAmbient.push(`}`);
  }
  writeFileSync(join(outDir, 'icons.d.ts'), iconAmbient.join('\n') + '\n');

  const animatedAmbient = [
    '// Auto-generated by build-registry.js — do not edit',
    '',
    "import type { IconDescriptor } from './registry.js';",
    '',
  ];
  for (const name of [...animatedModules.keys()].sort()) {
    const camel = toCamel(name);
    animatedAmbient.push(`declare module '@cobalt/icons/animated/${name}' {`);
    animatedAmbient.push(`  export const ${camel}: IconDescriptor;`);
    animatedAmbient.push(`  const _default: IconDescriptor;`);
    animatedAmbient.push(`  export default _default;`);
    animatedAmbient.push(`}`);
  }
  writeFileSync(join(outDir, 'animated.d.ts'), animatedAmbient.join('\n') + '\n');

  // ── all.js (escape hatch: registers every icon as a side-effect) ────────────
  // This file inlines every icon descriptor instead of re-exporting per-icon
  // modules. Inlining keeps it as a single ES module — important for dev
  // servers (Vite, etc.) that otherwise serve thousands of separate requests
  // when a consumer imports "@cobalt/icons/all". Tree-shaking is unaffected;
  // production apps should import individual `@cobalt/icons/<name>` modules.
  const allLines = [
    '// Auto-generated by build-registry.js — do not edit',
    '// Side-effect import that registers every icon. Use only for workbench,',
    '// documentation, and prototyping — not for production app code.',
    '',
    "import { registerIcon, registerAnimatedIcon } from './registry.js';",
    '',
  ];
  for (const [name, { content, viewBox, kind }] of iconModules) {
    const escaped = escapeForTemplateLiteral(content);
    allLines.push(
      `registerIcon({ name: ${JSON.stringify(name)}, content: \`${escaped}\`, viewBox: ${JSON.stringify(viewBox)}, kind: ${JSON.stringify(kind)} });`,
    );
  }
  for (const [name, { content, viewBox, kind }] of animatedModules) {
    const escaped = escapeForTemplateLiteral(content);
    allLines.push(
      `registerAnimatedIcon({ name: ${JSON.stringify(name)}, content: \`${escaped}\`, viewBox: ${JSON.stringify(viewBox)}, kind: ${JSON.stringify(kind)} });`,
    );
  }
  writeFileSync(join(outDir, 'all.js'), allLines.join('\n') + '\n');
  writeFileSync(
    join(outDir, 'all.d.ts'),
    `// Auto-generated by build-registry.js — do not edit
export {};
`,
  );

  console.log(
    `Icon registry built: ${sortedNames.length} icons (${sortedCustomNames.length} custom, ${sortedOverrideNames.length} overrides, ${sortedAnimatedNames.length} animated) → dist/{registry,manifest,metadata,all}.js + dist/icons/*.js + dist/animated/*.js`,
  );
}

build();
