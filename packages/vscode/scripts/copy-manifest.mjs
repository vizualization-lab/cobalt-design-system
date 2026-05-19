import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageDir = resolve(__dirname, '..');
const manifestSource = resolve(
  packageDir,
  '..',
  'tokens',
  'dist',
  'tooling',
  'cobalt.manifest.json',
);
const manifestTarget = resolve(packageDir, 'dist', 'cobalt.manifest.json');

if (!existsSync(manifestSource)) {
  throw new Error(
    `Missing token tooling manifest at ${manifestSource}. Run pnpm --filter @cobalt/tokens build first.`,
  );
}

mkdirSync(dirname(manifestTarget), { recursive: true });
copyFileSync(manifestSource, manifestTarget);
