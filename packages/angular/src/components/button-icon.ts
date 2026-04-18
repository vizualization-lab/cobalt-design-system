import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import type { ButtonVariant, ButtonSize } from '@cobalt/components/button';
import type { ButtonIconLabelPosition } from '@cobalt/components/button-icon';
import '@cobalt/components/button-icon';

/**
 * Angular directive wrapping the `<co-button-icon>` web component.
 *
 * @example
 * ```html
 * <co-button-icon name="star" variant="primary" label="Favorite" (coFocus)="onFocus()">
 * </co-button-icon>
 * ```
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-button-icon',
  standalone: true,
})
export class CoButtonIcon implements OnInit {
  readonly name = input('');
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly label = input<string | undefined>();
  readonly labelPosition = input<ButtonIconLabelPosition>('bottom');
  readonly circle = input(false);
  readonly disabled = input(false);

  readonly coFocus = output<CustomEvent>();
  readonly coBlur = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.name = this.name();
      el.variant = this.variant();
      el.size = this.size();
      el.circle = this.circle();
      el.disabled = this.disabled();
      const label = this.label();
      if (label !== undefined) el.label = label;
      el.labelPosition = this.labelPosition();
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-focus', (e: Event) => {
      this.coFocus.emit(e as CustomEvent);
    });
    this.el.addEventListener('co-blur', (e: Event) => {
      this.coBlur.emit(e as CustomEvent);
    });
  }
}
