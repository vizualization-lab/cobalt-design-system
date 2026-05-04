import type { CobaltComponentId, CobaltStoryArgs } from './controls.js';
import type { StorybookFrameworkId } from './component-registry.js';

export type CobaltScenarioNode =
  | string
  | {
      type: 'component' | 'element';
      componentId?: CobaltComponentId;
      tagName?: string;
      props?: Record<string, unknown>;
      slot?: string;
      className?: string;
      style?: Record<string, string>;
      children?: readonly CobaltScenarioNode[];
    };

export type CobaltFrameworkOverride = {
  imports?: readonly string[];
  args?: CobaltStoryArgs;
  source?: string;
};

export type CobaltStoryScenario = {
  id: string;
  exportName: string;
  name?: string;
  args?: CobaltStoryArgs;
  nodes?: readonly CobaltScenarioNode[];
  frameworkOverrides?: Partial<Record<StorybookFrameworkId, CobaltFrameworkOverride>>;
};

export function defineComponentScenarios<T extends readonly CobaltStoryScenario[]>(scenarios: T): T;

export const storybookScenarioDefinitions: Partial<
  Record<CobaltComponentId, readonly CobaltStoryScenario[]>
>;

export function getStorybookScenarios(
  componentId: CobaltComponentId,
): readonly CobaltStoryScenario[];

export function getStorybookScenario(
  componentId: CobaltComponentId,
  scenarioId: string,
): CobaltStoryScenario | undefined;
