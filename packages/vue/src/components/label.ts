import { defineComponent, h } from 'vue';
import '@cobalt/components/label';

export type CoLabelProps = {
  htmlFor?: string;
  required?: boolean;
  optional?: boolean;
  optionalLabel?: string;
};

export const CoLabel = defineComponent({
  name: 'CoLabel',
  props: {
    htmlFor: {
      type: String,
      default: undefined,
    },
    required: {
      type: Boolean,
      default: false,
    },
    optional: {
      type: Boolean,
      default: false,
    },
    optionalLabel: {
      type: String,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'co-label',
        {
          htmlFor: props.htmlFor,
          required: props.required || undefined,
          optional: props.optional || undefined,
          optionalLabel: props.optionalLabel,
        },
        slots.default?.(),
      );
  },
});
