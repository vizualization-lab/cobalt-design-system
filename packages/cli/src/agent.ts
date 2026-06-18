import { createResult, type CommandResult, type DiagnosticRecord } from './diagnostics.js';
import { runDoctor } from './doctor.js';
import { inspectProject, type ProjectInspection } from './project-inspect.js';
import {
  findComponent,
  normalizeTokenName,
  resolveAgentMetadata,
  resolveMetadataSourceOption,
  summarizeTokenMetadata,
  type AgentComponent,
  type CobaltToken,
  type CobaltUtility,
} from './agent-metadata.js';

export interface AgentOptions {
  metadataSource?: string;
}

export interface AgentListOptions {
  query?: string;
  limit?: string;
  all?: boolean;
}

export interface AgentTokenListOptions extends AgentListOptions {
  tier?: string;
  category?: string;
  theme?: string;
  mode?: string;
}

export interface AgentContextData {
  project: ProjectInspection;
  doctor: {
    summary: CommandResult<ProjectInspection>['summary'];
    diagnostics: DiagnosticRecord[];
  };
  metadata: {
    source: string;
    componentManifestPath?: string;
    tokenManifestPath?: string;
    components: {
      count: number;
    };
    tokens: ReturnType<typeof summarizeTokenMetadata>;
    utilities: {
      count: number;
    };
  };
}

export interface AgentComponentsData {
  metadataSource: string;
  components: AgentComponent[];
}

export interface AgentComponentData {
  metadataSource: string;
  component?: AgentComponent;
}

export interface AgentTokensData {
  metadataSource: string;
  total: number;
  returned: number;
  tokens: CobaltToken[];
}

export interface AgentTokenData {
  metadataSource: string;
  token?: CobaltToken;
}

export interface AgentUtilitiesData {
  metadataSource: string;
  total: number;
  returned: number;
  utilities: CobaltUtility[];
}

export async function runAgentContext({
  root,
  packageRoot,
  options,
}: {
  root: string;
  packageRoot: string;
  options: AgentOptions;
}): Promise<CommandResult<AgentContextData>> {
  const metadataSource = resolveMetadataSourceOption(options.metadataSource);
  const [inspection, doctor, metadata] = await Promise.all([
    inspectProject(root),
    runDoctor(root),
    resolveAgentMetadata({ cwd: root, packageRoot, metadataSource }),
  ]);

  return createResult({
    command: 'agent context',
    cwd: inspection.root,
    diagnostics: metadata.diagnostics,
    data: {
      project: inspection,
      doctor: {
        summary: doctor.summary,
        diagnostics: doctor.diagnostics,
      },
      metadata: {
        source: metadata.source,
        componentManifestPath: metadata.componentManifestPath,
        tokenManifestPath: metadata.tokenManifestPath,
        components: {
          count: metadata.components.length,
        },
        tokens: summarizeTokenMetadata(metadata.tokens),
        utilities: {
          count: metadata.utilities.length,
        },
      },
    },
  });
}

export async function runAgentComponents({
  root,
  packageRoot,
  options,
}: {
  root: string;
  packageRoot: string;
  options: AgentOptions;
}): Promise<CommandResult<AgentComponentsData>> {
  const metadataSource = resolveMetadataSourceOption(options.metadataSource);
  const metadata = await resolveAgentMetadata({ cwd: root, packageRoot, metadataSource });

  return createResult({
    command: 'agent components',
    cwd: root,
    diagnostics: metadata.diagnostics,
    data: {
      metadataSource: metadata.source,
      components: metadata.components,
    },
  });
}

export async function runAgentComponent({
  root,
  packageRoot,
  name,
  options,
}: {
  root: string;
  packageRoot: string;
  name: string;
  options: AgentOptions;
}): Promise<CommandResult<AgentComponentData>> {
  const metadataSource = resolveMetadataSourceOption(options.metadataSource);
  const metadata = await resolveAgentMetadata({ cwd: root, packageRoot, metadataSource });
  const component = findComponent(metadata.components, name);

  return createResult({
    command: 'agent component',
    cwd: root,
    diagnostics: [
      ...metadata.diagnostics,
      component
        ? pass('cobalt.agent.component.found', `Found ${component.tagName}.`, component.docsPath)
        : fail(
            'cobalt.agent.component.unknown',
            `Unknown Cobalt component "${name}".`,
            undefined,
            'Run co agent components --json to list available components.',
          ),
    ],
    data: {
      metadataSource: metadata.source,
      component,
    },
  });
}

