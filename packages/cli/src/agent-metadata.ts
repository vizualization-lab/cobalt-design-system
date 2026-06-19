import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { DiagnosticRecord } from './diagnostics.js';

export type MetadataSourceOption = 'auto' | 'workspace' | 'bundled';
export type MetadataSource = 'workspace' | 'bundled';
export type TokenTier = 'primitive' | 'semantic' | 'component';
export type AgentFramework = 'web-components' | 'react' | 'vue' | 'angular';

export interface AgentAttribute {
  name: string;
  fieldName?: string;
  type?: string;
  default?: string;
  description?: string;
  reflects: boolean;
  values?: string[];
}

export interface AgentEvent {
  name: string;
  type?: string;
  description?: string;
}

export interface AgentSlot {
  name: string;
  description?: string;
}

export interface AgentCssPart {
  name: string;
  description?: string;
}

export interface AgentMethod {
  name: string;
  description?: string;
  parameters: Array<{
    name: string;
    type?: string;
    default?: string;
  }>;
  returnType?: string;
}

export interface AgentComponent {
  tagName: string;
  name: string;
  summary?: string;
  description?: string;
  docsPath: string;
  imports: {
    webComponent: string;
    react: string;
    vue: string;
    angular: string;
  };
  attributes: AgentAttribute[];
  events: AgentEvent[];
  slots: AgentSlot[];
  cssParts: AgentCssPart[];
  methods: AgentMethod[];
  usage: AgentComponentUsage;
}

export interface AgentComponentUsage {
  framework: AgentFramework | null;
  availableFrameworks: AgentFramework[];
  requiredImports: string[];
  examples: AgentComponentUsageExample[];
  frameworkExamples?: Partial<Record<AgentFramework, AgentComponentFrameworkUsage>>;
  relatedComponents: AgentRelatedComponent[];
  recommendedAttributes: string[];
  source?: {
    docsPath: string;
    section: string;
    framework?: AgentFramework;
  };
  notes: string[];
}

export interface AgentComponentUsageExample {
  title: string;
  language: string;
  code: string;
}

export interface AgentComponentFrameworkUsage {
  source: {
    docsPath: string;
    section: string;
    framework: AgentFramework;
  };
  requiredImports: string[];
  examples: AgentComponentUsageExample[];
  relatedComponents: AgentRelatedComponent[];
  recommendedAttributes: string[];
}

export interface AgentRelatedComponent {
  tagName: string;
  imports: {
    webComponent: string;
    react: string;
    vue: string;
    angular: string;
  };
}

export interface CobaltTokenThemeValue {
  theme: string;
  mode: string;
  value: string;
}

export interface CobaltToken {
  name: string;
  category: string;
  tier: TokenTier;
  value: string;
  resolvedValue?: string;
  description?: string;
  themeModes?: CobaltTokenThemeValue[];
}

export interface CobaltUtility {
  className: string;
  css: string;
  tokenRefs: string[];
  responsivePrefix?: string;
  description?: string;
}

export interface AgentMetadataSnapshot {
  source: MetadataSource;
  componentManifestPath?: string;
  guidanceManifestPath?: string;
  tokenManifestPath?: string;
  components: AgentComponent[];
  tokens: CobaltToken[];
  utilities: CobaltUtility[];
  diagnostics: DiagnosticRecord[];
}

interface ResolveMetadataOptions {
  cwd: string;
  packageRoot: string;
  metadataSource: MetadataSourceOption;
}

interface RawCem {
  schemaVersion?: string;
  modules?: RawCemModule[];
}

interface RawCemModule {
  path?: string;
  declarations?: RawCemDeclaration[];
}

interface RawCemDeclaration {
  name?: string;
  tagName?: string;
  summary?: string;
  description?: string;
  customElement?: boolean;
  attributes?: RawCemAttribute[];
  events?: RawCemEvent[];
  slots?: RawCemSlot[];
  cssParts?: RawCemCssPart[];
  members?: RawCemMember[];
}

