import { Directive, ElementRef, effect, inject, input } from '@angular/core';
import '@cobalt/components/nav-drawer-item';

@Directive({ selector: 'co-nav-drawer-item', standalone: true })
export class CoNavDrawerItem {
  readonly value = input('');
  readonly icon = input('');
  readonly href = input<string | undefined>();
  readonly selected = input(false);
  readonly disabled = input(false);

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.value = this.value();
      el.icon = this.icon();
      el.selected = this.selected();
      el.disabled = this.disabled();
      const href = this.href();
      if (href !== undefined) el.href = href;
    });
  }
}
