import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import '@cobalt/components/nav-drawer-group';

@Directive({ selector: 'co-nav-drawer-group', standalone: true })
export class CoNavDrawerGroup implements OnInit {
  readonly label = input('');
  readonly value = input('');
  readonly open = input(false);
  readonly coToggle = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.label = this.label();
      el.value = this.value();
      el.open = this.open();
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-toggle', (e: Event) => {
      const event = e as CustomEvent;
      this.coToggle.emit(event);
      this.el.dispatchEvent(new CustomEvent('coToggle', { detail: event.detail }));
    });
  }
}