export async function runAgentTokens({
  root,
  packageRoot,
  options,
  listOptions,
}: {
  root: string;
  packageRoot: string;
  options: AgentOptions;
  listOptions: AgentTokenListOptions;
}): Promise<CommandResult<AgentTokensData>> {
  const metadataSource = resolveMetadataSourceOption(options.metadataSource);
  const metadata = await resolveAgentMetadata({ cwd: root, packageRoot, metadataSource });
  const tokens = filterTokens(metadata.tokens, listOptions).map((token) =>
    filterTokenThemeModes(token, listOptions),
  );
  const limited = limitItems(tokens, listOptions);

  return createResult({
    command: 'agent tokens',
    cwd: root,
    diagnostics: metadata.diagnostics,
    data: {
      metadataSource: metadata.source,
      total: tokens.length,
      returned: limited.length,
      tokens: limited,
    },
  });
}

export async function runAgentToken({
  root,
  packageRoot,
  name,
  options,
}: {
  root: string;
  packageRoot: string;
  name: string;
  options: AgentOptions;
}): Promise<CommandResult<AgentTokenData>> {
  const metadataSource = resolveMetadataSourceOption(options.metadataSource);
  const metadata = await resolveAgentMetadata({ cwd: root, packageRoot, metadataSource });
  const normalizedName = normalizeTokenName(name);
  const token = metadata.tokens.find((entry) => entry.name === normalizedName);

  return createResult({
    command: 'agent token',
    cwd: root,
    diagnostics: [
      ...metadata.diagnostics,
      token
        ? pass('cobalt.agent.token.found', `Found ${token.name}.`, token.category)
        : fail(
            'cobalt.agent.token.unknown',
            `Unknown Cobalt token "${name}".`,
            undefined,
            'Run co agent tokens --json --query <term> to search available tokens.',
          ),
    ],
    data: {
      metadataSource: metadata.source,
      token,
    },
  });
}

export async function runAgentUtilities({
  root,
  packageRoot,
  options,
  listOptions,
}: {
  root: string;
  packageRoot: string;
  options: AgentOptions;
  listOptions: AgentListOptions;
}): Promise<CommandResult<AgentUtilitiesData>> {
  const metadataSource = resolveMetadataSourceOption(options.metadataSource);
  const metadata = await resolveAgentMetadata({ cwd: root, packageRoot, metadataSource });
  const utilities = filterUtilities(metadata.utilities, listOptions);
  const limited = limitItems(utilities, listOptions);

  return createResult({
    command: 'agent utilities',
    cwd: root,
    diagnostics: metadata.diagnostics,
    data: {
      metadataSource: metadata.source,
      total: utilities.length,
      returned: limited.length,
      utilities: limited,
    },
  });
}

function filterTokens(tokens: CobaltToken[], options: AgentTokenListOptions): CobaltToken[] {
  const query = options.query?.trim().toLowerCase();
  const category = options.category?.trim().toLowerCase();
  const tier = options.tier?.trim().toLowerCase();
  const theme = options.theme?.trim().toLowerCase();
  const mode = options.mode?.trim().toLowerCase();

  return tokens.filter((token) => {
    if (tier && token.tier !== tier) return false;
    if (category && token.category.toLowerCase() !== category) return false;
    if (theme && !token.themeModes?.some((entry) => entry.theme.toLowerCase() === theme)) {
      return false;
    }
    if (mode && !token.themeModes?.some((entry) => entry.mode.toLowerCase() === mode)) {
      return false;
    }
    if (!query) return true;

    return [token.name, token.category, token.tier, token.description ?? '']
      .join(' ')
      .toLowerCase()
      .includes(query);
  });
}

function filterTokenThemeModes(token: CobaltToken, options: AgentTokenListOptions): CobaltToken {
  if (!options.theme && !options.mode) return token;

  const theme = options.theme?.trim().toLowerCase();
  const mode = options.mode?.trim().toLowerCase();
  return {
    ...token,
    themeModes: token.themeModes?.filter((entry) => {
      if (theme && entry.theme.toLowerCase() !== theme) return false;
      if (mode && entry.mode.toLowerCase() !== mode) return false;
      return true;
    }),
  };
}

function filterUtilities(utilities: CobaltUtility[], options: AgentListOptions): CobaltUtility[] {
  const query = options.query?.trim().toLowerCase();
  if (!query) return utilities;

  return utilities.filter((utility) =>
    [utility.className, utility.css, utility.description ?? '', ...utility.tokenRefs]
      .join(' ')
      .toLowerCase()
      .includes(query),
  );
}

function limitItems<T>(items: T[], options: AgentListOptions): T[] {
  if (options.all) return items;
  return items.slice(0, parseLimit(options.limit));
}

function parseLimit(value: string | undefined): number {
  if (value === undefined) return 50;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 50;
}

function pass(id: string, message: string, evidence?: string): DiagnosticRecord {
  return {
    id,
    status: 'pass',
    severity: 'info',
    message,
    evidence,
  };
}

function fail(
  id: string,
  message: string,
  evidence?: string,
  suggestedAction?: string,
): DiagnosticRecord {
  return {
    id,
    status: 'fail',
    severity: 'error',
    message,
    evidence,
    suggestedAction,
  };
}
