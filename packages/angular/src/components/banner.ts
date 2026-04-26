import { Directive, ElementRef, effect, inject, input } from '@angular/core';
import '@cobalt/components';

/**
 * Angular directive wrapping the `<co-banner>` web component.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-banner',
  standalone: true,
})
export class CoBanner {
  readonly label = input('Banner');

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.label = this.label();
    });
  }
}
