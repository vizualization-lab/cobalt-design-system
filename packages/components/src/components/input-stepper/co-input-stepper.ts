import { html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionInputStepper } from '@lion/ui/input-stepper.js';
import type { Validator } from '@lion/ui/form-core.js';
import { cobaltInputStepperStyles } from './co-input-stepper.styles.js';
import '../icon/co-icon.js';
import {
  CobaltValidationController,
  createRequiredValidator,
  ensureValidatorsArray,
} from '../../utils/validation.js';

export type InputStepperSize = 'sm' | 'md' | 'lg' | 'xl';

export interface InputStepperValueChangeDetail {
  value: string;
  modelValue: unknown;
}

/**
 * @tag co-input-stepper
 * @summary A numeric input with increment and decrement controls built on LionInputStepper.
 *
 * @slot label - Label content for the input stepper
 * @slot help-text - Help text shown below the label
 * @slot input - Native input element managed by Lion
 * @slot leading - Content before the numeric value
 * @slot before - Content before the visual input control
 * @slot after - Content after the visual input control
 * @slot feedback - Validation feedback rendered by Lion
 *
 * @csspart label - The label wrapper
 * @csspart help-text - The help text wrapper
 * @csspart input-group - The input group wrapper
 * @csspart control - The visual input control
 * @csspart input - The native input wrapper
 * @csspart leading - The leading slot container
 * @csspart stepper-group - The stacked stepper button group
 * @csspart increment-button - The increment button wrapper
 * @csspart decrement-button - The decrement button wrapper
 * @csspart feedback - The validation feedback wrapper
 *
 * @fires co-focus - Emitted when the native input gains focus
 * @fires co-blur - Emitted when the native input loses focus
 * @fires co-input - Emitted when the numeric value changes during editing
 * @fires co-change - Emitted when the native input value is committed
 */
@customElement('co-input-stepper')
export class CoInputStepper extends LionInputStepper {
  static get styles() {
    return [...super.styles, cobaltInputStepperStyles];
  }

  /** Controls field height, padding, and font size. */
  @property({ reflect: true })
  size: InputStepperSize = 'md';

  /** Applies danger styling without changing validation state. */
  @property({ type: Boolean, reflect: true })
  danger = false;

  /** Marks the input stepper as required for validation and assistive technology. */
  @property({ type: Boolean, reflect: true })
  required = false;

  /** Custom message shown when required validation fails. */
  @property({ attribute: 'required-message' })
  requiredMessage = '';

  /** Minimum numeric value allowed. */
  @property({ type: Number, reflect: true })
  override min = Infinity;

  /** Maximum numeric value allowed. */
  @property({ type: Number, reflect: true })
  override max = Infinity;

  /** Amount the value changes when incrementing or decrementing. */
  @property({ type: Number, reflect: true })
  override step = 1;