interface RawCemAttribute {
  name?: string;
  fieldName?: string;
  type?: {
    text?: string;
  };
  default?: string;
  description?: string;
}

interface RawCemEvent {
  name?: string;
  type?: {
    text?: string;
  };
  description?: string;
}

interface RawCemSlot {
  name?: string;
  description?: string;
}

interface RawCemCssPart {
  name?: string;
  description?: string;
}

interface RawCemMember {
  kind?: string;
  name?: string;
  privacy?: string;
  attribute?: string;
  reflects?: boolean;
  type?: {
    text?: string;
  };
  default?: string;
  description?: string;
  parameters?: Array<{
    name?: string;
    type?: {
      text?: string;
    };
    default?: string;
  }>;
  return?: {
    type?: {
      text?: string;
    };
  };
}

interface RawTokenManifest {
  schemaVersion?: number;
  cobaltVersion?: string;
  tokens?: CobaltToken[];
  utilities?: CobaltUtility[];
}

interface RawComponentGuidanceManifest {
  schemaVersion?: number;
  components?: RawComponentGuidance[];
}

interface RawComponentGuidance {
  tagName?: string;
  docsPath?: string;
  frameworks?: Partial<Record<AgentFramework, AgentComponentFrameworkUsage>>;
}

export function resolveMetadataSourceOption(value: string | undefined): MetadataSourceOption {
  if (value === undefined || value === 'auto' || value === 'workspace' || value === 'bundled') {
    return value ?? 'auto';
  }

  throw new Error(`Unsupported metadata source "${value}". Use auto, workspace, or bundled.`);
}

export async function resolveAgentMetadata({
  cwd,
  packageRoot,
  metadataSource,
}: ResolveMetadataOptions): Promise<AgentMetadataSnapshot> {
  if (metadataSource !== 'bundled') {
    const workspaceSnapshot = await tryReadSnapshot(
      workspaceMetadataPaths(cwd, packageRoot),
      'workspace',
    );
    if (workspaceSnapshot) return workspaceSnapshot;

    if (metadataSource === 'workspace') {
      return emptySnapshot('workspace', [
        fail(
          'cobalt.agent.metadata.workspace-missing',
          'Workspace Cobalt metadata was not found.',
          cwd,
          'Install @cobalt/components and @cobalt/tokens in the target project or use --metadata-source auto.',
        ),
      ]);
    }
  }

  const bundledSnapshot = await tryReadSnapshot(bundledMetadataPaths(packageRoot), 'bundled');
  if (bundledSnapshot) {
    const diagnostics =
      metadataSource === 'auto'
        ? [
            warn(
              'cobalt.agent.metadata.fallback',
              'Using bundled Cobalt metadata because workspace metadata was not found.',
            ),
            ...bundledSnapshot.diagnostics,
          ]
        : bundledSnapshot.diagnostics;
    return { ...bundledSnapshot, diagnostics };
  }

  return emptySnapshot('bundled', [
    fail(
      'cobalt.agent.metadata.bundled-missing',
      'Bundled Cobalt metadata was not found.',
      path.join(packageRoot, 'dist', 'metadata'),
      'Rebuild @cobalt/cli before using agent metadata commands.',
    ),
  ]);
}

export function findComponent(
  components: AgentComponent[],
  name: string,
): AgentComponent | undefined {
  const normalized = normalizeComponentName(name);
  return components.find(
    (component) =>
      component.tagName === normalized || component.tagName.replace(/^co-/, '') === normalized,
  );
}

export function normalizeTokenName(name: string): string {
  const trimmed = name.trim();
  if (trimmed.startsWith('--')) return trimmed;
  if (trimmed.startsWith('co-')) return `--${trimmed}`;
  return trimmed;
}

