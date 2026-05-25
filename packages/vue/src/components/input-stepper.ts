import { defineComponent, h, onMounted, onUnmounted, ref, type PropType } from 'vue';
import type { InputStepperSize } from '@cobalt/components/input-stepper';
import type { Validator } from '@cobalt/components/validation';
import { registerElement } from '../register-element.js';

registerElement(() => import('@cobalt/components/input-stepper'));

export type CoInputStepperProps = {
  size?: InputStepperSize;
  danger?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  requiredMessage?: string;
  label?: string;
  helpText?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  modelValue?: unknown;
  min?: number;
  max?: number;
  step?: number;
  valueTextMapping?: Record<number, string>;
  validators?: Validator[];
};

export const CoInputStepper = defineComponent({
  name: 'CoInputStepper',
  props: {
    size: {
      type: String as PropType<InputStepperSize>,
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
    min: {
      type: Number,
      default: undefined,
    },
    max: {
      type: Number,
      default: undefined,
    },
    step: {
      type: Number,
      default: undefined,
    },
    valueTextMapping: {
      type: Object as PropType<Record<number, string>>,
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
        'co-input-stepper',
        {
          ref: elRef,
          size: props.size,
          danger: props.danger || undefined,
          disabled: props.disabled || undefined,
          readOnly: props.readOnly || undefined,
          required: props.required || undefined,
          requiredMessage: props.requiredMessage,
          label: props.label,
          helpText: props.helpText,
          name: props.name,
          placeholder: props.placeholder,
          value: props.value,
          modelValue: props.modelValue,
          min: props.min,
          max: props.max,
          step: props.step,
          valueTextMapping: props.valueTextMapping,
          validators: props.validators,
        },
        slots.default?.(),
      );
  },
});
