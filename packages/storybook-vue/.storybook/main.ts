import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/vue3-vite';
import { storybookComponentDefinitions } from '../../storybook-fixtures/src/component-registry.js';

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
  ...storybookComponentDefinitions.map((definition) => ({
    find: `@cobalt/components/${definition.componentPath}`,
    replacement: resolve(repoRoot, definition.componentSource),
  })),
  {
    find: '@cobalt/components',
    replacement: resolve(repoRoot, 'packages/components/src/index.ts'),
  },
];

const config: StorybookConfig = {
  stories: ['../../vue/stories/**/*.stories.ts'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
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
