import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import '@cobalt/components/nav-drawer';

@Directive({ selector: 'co-nav-drawer', standalone: true })
export class CoNavDrawer implements OnInit {
  readonly open = input(true);
  readonly value = input('');
  readonly label = input('Navigation');
  readonly coChange = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.open = this.open();
      el.value = this.value();
      el.label = this.label();
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-change', (e: Event) => this.coChange.emit(e as CustomEvent));
  }
}
