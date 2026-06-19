export const templates = ['vanilla-ts', 'react', 'vue', 'angular'] as const;
export const cobaltSources = ['registry', 'local'] as const;
export const agentSkillTargets = ['none', 'codex', 'claude', 'both'] as const;
export const skillCommandTargets = ['codex', 'claude', 'both'] as const;

export type Template = (typeof templates)[number];
export type CobaltSource = (typeof cobaltSources)[number];
export type AgentSkillTarget = (typeof agentSkillTargets)[number];
export type SkillCommandTarget = (typeof skillCommandTargets)[number];

export const localPackagesDirectory = 'cobalt-packages';

export const localCobaltPackages = [
  '@cobalt/angular',
  '@cobalt/components',
  '@cobalt/icons',
  '@cobalt/react',
  '@cobalt/tokens',
  '@cobalt/vue',
] as const;

export const textFileExtensions = new Set([
  '.css',
  '.html',
  '.js',
  '.json',
  '.md',
  '.scss',
  '.ts',
  '.tsx',
  '.vue',
]);

export const configKeys = ['registry.url', 'registry.caBundle'] as const;
export type ConfigKey = (typeof configKeys)[number];
