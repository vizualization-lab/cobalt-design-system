import { Directive, ElementRef, effect, inject, input } from '@angular/core';
import '@cobalt/components/label';

/**
 * Angular directive wrapping the `<co-label>` web component.
 *
 * @example
 * ```html
 * <co-label [htmlFor]="'email'" [required]="true">Email address</co-label>
 * ```
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-label',
  standalone: true,
})
export class CoLabel {
  readonly htmlFor = input<string | undefined>();
  readonly required = input(false);
  readonly optional = input(false);
  readonly optionalLabel = input<string | undefined>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      const htmlFor = this.htmlFor();
      if (htmlFor !== undefined) el.htmlFor = htmlFor;
      el.required = this.required();
      el.optional = this.optional();
      const optionalLabel = this.optionalLabel();
      if (optionalLabel !== undefined) el.optionalLabel = optionalLabel;
    });
  }
}
