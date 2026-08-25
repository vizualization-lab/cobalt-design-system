import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageDir = join(__dirname, '..');
const repositoryRoot = resolve(packageDir, '..', '..');
const utilitiesPath = join(packageDir, 'dist', 'css', 'utilities.css');
const tokensCssPath = join(packageDir, 'dist', 'css', 'tokens.css');
const primitivesPath = join(repositoryRoot, 'exports', 'tokens', 'primitives.tokens-dtcg.json');
const breakpointKeys = ['sm', 'md', 'lg', 'xl', '2xl'];

function read(filePath) {
  return readFileSync(filePath, 'utf-8');
}

function getNode(root, path) {
  return path.split('.').reduce((value, key) => value?.[key], root);
}

for (const filePath of [utilitiesPath, tokensCssPath, primitivesPath]) {
  assert.equal(existsSync(filePath), true, `Expected file to exist: ${filePath}`);
}

const utilitiesCss = read(utilitiesPath);
const tokensCss = read(tokensCssPath);
const primitives = JSON.parse(read(primitivesPath));

assert.doesNotMatch(
  utilitiesCss,
  /__CO_BREAKPOINT_[A-Z0-9]+__/,
  'Found an unresolved breakpoint placeholder.',
);

for (const key of breakpointKeys) {
  const token = getNode(primitives, `co.breakpoint.${key}`);
  assert.ok(token && '$value' in token, `Missing DTCG breakpoint token: co.breakpoint.${key}`);
  assert.match(
    utilitiesCss,
    new RegExp(`@media \\(min-width: ${token.$value.replace('.', '\\.')}\\)`),
    `Expected the ${key} breakpoint to use ${token.$value}.`,
  );
}

const declaredVariables = new Set(
  [...tokensCss.matchAll(/(--co-[\w-]+)\s*:/g)].map((match) => match[1]),
);
const referencedVariables = [
  ...new Set([...utilitiesCss.matchAll(/var\((--co-[\w-]+)\)/g)].map((match) => match[1])),
];
const missingVariables = referencedVariables.filter((name) => !declaredVariables.has(name));

assert.ok(referencedVariables.length > 0, 'Expected token references in generated utilities CSS.');
assert.deepEqual(missingVariables, [], 'Found unresolved token references in utilities CSS.');

for (const expectedPattern of [
  /\.co-gap-400\s*\{[^}]*var\(--co-space-400\)/s,
  /\.co-type-heading-xl\s*\{[^}]*var\(--co-font-size-heading-xl\)/s,
  /\.co-type-body-md\s*\{[^}]*var\(--co-font-size-body-md\)/s,
  /\.co-type-code\s*\{[^}]*JetBrains Mono Variable/s,
  /\.co-max-w-screen-lg\s*\{[^}]*var\(--co-breakpoint-lg\)/s,
  /\.md\\:co-gap-400\s*\{[^}]*var\(--co-space-400\)/s,
]) {
  assert.match(utilitiesCss, expectedPattern);
}

assert.doesNotMatch(
  utilitiesCss,
  /--co-(?:typography-|layout-content-|font-size-(?:h[1-6]|p|small|xsmall)|space-(?:[1-9]|10|12))(?:[);])/,
  'Found a legacy token reference in utilities CSS.',
);

console.log('Utilities validation passed.');
