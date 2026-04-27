import type { Preview } from '@storybook/vue3-vite';
import '@cobalt/tokens/css';
import '@cobalt/tokens/css/fonts';
import '@cobalt/tokens/css/base';
import '@cobalt/tokens/css/dark';
import {
  getVueWrapperStorySource,
  type WrapperStoryArgs,
  type WrapperStoryComponentId,
} from '@cobalt/storybook-fixtures';
import '@cobalt/storybook-fixtures/styles.css';

const storybookTargetLabel = 'Vue';
type CobaltSourceContext = {
  parameters: {
    cobaltSource?: {
      componentId?: WrapperStoryComponentId;
    };
  };
  args: WrapperStoryArgs;
};

const applyPreviewGlobals = (theme: string) => {
  document.documentElement.setAttribute('data-co-base', '');
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
  document.documentElement.setAttribute('data-storybook-target-label', storybookTargetLabel);
  document.body.setAttribute('data-storybook-target-label', storybookTargetLabel);
};

const preview: Preview = {
  globalTypes: {
    storybookTarget: {
      description: 'Storybook instance',
      toolbar: {
        title: 'Storybook',
        icon: 'component',
        items: [{ value: 'vue', title: storybookTargetLabel }],
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Cobalt theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    storybookTarget: 'vue',
    theme: 'light',
  },
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    a11y: {
      context: 'body',
    },
    controls: {
      expanded: true,
    },
    docs: {
      codePanel: true,
      source: {
        language: 'html',
        transform: (source: string, context: CobaltSourceContext) => {
          const componentId = context.parameters.cobaltSource?.componentId;

          if (!componentId) {
            return source;
          }

          return getVueWrapperStorySource(componentId, context.args);
        },
      },
    },
    options: {
      storySort: {
        method: 'configure',
        includeNames: true,
        order: ['Components', ['*', ['Overview', 'Playground', '*']]],
      },
    },
  },
  decorators: [
    (Story, context) => {
      applyPreviewGlobals(context.globals.theme ?? 'light');
      return Story();
    },
  ],
};

export default preview;
