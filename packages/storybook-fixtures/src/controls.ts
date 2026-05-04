import {
  cobaltComponentMetadata,
  type CobaltApiProp,
  type CobaltComponentMetadata,
} from './api-metadata.js';
import { getStorybookScenario } from './scenarios.js';

export type CobaltComponentId = keyof typeof cobaltComponentMetadata;
export type CobaltStoryArgs = Record<string, unknown>;
export type CobaltOptionItem = {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: string;
};

const noop = () => {};

export function getComponentMetadata(componentId: CobaltComponentId): CobaltComponentMetadata {
  return cobaltComponentMetadata[componentId];
}

export function getPlaygroundArgs(componentId: CobaltComponentId): CobaltStoryArgs {
  const metadata = getComponentMetadata(componentId);
  const args: CobaltStoryArgs = {};

  for (const prop of metadata.props) {
    if ('defaultValue' in prop) {
      args[prop.name] = prop.defaultValue;
    }
  }

  for (const slot of metadata.slots) {
    if ('defaultValue' in slot) {
      args[slot.argName] = slot.defaultValue;
    }
  }

  return {
    ...args,
    ...metadata.playgroundDefaults,
  };
}

export function getScenarioArgs(
  componentId: CobaltComponentId,
  scenarioId: string,
): CobaltStoryArgs {
  const scenario = getStorybookScenario(componentId, scenarioId);

  return {
    ...getPlaygroundArgs(componentId),
    ...(scenario?.args ?? {}),
  };
}

export function getPlaygroundArgTypes(componentId: CobaltComponentId): CobaltStoryArgs {
  const metadata = getComponentMetadata(componentId);
  const argTypes: CobaltStoryArgs = {};

  for (const prop of metadata.props) {
    argTypes[prop.name] = getPropArgType(prop);
  }

  for (const slot of metadata.slots) {
    argTypes[slot.argName] = {
      name: slot.label,
      description: slot.description,
      control: { type: 'text' },
      table: {
        category: 'Slots',
        defaultValue: slot.defaultValue ? { summary: slot.defaultValue } : undefined,
      },
    };
  }

  for (const event of metadata.events) {
    argTypes[event.argName] = {
      action: event.name,
      control: false,
      description: event.description,
      table: {
        category: 'Events',
        type: { summary: event.name },
      },
    };
  }

  if ('optionItems' in metadata.playgroundDefaults) {
    argTypes.optionItems = {
      control: { type: 'object' },
      description: 'Option records rendered as child co-option elements.',
      table: {
        category: 'Children',
        type: { summary: 'Array<{ value: string; label: string; disabled?: boolean }>' },
      },
    };
  }

  if ('selectedValues' in metadata.playgroundDefaults) {
    argTypes.selectedValues = {
      control: { type: 'text' },
      description: 'Comma-separated option values to mark checked.',
      table: {
        category: 'Children',
        type: { summary: 'string' },
      },
    };
  }

  return argTypes;
}

export function getComponentProps(
  componentId: CobaltComponentId,
  args: CobaltStoryArgs,
): CobaltStoryArgs {
  const props: CobaltStoryArgs = {};

  for (const prop of getComponentMetadata(componentId).props) {
    if (args[prop.name] !== undefined) {
      props[prop.name] = args[prop.name];
    }
  }

  return props;
}

export function getEventProps(componentId: CobaltComponentId, args: CobaltStoryArgs) {
  const props: Record<string, (event: Event) => void> = {};

  for (const event of getComponentMetadata(componentId).events) {
    const handler = args[event.argName];
    props[event.argName] =
      typeof handler === 'function' ? (handler as (event: Event) => void) : noop;
  }

  return props;
}

export function getSlotValue(
  componentId: CobaltComponentId,
  slotName: string,
  args: CobaltStoryArgs,
): string {
  const slot = getComponentMetadata(componentId).slots.find((item) => item.name === slotName);
  if (!slot) return '';
  const value = args[slot.argName];
  return typeof value === 'string' ? value : '';
}

