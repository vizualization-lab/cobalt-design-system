import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import '@cobalt/components/form';

/**
 * Angular directive wrapping the `<co-form>` web component.
 *
 * @example
 * ```html
 * <co-form label="Contact" (coSubmit)="onSubmit($event)">
 *   <co-input label="Name" name="name"></co-input>
 * </co-form>
 * ```
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-form',
  standalone: true,
})
export class CoForm implements OnInit {
  readonly disabled = input(false);
  readonly label = input<string | undefined>();
  readonly helpText = input<string | undefined>();
  readonly name = input<string | undefined>();

  readonly coSubmit = output<CustomEvent>();
  readonly coReset = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.disabled = this.disabled();

      const label = this.label();
      if (label !== undefined) el.label = label;
      const helpText = this.helpText();
      if (helpText !== undefined) el.helpText = helpText;
      const name = this.name();
      if (name !== undefined) el.name = name;
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-submit', (e: Event) => {
      this.coSubmit.emit(e as CustomEvent);
    });
    this.el.addEventListener('co-reset', (e: Event) => {
      this.coReset.emit(e as CustomEvent);
    });
  }
}
