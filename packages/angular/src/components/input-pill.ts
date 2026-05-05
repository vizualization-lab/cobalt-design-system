import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import type { InputPillVariant } from '@cobalt/components/input-pill';
import type { InputSize } from '@cobalt/components/input';
import type { Validator } from '@cobalt/components/validation';
import '@cobalt/components/input-pill';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-input-pill',
  standalone: true,
})
export class CoInputPill implements OnInit {
  readonly variant = input<InputPillVariant>('default');
  readonly actionIcon = input<string | undefined>();
  readonly prefixIcon = input<string | undefined>();
  readonly size = input<InputSize>('md');
  readonly disabled = input(false);
  readonly required = input(false);
  readonly requiredMessage = input<string | undefined>();
  readonly pattern = input<string | undefined>();
  readonly patternMessage = input<string | undefined>();
  readonly validators = input<Validator[] | undefined>();

  readonly coAction = output<CustomEvent>();
  readonly coFocus = output<CustomEvent>();
  readonly coBlur = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.variant = this.variant();
      el.size = this.size();
      el.disabled = this.disabled();
      el.required = this.required();
      const requiredMessage = this.requiredMessage();
      if (requiredMessage !== undefined) el.requiredMessage = requiredMessage;
      const pattern = this.pattern();
      if (pattern !== undefined) el.pattern = pattern;
      const patternMessage = this.patternMessage();
      if (patternMessage !== undefined) el.patternMessage = patternMessage;
      const validators = this.validators();
      if (validators !== undefined) el.validators = validators;
      const ai = this.actionIcon();
      if (ai !== undefined) el.actionIcon = ai;
      const pi = this.prefixIcon();
      if (pi !== undefined) el.prefixIcon = pi;
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-action', (e: Event) => this.coAction.emit(e as CustomEvent));
    this.el.addEventListener('co-focus', (e: Event) => this.coFocus.emit(e as CustomEvent));
    this.el.addEventListener('co-blur', (e: Event) => this.coBlur.emit(e as CustomEvent));
  }
}