export function getOptionItems(
  componentId: CobaltComponentId,
  args: CobaltStoryArgs,
): CobaltOptionItem[] {
  const rawItems =
    args.optionItems ?? getComponentMetadata(componentId).playgroundDefaults.optionItems;
  const parsedItems = typeof rawItems === 'string' ? parseOptionItems(rawItems) : rawItems;

  if (!Array.isArray(parsedItems)) return [];

  const optionItems: CobaltOptionItem[] = [];

  for (const item of parsedItems) {
    if (!item || typeof item !== 'object') continue;
    const candidate = item as Record<string, unknown>;
    if (typeof candidate.value !== 'string' || typeof candidate.label !== 'string') continue;

    optionItems.push({
      value: candidate.value,
      label: candidate.label,
      disabled: candidate.disabled === true,
      icon: typeof candidate.icon === 'string' ? candidate.icon : undefined,
    });
  }

  return optionItems;
}

export function getSelectedValues(args: CobaltStoryArgs): string[] {
  const rawValue = args.selectedValues;

  if (Array.isArray(rawValue)) {
    return rawValue.map(String);
  }

  if (typeof rawValue !== 'string') {
    return [];
  }

  return rawValue
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
}

export function isSelectedValue(value: string, args: CobaltStoryArgs): boolean {
  return getSelectedValues(args).includes(value);
}

export function createWebComponentPlayground(
  componentId: CobaltComponentId,
  args: CobaltStoryArgs,
): HTMLElement {
  const root = document.createElement('div');
  root.className = 'cobalt-story cobalt-stack';

  const section = document.createElement('section');
  section.className = 'cobalt-section';

  const surface = document.createElement('div');
  surface.className =
    componentId === 'button' || componentId === 'icon' ? 'cobalt-row' : 'cobalt-grid';
  surface.append(createWebComponent(componentId, args));

  section.append(surface);
  root.append(section);
  return root;
}

function getPropArgType(prop: CobaltApiProp) {
  return {
    control: { type: prop.control },
    options: prop.options,
    description: prop.description,
    table: {
      category: 'Props',
      type: { summary: prop.type },
      defaultValue: 'defaultValue' in prop ? { summary: String(prop.defaultValue) } : undefined,
    },
  };
}

function createWebComponent(componentId: CobaltComponentId, args: CobaltStoryArgs): HTMLElement {
  switch (componentId) {
    case 'appShell':
      return createAppShell(args);
    case 'banner':
      return createBanner(args);
    case 'button':
      return createButton(args);
    case 'buttonIcon':
      return configureElement(document.createElement('co-button-icon'), componentId, args);
    case 'card':
      return createCard(args);
    case 'checkbox':
      return createChoice('co-checkbox', componentId, args);
    case 'checkboxGroup':
      return createCheckboxGroup(args);
    case 'checkboxIndeterminate':
      return createCheckboxIndeterminate(args);
    case 'icon':
      return configureElement(document.createElement('co-icon'), componentId, args);
    case 'input':
      return createField('co-input', componentId, args);
    case 'inputPill':
      return createInputPill(args);
    case 'label':
      return createLabel(args);
    case 'textarea':
      return createField('co-textarea', componentId, args);
    case 'option':
      return createOptionPreview(args);
    case 'navDrawer':
      return createNavDrawer(args);
    case 'navDrawerItem':
      return createNavDrawerItemPreview(args);
    case 'navHeaderBar':
      return createNavHeaderBar(args);
    case 'navRailBar':
      return createNavRailBar(args);
    case 'navRailItem':
      return createNavRailItemPreview(args);
    case 'navSeparator':
      return createNavSeparatorPreview();
    case 'radio':
      return createChoice('co-radio', componentId, args);
    case 'radioGroup':
      return createRadioGroup(args);
    case 'listbox':
      return createOptionContainer('co-listbox', componentId, args);
    case 'select':
      return createOptionContainer('co-select', componentId, args);
    case 'combobox':
      return createOptionContainer('co-combobox', componentId, args);
    case 'form':
      return createForm(args);
  }
}

