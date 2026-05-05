import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import type { InputSize } from '@cobalt/components/input';
import type { Validator } from '@cobalt/components/validation';
import '@cobalt/components/input';

/**
 * Angular directive wrapping the `<co-input>` web component.
 *
 * @example
 * ```html
 * <co-input label="Email" placeholder="name@example.com" (coInput)="onInput($event)"></co-input>
 * ```
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-input',
  standalone: true,
})
export class CoInput implements OnInit {
  readonly size = input<InputSize>('md');
  readonly danger = input(false);
  readonly disabled = input(false);
  readonly readOnly = input(false);
  readonly required = input(false);
  readonly requiredMessage = input<string | undefined>();
  readonly emailMessage = input<string | undefined>();
  readonly pattern = input<string | undefined>();
  readonly patternMessage = input<string | undefined>();
  readonly minLength = input<number | undefined>();
  readonly minLengthMessage = input<string | undefined>();
  readonly maxLength = input<number | undefined>();
  readonly maxLengthMessage = input<string | undefined>();
  readonly label = input<string | undefined>();
  readonly helpText = input<string | undefined>();
  readonly name = input<string | undefined>();
  readonly type = input('text');
  readonly placeholder = input<string | undefined>();
  readonly value = input<string | undefined>();
  readonly modelValue = input<unknown>();
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
      el.type = this.type();

      const requiredMessage = this.requiredMessage();
      if (requiredMessage !== undefined) el.requiredMessage = requiredMessage;
      const emailMessage = this.emailMessage();
      if (emailMessage !== undefined) el.emailMessage = emailMessage;
      const pattern = this.pattern();
      if (pattern !== undefined) el.pattern = pattern;
      const patternMessage = this.patternMessage();
      if (patternMessage !== undefined) el.patternMessage = patternMessage;
      const minLength = this.minLength();
      if (minLength !== undefined) el.minLength = minLength;
      const minLengthMessage = this.minLengthMessage();
      if (minLengthMessage !== undefined) el.minLengthMessage = minLengthMessage;
      const maxLength = this.maxLength();
      if (maxLength !== undefined) el.maxLength = maxLength;
      const maxLengthMessage = this.maxLengthMessage();
      if (maxLengthMessage !== undefined) el.maxLengthMessage = maxLengthMessage;
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
