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
} from '@cobalt/react';
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

export function createReactPlaygroundStory(componentId: CobaltComponentId) {
  return {
    args: getPlaygroundArgs(componentId),
    argTypes: getPlaygroundArgTypes(componentId),
    render: (args: CobaltStoryArgs) => renderReactPlayground(componentId, args),
  };
}

export function renderReactPlayground(componentId: CobaltComponentId, args: CobaltStoryArgs) {
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

function renderComponent(componentId: CobaltComponentId, args: CobaltStoryArgs) {
  switch (componentId) {
    case 'button':
      return (
        <CoButton {...getComponentProps('button', args)} {...getEventProps('button', args)}>
          {slotIcon('prefix', getSlotValue('button', 'prefix', args))}
          {getSlotValue('button', '', args)}
          {slotIcon('suffix', getSlotValue('button', 'suffix', args))}
        </CoButton>
      );
    case 'buttonIcon':
      return (
        <CoButtonIcon
          {...getComponentProps('buttonIcon', args)}
          {...getEventProps('buttonIcon', args)}
        />
      );
    case 'icon':
      return <CoIcon {...getComponentProps('icon', args)} />;
    case 'input':
      return (
        <CoInput {...getComponentProps('input', args)} {...getEventProps('input', args)}>
          {slotIcon('prefix', getSlotValue('input', 'prefix', args))}
          {slotIcon('suffix', getSlotValue('input', 'suffix', args))}
          {slotText('feedback', getSlotValue('input', 'feedback', args))}
        </CoInput>
      );
    case 'textarea':
      return (
        <CoTextarea {...getComponentProps('textarea', args)} {...getEventProps('textarea', args)}>
          {slotIcon('prefix', getSlotValue('textarea', 'prefix', args))}
          {slotIcon('suffix', getSlotValue('textarea', 'suffix', args))}
          {slotText('feedback', getSlotValue('textarea', 'feedback', args))}
        </CoTextarea>
      );
    case 'option':
      return (
        <CoListbox label="Option preview" name="option-preview">
          <CoOption {...getComponentProps('option', args)}>
            {slotIcon('indicator-icon', getSlotValue('option', 'indicator-icon', args))}
            {slotText('indicator', getSlotValue('option', 'indicator', args))}
            {getSlotValue('option', '', args)}
          </CoOption>
        </CoListbox>
      );
    case 'listbox':
      return (
        <CoListbox {...getComponentProps('listbox', args)} {...getEventProps('listbox', args)}>
          {slotText('feedback', getSlotValue('listbox', 'feedback', args))}
          {optionChildren('listbox', args)}
        </CoListbox>
      );
    case 'select':
      return (
        <CoSelect {...getComponentProps('select', args)} {...getEventProps('select', args)}>
          {slotText('label', getSlotValue('select', 'label', args))}
          {slotText('help-text', getSlotValue('select', 'help-text', args))}
          {slotText('feedback', getSlotValue('select', 'feedback', args))}
          {optionChildren('select', args)}
        </CoSelect>
      );
    case 'combobox':
      return (
        <CoCombobox {...getComponentProps('combobox', args)} {...getEventProps('combobox', args)}>
          {slotIcon('prefix', getSlotValue('combobox', 'prefix', args))}
          {slotIcon('suffix', getSlotValue('combobox', 'suffix', args))}
          {slotText('feedback', getSlotValue('combobox', 'feedback', args))}
          {optionChildren('combobox', args)}
        </CoCombobox>
      );
    case 'form':
      return (
        <CoForm
          className="cobalt-panel"
          {...getComponentProps('form', args)}
          {...getEventProps('form', args)}
        >
          {slotText('feedback', getSlotValue('form', 'feedback', args))}
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

function optionChildren(componentId: 'combobox' | 'listbox' | 'select', args: CobaltStoryArgs) {
  const selectedValues = getSelectedValues(args);

  return getOptionItems(componentId, args).map((item) => (
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
