import StyleDictionary from 'style-dictionary';
import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Light theme build ───────────────────────────────────────────────────────
const lightSD = new StyleDictionary({
  source: ['src/global/**/*.json', 'src/semantic/color.light.json'],
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
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables',
          options: { outputReferences: true },
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

// ── Dark theme build ────────────────────────────────────────────────────────
const darkSD = new StyleDictionary({
  source: ['src/global/**/*.json', 'src/semantic/color.dark.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'tokens-dark.css',
          format: 'css/variables',
          options: {
            selector: '[data-theme="dark"]',
            outputReferences: true,
          },
        },
      ],
    },
  },
});

async function build() {
  console.log('Building light tokens...');
  await lightSD.buildAllPlatforms();

  console.log('Building dark tokens...');
  await darkSD.buildAllPlatforms();

  // Wrap CSS output in @layer blocks
  console.log('Wrapping CSS in @layer...');

  const lightCssPath = join(__dirname, 'dist/css/tokens.css');
  const lightCss = readFileSync(lightCssPath, 'utf-8');
  writeFileSync(
    lightCssPath,
    `@layer co.reset, co.base, co.tokens, co.theme, co.overrides;\n\n@layer co.tokens {\n${lightCss}}\n`,
  );

  const darkCssPath = join(__dirname, 'dist/css/tokens-dark.css');
  const darkCss = readFileSync(darkCssPath, 'utf-8');
  writeFileSync(darkCssPath, `@layer co.theme {\n${darkCss}}\n`);

  // Copy base element styles
  console.log('Copying base element styles...');
  copyFileSync(join(__dirname, 'src/base.css'), join(__dirname, 'dist/css/base.css'));

  // Copy font-face stylesheet
  console.log('Copying font-face stylesheet...');
  copyFileSync(join(__dirname, 'src/fonts.css'), join(__dirname, 'dist/css/fonts.css'));

  // Generate TypeScript declarations
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

  console.log('Token build complete!');
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
