import { defineComponent, h, onMounted, onUnmounted, ref, type PropType } from 'vue';
import type { ListboxOrientation } from '@cobalt/components/listbox';
import type { Validator } from '@cobalt/components/validation';
import '@cobalt/components/listbox';

export type CoListboxProps = {
  label?: string;
  helpText?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  requiredMessage?: string;
  multipleChoice?: boolean;
  orientation?: ListboxOrientation;
  selectionFollowsFocus?: boolean;
  rotateKeyboardNavigation?: boolean;
  hasNoDefaultSelected?: boolean;
  modelValue?: unknown;
  validators?: Validator[];
};

export type CoOptionProps = {
  value?: string;
  choiceValue?: unknown;
  checked?: boolean;
  disabled?: boolean;
  active?: boolean;
};

export const CoListbox = defineComponent({
  name: 'CoListbox',
  props: {
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
    disabled: {
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
    multipleChoice: {
      type: Boolean,
      default: false,
    },
    orientation: {
      type: String as PropType<ListboxOrientation>,
      default: 'vertical',
    },
    selectionFollowsFocus: {
      type: Boolean,
      default: false,
    },
    rotateKeyboardNavigation: {
      type: Boolean,
      default: false,
    },
    hasNoDefaultSelected: {
      type: Boolean,
      default: false,
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
  emits: ['co-change'],
  setup(props, { emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);
    const forwardChange = (event: Event) => emit('co-change', event);

    onMounted(() => {
      elRef.value?.addEventListener('co-change', forwardChange);
    });

    onUnmounted(() => {
      elRef.value?.removeEventListener('co-change', forwardChange);
    });

    return () =>
      h(
        'co-listbox',
        {
          ref: elRef,
          label: props.label,
          helpText: props.helpText,
          name: props.name,
          disabled: props.disabled || undefined,
          required: props.required || undefined,
          requiredMessage: props.requiredMessage,
          multipleChoice: props.multipleChoice || undefined,
          orientation: props.orientation,
          selectionFollowsFocus: props.selectionFollowsFocus || undefined,
          rotateKeyboardNavigation: props.rotateKeyboardNavigation || undefined,
          hasNoDefaultSelected: props.hasNoDefaultSelected || undefined,
          modelValue: props.modelValue,
          validators: props.validators,
        },
        slots.default?.(),
      );
  },
});

export const CoOption = defineComponent({
  name: 'CoOption',
  props: {
    value: {
      type: String,
      default: undefined,
    },
    choiceValue: {
      type: null,
      default: undefined,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'co-option',
        {
          value: props.value,
          choiceValue: props.choiceValue,
          checked: props.checked || undefined,
          disabled: props.disabled || undefined,
          active: props.active || undefined,
        },
        slots.default?.(),
      );
  },
});
