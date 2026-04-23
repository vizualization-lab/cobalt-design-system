import { defineComponent, h } from 'vue';
import '@cobalt/components/nav-drawer-item';

export type CoNavDrawerItemProps = {
  value?: string;
  icon?: string;
  href?: string;
  selected?: boolean;
  disabled?: boolean;
};

export const CoNavDrawerItem = defineComponent({
  name: 'CoNavDrawerItem',
  props: {
    value: { type: String, default: '' },
    icon: { type: String, default: '' },
    href: { type: String, default: undefined },
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'co-nav-drawer-item',
        {
          value: props.value,
          icon: props.icon,
          href: props.href,
          selected: props.selected || undefined,
          disabled: props.disabled || undefined,
        },
        slots.default?.(),
      );
  },
});
