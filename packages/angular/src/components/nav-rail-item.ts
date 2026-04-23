import { Directive, ElementRef, effect, inject, input, type OnInit } from '@angular/core';
import '@cobalt/components';

type NavRailItemTarget = '_blank' | '_self' | '_parent' | '_top';

/**
 * Angular directive wrapping the `<co-nav-rail-item>` web component.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-nav-rail-item',
  standalone: true,
})
export class CoNavRailItem implements OnInit {
  readonly value = input('');
  readonly icon = input('');
  readonly href = input<string | undefined>();
  readonly target = input<NavRailItemTarget | undefined>();
  readonly label = input<string | undefined>();
  readonly selected = input(false);
  readonly disabled = input(false);

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.value = this.value();
      el.icon = this.icon();
      el.href = this.href();
      el.target = this.target();
      el.label = this.label();
      el.selected = this.selected();
      el.disabled = this.disabled();
    });
  }

  ngOnInit(): void {}
}