  private readonly _validation = new CobaltValidationController(this);

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('focusin', this._handleFocusIn);
    this.addEventListener('focusout', this._handleFocusOut);
    this.addEventListener('user-input-changed', this._handleUserInputChanged);
    this.addEventListener('change', this._handleNativeChange);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('focusin', this._handleFocusIn);
    this.removeEventListener('focusout', this._handleFocusOut);
    this.removeEventListener('user-input-changed', this._handleUserInputChanged);
    this.removeEventListener('change', this._handleNativeChange);
  }

  override firstUpdated(changedProperties: PropertyValues<this>): void {
    ensureValidatorsArray(this);
    super.firstUpdated(changedProperties);
    this._syncValidation(true, true);
  }

  override updated(changedProperties: PropertyValues<this>): void {
    ensureValidatorsArray(this);
    super.updated(changedProperties);

    if (
      changedProperties.has('validators') ||
      changedProperties.has('required') ||
      changedProperties.has('requiredMessage')
    ) {
      this._syncValidation(
        changedProperties.has('validators'),
        changedProperties.has('required') || changedProperties.has('requiredMessage'),
      );
    }

    if (
      changedProperties.has('disabled') ||
      changedProperties.has('readOnly') ||
      changedProperties.has('modelValue') ||
      changedProperties.has('min') ||
      changedProperties.has('max')
    ) {
      this._syncStepperButtonState();
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
      <output for="${this._inputId}" data-self-destruct="2000" class="input-stepper__value"
        >${this.__valueText}</output
      >
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupLeadingTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupStepperTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `;
  }

  protected override _inputGroupInputTemplate() {
    return html`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `;
  }

  protected override _feedbackTemplate() {
    return html`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `;
  }

  protected override _incrementorSignTemplate() {
    return html`<co-icon
      name="keyboard-arrow-up"
      size=${this._iconSize}
      aria-hidden="true"
    ></co-icon>`;
  }

  protected override _decrementorSignTemplate() {
    return html`<co-icon
      name="keyboard-arrow-down"
      size=${this._iconSize}
      aria-hidden="true"
    ></co-icon>`;
  }

  protected override _incrementorTemplate() {
    return html`
      <button
        class="input-stepper__button input-stepper__button--increment"
        ?disabled=${this.disabled || this.readOnly}
        @click=${this._increment}
        type="button"
        aria-label="${this.msgLit('lion-input-stepper:increase')} ${this.fieldName}"
      >
        ${this._incrementorSignTemplate()}
      </button>
    `;
  }

  protected override _decrementorTemplate() {
    return html`
      <button
        class="input-stepper__button input-stepper__button--decrement"
        ?disabled=${this.disabled || this.readOnly}
        @click=${this._decrement}
        type="button"
        aria-label="${this.msgLit('lion-input-stepper:decrease')} ${this.fieldName}"
      >
        ${this._decrementorSignTemplate()}
      </button>
    `;
  }

  private get _iconSize() {
    return { sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' }[this.size] ?? 'sm';
  }

  private _inputGroupLeadingTemplate(): TemplateResult | typeof nothing {
    return !Array.from(this.children).find((child) => child.slot === 'leading')
      ? nothing
      : html`
          <div part="leading" class="input-group__leading">
            <slot name="leading"></slot>
          </div>
        `;
  }

  private _inputGroupStepperTemplate() {
    return html`
      <div part="stepper-group" class="input-stepper__group">
        <div
          part="increment-button"
          class="input-stepper__button-slot input-stepper__button-slot--increment"
        >
          <slot name="suffix"></slot>
        </div>
        <div
          part="decrement-button"
          class="input-stepper__button-slot input-stepper__button-slot--decrement"
        >
          <slot name="prefix"></slot>
        </div>
      </div>
    `;
  }

  private _handleFocusIn = () => {
    this.dispatchEvent(new CustomEvent('co-focus', { bubbles: true, composed: true }));
  };

  private _handleFocusOut = () => {
    this.dispatchEvent(new CustomEvent('co-blur', { bubbles: true, composed: true }));
  };

  private _handleUserInputChanged = () => {
    this._dispatchValueEvent('co-input');
    this.updateComplete.then(() => this._syncStepperButtonState());
  };

  private _handleNativeChange = (event: Event) => {
    if (event.target !== this._inputNode) return;
    this._dispatchValueEvent('co-change');
  };

  private _dispatchValueEvent(type: 'co-input' | 'co-change') {
    this.dispatchEvent(
      new CustomEvent<InputStepperValueChangeDetail>(type, {
        detail: {
          value: this._inputNode.value,
          modelValue: this.modelValue,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _syncValidation(userValidatorsChanged = false, validationRulesChanged = false) {
    this._validation.sync(
      () => {
        const validators: Validator[] = [];

        if (this.required) {
          validators.push(createRequiredValidator(this.requiredMessage, 'Enter a value.'));
        }

        return validators;
      },
      userValidatorsChanged,
      validationRulesChanged,
    );
  }

  private _syncStepperButtonState() {
    const incrementButton = this.querySelector('[slot="suffix"]') as HTMLButtonElement | null;
    const decrementButton = this.querySelector('[slot="prefix"]') as HTMLButtonElement | null;
    if (!incrementButton || !decrementButton) return;

    const disableAll = this.disabled || this.readOnly;
    const disableIncrement = disableAll || (this.max !== Infinity && this.currentValue >= this.max);
    const disableDecrement = disableAll || (this.min !== Infinity && this.currentValue <= this.min);

    incrementButton.disabled = disableIncrement;
    decrementButton.disabled = disableDecrement;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-input-stepper': CoInputStepper;
  }
}