function createAppShell(args: CobaltStoryArgs): HTMLElement {
  const shell = configureElement(document.createElement('co-app-shell'), 'appShell', args);
  shell.style.blockSize = '620px';
  shell.append(createBannerSlot(args));
  shell.append(createHeaderSlot(args));
  shell.append(createRailBar(args));
  shell.append(createDrawer(args));

  const body = document.createElement('co-card');
  body.slot = 'body';
  setElementProperty(body, 'label', 'Dashboard content');
  appendTextSlot(body, 'header', getSlotValue('appShell', 'body', args));

  const content = document.createElement('div');
  content.className = 'cobalt-stack';
  content.textContent =
    'Use the shell to compose persistent navigation, responsive drawer behavior, and page content.';
  body.append(content);
  shell.append(body);

  appendTextSlot(shell, 'footer', getSlotValue('appShell', 'footer', args));
  return shell;
}

function createBanner(args: CobaltStoryArgs): HTMLElement {
  const banner = configureElement(document.createElement('co-banner'), 'banner', args);
  appendTextSlot(banner, 'title', getSlotValue('banner', 'title', args));
  appendTextSlot(banner, '', getSlotValue('banner', '', args));
  return banner;
}

function createButton(args: CobaltStoryArgs): HTMLElement {
  const button = configureElement(document.createElement('co-button'), 'button', args);
  appendIconSlot(button, 'prefix', getSlotValue('button', 'prefix', args));
  button.append(getSlotValue('button', '', args) || 'Button');
  appendIconSlot(button, 'suffix', getSlotValue('button', 'suffix', args));
  return button;
}

function createCard(args: CobaltStoryArgs): HTMLElement {
  const card = configureElement(document.createElement('co-card'), 'card', args);
  card.className = 'cobalt-panel';
  appendTextSlot(card, 'header', getSlotValue('card', 'header', args));
  appendTextSlot(card, '', getSlotValue('card', '', args));
  appendTextSlot(card, 'footer', getSlotValue('card', 'footer', args));
  return card;
}

function createChoice(
  tagName: 'co-checkbox' | 'co-radio',
  componentId: 'checkbox' | 'radio',
  args: CobaltStoryArgs,
): HTMLElement {
  const choice = configureElement(document.createElement(tagName), componentId, args);
  choice.append(getSlotValue(componentId, '', args) || getComponentMetadata(componentId).title);
  return choice;
}

function createCheckboxGroup(args: CobaltStoryArgs): HTMLElement {
  const group = createChoiceGroup('co-checkbox-group', 'checkboxGroup', args);

  for (const item of getOptionItems('checkboxGroup', args)) {
    const checkbox = document.createElement('co-checkbox');
    setElementProperty(checkbox, 'value', item.value);
    setElementProperty(checkbox, 'checked', isSelectedValue(item.value, args));
    setElementProperty(checkbox, 'disabled', item.disabled === true);
    checkbox.append(item.label);
    group.append(checkbox);
  }

  return group;
}

function createCheckboxIndeterminate(args: CobaltStoryArgs): HTMLElement {
  const checkbox = configureElement(
    document.createElement('co-checkbox-indeterminate'),
    'checkboxIndeterminate',
    args,
  );
  appendTextSlot(checkbox, 'label', getSlotValue('checkboxIndeterminate', 'label', args));

  for (const item of getOptionItems('checkboxIndeterminate', args)) {
    const child = document.createElement('co-checkbox');
    setElementProperty(child, 'value', item.value);
    setElementProperty(child, 'checked', isSelectedValue(item.value, args));
    setElementProperty(child, 'disabled', item.disabled === true);
    child.append(item.label);
    checkbox.append(child);
  }

  return checkbox;
}

