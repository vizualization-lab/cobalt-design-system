import StyleDictionary from 'style-dictionary';
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { exportDtcgTokens } from './scripts/export-dtcg.js';
import { generateScss } from './scripts/generate-scss.js';
import { generateTailwindPreset } from './scripts/generate-tailwind-preset.js';
import { generateUtilitiesCss } from './scripts/generate-utilities-css.js';
import { mergeTokens } from './scripts/merge-tokens.js';
import { discoverTokenSets, writeGeneratedTokenMetadata } from './scripts/token-set-utils.js';
import { validateTokens } from './scripts/validate-tokens.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const tokensDir = join(__dirname, 'tokens');

function assertSupportedTokenSets(discovery) {
  if (discovery.uncategorized.length > 0) {
    const names = discovery.uncategorized.map((tokenSet) => tokenSet.name).join(', ');
    throw new Error(`Unsupported token sets detected: ${names}`);
  }
}

function getThemeTokenSet(discovery, themeId, mode) {
  return discovery.themeTokenSets.find(
    (tokenSet) => tokenSet.themeId === themeId && tokenSet.mode === mode,
  );
}

function getSharedSources(discovery) {
  return [
    ...discovery.primitives,
    ...discovery.sharedSemantic,
    ...discovery.componentTokenSets,
  ].map((tokenSet) => tokenSet.sourcePath);
}

function getThemeCssDestination(themeTokenSet) {
  if (themeTokenSet.themeId === 'default' && themeTokenSet.mode === 'light') {
    return 'tokens.css';
  }

  if (themeTokenSet.themeId === 'default' && themeTokenSet.mode === 'dark') {
    return 'tokens-dark.css';
  }

  return `themes/tokens-${themeTokenSet.themeId}-${themeTokenSet.mode}.css`;
}

function getThemeCssSelector(themeTokenSet) {
  if (themeTokenSet.themeId === 'default' && themeTokenSet.mode === 'light') {
    return ':root';
  }

  if (themeTokenSet.themeId === 'default' && themeTokenSet.mode === 'dark') {
    return '[data-theme="dark"], [data-theme="default"][data-mode="dark"]';
  }

  return `[data-theme="${themeTokenSet.themeId}"][data-mode="${themeTokenSet.mode}"]`;
}

function createDefaultLightBuild(sharedSources, defaultLightTheme) {
  return new StyleDictionary({
    source: [...sharedSources, defaultLightTheme.sourcePath],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'dist/css/',
        prefix: '',
        files: [
          {
            destination: 'tokens.css',
            format: 'css/variables',
            options: {
              selector: ':root',
              outputReferences: true,
            },
          },
        ],
      },
      js: {
        transformGroup: 'js',
        buildPath: 'dist/js/',
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/es6',
          },
        ],
      },
      json: {
        transformGroup: 'js',
        buildPath: 'dist/',
        files: [
          {
            destination: 'tokens.json',
            format: 'json/flat',
          },
        ],
      },
    },
  });
}

function createThemeCssBuild(sharedSources, themeTokenSet) {
  return new StyleDictionary({
    source: [...sharedSources, themeTokenSet.sourcePath],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'dist/css/',
        prefix: '',
        files: [
          {
            destination: getThemeCssDestination(themeTokenSet),
            format: 'css/variables',
            options: {
              selector: getThemeCssSelector(themeTokenSet),
              outputReferences: true,
            },
          },
        ],
      },
    },
  });
}

function wrapCssInLayer(filePath, layerName, includeLayerPrelude = false) {
  const css = readFileSync(filePath, 'utf-8');
  const prelude = includeLayerPrelude
    ? '@layer co.reset, co.base, co.tokens, co.theme, co.utilities, co.overrides;\n\n'
    : '';

  writeFileSync(filePath, `${prelude}@layer ${layerName} {\n${css}}\n`);
}

