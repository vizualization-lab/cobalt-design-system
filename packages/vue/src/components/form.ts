import { defineComponent, h, onMounted, onUnmounted, ref } from 'vue';
import '@cobalt/components/form';

export type CoFormProps = {
  disabled?: boolean;
  label?: string;
  helpText?: string;
  name?: string;
};

export const CoForm = defineComponent({
  name: 'CoForm',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: undefined,
    },
    helpText: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: undefined,
    },
  },
  emits: ['co-submit', 'co-invalid-submit', 'co-reset'],
  setup(props, { emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);

    const forward = (name: 'co-submit' | 'co-invalid-submit' | 'co-reset') => (event: Event) => {
      emit(name, event);
    };

    const listeners = {
      'co-submit': forward('co-submit'),
      'co-invalid-submit': forward('co-invalid-submit'),
      'co-reset': forward('co-reset'),
    };

    onMounted(() => {
      const el = elRef.value;
      if (!el) return;

      for (const [name, listener] of Object.entries(listeners)) {
        el.addEventListener(name, listener);
      }
    });

    onUnmounted(() => {
      const el = elRef.value;
      if (!el) return;

      for (const [name, listener] of Object.entries(listeners)) {
        el.removeEventListener(name, listener);
      }
    });

    return () =>
      h(
        'co-form',
        {
          ref: elRef,
          disabled: props.disabled || undefined,
          label: props.label,
          helpText: props.helpText,
          name: props.name,
        },
        slots.default?.(),
      );
  },
});
