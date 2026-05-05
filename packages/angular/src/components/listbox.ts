import { Directive, ElementRef, effect, inject, input, output, type OnInit } from '@angular/core';
import type { ListboxOrientation } from '@cobalt/components/listbox';
import type { Validator } from '@cobalt/components/validation';
import '@cobalt/components/listbox';

/**
 * Angular directive wrapping the `<co-listbox>` web component.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-listbox',
  standalone: true,
})
export class CoListbox implements OnInit {
  readonly label = input<string | undefined>();
  readonly helpText = input<string | undefined>();
  readonly name = input<string | undefined>();
  readonly disabled = input(false);
  readonly required = input(false);
  readonly requiredMessage = input<string | undefined>();
  readonly multipleChoice = input(false);
  readonly orientation = input<ListboxOrientation>('vertical');
  readonly selectionFollowsFocus = input(false);
  readonly rotateKeyboardNavigation = input(false);
  readonly hasNoDefaultSelected = input(false);
  readonly modelValue = input<unknown>();
  readonly validators = input<Validator[] | undefined>();

  readonly coChange = output<CustomEvent>();

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.disabled = this.disabled();
      el.required = this.required();
      el.multipleChoice = this.multipleChoice();
      el.orientation = this.orientation();
      el.selectionFollowsFocus = this.selectionFollowsFocus();
      el.rotateKeyboardNavigation = this.rotateKeyboardNavigation();
      el.hasNoDefaultSelected = this.hasNoDefaultSelected();

      const requiredMessage = this.requiredMessage();
      if (requiredMessage !== undefined) el.requiredMessage = requiredMessage;
      const label = this.label();
      if (label !== undefined) el.label = label;
      const helpText = this.helpText();
      if (helpText !== undefined) el.helpText = helpText;
      const name = this.name();
      if (name !== undefined) el.name = name;
      const modelValue = this.modelValue();
      if (modelValue !== undefined) el.modelValue = modelValue;
      const validators = this.validators();
      if (validators !== undefined) el.validators = validators;
    });
  }

  ngOnInit(): void {
    this.el.addEventListener('co-change', (e: Event) => {
      this.coChange.emit(e as CustomEvent);
    });
  }
}

/**
 * Angular directive wrapping the `<co-option>` web component.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'co-option',
  standalone: true,
})
export class CoOption {
  readonly value = input<string | undefined>();
  readonly choiceValue = input<unknown>();
  readonly checked = input(false);
  readonly disabled = input(false);
  readonly active = input(false);

  private el = inject(ElementRef).nativeElement;

  constructor() {
    effect(() => {
      const el = this.el as any;
      el.checked = this.checked();
      el.disabled = this.disabled();
      el.active = this.active();

      const value = this.value();
      if (value !== undefined) el.value = value;
      const choiceValue = this.choiceValue();
      if (choiceValue !== undefined) el.choiceValue = choiceValue;
    });
  }
}
