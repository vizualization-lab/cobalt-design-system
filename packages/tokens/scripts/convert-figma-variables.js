import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { format } from 'prettier';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(__dirname, '..', '..', '..');

export const defaultSourceDir = join(repositoryRoot, 'exports');
export const defaultOutputDir = join(defaultSourceDir, 'tokens');

const FIGMA_TOKEN_FILE_PATTERN = /\.tokens-figma\.json$/;
const DTCG_TOKEN_FILE_PATTERN = /\.tokens-dtcg\.json$/;
const REFERENCE_PATTERN = /^\{.+\}$/;
const NUMBER_PRECISION = 1_000_000;

const DIMENSION_PATH_PREFIXES = [
  'co.space.',
  'co.size.',
  'co.breakpoint.',
  'co.border.width.',
  'co.border.radius.',
  'co.radius.',
  'co.font.font-size.',
  'co.font.size.',
  'co.font.tracking.',
];

const NUMBER_PATH_PREFIXES = ['co.font.line-height.', 'co.elevation.'];

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function matchesPrefix(path, prefixes) {
  return prefixes.some((prefix) => path.startsWith(prefix));
}

function normalizeNumber(value) {
  if (!Number.isFinite(value)) {
    throw new Error(`Expected a finite number, received ${String(value)}.`);
  }

  return Math.round(value * NUMBER_PRECISION) / NUMBER_PRECISION;
}

function normalizeAliasPath(value) {
  return value.split('/').filter(Boolean).join('.');
}

function getAliasTarget(token) {
  const target = token.$extensions?.['com.figma.aliasData']?.targetVariableName;
  return typeof target === 'string' && target.length > 0 ? normalizeAliasPath(target) : null;
}

function inferTokenType(path, sourceType, warnings) {
  if (sourceType === 'string' && path.startsWith('co.font.font-family.')) {
    return 'fontFamily';
  }

  if (sourceType !== 'number') {
    return sourceType;
  }

  if (matchesPrefix(path, DIMENSION_PATH_PREFIXES)) {
    return 'dimension';
  }

  if (path.startsWith('co.font.weight.')) {
    return 'fontWeight';
  }

  if (!matchesPrefix(path, NUMBER_PATH_PREFIXES)) {
    warnings.push(`${path}: kept as a unitless number because no dimension rule matched.`);
  }

  return 'number';
}

function normalizeColor(value, path) {
  if (!isObject(value)) {
    return value;
  }

  if (value.colorSpace !== 'srgb') {
    throw new Error(`${path}: unsupported color space "${String(value.colorSpace)}".`);
  }

  if (!/^#[0-9a-fA-F]{6}$/.test(value.hex)) {
    throw new Error(`${path}: expected a six-digit sRGB hex fallback.`);
  }

  if (!Number.isFinite(value.alpha) || value.alpha < 0 || value.alpha > 1) {
    throw new Error(`${path}: expected alpha to be a number between 0 and 1.`);
  }

  const hex = value.hex.toUpperCase();
  if (value.alpha === 1) {
    return hex;
  }

  const alpha = Math.round(value.alpha * 255)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase();

  return `${hex}${alpha}`;
}

function normalizeValue(value, type, path) {
  if (typeof value === 'string' && REFERENCE_PATTERN.test(value)) {
    return value;
  }

  switch (type) {
    case 'color':
      return normalizeColor(value, path);
    case 'dimension':
      return typeof value === 'number' ? `${normalizeNumber(value)}px` : value;
    case 'fontWeight':
    case 'number':
      return typeof value === 'number' ? normalizeNumber(value) : value;
    default:
      return value;
  }
}

function collectTokenPaths(node, path = [], paths = new Set()) {
  if (!isObject(node)) {
    return paths;
  }

  if (Object.hasOwn(node, '$value')) {
    paths.add(path.join('.'));
    return paths;
  }

  for (const [key, value] of Object.entries(node)) {
    if (key === '$root') {
      collectTokenPaths(value, path, paths);
    } else if (!key.startsWith('$')) {
      collectTokenPaths(value, [...path, key], paths);
    }
  }

  return paths;
}

