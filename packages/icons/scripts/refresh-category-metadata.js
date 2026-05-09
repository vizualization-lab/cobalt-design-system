import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outFile = join(root, 'src', 'icon-categories.json');

const METADATA_URL = 'https://fonts.google.com/metadata/icons?incomplete=1&key=material_symbols';
const SYMBOLS_FAMILY = 'Material Symbols Rounded';

const CATEGORY_ORDER = [
  'Actions',
  'Activities',
  'Android',
  'Audio&Video',
  'Business',
  'Communicate',
  'External',
  'Hardware',
  'Home',
  'Household',
  'Images',
  'Maps',
  'Privacy',
  'Social',
  'Text',
  'Transit',
  'Travel',
  'UI actions',
];

function toKebab(name) {
  return name.replace(/_/g, '-');
}

function categoryId(label) {
  return label
    .replace(/&/g, ' and ')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function categoryLabel(label) {
  return label === 'Audio&Video' ? 'Audio & Video' : label;
}

function supportsSymbolsRounded(icon) {
  return !icon.unsupported_families?.includes(SYMBOLS_FAMILY);
}

function sortObjectByKey(entries) {
  return Object.fromEntries(entries.sort(([a], [b]) => a.localeCompare(b)));
}

async function refresh() {
  const response = await fetch(METADATA_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch icon metadata: ${response.status} ${response.statusText}`);
  }

  const raw = await response.text();
  const metadata = JSON.parse(raw.replace(/^\)\]\}'\n?/, ''));
  const symbols = metadata.icons.filter(supportsSymbolsRounded);
  const knownCategoryLabels = new Set(CATEGORY_ORDER);
  const foundCategoryLabels = new Set();
  const icons = new Map();

  for (const icon of symbols) {
    const categories = icon.categories ?? [];
    for (const category of categories) {
      foundCategoryLabels.add(category);
    }

    icons.set(
      toKebab(icon.name),
      categories.filter((category) => knownCategoryLabels.has(category)).map(categoryId),
    );
  }

  const extraCategories = [...foundCategoryLabels]
    .filter((category) => !knownCategoryLabels.has(category))
    .sort((a, b) => a.localeCompare(b));

  const categorySource = [...CATEGORY_ORDER, ...extraCategories];
  const snapshot = {
    source:
      'Captured from Google Material Symbols metadata for local Cobalt builds. Do not fetch this data at runtime.',
    categories: categorySource.map((category) => ({
      id: categoryId(category),
      label: categoryLabel(category),
    })),
    icons: sortObjectByKey([...icons]),
  };

  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, `${JSON.stringify(snapshot, null, 2)}\n`);
  console.log(`Wrote ${snapshot.categories.length} categories and ${icons.size} icon mappings.`);
}

refresh().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
