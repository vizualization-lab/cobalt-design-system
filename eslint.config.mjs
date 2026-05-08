import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import litPlugin from 'eslint-plugin-lit';
import wcPlugin from 'eslint-plugin-wc';

const browserAndTestGlobals = Object.fromEntries(
  [
    'AbortController',
    'CSSStyleSheet',
    'CustomEvent',
    'Element',
    'Event',
    'FocusEvent',
    'FormData',
    'HTMLElement',
    'HTMLAnchorElement',
    'HTMLButtonElement',
    'HTMLDivElement',
    'HTMLFormElement',
    'HTMLInputElement',
    'HTMLLabelElement',
    'HTMLLIElement',
    'HTMLSelectElement',
    'HTMLSlotElement',
    'HTMLSpanElement',
    'HTMLTextAreaElement',
    'HTMLUListElement',
    'KeyboardEvent',
    'MouseEvent',
    'MutationObserver',
    'Node',
    'ShadowRoot',
    'SubmitEvent',
    'beforeEach',
    'afterEach',
    'console',
    'customElements',
    'describe',
    'document',
    'it',
    'requestAnimationFrame',
    'setTimeout',
    'window',
  ].map((name) => [name, 'readonly']),
);

export default [
  {
    ignores: ['dist/**', 'local-packs/**', 'node_modules/**', 'packages/*/dist/**'],
    linterOptions: {
      reportUnusedDisableDirectives: false,
    },
  },
  {
    files: ['packages/*/src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: browserAndTestGlobals,
    },
    plugins: {
      '@angular-eslint': {
        rules: {
          'directive-selector': {
            meta: { type: 'suggestion', schema: [] },
            create: () => ({}),
          },
        },
      },
      '@typescript-eslint': tsPlugin,
      lit: litPlugin,
      wc: wcPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...litPlugin.configs.recommended.rules,
      ...wcPlugin.configs.recommended.rules,
      '@angular-eslint/directive-selector': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'wc/guard-super-call': 'off',
    },
  },
];
