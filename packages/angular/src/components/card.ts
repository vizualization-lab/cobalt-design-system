import { Directive, ElementRef, effect, inject, input } from '@angular/core';
import '@cobalt/components';

/**
 * Angular directive wrapping the `<co-card>` web component.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-card',
  standalone: true,
})
export class CoCard {
  readonly label = input('');

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.label = this.label();
    });
  }
}
