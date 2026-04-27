import {
  getWrapperStoryComponentProps,
  getWrapperStoryMetadata,
  getWrapperStoryOptionItems,
  getWrapperStorySelectedValues,
  getWrapperStorySlotValue,
  type WrapperStoryArgs,
  type WrapperStoryComponentId,
} from './wrapper-story-controls.js';
import type { CobaltApiProp } from './wrapper-story-metadata.js';

type WrapperFramework = 'react' | 'vue';

type ActiveProp = CobaltApiProp & {
  value: unknown;
};

export function getReactWrapperStorySource(
  componentId: WrapperStoryComponentId,
  args: WrapperStoryArgs,
): string {
  return getWrapperFrameworkSource('react', componentId, args);
}

export function getVueWrapperStorySource(
  componentId: WrapperStoryComponentId,
  args: WrapperStoryArgs,
): string {
  return getWrapperFrameworkSource('vue', componentId, args);
}

export function getAngularWrapperStorySource(
  componentId: WrapperStoryComponentId,
  args: WrapperStoryArgs,
): string {
  switch (componentId) {
    case 'button':
      return renderAngularElement('co-button', getAngularPropLines(componentId, args), [
        renderAngularIconSlot('prefix', getWrapperStorySlotValue('button', 'prefix', args)),
        getWrapperStorySlotValue('button', '', args),
        renderAngularIconSlot('suffix', getWrapperStorySlotValue('button', 'suffix', args)),
      ]);
    case 'buttonIcon':
      return renderAngularElement('co-button-icon', getAngularPropLines(componentId, args));
    case 'checkbox':
      return renderAngularElement('co-checkbox', getAngularPropLines(componentId, args), [
        getWrapperStorySlotValue('checkbox', '', args),
      ]);
    case 'checkboxGroup':
      return renderAngularElement('co-checkbox-group', getAngularPropLines(componentId, args), [
        renderAngularTextSlot('label', getWrapperStorySlotValue('checkboxGroup', 'label', args)),
        renderAngularTextSlot(
          'help-text',
          getWrapperStorySlotValue('checkboxGroup', 'help-text', args),
        ),
        renderAngularTextSlot(
          'feedback',
          getWrapperStorySlotValue('checkboxGroup', 'feedback', args),
        ),
        ...getAngularChoiceChildren('co-checkbox', 'checkboxGroup', args),
      ]);
    case 'checkboxIndeterminate':
      return renderAngularElement(
        'co-checkbox-indeterminate',
        getAngularPropLines(componentId, args),
        [
          renderAngularTextSlot(
            'label',
            getWrapperStorySlotValue('checkboxIndeterminate', 'label', args),
          ),
          ...getAngularChoiceChildren('co-checkbox', 'checkboxIndeterminate', args),
        ],
      );
    case 'icon':
      return renderAngularElement('co-icon', getAngularPropLines(componentId, args));
    case 'input':
      return renderAngularElement('co-input', getAngularPropLines(componentId, args), [
        renderAngularIconSlot('prefix', getWrapperStorySlotValue('input', 'prefix', args)),
        renderAngularIconSlot('suffix', getWrapperStorySlotValue('input', 'suffix', args)),
        renderAngularTextSlot('feedback', getWrapperStorySlotValue('input', 'feedback', args)),
      ]);
    case 'textarea':
      return renderAngularElement('co-textarea', getAngularPropLines(componentId, args), [
        renderAngularIconSlot('prefix', getWrapperStorySlotValue('textarea', 'prefix', args)),
        renderAngularIconSlot('suffix', getWrapperStorySlotValue('textarea', 'suffix', args)),
        renderAngularTextSlot('feedback', getWrapperStorySlotValue('textarea', 'feedback', args)),
      ]);
    case 'option':
      return renderAngularElement(
        'co-listbox',
        ['label="Option preview"', 'name="option-preview"'],
        [
          renderAngularElement('co-option', getAngularPropLines(componentId, args), [
            renderAngularIconSlot(
              'indicator-icon',
              getWrapperStorySlotValue('option', 'indicator-icon', args),
            ),
            renderAngularTextSlot(
              'indicator',
              getWrapperStorySlotValue('option', 'indicator', args),
            ),
            getWrapperStorySlotValue('option', '', args),
          ]),
        ],
      );
    case 'radio':
      return renderAngularElement('co-radio', getAngularPropLines(componentId, args), [
        getWrapperStorySlotValue('radio', '', args),
      ]);
    case 'radioGroup':
      return renderAngularElement('co-radio-group', getAngularPropLines(componentId, args), [
        renderAngularTextSlot('label', getWrapperStorySlotValue('radioGroup', 'label', args)),
        renderAngularTextSlot(
          'help-text',
          getWrapperStorySlotValue('radioGroup', 'help-text', args),
        ),
        renderAngularTextSlot('feedback', getWrapperStorySlotValue('radioGroup', 'feedback', args)),
        ...getAngularChoiceChildren('co-radio', 'radioGroup', args),
      ]);
    case 'listbox':
      return renderAngularElement('co-listbox', getAngularPropLines(componentId, args), [
        renderAngularTextSlot('feedback', getWrapperStorySlotValue('listbox', 'feedback', args)),
        ...getAngularOptionChildren('listbox', args),
      ]);
    case 'select':
      return renderAngularElement('co-select', getAngularPropLines(componentId, args), [
        renderAngularTextSlot('label', getWrapperStorySlotValue('select', 'label', args)),
        renderAngularTextSlot('help-text', getWrapperStorySlotValue('select', 'help-text', args)),
        renderAngularTextSlot('feedback', getWrapperStorySlotValue('select', 'feedback', args)),
        ...getAngularOptionChildren('select', args),
      ]);
    case 'combobox':
      return renderAngularElement('co-combobox', getAngularPropLines(componentId, args), [
        renderAngularIconSlot('prefix', getWrapperStorySlotValue('combobox', 'prefix', args)),
        renderAngularIconSlot('suffix', getWrapperStorySlotValue('combobox', 'suffix', args)),
        renderAngularTextSlot('feedback', getWrapperStorySlotValue('combobox', 'feedback', args)),
        ...getAngularOptionChildren('combobox', args),
      ]);
    case 'form':
      return renderAngularElement('co-form', getAngularPropLines(componentId, args), [
        renderAngularTextSlot('feedback', getWrapperStorySlotValue('form', 'feedback', args)),
        `<div class="cobalt-stack">
  <co-input label="Name" name="name" [required]="true" placeholder="Ada Lovelace"></co-input>
  <co-textarea
    label="Message"
    name="message"
    [rows]="4"
    placeholder="Write a message"
  ></co-textarea>
  <div class="cobalt-form-row">
    <co-button type="submit" variant="primary">Submit</co-button>
    <co-button type="reset" variant="secondary">Reset</co-button>
  </div>
</div>`,
      ]);
  }
}

