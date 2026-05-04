import { computed, defineComponent, h, type PropType } from 'vue';
import {
  CoAppShell,
  CoBanner,
  CoButton,
  CoButtonIcon,
  CoCard,
  CoCheckbox,
  CoCheckboxGroup,
  CoCheckboxIndeterminate,
  CoCombobox,
  CoForm,
  CoIcon,
  CoInput,
  CoInputPill,
  CoLabel,
  CoListbox,
  CoNavDrawer,
  CoNavDrawerItem,
  CoNavHeaderBar,
  CoNavRailBar,
  CoNavRailItem,
  CoNavSeparator,
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
  getWrapperStoryScenarioArgs,
  getWrapperStorySelectedValues,
  getWrapperStorySlotValue,
  type WrapperStoryArgs,
  type WrapperStoryComponentId,
} from '@cobalt/storybook-fixtures';

export function createVuePlaygroundStory(componentId: WrapperStoryComponentId) {
  return {
    args: getWrapperStoryArgs(componentId),
    argTypes: getWrapperStoryArgTypes(componentId),
    parameters: {
      cobaltSource: {
        componentId,
      },
    },
    render: createVueStoryRender(componentId),
  };
}

export function createVueScenarioStory(componentId: WrapperStoryComponentId, scenarioId: string) {
  return {
    args: getWrapperStoryScenarioArgs(componentId, scenarioId),
    parameters: {
      controls: { disable: true },
      cobaltSource: {
        componentId,
        scenarioId,
      },
    },
    render: createVueStoryRender(componentId),
  };
}

const CobaltVuePlaygroundStory = defineComponent({
  name: 'CobaltVuePlaygroundStory',
  props: {
    componentId: {
      type: String as PropType<WrapperStoryComponentId>,
      required: true,
    },
    args: {
      type: Object as PropType<WrapperStoryArgs>,
      required: true,
    },
  },
  setup(props) {
    const layoutClass = computed(() =>
      props.componentId === 'button' || props.componentId === 'icon' ? 'cobalt-row' : 'cobalt-grid',
    );

    return () =>
      h('div', { class: 'cobalt-story cobalt-stack' }, [
        h('section', { class: 'cobalt-section' }, [
          h('div', { class: layoutClass.value }, [renderComponent(props.componentId, props.args)]),
        ]),
      ]);
  },
});

function createVueStoryRender(componentId: WrapperStoryComponentId) {
  return (args: WrapperStoryArgs) =>
    defineComponent({
      name: `CobaltVue${componentId}Story`,
      components: { CobaltVuePlaygroundStory },
      setup() {
        const storyArgs = computed<WrapperStoryArgs>(() => ({ ...args }));

        return {
          componentId,
          storyArgs,
        };
      },
      template: `
        <CobaltVuePlaygroundStory :component-id="componentId" :args="storyArgs" />
      `,
    });
}

export function renderVuePlayground(componentId: WrapperStoryComponentId, args: WrapperStoryArgs) {
  return h(CobaltVuePlaygroundStory, { componentId, args });
}

