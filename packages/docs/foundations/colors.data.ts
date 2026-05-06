import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { codeToHtml } from 'shiki';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tokensDir = path.resolve(__dirname, '../../tokens/tokens');
const primitivesPath = path.join(tokensDir, 'primitives.color.json');

const SHADE_MAP = [
  { shade: '50', usage: 'App and page backgrounds' },
  { shade: '75', usage: 'Subtle background tints' },
  { shade: '100', usage: 'Component backgrounds' },
  { shade: '200', usage: 'Pressed and selected subtle fills' },
  { shade: '300', usage: 'Stronger subtle fills' },
  { shade: '400', usage: 'Quiet borders and separators' },
  { shade: '500', usage: 'Active borders and selection edges' },
  { shade: '600', usage: 'Focus rings and strong borders' },
  { shade: '700', usage: 'Solid accents and interactive fills' },
  { shade: '800', usage: 'Hovered or reinforced solids' },
  { shade: '900', usage: 'Low-contrast text on matching hue' },
  { shade: '950', usage: 'High-contrast text on matching hue' },
] as const;

const PALETTE_LABELS: Record<string, { name: string; description: string }> = {
  neutral: { name: 'Neutral', description: 'Neutral foundation shared across themes.' },
  'neutral-dark': {
    name: 'Neutral',
    description: 'Neutral foundation shared across themes.',
  },
  blue: { name: 'Blue', description: 'Default brand accent built from the custom blue scale.' },
  'blue-dark': {
    name: 'Blue',
    description: 'Default brand accent built from the custom blue scale.',
  },
  brick: { name: 'Brick', description: 'Alternate accent using the custom brick scale.' },
  'brick-dark': {
    name: 'Brick',
    description: 'Alternate accent using the custom brick scale.',
  },
  forest: { name: 'Forest', description: 'Alternate accent using the custom forest scale.' },
  'forest-dark': {
    name: 'Forest',
    description: 'Alternate accent using the custom forest scale.',
  },
  purple: { name: 'Purple', description: 'Alternate accent using the stock Radix purple scale.' },
  'purple-dark': {
    name: 'Purple',
    description: 'Alternate accent using the stock Radix purple scale.',
  },
  red: { name: 'Red', description: 'Danger and error states use the Radix red scale.' },
  'red-dark': { name: 'Red', description: 'Danger and error states use the Radix red scale.' },
  green: { name: 'Green', description: 'Success states use the Radix green scale.' },
  'green-dark': { name: 'Green', description: 'Success states use the Radix green scale.' },
  amber: { name: 'Amber', description: 'Warning states use the Radix amber scale.' },
  'amber-dark': { name: 'Amber', description: 'Warning states use the Radix amber scale.' },
};

const SEMANTIC_EXAMPLE_ROWS = [
  {
    path: 'co.color.state.primary.base',
    token: '--co-color-state-primary-base',
    usage: 'Core accent solid',
  },
  {
    path: 'co.color.state.primary.subtle',
    token: '--co-color-state-primary-subtle',
    usage: 'Accent wash',
  },
  {
    path: 'co.color.text.link',
    token: '--co-color-text-link',
    usage: 'Inline links and accent text',
  },
  { path: 'co.color.border.focus', token: '--co-color-border-focus', usage: 'Keyboard focus ring' },
  {
    path: 'co.color.surface.interactive.primary.hover',
    token: '--co-color-surface-interactive-primary-hover',
    usage: 'Hovered primary action',
  },
  {
    path: 'co.color.surface.interactive.subtle.selected',
    token: '--co-color-surface-interactive-subtle-selected',
    usage: 'Selected subtle surface',
  },
  {
    path: 'co.color.surface.static.page',
    token: '--co-color-surface-static-page',
    usage: 'App canvas',
  },
  { path: 'co.color.text.default', token: '--co-color-text-default', usage: 'Default body text' },
] as const;

export interface PaletteShade {
  label: string;
  value: string;
  usage: string;
  token: string;
}

export interface UsageGroup {
  label: string;
  description: string;
  span: number;
}

export interface PaletteGroup {
  name: string;
  family: string;
  description: string;
  shades: PaletteShade[];
}

export interface PaletteModeRow {
  id: string;
  label: string;
  family: string;
  shades: PaletteShade[];
}