async function build() {
  const validation = validateTokens(tokensDir);
  if (validation.errors.length > 0) {
    throw new Error(`Token validation failed:\n- ${validation.errors.join('\n- ')}`);
  }

  const discovery = discoverTokenSets(tokensDir);
  assertSupportedTokenSets(discovery);
  writeGeneratedTokenMetadata(tokensDir, discovery);

  const sharedSources = getSharedSources(discovery);
  const defaultLightTheme = getThemeTokenSet(discovery, 'default', 'light');

  if (!defaultLightTheme) {
    throw new Error('Missing required token set: semantic.theme.default.light');
  }

  console.log('Building default light tokens...');
  await createDefaultLightBuild(sharedSources, defaultLightTheme).buildAllPlatforms();

  for (const themeTokenSet of discovery.themeTokenSets) {
    if (themeTokenSet.name === defaultLightTheme.name) {
      continue;
    }

    console.log(`Building ${themeTokenSet.name} CSS...`);
    await createThemeCssBuild(sharedSources, themeTokenSet).buildPlatform('css');
  }

  console.log('Wrapping CSS in @layer...');
  wrapCssInLayer(join(__dirname, 'dist/css/tokens.css'), 'co.tokens', true);

  for (const themeTokenSet of discovery.themeTokenSets) {
    if (themeTokenSet.name === defaultLightTheme.name) {
      continue;
    }

    wrapCssInLayer(join(__dirname, 'dist/css', getThemeCssDestination(themeTokenSet)), 'co.theme');
  }

  // Generate bundled theme files (light + dark combined per theme)
  console.log('Generating theme bundles...');
  const themesDir = join(__dirname, 'dist/css/themes');
  if (!existsSync(themesDir)) mkdirSync(themesDir, { recursive: true });

  const themeIds = [...new Set(discovery.themeTokenSets.map((ts) => ts.themeId))];
  for (const themeId of themeIds) {
    const parts = [];
    if (themeId === 'default') {
      parts.push(readFileSync(join(__dirname, 'dist/css/tokens.css'), 'utf-8'));
      parts.push(readFileSync(join(__dirname, 'dist/css/tokens-dark.css'), 'utf-8'));
    } else {
      for (const mode of ['light', 'dark']) {
        const filePath = join(themesDir, `tokens-${themeId}-${mode}.css`);
        if (existsSync(filePath)) {
          parts.push(readFileSync(filePath, 'utf-8'));
        }
      }
    }
    if (parts.length > 0) {
      writeFileSync(join(themesDir, `${themeId}.css`), parts.join('\n'));
      console.log(`  → themes/${themeId}.css`);
    }
  }

  console.log('Generating SCSS modules...');
  generateScss(__dirname, discovery);

  console.log('Copying base element styles...');
  copyFileSync(join(__dirname, 'src/base.css'), join(__dirname, 'dist/css/base.css'));

  console.log('Copying font-face stylesheet...');
  copyFileSync(join(__dirname, 'src/fonts.css'), join(__dirname, 'dist/css/fonts.css'));
  copyFileSync(
    join(__dirname, 'src/fonts-international.css'),
    join(__dirname, 'dist/css/fonts-international.css'),
  );

  console.log('Generating utility classes...');
  generateUtilitiesCss(__dirname, tokensDir);

  console.log('Generating TypeScript declarations...');
  const jsContent = readFileSync(join(__dirname, 'dist/js/tokens.js'), 'utf-8');
  const dtsLines = jsContent
    .split('\n')
    .filter((line) => line.startsWith('export const'))
    .map((line) => {
      const match = line.match(/export const (\w+)/);
      return match ? `export declare const ${match[1]}: string;` : '';
    })
    .filter(Boolean);
  writeFileSync(join(__dirname, 'dist/js/tokens.d.ts'), dtsLines.join('\n') + '\n');

  console.log('Copying theme utility...');
  copyFileSync(join(__dirname, 'src/theme.js'), join(__dirname, 'dist/js/theme.js'));

  console.log('Generating Tailwind preset...');
  await generateTailwindPreset(__dirname);

  console.log('Generating merged tokens for Figma sync...');
  const merged = mergeTokens();
  writeFileSync(join(__dirname, 'dist/tokens-merged.json'), JSON.stringify(merged, null, 2) + '\n');

  console.log('Generating DTCG export artifact...');
  const dtcg = exportDtcgTokens(tokensDir);
  writeFileSync(join(__dirname, 'dist/tokens-dtcg.json'), JSON.stringify(dtcg, null, 2) + '\n');

  console.log('Token build complete!');
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