function createRadioGroup(args: CobaltStoryArgs): HTMLElement {
  const group = createChoiceGroup('co-radio-group', 'radioGroup', args);

  for (const item of getOptionItems('radioGroup', args)) {
    const radio = document.createElement('co-radio');
    setElementProperty(radio, 'value', item.value);
    setElementProperty(radio, 'checked', isSelectedValue(item.value, args));
    setElementProperty(radio, 'disabled', item.disabled === true);
    radio.append(item.label);
    group.append(radio);
  }

  return group;
}

function createChoiceGroup(
  tagName: 'co-checkbox-group' | 'co-radio-group',
  componentId: 'checkboxGroup' | 'radioGroup',
  args: CobaltStoryArgs,
): HTMLElement {
  const group = configureElement(document.createElement(tagName), componentId, args);
  appendTextSlot(group, 'label', getSlotValue(componentId, 'label', args));
  appendTextSlot(group, 'help-text', getSlotValue(componentId, 'help-text', args));
  appendTextSlot(group, 'feedback', getSlotValue(componentId, 'feedback', args));
  return group;
}

function createField(
  tagName: 'co-input' | 'co-textarea',
  componentId: 'input' | 'textarea',
  args: CobaltStoryArgs,
): HTMLElement {
  const field = configureElement(document.createElement(tagName), componentId, args);
  appendIconSlot(field, 'prefix', getSlotValue(componentId, 'prefix', args));
  appendIconSlot(field, 'suffix', getSlotValue(componentId, 'suffix', args));
  appendTextSlot(field, 'feedback', getSlotValue(componentId, 'feedback', args));
  return field;
}

function createInputPill(args: CobaltStoryArgs): HTMLElement {
  const input = configureElement(document.createElement('co-input-pill'), 'inputPill', args);
  appendIconSlot(input, 'prefix', getSlotValue('inputPill', 'prefix', args));
  appendIconSlot(input, 'suffix', getSlotValue('inputPill', 'suffix', args));
  return input;
}

function createLabel(args: CobaltStoryArgs): HTMLElement {
  const label = configureElement(document.createElement('co-label'), 'label', args);
  appendIconSlot(label, 'prefix', getSlotValue('label', 'prefix', args));
  label.append(getSlotValue('label', '', args) || 'Label');
  appendIconSlot(label, 'suffix', getSlotValue('label', 'suffix', args));
  return label;
}

function createOptionPreview(args: CobaltStoryArgs): HTMLElement {
  const listbox = document.createElement('co-listbox');
  setElementProperty(listbox, 'label', 'Option preview');
  setElementProperty(listbox, 'name', 'option-preview');

  const option = configureElement(document.createElement('co-option'), 'option', args);
  appendIconSlot(option, 'indicator-icon', getSlotValue('option', 'indicator-icon', args));
  appendTextSlot(option, 'indicator', getSlotValue('option', 'indicator', args));
  option.append(getSlotValue('option', '', args) || 'Option');
  listbox.append(option);
  return listbox;
}

function createOptionContainer(
  tagName: 'co-listbox' | 'co-select' | 'co-combobox',
  componentId: 'listbox' | 'select' | 'combobox',
  args: CobaltStoryArgs,
): HTMLElement {
  const container = configureElement(document.createElement(tagName), componentId, args);

  if (componentId === 'select') {
    appendTextSlot(container, 'label', getSlotValue(componentId, 'label', args));
    appendTextSlot(container, 'help-text', getSlotValue(componentId, 'help-text', args));
  } else {
    appendIconSlot(container, 'prefix', getSlotValue(componentId, 'prefix', args));
    appendIconSlot(container, 'suffix', getSlotValue(componentId, 'suffix', args));
  }

  appendTextSlot(container, 'feedback', getSlotValue(componentId, 'feedback', args));

  for (const item of getOptionItems(componentId, args)) {
    const option = document.createElement('co-option');
    setElementProperty(option, 'value', item.value);
    setElementProperty(option, 'checked', isSelectedValue(item.value, args));
    setElementProperty(option, 'disabled', item.disabled === true);
    option.append(item.label);
    container.append(option);
  }

  return container;
}

