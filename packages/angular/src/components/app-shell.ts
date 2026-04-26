import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import '@cobalt/components/app-shell';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-app-shell',
  standalone: true,
})
export class CoAppShell implements OnInit {
  readonly drawerOpen = input(false);
  readonly railWidth = input<string | undefined>(undefined);
  readonly drawerWidth = input<string | undefined>(undefined);

  readonly coDrawerOpen = output<CustomEvent>();
  readonly coDrawerClose = output<CustomEvent>();
  readonly coDrawerToggle = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.drawerOpen = this.drawerOpen();
      el.railWidth = this.railWidth();
      el.drawerWidth = this.drawerWidth();
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-drawer-open', (event: Event) => {
      this.coDrawerOpen.emit(event as CustomEvent);
    });
    this.el.addEventListener('co-drawer-close', (event: Event) => {
      this.coDrawerClose.emit(event as CustomEvent);
    });
    this.el.addEventListener('co-drawer-toggle', (event: Event) => {
      this.coDrawerToggle.emit(event as CustomEvent);
    });
  }
}
