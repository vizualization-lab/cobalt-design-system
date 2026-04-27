import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { format, resolveConfig } from 'prettier';
import ts from 'typescript';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, '../../..');
const outputPath = resolve(repoRoot, 'packages/storybook-fixtures/src/api-metadata.ts');
const manifestPath = resolve(repoRoot, 'packages/components/custom-elements.json');
const checkMode = process.argv.includes('--check');

const componentConfigs = [
  {
    id: 'button',
    title: 'Button',
    tagName: 'co-button',
    className: 'CoButton',
    angularSource: 'packages/angular/src/components/button.ts',
    importName: 'CoButton',
    componentPath: 'button',
  },
  {
    id: 'buttonIcon',
    title: 'Button Icon',
    tagName: 'co-button-icon',
    className: 'CoButtonIcon',
    angularSource: 'packages/angular/src/components/button-icon.ts',
    importName: 'CoButtonIcon',
    componentPath: 'button-icon',
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    tagName: 'co-checkbox',
    className: 'CoCheckbox',
    angularSource: 'packages/angular/src/components/checkbox.ts',
    importName: 'CoCheckbox',
    componentPath: 'checkbox',
  },
  {
    id: 'checkboxGroup',
    title: 'Checkbox Group',
    tagName: 'co-checkbox-group',
    className: 'CoCheckboxGroup',
    angularSource: 'packages/angular/src/components/checkbox-group.ts',
    importName: 'CoCheckboxGroup',
    componentPath: 'checkbox-group',
  },
  {
    id: 'checkboxIndeterminate',
    title: 'Checkbox Indeterminate',
    tagName: 'co-checkbox-indeterminate',
    className: 'CoCheckboxIndeterminate',
    angularSource: 'packages/angular/src/components/checkbox-indeterminate.ts',
    importName: 'CoCheckboxIndeterminate',
    componentPath: 'checkbox-indeterminate',
  },
  {
    id: 'icon',
    title: 'Icon',
    tagName: 'co-icon',
    className: 'CoIcon',
    angularSource: 'packages/angular/src/components/icon.ts',
    importName: 'CoIcon',
    componentPath: 'icon',
  },
  {
    id: 'input',
    title: 'Input',
    tagName: 'co-input',
    className: 'CoInput',
    angularSource: 'packages/angular/src/components/input.ts',
    importName: 'CoInput',
    componentPath: 'input',
  },
  {
    id: 'textarea',
    title: 'Textarea',
    tagName: 'co-textarea',
    className: 'CoTextarea',
    angularSource: 'packages/angular/src/components/textarea.ts',
    importName: 'CoTextarea',
    componentPath: 'textarea',
  },
  {
    id: 'option',
    title: 'Option',
    tagName: 'co-option',
    className: 'CoOption',
    angularSource: 'packages/angular/src/components/listbox.ts',
    importName: 'CoOption',
    componentPath: 'option',
  },
  {
    id: 'radio',
    title: 'Radio',
    tagName: 'co-radio',
    className: 'CoRadio',
    angularSource: 'packages/angular/src/components/radio.ts',
    importName: 'CoRadio',
    componentPath: 'radio',
  },
  {
    id: 'radioGroup',
    title: 'Radio Group',
    tagName: 'co-radio-group',
    className: 'CoRadioGroup',
    angularSource: 'packages/angular/src/components/radio-group.ts',
    importName: 'CoRadioGroup',
    componentPath: 'radio-group',
  },
  {
    id: 'listbox',
    title: 'Listbox',
    tagName: 'co-listbox',
    className: 'CoListbox',
    angularSource: 'packages/angular/src/components/listbox.ts',
    importName: 'CoListbox',
    componentPath: 'listbox',
  },
  {
    id: 'select',
    title: 'Select',
    tagName: 'co-select',
    className: 'CoSelect',
    angularSource: 'packages/angular/src/components/select.ts',
    importName: 'CoSelect',
    componentPath: 'select',
  },
  {
    id: 'combobox',
    title: 'Combobox',
    tagName: 'co-combobox',
    className: 'CoCombobox',
    angularSource: 'packages/angular/src/components/combobox.ts',
    importName: 'CoCombobox',
    componentPath: 'combobox',
  },
  {
    id: 'form',
    title: 'Form',
    tagName: 'co-form',
    className: 'CoForm',
    angularSource: 'packages/angular/src/components/form.ts',
    importName: 'CoForm',
    componentPath: 'form',
  },
];

