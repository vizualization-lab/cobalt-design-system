import { html, nothing, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionInput } from '@lion/ui/input.js';
import type { Validator } from '@lion/ui/form-core.js';
import { cobaltInputStyles } from './co-input.styles.js';
import {
  CobaltValidationController,
  createEmailValidator,
  createMaxLengthValidator,
  createMinLengthValidator,
  createPatternValidator,
  createRequiredValidator,
  ensureValidatorsArray,
  isUsableLength,
} from '../../utils/validation.js';

export type InputSize = 'sm' | 'md' | 'lg' | 'xl';

export interface InputValueChangeDetail {
  value: string;
  modelValue: unknown;
}

/**
 * @tag co-input
 * @summary A text input component extending Lion's LionInput with Cobalt theming.
 *
 * @slot label - Label content for the input
 * @slot help-text - Help text shown below the label
 * @slot input - Native input element managed by Lion
 * @slot prefix - Content before the input value
 * @slot suffix - Content after the input value
 * @slot feedback - Validation feedback rendered by Lion
 *
 * @csspart label - The label wrapper
 * @csspart help-text - The help text wrapper
 * @csspart input-group - The input group wrapper
 * @csspart control - The visual input control
 * @csspart input - The native input wrapper
 * @csspart prefix - The prefix slot container
 * @csspart suffix - The suffix slot container
 * @csspart feedback - The validation feedback wrapper
 *
 * @fires co-focus - Emitted when the native input gains focus
 * @fires co-blur - Emitted when the native input loses focus
 * @fires co-input - Emitted when the native input value changes during editing
 * @fires co-change - Emitted when the native input value is committed
 */
@customElement('co-input')
export class CoInput extends LionInput {
  static get styles() {
    return [...super.styles, cobaltInputStyles];
  }

  /** The input size. */
  @property({ reflect: true })
  size: InputSize = 'md';

  /** Applies danger styling without changing validation state. */
  @property({ type: Boolean, reflect: true })
  danger = false;

  /** Marks the input as required for validation and assistive technology. */
  @property({ type: Boolean, reflect: true })
  required = false;

  /** Custom message shown when required validation fails. */
  @property({ attribute: 'required-message' })
  requiredMessage = '';

  /** Custom message shown when email validation fails. */
  @property({ attribute: 'email-message' })
  emailMessage = '';

  /** Regular expression pattern the complete value must match. */
  @property({ reflect: true })
  pattern = '';

  /** Custom message shown when pattern validation fails. */
  @property({ attribute: 'pattern-message' })
  patternMessage = '';

  /** Maximum number of characters allowed by the native input. */
  @property({ type: Number, attribute: 'maxlength', reflect: true })
  maxLength?: number;

  /** Minimum number of characters expected by validation. */
  @property({ type: Number, attribute: 'minlength', reflect: true })
  minLength?: number;

  /** Custom message shown when minlength validation fails. */
  @property({ attribute: 'minlength-message' })
  minLengthMessage = '';

  /** Custom message shown when maxlength validation fails. */
  @property({ attribute: 'maxlength-message' })
  maxLengthMessage = '';

