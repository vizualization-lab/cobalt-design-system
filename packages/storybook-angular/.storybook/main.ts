import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/angular';

const configDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(configDir, '../../..');

const aliases = {
  '@cobalt/storybook-fixtures/styles.css': resolve(
    repoRoot,
    'packages/storybook-fixtures/src/styles.css',
  ),
  '@cobalt/storybook-fixtures': resolve(repoRoot, 'packages/storybook-fixtures/src/index.ts'),
  '@cobalt/angular': resolve(repoRoot, 'packages/angular/src/index.ts'),
  '@cobalt/components/button-icon': resolve(
    repoRoot,
    'packages/components/src/components/button-icon/co-button-icon.ts',
  ),
  '@cobalt/components/button': resolve(
    repoRoot,
    'packages/components/src/components/button/co-button.ts',
  ),
  '@cobalt/components/checkbox-group': resolve(
    repoRoot,
    'packages/components/src/components/checkbox-group/co-checkbox-group.ts',
  ),
  '@cobalt/components/checkbox-indeterminate': resolve(
    repoRoot,
    'packages/components/src/components/checkbox-indeterminate/co-checkbox-indeterminate.ts',
  ),
  '@cobalt/components/checkbox': resolve(
    repoRoot,
    'packages/components/src/components/checkbox/co-checkbox.ts',
  ),
  '@cobalt/components/combobox': resolve(
    repoRoot,
    'packages/components/src/components/combobox/co-combobox.ts',
  ),
  '@cobalt/components/form': resolve(
    repoRoot,
    'packages/components/src/components/form/co-form.ts',
  ),
  '@cobalt/components/icon': resolve(
    repoRoot,
    'packages/components/src/components/icon/co-icon.ts',
  ),
  '@cobalt/components/input': resolve(
    repoRoot,
    'packages/components/src/components/input/co-input.ts',
  ),
  '@cobalt/components/listbox': resolve(
    repoRoot,
    'packages/components/src/components/listbox/co-listbox.ts',
  ),
  '@cobalt/components/option': resolve(
    repoRoot,
    'packages/components/src/components/option/co-option.ts',
  ),
  '@cobalt/components/radio-group': resolve(
    repoRoot,
    'packages/components/src/components/radio-group/co-radio-group.ts',
  ),
  '@cobalt/components/radio': resolve(
    repoRoot,
    'packages/components/src/components/radio/co-radio.ts',
  ),
  '@cobalt/components/select': resolve(
    repoRoot,
    'packages/components/src/components/select/co-select.ts',
  ),
  '@cobalt/components/textarea': resolve(
    repoRoot,
    'packages/components/src/components/textarea/co-textarea.ts',
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
