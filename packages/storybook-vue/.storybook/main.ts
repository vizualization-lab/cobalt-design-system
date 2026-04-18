import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/vue3-vite';

const configDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(configDir, '../../..');

const aliases = [
  {
    find: '@cobalt/storybook-fixtures/styles.css',
    replacement: resolve(repoRoot, 'packages/storybook-fixtures/src/styles.css'),
  },
  {
    find: '@cobalt/storybook-fixtures',
    replacement: resolve(repoRoot, 'packages/storybook-fixtures/src/index.ts'),
  },
  {
    find: '@cobalt/vue',
    replacement: resolve(repoRoot, 'packages/vue/src/index.ts'),
  },
  {
    find: '@cobalt/components/button-icon',
    replacement: resolve(
      repoRoot,
      'packages/components/src/components/button-icon/co-button-icon.ts',
    ),
  },
  {
    find: '@cobalt/components/button',
    replacement: resolve(repoRoot, 'packages/components/src/components/button/co-button.ts'),
  },
  {
    find: '@cobalt/components/combobox',
    replacement: resolve(repoRoot, 'packages/components/src/components/combobox/co-combobox.ts'),
  },
  {
    find: '@cobalt/components/form',
    replacement: resolve(repoRoot, 'packages/components/src/components/form/co-form.ts'),
  },
  {
    find: '@cobalt/components/icon',
    replacement: resolve(repoRoot, 'packages/components/src/components/icon/co-icon.ts'),
  },
  {
    find: '@cobalt/components/input',
    replacement: resolve(repoRoot, 'packages/components/src/components/input/co-input.ts'),
  },
  {
    find: '@cobalt/components/listbox',
    replacement: resolve(repoRoot, 'packages/components/src/components/listbox/co-listbox.ts'),
  },
  {
    find: '@cobalt/components/option',
    replacement: resolve(repoRoot, 'packages/components/src/components/option/co-option.ts'),
  },
  {
    find: '@cobalt/components/select',
    replacement: resolve(repoRoot, 'packages/components/src/components/select/co-select.ts'),
  },
  {
    find: '@cobalt/components/textarea',
    replacement: resolve(repoRoot, 'packages/components/src/components/textarea/co-textarea.ts'),
  },
  {
    find: '@cobalt/components',
    replacement: resolve(repoRoot, 'packages/components/src/index.ts'),
  },
];

const config: StorybookConfig = {
  stories: ['../../vue/stories/**/*.stories.ts'],
  addons: ['@storybook/addon-a11y'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal(baseConfig) {
    return mergeConfig(baseConfig, {
      resolve: {
        alias: aliases,
      },
    });
  },
};

export default config;
