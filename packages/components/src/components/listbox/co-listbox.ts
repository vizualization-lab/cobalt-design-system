import { html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionListbox, LionOption } from '@lion/ui/listbox.js';
import { Required, type Validator } from '@lion/ui/form-core.js';
import { cobaltListboxStyles } from './co-listbox.styles.js';
import { cobaltOptionStyles } from './co-option.styles.js';

export type ListboxOrientation = 'vertical' | 'horizontal';
export type ListboxValue = string | string[];

export interface ListboxChangeDetail {
  value: ListboxValue;
  modelValue: ListboxValue;
  checkedIndex: number | number[];
}

/**
 * @tag co-option
 * @summary An option component for Cobalt listboxes.
 *
 * @slot - Option label content
 *
 * @csspart base - The option wrapper
 * @csspart indicator - The selection indicator
 * @csspart label - The option label wrapper
 */
@customElement('co-option')
export class CoOption extends LionOption {
  static get styles() {
    return [cobaltOptionStyles];
  }

  /** String value alias mapped to Lion's choiceValue. */
  @property({ reflect: true })
  override get value(): string {
    return typeof this.choiceValue === 'string' ? this.choiceValue : '';
  }

  override set value(value: string) {
    const oldValue = this.value;
    if (this.choiceValue !== value) {
      this.choiceValue = value;
    }
    this.requestUpdate('value', oldValue);
  }

  override render() {
    return html`
      <div part="base" class="option">
        <span part="indicator" class="option__indicator" aria-hidden="true"></span>
        <span part="label" class="option__label">
          <slot></slot>
        </span>
      </div>
    `;
  }
}

/**
 * @tag co-listbox
 * @summary A listbox component extending Lion's LionListbox with Cobalt theming.
 *
 * @slot label - Label content for the listbox
 * @slot help-text - Help text shown below the label
 * @slot input - Internal options container managed by Lion
 * @slot - Option content moved into the internal listbox container
 * @slot feedback - Validation feedback rendered by Lion
 *
 * @csspart label - The label wrapper
 * @csspart help-text - The help text wrapper
 * @csspart input-group - The input group wrapper
 * @csspart control - The visual listbox control
 * @csspart input - The listbox input wrapper
 * @csspart feedback - The validation feedback wrapper
 *
 * @fires co-change - Emitted when the selected option value changes
 */
@customElement('co-listbox')
export class CoListbox extends LionListbox {
  static get styles() {
    return [...super.styles, cobaltListboxStyles];
  }

  /** Informs screen readers and controls arrow-key direction. */
  @property({ reflect: true })
  override orientation: ListboxOrientation = 'vertical';

  /** Selects the active option while arrowing through options. */
  @property({ type: Boolean, attribute: 'selection-follows-focus', reflect: true })
  override selectionFollowsFocus = false;

  /** Allows keyboard navigation to wrap from last to first option. */
  @property({ type: Boolean, attribute: 'rotate-keyboard-navigation', reflect: true })
  override rotateKeyboardNavigation = false;

  /** Prevents Lion from selecting a default option on initialization. */
  @property({ type: Boolean, attribute: 'has-no-default-selected', reflect: true })
  override hasNoDefaultSelected = false;

  /** Allows multiple options to be selected. */
  @property({ type: Boolean, attribute: 'multiple-choice', reflect: true })
  override multipleChoice = false;

  /** Marks the listbox as required for validation and assistive technology. */
  @property({ type: Boolean, reflect: true })
  required = false;

  private readonly _requiredValidator = new Required();

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('model-value-changed', this._handleModelValueChanged);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('model-value-changed', this._handleModelValueChanged);
  }

  override firstUpdated(changedProperties: PropertyValues<this>): void {
    super.firstUpdated(changedProperties);
    this._syncRequiredValidator();
  }

  override updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);

    if (changedProperties.has('required')) {
      this._syncRequiredValidator();
    }
  }

  protected override _labelTemplate() {
    return html`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `;
  }

  protected override _helpTextTemplate() {
    return html`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `;
  }

  protected override _inputGroupTemplate() {
    return html`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">${this._inputGroupInputTemplate()}</div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `;
  }

  protected override _inputGroupPrefixTemplate(): TemplateResult | typeof nothing {
    return nothing;
  }

  protected override _inputGroupInputTemplate() {
    return html`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
        <slot id="options-outlet"></slot>
      </div>
    `;
  }

  protected override _inputGroupSuffixTemplate(): TemplateResult | typeof nothing {
    return nothing;
  }

  protected override _feedbackTemplate() {
    return html`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `;
  }

  private _handleModelValueChanged = (event: Event) => {
    const customEvent = event as CustomEvent<{ initialize?: boolean }>;
    if (customEvent.target !== this || customEvent.detail?.initialize) return;

    this.dispatchEvent(
      new CustomEvent<ListboxChangeDetail>('co-change', {
        detail: {
          value: this.modelValue as ListboxValue,
          modelValue: this.modelValue as ListboxValue,
          checkedIndex: this.checkedIndex,
        },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private _syncRequiredValidator() {
    const validators = this.validators as Validator[];
    const hasRequiredValidator = validators.includes(this._requiredValidator);

    if (this.required && !hasRequiredValidator) {
      this.validators = [...validators, this._requiredValidator];
      return;
    }

    if (!this.required && hasRequiredValidator) {
      this.validators = validators.filter((validator) => validator !== this._requiredValidator);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-listbox': CoListbox;
    'co-option': CoOption;
  }
}
