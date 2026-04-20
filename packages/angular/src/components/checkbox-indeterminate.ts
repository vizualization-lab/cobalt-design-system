import { Directive, ElementRef, effect, inject, input } from '@angular/core';
import '@cobalt/components/checkbox-indeterminate';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-checkbox-indeterminate',
  standalone: true,
})
export class CoCheckboxIndeterminate {
  readonly value = input('');
  readonly checked = input(false);
  readonly indeterminate = input(false);
  readonly mixedState = input(false);
  readonly disabled = input(false);

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.choiceValue = this.value();
      el.checked = this.checked();
      el.indeterminate = this.indeterminate();
      el.mixedState = this.mixedState();
      el.disabled = this.disabled();
    });
  }
}