export function summarizeTokenMetadata(tokens: CobaltToken[]) {
  const categories = [...new Set(tokens.map((token) => token.category))].sort();
  const tiers = [...new Set(tokens.map((token) => token.tier))].sort();
  const themes = [
    ...new Set(tokens.flatMap((token) => token.themeModes?.map((mode) => mode.theme) ?? [])),
  ].sort();
  const modes = [
    ...new Set(tokens.flatMap((token) => token.themeModes?.map((mode) => mode.mode) ?? [])),
  ].sort();

  return {
    count: tokens.length,
    categories,
    tiers,
    themes,
    modes,
  };
}

async function tryReadSnapshot(
  paths: ReturnType<typeof workspaceMetadataPaths>,
  source: MetadataSource,
): Promise<AgentMetadataSnapshot | undefined> {
  if (!existsSync(paths.components) || !existsSync(paths.tokens)) return undefined;

  try {
    const [componentManifest, tokenManifest, guidanceManifest] = await Promise.all([
      readJson<RawCem>(paths.components),
      readJson<RawTokenManifest>(paths.tokens),
      existsSync(paths.guidance)
        ? readJson<RawComponentGuidanceManifest>(paths.guidance)
        : Promise.resolve(undefined),
    ]);
    const { guidance, diagnostics: guidanceDiagnostics } = normalizeGuidanceManifest(
      guidanceManifest,
      paths.guidance,
    );
    const { components, diagnostics: componentDiagnostics } = normalizeComponents(
      componentManifest,
      guidance,
    );
    const {
      tokens,
      utilities,
      diagnostics: tokenDiagnostics,
    } = normalizeTokenManifest(tokenManifest);

    return {
      source,
      componentManifestPath: paths.components,
      guidanceManifestPath: existsSync(paths.guidance) ? paths.guidance : undefined,
      tokenManifestPath: paths.tokens,
      components,
      tokens,
      utilities,
      diagnostics: [
        pass(
          `cobalt.agent.metadata.${source}`,
          `Loaded ${source} Cobalt metadata.`,
          `${components.length} components, ${tokens.length} tokens, ${utilities.length} utilities`,
        ),
        ...componentDiagnostics,
        ...guidanceDiagnostics,
        ...tokenDiagnostics,
      ],
    };
  } catch (error) {
    return emptySnapshot(source, [
      fail(
        `cobalt.agent.metadata.${source}-invalid`,
        `Could not read ${source} Cobalt metadata.`,
        error instanceof Error ? error.message : String(error),
      ),
    ]);
  }
}

function workspaceMetadataPaths(cwd: string, packageRoot: string) {
  return {
    components: path.join(cwd, 'node_modules', '@cobalt', 'components', 'custom-elements.json'),
    guidance: path.join(packageRoot, 'dist', 'metadata', 'component-guidance.json'),
    tokens: path.join(
      cwd,
      'node_modules',
      '@cobalt',
      'tokens',
      'dist',
      'tooling',
      'cobalt.manifest.json',
    ),
  };
}

function bundledMetadataPaths(packageRoot: string) {
  return {
    components: path.join(packageRoot, 'dist', 'metadata', 'custom-elements.json'),
    guidance: path.join(packageRoot, 'dist', 'metadata', 'component-guidance.json'),
    tokens: path.join(packageRoot, 'dist', 'metadata', 'cobalt.manifest.json'),
  };
}

