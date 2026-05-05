import { defineComponent, h, onMounted, onUnmounted, ref, type PropType } from 'vue';
import type { InputSize } from '@cobalt/components/input';
import type { Validator } from '@cobalt/components/validation';
import '@cobalt/components/input';

export type CoInputProps = {
  size?: InputSize;
  danger?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  requiredMessage?: string;
  emailMessage?: string;
  pattern?: string;
  patternMessage?: string;
  minLength?: number;
  minLengthMessage?: string;
  maxLength?: number;
  maxLengthMessage?: string;
  label?: string;
  helpText?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  modelValue?: unknown;
  validators?: Validator[];
};

export const CoInput = defineComponent({
  name: 'CoInput',
  props: {
    size: {
      type: String as PropType<InputSize>,
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
    requiredMessage: {
      type: String,
      default: undefined,
    },
    emailMessage: {
      type: String,
      default: undefined,
    },
    pattern: {
      type: String,
      default: undefined,
    },
    patternMessage: {
      type: String,
      default: undefined,
    },
    minLength: {
      type: Number,
      default: undefined,
    },
    minLengthMessage: {
      type: String,
      default: undefined,
    },
    maxLength: {
      type: Number,
      default: undefined,
    },
    maxLengthMessage: {
      type: String,
      default: undefined,
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
    type: {
      type: String,
      default: 'text',
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
    validators: {
      type: Array as PropType<Validator[]>,
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
        'co-input',
        {
          ref: elRef,
          size: props.size,
          danger: props.danger || undefined,
          disabled: props.disabled || undefined,
          readOnly: props.readOnly || undefined,
          required: props.required || undefined,
          requiredMessage: props.requiredMessage,
          emailMessage: props.emailMessage,
          pattern: props.pattern,
          patternMessage: props.patternMessage,
          minLength: props.minLength,
          minLengthMessage: props.minLengthMessage,
          maxLength: props.maxLength,
          maxLengthMessage: props.maxLengthMessage,
          label: props.label,
          helpText: props.helpText,
          name: props.name,
          type: props.type,
          placeholder: props.placeholder,
          value: props.value,
          modelValue: props.modelValue,
          validators: props.validators,
        },
        slots.default?.(),
      );
  },
});
