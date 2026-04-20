import { defineComponent, h } from 'vue';
import '@cobalt/components/checkbox-indeterminate';

export type CoCheckboxIndeterminateProps = {
  value?: string;
  checked?: boolean;
  indeterminate?: boolean;
  mixedState?: boolean;
  disabled?: boolean;
};

export const CoCheckboxIndeterminate = defineComponent({
  name: 'CoCheckboxIndeterminate',
  props: {
    value: { type: String, default: '' },
    checked: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
    mixedState: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'co-checkbox-indeterminate',
        {
          value: props.value,
          checked: props.checked || undefined,
          indeterminate: props.indeterminate || undefined,
          'mixed-state': props.mixedState || undefined,
          disabled: props.disabled || undefined,
        },
        slots.default?.(),
      );
  },
});
