import { createResult, type CommandResult, type DiagnosticRecord } from './diagnostics.js';
import { runDoctor } from './doctor.js';
import { inspectProject, type ProjectInspection } from './project-inspect.js';
import {
  findComponent,
  findIcon,
  normalizeTokenName,
  resolveAgentIconMetadata,
  resolveAgentMetadata,
  resolveAgentThemeMetadata,
  resolveMetadataSourceOption,
  summarizeTokenMetadata,
  type AgentComponent,
  type AgentComponentUsage,
  type AgentFramework,
  type AgentIcon,
  type AgentTheme,
  type CobaltToken,
  type CobaltUtility,
} from './agent-metadata.js';

export interface AgentOptions {
  metadataSource?: string;
  framework?: string;
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

export interface AgentIconListOptions extends AgentListOptions {
  kind?: string;
  category?: string;
}

export interface AgentIconsData {
  metadataSource: string;
  total: number;
  returned: number;
  icons: AgentIcon[];
}

export interface AgentIconData {
  metadataSource: string;
  icon?: AgentIcon;
}

export interface AgentThemesData {
  metadataSource: string;
  total: number;
  themes: AgentTheme[];
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
    guidanceManifestPath?: string;
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
  frameworkSelection: AgentFrameworkSelection;
  components: AgentComponent[];
}

export interface AgentComponentData {
  metadataSource: string;
  frameworkSelection: AgentFrameworkSelection;
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

export interface AgentFrameworkSelection {
  requested: AgentFramework | 'auto';
  detected: AgentFramework[];
  selected: AgentFramework | null;
  ambiguous: boolean;
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
        guidanceManifestPath: metadata.guidanceManifestPath,
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
  const [inspection, metadata] = await Promise.all([
    inspectProject(root),
    resolveAgentMetadata({ cwd: root, packageRoot, metadataSource }),
  ]);
  const frameworkSelection = resolveFrameworkSelection(options.framework, inspection.frameworks);

