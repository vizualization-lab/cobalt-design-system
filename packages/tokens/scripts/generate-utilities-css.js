import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf-8'));
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

export function generateUtilitiesCss(
  packageDir,
  tokensDir = resolve(packageDir, '..', '..', 'exports', 'tokens'),
) {
  const templatePath = join(packageDir, 'src', 'utilities.template.css');
  const outputPath = join(packageDir, 'dist', 'css', 'utilities.css');
  const primitiveRoot = readJson(join(tokensDir, 'primitives.tokens-dtcg.json'));
  const breakpointKeys = ['sm', 'md', 'lg', 'xl', '2xl'];

  let css = readFileSync(templatePath, 'utf-8');

  for (const key of breakpointKeys) {
    const placeholder = `__CO_BREAKPOINT_${key.toUpperCase()}__`;
    const value = resolveTokenValue(primitiveRoot, `co.breakpoint.${key}`);
    css = css.replaceAll(placeholder, value);
  }

  if (/__CO_BREAKPOINT_[A-Z0-9]+__/.test(css)) {
    throw new Error('Unresolved breakpoint placeholder in utilities template.');
  }

  mkdirSync(join(packageDir, 'dist', 'css'), { recursive: true });
  writeFileSync(outputPath, css);
}
