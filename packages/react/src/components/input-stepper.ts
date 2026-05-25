import React from 'react';
import { createComponent } from '@lit/react';
import { CoInputStepper as CoInputStepperElement } from '@cobalt/components/input-stepper';
import type { Validator } from '@cobalt/components/validation';

const CoInputStepperBase = createComponent({
  tagName: 'co-input-stepper',
  elementClass: CoInputStepperElement,
  react: React,
  events: {
    onCoFocus: 'co-focus',
    onCoBlur: 'co-blur',
    onCoInput: 'co-input',
    onCoChange: 'co-change',
  },
});

type CoInputStepperBaseProps = React.ComponentProps<typeof CoInputStepperBase>;

export type CoInputStepperProps = CoInputStepperBaseProps & {
  size?: 'sm' | 'md' | 'lg' | 'xl';
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

export const CoInputStepper = React.forwardRef<CoInputStepperElement, CoInputStepperProps>(
  (
    {
      size,
      danger,
      disabled,
      readOnly,
      required,
      requiredMessage,
      label,
      helpText,
      name,
      placeholder,
      value,
      modelValue,
      min,
      max,
      step,
      valueTextMapping,
      validators,
      ...rest
    },
    forwardedRef,
  ) => {
    const elementRef = React.useRef<CoInputStepperElement | null>(null);

    React.useImperativeHandle(forwardedRef, () => elementRef.current as CoInputStepperElement, []);

    React.useLayoutEffect(() => {
      const el = elementRef.current;
      if (!el) return;

      const props = {
        size,
        danger,
        disabled,
        readOnly,
        required,
        requiredMessage,
        label,
        helpText,
        name,
        placeholder,
        value,
        modelValue,
        min,
        max,
        step,
        valueTextMapping,
        validators,
      };

      for (const [key, propValue] of Object.entries(props)) {
        if (propValue !== undefined) {
          (el as any)[key] = propValue;
        }
      }
    }, [
      danger,
      disabled,
      helpText,
      label,
      max,
      min,
      modelValue,
      name,
      placeholder,
      readOnly,
      required,
      requiredMessage,
      size,
      step,
      validators,
      value,
      valueTextMapping,
    ]);

    return React.createElement(CoInputStepperBase, { ...rest, ref: elementRef });
  },
);

CoInputStepper.displayName = 'CoInputStepper';
