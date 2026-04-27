export const commonIconOptions = [
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

export const storybookComponentDefinitions = [
  {
    id: 'button',
    title: 'Button',
    tagName: 'co-button',
    className: 'CoButton',
    importName: 'CoButton',
    componentPath: 'button',
    componentSource: 'packages/components/src/components/button/co-button.ts',
    angularSource: 'packages/angular/src/components/button.ts',
    webComponentImports: ['button', 'icon'],
    storybook: {
      management: 'manual',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'buttonIcon',
    title: 'Button Icon',
    tagName: 'co-button-icon',
    className: 'CoButtonIcon',
    importName: 'CoButtonIcon',
    componentPath: 'button-icon',
    componentSource: 'packages/components/src/components/button-icon/co-button-icon.ts',
    angularSource: 'packages/angular/src/components/button-icon.ts',
    webComponentImports: ['button-icon'],
    storybook: {
      management: 'manual',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    tagName: 'co-checkbox',
    className: 'CoCheckbox',
    importName: 'CoCheckbox',
    componentPath: 'checkbox',
    componentSource: 'packages/components/src/components/checkbox/co-checkbox.ts',
    angularSource: 'packages/angular/src/components/checkbox.ts',
    webComponentImports: ['checkbox'],
    storybook: {
      management: 'generated',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'checkboxGroup',
    title: 'Checkbox Group',
    tagName: 'co-checkbox-group',
    className: 'CoCheckboxGroup',
    importName: 'CoCheckboxGroup',
    componentPath: 'checkbox-group',
    componentSource: 'packages/components/src/components/checkbox-group/co-checkbox-group.ts',
    angularSource: 'packages/angular/src/components/checkbox-group.ts',
    webComponentImports: ['checkbox-group', 'checkbox'],
    storybook: {
      management: 'generated',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'checkboxIndeterminate',
    title: 'Checkbox Indeterminate',
    tagName: 'co-checkbox-indeterminate',
    className: 'CoCheckboxIndeterminate',
    importName: 'CoCheckboxIndeterminate',
    componentPath: 'checkbox-indeterminate',
    componentSource:
      'packages/components/src/components/checkbox-indeterminate/co-checkbox-indeterminate.ts',
    angularSource: 'packages/angular/src/components/checkbox-indeterminate.ts',
    webComponentImports: ['checkbox-indeterminate', 'checkbox'],
    storybook: {
      management: 'generated',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'icon',
    title: 'Icon',
    tagName: 'co-icon',
    className: 'CoIcon',
    importName: 'CoIcon',
    componentPath: 'icon',
    componentSource: 'packages/components/src/components/icon/co-icon.ts',
    angularSource: 'packages/angular/src/components/icon.ts',
    webComponentImports: ['icon'],
    storybook: {
      management: 'manual',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'input',
    title: 'Input',
    tagName: 'co-input',
    className: 'CoInput',
    importName: 'CoInput',
    componentPath: 'input',
    componentSource: 'packages/components/src/components/input/co-input.ts',
    angularSource: 'packages/angular/src/components/input.ts',
    webComponentImports: ['input', 'icon'],
    storybook: {
      management: 'manual',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'textarea',
    title: 'Textarea',
    tagName: 'co-textarea',
    className: 'CoTextarea',
    importName: 'CoTextarea',
    componentPath: 'textarea',
    componentSource: 'packages/components/src/components/textarea/co-textarea.ts',
    angularSource: 'packages/angular/src/components/textarea.ts',
    webComponentImports: ['textarea', 'icon'],
    storybook: {
      management: 'manual',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'option',
    title: 'Option',
    tagName: 'co-option',
    className: 'CoOption',
    importName: 'CoOption',
    componentPath: 'option',
    componentSource: 'packages/components/src/components/option/co-option.ts',
    angularSource: 'packages/angular/src/components/listbox.ts',
    webComponentImports: ['listbox', 'option', 'icon'],
    storybook: {
      management: 'manual',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'radio',
    title: 'Radio',
    tagName: 'co-radio',
    className: 'CoRadio',
    importName: 'CoRadio',
    componentPath: 'radio',
    componentSource: 'packages/components/src/components/radio/co-radio.ts',
    angularSource: 'packages/angular/src/components/radio.ts',
    webComponentImports: ['radio'],
    storybook: {
      management: 'generated',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'radioGroup',
    title: 'Radio Group',
    tagName: 'co-radio-group',
    className: 'CoRadioGroup',
    importName: 'CoRadioGroup',
    componentPath: 'radio-group',
    componentSource: 'packages/components/src/components/radio-group/co-radio-group.ts',
    angularSource: 'packages/angular/src/components/radio-group.ts',
    webComponentImports: ['radio-group', 'radio'],
    storybook: {
      management: 'generated',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'listbox',
    title: 'Listbox',
    tagName: 'co-listbox',
    className: 'CoListbox',
    importName: 'CoListbox',
    componentPath: 'listbox',
    componentSource: 'packages/components/src/components/listbox/co-listbox.ts',
    angularSource: 'packages/angular/src/components/listbox.ts',
    webComponentImports: ['listbox', 'option'],
    storybook: {
      management: 'manual',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'select',
    title: 'Select',
    tagName: 'co-select',
    className: 'CoSelect',
    importName: 'CoSelect',
    componentPath: 'select',
    componentSource: 'packages/components/src/components/select/co-select.ts',
    angularSource: 'packages/angular/src/components/select.ts',
    webComponentImports: ['select', 'option'],
    storybook: {
      management: 'manual',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'combobox',
    title: 'Combobox',
    tagName: 'co-combobox',
    className: 'CoCombobox',
    importName: 'CoCombobox',
    componentPath: 'combobox',
    componentSource: 'packages/components/src/components/combobox/co-combobox.ts',
    angularSource: 'packages/angular/src/components/combobox.ts',
    webComponentImports: ['combobox', 'option', 'icon'],
    storybook: {
      management: 'manual',
      overviewPreset: 'starter',
    },
  },
  {
    id: 'form',
    title: 'Form',
    tagName: 'co-form',
    className: 'CoForm',
    importName: 'CoForm',
    componentPath: 'form',
    componentSource: 'packages/components/src/components/form/co-form.ts',
    angularSource: 'packages/angular/src/components/form.ts',
    webComponentImports: ['form', 'input', 'textarea', 'button'],
    storybook: {
      management: 'manual',
      overviewPreset: 'starter',
    },
  },
];

export const storybookPropOverrides = {
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

export const storybookSlotControls = {
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

export const storybookPlaygroundDefaults = {
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

export const storybookManagedComponentDefinitions = storybookComponentDefinitions.filter(
  (definition) => definition.storybook.management === 'generated',
);

export function getStorybookComponentDefinition(componentId) {
  return storybookComponentDefinitions.find((definition) => definition.id === componentId);
}
