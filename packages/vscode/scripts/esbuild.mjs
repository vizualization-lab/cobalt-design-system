import * as esbuild from 'esbuild';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

await esbuild.build({
  bundle: true,
  entryPoints: ['src/extension.ts'],
  external: ['vscode'],
  format: 'cjs',
  loader: {
    '.html': 'text',
  },
  outfile: 'dist/extension.js',
  platform: 'node',
  plugins: [
    {
      name: 'webview-script-text',
      setup(build) {
        // "?raw" marks the webview renderer as browser script text, not extension-host code.
        // esbuild then embeds it into dist/extension.js for nonce-based injection.
        build.onResolve({ filter: /webview-script\.js\?raw$/ }, (args) => ({
          path: fileURLToPath(
            new URL(args.path.replace(/\?raw$/, ''), `file://${args.resolveDir}/`),
          ),
          namespace: 'webview-script-text',
        }));
        build.onLoad({ filter: /.*/, namespace: 'webview-script-text' }, async (args) => ({
          contents: await readFile(args.path, 'utf8'),
          loader: 'text',
        }));
      },
    },
  ],
  sourcemap: true,
  target: 'node20',
});
