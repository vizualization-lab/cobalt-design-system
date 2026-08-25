/**
 * Legacy Tokens Studio for Figma workflow.
 * Exports a combined DTCG artifact from tokens-tokstd sources.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { discoverTokenSets, getTokenSetOrder } from './tokstd-token-set-utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const tokensDir = join(__dirname, '..', 'tokens-tokstd');
const distDir = join(__dirname, '..', 'dist');

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function isReference(value) {
  return typeof value === 'string' && /^\{.+\}$/.test(value);
}

function parseNumber(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string' && !isReference(value) && /^-?\d*\.?\d+$/.test(value)) {
    return Number(value);
  }

  return value;
}

function parseDimension(value) {
  if (typeof value !== 'string' || isReference(value)) {
    return value;
  }

  const match = value.match(/^(-?\d*\.?\d+)(px|rem|em)$/);
  if (!match) {
    return value;
  }

  return {
    value: Number(match[1]),
    unit: match[2],
  };
}

function parseDuration(value) {
  if (typeof value !== 'string' || isReference(value)) {
    return value;
  }

  const match = value.match(/^(-?\d*\.?\d+)(ms|s)$/);
  if (!match) {
    return value;
  }

  return {
    value: Number(match[1]),
    unit: match[2],
  };
}

function parseCubicBezier(value) {
  if (typeof value !== 'string') {
    return value;
  }

  const match = value.match(/^cubic-bezier\(([^)]+)\)$/);
  if (!match) {
    return value;
  }

  return match[1].split(',').map((part) => Number(part.trim()));
}

function hexToColor(hex, alpha = 1) {
  const normalized = hex.replace('#', '');
  const full =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => char + char)
          .join('')
      : normalized;

  return {
    colorSpace: 'srgb',
    components: [
      Number.parseInt(full.slice(0, 2), 16) / 255,
      Number.parseInt(full.slice(2, 4), 16) / 255,
      Number.parseInt(full.slice(4, 6), 16) / 255,
    ],
    alpha,
    hex: `#${full.toUpperCase()}`,
  };
}

function parseShadow(value) {
  const shadows = {
    '0 1px 2px 0 rgb(0 0 0 / 0.05)': {
      color: hexToColor('#000000', 0.05),
      offsetX: { value: 0, unit: 'px' },
      offsetY: { value: 1, unit: 'px' },
      blur: { value: 2, unit: 'px' },
      spread: { value: 0, unit: 'px' },
    },
    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)': [
      {
        color: hexToColor('#000000', 0.1),
        offsetX: { value: 0, unit: 'px' },
        offsetY: { value: 4, unit: 'px' },
        blur: { value: 6, unit: 'px' },
        spread: { value: -1, unit: 'px' },
      },
      {
        color: hexToColor('#000000', 0.1),
        offsetX: { value: 0, unit: 'px' },
        offsetY: { value: 2, unit: 'px' },
        blur: { value: 4, unit: 'px' },
        spread: { value: -2, unit: 'px' },
      },
    ],
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)': [
      {
        color: hexToColor('#000000', 0.1),
        offsetX: { value: 0, unit: 'px' },
        offsetY: { value: 10, unit: 'px' },
        blur: { value: 15, unit: 'px' },
        spread: { value: -3, unit: 'px' },
      },
      {
        color: hexToColor('#000000', 0.1),
        offsetX: { value: 0, unit: 'px' },
        offsetY: { value: 4, unit: 'px' },
        blur: { value: 6, unit: 'px' },
        spread: { value: -4, unit: 'px' },
      },
    ],
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)': [
      {
        color: hexToColor('#000000', 0.1),
        offsetX: { value: 0, unit: 'px' },
        offsetY: { value: 20, unit: 'px' },
        blur: { value: 25, unit: 'px' },
        spread: { value: -5, unit: 'px' },
      },
      {
        color: hexToColor('#000000', 0.1),
        offsetX: { value: 0, unit: 'px' },
        offsetY: { value: 8, unit: 'px' },
        blur: { value: 10, unit: 'px' },
        spread: { value: -6, unit: 'px' },
      },
    ],
  };

  return shadows[value] ?? shadows[value.replaceAll('0px', '0')] ?? value;
}

function normalizeToken(token) {
  const normalized = clone(token);

  switch (normalized.$type) {
    case 'dimension':
      normalized.$value = parseDimension(normalized.$value);
      break;
    case 'duration':
      normalized.$value = parseDuration(normalized.$value);
      break;
    case 'cubicBezier':
      normalized.$value = parseCubicBezier(normalized.$value);
      break;
    case 'fontWeight':
      normalized.$value = parseNumber(normalized.$value);
      break;
    case 'lineHeights':
      normalized.$type = 'number';
      normalized.$value = parseNumber(normalized.$value);
      break;
    case 'opacity':
      normalized.$type = 'number';
      normalized.$value = parseNumber(normalized.$value);
      break;
    case 'number':
      normalized.$value = parseNumber(normalized.$value);
      break;
    case 'shadow':
      normalized.$value = parseShadow(normalized.$value);
      break;
    default:
      break;
  }

  return normalized;
}

function walk(node) {
  if (!node || typeof node !== 'object') {
    return node;
  }

  if ('$type' in node && '$value' in node) {
    return normalizeToken(node);
  }

  const out = Array.isArray(node) ? [] : {};
  for (const [key, value] of Object.entries(node)) {
    out[key] = walk(value);
  }
  return out;
}

export function exportDtcgTokens(tokensPath = tokensDir) {
  const discovery = discoverTokenSets(tokensPath);
  const exported = {};

  for (const tokenSetName of getTokenSetOrder(discovery)) {
    exported[tokenSetName] = walk(readJson(join(tokensPath, `${tokenSetName}.json`)));
  }

  return exported;
}

const isCLI =
  process.argv[1] && fileURLToPath(import.meta.url).endsWith(process.argv[1].replace(/.*\//, ''));

if (isCLI) {
  const result = exportDtcgTokens();
  mkdirSync(distDir, { recursive: true });
  const outPath = join(distDir, 'tokens-tokstd-dtcg.json');
  writeFileSync(outPath, JSON.stringify(result, null, 2) + '\n');
  console.log(`Exported DTCG token artifact → ${outPath}`);
}