export interface ThemePalette {
  name: string;
  description: string;
  rows: PaletteModeRow[];
}

export interface ThemeModeGroup {
  id: string;
  label: string;
  palettes: PaletteGroup[];
}

export interface ThemeGroup {
  id: string;
  name: string;
  description: string;
  accentFamily: string;
  modes: ThemeModeGroup[];
  palettes: ThemePalette[];
}

export interface SemanticExample {
  token: string;
  usage: string;
}

export interface ThemeCodeSnippets {
  css: string;
  javascript: string;
}

export interface ColorsData {
  usageGroups: UsageGroup[];
  themes: ThemeGroup[];
  semanticExamples: SemanticExample[];
  themeCodeSnippets: Record<string, ThemeCodeSnippets>;
}

function readJson(filePath: string) {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function getNode(root: any, tokenPath: string) {
  return tokenPath.split('.').reduce((acc, key) => acc?.[key], root);
}

function resolveTokenValue(root: any, tokenPath: string): string {
  const node = getNode(root, tokenPath);
  if (!node || typeof node !== 'object' || !Object.prototype.hasOwnProperty.call(node, '$value')) {
    throw new Error(`Missing token: ${tokenPath}`);
  }

  const value = node.$value;
  if (typeof value === 'string' && /^\{.+\}$/.test(value)) {
    return resolveTokenValue(root, value.slice(1, -1));
  }

  return value;
}

function rawTokenValue(root: any, tokenPath: string): string {
  return getNode(root, tokenPath).$value;
}

function discoverThemeFiles() {
  return fs
    .readdirSync(tokensDir)
    .filter((fileName) => /^semantic\.theme\.[^.]+\.[^.]+\.json$/.test(fileName))
    .sort((a, b) => {
      const aParts = a.replace('.json', '').split('.');
      const bParts = b.replace('.json', '').split('.');
      if (aParts[2] === bParts[2]) {
        return aParts[3] === 'light' ? -1 : 1;
      }
      if (aParts[2] === 'default') return -1;
      if (bParts[2] === 'default') return 1;
      return aParts[2].localeCompare(bParts[2]);
    });
}

const themeTokenWatchPaths = discoverThemeFiles().map(
  (fileName) => `../../tokens/tokens/${fileName}`,
);

function familyLabel(family: string) {
  return (
    PALETTE_LABELS[family] ?? {
      name: family.replace(
        /(^|-)(\w)/g,
        (_, prefix, char) => `${prefix ? ' ' : ''}${char.toUpperCase()}`,
      ),
      description: '',
    }
  );
}

function buildPaletteShades(primitives: any, family: string) {
  return SHADE_MAP.map(({ shade, usage }) => ({
    label: shade,
    usage,
    value: resolveTokenValue(primitives, `co.color.primitive.${family}.${shade}`),
    token: `--co-color-primitive-${family}-${shade}`,
  }));
}

function wrapHighlightedCode(html: string, language: string) {
  const normalizedHtml = html
    .replace(
      /background-color:([^;"]+);--shiki-dark-bg:([^;"]+)/g,
      '--shiki-light-bg:$1;background-color:$1;--shiki-dark-bg:$2',
    )
    .replace(/color:([^;"]+);--shiki-dark:([^;"]+)/g, '--shiki-light:$1;color:$1;--shiki-dark:$2');
  const highlightedPre = normalizedHtml.replace('<pre class="shiki', '<pre class="vp-code shiki');
  return `<div class="language-${language}">${highlightedPre}</div>`;
}

async function highlightCodeSnippet(source: string, language: string) {
  const html = await codeToHtml(source, {
    lang: language,
    themes: {
      light: 'github-light-default',
      dark: 'github-dark-default',
    },
  });

  return wrapHighlightedCode(html, language);
}

async function buildThemeCodeSnippets(themeId: string): Promise<ThemeCodeSnippets> {
  const cssSource = [
    '/* always required — layer order + base tokens */',
    "@import '@cobalt/tokens/css';",
    '',
    `/* ${themeId} light + dark in one import */`,
    `@import '@cobalt/tokens/themes/${themeId}';`,
  ].join('\n');

  const javascriptSource = [
    "import { setTheme } from '@cobalt/tokens/theme';",
    '',
    `setTheme('${themeId}'); // ${themeId} light`,
    `setTheme('${themeId}', 'dark'); // ${themeId} dark`,
  ].join('\n');

  const [css, javascript] = await Promise.all([
    highlightCodeSnippet(cssSource, 'css'),
    highlightCodeSnippet(javascriptSource, 'js'),
  ]);

  return { css, javascript };
}

export default {
  watch: ['../../tokens/tokens/primitives.color.json', ...themeTokenWatchPaths],
  async load(): Promise<ColorsData> {
    const primitives = readJson(primitivesPath);
    const themeFiles = discoverThemeFiles();
    const themesById = new Map<string, ThemeGroup>();

    for (const fileName of themeFiles) {
      const [, , themeId, mode] = fileName.replace('.json', '').split('.');
      const themeRoot = readJson(path.join(tokensDir, fileName));
      const primaryRef = rawTokenValue(themeRoot, 'co.color.state.primary.base');
      const accentFamily = primaryRef.slice(1, -1).split('.')[3];
      const accentLabel = familyLabel(accentFamily).name;
      const paletteFamilies =
        mode === 'light'
          ? ['neutral', accentFamily, 'red', 'green', 'amber']
          : ['neutral-dark', accentFamily, 'red-dark', 'green-dark', 'amber-dark'];

      const palettes = paletteFamilies.map((family) => {
        const meta = familyLabel(family);
        return {
          name: meta.name,
          family,
          description: meta.description,
          shades: SHADE_MAP.map(({ shade, usage }) => ({
            label: shade,
            usage,
            value: resolveTokenValue(primitives, `co.color.primitive.${family}.${shade}`),
            token: `--co-color-primitive-${family}-${shade}`,
          })),
        };
      });

      if (!themesById.has(themeId)) {
        themesById.set(themeId, {
          id: themeId,
          name: themeId === 'default' ? 'Default' : familyLabel(accentFamily).name,
          description:
            themeId === 'default'
              ? 'Uses the custom blue brand scale for accent-driven semantics.'
              : `Swaps the accent-driven semantics to ${accentLabel.toLowerCase()} while keeping the same neutral and status rules.`,
          accentFamily,
          modes: [],
          palettes: [],
        });
      }

      themesById.get(themeId)?.modes.push({
        id: mode,
        label: mode === 'light' ? 'Light' : 'Dark',
        palettes,
      });
    }

    const semanticExamples = SEMANTIC_EXAMPLE_ROWS.map(({ token, usage }) => ({
      token,
      usage,
    }));

    const usageGroups: UsageGroup[] = [
      { label: 'Backgrounds', description: '50-75', span: 2 },
      { label: 'Interactive Components', description: '100-300', span: 3 },
      { label: 'Borders and Separators', description: '400-600', span: 3 },
      { label: 'Solid Colors', description: '700-800', span: 2 },
      { label: 'Accessible Text', description: '900-950', span: 2 },
    ];

    const themes = [...themesById.values()].map((theme) => {
      const modes = theme.modes.sort((a, b) => (a.id === 'light' ? -1 : 1));
      const lightAccent = theme.accentFamily.replace(/-dark$/, '');
      const baseFamilies = ['neutral', lightAccent, 'red', 'green', 'amber'];

      const palettes: ThemePalette[] = baseFamilies.map((baseFamily) => {
        const lightFamily = baseFamily;
        const darkFamily = baseFamily === 'neutral' ? 'neutral-dark' : `${baseFamily}-dark`;
        const meta = familyLabel(baseFamily);

        return {
          name: meta.name,
          description: meta.description,
          rows: [
            {
              id: 'light',
              label: 'Light',
              family: lightFamily,
              shades: buildPaletteShades(primitives, lightFamily),
            },
            {
              id: 'dark',
              label: 'Dark',
              family: darkFamily,
              shades: buildPaletteShades(primitives, darkFamily),
            },
          ],
        };
      });

      return {
        ...theme,
        modes,
        palettes,
      };
    });

    const themeCodeSnippets = Object.fromEntries(
      await Promise.all(
        themes.map(async (theme) => [theme.id, await buildThemeCodeSnippets(theme.id)] as const),
      ),
    );

    return {
      usageGroups,
      themes,
      semanticExamples,
      themeCodeSnippets,
    };
  },
};
