import { defineComponent, h, ref, onMounted, onUnmounted, type PropType } from 'vue';
import '@cobalt/components';

type NavRailItemTarget = '_blank' | '_self' | '_parent' | '_top';

export type CoNavRailItemProps = {
  value?: string;
  icon?: string;
  href?: string;
  target?: NavRailItemTarget;
  label?: string;
  selected?: boolean;
  disabled?: boolean;
};

export const CoNavRailItem = defineComponent({
  name: 'CoNavRailItem',
  props: {
    value: { type: String, default: '' },
    icon: { type: String, default: '' },
    href: { type: String, default: undefined },
    target: {
      type: String as PropType<NavRailItemTarget>,
      default: undefined,
    },
    label: { type: String, default: undefined },
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }) {
    const elRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      const el = elRef.value as any;
      if (!el) return;
      el.value = props.value;
      el.icon = props.icon;
      el.href = props.href;
      el.target = props.target;
      el.label = props.label;
      el.selected = props.selected;
      el.disabled = props.disabled;
    });

    onUnmounted(() => {
      elRef.value = null;
    });

    return () =>
      h(
        'co-nav-rail-item',
        {
          ...attrs,
          ref: elRef,
          value: props.value,
          icon: props.icon,
          href: props.href,
          target: props.target,
          label: props.label,
          selected: props.selected || undefined,
          disabled: props.disabled || undefined,
        },
        {
          default: () => slots.default?.(),
          icon: () => slots.icon?.(),
        },
      );
  },
});
