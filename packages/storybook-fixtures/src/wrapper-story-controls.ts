import {
  cobaltComponentMetadata,
  type CobaltApiProp,
  type CobaltComponentMetadata,
} from './api-metadata.js';

export type WrapperStoryComponentId = keyof typeof cobaltComponentMetadata;
export type WrapperStoryArgs = Record<string, unknown>;
export type WrapperStoryOptionItem = {
  value: string;
  label: string;
  disabled?: boolean;
};

const noop = () => {};

export function getWrapperStoryMetadata(
  componentId: WrapperStoryComponentId,
): CobaltComponentMetadata {
  return cobaltComponentMetadata[componentId];
}

export function getWrapperStoryArgs(componentId: WrapperStoryComponentId): WrapperStoryArgs {
  const metadata = getWrapperStoryMetadata(componentId);
  const args: WrapperStoryArgs = {};

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

export function getWrapperStoryArgTypes(componentId: WrapperStoryComponentId): WrapperStoryArgs {
  const metadata = getWrapperStoryMetadata(componentId);
  const argTypes: WrapperStoryArgs = {};

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
      description: 'Option records rendered as child wrapper components.',
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

export function getWrapperStoryComponentProps(
  componentId: WrapperStoryComponentId,
  args: WrapperStoryArgs,
): WrapperStoryArgs {
  const props: WrapperStoryArgs = {};

  for (const prop of getWrapperStoryMetadata(componentId).props) {
    if (args[prop.name] !== undefined) {
      props[prop.name] = args[prop.name];
    }
  }

  return props;
}

export function getWrapperStoryEventProps(
  componentId: WrapperStoryComponentId,
  args: WrapperStoryArgs,
) {
  const props: Record<string, (event: Event) => void> = {};

  for (const event of getWrapperStoryMetadata(componentId).events) {
    const handler = args[event.argName];
    props[event.argName] =
      typeof handler === 'function' ? (handler as (event: Event) => void) : noop;
  }

  return props;
}

export function getWrapperStorySlotValue(
  componentId: WrapperStoryComponentId,
  slotName: string,
  args: WrapperStoryArgs,
): string {
  const slot = getWrapperStoryMetadata(componentId).slots.find((item) => item.name === slotName);
  if (!slot) return '';
  const value = args[slot.argName];
  return typeof value === 'string' ? value : '';
}

export function getWrapperStoryOptionItems(
  componentId: WrapperStoryComponentId,
  args: WrapperStoryArgs,
): WrapperStoryOptionItem[] {
  const rawItems =
    args.optionItems ?? getWrapperStoryMetadata(componentId).playgroundDefaults.optionItems;
  const parsedItems = typeof rawItems === 'string' ? parseOptionItems(rawItems) : rawItems;

  if (!Array.isArray(parsedItems)) return [];

  const optionItems: WrapperStoryOptionItem[] = [];

  for (const item of parsedItems) {
    if (!item || typeof item !== 'object') continue;
    const candidate = item as Record<string, unknown>;
    if (typeof candidate.value !== 'string' || typeof candidate.label !== 'string') continue;

    optionItems.push({
      value: candidate.value,
      label: candidate.label,
      disabled: candidate.disabled === true,
    });
  }

  return optionItems;
}

export function getWrapperStorySelectedValues(args: WrapperStoryArgs): string[] {
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

function parseOptionItems(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}