function transformNode(node, availablePaths, warnings, path = []) {
  if (Array.isArray(node)) {
    return node.map((value) => transformNode(value, availablePaths, warnings, path));
  }

  if (!isObject(node)) {
    return node;
  }

  if (Object.hasOwn(node, '$value')) {
    const tokenPath = path.join('.');
    const transformed = structuredClone(node);
    const tokenType = inferTokenType(tokenPath, transformed.$type, warnings);
    const aliasTarget = getAliasTarget(transformed);

    transformed.$type = tokenType;

    if (aliasTarget && availablePaths.has(aliasTarget)) {
      transformed.$value = `{${aliasTarget}}`;
    } else {
      if (aliasTarget) {
        warnings.push(
          `${tokenPath}: alias target ${aliasTarget} was not exported; kept its literal value.`,
        );
      }
      transformed.$value = normalizeValue(transformed.$value, tokenType, tokenPath);
    }

    return transformed;
  }

  const transformed = {};
  for (const [key, value] of Object.entries(node)) {
    if (key === '$root') {
      transformed[key] = transformNode(value, availablePaths, warnings, path);
    } else if (key.startsWith('$')) {
      transformed[key] = structuredClone(value);
    } else {
      transformed[key] = transformNode(value, availablePaths, warnings, [...path, key]);
    }
  }

  return transformed;
}

function readTokenFiles(sourceDir) {
  const fileNames = readdirSync(sourceDir)
    .filter((fileName) => FIGMA_TOKEN_FILE_PATTERN.test(fileName))
    .sort();

  if (fileNames.length === 0) {
    throw new Error(
      `No Figma variable exports matching *.tokens-figma.json found in ${sourceDir}.`,
    );
  }

  return fileNames.map((fileName) => {
    const filePath = join(sourceDir, fileName);
    try {
      return {
        fileName,
        tokens: JSON.parse(readFileSync(filePath, 'utf8')),
      };
    } catch (error) {
      throw new Error(`Unable to parse ${filePath}: ${error.message}`);
    }
  });
}

export async function convertFigmaExports({
  sourceDir = defaultSourceDir,
  outputDir = defaultOutputDir,
  onWarning = (warning) => console.warn(`Warning: ${warning}`),
} = {}) {
  const tokenFiles = readTokenFiles(sourceDir);
  const availablePaths = new Set();

  for (const { tokens } of tokenFiles) {
    collectTokenPaths(tokens, [], availablePaths);
  }

  const warnings = [];
  const outputs = await Promise.all(
    tokenFiles.map(async ({ fileName, tokens }) => {
      const transformed = transformNode(tokens, availablePaths, warnings);
      return {
        fileName: fileName.replace(FIGMA_TOKEN_FILE_PATTERN, '.tokens-dtcg.json'),
        content: await format(JSON.stringify(transformed), { parser: 'json' }),
      };
    }),
  );

  mkdirSync(outputDir, { recursive: true });

  const expectedFiles = new Set(outputs.map(({ fileName }) => fileName));
  for (const fileName of readdirSync(outputDir)) {
    if (DTCG_TOKEN_FILE_PATTERN.test(fileName) && !expectedFiles.has(fileName)) {
      rmSync(join(outputDir, fileName));
    }
  }

  for (const { fileName, content } of outputs) {
    writeFileSync(join(outputDir, fileName), content);
  }

  for (const warning of warnings) {
    onWarning(warning);
  }

  return {
    files: outputs.map(({ fileName }) => fileName),
    outputDir,
    warnings,
  };
}

const isCLI = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isCLI) {
  try {
    const result = await convertFigmaExports();
    console.log(`Converted ${result.files.length} Figma variable exports → ${result.outputDir}`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
