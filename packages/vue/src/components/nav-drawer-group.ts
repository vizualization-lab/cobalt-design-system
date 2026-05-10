import { defineComponent, h, ref, onMounted } from 'vue';
import '@cobalt/components/nav-drawer-group';

export type CoNavDrawerGroupProps = { label?: string; value?: string; open?: boolean };

export const CoNavDrawerGroup = defineComponent({
  name: 'CoNavDrawerGroup',
  props: {
    label: { type: String, default: '' },
    value: { type: String, default: '' },
    open: { type: Boolean, default: false },
  },
  emits: ['co-toggle'],
  setup(props, { emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);
    onMounted(() => {
      elRef.value?.addEventListener('co-toggle', (e: Event) => emit('co-toggle', e));
    });
    return () =>
      h(
        'co-nav-drawer-group',
        {
          ref: elRef,
          label: props.label,
          value: props.value,
          open: props.open || undefined,
        },
        slots.default?.(),
      );
  },
});
