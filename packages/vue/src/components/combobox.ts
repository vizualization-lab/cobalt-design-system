import { defineComponent, h, onMounted, onUnmounted, ref, type PropType } from 'vue';
import type {
  ComboboxAutocomplete,
  ComboboxMatchMode,
  ComboboxSize,
} from '@cobalt/components/combobox';
import type { Validator } from '@cobalt/components/validation';
import '@cobalt/components/combobox';
import { CoOption, type CoOptionProps } from './option.js';

export { CoOption, type CoOptionProps };

export type CoComboboxProps = {
  size?: ComboboxSize;
  danger?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  requiredMessage?: string;
  pattern?: string;
  patternMessage?: string;
  label?: string;
  helpText?: string;
  name?: string;
  value?: string;
  modelValue?: unknown;
  autocomplete?: ComboboxAutocomplete;
  matchMode?: ComboboxMatchMode;
  showAllOnEmpty?: boolean;
  selectionFollowsFocus?: boolean;
  rotateKeyboardNavigation?: boolean;
  hasNoDefaultSelected?: boolean;
  multiple?: boolean;
  multipleChoice?: boolean;
  allowCustomChoice?: boolean;
  requireOptionMatch?: boolean;
  validators?: Validator[];
};

export const CoCombobox = defineComponent({
  name: 'CoCombobox',
  props: {
    size: {
      type: String as PropType<ComboboxSize>,
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
    pattern: {
      type: String,
      default: undefined,
    },
    patternMessage: {
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
    value: {
      type: String,
      default: undefined,
    },
    modelValue: {
      type: null,
      default: undefined,
    },
    autocomplete: {
      type: String as PropType<ComboboxAutocomplete>,
      default: 'both',
    },
    matchMode: {
      type: String as PropType<ComboboxMatchMode>,
      default: 'all',
    },
    showAllOnEmpty: {
      type: Boolean,
      default: false,
    },
    selectionFollowsFocus: {
      type: Boolean,
      default: true,
    },
    rotateKeyboardNavigation: {
      type: Boolean,
      default: true,
    },
    hasNoDefaultSelected: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    multipleChoice: {
      type: Boolean,
      default: false,
    },
    allowCustomChoice: {
      type: Boolean,
      default: false,
    },
    requireOptionMatch: {
      type: Boolean as PropType<boolean | undefined>,
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
        'co-combobox',
        {
          ref: elRef,
          size: props.size,
          danger: props.danger || undefined,
          disabled: props.disabled || undefined,
          readOnly: props.readOnly || undefined,
          required: props.required || undefined,
          requiredMessage: props.requiredMessage,
          pattern: props.pattern,
          patternMessage: props.patternMessage,
          label: props.label,
          helpText: props.helpText,
          name: props.name,
          value: props.value,
          modelValue: props.modelValue,
          autocomplete: props.autocomplete,
          matchMode: props.matchMode,
          showAllOnEmpty: props.showAllOnEmpty || undefined,
          selectionFollowsFocus: props.selectionFollowsFocus,
          rotateKeyboardNavigation: props.rotateKeyboardNavigation,
          hasNoDefaultSelected: props.hasNoDefaultSelected || undefined,
          multiple: props.multiple || undefined,
          multipleChoice: props.multipleChoice || undefined,
          allowCustomChoice: props.allowCustomChoice || undefined,
          ...(props.requireOptionMatch === undefined
            ? {}
            : { requireOptionMatch: props.requireOptionMatch }),
          validators: props.validators,
        },
        slots.default?.(),
      );
  },
});
