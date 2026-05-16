import {
  Directive,
  ElementRef,
  Input,
  effect,
  inject,
  input,
  output,
  type OnInit,
} from '@angular/core';
import type { IconSize } from '@cobalt/components/icon';
import type { ModeToggleMode } from '@cobalt/components/mode-toggle';
import '@cobalt/components/mode-toggle';

/**
 * Angular directive wrapping the `<co-mode-toggle>` web component.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-mode-toggle',
  standalone: true,
})
export class CoModeToggle implements OnInit {
  readonly mode = input<ModeToggleMode | undefined>();
  readonly size = input<IconSize>('md');
  readonly persist = input(true);
  readonly label = input('Color mode');
  readonly disabled = input(false);

  readonly coChange = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;
  private _storageNamespace = 'cobalt';

  @Input()
  get storageNamespace() {
    return this._storageNamespace;
  }

  set storageNamespace(value: string | undefined) {
    this._storageNamespace = value ?? 'cobalt';
    (this.el as any).storageNamespace = this._storageNamespace;
  }

  constructor() {
    effect(() => {
      const el = this.el as any;
      const mode = this.mode();
      if (mode) {
        el.mode = mode;
      }
      el.size = this.size();
      el.persist = this.persist();
      el.storageNamespace = this.storageNamespace;
      el.label = this.label();
      el.disabled = this.disabled();
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-change', (event: Event) => {
      this.coChange.emit(event as CustomEvent);
    });
  }
}
