import { defineComponent, h, ref, onMounted, onUnmounted, type PropType } from 'vue';
import type { InputPillVariant } from '@cobalt/components/input-pill';
import type { InputSize } from '@cobalt/components/input';
import '@cobalt/components/input-pill';

export type CoInputPillProps = {
  variant?: InputPillVariant;
  actionIcon?: string;
  prefixIcon?: string;
  placeholder?: string;
  size?: InputSize;
  disabled?: boolean;
};

export const CoInputPill = defineComponent({
  name: 'CoInputPill',
  props: {
    variant: { type: String as PropType<InputPillVariant>, default: 'default' },
    actionIcon: { type: String, default: undefined },
    prefixIcon: { type: String, default: undefined },
    placeholder: { type: String, default: '' },
    size: { type: String as PropType<InputSize>, default: 'md' },
    disabled: { type: Boolean, default: false },
  },
  emits: ['co-action', 'co-focus', 'co-blur', 'co-input', 'co-change'],
  setup(props, { emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);
    const events: Array<[string, (e: Event) => void]> = [
      ['co-action', (e: Event) => emit('co-action', e)],
      ['co-focus', (e: Event) => emit('co-focus', e)],
      ['co-blur', (e: Event) => emit('co-blur', e)],
      ['co-input', (e: Event) => emit('co-input', e)],
      ['co-change', (e: Event) => emit('co-change', e)],
    ];
    onMounted(() => {
      const el = elRef.value;
      if (!el) return;
      for (const [event, handler] of events) el.addEventListener(event, handler);
    });
    onUnmounted(() => {
      const el = elRef.value;
      if (!el) return;
      for (const [event, handler] of events) el.removeEventListener(event, handler);
    });
    return () =>
      h(
        'co-input-pill',
        {
          ref: elRef,
          variant: props.variant,
          'action-icon': props.actionIcon,
          'prefix-icon': props.prefixIcon,
          placeholder: props.placeholder,
          size: props.size,
          disabled: props.disabled || undefined,
        },
        slots.default?.(),
      );
  },
});
