import { defineComponent, h, ref, onMounted, onUnmounted } from 'vue';
import '@cobalt/components/nav-drawer';

export type CoNavDrawerProps = { open?: boolean; value?: string; label?: string };

export const CoNavDrawer = defineComponent({
  name: 'CoNavDrawer',
  props: {
    open: { type: Boolean, default: true },
    value: { type: String, default: '' },
    label: { type: String, default: 'Navigation' },
  },
  emits: ['co-change'],
  setup(props, { emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);
    onMounted(() => {
      elRef.value?.addEventListener('co-change', (e: Event) => emit('co-change', e));
    });
    onUnmounted(() => {});
    return () =>
      h(
        'co-nav-drawer',
        { ref: elRef, open: props.open || undefined, value: props.value, label: props.label },
        slots.default?.(),
      );
  },
});