function getWrapperFrameworkSource(
  framework: WrapperFramework,
  componentId: WrapperStoryComponentId,
  args: WrapperStoryArgs,
): string {
  const tag = getWrapperStoryMetadata(componentId).importName;

  switch (componentId) {
    case 'button':
      return renderWrapperElement(
        framework,
        tag,
        getWrapperPropLines(framework, componentId, args),
        [
          renderWrapperIconSlot(
            framework,
            'prefix',
            getWrapperStorySlotValue('button', 'prefix', args),
          ),
          getWrapperStorySlotValue('button', '', args),
          renderWrapperIconSlot(
            framework,
            'suffix',
            getWrapperStorySlotValue('button', 'suffix', args),
          ),
        ],
      );
    case 'buttonIcon':
      return renderWrapperElement(
        framework,
        tag,
        getWrapperPropLines(framework, componentId, args),
      );
    case 'checkbox':
      return renderWrapperElement(
        framework,
        tag,
        getWrapperPropLines(framework, componentId, args),
        [getWrapperStorySlotValue('checkbox', '', args)],
      );
    case 'checkboxGroup':
      return renderWrapperElement(
        framework,
        tag,
        getWrapperPropLines(framework, componentId, args),
        [
          renderWrapperTextSlot(
            framework,
            'label',
            getWrapperStorySlotValue('checkboxGroup', 'label', args),
          ),
          renderWrapperTextSlot(
            framework,
            'help-text',
            getWrapperStorySlotValue('checkboxGroup', 'help-text', args),
          ),
          renderWrapperTextSlot(
            framework,
            'feedback',
            getWrapperStorySlotValue('checkboxGroup', 'feedback', args),
          ),
          ...getWrapperChoiceChildren(framework, 'checkbox', 'checkboxGroup', args),
        ],
      );
    case 'checkboxIndeterminate':
      return renderWrapperElement(
        framework,
        tag,
        getWrapperPropLines(framework, componentId, args),
        [
          renderWrapperTextSlot(
            framework,
            'label',
            getWrapperStorySlotValue('checkboxIndeterminate', 'label', args),
          ),
          ...getWrapperChoiceChildren(framework, 'checkbox', 'checkboxIndeterminate', args),
        ],
      );
    case 'icon':
      return renderWrapperElement(
        framework,
        tag,
        getWrapperPropLines(framework, componentId, args),
      );
    case 'input':
      return renderWrapperElement(
        framework,
        tag,
        getWrapperPropLines(framework, componentId, args),
        [
          renderWrapperIconSlot(
            framework,
            'prefix',
            getWrapperStorySlotValue('input', 'prefix', args),
          ),
          renderWrapperIconSlot(
            framework,
            'suffix',
            getWrapperStorySlotValue('input', 'suffix', args),
          ),
          renderWrapperTextSlot(
            framework,
            'feedback',
            getWrapperStorySlotValue('input', 'feedback', args),
          ),
        ],
      );
    case 'textarea':
      return renderWrapperElement(
        framework,
        tag,
        getWrapperPropLines(framework, componentId, args),
        [
          renderWrapperIconSlot(
            framework,
            'prefix',
            getWrapperStorySlotValue('textarea', 'prefix', args),
          ),
          renderWrapperIconSlot(
            framework,
            'suffix',
            getWrapperStorySlotValue('textarea', 'suffix', args),
          ),
          renderWrapperTextSlot(
            framework,
            'feedback',
            getWrapperStorySlotValue('textarea', 'feedback', args),
          ),
        ],
      );
    case 'option':
      return renderWrapperElement(
        framework,
        getWrapperStoryMetadata('listbox').importName,
        [
          ...serializeFixedProps([
            { name: 'label', value: 'Option preview' },
            { name: 'name', value: 'option-preview' },
          ]),
        ],
        [
          renderWrapperElement(framework, tag, getWrapperPropLines(framework, componentId, args), [
            renderWrapperIconSlot(
              framework,
              'indicator-icon',
              getWrapperStorySlotValue('option', 'indicator-icon', args),
            ),
            renderWrapperTextSlot(
              framework,
              'indicator',
              getWrapperStorySlotValue('option', 'indicator', args),
            ),
            getWrapperStorySlotValue('option', '', args),
          ]),
        ],
      );
    case 'radio':
      return renderWrapperElement(
        framework,
        tag,
        getWrapperPropLines(framework, componentId, args),
        [getWrapperStorySlotValue('radio', '', args)],
      );
    case 'radioGroup':
      return renderWrapperElement(
        framework,
        tag,
        getWrapperPropLines(framework, componentId, args),
        [
          renderWrapperTextSlot(
            framework,
            'label',
            getWrapperStorySlotValue('radioGroup', 'label', args),
          ),
          renderWrapperTextSlot(
            framework,
            'help-text',
            getWrapperStorySlotValue('radioGroup', 'help-text', args),
          ),
          renderWrapperTextSlot(
            framework,
            'feedback',
            getWrapperStorySlotValue('radioGroup', 'feedback', args),
          ),
          ...getWrapperChoiceChildren(framework, 'radio', 'radioGroup', args),
        ],
      );
    case 'listbox':
      return renderWrapperElement(
        framework,
        tag,
        getWrapperPropLines(framework, componentId, args),
        [
          renderWrapperTextSlot(
            framework,
            'feedback',
            getWrapperStorySlotValue('listbox', 'feedback', args),
          ),
          ...getWrapperOptionChildren(framework, 'listbox', args),
        ],
      );
    case 'select':
      return renderWrapperElement(
        framework,
        tag,
        getWrapperPropLines(framework, componentId, args),
        [
          renderWrapperTextSlot(
            framework,
            'label',
            getWrapperStorySlotValue('select', 'label', args),
          ),
          renderWrapperTextSlot(
            framework,
            'help-text',
            getWrapperStorySlotValue('select', 'help-text', args),
          ),
          renderWrapperTextSlot(
            framework,
            'feedback',
            getWrapperStorySlotValue('select', 'feedback', args),
          ),
          ...getWrapperOptionChildren(framework, 'select', args),
        ],
      );
    case 'combobox':
      return renderWrapperElement(
        framework,
        tag,
        getWrapperPropLines(framework, componentId, args),
        [
          renderWrapperIconSlot(
            framework,
            'prefix',
            getWrapperStorySlotValue('combobox', 'prefix', args),
          ),
          renderWrapperIconSlot(
            framework,
            'suffix',
            getWrapperStorySlotValue('combobox', 'suffix', args),
          ),
          renderWrapperTextSlot(
            framework,
            'feedback',
            getWrapperStorySlotValue('combobox', 'feedback', args),
          ),
          ...getWrapperOptionChildren(framework, 'combobox', args),
        ],
      );
    case 'form':
      return renderWrapperElement(
        framework,
        tag,
        [
          ...serializeFixedProps([
            {
              name: framework === 'react' ? 'className' : 'class',
              value: 'cobalt-panel',
            },
          ]),
          ...getWrapperPropLines(framework, componentId, args),
        ],
        [
          renderWrapperTextSlot(
            framework,
            'feedback',
            getWrapperStorySlotValue('form', 'feedback', args),
          ),
          getWrapperFrameworkFormMarkup(framework),
        ],
      );
  }
}

