import StyleDictionary from 'style-dictionary';
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateFontStyles } from './scripts/generate-fonts.js';
import { generateScss } from './scripts/generate-scss.js';
import { generateTailwindPreset } from './scripts/generate-tailwind-preset.js';
import { generateToolingManifest } from './scripts/generate-tooling-manifest.js';
import { generateUtilitiesCss } from './scripts/generate-utilities-css.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(__dirname, '..', '..');
const tokensDir = join(repositoryRoot, 'exports', 'tokens');
const distDir = join(__dirname, 'dist');

const PRIMITIVES_FILE = 'primitives.tokens-dtcg.json';
const SEMANTIC_FILE_PATTERN = /^semantic\.(light|dark)-mode\.tokens-dtcg\.json$/;
const THEME_FILE_PATTERN = /^theme\.([^.]+)\.tokens-dtcg\.json$/;

function discoverDtcgTokenSets() {
  if (!existsSync(tokensDir)) {
    throw new Error(
      `Missing converted token directory: ${tokensDir}. Run "pnpm tokens:convert-figma" first.`,
    );
  }

  const jsonFiles = readdirSync(tokensDir)
    .filter((fileName) => fileName.endsWith('.json'))
    .sort();
  const semanticModes = new Map();
  const themes = new Map();
  const unsupported = [];
  let primitives = null;

  for (const fileName of jsonFiles) {
    const sourcePath = join(tokensDir, fileName);

    if (fileName === PRIMITIVES_FILE) {
      primitives = { fileName, sourcePath };
      continue;
    }

    const semanticMatch = fileName.match(SEMANTIC_FILE_PATTERN);
    if (semanticMatch) {
      const mode = semanticMatch[1];
      semanticModes.set(mode, { fileName, mode, sourcePath });
      continue;
    }

    const themeMatch = fileName.match(THEME_FILE_PATTERN);
    if (themeMatch) {
      const themeId = themeMatch[1];
      themes.set(themeId, { fileName, themeId, sourcePath });
      continue;
    }

    unsupported.push(fileName);
  }

  if (unsupported.length > 0) {
    throw new Error(`Unsupported converted token files detected: ${unsupported.join(', ')}`);
  }

  if (!primitives) {
    throw new Error(`Missing required converted token file: ${PRIMITIVES_FILE}`);
  }

  for (const mode of ['light', 'dark']) {
    if (!semanticModes.has(mode)) {
      throw new Error(
        `Missing required converted token file: semantic.${mode}-mode.tokens-dtcg.json`,
      );
    }
  }

  if (!themes.has('default')) {
    throw new Error('Missing required converted token file: theme.default.tokens-dtcg.json');
  }

  const orderedModes = ['light', 'dark'].map((mode) => semanticModes.get(mode));
  const orderedThemes = [...themes.values()].sort((left, right) => {
    if (left.themeId === 'default') return -1;
    if (right.themeId === 'default') return 1;
    return left.themeId.localeCompare(right.themeId);
  });
  const themeBuilds = orderedThemes.flatMap((theme) =>
    orderedModes.map((semantic) => ({
      name: `theme.${theme.themeId}.${semantic.mode}`,
      themeId: theme.themeId,
      mode: semantic.mode,
      sources: [primitives.sourcePath, theme.sourcePath, semantic.sourcePath],
    })),
  );

  return { orderedThemes, themeBuilds };
}

function getThemeCssDestination(themeBuild) {
  if (themeBuild.themeId === 'default' && themeBuild.mode === 'light') {
    return 'tokens.css';
  }

  if (themeBuild.themeId === 'default' && themeBuild.mode === 'dark') {
    return 'tokens-dark.css';
  }

  return `themes/tokens-${themeBuild.themeId}-${themeBuild.mode}.css`;
}

function getThemeCssSelector(themeBuild) {
  if (themeBuild.themeId === 'default' && themeBuild.mode === 'light') {
    return ':root';
  }

  if (themeBuild.themeId === 'default' && themeBuild.mode === 'dark') {
    return '[data-theme="dark"], [data-theme="default"][data-mode="dark"]';
  }

  return `[data-theme="${themeBuild.themeId}"][data-mode="${themeBuild.mode}"]`;
}

