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
} from '@cobalt/react';
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

export function createReactPlaygroundStory(componentId: WrapperStoryComponentId) {
  return {
    args: getWrapperStoryArgs(componentId),
    argTypes: getWrapperStoryArgTypes(componentId),
    render: (args: WrapperStoryArgs) => renderReactPlayground(componentId, args),
  };
}

export function renderReactPlayground(
  componentId: WrapperStoryComponentId,
  args: WrapperStoryArgs,
) {
  return (
    <div className="cobalt-story cobalt-stack">
      <section className="cobalt-section">
        <div
          className={
            componentId === 'button' || componentId === 'icon' ? 'cobalt-row' : 'cobalt-grid'
          }
        >
          {renderComponent(componentId, args)}
        </div>
      </section>
    </div>
  );
}

function renderComponent(componentId: WrapperStoryComponentId, args: WrapperStoryArgs) {
  switch (componentId) {
    case 'button':
      return (
        <CoButton
          {...getWrapperStoryComponentProps('button', args)}
          {...getWrapperStoryEventProps('button', args)}
        >
          {slotIcon('prefix', getWrapperStorySlotValue('button', 'prefix', args))}
          {getWrapperStorySlotValue('button', '', args)}
          {slotIcon('suffix', getWrapperStorySlotValue('button', 'suffix', args))}
        </CoButton>
      );
    case 'buttonIcon':
      return (
        <CoButtonIcon
          {...getWrapperStoryComponentProps('buttonIcon', args)}
          {...getWrapperStoryEventProps('buttonIcon', args)}
        />
      );
    case 'checkbox':
      return (
        <CoCheckbox {...getWrapperStoryComponentProps('checkbox', args)}>
          {getWrapperStorySlotValue('checkbox', '', args)}
        </CoCheckbox>
      );
    case 'checkboxGroup':
      return (
        <CoCheckboxGroup
          {...getWrapperStoryComponentProps('checkboxGroup', args)}
          {...getWrapperStoryEventProps('checkboxGroup', args)}
        >
          {slotText('label', getWrapperStorySlotValue('checkboxGroup', 'label', args))}
          {slotText('help-text', getWrapperStorySlotValue('checkboxGroup', 'help-text', args))}
          {slotText('feedback', getWrapperStorySlotValue('checkboxGroup', 'feedback', args))}
          {checkboxChildren('checkboxGroup', args)}
        </CoCheckboxGroup>
      );
    case 'checkboxIndeterminate':
      return (
        <CoCheckboxIndeterminate {...getWrapperStoryComponentProps('checkboxIndeterminate', args)}>
          {slotText('label', getWrapperStorySlotValue('checkboxIndeterminate', 'label', args))}
          {checkboxChildren('checkboxIndeterminate', args)}
        </CoCheckboxIndeterminate>
      );
    case 'icon':
      return <CoIcon {...getWrapperStoryComponentProps('icon', args)} />;
    case 'input':
      return (
        <CoInput
          {...getWrapperStoryComponentProps('input', args)}
          {...getWrapperStoryEventProps('input', args)}
        >
          {slotIcon('prefix', getWrapperStorySlotValue('input', 'prefix', args))}
          {slotIcon('suffix', getWrapperStorySlotValue('input', 'suffix', args))}
          {slotText('feedback', getWrapperStorySlotValue('input', 'feedback', args))}
        </CoInput>
      );
    case 'textarea':
      return (
        <CoTextarea
          {...getWrapperStoryComponentProps('textarea', args)}
          {...getWrapperStoryEventProps('textarea', args)}
        >
          {slotIcon('prefix', getWrapperStorySlotValue('textarea', 'prefix', args))}
          {slotIcon('suffix', getWrapperStorySlotValue('textarea', 'suffix', args))}
          {slotText('feedback', getWrapperStorySlotValue('textarea', 'feedback', args))}
        </CoTextarea>
      );
    case 'option':
      return (
        <CoListbox label="Option preview" name="option-preview">
          <CoOption {...getWrapperStoryComponentProps('option', args)}>
            {slotIcon('indicator-icon', getWrapperStorySlotValue('option', 'indicator-icon', args))}
            {slotText('indicator', getWrapperStorySlotValue('option', 'indicator', args))}
            {getWrapperStorySlotValue('option', '', args)}
          </CoOption>
        </CoListbox>
      );
    case 'radio':
      return (
        <CoRadio {...getWrapperStoryComponentProps('radio', args)}>
          {getWrapperStorySlotValue('radio', '', args)}
        </CoRadio>
      );
    case 'radioGroup':
      return (
        <CoRadioGroup
          {...getWrapperStoryComponentProps('radioGroup', args)}
          {...getWrapperStoryEventProps('radioGroup', args)}
        >
          {slotText('label', getWrapperStorySlotValue('radioGroup', 'label', args))}
          {slotText('help-text', getWrapperStorySlotValue('radioGroup', 'help-text', args))}
          {slotText('feedback', getWrapperStorySlotValue('radioGroup', 'feedback', args))}
          {radioChildren('radioGroup', args)}
        </CoRadioGroup>
      );
    case 'listbox':
      return (
        <CoListbox
          {...getWrapperStoryComponentProps('listbox', args)}
          {...getWrapperStoryEventProps('listbox', args)}
        >
          {slotText('feedback', getWrapperStorySlotValue('listbox', 'feedback', args))}
          {optionChildren('listbox', args)}
        </CoListbox>
      );
    case 'select':
      return (
        <CoSelect
          {...getWrapperStoryComponentProps('select', args)}
          {...getWrapperStoryEventProps('select', args)}
        >
          {slotText('label', getWrapperStorySlotValue('select', 'label', args))}
          {slotText('help-text', getWrapperStorySlotValue('select', 'help-text', args))}
          {slotText('feedback', getWrapperStorySlotValue('select', 'feedback', args))}
          {optionChildren('select', args)}
        </CoSelect>
      );
    case 'combobox':
      return (
        <CoCombobox
          {...getWrapperStoryComponentProps('combobox', args)}
          {...getWrapperStoryEventProps('combobox', args)}
        >
          {slotIcon('prefix', getWrapperStorySlotValue('combobox', 'prefix', args))}
          {slotIcon('suffix', getWrapperStorySlotValue('combobox', 'suffix', args))}
          {slotText('feedback', getWrapperStorySlotValue('combobox', 'feedback', args))}
          {optionChildren('combobox', args)}
        </CoCombobox>
      );
    case 'form':
      return (
        <CoForm
          className="cobalt-panel"
          {...getWrapperStoryComponentProps('form', args)}
          {...getWrapperStoryEventProps('form', args)}
        >
          {slotText('feedback', getWrapperStorySlotValue('form', 'feedback', args))}
          <div className="cobalt-stack">
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
          </div>
        </CoForm>
      );
  }
}

