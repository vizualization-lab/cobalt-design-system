import {
  createWebComponentPlayground,
  getPlaygroundArgs,
  getPlaygroundArgTypes,
  getScenarioArgs,
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

export function createWebScenarioStory(componentId: CobaltComponentId, scenarioId: string) {
  return {
    args: getScenarioArgs(componentId, scenarioId),
    parameters: {
      controls: { disable: true },
    },
    render: (args: CobaltStoryArgs) => createWebComponentPlayground(componentId, args),
  };
}
