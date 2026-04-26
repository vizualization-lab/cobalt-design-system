import { defineConfig, type Plugin } from 'vite';
import { resolve } from 'path';
import { execSync } from 'child_process';
import { readdirSync } from 'fs';

const root = resolve(__dirname);
const repoRoot = resolve(__dirname, '../..');
const componentsDir = resolve(repoRoot, 'packages/components');
const tokensDir = resolve(repoRoot, 'packages/tokens');

/** HTML entry points for the Vite multi-page app. */
const inputs: Record<string, string> = {
  main: resolve(root, 'index.html'),
  preview: resolve(root, 'preview.html'),
  appShell: resolve(root, 'app-shell.html'),
};

/**
 * Watches component .styles.css files and regenerates .styles.ts via
 * the existing generate-styles script.
 */
function cobaltStylesPlugin(): Plugin {
  return {
    name: 'cobalt-styles-watch',
    configureServer(server) {
      // Add each .styles.css file explicitly — glob strings passed to
      // chokidar's add() are unreliable for paths outside the Vite root.
      const srcDir = resolve(componentsDir, 'src/components');
      const cssFiles: string[] = [];
      for (const dir of readdirSync(srcDir, { withFileTypes: true })) {
        if (!dir.isDirectory()) continue;
        for (const file of readdirSync(resolve(srcDir, dir.name))) {
          if (file.endsWith('.styles.css')) {
            cssFiles.push(resolve(srcDir, dir.name, file));
          }
        }
      }
      server.watcher.add(cssFiles);

      server.watcher.on('change', (file) => {
        if (!file.endsWith('.styles.css') || !file.includes(componentsDir)) return;

        console.log('\n[workbench] styles.css changed, regenerating styles.ts...');
        try {
          execSync('node scripts/generate-styles.js', {
            cwd: componentsDir,
            stdio: 'pipe',
          });
          console.log('[workbench] styles regenerated.');

          // The .styles.ts file was rewritten — invalidate it in Vite's
          // module graph so the next HMR update picks up the new content.
          const tsFile = file.replace('.styles.css', '.styles.ts');
          const mod = server.moduleGraph.getModulesByFile(tsFile);
          if (mod) {
            mod.forEach((m) => server.moduleGraph.invalidateModule(m));
          }
          server.ws.send({ type: 'full-reload' });
        } catch (err: any) {
          console.error('[workbench] style generation failed:', err.stderr?.toString());
        }
      });
    },
  };
}

/**
 * Watches token source JSON files and rebuilds the token pipeline
 * when changes are detected.
 */
function cobaltTokensPlugin(): Plugin {
  return {
    name: 'cobalt-tokens-watch',
    configureServer(server) {
      const tokenSources = resolve(tokensDir, 'tokens');
      const tokenSrc = resolve(tokensDir, 'src');
      server.watcher.add([resolve(tokenSources, '**/*.json'), resolve(tokenSrc, '**/*.css')]);

      server.watcher.on('change', (file) => {
        const isTokenSource = file.includes(tokenSources) && file.endsWith('.json');
        const isTokenCss = file.includes(tokenSrc) && file.endsWith('.css');

        if (isTokenSource || isTokenCss) {
          console.log('\n[workbench] token source changed, rebuilding tokens...');
          try {
            execSync('node config.js', {
              cwd: tokensDir,
              stdio: 'pipe',
            });
            console.log('[workbench] tokens rebuilt.');

            // Trigger full CSS reload
            server.ws.send({ type: 'full-reload' });
          } catch (err: any) {
            console.error('[workbench] token build failed:', err.stderr?.toString());
          }
        }
      });
    },
  };
}