function normalizeComponents(
  cem: RawCem,
  guidance: Map<string, Partial<Record<AgentFramework, AgentComponentFrameworkUsage>>>,
): {
  components: AgentComponent[];
  diagnostics: DiagnosticRecord[];
} {
  const diagnostics: DiagnosticRecord[] = [];
  const components: AgentComponent[] = [];
  let hiddenEvents = 0;

  for (const module of cem.modules ?? []) {
    for (const declaration of module.declarations ?? []) {
      if (!declaration.tagName || (!declaration.customElement && !declaration.tagName)) continue;

      const hiddenDeclarationEvents =
        declaration.events?.filter((event) => event.name && !event.name.startsWith('co-')).length ??
        0;
      hiddenEvents += hiddenDeclarationEvents;

      const imports = componentImports(declaration.tagName);
      const component: AgentComponent = {
        tagName: declaration.tagName,
        name: declaration.name ?? pascalCase(declaration.tagName.replace(/^co-/, '')),
        summary: declaration.summary,
        description: declaration.description?.trim() || undefined,
        docsPath: `/components/${declaration.tagName.replace(/^co-/, '')}`,
        imports,
        attributes: normalizeAttributes(declaration),
        events: (declaration.events ?? [])
          .filter((event) => Boolean(event.name?.startsWith('co-')))
          .map((event) => ({
            name: event.name as string,
            type: event.type?.text,
            description: event.description,
          }))
          .sort((left, right) => left.name.localeCompare(right.name)),
        slots: (declaration.slots ?? [])
          .filter((slot) => slot.name !== undefined)
          .map((slot) => ({
            name: slot.name || 'default',
            description: slot.description,
          }))
          .sort((left, right) => left.name.localeCompare(right.name)),
        cssParts: (declaration.cssParts ?? [])
          .filter((part) => Boolean(part.name))
          .map((part) => ({
            name: part.name as string,
            description: part.description,
          }))
          .sort((left, right) => left.name.localeCompare(right.name)),
        methods: (declaration.members ?? [])
          .filter(isPublicMethod)
          .map((method) => ({
            name: method.name as string,
            description: method.description,
            parameters: (method.parameters ?? [])
              .filter((parameter) => Boolean(parameter.name))
              .map((parameter) => ({
                name: parameter.name as string,
                type: parameter.type?.text,
                default: parameter.default,
              })),
            returnType: method.return?.type?.text,
          }))
          .sort((left, right) => left.name.localeCompare(right.name)),
        usage: buildComponentUsage(declaration.tagName, imports, guidance.get(declaration.tagName)),
      };
      components.push(component);
    }
  }

  if (hiddenEvents > 0) {
    diagnostics.push(
      warn(
        'cobalt.agent.cem.events-hidden',
        `Hid ${hiddenEvents} non-Cobalt event entries from the custom elements manifest.`,
        'Only co-* events are shown by default.',
      ),
    );
  }

  components.sort((left, right) => left.tagName.localeCompare(right.tagName));
  return { components, diagnostics };
}

function normalizeAttributes(declaration: RawCemDeclaration): AgentAttribute[] {
  const fieldMap = new Map(
    (declaration.members ?? [])
      .filter((member) => member.kind === 'field' && member.name)
      .map((member) => [member.name as string, member]),
  );

  return (declaration.attributes ?? [])
    .filter((attribute) => Boolean(attribute.name) && !attribute.name?.startsWith('_'))
    .map((attribute) => {
      const member = attribute.fieldName ? fieldMap.get(attribute.fieldName) : undefined;
      const type = attribute.type?.text ?? member?.type?.text;
      return {
        name: attribute.name as string,
        fieldName: attribute.fieldName,
        type,
        default: attribute.default ?? member?.default,
        description: attribute.description ?? member?.description,
        reflects: Boolean(member?.reflects),
        values: extractLiteralUnionValues(type),
      };
    })
    .sort((left, right) => left.name.localeCompare(right.name));
}

