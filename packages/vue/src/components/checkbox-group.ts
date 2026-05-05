import { defineComponent, h, ref, onMounted, onUnmounted } from 'vue';
import type { PropType } from 'vue';
import type { Validator } from '@cobalt/components/validation';
import '@cobalt/components/checkbox-group';

export type CoCheckboxGroupProps = {
  name?: string;
  disabled?: boolean;
  required?: boolean;
  requiredMessage?: string;
  validators?: Validator[];
};

export const CoCheckboxGroup = defineComponent({
  name: 'CoCheckboxGroup',
  props: {
    name: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    requiredMessage: { type: String, default: undefined },
    validators: { type: Array as PropType<Validator[]>, default: undefined },
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
      for (const [event, handler] of handlers) el.addEventListener(event, handler);
    });
    onUnmounted(() => {
      const el = elRef.value;
      if (!el) return;
      for (const [event, handler] of handlers) el.removeEventListener(event, handler);
    });
    return () =>
      h(
        'co-checkbox-group',
        {
          ref: elRef,
          name: props.name,
          disabled: props.disabled || undefined,
          required: props.required || undefined,
          requiredMessage: props.requiredMessage,
          validators: props.validators,
        },
        slots.default?.(),
      );
  },
});