function checkboxChildren(
  componentId: 'checkboxGroup' | 'checkboxIndeterminate',
  args: WrapperStoryArgs,
) {
  const selectedValues = getWrapperStorySelectedValues(args);

  return getWrapperStoryOptionItems(componentId, args).map((item) => (
    <CoCheckbox
      key={item.value}
      value={item.value}
      checked={selectedValues.includes(item.value)}
      disabled={item.disabled}
    >
      {item.label}
    </CoCheckbox>
  ));
}

function radioChildren(componentId: 'radioGroup', args: WrapperStoryArgs) {
  const selectedValues = getWrapperStorySelectedValues(args);

  return getWrapperStoryOptionItems(componentId, args).map((item) => (
    <CoRadio
      key={item.value}
      value={item.value}
      checked={selectedValues.includes(item.value)}
      disabled={item.disabled}
    >
      {item.label}
    </CoRadio>
  ));
}

function optionChildren(componentId: 'combobox' | 'listbox' | 'select', args: WrapperStoryArgs) {
  const selectedValues = getWrapperStorySelectedValues(args);

  return getWrapperStoryOptionItems(componentId, args).map((item) => (
    <CoOption
      key={item.value}
      value={item.value}
      checked={selectedValues.includes(item.value)}
      disabled={item.disabled}
    >
      {item.label}
    </CoOption>
  ));
}

function slotIcon(slot: string, name: string) {
  if (!name) return null;
  return <CoIcon slot={slot} name={name} size="sm" />;
}

function slotText(slot: string, value: string) {
  if (!value) return null;
  return <span slot={slot}>{value}</span>;
}
