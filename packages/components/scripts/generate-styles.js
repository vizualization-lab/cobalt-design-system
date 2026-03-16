#!/usr/bin/env node

/**
 * Generates .styles.ts files from .styles.css files.
 *
 * For each *.styles.css file found under src/, generates a co-located
 * *.styles.ts that exports the CSS wrapped in Lit's `css` tagged template.
 *
 * Usage:
 *   node scripts/generate-styles.js          # one-shot
 *   node scripts/generate-styles.js --watch  # watch mode
 *   node scripts/generate-styles.js --check  # exit 1 if any .ts is out of date
 */

import { readFileSync, writeFileSync, readdirSync, watch as fsWatch } from 'fs';
import { basename, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, '..', 'src');
const args = process.argv.slice(2);
const isWatch = args.includes('--watch');
const isCheck = args.includes('--check');

const HEADER = '// Auto-generated from .styles.css — do not edit directly\n';

/**
 * Derive a camelCase export name from a CSS filename.
 * e.g. "co-button.styles.css" → "cobaltButtonStyles"
 *      "co-input.styles.css" → "cobaltInputStyles"
 */
function toExportName(cssFilename) {
  const stem = cssFilename.replace('.styles.css', '');
  const camel = stem.replace(/^co-/, 'cobalt-').replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  return camel + 'Styles';
}

/**
 * Generate the .styles.ts content from CSS source.
 */
function generateTs(cssContent, exportName) {
  // Escape backticks and ${} in CSS content
  const escaped = cssContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  // Indent each CSS line by 2 spaces inside the template literal (prettier expects this)
  const indented = escaped
    .split('\n')
    .map((line) => (line.trim() === '' ? '' : '  ' + line))
    .join('\n');
  return `${HEADER}import { css } from 'lit';

export const ${exportName} = css\`
${indented}\`;
`;
}

/**
 * Recursively find all .styles.css files.
 */
function findCssFiles(dir) {
  const results = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findCssFiles(fullPath));
    } else if (entry.name.endsWith('.styles.css')) {
      results.push(fullPath);
    }
  }
  return results;
}

/**
 * Process a single CSS file → TS file.
 * Returns true if the file was written (or would need writing in check mode).
 */
function processFile(cssPath) {
  const tsPath = cssPath.replace('.styles.css', '.styles.ts');
  const exportName = toExportName(basename(cssPath));
  const cssContent = readFileSync(cssPath, 'utf-8');
  const expected = generateTs(cssContent, exportName);

  let current = '';
  try {
    current = readFileSync(tsPath, 'utf-8');
  } catch {
    // File doesn't exist yet
  }

  if (current === expected) {
    return false;
  }

  if (isCheck) {
    console.error(`Out of date: ${tsPath}`);
    return true;
  }

  writeFileSync(tsPath, expected);
  console.log(`Generated: ${tsPath}`);
  return true;
}

/**
 * Process all CSS files.
 */
function run() {
  const cssFiles = findCssFiles(srcDir);

  if (cssFiles.length === 0) {
    console.log('No .styles.css files found.');
    return true;
  }

  let outdated = false;
  for (const cssFile of cssFiles) {
    if (processFile(cssFile)) {
      outdated = true;
    }
  }

  return !outdated;
}

// Run once
const ok = run();

if (isCheck && !ok) {
  console.error('\nStyle files are out of date. Run: node scripts/generate-styles.js');
  process.exit(1);
}

if (isCheck && ok) {
  console.log('All style files are up to date.');
}

// Watch mode
if (isWatch) {
  console.log('\nWatching for .styles.css changes...');

  // Watch recursively
  fsWatch(srcDir, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.styles.css')) {
      const fullPath = join(srcDir, filename);
      try {
        processFile(fullPath);
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err.message);
      }
    }
  });
}
