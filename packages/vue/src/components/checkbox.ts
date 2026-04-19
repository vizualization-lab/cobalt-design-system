import { defineComponent, h } from 'vue';
import '@cobalt/components/checkbox';

export type CoCheckboxProps = {
  value?: string;
  checked?: boolean;
  disabled?: boolean;
};

export const CoCheckbox = defineComponent({
  name: 'CoCheckbox',
  props: {
    value: { type: String, default: '' },
    checked: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'co-checkbox',
        {
          value: props.value,
          checked: props.checked || undefined,
          disabled: props.disabled || undefined,
        },
        slots.default?.(),
      );
  },
});
