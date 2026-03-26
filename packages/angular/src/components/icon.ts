import { Directive, ElementRef, effect, inject, input } from '@angular/core';
import type { IconVariant, IconSize } from '@cobalt/components/icon';
import '@cobalt/components/icon';

/**
 * Angular directive wrapping the `<co-icon>` web component.
 *
 * @example
 * ```html
 * <co-icon name="arrow-forward" variant="outlined" size="md"></co-icon>
 * <co-icon name="home" label="Home page"></co-icon>
 * ```
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-icon',
  standalone: true,
})
export class CoIconDirective {
  readonly name = input('');
  readonly variant = input<IconVariant>('outlined');
  readonly size = input<IconSize>('md');
  readonly label = input<string | undefined>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.name = this.name();
      el.variant = this.variant();
      el.size = this.size();
      const label = this.label();
      if (label !== undefined) el.label = label;
    });
  }
}
