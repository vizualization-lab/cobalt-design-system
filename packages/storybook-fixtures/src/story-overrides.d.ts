import type { StorybookFrameworkId } from './component-registry.js';

export type StorybookOverviewOverride = {
  imports?: readonly string[];
  overview: string;
};

export type StorybookOverviewOverrides = Partial<
  Record<string, Partial<Record<StorybookFrameworkId, StorybookOverviewOverride>>>
>;

export const storybookOverviewOverrides: StorybookOverviewOverrides;
