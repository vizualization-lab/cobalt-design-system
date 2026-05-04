export function defineComponentScenarios(scenarios) {
  return scenarios;
}

const overviewScenario = {
  id: 'overview',
  exportName: 'Overview',
  name: 'Overview',
  args: {},
};

export const storybookScenarioDefinitions = {
  appShell: defineComponentScenarios([
    {
      id: 'drawerOpen',
      exportName: 'DrawerOpen',
      name: 'Drawer open',
      args: {
        drawerOpen: true,
      },
    },
  ]),
  banner: defineComponentScenarios([
    {
      id: 'longContent',
      exportName: 'LongContent',
      name: 'Long content',
      args: {
        slotTitle: 'Maintenance window',
        slotDefault: 'Scheduled maintenance begins tonight at 11:00 PM and may affect previews.',
      },
    },
  ]),
  card: defineComponentScenarios([
    {
      id: 'statusSummary',
      exportName: 'StatusSummary',
      name: 'Status summary',
      args: {
        slotHeader: 'System status',
        slotDefault: 'All monitored services are operating within expected thresholds.',
        slotFooter: 'Last checked just now',
      },
    },
  ]),
  checkbox: defineComponentScenarios([
    {
      id: 'checked',
      exportName: 'Checked',
      name: 'Checked',
      args: {
        checked: true,
      },
    },
    {
      id: 'disabled',
      exportName: 'Disabled',
      name: 'Disabled',
      args: {
        disabled: true,
      },
    },
  ]),
  checkboxGroup: defineComponentScenarios([
    {
      id: 'withDisabledOption',
      exportName: 'WithDisabledOption',
      name: 'With disabled option',
      args: {
        optionItems: [
          { value: 'email', label: 'Email updates' },
          { value: 'product', label: 'Product news' },
          { value: 'research', label: 'Research invitations', disabled: true },
        ],
      },
    },
  ]),
  checkboxIndeterminate: defineComponentScenarios([
    {
      id: 'allSelected',
      exportName: 'AllSelected',
      name: 'All selected',
      args: {
        indeterminate: false,
        checked: true,
        selectedValues: 'email,sms,push',
      },
    },
  ]),
  inputPill: defineComponentScenarios([
    {
      id: 'chat',
      exportName: 'Chat',
      name: 'Chat',
      args: {
        variant: 'chat',
        placeholder: 'Ask Cobalt',
        value: 'How do I add a component?',
      },
    },
  ]),
  label: defineComponentScenarios([
    {
      id: 'optional',
      exportName: 'Optional',
      name: 'Optional',
      args: {
        required: false,
        optional: true,
        slotDefault: 'Company',
      },
    },
  ]),
  navDrawer: defineComponentScenarios([
    {
      id: 'withDisabledItem',
      exportName: 'WithDisabledItem',
      name: 'With disabled item',
      args: {
        optionItems: [
          { value: 'overview', label: 'Overview', icon: 'home' },
          { value: 'projects', label: 'Projects', icon: 'star' },
          { value: 'billing', label: 'Billing', icon: 'warning', disabled: true },
          { value: 'settings', label: 'Settings', icon: 'settings' },
        ],
      },
    },
  ]),
  navRailBar: defineComponentScenarios([
    {
      id: 'withDisabledItem',
      exportName: 'WithDisabledItem',
      name: 'With disabled item',
      args: {
        optionItems: [
          { value: 'overview', label: 'Overview', icon: 'home' },
          { value: 'search', label: 'Search', icon: 'search' },
          { value: 'billing', label: 'Billing', icon: 'warning', disabled: true },
          { value: 'settings', label: 'Settings', icon: 'settings' },
        ],
      },
    },
  ]),
  radio: defineComponentScenarios([
    {
      id: 'disabled',
      exportName: 'Disabled',
      name: 'Disabled',
      args: {
        disabled: true,
      },
    },
  ]),
  radioGroup: defineComponentScenarios([
    {
      id: 'withDisabledOption',
      exportName: 'WithDisabledOption',
      name: 'With disabled option',
      args: {
        optionItems: [
          { value: 'starter', label: 'Starter' },
          { value: 'team', label: 'Team' },
          { value: 'enterprise', label: 'Enterprise', disabled: true },
        ],
      },
    },
  ]),
};

export function getStorybookScenarios(componentId) {
  return [overviewScenario, ...(storybookScenarioDefinitions[componentId] ?? [])];
}

export function getStorybookScenario(componentId, scenarioId) {
  return getStorybookScenarios(componentId).find((scenario) => scenario.id === scenarioId);
}