function getWrapperPropLines(
  framework: WrapperFramework,
  componentId: WrapperStoryComponentId,
  args: WrapperStoryArgs,
): string[] {
  return getActiveProps(componentId, args).map((prop) => serializeWrapperProp(framework, prop));
}

function getAngularPropLines(
  componentId: WrapperStoryComponentId,
  args: WrapperStoryArgs,
): string[] {
  return getActiveProps(componentId, args).map((prop) => serializeAngularProp(prop));
}

function getActiveProps(
  componentId: WrapperStoryComponentId,
  args: WrapperStoryArgs,
): ActiveProp[] {
  const metadata = getWrapperStoryMetadata(componentId);
  const componentProps = getWrapperStoryComponentProps(componentId, args);

  return metadata.props.flatMap((prop) => {
    const value = componentProps[prop.name];

    if (!shouldIncludeProp(prop, value)) {
      return [];
    }

    return [{ ...prop, value }];
  });
}

function shouldIncludeProp(prop: CobaltApiProp, value: unknown): boolean {
  if (value === undefined || value === null) {
    return false;
  }

  if (typeof value === 'string') {
    if (value === '') {
      return false;
    }
    return value !== prop.defaultValue;
  }

  if (typeof value === 'boolean') {
    if (prop.defaultValue === true) {
      return value === false;
    }
    return value;
  }

  return value !== prop.defaultValue;
}

