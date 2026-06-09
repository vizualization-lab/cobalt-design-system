import { createResult, type CommandResult, type DiagnosticRecord } from './diagnostics.js';

export type ComponentPhaseStatus = 'pass' | 'fail' | 'pending' | 'na';

export interface ComponentCatalogEntry {
  tagName: string;
  name: string;
  docsPath: string;
  imports: {
    webComponent: string;
    react: string;
    vue: string;
    angular: string;
  };
  status: Record<string, ComponentPhaseStatus>;
}

export interface ComponentListData {
  components: ComponentCatalogEntry[];
}

export interface ComponentLookupData {
  component?: ComponentCatalogEntry;
}

const statusTemplate = {
  figma: 'pending',
  artDirector: 'pending',
  tokens: 'pending',
  unitTests: 'pending',
  a11y: 'pending',
  docs: 'pending',
  react: 'pending',
  vue: 'pending',
  angular: 'pending',
  browsers: 'pending',
} satisfies Record<string, ComponentPhaseStatus>;

const statusOverrides: Record<string, Partial<Record<string, ComponentPhaseStatus>>> = {
  'co-banner': { figma: 'fail', unitTests: 'pass' },
  'co-button': { unitTests: 'pass' },
  'co-combobox': { figma: 'fail' },
  'co-label': {
    tokens: 'pass',
    unitTests: 'pass',
    docs: 'pass',
    react: 'pass',
    vue: 'pass',
    angular: 'pass',
  },
};

const componentNames = [
  'app-shell',
  'banner',
  'button',
  'button-icon',
  'card',
  'checkbox',
  'checkbox-group',
  'checkbox-indeterminate',
  'combobox',
  'form',
  'icon',
  'input',
  'input-pill',
  'label',
  'listbox',
  'mode-toggle',
  'nav-drawer',
  'nav-drawer-group',
  'nav-drawer-item',
  'nav-header-bar',
  'nav-rail-bar',
  'nav-rail-item',
  'nav-separator',
  'option',
  'radio',
  'radio-group',
  'select',
  'textarea',
] as const;

export const componentCatalog: ComponentCatalogEntry[] = componentNames.map((name) => {
  const tagName = `co-${name}`;
  const pascalName = `Co${name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')}`;

  return {
    tagName,
    name: pascalName,
    docsPath: `/components/${name}`,
    imports: {
      webComponent: `@cobalt/components/${name}`,
      react: `@cobalt/react/${name}`,
      vue: `@cobalt/vue/${name}`,
      angular: `@cobalt/angular/${name}`,
    },
    status: {
      ...statusTemplate,
      ...statusOverrides[tagName],
    },
  };
});

export function listComponents(): CommandResult<ComponentListData> {
  return createResult({
    command: 'components list',
    diagnostics: [
      pass('cobalt.components.catalog', `Loaded ${componentCatalog.length} components.`),
    ],
    data: {
      components: componentCatalog,
    } satisfies ComponentListData,
  });
}

export function getComponent(
  name: string,
  command = 'components status',
): CommandResult<ComponentLookupData> {
  const normalized = normalizeComponentName(name);
  const component = componentCatalog.find(
    (entry) => entry.tagName === normalized || entry.tagName.replace(/^co-/, '') === normalized,
  );

  if (!component) {
    return createResult({
      command,
      diagnostics: [
        fail(
          'cobalt.components.unknown',
          `Unknown Cobalt component "${name}".`,
          undefined,
          'Run co components list to see available components.',
        ),
      ],
      data: {
        component: undefined,
      } satisfies ComponentLookupData,
    });
  }

  return createResult({
    command,
    diagnostics: [
      pass('cobalt.components.found', `Found ${component.tagName}.`, component.docsPath),
      ...statusDiagnostics(component),
    ],
    data: {
      component,
    } satisfies ComponentLookupData,
  });
}

function normalizeComponentName(name: string): string {
  return name.trim().toLowerCase().replace(/^co-/, '');
}

function statusDiagnostics(component: ComponentCatalogEntry): DiagnosticRecord[] {
  return Object.entries(component.status)
    .filter(([, status]) => status === 'fail')
    .map(([phase]) =>
      fail(
        `cobalt.components.${phase}`,
        `${component.tagName} has a failing ${phase} status.`,
        component.docsPath,
        'Check the component documentation and status page before adopting it.',
      ),
    );
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