export default defineConfig({
  root,
  resolve: {
    // Array form ensures exact matching — order matters: specific paths
    // before the catch-all so '@cobalt/components/button' doesn't get
    // swallowed by the '@cobalt/components' prefix.
    alias: [
      {
        find: '@cobalt/components/card',
        replacement: resolve(componentsDir, 'src/components/card/co-card.ts'),
      },
      {
        find: '@cobalt/components/banner',
        replacement: resolve(componentsDir, 'src/components/banner/co-banner.ts'),
      },
      {
        find: '@cobalt/components/nav-header-bar',
        replacement: resolve(componentsDir, 'src/components/nav-header-bar/co-nav-header-bar.ts'),
      },
      {
        find: '@cobalt/components/app-shell',
        replacement: resolve(componentsDir, 'src/components/app-shell/co-app-shell.ts'),
      },
      {
        find: '@cobalt/components/nav-drawer-item',
        replacement: resolve(componentsDir, 'src/components/nav-drawer-item/co-nav-drawer-item.ts'),
      },
      {
        find: '@cobalt/components/nav-drawer',
        replacement: resolve(componentsDir, 'src/components/nav-drawer/co-nav-drawer.ts'),
      },
      {
        find: '@cobalt/components/nav-separator',
        replacement: resolve(componentsDir, 'src/components/nav-separator/co-nav-separator.ts'),
      },
      {
        find: '@cobalt/components/input-pill',
        replacement: resolve(componentsDir, 'src/components/input-pill/co-input-pill.ts'),
      },
      {
        find: '@cobalt/components/input',
        replacement: resolve(componentsDir, 'src/components/input/co-input.ts'),
      },
      {
        find: '@cobalt/components/button',
        replacement: resolve(componentsDir, 'src/components/button/co-button.ts'),
      },
      {
        find: '@cobalt/components/nav-rail-item',
        replacement: resolve(componentsDir, 'src/components/nav-rail-item/co-nav-rail-item.ts'),
      },
      {
        find: '@cobalt/components/button-icon',
        replacement: resolve(componentsDir, 'src/components/button-icon/co-button-icon.ts'),
      },
      {
        find: '@cobalt/components/checkbox-indeterminate',
        replacement: resolve(
          componentsDir,
          'src/components/checkbox-indeterminate/co-checkbox-indeterminate.ts',
        ),
      },
      {
        find: '@cobalt/components/checkbox-group',
        replacement: resolve(componentsDir, 'src/components/checkbox-group/co-checkbox-group.ts'),
      },
      {
        find: '@cobalt/components/checkbox',
        replacement: resolve(componentsDir, 'src/components/checkbox/co-checkbox.ts'),
      },
      {
        find: '@cobalt/components/combobox',
        replacement: resolve(componentsDir, 'src/components/combobox/co-combobox.ts'),
      },
      {
        find: '@cobalt/components/form',
        replacement: resolve(componentsDir, 'src/components/form/co-form.ts'),
      },
      {
        find: '@cobalt/components/icon',
        replacement: resolve(componentsDir, 'src/components/icon/co-icon.ts'),
      },
      {
        find: '@cobalt/components/listbox',
        replacement: resolve(componentsDir, 'src/components/listbox/co-listbox.ts'),
      },
      {
        find: '@cobalt/components/radio-group',
        replacement: resolve(componentsDir, 'src/components/radio-group/co-radio-group.ts'),
      },
      {
        find: '@cobalt/components/nav-rail-bar',
        replacement: resolve(componentsDir, 'src/components/nav-rail-bar/co-nav-rail-bar.ts'),
      },
      {
        find: '@cobalt/components/radio',
        replacement: resolve(componentsDir, 'src/components/radio/co-radio.ts'),
      },
      {
        find: '@cobalt/components/select',
        replacement: resolve(componentsDir, 'src/components/select/co-select.ts'),
      },
      {
        find: '@cobalt/components/textarea',
        replacement: resolve(componentsDir, 'src/components/textarea/co-textarea.ts'),
      },
      {
        find: '@cobalt/components/option',
        replacement: resolve(componentsDir, 'src/components/option/co-option.ts'),
      },
      {
        find: '@cobalt/components',
        replacement: resolve(componentsDir, 'src/index.ts'),
      },
    ],
  },
  build: {
    rollupOptions: {
      input: inputs,
    },
  },
  plugins: [cobaltStylesPlugin(), cobaltTokensPlugin()],
});
