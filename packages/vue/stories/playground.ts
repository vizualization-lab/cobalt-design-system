import { h } from 'vue';
import {
  CoButton,
  CoButtonIcon,
  CoCombobox,
  CoForm,
  CoIcon,
  CoInput,
  CoListbox,
  CoOption,
  CoSelect,
  CoTextarea,
} from '@cobalt/vue';
import {
  getComponentProps,
  getEventProps,
  getOptionItems,
  getPlaygroundArgs,
  getPlaygroundArgTypes,
  getSelectedValues,
  getSlotValue,
  type CobaltComponentId,
  type CobaltStoryArgs,
} from '@cobalt/storybook-fixtures';

export function createVuePlaygroundStory(componentId: CobaltComponentId) {
  return {
    args: getPlaygroundArgs(componentId),
    argTypes: getPlaygroundArgTypes(componentId),
    render: (args: CobaltStoryArgs) => ({
      setup() {
        return () => renderVuePlayground(componentId, args);
      },
    }),
  };
}

export function renderVuePlayground(componentId: CobaltComponentId, args: CobaltStoryArgs) {
  return h('div', { class: 'cobalt-story cobalt-stack' }, [
    h('section', { class: 'cobalt-section' }, [
      h(
        'div',
        {
          class: componentId === 'button' || componentId === 'icon' ? 'cobalt-row' : 'cobalt-grid',
        },
        [renderComponent(componentId, args)],
      ),
    ]),
  ]);
}

function renderComponent(componentId: CobaltComponentId, args: CobaltStoryArgs) {
  switch (componentId) {
    case 'button':
      return h(
        CoButton,
        { ...getComponentProps('button', args), ...getEventProps('button', args) },
        {
          default: () => [
            slotIcon('prefix', getSlotValue('button', 'prefix', args)),
            getSlotValue('button', '', args),
            slotIcon('suffix', getSlotValue('button', 'suffix', args)),
          ],
        },
      );
    case 'buttonIcon':
      return h(CoButtonIcon, {
        ...getComponentProps('buttonIcon', args),
        ...getEventProps('buttonIcon', args),
      });
    case 'icon':
      return h(CoIcon, getComponentProps('icon', args));
    case 'input':
      return h(
        CoInput,
        { ...getComponentProps('input', args), ...getEventProps('input', args) },
        {
          default: () => [
            slotIcon('prefix', getSlotValue('input', 'prefix', args)),
            slotIcon('suffix', getSlotValue('input', 'suffix', args)),
            slotText('feedback', getSlotValue('input', 'feedback', args)),
          ],
        },
      );
    case 'textarea':
      return h(
        CoTextarea,
        { ...getComponentProps('textarea', args), ...getEventProps('textarea', args) },
        {
          default: () => [
            slotIcon('prefix', getSlotValue('textarea', 'prefix', args)),
            slotIcon('suffix', getSlotValue('textarea', 'suffix', args)),
            slotText('feedback', getSlotValue('textarea', 'feedback', args)),
          ],
        },
      );
    case 'option':
      return h(
        CoListbox,
        { label: 'Option preview', name: 'option-preview' },
        {
          default: () =>
            h(CoOption, getComponentProps('option', args), {
              default: () => [
                slotIcon('indicator-icon', getSlotValue('option', 'indicator-icon', args)),
                slotText('indicator', getSlotValue('option', 'indicator', args)),
                getSlotValue('option', '', args),
              ],
            }),
        },
      );
    case 'listbox':
      return h(
        CoListbox,
        { ...getComponentProps('listbox', args), ...getEventProps('listbox', args) },
        {
          default: () => [
            slotText('feedback', getSlotValue('listbox', 'feedback', args)),
            ...optionChildren('listbox', args),
          ],
        },
      );
    case 'select':
      return h(
        CoSelect,
        { ...getComponentProps('select', args), ...getEventProps('select', args) },
        {
          default: () => [
            slotText('label', getSlotValue('select', 'label', args)),
            slotText('help-text', getSlotValue('select', 'help-text', args)),
            slotText('feedback', getSlotValue('select', 'feedback', args)),
            ...optionChildren('select', args),
          ],
        },
      );
    case 'combobox':
      return h(
        CoCombobox,
        { ...getComponentProps('combobox', args), ...getEventProps('combobox', args) },
        {
          default: () => [
            slotIcon('prefix', getSlotValue('combobox', 'prefix', args)),
            slotIcon('suffix', getSlotValue('combobox', 'suffix', args)),
            slotText('feedback', getSlotValue('combobox', 'feedback', args)),
            ...optionChildren('combobox', args),
          ],
        },
      );
    case 'form':
      return h(
        CoForm,
        {
          class: 'cobalt-panel',
          ...getComponentProps('form', args),
          ...getEventProps('form', args),
        },
        {
          default: () => [
            slotText('feedback', getSlotValue('form', 'feedback', args)),
            h('div', { class: 'cobalt-stack' }, [
              h(CoInput, {
                label: 'Name',
                name: 'name',
                required: true,
                placeholder: 'Ada Lovelace',
              }),
              h(CoTextarea, {
                label: 'Message',
                name: 'message',
                rows: 4,
                placeholder: 'Write a message',
              }),
              h('div', { class: 'cobalt-form-row' }, [
                h(CoButton, { type: 'submit', variant: 'primary' }, { default: () => 'Submit' }),
                h(CoButton, { type: 'reset', variant: 'secondary' }, { default: () => 'Reset' }),
              ]),
            ]),
          ],
        },
      );
  }
}

function optionChildren(componentId: 'combobox' | 'listbox' | 'select', args: CobaltStoryArgs) {
  const selectedValues = getSelectedValues(args);

  return getOptionItems(componentId, args).map((item) =>
    h(
      CoOption,
      {
        key: item.value,
        value: item.value,
        checked: selectedValues.includes(item.value),
        disabled: item.disabled,
      },
      { default: () => item.label },
    ),
  );
}

function slotIcon(slot: string, name: string) {
  if (!name) return undefined;
  return h(CoIcon, { slot, name, size: 'sm' });
}

function slotText(slot: string, value: string) {
  if (!value) return undefined;
  return h('span', { slot }, value);
}
