import { copyFileSync, existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
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

await writeIconsManifest({
  source: resolve(repoRoot, 'packages/icons/dist/manifest.js'),
  target: resolve(metadataDir, 'cobalt-icons.manifest.json'),
});

writeThemesManifest({
  cssDir: resolve(repoRoot, 'packages/tokens/dist/css/themes'),
  scssDir: resolve(repoRoot, 'packages/tokens/dist/scss/themes'),
  target: resolve(metadataDir, 'cobalt-themes.manifest.json'),
});

function writeThemesManifest({ cssDir, scssDir, target }) {
  if (!existsSync(cssDir)) {
    console.warn(
      `[copy-metadata] @cobalt/tokens themes dir not found at ${cssDir}; skipping bundled themes manifest. ` +
        'Build @cobalt/tokens before @cobalt/cli to ship the bundled theme catalog.',
    );
    return;
  }

  // The exports map for `@cobalt/tokens/themes/*` points at `dist/css/themes/*.css`.
  // The directory also contains per-mode internals named `tokens-<theme>-<mode>.css`;
  // only the consumer-facing aggregate entries (no `tokens-` prefix) are real themes.
  const names = readdirSync(cssDir)
    .filter((file) => file.endsWith('.css') && !file.startsWith('tokens-'))
    .map((file) => file.replace(/\.css$/, ''))
    .sort();

  const hasScss = existsSync(scssDir);
  const scssNames = hasScss
    ? new Set(
        readdirSync(scssDir)
          .filter((file) => file.endsWith('.scss') && !file.startsWith('tokens-'))
          .map((file) => file.replace(/\.scss$/, '')),
      )
    : new Set();

  const payload = {
    schemaVersion: 1,
    themes: names.map((name) => ({
      name,
      cssImportPath: `@cobalt/tokens/themes/${name}`,
      scssImportPath: scssNames.has(name) ? `@cobalt/tokens/scss/themes/${name}` : undefined,
      modes: ['light', 'dark'],
    })),
  };

  writeFileSync(target, `${JSON.stringify(payload, null, 2)}\n`);
}

async function writeIconsManifest({ source, target }) {
  if (!existsSync(source)) {
    console.warn(
      `[copy-metadata] @cobalt/icons manifest not found at ${source}; skipping bundled icon manifest. ` +
        'Build @cobalt/icons before @cobalt/cli to ship the bundled icon catalog.',
    );
    return;
  }

  const manifest = await import(pathToFileURL(source).href);
  const payload = {
    schemaVersion: 1,
    iconNames: [...manifest.iconNames].sort(),
    coreIconNames: [...manifest.coreIconNames].sort(),
    customIconNames: [...manifest.customIconNames].sort(),
    overrideIconNames: [...manifest.overrideIconNames].sort(),
    animatedIconNames: [...manifest.animatedIconNames].sort(),
  };

  writeFileSync(target, `${JSON.stringify(payload, null, 2)}\n`);
}
