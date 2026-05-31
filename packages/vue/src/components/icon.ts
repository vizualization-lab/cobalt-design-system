import { defineComponent, h, ref, watchEffect, type PropType } from 'vue';
import type { IconSize, IconDescriptor } from '@cobalt/components/icon';
import { registerElement } from '../register-element.js';

registerElement(() => import('@cobalt/components/icon'));

export type CoIconProps = {
  name?: string;
  size?: IconSize;
  fill?: boolean;
  label?: string;
  icon?: IconDescriptor;
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
    icon: {
      type: Object as PropType<IconDescriptor>,
      default: undefined,
    },
  },
  setup(props, { attrs }) {
    const elementRef = ref<HTMLElement | null>(null);

    watchEffect(() => {
      const el = elementRef.value as (HTMLElement & { icon?: IconDescriptor }) | null;
      if (el) el.icon = props.icon;
    });

    return () =>
      h('co-icon', {
        ...attrs,
        ref: elementRef,
        name: props.name,
        size: props.size,
        fill: props.fill,
        label: props.label,
      });
  },
});
