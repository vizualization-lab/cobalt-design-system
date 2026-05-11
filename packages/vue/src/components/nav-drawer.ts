import { defineComponent, h, ref, onMounted, onUnmounted } from 'vue';
import { registerElement } from '../register-element.js';

registerElement(() => import('@cobalt/components/nav-drawer'));

export type CoNavDrawerProps = { open?: boolean; value?: string; label?: string };

export const CoNavDrawer = defineComponent({
  name: 'CoNavDrawer',
  props: {
    open: { type: Boolean, default: true },
    value: { type: String, default: '' },
    label: { type: String, default: 'Navigation' },
  },
  emits: ['co-change'],
  setup(props, { attrs, emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);
    const handler = (event: Event) => emit('co-change', event);

    onMounted(() => {
      elRef.value?.addEventListener('co-change', handler);
    });

    onUnmounted(() => {
      elRef.value?.removeEventListener('co-change', handler);
    });

    return () =>
      h(
        'co-nav-drawer',
        {
          ...attrs,
          ref: elRef,
          open: props.open || undefined,
          value: props.value,
          label: props.label,
        },
        slots.default?.(),
      );
  },
});