function serializeWrapperProp(framework: WrapperFramework, prop: ActiveProp): string {
  const name = framework === 'react' ? prop.name : prop.attribute;

  if (typeof prop.value === 'boolean') {
    if (framework === 'react') {
      return prop.value ? name : `${name}={false}`;
    }

    return prop.value ? name : `:${name}="false"`;
  }

  if (typeof prop.value === 'number') {
    return framework === 'react' ? `${name}={${prop.value}}` : `:${name}="${prop.value}"`;
  }

  return `${name}="${escapeAttribute(String(prop.value))}"`;
}

function serializeAngularProp(prop: ActiveProp): string {
  if (typeof prop.value === 'boolean' || typeof prop.value === 'number') {
    return `[${prop.name}]="${String(prop.value)}"`;
  }

  return `[${prop.name}]="'${escapeAngularString(String(prop.value))}'"`;
}

function serializeFixedProps(props: Array<{ name: string; value: string }>): string[] {
  return props.map(({ name, value }) => `${name}="${escapeAttribute(value)}"`);
}

function getWrapperChoiceChildren(
  framework: WrapperFramework,
  childComponentId: 'checkbox' | 'radio',
  groupComponentId: 'checkboxGroup' | 'checkboxIndeterminate' | 'radioGroup',
  args: WrapperStoryArgs,
): string[] {
  const childTag = getWrapperStoryMetadata(childComponentId).importName;
  const selectedValues = getWrapperStorySelectedValues(args);

  return getWrapperStoryOptionItems(groupComponentId, args).map((item) =>
    renderWrapperElement(
      framework,
      childTag,
      [
        ...serializeFixedProps([{ name: 'value', value: item.value }]),
        ...(selectedValues.includes(item.value)
          ? [framework === 'react' ? 'checked' : 'checked']
          : []),
        ...(item.disabled ? [framework === 'react' ? 'disabled' : 'disabled'] : []),
      ],
      [item.label],
    ),
  );
}