function renderComponent(componentId: WrapperStoryComponentId, args: WrapperStoryArgs) {
  switch (componentId) {
    case 'appShell':
      return h(
        CoAppShell,
        {
          style: { blockSize: '620px' },
          ...getWrapperStoryComponentProps('appShell', args),
          ...getWrapperStoryEventProps('appShell', args),
        },
        {
          default: () => [
            h(
              CoBanner,
              { slot: 'banner' },
              {
                default: () => [
                  slotText('title', getWrapperStorySlotValue('appShell', 'banner', args)),
                  'Previewing the responsive application frame.',
                ],
              },
            ),
            h(
              CoNavHeaderBar,
              { slot: 'topnav', label: 'Application header' },
              {
                default: () => [
                  slotText('logo', getWrapperStorySlotValue('appShell', 'topnav', args)),
                  h(CoInputPill, { variant: 'search', placeholder: 'Search' }),
                ],
              },
            ),
            railBar('rail', args),
            drawer('drawer', args),
            h(
              CoCard,
              { slot: 'body', label: 'Dashboard content' },
              {
                default: () => [
                  slotText('header', getWrapperStorySlotValue('appShell', 'body', args)),
                  h(
                    'div',
                    { class: 'cobalt-stack' },
                    'Use the shell to compose persistent navigation, responsive drawer behavior, and page content.',
                  ),
                ],
              },
            ),
            slotText('footer', getWrapperStorySlotValue('appShell', 'footer', args)),
          ],
        },
      );
    case 'banner':
      return h(CoBanner, getWrapperStoryComponentProps('banner', args), {
        default: () => [
          slotText('title', getWrapperStorySlotValue('banner', 'title', args)),
          getWrapperStorySlotValue('banner', '', args),
        ],
      });
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
    case 'card':
      return h(
        CoCard,
        { class: 'cobalt-panel', ...getWrapperStoryComponentProps('card', args) },
        {
          default: () => [
            slotText('header', getWrapperStorySlotValue('card', 'header', args)),
            getWrapperStorySlotValue('card', '', args),
            slotText('footer', getWrapperStorySlotValue('card', 'footer', args)),
          ],
        },
      );
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
    case 'inputPill':
      return h(
        CoInputPill,
        {
          ...getWrapperStoryComponentProps('inputPill', args),
          ...getWrapperStoryEventProps('inputPill', args),
        },
        {
          default: () => [
            slotIcon('prefix', getWrapperStorySlotValue('inputPill', 'prefix', args)),
            slotIcon('suffix', getWrapperStorySlotValue('inputPill', 'suffix', args)),
          ],
        },
      );
    case 'label':
      return h(CoLabel, getWrapperStoryComponentProps('label', args), {
        default: () => [
          slotIcon('prefix', getWrapperStorySlotValue('label', 'prefix', args)),
          getWrapperStorySlotValue('label', '', args),
          slotIcon('suffix', getWrapperStorySlotValue('label', 'suffix', args)),
        ],
      });
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
    case 'navDrawer':
      return drawer(undefined, args);
    case 'navDrawerItem':
      return h(
        CoNavDrawer,
        { label: 'Drawer item preview' },
        {
          default: () =>
            h(CoNavDrawerItem, getWrapperStoryComponentProps('navDrawerItem', args), {
              default: () => [
                slotIcon('prefix', getWrapperStorySlotValue('navDrawerItem', 'prefix', args)),
                getWrapperStorySlotValue('navDrawerItem', '', args),
              ],
            }),
        },
      );
    case 'navHeaderBar':
      return h(CoNavHeaderBar, getWrapperStoryComponentProps('navHeaderBar', args), {
        default: () => [
          slotText('logo', getWrapperStorySlotValue('navHeaderBar', 'logo', args)),
          h('div', { class: 'cobalt-form-row' }, [
            h(CoButton, { variant: 'ghost', size: 'sm' }, { default: () => 'Overview' }),
            h(CoButton, { variant: 'ghost', size: 'sm' }, { default: () => 'Reports' }),
            h(CoButton, { variant: 'ghost', size: 'sm' }, { default: () => 'Settings' }),
          ]),
          slotText('avatar', getWrapperStorySlotValue('navHeaderBar', 'avatar', args)),
        ],
      });
    case 'navRailBar':
      return railBar(undefined, args);
    case 'navRailItem':
      return h(
        CoNavRailBar,
        { label: 'Rail item preview' },
        {
          default: () =>
            h(CoNavRailItem, getWrapperStoryComponentProps('navRailItem', args), {
              default: () => [
                slotIcon('icon', getWrapperStorySlotValue('navRailItem', 'icon', args)),
                getWrapperStorySlotValue('navRailItem', '', args),
              ],
            }),
        },
      );
    case 'navSeparator':
      return h(
        CoNavDrawer,
        { label: 'Separator preview' },
        {
          default: () => [
            h(
              CoNavDrawerItem,
              { value: 'overview', icon: 'home', selected: true },
              { default: () => 'Overview' },
            ),
            h(CoNavSeparator),
            h(
              CoNavDrawerItem,
              { value: 'settings', icon: 'settings' },
              { default: () => 'Settings' },
            ),
          ],
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

function drawer(slot: string | undefined, args: WrapperStoryArgs) {
  const selectedValues = getWrapperStorySelectedValues(args);

  return h(
    CoNavDrawer,
    {
      slot,
      ...getWrapperStoryComponentProps('navDrawer', args),
      ...getWrapperStoryEventProps('navDrawer', args),
    },
    {
      default: () => [
        ...getWrapperStoryOptionItems('navDrawer', args).map((item) =>
          h(
            CoNavDrawerItem,
            {
              key: item.value,
              value: item.value,
              icon: item.icon ?? 'home',
              selected: selectedValues.includes(item.value),
              disabled: item.disabled,
            },
            { default: () => item.label },
          ),
        ),
        h(CoNavSeparator),
        h(CoNavDrawerItem, { value: 'help', icon: 'info' }, { default: () => 'Help' }),
      ],
    },
  );
}

function railBar(slot: string | undefined, args: WrapperStoryArgs) {
  const selectedValues = getWrapperStorySelectedValues(args);

  return h(
    CoNavRailBar,
    {
      slot,
      ...getWrapperStoryComponentProps('navRailBar', args),
      ...getWrapperStoryEventProps('navRailBar', args),
    },
    {
      default: () =>
        getWrapperStoryOptionItems('navRailBar', args).map((item) =>
          h(
            CoNavRailItem,
            {
              key: item.value,
              value: item.value,
              icon: item.icon ?? 'home',
              selected: selectedValues.includes(item.value),
              disabled: item.disabled,
            },
            { default: () => item.label },
          ),
        ),
    },
  );
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
