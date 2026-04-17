import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import type { TextareaResize, TextareaSize } from '@cobalt/components/textarea';
import '@cobalt/components/textarea';

/**
 * Angular directive wrapping the `<co-textarea>` web component.
 *
 * @example
 * ```html
 * <co-textarea label="Comment" maxlength="120" (coInput)="onInput($event)"></co-textarea>
 * ```
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-textarea',
  standalone: true,
})
export class CoTextarea implements OnInit {
  readonly size = input<TextareaSize>('md');
  readonly resize = input<TextareaResize>('auto');
  readonly danger = input(false);
  readonly disabled = input(false);
  readonly readOnly = input(false);
  readonly required = input(false);
  readonly label = input<string | undefined>();
  readonly helpText = input<string | undefined>();
  readonly name = input<string | undefined>();
  readonly placeholder = input<string | undefined>();
  readonly value = input<string | undefined>();
  readonly modelValue = input<unknown>();
  readonly rows = input<number | undefined>();
  readonly maxRows = input<number | undefined>();
  readonly maxLength = input<number | undefined>();
  readonly minLength = input<number | undefined>();

  readonly coFocus = output<CustomEvent>();
  readonly coBlur = output<CustomEvent>();
  readonly coInput = output<CustomEvent>();
  readonly coChange = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.size = this.size();
      el.resize = this.resize();
      el.danger = this.danger();
      el.disabled = this.disabled();
      el.readOnly = this.readOnly();
      el.required = this.required();

      const label = this.label();
      if (label !== undefined) el.label = label;
      const helpText = this.helpText();
      if (helpText !== undefined) el.helpText = helpText;
      const name = this.name();
      if (name !== undefined) el.name = name;
      const placeholder = this.placeholder();
      if (placeholder !== undefined) el.placeholder = placeholder;
      const value = this.value();
      if (value !== undefined) el.value = value;
      const modelValue = this.modelValue();
      if (modelValue !== undefined) el.modelValue = modelValue;
      const rows = this.rows();
      if (rows !== undefined) el.rows = rows;
      const maxRows = this.maxRows();
      if (maxRows !== undefined) el.maxRows = maxRows;
      const maxLength = this.maxLength();
      if (maxLength !== undefined) el.maxLength = maxLength;
      const minLength = this.minLength();
      if (minLength !== undefined) el.minLength = minLength;
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-focus', (e: Event) => {
      this.coFocus.emit(e as CustomEvent);
    });
    this.el.addEventListener('co-blur', (e: Event) => {
      this.coBlur.emit(e as CustomEvent);
    });
    this.el.addEventListener('co-input', (e: Event) => {
      this.coInput.emit(e as CustomEvent);
    });
    this.el.addEventListener('co-change', (e: Event) => {
      this.coChange.emit(e as CustomEvent);
    });
  }
}
