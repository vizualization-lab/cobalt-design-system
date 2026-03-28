import { defineComponent, h, type PropType } from 'vue';
import type { IconVariant, IconSize } from '@cobalt/components/icon';
import '@cobalt/components/icon';

export type CoIconProps = {
  name?: string;
  variant?: IconVariant;
  size?: IconSize;
  fill?: boolean;
  label?: string;
};

export const CoIcon = defineComponent({
  name: 'CoIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
    variant: {
      type: String as PropType<IconVariant>,
      default: 'outlined',
    },
    size: {
      type: String as PropType<IconSize>,
      default: 'md',
    },
    fill: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    return () =>
      h('co-icon', {
        name: props.name,
        variant: props.variant,
        size: props.size,
        fill: props.fill,
        label: props.label,
      });
  },
});
