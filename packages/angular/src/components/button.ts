import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  type OnInit,
  type OnChanges,
  type SimpleChanges,
} from '@angular/core';
import type { ButtonVariant, ButtonSize } from '@cobalt/components/button';
import '@cobalt/components/button';

/**
 * Angular directive wrapping the `<co-button>` web component.
 *
 * @example
 * ```html
 * <co-button variant="primary" size="md" (coFocus)="onFocus()">
 *   Save changes
 * </co-button>
 * ```
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-button',
  standalone: true,
})
export class CoButtonDirective implements OnInit, OnChanges {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: 'submit' | 'reset' | 'button' = 'button';
  @Input() href?: string;
  @Input() target?: '_blank' | '_self' | '_parent' | '_top';

  @Output() coFocus = new EventEmitter<CustomEvent>();
  @Output() coBlur = new EventEmitter<CustomEvent>();

  private el: HTMLElement;

  constructor(elementRef: ElementRef<HTMLElement>) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener('co-focus', (e: Event) => {
      this.coFocus.emit(e as CustomEvent);
    });
    this.el.addEventListener('co-blur', (e: Event) => {
      this.coBlur.emit(e as CustomEvent);
    });
    this.syncProperties();
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.syncProperties();
  }

  private syncProperties(): void {
    const el = this.el as any;
    el.variant = this.variant;
    el.size = this.size;
    el.disabled = this.disabled;
    el.loading = this.loading;
    el.type = this.type;
    if (this.href !== undefined) el.href = this.href;
    if (this.target !== undefined) el.target = this.target;
  }
}
