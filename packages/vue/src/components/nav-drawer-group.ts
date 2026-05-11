import { defineComponent, h, ref, onMounted, onUnmounted } from 'vue';
import { registerElement } from '../register-element.js';

registerElement(() => import('@cobalt/components/nav-drawer-group'));

export type CoNavDrawerGroupProps = { label?: string; value?: string; open?: boolean };

export const CoNavDrawerGroup = defineComponent({
  name: 'CoNavDrawerGroup',
  props: {
    label: { type: String, default: '' },
    value: { type: String, default: '' },
    open: { type: Boolean, default: false },
  },
  emits: ['co-toggle'],
  setup(props, { attrs, emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);
    const handler = (event: Event) => emit('co-toggle', event);

    onMounted(() => {
      elRef.value?.addEventListener('co-toggle', handler);
    });

    onUnmounted(() => {
      elRef.value?.removeEventListener('co-toggle', handler);
    });

    return () =>
      h(
        'co-nav-drawer-group',
        {
          ...attrs,
          ref: elRef,
          label: props.label,
          value: props.value,
          open: props.open || undefined,
        },
        slots.default?.(),
      );
  },
});
