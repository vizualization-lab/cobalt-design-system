import { defineComponent, h, ref, onMounted, onUnmounted } from 'vue';
import '@cobalt/components/radio-group';

export type CoRadioGroupProps = {
  name?: string;
  disabled?: boolean;
  required?: boolean;
};

export const CoRadioGroup = defineComponent({
  name: 'CoRadioGroup',
  props: {
    name: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
  },
  emits: ['co-change'],
  setup(props, { emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);

    const handlers: Array<[string, (e: Event) => void]> = [
      ['co-change', (e: Event) => emit('co-change', e)],
    ];

    onMounted(() => {
      const el = elRef.value;
      if (!el) return;
      for (const [event, handler] of handlers) {
        el.addEventListener(event, handler);
      }
    });

    onUnmounted(() => {
      const el = elRef.value;
      if (!el) return;
      for (const [event, handler] of handlers) {
        el.removeEventListener(event, handler);
      }
    });

    return () =>
      h(
        'co-radio-group',
        {
          ref: elRef,
          name: props.name,
          disabled: props.disabled || undefined,
          required: props.required || undefined,
        },
        slots.default?.(),
      );
  },
});