function getWrapperOptionChildren(
  framework: WrapperFramework,
  componentId: 'combobox' | 'listbox' | 'select',
  args: WrapperStoryArgs,
): string[] {
  const optionTag = getWrapperStoryMetadata('option').importName;
  const selectedValues = getWrapperStorySelectedValues(args);

  return getWrapperStoryOptionItems(componentId, args).map((item) =>
    renderWrapperElement(
      framework,
      optionTag,
      [
        ...serializeFixedProps([{ name: 'value', value: item.value }]),
        ...(selectedValues.includes(item.value)
          ? [framework === 'react' ? 'checked' : 'checked']
          : []),
        ...(item.disabled ? [framework === 'react' ? 'disabled' : 'disabled'] : []),
      ],
      [item.label],
    ),
  );
}

function getAngularChoiceChildren(
  tag: 'co-checkbox' | 'co-radio',
  componentId: 'checkboxGroup' | 'checkboxIndeterminate' | 'radioGroup',
  args: WrapperStoryArgs,
): string[] {
  const selectedValues = getWrapperStorySelectedValues(args);

  return getWrapperStoryOptionItems(componentId, args).map((item) =>
    renderAngularElement(
      tag,
      [
        `value="${escapeAttribute(item.value)}"`,
        ...(selectedValues.includes(item.value) ? ['[checked]="true"'] : []),
        ...(item.disabled ? ['[disabled]="true"'] : []),
      ],
      [item.label],
    ),
  );
}

function getAngularOptionChildren(
  componentId: 'combobox' | 'listbox' | 'select',
  args: WrapperStoryArgs,
): string[] {
  const selectedValues = getWrapperStorySelectedValues(args);

  return getWrapperStoryOptionItems(componentId, args).map((item) =>
    renderAngularElement(
      'co-option',
      [
        `value="${escapeAttribute(item.value)}"`,
        ...(selectedValues.includes(item.value) ? ['[checked]="true"'] : []),
        ...(item.disabled ? ['[disabled]="true"'] : []),
      ],
      [item.label],
    ),
  );
}

