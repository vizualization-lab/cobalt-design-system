import { defineComponent, h, ref, onMounted, onUnmounted, type PropType } from 'vue';
import type { SelectSize } from '@cobalt/components/select';
import '@cobalt/components/select';

export type CoSelectProps = {
  size?: SelectSize;
  danger?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  hasNoDefaultSelected?: boolean;
};

export const CoSelect = defineComponent({
  name: 'CoSelect',
  props: {
    size: {
      type: String as PropType<SelectSize>,
      default: 'md',
    },
    danger: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    hasNoDefaultSelected: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['co-change', 'co-focus', 'co-blur'],
  setup(props, { emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);

    const handlers: Array<[string, (e: Event) => void]> = [
      ['co-change', (e: Event) => emit('co-change', e)],
      ['co-focus', (e: Event) => emit('co-focus', e)],
      ['co-blur', (e: Event) => emit('co-blur', e)],
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
        'co-select',
        {
          ref: elRef,
          size: props.size,
          danger: props.danger || undefined,
          disabled: props.disabled || undefined,
          readOnly: props.readOnly || undefined,
          required: props.required || undefined,
          'has-no-default-selected': props.hasNoDefaultSelected || undefined,
        },
        slots.default?.(),
      );
  },
});
