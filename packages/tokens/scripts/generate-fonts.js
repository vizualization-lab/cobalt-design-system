import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
import { basename, dirname, join } from 'path';

const require = createRequire(import.meta.url);

const fontPackages = [
  '@fontsource-variable/inter',
  '@fontsource-variable/noto-sans',
  '@fontsource-variable/jetbrains-mono',
];

const fontUrlPattern = /url\((['"]?)\.\/files\/([^)'"]+)\1\)/g;

export function generateFontStyles(packageDir) {
  const cssOutputDir = join(packageDir, 'dist', 'css');
  const scssOutputDir = join(packageDir, 'dist', 'scss', 'css');
  const cssFontFilesDir = join(cssOutputDir, 'files');
  const scssFontFilesDir = join(scssOutputDir, 'files');

  mkdirSync(cssFontFilesDir, { recursive: true });
  mkdirSync(scssFontFilesDir, { recursive: true });

  const fontCss = fontPackages
    .map((fontPackage) =>
      readFontCss(fontPackage).replace(fontUrlPattern, (_match, _quote, fileName) => {
        // Keep the published token package self-contained: generated apps should
        // be able to import @cobalt/tokens/css/fonts.css without also installing
        // Fontsource packages as direct dependencies.
        copyFontFile(fontPackage, fileName, cssFontFilesDir);
        copyFontFile(fontPackage, fileName, scssFontFilesDir);

        // Fontsource CSS points at its own package-local files directory. Rewrite
        // those URLs to the files we copy beside the generated CSS and SCSS entrypoints.
        return `url(./files/${basename(fileName)})`;
      }),
    )
    .join('\n');

  // Fonts are base assets, so they are wrapped in the same cascade layer that
  // consumers use for Cobalt's default element and typography styles.
  const output = `@layer co.base {\n${fontCss}}\n`;

  writeFileSync(join(cssOutputDir, 'fonts.css'), output);
  writeFileSync(join(scssOutputDir, 'fonts.scss'), output);
}

function readFontCss(fontPackage) {
  return readFileSync(require.resolve(`${fontPackage}/index.css`), 'utf-8');
}

function copyFontFile(fontPackage, fileName, outputDir) {
  const packageRoot = dirname(require.resolve(`${fontPackage}/package.json`));
  copyFileSync(join(packageRoot, 'files', fileName), join(outputDir, basename(fileName)));
}
