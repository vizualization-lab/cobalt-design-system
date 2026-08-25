import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageDir = join(__dirname, '..');
const cssPath = join(packageDir, 'dist', 'css', 'tokens.css');
const tailwindDir = join(packageDir, 'dist', 'tailwind');
const presetPath = join(tailwindDir, 'preset.js');
const declarationsPath = join(tailwindDir, 'preset.d.ts');
const themePath = join(tailwindDir, 'theme.css');

function read(filePath) {
  return readFileSync(filePath, 'utf-8');
}

function assertExists(filePath) {
  assert.equal(existsSync(filePath), true, `Expected generated file to exist: ${filePath}`);
}

function extractDeclaredVariables(css) {
  return new Set([...css.matchAll(/(--co-[\w-]+)\s*:/g)].map((match) => match[1]));
}

function assertReferencesResolve(filePath, declaredVariables) {
  const references = [...read(filePath).matchAll(/var\((--co-[\w-]+)\)/g)].map((match) => match[1]);
  const missing = [...new Set(references.filter((name) => !declaredVariables.has(name)))];

  assert.ok(references.length > 0, `Expected Cobalt token references in ${filePath}`);
  assert.deepEqual(missing, [], `Found unresolved Cobalt token references in ${filePath}`);
}

function assertPresetMappings(preset) {
  const { theme } = preset;

  assert.equal(
    theme.colors.background.page,
    'var(--co-color-background-page)',
    'Expected refreshed background roles',
  );
  assert.equal(theme.colors.text.primary, 'var(--co-color-text-primary)');
  assert.equal(theme.colors.text.inverse, 'var(--co-color-text-inverse)');
  assert.equal(theme.colors.iris[500], 'var(--co-color-iris-500)');
  assert.equal(theme.colors.white, 'var(--co-color-neutral-0)');
  assert.equal(theme.colors.black, 'var(--co-color-neutral-1000)');
  assert.equal(theme.colors.background.theme.DEFAULT, 'var(--co-color-background-theme-default)');

  assert.equal(theme.spacing[100], 'var(--co-space-100)');
  assert.equal(theme.spacing['gap-xs'], 'var(--co-space-gap-xs)');
  assert.equal(theme.spacing['padding-md'], 'var(--co-space-padding-md)');
  assert.equal(theme.spacing['margin-page'], 'var(--co-space-margin-page)');

  assert.equal(theme.borderRadius.DEFAULT, 'var(--co-radius-default)');
  assert.equal(theme.borderRadius.container, 'var(--co-radius-container)');
  assert.equal(theme.fontSize['heading-xl'], 'var(--co-font-size-heading-xl)');
  assert.equal(theme.fontSize['body-md'], 'var(--co-font-size-body-md)');
  assert.equal(theme.fontSize.code, 'var(--co-font-size-code)');
  assert.deepEqual(theme.fontFamily.sans, [
    "'Inter Variable'",
    "'Noto Sans Variable'",
    'system-ui',
    'sans-serif',
  ]);
  assert.deepEqual(theme.fontFamily.mono, [
    "'JetBrains Mono Variable'",
    "'Fira Code'",
    'monospace',
  ]);
  assert.equal(theme.lineHeight[300], 'var(--co-font-line-height-300)');
  assert.equal(theme.letterSpacing.tight, 'var(--co-font-tracking-tight)');
  assert.equal(theme.zIndex.overlay, 'var(--co-elevation-surface-overlay)');
  assert.equal(theme.screens.lg, '1024px');

  for (const removedSection of [
    'boxShadow',
    'opacity',
    'transitionDuration',
    'transitionTimingFunction',
  ]) {
    assert.equal(
      removedSection in theme,
      false,
      `Unexpected legacy Tailwind section: ${removedSection}`,
    );
  }

  for (const removedColorGroup of ['state', 'surface', 'feedback', 'primitive-purple']) {
    assert.equal(
      removedColorGroup in theme.colors,
      false,
      `Unexpected legacy Tailwind color group: ${removedColorGroup}`,
    );
  }
}

function assertV4Theme(themeCss) {
  assert.match(themeCss, /@theme\s*\{/);
  assert.match(themeCss, /--color-background-theme:\s*var\(--co-color-background-theme-default\);/);
  assert.match(themeCss, /--color-iris-500:\s*var\(--co-color-iris-500\);/);
  assert.match(themeCss, /--text-heading-xl:\s*var\(--co-font-size-heading-xl\);/);
  assert.match(themeCss, /--text-body-md:\s*var\(--co-font-size-body-md\);/);
  assert.match(themeCss, /--spacing-padding-md:\s*var\(--co-space-padding-md\);/);
  assert.match(themeCss, /--radius:\s*var\(--co-radius-default\);/);
  assert.match(themeCss, /--breakpoint-lg:\s*1024px;/);
  assert.doesNotMatch(themeCss, /--co-(?:motion|opacity|shape-radius|color-surface)-/);
}

for (const filePath of [cssPath, presetPath, declarationsPath, themePath]) {
  assertExists(filePath);
}

const declaredVariables = extractDeclaredVariables(read(cssPath));
assertReferencesResolve(presetPath, declaredVariables);
assertReferencesResolve(themePath, declaredVariables);

const presetUrl = `${pathToFileURL(presetPath).href}?validation=${Date.now()}`;
const { default: preset } = await import(presetUrl);
assertPresetMappings(preset);
assertV4Theme(read(themePath));
assert.match(read(declarationsPath), /declare const cobaltPreset: Config;/);

console.log('Tailwind validation passed.');
