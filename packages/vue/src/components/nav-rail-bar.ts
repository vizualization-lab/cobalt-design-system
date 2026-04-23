import { defineComponent, h, ref, onMounted, onUnmounted } from 'vue';
import '@cobalt/components';

export type CoNavRailBarProps = {
  value?: string;
  label?: string;
};

export const CoNavRailBar = defineComponent({
  name: 'CoNavRailBar',
  props: {
    value: { type: String, default: '' },
    label: { type: String, default: 'Side navigation' },
  },
  emits: ['co-change'],
  setup(props, { attrs, emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);

    const handler = (event: Event) => emit('co-change', event);

    onMounted(() => {
      const el = elRef.value as any;
      if (!el) return;
      el.value = props.value;
      el.label = props.label;
      el.addEventListener('co-change', handler);
    });

    onUnmounted(() => {
      const el = elRef.value;
      if (!el) return;
      el.removeEventListener('co-change', handler);
    });

    return () =>
      h(
        'co-nav-rail-bar',
        {
          ...attrs,
          ref: elRef,
          value: props.value,
          label: props.label,
        },
        slots.default?.(),
      );
  },
});
