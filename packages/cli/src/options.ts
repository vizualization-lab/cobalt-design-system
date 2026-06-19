import {
  agentSkillTargets,
  cobaltSources,
  skillCommandTargets,
  templates,
  type AgentSkillTarget,
  type CobaltSource,
  type SkillCommandTarget,
  type Template,
} from './constants.js';
import type {
  CobaltConfig,
  NewCommandOptions,
  PromptAdapter,
  ResolvedNewOptions,
} from './types.js';

export interface SkillCommandOptions {
  target?: string;
  yes?: boolean;
}

export async function resolveSkillTarget(
  parsed: SkillCommandOptions,
  prompts: PromptAdapter,
  options: { interactive: boolean },
): Promise<SkillCommandTarget> {
  if (parsed.target !== undefined) {
    if (!isSkillCommandTarget(parsed.target)) {
      throw new Error(
        `Unknown skill target "${parsed.target}". Choose one of: ${skillCommandTargets.join(', ')}.`,
      );
    }
    return parsed.target;
  }

  if (parsed.yes || !options.interactive) {
    return 'both';
  }

  return prompts.select('Install Cobalt skill for which harness?', skillCommandTargets, 'both');
}

function isSkillCommandTarget(value: string): value is SkillCommandTarget {
  return (skillCommandTargets as readonly string[]).includes(value);
}

export async function resolveOptions(
  parsed: NewCommandOptions,
  prompts: PromptAdapter,
  config: CobaltConfig = {},
): Promise<ResolvedNewOptions> {
  if (parsed.template !== undefined && !isTemplate(parsed.template)) {
    throw new Error(
      `Unknown template "${parsed.template}". Choose one of: ${templates.join(', ')}.`,
    );
  }

  if (parsed.cobaltSource !== undefined && !isCobaltSource(parsed.cobaltSource)) {
    throw new Error(
      `Unknown Cobalt package source "${parsed.cobaltSource}". Choose one of: ${cobaltSources.join(
        ', ',
      )}.`,
    );
  }

  if (parsed.agentSkill !== undefined && !isAgentSkillTarget(parsed.agentSkill)) {
    throw new Error(
      `Unknown agent skill target "${parsed.agentSkill}". Choose one of: ${agentSkillTargets.join(
        ', ',
      )}.`,
    );
  }

  const configRegistryUrl = config.registry?.url;
  const configCaBundle = config.registry?.caBundle;
  const hasParsedRegistryUrl = parsed.registryUrl !== undefined;
  const hasParsedCaBundle = parsed.caBundle !== undefined;
  const parsedRegistryUrl = parsed.registryUrl ?? configRegistryUrl;
  const parsedCaBundle = parsed.caBundle ?? configCaBundle;

  if (parsed.yes) {
    const cobaltSource = parsed.cobaltSource ?? 'registry';
    const configureRegistry =
      cobaltSource === 'registry'
        ? (parsed.configureRegistry ?? Boolean(parsedRegistryUrl))
        : false;

    if (configureRegistry && !parsedRegistryUrl) {
      throw new Error('Registry configuration requires --registry-url or registry.url config.');
    }

    return {
      targetDir: parsed.targetDir ?? 'cobalt-app',
      template: parsed.template ?? 'vanilla-ts',
      scss: parsed.scss ?? false,
      appShell: parsed.appShell ?? false,
      cobaltSource,
      configureRegistry,
      registryUrl: parsedRegistryUrl,
      caBundle: parsedCaBundle,
      agentSkill: parsed.agentSkill ?? 'both',
      yes: true,
    };
  }

  const targetDir = parsed.targetDir ?? (await prompts.text('Project name', 'cobalt-app'));
  const template = parsed.template ?? (await prompts.select('Template', templates, 'vanilla-ts'));
  const scss = parsed.scss ?? (await prompts.confirm('Use SCSS and Cobalt Sass helpers?', false));
  const appShell =
    parsed.appShell ?? (await prompts.confirm('Use the Cobalt app shell pattern?', false));
  const cobaltSource =
    parsed.cobaltSource ??
    (await prompts.select('Cobalt package source', cobaltSources, 'registry'));
  const agentSkill =
    parsed.agentSkill ??
    (await prompts.select('Install Cobalt AI agent skill?', agentSkillTargets, 'both'));

  const configureRegistry =
    cobaltSource === 'registry'
      ? (parsed.configureRegistry ??
        (parsedRegistryUrl
          ? true
          : await prompts.confirm('Configure npm registry for @cobalt packages now?', false)))
      : false;

  let registryUrl = parsedRegistryUrl;
  let caBundle = parsedCaBundle;
  let promptedRegistryUrl = false;
  let promptedCaBundle = false;

  if (configureRegistry) {
    if (!hasParsedRegistryUrl) {
      registryUrl = await prompts.text(
        'Cobalt npm registry URL',
        configRegistryUrl ?? 'https://registry.example.com',
      );
      promptedRegistryUrl = true;
    }

    if (!hasParsedCaBundle) {
      caBundle = await prompts.text('Path to CA bundle (optional)', configCaBundle ?? '');
      promptedCaBundle = true;
    }

    if (!registryUrl) {
      throw new Error('Registry configuration requires a registry URL.');
    }
  }

  const saveConfig =
    configureRegistry && (promptedRegistryUrl || promptedCaBundle)
      ? getRegistrySaveConfig(config, {
          registryUrl,
          caBundle,
          promptedRegistryUrl,
          promptedCaBundle,
        })
      : undefined;

  return {
    targetDir,
    template,
    scss,
    appShell,
    cobaltSource,
    configureRegistry,
    registryUrl,
    caBundle: caBundle || undefined,
    agentSkill,
    yes: false,
    saveConfig,
  };
}

function isTemplate(value: string): value is Template {
  return (templates as readonly string[]).includes(value);
}

function isCobaltSource(value: string): value is CobaltSource {
  return (cobaltSources as readonly string[]).includes(value);
}

function isAgentSkillTarget(value: string): value is AgentSkillTarget {
  return (agentSkillTargets as readonly string[]).includes(value);
}

function getRegistrySaveConfig(
  config: CobaltConfig,
  {
    registryUrl,
    caBundle,
    promptedRegistryUrl,
    promptedCaBundle,
  }: {
    registryUrl?: string;
    caBundle?: string;
    promptedRegistryUrl: boolean;
    promptedCaBundle: boolean;
  },
): CobaltConfig | undefined {
  const normalizedCaBundle = caBundle || undefined;
  const registryChanged = promptedRegistryUrl && registryUrl !== config.registry?.url;
  const caBundleChanged = promptedCaBundle && normalizedCaBundle !== config.registry?.caBundle;

  if (!registryChanged && !caBundleChanged) {
    return undefined;
  }

  const next = structuredClone(config ?? {});
  next.registry = { ...(next.registry ?? {}) };

  if (registryUrl) {
    next.registry.url = registryUrl;
  }

  if (normalizedCaBundle) {
    next.registry.caBundle = normalizedCaBundle;
  } else {
    delete next.registry.caBundle;
  }

  return next;
}