function createForm(args: CobaltStoryArgs): HTMLElement {
  const form = configureElement(document.createElement('co-form'), 'form', args);
  form.className = 'cobalt-panel';
  appendTextSlot(form, 'feedback', getSlotValue('form', 'feedback', args));

  const stack = document.createElement('div');
  stack.className = 'cobalt-stack';

  const name = document.createElement('co-input');
  setElementProperty(name, 'label', 'Name');
  setElementProperty(name, 'name', 'name');
  setElementProperty(name, 'required', true);
  setElementProperty(name, 'placeholder', 'Ada Lovelace');

  const message = document.createElement('co-textarea');
  setElementProperty(message, 'label', 'Message');
  setElementProperty(message, 'name', 'message');
  setElementProperty(message, 'rows', 4);
  setElementProperty(message, 'placeholder', 'Write a message');

  const actions = document.createElement('div');
  actions.className = 'cobalt-form-row';

  const submit = document.createElement('co-button');
  setElementProperty(submit, 'type', 'submit');
  setElementProperty(submit, 'variant', 'primary');
  submit.append('Submit');

  const reset = document.createElement('co-button');
  setElementProperty(reset, 'type', 'reset');
  setElementProperty(reset, 'variant', 'secondary');
  reset.append('Reset');

  actions.append(submit, reset);
  stack.append(name, message, actions);
  form.append(stack);
  return form;
}

function createNavDrawer(args: CobaltStoryArgs): HTMLElement {
  return createDrawer(args);
}

function createNavDrawerItemPreview(args: CobaltStoryArgs): HTMLElement {
  const drawer = document.createElement('co-nav-drawer');
  setElementProperty(drawer, 'label', 'Drawer item preview');
  drawer.append(createNavDrawerItem(args));
  return drawer;
}

function createNavHeaderBar(args: CobaltStoryArgs): HTMLElement {
  const header = configureElement(
    document.createElement('co-nav-header-bar'),
    'navHeaderBar',
    args,
  );
  appendTextSlot(header, 'logo', getSlotValue('navHeaderBar', 'logo', args));

  const content = document.createElement('div');
  content.className = 'cobalt-form-row';
  for (const label of ['Overview', 'Reports', 'Settings']) {
    const button = document.createElement('co-button');
    setElementProperty(button, 'variant', 'ghost');
    setElementProperty(button, 'size', 'sm');
    button.append(label);
    content.append(button);
  }
  header.append(content);

  appendTextSlot(header, 'avatar', getSlotValue('navHeaderBar', 'avatar', args));
  return header;
}

function createNavRailBar(args: CobaltStoryArgs): HTMLElement {
  return createRailBar(args);
}

function createNavRailItemPreview(args: CobaltStoryArgs): HTMLElement {
  const rail = document.createElement('co-nav-rail-bar');
  setElementProperty(rail, 'label', 'Rail item preview');
  rail.append(createNavRailItem(args));
  return rail;
}

function createNavSeparatorPreview(): HTMLElement {
  const drawer = document.createElement('co-nav-drawer');
  setElementProperty(drawer, 'label', 'Separator preview');
  drawer.append(createDrawerItem('overview', 'Overview', 'home', true));
  drawer.append(document.createElement('co-nav-separator'));
  drawer.append(createDrawerItem('settings', 'Settings', 'settings', false));
  return drawer;
}

function createBannerSlot(args: CobaltStoryArgs): HTMLElement {
  const banner = document.createElement('co-banner');
  banner.slot = 'banner';
  appendTextSlot(banner, 'title', getSlotValue('appShell', 'banner', args));
  appendTextSlot(banner, '', 'Previewing the responsive application frame.');
  return banner;
}

