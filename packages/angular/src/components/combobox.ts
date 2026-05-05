import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import type {
  ComboboxAutocomplete,
  ComboboxMatchMode,
  ComboboxSize,
} from '@cobalt/components/combobox';
import type { Validator } from '@cobalt/components/validation';
import '@cobalt/components/combobox';

export { CoOption } from './option.js';

/**
 * Angular directive wrapping the `<co-combobox>` web component.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-combobox',
  standalone: true,
})
export class CoCombobox implements OnInit {
  readonly size = input<ComboboxSize>('md');
  readonly danger = input(false);
  readonly disabled = input(false);
  readonly readOnly = input(false);
  readonly required = input(false);
  readonly requiredMessage = input<string | undefined>();
  readonly pattern = input<string | undefined>();
  readonly patternMessage = input<string | undefined>();
  readonly label = input<string | undefined>();
  readonly helpText = input<string | undefined>();
  readonly name = input<string | undefined>();
  readonly value = input<string | undefined>();
  readonly modelValue = input<unknown>();
  readonly autocomplete = input<ComboboxAutocomplete>('both');
  readonly matchMode = input<ComboboxMatchMode>('all');
  readonly showAllOnEmpty = input(false);
  readonly selectionFollowsFocus = input(true);
  readonly rotateKeyboardNavigation = input(true);
  readonly hasNoDefaultSelected = input(false);
  readonly multiple = input(false);
  readonly multipleChoice = input(false);
  readonly allowCustomChoice = input(false);
  readonly requireOptionMatch = input<boolean | undefined>();
  readonly validators = input<Validator[] | undefined>();

  readonly coFocus = output<CustomEvent>();
  readonly coBlur = output<CustomEvent>();
  readonly coInput = output<CustomEvent>();
  readonly coChange = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.size = this.size();
      el.danger = this.danger();
      el.disabled = this.disabled();
      el.readOnly = this.readOnly();
      el.required = this.required();
      el.autocomplete = this.autocomplete();
      el.matchMode = this.matchMode();
      el.showAllOnEmpty = this.showAllOnEmpty();
      el.selectionFollowsFocus = this.selectionFollowsFocus();
      el.rotateKeyboardNavigation = this.rotateKeyboardNavigation();
      el.hasNoDefaultSelected = this.hasNoDefaultSelected();
      el.multiple = this.multiple();
      el.multipleChoice = this.multipleChoice();
      el.allowCustomChoice = this.allowCustomChoice();

      const requiredMessage = this.requiredMessage();
      if (requiredMessage !== undefined) el.requiredMessage = requiredMessage;
      const pattern = this.pattern();
      if (pattern !== undefined) el.pattern = pattern;
      const patternMessage = this.patternMessage();
      if (patternMessage !== undefined) el.patternMessage = patternMessage;
      const label = this.label();
      if (label !== undefined) el.label = label;
      const helpText = this.helpText();
      if (helpText !== undefined) el.helpText = helpText;
      const name = this.name();
      if (name !== undefined) el.name = name;
      const value = this.value();
      if (value !== undefined) el.value = value;
      const modelValue = this.modelValue();
      if (modelValue !== undefined) el.modelValue = modelValue;
      const requireOptionMatch = this.requireOptionMatch();
      if (requireOptionMatch !== undefined) el.requireOptionMatch = requireOptionMatch;
      const validators = this.validators();
      if (validators !== undefined) el.validators = validators;
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
