import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import type { SelectSize } from '@cobalt/components/select';
import type { Validator } from '@cobalt/components/validation';
import '@cobalt/components/select';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-select',
  standalone: true,
})
export class CoSelect implements OnInit {
  readonly size = input<SelectSize>('md');
  readonly danger = input(false);
  readonly disabled = input(false);
  readonly readOnly = input(false);
  readonly required = input(false);
  readonly requiredMessage = input<string | undefined>();
  readonly hasNoDefaultSelected = input(false);
  readonly validators = input<Validator[] | undefined>();

  readonly coChange = output<CustomEvent>();
  readonly coFocus = output<CustomEvent>();
  readonly coBlur = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.size = this.size();
      el.danger = this.danger();
      el.disabled = this.disabled();
      el.readOnly = this.readOnly();
      el.required = this.required();
      el.hasNoDefaultSelected = this.hasNoDefaultSelected();
      const requiredMessage = this.requiredMessage();
      if (requiredMessage !== undefined) el.requiredMessage = requiredMessage;
      const validators = this.validators();
      if (validators !== undefined) el.validators = validators;
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-change', (e: Event) => {
      this.coChange.emit(e as CustomEvent);
    });
    this.el.addEventListener('co-focus', (e: Event) => {
      this.coFocus.emit(e as CustomEvent);
    });
    this.el.addEventListener('co-blur', (e: Event) => {
      this.coBlur.emit(e as CustomEvent);
    });
  }
}
