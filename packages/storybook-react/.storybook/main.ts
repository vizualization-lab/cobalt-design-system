import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

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
    find: '@cobalt/react',
    replacement: resolve(repoRoot, 'packages/react/src/index.ts'),
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
    find: '@cobalt/components/checkbox-group',
    replacement: resolve(
      repoRoot,
      'packages/components/src/components/checkbox-group/co-checkbox-group.ts',
    ),
  },
  {
    find: '@cobalt/components/checkbox-indeterminate',
    replacement: resolve(
      repoRoot,
      'packages/components/src/components/checkbox-indeterminate/co-checkbox-indeterminate.ts',
    ),
  },
  {
    find: '@cobalt/components/checkbox',
    replacement: resolve(repoRoot, 'packages/components/src/components/checkbox/co-checkbox.ts'),
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
    find: '@cobalt/components/radio-group',
    replacement: resolve(
      repoRoot,
      'packages/components/src/components/radio-group/co-radio-group.ts',
    ),
  },
  {
    find: '@cobalt/components/radio',
    replacement: resolve(repoRoot, 'packages/components/src/components/radio/co-radio.ts'),
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
  stories: ['../../react/stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: false,
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