function createDefaultLightBuild(sources) {
  return new StyleDictionary({
    source: sources,
    log: { verbosity: 'silent' },
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: `${join(distDir, 'css')}${sep}`,
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
        buildPath: `${join(distDir, 'js')}${sep}`,
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/es6',
          },
        ],
      },
      json: {
        transformGroup: 'js',
        buildPath: `${distDir}${sep}`,
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

function createThemeCssBuild(themeBuild) {
  return new StyleDictionary({
    source: themeBuild.sources,
    log: { verbosity: 'silent' },
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: `${join(distDir, 'css')}${sep}`,
        prefix: '',
        files: [
          {
            destination: getThemeCssDestination(themeBuild),
            format: 'css/variables',
            options: {
              selector: getThemeCssSelector(themeBuild),
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

function writeThemeBundles(discovery) {
  console.log('Generating theme bundles...');
  const themesDir = join(distDir, 'css', 'themes');
  mkdirSync(themesDir, { recursive: true });

  for (const theme of discovery.orderedThemes) {
    const parts = [];

    if (theme.themeId === 'default') {
      parts.push(readFileSync(join(distDir, 'css', 'tokens.css'), 'utf-8'));
      parts.push(readFileSync(join(distDir, 'css', 'tokens-dark.css'), 'utf-8'));
    } else {
      for (const mode of ['light', 'dark']) {
        parts.push(readFileSync(join(themesDir, `tokens-${theme.themeId}-${mode}.css`), 'utf-8'));
      }
    }

    writeFileSync(join(themesDir, `${theme.themeId}.css`), parts.join('\n'));
    console.log(`  -> themes/${theme.themeId}.css`);
  }
}

function writeTypeDeclarations() {
  const jsContent = readFileSync(join(distDir, 'js', 'tokens.js'), 'utf-8');
  const declarations = jsContent
    .split('\n')
    .filter((line) => line.startsWith('export const'))
    .map((line) => line.match(/export const (\w+)/)?.[1])
    .filter(Boolean)
    .map((name) => `export declare const ${name}: string;`);

  writeFileSync(join(distDir, 'js', 'tokens.d.ts'), `${declarations.join('\n')}\n`);
}

async function build() {
  const discovery = discoverDtcgTokenSets();
  const defaultLightTheme = discovery.themeBuilds.find(
    (themeBuild) => themeBuild.themeId === 'default' && themeBuild.mode === 'light',
  );

  rmSync(distDir, { recursive: true, force: true });

  console.log('Building default light tokens...');
  await createDefaultLightBuild(defaultLightTheme.sources).buildAllPlatforms();

  for (const themeBuild of discovery.themeBuilds) {
    if (themeBuild === defaultLightTheme) continue;

    console.log(`Building ${themeBuild.name} CSS...`);
    await createThemeCssBuild(themeBuild).buildPlatform('css');
  }

  console.log('Wrapping CSS in @layer...');
  wrapCssInLayer(join(distDir, 'css', 'tokens.css'), 'co.tokens', true);

  for (const themeBuild of discovery.themeBuilds) {
    if (themeBuild === defaultLightTheme) continue;
    wrapCssInLayer(join(distDir, 'css', getThemeCssDestination(themeBuild)), 'co.theme');
  }

  writeThemeBundles(discovery);

  console.log('Copying base element styles...');
  copyFileSync(join(__dirname, 'src', 'base.css'), join(distDir, 'css', 'base.css'));

  console.log('Generating utility classes...');
  generateUtilitiesCss(__dirname, tokensDir);

  console.log('Generating tooling manifest...');
  generateToolingManifest(__dirname, tokensDir);

  console.log('Generating SCSS modules...');
  generateScss(__dirname, discovery);

  console.log('Generating Tailwind preset...');
  await generateTailwindPreset(__dirname);

  console.log('Generating font assets...');
  generateFontStyles(__dirname);
  copyFileSync(
    join(__dirname, 'src', 'fonts-international.css'),
    join(distDir, 'css', 'fonts-international.css'),
  );

  console.log('Generating TypeScript declarations...');
  writeTypeDeclarations();

  console.log('Copying theme utility...');
  copyFileSync(join(__dirname, 'src', 'theme.js'), join(distDir, 'js', 'theme.js'));
  copyFileSync(join(__dirname, 'src', 'theme.d.ts'), join(distDir, 'js', 'theme.d.ts'));

  console.log('Token build complete!');
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
