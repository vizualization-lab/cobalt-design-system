import type { CobaltControlType } from './api-metadata.js';

export type StorybookManagedMode = 'generated' | 'manual';
export type StorybookOverviewPreset = 'starter';
export type StorybookFrameworkId = 'web-components' | 'react' | 'vue' | 'angular';

export type StorybookComponentDefinition = {
  id: string;
  title: string;
  tagName: string;
  className: string;
  importName: string;
  componentPath: string;
  componentSource: string;
  angularSource: string;
  webComponentImports: readonly string[];
  storybook: {
    management: StorybookManagedMode;
    overviewPreset: StorybookOverviewPreset;
  };
};

export type StorybookPropOverride = {
  control?: CobaltControlType;
  options?: readonly string[];
};

export type StorybookSlotControl = {
  name: string;
  argName: string;
  label: string;
  defaultValue?: string;
  description?: string;
};

export const commonIconOptions: readonly string[];
export const storybookComponentDefinitions: readonly StorybookComponentDefinition[];
export const storybookManagedComponentDefinitions: readonly StorybookComponentDefinition[];
export const storybookPropOverrides: Partial<Record<string, Record<string, StorybookPropOverride>>>;
export const storybookSlotControls: Partial<Record<string, readonly StorybookSlotControl[]>>;
export const storybookPlaygroundDefaults: Partial<Record<string, Record<string, unknown>>>;
export function getStorybookComponentDefinition(
  componentId: string,
): StorybookComponentDefinition | undefined;