function createHeaderSlot(args: CobaltStoryArgs): HTMLElement {
  const header = document.createElement('co-nav-header-bar');
  header.slot = 'topnav';
  setElementProperty(header, 'label', 'Application header');
  appendTextSlot(header, 'logo', getSlotValue('appShell', 'topnav', args));

  const search = document.createElement('co-input-pill');
  setElementProperty(search, 'variant', 'search');
  setElementProperty(search, 'placeholder', 'Search');
  header.append(search);
  return header;
}

function createDrawer(args: CobaltStoryArgs): HTMLElement {
  const drawer = configureElement(document.createElement('co-nav-drawer'), 'navDrawer', args);
  for (const item of getOptionItems('navDrawer', args)) {
    drawer.append(
      createDrawerItem(
        item.value,
        item.label,
        item.icon ?? 'home',
        isSelectedValue(item.value, args),
      ),
    );
  }
  drawer.append(document.createElement('co-nav-separator'));
  drawer.append(createDrawerItem('help', 'Help', 'info', false));
  return drawer;
}

function createRailBar(args: CobaltStoryArgs): HTMLElement {
  const rail = configureElement(document.createElement('co-nav-rail-bar'), 'navRailBar', args);
  for (const item of getOptionItems('navRailBar', args)) {
    rail.append(
      createRailItem(
        item.value,
        item.label,
        item.icon ?? 'home',
        isSelectedValue(item.value, args),
      ),
    );
  }
  return rail;
}

function createNavDrawerItem(args: CobaltStoryArgs): HTMLElement {
  const item = configureElement(
    document.createElement('co-nav-drawer-item'),
    'navDrawerItem',
    args,
  );
  appendIconSlot(item, 'prefix', getSlotValue('navDrawerItem', 'prefix', args));
  item.append(getSlotValue('navDrawerItem', '', args) || 'Navigation item');
  return item;
}

function createNavRailItem(args: CobaltStoryArgs): HTMLElement {
  const item = configureElement(document.createElement('co-nav-rail-item'), 'navRailItem', args);
  appendIconSlot(item, 'icon', getSlotValue('navRailItem', 'icon', args));
  item.append(getSlotValue('navRailItem', '', args) || 'Navigation item');
  return item;
}

function createDrawerItem(value: string, label: string, icon: string, selected: boolean) {
  const item = document.createElement('co-nav-drawer-item');
  setElementProperty(item, 'value', value);
  setElementProperty(item, 'icon', icon);
  setElementProperty(item, 'selected', selected);
  item.append(label);
  return item;
}

function createRailItem(value: string, label: string, icon: string, selected: boolean) {
  const item = document.createElement('co-nav-rail-item');
  setElementProperty(item, 'value', value);
  setElementProperty(item, 'icon', icon);
  setElementProperty(item, 'selected', selected);
  item.append(label);
  return item;
}

function configureElement<T extends HTMLElement>(
  element: T,
  componentId: CobaltComponentId,
  args: CobaltStoryArgs,
): T {
  const props = getComponentProps(componentId, args);

  for (const [name, value] of Object.entries(props)) {
    setElementProperty(element, name, value);
  }

  for (const event of getComponentMetadata(componentId).events) {
    const handler = args[event.argName];
    if (typeof handler === 'function') {
      element.addEventListener(event.name, handler as EventListener);
    }
  }

  return element;
}

function appendIconSlot(parent: HTMLElement, slotName: string, iconName: string) {
  if (!iconName) return;

  const icon = document.createElement('co-icon');
  icon.slot = slotName;
  setElementProperty(icon, 'name', iconName);
  setElementProperty(icon, 'size', 'sm');
  parent.append(icon);
}

function appendTextSlot(parent: HTMLElement, slotName: string, value: string) {
  if (!value) return;

  const span = document.createElement('span');
  span.slot = slotName;
  span.textContent = value;
  parent.append(span);
}

function parseOptionItems(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}

function setElementProperty(element: HTMLElement, name: string, value: unknown) {
  (element as unknown as Record<string, unknown>)[name] = value;
}
