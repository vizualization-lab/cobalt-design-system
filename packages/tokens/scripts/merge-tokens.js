/**
 * Merges individual DTCG token JSON files into a single Token Studio-compatible
 * JSON file. This merged file can be imported into Token Studio (free tier) or
 * any DTCG-aware Figma plugin to sync tokens as Figma Variables.
 *
 * Output format:
 * {
 *   "primitives": { ...primitive tokens... },
 *   "primitives.color": { ...primitive colors... },
 *   "semantic.light": { ...light semantic colors... },
 *   "semantic.dark": { ...dark semantic colors... },
 *   "components": { ...component tokens... },
 *   "$themes": [ ...theme definitions... ],
 *   "$metadata": { ...token set ordering... }
 * }
 *
 * Usage:
 *   node scripts/merge-tokens.js            # writes to dist/tokens-merged.json
 *   node scripts/merge-tokens.js --stdout   # prints to stdout (for piping)
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const tokensDir = join(__dirname, '..', 'tokens');
const distDir = join(__dirname, '..', 'dist');

const TOKEN_SETS = [
  'primitives',
  'primitives.color',
  'semantic.light',
  'semantic.dark',
  'components',
];

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

export function mergeTokens() {
  const merged = {};

  for (const setName of TOKEN_SETS) {
    merged[setName] = readJson(join(tokensDir, `${setName}.json`));
  }

  merged.$themes = readJson(join(tokensDir, '$themes.json'));
  merged.$metadata = readJson(join(tokensDir, '$metadata.json'));

  return merged;
}

// CLI entry point
const isCLI =
  process.argv[1] && fileURLToPath(import.meta.url).endsWith(process.argv[1].replace(/.*\//, ''));

if (isCLI) {
  const result = mergeTokens();

  if (process.argv.includes('--stdout')) {
    process.stdout.write(JSON.stringify(result, null, 2) + '\n');
  } else {
    mkdirSync(distDir, { recursive: true });
    const outPath = join(distDir, 'tokens-merged.json');
    writeFileSync(outPath, JSON.stringify(result, null, 2) + '\n');
    console.log(`Merged ${TOKEN_SETS.length} token sets → ${outPath}`);
  }
}
