import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageDir = join(__dirname, '..');
const manifestPath = join(packageDir, 'dist', 'tooling', 'cobalt.manifest.json');
const packageJson = JSON.parse(readFileSync(join(packageDir, 'package.json'), 'utf-8'));

assert.equal(existsSync(manifestPath), true, `Expected generated manifest: ${manifestPath}`);

const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
assert.equal(manifest.schemaVersion, 1);
assert.equal(manifest.cobaltVersion, packageJson.version);
assert.ok(Array.isArray(manifest.tokens) && manifest.tokens.length > 0);
assert.ok(Array.isArray(manifest.utilities) && manifest.utilities.length > 0);

const tokenNames = manifest.tokens.map((token) => token.name);
const utilityNames = manifest.utilities.map((utility) => utility.className);
assert.equal(new Set(tokenNames).size, tokenNames.length, 'Manifest contains duplicate tokens.');
assert.equal(
  new Set(utilityNames).size,
  utilityNames.length,
  'Manifest contains duplicate utilities.',
);

for (const name of [
  '--co-color-text-primary',
  '--co-color-background-page',
  '--co-color-iris-500',
  '--co-font-size-heading-xl',
  '--co-space-400',
]) {
  assert.ok(tokenNames.includes(name), `Expected refreshed token in tooling manifest: ${name}`);
}

const primaryText = manifest.tokens.find((token) => token.name === '--co-color-text-primary');
assert.equal(primaryText.category, 'Color');
assert.equal(primaryText.tier, 'semantic');
assert.equal(primaryText.themeModes.length, 8, 'Expected every theme and mode for primary text.');
assert.deepEqual([...new Set(primaryText.themeModes.map(({ theme }) => theme))].sort(), [
  'brick',
  'default',
  'forest',
  'iris',
]);
assert.deepEqual([...new Set(primaryText.themeModes.map(({ mode }) => mode))].sort(), [
  'dark',
  'light',
]);

for (const className of ['co-gap-400', 'co-type-heading-xl', 'md:co-gap-400', '2xl:co-gap-400']) {
  assert.ok(utilityNames.includes(className), `Expected utility in tooling manifest: ${className}`);
}

for (const utility of manifest.utilities) {
  for (const tokenRef of utility.tokenRefs) {
    assert.ok(
      tokenNames.includes(tokenRef),
      `${utility.className} references missing ${tokenRef}.`,
    );
  }
}

assert.equal(
  tokenNames.some((name) => name.includes('primitive-purple')),
  false,
  'Manifest contains legacy Purple token names.',
);

console.log('Tooling manifest validation passed.');