function renderWrapperIconSlot(
  framework: WrapperFramework,
  slot: string,
  iconName: string,
): string | null {
  if (!iconName) {
    return null;
  }

  const iconTag = getWrapperStoryMetadata('icon').importName;
  const props = [
    `slot="${slot}"`,
    `name="${escapeAttribute(iconName)}"`,
    framework === 'react' ? 'size="sm"' : 'size="sm"',
  ];

  return renderWrapperElement(framework, iconTag, props);
}

function renderWrapperTextSlot(
  framework: WrapperFramework,
  slot: string,
  value: string,
): string | null {
  if (!value) {
    return null;
  }

  return renderWrapperElement(framework, 'span', [`slot="${slot}"`], [value]);
}

function renderAngularIconSlot(slot: string, iconName: string): string | null {
  if (!iconName) {
    return null;
  }

  return renderAngularElement('co-icon', [
    `slot="${slot}"`,
    `name="${escapeAttribute(iconName)}"`,
    'size="sm"',
  ]);
}

function renderAngularTextSlot(slot: string, value: string): string | null {
  if (!value) {
    return null;
  }

  return renderAngularElement('span', [`slot="${slot}"`], [value]);
}

function renderWrapperElement(
  _framework: WrapperFramework,
  tag: string,
  props: string[],
  children: Array<string | null> = [],
): string {
  const content = children.filter((child): child is string => Boolean(child));

  if (content.length === 0) {
    return renderSelfClosingElement(tag, props);
  }

  return [
    renderOpenTag(tag, props),
    ...content.map((child) => indentBlock(child)),
    `</${tag}>`,
  ].join('\n');
}

function renderAngularElement(
  tag: string,
  props: string[],
  children: Array<string | null> = [],
): string {
  const content = children.filter((child): child is string => Boolean(child));

  if (content.length === 0) {
    return `${renderStartTag(tag, props)}</${tag}>`;
  }

  return [
    renderStartTag(tag, props),
    ...content.map((child) => indentBlock(child)),
    `</${tag}>`,
  ].join('\n');
}

function renderSelfClosingElement(tag: string, props: string[]): string {
  if (props.length === 0) {
    return `<${tag} />`;
  }

  const lastProp = props[props.length - 1];
  return [`<${tag}`, ...props.slice(0, -1).map((prop) => `  ${prop}`), `  ${lastProp} />`].join(
    '\n',
  );
}

function renderOpenTag(tag: string, props: string[]): string {
  return renderStartTag(tag, props);
}

function renderStartTag(tag: string, props: string[]): string {
  if (props.length === 0) {
    return `<${tag}>`;
  }

  const lastProp = props[props.length - 1];

  return [`<${tag}`, ...props.slice(0, -1).map((prop) => `  ${prop}`), `  ${lastProp}>`].join('\n');
}

function indentBlock(value: string, spaces = 2): string {
  const prefix = ' '.repeat(spaces);
  return value
    .split('\n')
    .map((line) => `${prefix}${line}`)
    .join('\n');
}

function escapeAttribute(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

function escapeAngularString(value: string): string {
  return value.replaceAll('\\', '\\\\').replaceAll("'", "\\'");
}

function getWrapperFrameworkFormMarkup(framework: WrapperFramework): string {
  if (framework === 'react') {
    return `<div className="cobalt-stack">
  <CoInput label="Name" name="name" required placeholder="Ada Lovelace" />
  <CoTextarea label="Message" name="message" rows={4} placeholder="Write a message" />
  <div className="cobalt-form-row">
    <CoButton type="submit" variant="primary">
      Submit
    </CoButton>
    <CoButton type="reset" variant="secondary">
      Reset
    </CoButton>
  </div>
</div>`;
  }

  return `<div class="cobalt-stack">
  <CoInput label="Name" name="name" required placeholder="Ada Lovelace" />
  <CoTextarea label="Message" name="message" :rows="4" placeholder="Write a message" />
  <div class="cobalt-form-row">
    <CoButton type="submit" variant="primary">Submit</CoButton>
    <CoButton type="reset" variant="secondary">Reset</CoButton>
  </div>
</div>`;
}
