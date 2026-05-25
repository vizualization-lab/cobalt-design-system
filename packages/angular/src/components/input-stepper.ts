import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import type { InputStepperSize } from '@cobalt/components/input-stepper';
import type { Validator } from '@cobalt/components/validation';
import '@cobalt/components/input-stepper';

/**
 * Angular directive wrapping the `<co-input-stepper>` web component.
 *
 * @example
 * ```html
 * <co-input-stepper label="Quantity" min="0" max="10" (coInput)="onInput($event)"></co-input-stepper>
 * ```
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-input-stepper',
  standalone: true,
})
export class CoInputStepper implements OnInit {
  readonly size = input<InputStepperSize>('md');
  readonly danger = input(false);
  readonly disabled = input(false);
  readonly readOnly = input(false);
  readonly required = input(false);
  readonly requiredMessage = input<string | undefined>();
  readonly label = input<string | undefined>();
  readonly helpText = input<string | undefined>();
  readonly name = input<string | undefined>();
  readonly placeholder = input<string | undefined>();
  readonly value = input<string | undefined>();
  readonly modelValue = input<unknown>();
  readonly min = input<number | undefined>();
  readonly max = input<number | undefined>();
  readonly step = input<number | undefined>();
  readonly valueTextMapping = input<Record<number, string> | undefined>();
  readonly validators = input<Validator[] | undefined>();

  readonly coFocus = output<CustomEvent>();
  readonly coBlur = output<CustomEvent>();
  readonly coInput = output<CustomEvent>();
  readonly coChange = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.size = this.size();
      el.danger = this.danger();
      el.disabled = this.disabled();
      el.readOnly = this.readOnly();
      el.required = this.required();

      const requiredMessage = this.requiredMessage();
      if (requiredMessage !== undefined) el.requiredMessage = requiredMessage;
      const label = this.label();
      if (label !== undefined) el.label = label;
      const helpText = this.helpText();
      if (helpText !== undefined) el.helpText = helpText;
      const name = this.name();
      if (name !== undefined) el.name = name;
      const placeholder = this.placeholder();
      if (placeholder !== undefined) el.placeholder = placeholder;
      const value = this.value();
      if (value !== undefined) el.value = value;
      const modelValue = this.modelValue();
      if (modelValue !== undefined) el.modelValue = modelValue;
      const min = this.min();
      if (min !== undefined) el.min = min;
      const max = this.max();
      if (max !== undefined) el.max = max;
      const step = this.step();
      if (step !== undefined) el.step = step;
      const valueTextMapping = this.valueTextMapping();
      if (valueTextMapping !== undefined) el.valueTextMapping = valueTextMapping;
      const validators = this.validators();
      if (validators !== undefined) el.validators = validators;
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-focus', (e: Event) => {
      this.coFocus.emit(e as CustomEvent);
    });
    this.el.addEventListener('co-blur', (e: Event) => {
      this.coBlur.emit(e as CustomEvent);
    });
    this.el.addEventListener('co-input', (e: Event) => {
      this.coInput.emit(e as CustomEvent);
    });
    this.el.addEventListener('co-change', (e: Event) => {
      this.coChange.emit(e as CustomEvent);
    });
  }
}