  private readonly _validation = new CobaltValidationController(this);

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('focusin', this._handleFocusIn);
    this.addEventListener('focusout', this._handleFocusOut);
    this.addEventListener('input', this._handleNativeInput);
    this.addEventListener('change', this._handleNativeChange);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('focusin', this._handleFocusIn);
    this.removeEventListener('focusout', this._handleFocusOut);
    this.removeEventListener('input', this._handleNativeInput);
    this.removeEventListener('change', this._handleNativeChange);
  }

  override firstUpdated(changedProperties: PropertyValues<this>): void {
    ensureValidatorsArray(this);
    super.firstUpdated(changedProperties);
    this._syncNativeLengthAttributes();
    this._syncValidation(true, true);
  }

  override updated(changedProperties: PropertyValues<this>): void {
    ensureValidatorsArray(this);
    super.updated(changedProperties);

    if (changedProperties.has('maxLength') || changedProperties.has('minLength')) {
      this._syncNativeLengthAttributes();
    }

    if (this._validationPropsChanged(changedProperties)) {
      this._syncValidation(
        changedProperties.has('validators'),
        this._validationRulesChanged(changedProperties),
      );
    }
  }

  protected _labelTemplate() {
    return html`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
    `;
  }

  protected _helpTextTemplate() {
    return html`
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
    `;
  }

  protected _inputGroupTemplate() {
    return html`
      <div part="input-group" class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `;
  }

  protected _inputGroupPrefixTemplate() {
    return !Array.from(this.children).find((child) => child.slot === 'prefix')
      ? nothing
      : html`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
          </div>
        `;
  }

  protected _inputGroupInputTemplate() {
    return html`
      <div part="input" class="input-group__input">
        <slot name="input"></slot>
      </div>
    `;
  }

  protected _inputGroupSuffixTemplate() {
    return !Array.from(this.children).find((child) => child.slot === 'suffix')
      ? nothing
      : html`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
          </div>
        `;
  }

  protected _feedbackTemplate() {
    return html`
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `;
  }

  private _handleFocusIn = () => {
    this.dispatchEvent(new CustomEvent('co-focus', { bubbles: true, composed: true }));
  };

  private _handleFocusOut = () => {
    this.dispatchEvent(new CustomEvent('co-blur', { bubbles: true, composed: true }));
  };

  private _handleNativeInput = (event: Event) => {
    if (event.target !== this._inputNode) return;
    this._dispatchValueEvent('co-input');
  };

  private _handleNativeChange = (event: Event) => {
    if (event.target !== this._inputNode) return;
    this._dispatchValueEvent('co-change');
  };

  private _dispatchValueEvent(type: 'co-input' | 'co-change') {
    this.dispatchEvent(
      new CustomEvent<InputValueChangeDetail>(type, {
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

        if (this.type === 'email') {
          validators.push(createEmailValidator(this.emailMessage));
        }

        if (this.pattern) {
          validators.push(createPatternValidator(this.pattern, this.patternMessage));
        }

        if (isUsableLength(this.minLength)) {
          validators.push(createMinLengthValidator(this.minLength, this.minLengthMessage));
        }

        if (isUsableLength(this.maxLength)) {
          validators.push(createMaxLengthValidator(this.maxLength, this.maxLengthMessage));
        }

        return validators;
      },
      userValidatorsChanged,
      validationRulesChanged,
    );
  }

  private _validationPropsChanged(changedProperties: PropertyValues<this>) {
    const validationProperties: Array<keyof CoInput> = [
      'validators',
      'required',
      'requiredMessage',
      'emailMessage',
      'type',
      'pattern',
      'patternMessage',
      'minLength',
      'minLengthMessage',
      'maxLength',
      'maxLengthMessage',
    ];
    return validationProperties.some((property) => changedProperties.has(property));
  }

  private _validationRulesChanged(changedProperties: PropertyValues<this>) {
    const validationProperties: Array<keyof CoInput> = [
      'required',
      'requiredMessage',
      'emailMessage',
      'type',
      'pattern',
      'patternMessage',
      'minLength',
      'minLengthMessage',
      'maxLength',
      'maxLengthMessage',
    ];
    return validationProperties.some((property) => changedProperties.has(property));
  }

  private _syncNativeLengthAttributes() {
    const input = this._inputNode;
    if (!input) return;

    if (isUsableLength(this.maxLength)) {
      input.maxLength = this.maxLength;
    } else {
      input.removeAttribute('maxlength');
    }

    if (isUsableLength(this.minLength)) {
      input.minLength = this.minLength;
    } else {
      input.removeAttribute('minlength');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-input': CoInput;
  }
}
