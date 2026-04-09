import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { discoverTokenSets } from './token-set-utils.js';

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

function deepMerge(target, source) {
  for (const [key, value] of Object.entries(source)) {
    if (
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      !Object.prototype.hasOwnProperty.call(value, '$value')
    ) {
      target[key] ??= {};
      deepMerge(target[key], value);
      continue;
    }

    target[key] = value;
  }

  return target;
}

function getNode(root, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], root);
}

function resolveTokenValue(root, path, trail = new Set()) {
  if (trail.has(path)) {
    throw new Error(`Circular token reference detected: ${[...trail, path].join(' -> ')}`);
  }

  const node = getNode(root, path);
  if (!node || typeof node !== 'object' || !Object.prototype.hasOwnProperty.call(node, '$value')) {
    throw new Error(`Missing token: ${path}`);
  }

  const value = node.$value;
  if (typeof value === 'string' && /^\{.+\}$/.test(value)) {
    const nextTrail = new Set(trail);
    nextTrail.add(path);
    return resolveTokenValue(root, value.slice(1, -1), nextTrail);
  }

  return value;
}

function getPrimitiveRoot(tokensDir) {
  const discovery = discoverTokenSets(tokensDir);
  const root = {};

  for (const tokenSet of discovery.primitives) {
    deepMerge(root, readJson(join(tokensDir, tokenSet.fileName)));
  }

  return root;
}

export function generateUtilitiesCss(packageDir, tokensDir = join(packageDir, 'tokens')) {
  const templatePath = join(packageDir, 'src', 'utilities.template.css');
  const outputPath = join(packageDir, 'dist', 'css', 'utilities.css');
  const primitiveRoot = getPrimitiveRoot(tokensDir);
  const breakpointKeys = ['sm', 'md', 'lg', 'xl', '2xl'];

  let css = readFileSync(templatePath, 'utf-8');

  for (const key of breakpointKeys) {
    const placeholder = `__CO_BREAKPOINT_${key.toUpperCase()}__`;
    const value = resolveTokenValue(primitiveRoot, `co.breakpoint.${key}`);
    css = css.replaceAll(placeholder, value);
  }

  mkdirSync(join(packageDir, 'dist', 'css'), { recursive: true });
  writeFileSync(outputPath, css);
}
