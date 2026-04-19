import { defineComponent, h } from 'vue';
import '@cobalt/components/radio';

export type CoRadioProps = {
  value?: string;
  checked?: boolean;
  disabled?: boolean;
};

export const CoRadio = defineComponent({
  name: 'CoRadio',
  props: {
    value: { type: String, default: '' },
    checked: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'co-radio',
        {
          value: props.value,
          checked: props.checked || undefined,
          disabled: props.disabled || undefined,
        },
        slots.default?.(),
      );
  },
});
