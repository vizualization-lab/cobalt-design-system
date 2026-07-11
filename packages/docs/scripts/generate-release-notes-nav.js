#!/usr/bin/env node

/**
 * Generates .generated/release-lines.json — the release-line list the
 * docs navigation (Changelog group) is built from.
 *
 * The file is committed (gitignore exception) so navigation.ts can
 * statically import it even before the predev/prebuild hooks run; this
 * script refreshes it from the root CHANGELOG.md on every dev/build.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadReleaseLines } from './release-notes-lib.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../.generated');
const outPath = path.join(outDir, 'release-lines.json');

const lines = loadReleaseLines().map(({ id, label, latestVersion, releaseCount }) => ({
  id,
  label,
  latestVersion,
  releaseCount,
}));

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(lines, null, 2) + '\n');
console.log(`Wrote ${lines.length} release line(s) to ${path.relative(process.cwd(), outPath)}`);