  return createResult({
    command: 'agent components',
    cwd: root,
    diagnostics: [...metadata.diagnostics, ...frameworkSelectionDiagnostics(frameworkSelection)],
    data: {
      metadataSource: metadata.source,
      frameworkSelection,
      components: metadata.components.map((component) =>
        withFrameworkUsage(component, frameworkSelection, false),
      ),
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
  const [inspection, metadata] = await Promise.all([
    inspectProject(root),
    resolveAgentMetadata({ cwd: root, packageRoot, metadataSource }),
  ]);
  const frameworkSelection = resolveFrameworkSelection(options.framework, inspection.frameworks);
  const component = findComponent(metadata.components, name);

  return createResult({
    command: 'agent component',
    cwd: root,
    diagnostics: [
      ...metadata.diagnostics,
      ...frameworkSelectionDiagnostics(frameworkSelection),
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
      frameworkSelection,
      component: component ? withFrameworkUsage(component, frameworkSelection, true) : undefined,
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

export async function runAgentIcons({
  root,
  packageRoot,
  options,
  listOptions,
}: {
  root: string;
  packageRoot: string;
  options: AgentOptions;
  listOptions: AgentIconListOptions;
}): Promise<CommandResult<AgentIconsData>> {
  const metadataSource = resolveMetadataSourceOption(options.metadataSource);
  const metadata = await resolveAgentIconMetadata({ cwd: root, packageRoot, metadataSource });
  const icons = filterIcons(metadata.icons, listOptions);
  const limited = limitItems(icons, listOptions);

  return createResult({
    command: 'agent icons',
    cwd: root,
    diagnostics: metadata.diagnostics,
    data: {
      metadataSource: metadata.source,
      total: icons.length,
      returned: limited.length,
      icons: limited,
    },
  });
}

export async function runAgentThemes({
  root,
  packageRoot,
  options,
}: {
  root: string;
  packageRoot: string;
  options: AgentOptions;
}): Promise<CommandResult<AgentThemesData>> {
  const metadataSource = resolveMetadataSourceOption(options.metadataSource);
  const metadata = await resolveAgentThemeMetadata({ cwd: root, packageRoot, metadataSource });

  return createResult({
    command: 'agent themes',
    cwd: root,
    diagnostics: metadata.diagnostics,
    data: {
      metadataSource: metadata.source,
      total: metadata.themes.length,
      themes: metadata.themes,
    },
  });
}

export async function runAgentIcon({
  root,
  packageRoot,
  name,
  options,
}: {
  root: string;
  packageRoot: string;
  name: string;
  options: AgentOptions;
}): Promise<CommandResult<AgentIconData>> {
  const metadataSource = resolveMetadataSourceOption(options.metadataSource);
  const metadata = await resolveAgentIconMetadata({ cwd: root, packageRoot, metadataSource });
  const icon = findIcon(metadata.icons, name);

  return createResult({
    command: 'agent icon',
    cwd: root,
    diagnostics: [
      ...metadata.diagnostics,
      icon
        ? pass('cobalt.agent.icon.found', `Found ${icon.name}.`, icon.category ?? icon.kind)
        : fail(
            'cobalt.agent.icon.unknown',
            `Unknown Cobalt icon "${name}".`,
            undefined,
            'Run co agent icons --query <term> to search available icons.',
          ),
    ],
    data: {
      metadataSource: metadata.source,
      icon,
    },
  });
}

const allowedFrameworks = ['web-components', 'react', 'vue', 'angular'] as const;

function resolveFrameworkSelection(
  requestedValue: string | undefined,
  detectedValues: string[],
): AgentFrameworkSelection {
  const requested = normalizeRequestedFramework(requestedValue);
  const detected = detectedValues.filter(isAgentFramework);

  if (requested !== 'auto') {
    return {
      requested,
      detected,
      selected: requested,
      ambiguous: false,
    };
  }

  if (detected.length === 1) {
    return {
      requested,
      detected,
      selected: detected[0],
      ambiguous: false,
    };
  }

  if (detected.length > 1) {
    return {
      requested,
      detected,
      selected: null,
      ambiguous: true,
    };
  }

  return {
    requested,
    detected,
    selected: 'web-components',
    ambiguous: false,
  };
}

function normalizeRequestedFramework(value: string | undefined): AgentFramework | 'auto' {
  if (value === undefined || value === 'auto') return 'auto';
  if (isAgentFramework(value)) return value;
  throw new Error(
    `Unsupported framework "${value}". Use auto, web-components, react, vue, or angular.`,
  );
}

function isAgentFramework(value: string): value is AgentFramework {
  return (allowedFrameworks as readonly string[]).includes(value);
}

function frameworkSelectionDiagnostics(selection: AgentFrameworkSelection): DiagnosticRecord[] {
  if (selection.ambiguous) {
    return [
      {
        id: 'cobalt.agent.framework.ambiguous',
        status: 'warn',
        severity: 'warning',
        message: 'Multiple project frameworks were detected.',
        evidence: selection.detected.join(', '),
        suggestedAction:
          'Rerun the command with --framework web-components, --framework react, --framework vue, or --framework angular.',
      },
    ];
  }

  if (selection.requested !== 'auto' && !selection.detected.includes(selection.requested)) {
    return [
      {
        id: 'cobalt.agent.framework.override',
        status: 'warn',
        severity: 'warning',
        message: `Using requested ${selection.requested} guidance even though it was not detected in the project.`,
        evidence:
          selection.detected.length > 0 ? selection.detected.join(', ') : 'No framework detected.',
      },
    ];
  }

  return [];
}

function withFrameworkUsage(
  component: AgentComponent,
  selection: AgentFrameworkSelection,
  includeExamples: boolean,
): AgentComponent {
  return {
    ...component,
    usage: selectUsage(component.usage, selection, includeExamples),
  };
}

function selectUsage(
  usage: AgentComponent['usage'],
  selection: AgentFrameworkSelection,
  includeExamples: boolean,
): AgentComponentUsage {
  if (!selection.selected) {
    return {
      ...usage,
      framework: null,
      requiredImports: [],
      examples: [],
      frameworkExamples: usage.frameworkExamples,
      relatedComponents: [],
      recommendedAttributes: [],
      notes: [
        ...usage.notes,
        'Framework selection is ambiguous. Choose a framework-specific example before editing.',
      ],
    };
  }

  const selected = usage.frameworkExamples?.[selection.selected];
  if (!selected) {
    return {
      ...usage,
      framework: selection.selected,
      requiredImports: [],
      examples: [],
      relatedComponents: [],
      recommendedAttributes: [],
      notes: [
        ...usage.notes,
        `No ${selection.selected} guidance examples were found for this component.`,
      ],
    };
  }

  return {
    ...usage,
    framework: selection.selected,
    requiredImports: selected.requiredImports,
    examples: includeExamples ? selected.examples : [],
    frameworkExamples: selection.ambiguous ? usage.frameworkExamples : undefined,
    relatedComponents: selected.relatedComponents,
    recommendedAttributes: selected.recommendedAttributes,
    source: selected.source,
    notes: usage.notes,
  };
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

function filterIcons(icons: AgentIcon[], options: AgentIconListOptions): AgentIcon[] {
  const query = options.query?.trim().toLowerCase();
  const category = options.category?.trim().toLowerCase();
  const kindFilter = options.kind?.trim().toLowerCase();

  return icons.filter((icon) => {
    if (kindFilter) {
      // 'animated' is a UX shortcut: filter to icons that have an animated
      // variant, regardless of their base kind.
      if (kindFilter === 'animated') {
        if (!icon.hasAnimated) return false;
      } else if (icon.kind !== kindFilter) {
        return false;
      }
    }
    if (category && (icon.category ?? '').toLowerCase() !== category) return false;
    if (!query) return true;

    return [icon.name, icon.category ?? '', icon.description ?? '', ...(icon.searchTerms ?? [])]
      .join(' ')
      .toLowerCase()
      .includes(query);
  });
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
