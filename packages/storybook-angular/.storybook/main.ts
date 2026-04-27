import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/angular';
import { storybookComponentDefinitions } from '../../storybook-fixtures/src/component-registry.js';

const configDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(configDir, '../../..');

const aliases = {
  '@cobalt/storybook-fixtures/styles.css': resolve(
    repoRoot,
    'packages/storybook-fixtures/src/styles.css',
  ),
  '@cobalt/storybook-fixtures': resolve(repoRoot, 'packages/storybook-fixtures/src/index.ts'),
  '@cobalt/angular': resolve(repoRoot, 'packages/angular/src/index.ts'),
  ...Object.fromEntries(
    storybookComponentDefinitions.map((definition) => [
      `@cobalt/components/${definition.componentPath}`,
      resolve(repoRoot, definition.componentSource),
    ]),
  ),
  '@cobalt/components': resolve(repoRoot, 'packages/components/src/index.ts'),
};

const config: StorybookConfig = {
  stories: ['../../angular/stories/**/*.stories.ts'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal(baseConfig) {
    baseConfig.resolve = baseConfig.resolve ?? {};
    baseConfig.resolve.alias = {
      ...(baseConfig.resolve.alias ?? {}),
      ...aliases,
    };
    baseConfig.resolve.extensionAlias = {
      ...(baseConfig.resolve.extensionAlias ?? {}),
      '.js': ['.ts', '.js'],
    };
    return baseConfig;
  },
};

export default config;
