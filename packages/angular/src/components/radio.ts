import { Directive, ElementRef, effect, inject, input } from '@angular/core';
import '@cobalt/components/radio';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-radio',
  standalone: true,
})
export class CoRadio {
  readonly value = input('');
  readonly checked = input(false);
  readonly disabled = input(false);

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.choiceValue = this.value();
      el.checked = this.checked();
      el.disabled = this.disabled();
    });
  }
}
