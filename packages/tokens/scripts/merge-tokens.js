/**
 * Merges individual DTCG token JSON files into a single Token Studio-compatible
 * JSON file. Generated token metadata is derived from the token-set filenames,
 * so new semantic.theme.* files are picked up without script edits.
 *
 * Output format:
 * {
 *   "primitives": { ...primitive tokens... },
 *   "primitives.color": { ...primitive colors... },
 *   "semantic.shared": { ...shared semantic tokens... },
 *   "semantic.theme.default.light": { ...theme semantic tokens... },
 *   "semantic.theme.default.dark": { ...theme semantic tokens... },
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
import {
  buildMetadata,
  buildThemes,
  discoverTokenSets,
  getTokenSetOrder,
  writeGeneratedTokenMetadata,
} from './token-set-utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const tokensDir = join(__dirname, '..', 'tokens');
const distDir = join(__dirname, '..', 'dist');

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

function assertSupportedTokenSets(discovery) {
  if (discovery.uncategorized.length > 0) {
    const names = discovery.uncategorized.map((tokenSet) => tokenSet.name).join(', ');
    throw new Error(`Unsupported token sets detected: ${names}`);
  }
}

export function mergeTokens() {
  const discovery = discoverTokenSets(tokensDir);
  assertSupportedTokenSets(discovery);
  writeGeneratedTokenMetadata(tokensDir, discovery);

  const merged = {};

  for (const tokenSetName of getTokenSetOrder(discovery)) {
    merged[tokenSetName] = readJson(join(tokensDir, `${tokenSetName}.json`));
  }

  merged.$themes = buildThemes(discovery);
  merged.$metadata = buildMetadata(discovery);

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
    console.log(`Merged ${Object.keys(result).length - 2} token sets → ${outPath}`);
  }
}
