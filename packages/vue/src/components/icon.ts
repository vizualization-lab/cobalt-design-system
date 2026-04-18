import { defineComponent, h, type PropType } from 'vue';
import type { IconSize } from '@cobalt/components/icon';
import '@cobalt/components/icon';

export type CoIconProps = {
  name?: string;
  size?: IconSize;
  fill?: boolean;
  animated?: boolean;
  label?: string;
};

export const CoIcon = defineComponent({
  name: 'CoIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
    size: {
      type: String as PropType<IconSize>,
      default: 'md',
    },
    fill: {
      type: Boolean,
      default: false,
    },
    animated: {
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
        size: props.size,
        fill: props.fill,
        animated: props.animated,
        label: props.label,
      });
  },
});
