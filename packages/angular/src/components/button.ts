import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  type OnInit,
  type OnChanges,
  type SimpleChanges,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import type { ButtonVariant, ButtonSize } from '@cobalt/components/button';
import '@cobalt/components/button';

/**
 * Angular directive wrapping the `<cb-button>` web component.
 *
 * @example
 * ```html
 * <cb-button variant="primary" size="md" (cbFocus)="onFocus()">
 *   Save changes
 * </cb-button>
 * ```
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'cb-button',
})
export class CbButtonDirective implements OnInit, OnChanges {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: 'submit' | 'reset' | 'button' = 'button';
  @Input() href?: string;
  @Input() target?: '_blank' | '_self' | '_parent' | '_top';

  @Output() cbFocus = new EventEmitter<CustomEvent>();
  @Output() cbBlur = new EventEmitter<CustomEvent>();

  private el: HTMLElement;

  constructor(elementRef: ElementRef<HTMLElement>) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener('cb-focus', (e: Event) => {
      this.cbFocus.emit(e as CustomEvent);
    });
    this.el.addEventListener('cb-blur', (e: Event) => {
      this.cbBlur.emit(e as CustomEvent);
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

@NgModule({
  declarations: [CbButtonDirective],
  exports: [CbButtonDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CobaltButtonModule {}
