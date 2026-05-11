import { defineComponent, h } from 'vue';
import { registerElement } from '../register-element.js';

registerElement(() => import('@cobalt/components/option'));

export type CoOptionProps = {
  value?: string;
  choiceValue?: unknown;
  checked?: boolean;
  disabled?: boolean;
  active?: boolean;
};

export const CoOption = defineComponent({
  name: 'CoOption',
  props: {
    value: {
      type: String,
      default: undefined,
    },
    choiceValue: {
      type: null,
      default: undefined,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'co-option',
        {
          ...attrs,
          value: props.value,
          choiceValue: props.choiceValue,
          checked: props.checked || undefined,
          disabled: props.disabled || undefined,
          active: props.active || undefined,
        },
        slots.default?.(),
      );
  },
});
