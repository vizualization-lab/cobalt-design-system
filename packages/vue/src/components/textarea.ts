import { defineComponent, h, onMounted, onUnmounted, ref, type PropType } from 'vue';
import type { TextareaResize, TextareaSize } from '@cobalt/components/textarea';
import '@cobalt/components/textarea';

export type CoTextareaProps = {
  size?: TextareaSize;
  resize?: TextareaResize;
  danger?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  label?: string;
  helpText?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  modelValue?: unknown;
  rows?: number;
  maxRows?: number;
  maxLength?: number;
  minLength?: number;
};

export const CoTextarea = defineComponent({
  name: 'CoTextarea',
  props: {
    size: {
      type: String as PropType<TextareaSize>,
      default: 'md',
    },
    resize: {
      type: String as PropType<TextareaResize>,
      default: 'auto',
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
    placeholder: {
      type: String,
      default: undefined,
    },
    value: {
      type: String,
      default: undefined,
    },
    modelValue: {
      type: null,
      default: undefined,
    },
    rows: {
      type: Number,
      default: undefined,
    },
    maxRows: {
      type: Number,
      default: undefined,
    },
    maxLength: {
      type: Number,
      default: undefined,
    },
    minLength: {
      type: Number,
      default: undefined,
    },
  },
  emits: ['co-focus', 'co-blur', 'co-input', 'co-change'],
  setup(props, { emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);

    const forward = (name: 'co-focus' | 'co-blur' | 'co-input' | 'co-change') => (event: Event) => {
      emit(name, event);
    };

    const listeners = {
      'co-focus': forward('co-focus'),
      'co-blur': forward('co-blur'),
      'co-input': forward('co-input'),
      'co-change': forward('co-change'),
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
        'co-textarea',
        {
          ref: elRef,
          size: props.size,
          resize: props.resize,
          danger: props.danger || undefined,
          disabled: props.disabled || undefined,
          readOnly: props.readOnly || undefined,
          required: props.required || undefined,
          label: props.label,
          helpText: props.helpText,
          name: props.name,
          placeholder: props.placeholder,
          value: props.value,
          modelValue: props.modelValue,
          rows: props.rows,
          maxRows: props.maxRows,
          maxLength: props.maxLength,
          minLength: props.minLength,
        },
        slots.default?.(),
      );
  },
});