function normalizeGuidanceManifest(
  manifest: RawComponentGuidanceManifest | undefined,
  manifestPath: string,
): {
  guidance: Map<string, Partial<Record<AgentFramework, AgentComponentFrameworkUsage>>>;
  diagnostics: DiagnosticRecord[];
} {
  if (!manifest) {
    return {
      guidance: new Map(),
      diagnostics: [
        warn(
          'cobalt.agent.guidance.missing',
          'Cobalt component guidance metadata was not found.',
          manifestPath,
        ),
      ],
    };
  }

  if (manifest.schemaVersion !== 1) {
    return {
      guidance: new Map(),
      diagnostics: [
        fail(
          'cobalt.agent.guidance.invalid-schema',
          'Cobalt component guidance metadata has an unsupported schema version.',
          String(manifest.schemaVersion),
        ),
      ],
    };
  }

  const guidance = new Map<string, Partial<Record<AgentFramework, AgentComponentFrameworkUsage>>>();
  for (const component of manifest.components ?? []) {
    if (!component.tagName || !component.frameworks) continue;
    guidance.set(component.tagName, component.frameworks);
  }

  return { guidance, diagnostics: [] };
}

function buildComponentUsage(
  tagName: string,
  imports: AgentComponent['imports'],
  frameworkExamples: Partial<Record<AgentFramework, AgentComponentFrameworkUsage>> | undefined,
): AgentComponentUsage {
  const availableFrameworks = frameworkExamples
    ? (Object.keys(frameworkExamples).sort() as AgentFramework[])
    : [];

  return {
    framework: null,
    availableFrameworks,
    requiredImports: [],
    examples: [],
    frameworkExamples,
    relatedComponents: [],
    recommendedAttributes: [],
    notes: [
      `Import '${imports.webComponent}' once before rendering ${tagName} in native Web Component projects.`,
      'Use the selected framework guidance for authoring examples and imports. Use raw API metadata as reference.',
    ],
  };
}

function normalizeTokenManifest(manifest: RawTokenManifest): {
  tokens: CobaltToken[];
  utilities: CobaltUtility[];
  diagnostics: DiagnosticRecord[];
} {
  if (manifest.schemaVersion !== 1) {
    return {
      tokens: [],
      utilities: [],
      diagnostics: [
        fail(
          'cobalt.agent.tokens.invalid-schema',
          'Cobalt token tooling manifest has an unsupported schema version.',
          String(manifest.schemaVersion),
        ),
      ],
    };
  }

  return {
    tokens: [...(manifest.tokens ?? [])].sort((left, right) => left.name.localeCompare(right.name)),
    utilities: [...(manifest.utilities ?? [])].sort((left, right) =>
      left.className.localeCompare(right.className),
    ),
    diagnostics: [],
  };
}

function componentImports(tagName: string): AgentComponent['imports'] {
  const name = tagName.replace(/^co-/, '');
  return {
    webComponent: `@cobalt/components/${name}`,
    react: `@cobalt/react/${name}`,
    vue: `@cobalt/vue/${name}`,
    angular: `@cobalt/angular/${name}`,
  };
}

function normalizeComponentName(name: string): string {
  const normalized = name.trim().toLowerCase();
  return normalized.startsWith('co-') ? normalized : `co-${normalized}`;
}

function pascalCase(value: string): string {
  return `Co${value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')}`;
}

function extractLiteralUnionValues(type: string | undefined): string[] | undefined {
  if (!type || !type.includes("'")) return undefined;
  const values = [...type.matchAll(/'([^']+)'/g)].map((match) => match[1]);
  return values.length > 0 ? values : undefined;
}

function isPublicMethod(member: RawCemMember): boolean {
  return (
    member.kind === 'method' &&
    Boolean(member.name) &&
    member.privacy === undefined &&
    !member.name?.startsWith('_')
  );
}

async function readJson<T>(filePath: string): Promise<T> {
  return JSON.parse(await readFile(filePath, 'utf8')) as T;
}

function emptySnapshot(
  source: MetadataSource,
  diagnostics: DiagnosticRecord[],
): AgentMetadataSnapshot {
  return {
    source,
    components: [],
    tokens: [],
    utilities: [],
    diagnostics,
  };
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

function warn(id: string, message: string, evidence?: string): DiagnosticRecord {
  return {
    id,
    status: 'warn',
    severity: 'warning',
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