const commonIconOptions = [
  'home',
  'search',
  'settings',
  'person',
  'add',
  'delete',
  'edit',
  'info',
  'warning',
  'check-circle',
  'arrow-forward',
  'open-in-new',
  'star',
  'favorite',
  'notifications',
  'progress-activity',
];

const propOverrides = {
  buttonIcon: {
    name: { options: commonIconOptions },
  },
  icon: {
    name: { options: commonIconOptions },
  },
  input: {
    type: { options: ['text', 'email', 'password', 'search', 'tel', 'url'] },
  },
};

const slotControls = {
  button: [
    { name: '', argName: 'slotDefault', label: 'Content', defaultValue: 'Save changes' },
    { name: 'prefix', argName: 'slotPrefix', label: 'Prefix icon', defaultValue: 'add' },
    { name: 'suffix', argName: 'slotSuffix', label: 'Suffix icon', defaultValue: '' },
  ],
  checkbox: [{ name: '', argName: 'slotDefault', label: 'Label', defaultValue: 'Accept terms' }],
  checkboxGroup: [
    { name: 'label', argName: 'slotLabel', label: 'Label', defaultValue: 'Preferences' },
    {
      name: 'help-text',
      argName: 'slotHelpText',
      label: 'Help text',
      defaultValue: 'Choose all that apply.',
    },
    { name: 'feedback', argName: 'slotFeedback', label: 'Feedback', defaultValue: '' },
  ],
  checkboxIndeterminate: [
    { name: 'label', argName: 'slotLabel', label: 'Label', defaultValue: 'Notifications' },
  ],
  input: [
    { name: 'prefix', argName: 'slotPrefix', label: 'Prefix icon', defaultValue: 'search' },
    { name: 'suffix', argName: 'slotSuffix', label: 'Suffix icon', defaultValue: '' },
    { name: 'feedback', argName: 'slotFeedback', label: 'Feedback', defaultValue: '' },
  ],
  textarea: [
    { name: 'prefix', argName: 'slotPrefix', label: 'Prefix icon', defaultValue: '' },
    { name: 'suffix', argName: 'slotSuffix', label: 'Suffix icon', defaultValue: '' },
    { name: 'feedback', argName: 'slotFeedback', label: 'Feedback', defaultValue: '' },
  ],
  option: [
    { name: '', argName: 'slotDefault', label: 'Content', defaultValue: 'Apple' },
    {
      name: 'indicator-icon',
      argName: 'slotIndicatorIcon',
      label: 'Indicator icon',
      defaultValue: 'check-circle',
    },
    { name: 'indicator', argName: 'slotIndicator', label: 'Indicator', defaultValue: '' },
  ],
  radio: [{ name: '', argName: 'slotDefault', label: 'Label', defaultValue: 'Standard' }],
  radioGroup: [
    { name: 'label', argName: 'slotLabel', label: 'Label', defaultValue: 'Plan' },
    {
      name: 'help-text',
      argName: 'slotHelpText',
      label: 'Help text',
      defaultValue: 'Choose one option.',
    },
    { name: 'feedback', argName: 'slotFeedback', label: 'Feedback', defaultValue: '' },
  ],
  listbox: [{ name: 'feedback', argName: 'slotFeedback', label: 'Feedback', defaultValue: '' }],
  select: [
    { name: 'label', argName: 'slotLabel', label: 'Label', defaultValue: 'Fruit' },
    {
      name: 'help-text',
      argName: 'slotHelpText',
      label: 'Help text',
      defaultValue: 'Choose one option.',
    },
    { name: 'feedback', argName: 'slotFeedback', label: 'Feedback', defaultValue: '' },
  ],
  combobox: [
    { name: 'prefix', argName: 'slotPrefix', label: 'Prefix icon', defaultValue: 'search' },
    { name: 'suffix', argName: 'slotSuffix', label: 'Suffix icon', defaultValue: '' },
    { name: 'feedback', argName: 'slotFeedback', label: 'Feedback', defaultValue: '' },
  ],
  form: [{ name: 'feedback', argName: 'slotFeedback', label: 'Feedback', defaultValue: '' }],
};

