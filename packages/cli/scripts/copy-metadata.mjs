import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeComponentGuidance } from './generate-component-guidance.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageRoot = resolve(__dirname, '..');
const repoRoot = resolve(packageRoot, '../..');
const metadataDir = resolve(packageRoot, 'dist', 'metadata');

const files = [
  {
    source: resolve(repoRoot, 'packages/components/custom-elements.json'),
    target: resolve(metadataDir, 'custom-elements.json'),
  },
  {
    source: resolve(repoRoot, 'packages/tokens/dist/tooling/cobalt.manifest.json'),
    target: resolve(metadataDir, 'cobalt.manifest.json'),
  },
];

mkdirSync(metadataDir, { recursive: true });

for (const file of files) {
  if (!existsSync(file.source)) {
    throw new Error(`Missing Cobalt metadata source: ${file.source}`);
  }
  copyFileSync(file.source, file.target);
}

writeComponentGuidance({
  docsDir: resolve(repoRoot, 'packages/docs/components'),
  target: resolve(metadataDir, 'component-guidance.json'),
});
