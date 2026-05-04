import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import type { InputPillVariant } from '@cobalt/components/input-pill';
import type { InputSize } from '@cobalt/components/input';
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
  readonly name = input<string | undefined>();
  readonly type = input('text');
  readonly placeholder = input<string | undefined>();
  readonly value = input('');
  readonly modelValue = input<string | undefined>();

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
      el.type = this.type();
      el.value = this.value();
      const ai = this.actionIcon();
      if (ai !== undefined) el.actionIcon = ai;
      const pi = this.prefixIcon();
      if (pi !== undefined) el.prefixIcon = pi;
      const name = this.name();
      if (name !== undefined) el.name = name;
      const placeholder = this.placeholder();
      if (placeholder !== undefined) el.placeholder = placeholder;
      const modelValue = this.modelValue();
      if (modelValue !== undefined) el.modelValue = modelValue;
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-action', (e: Event) => this.coAction.emit(e as CustomEvent));
    this.el.addEventListener('co-focus', (e: Event) => this.coFocus.emit(e as CustomEvent));
    this.el.addEventListener('co-blur', (e: Event) => this.coBlur.emit(e as CustomEvent));
  }
}