const playgroundDefaults = {
  button: {
    slotDefault: 'Save changes',
  },
  buttonIcon: {
    name: 'star',
    label: 'Favorite',
  },
  checkbox: {
    value: 'accept',
  },
  checkboxGroup: {
    name: 'preferences',
    selectedValues: 'email,product',
    optionItems: [
      { value: 'email', label: 'Email updates' },
      { value: 'product', label: 'Product news' },
      { value: 'research', label: 'Research invitations' },
    ],
  },
  checkboxIndeterminate: {
    value: 'notifications',
    indeterminate: true,
    optionItems: [
      { value: 'email', label: 'Email' },
      { value: 'sms', label: 'SMS' },
      { value: 'push', label: 'Push' },
    ],
    selectedValues: 'email',
  },
  icon: {
    name: 'home',
    label: 'Home',
  },
  input: {
    label: 'Email',
    helpText: 'Use your work email.',
    name: 'email',
    placeholder: 'name@example.com',
    value: '',
  },
  textarea: {
    label: 'Comment',
    helpText: 'Keep it short and specific.',
    name: 'comment',
    placeholder: 'Write a note',
    rows: 3,
    maxRows: 6,
    maxLength: 120,
    value: '',
  },
  option: {
    value: 'apple',
    checked: true,
  },
  radio: {
    value: 'standard',
    checked: true,
  },
  radioGroup: {
    name: 'plan',
    selectedValues: 'team',
    optionItems: [
      { value: 'starter', label: 'Starter' },
      { value: 'team', label: 'Team' },
      { value: 'enterprise', label: 'Enterprise' },
    ],
  },
  listbox: {
    label: 'Fruit',
    helpText: 'Choose one option.',
    name: 'fruit',
    selectedValues: 'apple',
    optionItems: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'carrot', label: 'Carrot' },
      { value: 'date', label: 'Date' },
    ],
  },
  select: {
    selectedValues: 'apple',
    optionItems: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'carrot', label: 'Carrot' },
      { value: 'date', label: 'Date' },
    ],
  },
  combobox: {
    label: 'Fruit',
    helpText: 'Type to filter options.',
    name: 'fruit',
    showAllOnEmpty: true,
    selectedValues: 'apple',
    optionItems: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'carrot', label: 'Carrot' },
      { value: 'date', label: 'Date' },
    ],
  },
  form: {
    label: 'Feedback',
    helpText: 'Share enough detail to act on.',
    name: 'feedback',
  },
};

const metadataTypeHeader = `// Generated by packages/storybook-fixtures/scripts/generate-controls-metadata.js.
// Do not edit directly. Run \`pnpm storybook:controls:generate\` after component API changes.

export type CobaltControlType = 'boolean' | 'number' | 'object' | 'select' | 'text';

export type CobaltApiProp = {
  name: string;
  attribute: string;
  type: string;
  control: CobaltControlType;
  defaultValue?: unknown;
  options?: readonly string[];
  description?: string;
};

export type CobaltApiSlot = {
  name: string;
  argName: string;
  label: string;
  defaultValue?: string;
  description?: string;
};

export type CobaltApiEvent = {
  name: string;
  argName: string;
  angularName: string;
  description?: string;
};

export type CobaltComponentMetadata = {
  id: string;
  title: string;
  tagName: string;
  importName: string;
  componentPath: string;
  props: readonly CobaltApiProp[];
  slots: readonly CobaltApiSlot[];
  events: readonly CobaltApiEvent[];
  playgroundDefaults: Record<string, unknown>;
};

`;

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function readSource(path) {
  return readFileSync(resolve(repoRoot, path), 'utf8');
}

