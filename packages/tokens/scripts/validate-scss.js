import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as sass from 'sass';
import { discoverTokenSets } from './token-set-utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageDir = join(__dirname, '..');
const distDir = join(packageDir, 'dist');
const scssDir = join(distDir, 'scss');
const cssDir = join(distDir, 'css');

function read(filePath) {
  return readFileSync(filePath, 'utf-8');
}

function assertExists(filePath) {
  assert.equal(existsSync(filePath), true, `Expected generated file to exist: ${filePath}`);
}

function compileScss(source) {
  return sass.compileString(source, {
    loadPaths: [scssDir],
    style: 'expanded',
  }).css;
}

function extractCssVariables(css) {
  const names = [];
  const re = /--(co-[\w-]+)\s*:/g;
  let match;

  while ((match = re.exec(css)) !== null) {
    names.push(`--${match[1]}`);
  }

  return names;
}

function assertHelperOutput() {
  const css = compileScss(`
    @use 'index' as co;

    .example {
      padding: co.space('inset.md');
      color: co.color('text.default');
      background: co.token('color.surface.default');
      font-family: co.font('family.sans');
      border-radius: co.$co-shape-radius-md;

      @include co.type('body');
      @include co.font-family('mono');
    }

    @include co.media-up('lg') {
      .example {
        gap: co.space(4);
      }
    }
  `);

  assert.match(css, /padding: var\(--co-space-inset-md\);/);
  assert.match(css, /color: var\(--co-color-text-default\);/);
  assert.match(css, /background: var\(--co-color-surface-default\);/);
  assert.match(css, /font-family: var\(--co-font-family-mono\);/);
  assert.match(css, /border-radius: var\(--co-shape-radius-md\);/);
  assert.match(css, /font-size: var\(--co-typography-body-size\);/);
  assert.match(css, /font-weight: var\(--co-typography-body-weight\);/);
  assert.match(css, /letter-spacing: var\(--co-typography-body-tracking\);/);
  assert.match(css, /line-height: var\(--co-typography-body-line-height\);/);
  assert.match(css, /@media \(min-width: 1024px\)/);
  assert.match(css, /gap: var\(--co-space-4\);/);
}

function assertInvalidInputsFail() {
  assert.throws(
    () =>
      compileScss(`
        @use 'index' as co;

        .bad {
          color: co.color('missing');
        }
      `),
    /Unknown Cobalt token/,
  );

  assert.throws(
    () =>
      compileScss(`
        @use 'index' as co;

        .bad {
          @include co.type('missing');
        }
      `),
    /Unknown Cobalt typography role/,
  );

  assert.throws(
    () =>
      compileScss(`
        @use 'index' as co;

        @include co.media-up('watch') {
          .bad {
            display: block;
          }
        }
      `),
    /Unknown Cobalt breakpoint/,
  );
}

function assertPackageExportsResolve() {
  const repoRoot = join(packageDir, '..', '..');
  const css = sass.compileString(
    `
      @use 'pkg:@cobalt/tokens/scss' as co;
      @use 'pkg:@cobalt/tokens/scss/css';
      @use 'pkg:@cobalt/tokens/scss/themes/purple';
      @use 'pkg:@cobalt/tokens/scss/css/themes/purple-dark';

      .package-export {
        color: co.color('text.default');
      }
    `,
    {
      importers: [new sass.NodePackageImporter(repoRoot)],
      style: 'expanded',
    },
  ).css;

  assert.match(css, /--co-color-text-default:/);
  assert.match(
    css,
    /\[data-theme=(?:"purple"|'purple'|purple)\]\[data-mode=(?:"dark"|'dark'|dark)\]/,
  );
  assert.match(css, /color: var\(--co-color-text-default\);/);
}

function assertTokenMapsMatchCss() {
  const tokenCss = read(join(cssDir, 'tokens.css'));
  const tokensScss = read(join(scssDir, 'tokens.scss'));
  const mapsScss = read(join(scssDir, 'maps.scss'));

  for (const cssName of extractCssVariables(tokenCss)) {
    const key = cssName.replace(/^--co-/, '');
    const scssVar = `$${cssName.slice(2)}: var(${cssName})`;
    const mapEntry = `'${key}': var(${cssName})`;

    assert.match(tokensScss, new RegExp(escapeRegExp(scssVar)));
    assert.match(mapsScss, new RegExp(escapeRegExp(mapEntry)));
  }
}

function assertThemeShimsMatchCss() {
  const discovery = discoverTokenSets(join(packageDir, 'tokens'));
  const pairs = [
    [join(cssDir, 'tokens.css'), join(scssDir, 'css.scss')],
    [join(cssDir, 'tokens-dark.css'), join(scssDir, 'css', 'dark.scss')],
  ];

  const themeIds = [...new Set(discovery.themeTokenSets.map((tokenSet) => tokenSet.themeId))];
  for (const themeId of themeIds) {
    pairs.push([
      join(cssDir, 'themes', `${themeId}.css`),
      join(scssDir, 'themes', `${themeId}.scss`),
    ]);
  }

  for (const themeTokenSet of discovery.themeTokenSets) {
    const { themeId, mode } = themeTokenSet;
    const cssPath =
      themeId === 'default' && mode === 'light'
        ? join(cssDir, 'tokens.css')
        : themeId === 'default' && mode === 'dark'
          ? join(cssDir, 'tokens-dark.css')
          : join(cssDir, 'themes', `tokens-${themeId}-${mode}.css`);

    pairs.push([cssPath, join(scssDir, 'css', 'themes', `${themeId}-${mode}.scss`)]);
  }

  for (const [cssPath, scssPath] of pairs) {
    assertExists(cssPath);
    assertExists(scssPath);
    assert.equal(read(scssPath), read(cssPath), `SCSS shim must match CSS output: ${scssPath}`);
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

assertExists(join(scssDir, 'index.scss'));
assertExists(join(scssDir, 'functions.scss'));
assertExists(join(scssDir, 'mixins.scss'));
assertHelperOutput();
assertInvalidInputsFail();
assertPackageExportsResolve();
assertTokenMapsMatchCss();
assertThemeShimsMatchCss();

console.log('SCSS validation passed.');
