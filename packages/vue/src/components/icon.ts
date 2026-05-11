import { defineComponent, h, type PropType } from 'vue';
import type { IconSize } from '@cobalt/components/icon';
import { registerElement } from '../register-element.js';

registerElement(() => import('@cobalt/components/icon'));

export type CoIconProps = {
  name?: string;
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
  setup(props, { attrs }) {
    return () =>
      h('co-icon', {
        ...attrs,
        name: props.name,
        size: props.size,
        fill: props.fill,
        label: props.label,
      });
  },
});