function createSourceFile(path) {
  return ts.createSourceFile(
    path,
    readSource(path),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
}

function toKebabCase(value) {
  return value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function toPascalCase(value) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function eventArgName(eventName) {
  return `on${toPascalCase(eventName)}`;
}

function getComponentDeclaration(manifest, tagName) {
  for (const module of manifest.modules ?? []) {
    for (const declaration of module.declarations ?? []) {
      if (declaration.tagName === tagName) {
        return declaration;
      }
    }
  }
  return undefined;
}

function collectUnionTypeAliases() {
  const sourcePaths = [
    'packages/components/src/components/button/co-button.ts',
    'packages/components/src/components/button-icon/co-button-icon.ts',
    'packages/components/src/components/checkbox/co-checkbox.ts',
    'packages/components/src/components/checkbox-group/co-checkbox-group.ts',
    'packages/components/src/components/checkbox-indeterminate/co-checkbox-indeterminate.ts',
    'packages/components/src/components/combobox/co-combobox.ts',
    'packages/components/src/components/icon/co-icon.ts',
    'packages/components/src/components/input/co-input.ts',
    'packages/components/src/components/listbox/co-listbox.ts',
    'packages/components/src/components/radio/co-radio.ts',
    'packages/components/src/components/radio-group/co-radio-group.ts',
    'packages/components/src/components/select/co-select.ts',
    'packages/components/src/components/textarea/co-textarea.ts',
  ];
  const aliases = new Map();

  for (const path of sourcePaths) {
    const sourceFile = createSourceFile(path);
    visit(sourceFile);
  }

  function visit(node) {
    if (ts.isTypeAliasDeclaration(node) && ts.isUnionTypeNode(node.type)) {
      const options = node.type.types
        .map((typeNode) => {
          if (ts.isLiteralTypeNode(typeNode) && ts.isStringLiteral(typeNode.literal)) {
            return typeNode.literal.text;
          }
          return undefined;
        })
        .filter(Boolean);

      if (options.length > 0) {
        aliases.set(node.name.text, options);
      }
    }
    ts.forEachChild(node, visit);
  }

  return aliases;
}

function extractStringLiteralOptions(typeText, aliases) {
  if (!typeText) return undefined;
  if (aliases.has(typeText)) return aliases.get(typeText);

  const matches = [...typeText.matchAll(/'([^']+)'/g)].map((match) => match[1]);
  return matches.length > 0 ? matches : undefined;
}

function inferControl(typeText, options) {
  if (options?.length) return 'select';

  const normalized = typeText?.replace(/\s+/g, ' ') ?? '';
  if (/\bboolean\b/.test(normalized)) return 'boolean';
  if (/\bnumber\b/.test(normalized)) return 'number';
  if (/\bunknown\b|\bobject\b|\[\]|Record<|\bArray</.test(normalized)) return 'object';
  return 'text';
}

function parseDefaultExpression(expression) {
  if (!expression) return undefined;
  if (ts.isStringLiteral(expression)) return expression.text;
  if (expression.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (expression.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (expression.kind === ts.SyntaxKind.NullKeyword) return null;
  if (ts.isNumericLiteral(expression)) return Number(expression.text);
  if (ts.isIdentifier(expression) && expression.text === 'undefined') return undefined;
  return undefined;
}

function parseManifestDefault(value) {
  if (value === undefined || value === '') return undefined;
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^'.*'$/.test(value) || /^".*"$/.test(value)) return value.slice(1, -1);
  if (!Number.isNaN(Number(value))) return Number(value);
  return undefined;
}

function inferTypeFromDefault(defaultValue) {
  if (typeof defaultValue === 'boolean') return 'boolean';
  if (typeof defaultValue === 'number') return 'number';
  if (typeof defaultValue === 'string') return 'string';
  return 'unknown';
}

function extractAngularApi(config, aliases) {
  const sourceFile = createSourceFile(config.angularSource);
  const props = [];
  const events = [];

  function visit(node) {
    if (!ts.isClassDeclaration(node) || node.name?.text !== config.className) {
      ts.forEachChild(node, visit);
      return;
    }

    for (const member of node.members) {
      if (!ts.isPropertyDeclaration(member) || !ts.isIdentifier(member.name)) continue;
      if (!member.initializer || !ts.isCallExpression(member.initializer)) continue;

      const propertyName = member.name.text;
      const callName = member.initializer.expression.getText(sourceFile);
      if (callName !== 'input' && callName !== 'output') continue;

      if (callName === 'input') {
        const explicitType = member.initializer.typeArguments?.[0]?.getText(sourceFile);
        const defaultValue = parseDefaultExpression(member.initializer.arguments[0]);
        const type = explicitType ?? inferTypeFromDefault(defaultValue);
        const override = propOverrides[config.id]?.[propertyName] ?? {};
        const options = override.options ?? extractStringLiteralOptions(type, aliases);

        props.push(
          compactObject({
            name: propertyName,
            attribute: toKebabCase(propertyName),
            type,
            control: inferControl(type, options),
            defaultValue,
            options,
          }),
        );
      } else {
        const eventName = toKebabCase(propertyName);
        events.push({
          name: eventName,
          argName: eventArgName(eventName),
          angularName: propertyName,
        });
      }
    }
  }

  visit(sourceFile);
  return { props, events };
}

function extractManifestApi(declaration, aliases) {
  const membersByName = new Map(
    (declaration.members ?? [])
      .filter((member) => member.kind === 'field' && member.privacy !== 'private')
      .map((member) => [member.name, member]),
  );

  const props = [];
  for (const attribute of declaration.attributes ?? []) {
    const member = membersByName.get(attribute.fieldName);
    const type = attribute.type?.text ?? member?.type?.text ?? 'unknown';
    const options = extractStringLiteralOptions(type, aliases);
    props.push(
      compactObject({
        name: attribute.fieldName,
        attribute: attribute.name,
        type,
        control: inferControl(type, options),
        defaultValue: parseManifestDefault(member?.default),
        options,
        description: attribute.description ?? member?.description,
      }),
    );
  }

  return {
    props,
    slots: declaration.slots ?? [],
    events: declaration.events ?? [],
  };
}

function mergeProps(config, wrapperProps, manifestProps) {
  const propsByName = new Map(wrapperProps.map((prop) => [prop.name, { ...prop }]));

  for (const manifestProp of manifestProps) {
    const existing = propsByName.get(manifestProp.name);
    if (existing) {
      propsByName.set(
        manifestProp.name,
        compactObject({
          ...existing,
          attribute: manifestProp.attribute ?? existing.attribute,
          type: existing.type === 'unknown' ? manifestProp.type : existing.type,
          control: existing.control === 'object' ? manifestProp.control : existing.control,
          defaultValue:
            existing.defaultValue === undefined ? manifestProp.defaultValue : existing.defaultValue,
          options: existing.options ?? manifestProp.options,
          description: manifestProp.description ?? existing.description,
        }),
      );
      continue;
    }

    propsByName.set(manifestProp.name, manifestProp);
  }

  const overrides = propOverrides[config.id] ?? {};
  return [...propsByName.values()].map((prop) => {
    const override = overrides[prop.name] ?? {};
    const options = override.options ?? prop.options;
    return compactObject({
      ...prop,
      ...override,
      options,
      control: override.control ?? inferControl(prop.type, options),
    });
  });
}

function mergeSlots(config, manifestSlots) {
  const descriptionsByName = new Map(
    manifestSlots
      .map((slot) => [slot.name ?? '', slot.description])
      .filter(([, description]) => description),
  );

  return (slotControls[config.id] ?? []).map((slot) =>
    compactObject({
      ...slot,
      description: descriptionsByName.get(slot.name),
    }),
  );
}

function mergeEvents(wrapperEvents, manifestEvents) {
  const descriptionsByName = new Map(
    manifestEvents
      .map((event) => [event.name, event.description])
      .filter(([, description]) => description),
  );

  return wrapperEvents.map((event) =>
    compactObject({
      ...event,
      description: descriptionsByName.get(event.name),
    }),
  );
}

function compactObject(object) {
  return Object.fromEntries(Object.entries(object).filter(([, value]) => value !== undefined));
}

function createMetadata() {
  const manifest = readJson(manifestPath);
  const aliases = collectUnionTypeAliases();
  const metadata = {};
  const missingTags = [];

  for (const config of componentConfigs) {
    const declaration = getComponentDeclaration(manifest, config.tagName);
    if (!declaration) {
      missingTags.push(config.tagName);
      continue;
    }

    const wrapperApi = extractAngularApi(config, aliases);
    const manifestApi = extractManifestApi(declaration, aliases);

    metadata[config.id] = {
      id: config.id,
      title: config.title,
      tagName: config.tagName,
      importName: config.importName,
      componentPath: config.componentPath,
      props: mergeProps(config, wrapperApi.props, manifestApi.props),
      slots: mergeSlots(config, manifestApi.slots),
      events: mergeEvents(wrapperApi.events, manifestApi.events),
      playgroundDefaults: playgroundDefaults[config.id] ?? {},
    };
  }

  if (missingTags.length > 0) {
    throw new Error(
      `custom-elements.json is missing expected tags: ${missingTags.join(', ')}. Run pnpm --filter @cobalt/components analyze.`,
    );
  }

  return metadata;
}

function renderFile(metadata) {
  return `${metadataTypeHeader}export const cobaltComponentMetadata = ${JSON.stringify(
    metadata,
    null,
    2,
  )} as const satisfies Record<string, CobaltComponentMetadata>;
`;
}

const prettierConfig = (await resolveConfig(outputPath)) ?? {};
const generated = await format(renderFile(createMetadata()), {
  ...prettierConfig,
  parser: 'typescript',
});

if (checkMode) {
  if (!existsSync(outputPath)) {
    throw new Error(`Missing generated controls metadata: ${outputPath}`);
  }

  const existing = readFileSync(outputPath, 'utf8');
  if (existing !== generated) {
    throw new Error(
      'Storybook controls metadata is out of date. Run pnpm storybook:controls:generate.',
    );
  }
} else {
  writeFileSync(outputPath, generated);
}
