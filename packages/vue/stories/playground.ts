import { h } from 'vue';
import {
  CoButton,
  CoButtonIcon,
  CoCheckbox,
  CoCheckboxGroup,
  CoCheckboxIndeterminate,
  CoCombobox,
  CoForm,
  CoIcon,
  CoInput,
  CoListbox,
  CoOption,
  CoRadio,
  CoRadioGroup,
  CoSelect,
  CoTextarea,
} from '@cobalt/vue';
import {
  getWrapperStoryArgs,
  getWrapperStoryArgTypes,
  getWrapperStoryComponentProps,
  getWrapperStoryEventProps,
  getWrapperStoryOptionItems,
  getWrapperStorySelectedValues,
  getWrapperStorySlotValue,
  type WrapperStoryArgs,
  type WrapperStoryComponentId,
} from '@cobalt/storybook-fixtures';

export function createVuePlaygroundStory(componentId: WrapperStoryComponentId) {
  return {
    args: getWrapperStoryArgs(componentId),
    argTypes: getWrapperStoryArgTypes(componentId),
    render: (args: WrapperStoryArgs) => ({
      setup() {
        return () => renderVuePlayground(componentId, args);
      },
    }),
  };
}

export function renderVuePlayground(componentId: WrapperStoryComponentId, args: WrapperStoryArgs) {
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

function renderComponent(componentId: WrapperStoryComponentId, args: WrapperStoryArgs) {
  switch (componentId) {
    case 'button':
      return h(
        CoButton,
        {
          ...getWrapperStoryComponentProps('button', args),
          ...getWrapperStoryEventProps('button', args),
        },
        {
          default: () => [
            slotIcon('prefix', getWrapperStorySlotValue('button', 'prefix', args)),
            getWrapperStorySlotValue('button', '', args),
            slotIcon('suffix', getWrapperStorySlotValue('button', 'suffix', args)),
          ],
        },
      );
    case 'buttonIcon':
      return h(CoButtonIcon, {
        ...getWrapperStoryComponentProps('buttonIcon', args),
        ...getWrapperStoryEventProps('buttonIcon', args),
      });
    case 'checkbox':
      return h(CoCheckbox, getWrapperStoryComponentProps('checkbox', args), {
        default: () => getWrapperStorySlotValue('checkbox', '', args),
      });
    case 'checkboxGroup':
      return h(
        CoCheckboxGroup,
        {
          ...getWrapperStoryComponentProps('checkboxGroup', args),
          ...getWrapperStoryEventProps('checkboxGroup', args),
        },
        {
          default: () => [
            slotText('label', getWrapperStorySlotValue('checkboxGroup', 'label', args)),
            slotText('help-text', getWrapperStorySlotValue('checkboxGroup', 'help-text', args)),
            slotText('feedback', getWrapperStorySlotValue('checkboxGroup', 'feedback', args)),
            ...checkboxChildren('checkboxGroup', args),
          ],
        },
      );
    case 'checkboxIndeterminate':
      return h(
        CoCheckboxIndeterminate,
        getWrapperStoryComponentProps('checkboxIndeterminate', args),
        {
          default: () => [
            slotText('label', getWrapperStorySlotValue('checkboxIndeterminate', 'label', args)),
            ...checkboxChildren('checkboxIndeterminate', args),
          ],
        },
      );
    case 'icon':
      return h(CoIcon, getWrapperStoryComponentProps('icon', args));
    case 'input':
      return h(
        CoInput,
        {
          ...getWrapperStoryComponentProps('input', args),
          ...getWrapperStoryEventProps('input', args),
        },
        {
          default: () => [
            slotIcon('prefix', getWrapperStorySlotValue('input', 'prefix', args)),
            slotIcon('suffix', getWrapperStorySlotValue('input', 'suffix', args)),
            slotText('feedback', getWrapperStorySlotValue('input', 'feedback', args)),
          ],
        },
      );
    case 'textarea':
      return h(
        CoTextarea,
        {
          ...getWrapperStoryComponentProps('textarea', args),
          ...getWrapperStoryEventProps('textarea', args),
        },
        {
          default: () => [
            slotIcon('prefix', getWrapperStorySlotValue('textarea', 'prefix', args)),
            slotIcon('suffix', getWrapperStorySlotValue('textarea', 'suffix', args)),
            slotText('feedback', getWrapperStorySlotValue('textarea', 'feedback', args)),
          ],
        },
      );
    case 'option':
      return h(
        CoListbox,
        { label: 'Option preview', name: 'option-preview' },
        {
          default: () =>
            h(CoOption, getWrapperStoryComponentProps('option', args), {
              default: () => [
                slotIcon(
                  'indicator-icon',
                  getWrapperStorySlotValue('option', 'indicator-icon', args),
                ),
                slotText('indicator', getWrapperStorySlotValue('option', 'indicator', args)),
                getWrapperStorySlotValue('option', '', args),
              ],
            }),
        },
      );
    case 'radio':
      return h(CoRadio, getWrapperStoryComponentProps('radio', args), {
        default: () => getWrapperStorySlotValue('radio', '', args),
      });
    case 'radioGroup':
      return h(
        CoRadioGroup,
        {
          ...getWrapperStoryComponentProps('radioGroup', args),
          ...getWrapperStoryEventProps('radioGroup', args),
        },
        {
          default: () => [
            slotText('label', getWrapperStorySlotValue('radioGroup', 'label', args)),
            slotText('help-text', getWrapperStorySlotValue('radioGroup', 'help-text', args)),
            slotText('feedback', getWrapperStorySlotValue('radioGroup', 'feedback', args)),
            ...radioChildren('radioGroup', args),
          ],
        },
      );
    case 'listbox':
      return h(
        CoListbox,
        {
          ...getWrapperStoryComponentProps('listbox', args),
          ...getWrapperStoryEventProps('listbox', args),
        },
        {
          default: () => [
            slotText('feedback', getWrapperStorySlotValue('listbox', 'feedback', args)),
            ...optionChildren('listbox', args),
          ],
        },
      );
    case 'select':
      return h(
        CoSelect,
        {
          ...getWrapperStoryComponentProps('select', args),
          ...getWrapperStoryEventProps('select', args),
        },
        {
          default: () => [
            slotText('label', getWrapperStorySlotValue('select', 'label', args)),
            slotText('help-text', getWrapperStorySlotValue('select', 'help-text', args)),
            slotText('feedback', getWrapperStorySlotValue('select', 'feedback', args)),
            ...optionChildren('select', args),
          ],
        },
      );
    case 'combobox':
      return h(
        CoCombobox,
        {
          ...getWrapperStoryComponentProps('combobox', args),
          ...getWrapperStoryEventProps('combobox', args),
        },
        {
          default: () => [
            slotIcon('prefix', getWrapperStorySlotValue('combobox', 'prefix', args)),
            slotIcon('suffix', getWrapperStorySlotValue('combobox', 'suffix', args)),
            slotText('feedback', getWrapperStorySlotValue('combobox', 'feedback', args)),
            ...optionChildren('combobox', args),
          ],
        },
      );
    case 'form':
      return h(
        CoForm,
        {
          class: 'cobalt-panel',
          ...getWrapperStoryComponentProps('form', args),
          ...getWrapperStoryEventProps('form', args),
        },
        {
          default: () => [
            slotText('feedback', getWrapperStorySlotValue('form', 'feedback', args)),
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

function checkboxChildren(
  componentId: 'checkboxGroup' | 'checkboxIndeterminate',
  args: WrapperStoryArgs,
) {
  const selectedValues = getWrapperStorySelectedValues(args);

  return getWrapperStoryOptionItems(componentId, args).map((item) =>
    h(
      CoCheckbox,
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

function radioChildren(componentId: 'radioGroup', args: WrapperStoryArgs) {
  const selectedValues = getWrapperStorySelectedValues(args);

  return getWrapperStoryOptionItems(componentId, args).map((item) =>
    h(
      CoRadio,
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

function optionChildren(componentId: 'combobox' | 'listbox' | 'select', args: WrapperStoryArgs) {
  const selectedValues = getWrapperStorySelectedValues(args);

  return getWrapperStoryOptionItems(componentId, args).map((item) =>
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
