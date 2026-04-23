import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import '@cobalt/components';

/**
 * Angular directive wrapping the `<co-nav-rail-bar>` web component.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-nav-rail-bar',
  standalone: true,
})
export class CoNavRailBar implements OnInit {
  readonly value = input('');
  readonly label = input('Side navigation');

  readonly coChange = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.value = this.value();
      el.label = this.label();
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-change', (e: Event) => {
      this.coChange.emit(e as CustomEvent);
    });
  }
}
