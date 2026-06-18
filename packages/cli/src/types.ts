import type { AgentSkillTarget, CobaltSource, Template } from './constants.js';

export interface CobaltConfig {
  registry?: {
    url?: string;
    caBundle?: string;
  };
}

export interface NewCommandOptions {
  targetDir?: string;
  template?: string;
  scss?: boolean;
  appShell?: boolean;
  cobaltSource?: string;
  configureRegistry?: boolean;
  registryUrl?: string;
  caBundle?: string;
  agentSkill?: string;
  yes?: boolean;
}

export interface ResolvedNewOptions {
  targetDir: string;
  template: Template;
  scss: boolean;
  appShell: boolean;
  cobaltSource: CobaltSource;
  configureRegistry: boolean;
  registryUrl?: string;
  caBundle?: string;
  agentSkill: AgentSkillTarget;
  yes: boolean;
  saveConfig?: CobaltConfig;
}

export interface PromptAdapter {
  text(label: string, defaultValue: string): Promise<string>;
  select<T extends string>(label: string, choices: readonly T[], defaultValue: T): Promise<T>;
  confirm(label: string, defaultValue: boolean): Promise<boolean>;
}
