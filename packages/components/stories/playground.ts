import {
  createWebComponentPlayground,
  getPlaygroundArgs,
  getPlaygroundArgTypes,
  type CobaltComponentId,
  type CobaltStoryArgs,
} from '@cobalt/storybook-fixtures';

export function createWebPlaygroundStory(componentId: CobaltComponentId) {
  return {
    args: getPlaygroundArgs(componentId),
    argTypes: getPlaygroundArgTypes(componentId),
    render: (args: CobaltStoryArgs) => createWebComponentPlayground(componentId, args),
  };
}

export function createWebStarterOverviewStory(componentId: CobaltComponentId) {
  return {
    args: getPlaygroundArgs(componentId),
    parameters: {
      controls: { disable: true },
    },
    render: (args: CobaltStoryArgs) => createWebComponentPlayground(componentId, args),
  };
}
