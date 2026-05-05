import { html, nothing, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionTextarea } from '@lion/ui/textarea.js';
import type { Validator } from '@lion/ui/form-core.js';
import autosize from 'autosize';
import { cobaltTextareaStyles } from './co-textarea.styles.js';
import {
  CobaltValidationController,
  createMaxLengthValidator,
  createMinLengthValidator,
  createPatternValidator,
  createRequiredValidator,
  ensureValidatorsArray,
  isUsableLength,
} from '../../utils/validation.js';

export type TextareaSize = 'sm' | 'md' | 'lg' | 'xl';
export type TextareaResize = 'auto' | 'none' | 'vertical';

export interface TextareaValueChangeDetail {
  value: string;
  modelValue: unknown;
}

/**
 * @tag co-textarea
 * @summary A textarea component extending Lion's LionTextarea with Cobalt theming.
 *
 * @slot label - Label content for the textarea
 * @slot help-text - Help text shown below the label
 * @slot input - Native textarea element managed by Lion
 * @slot prefix - Content before the textarea value
 * @slot suffix - Content after the textarea value
 * @slot feedback - Validation feedback rendered by Lion
 *
 * @csspart label - The label wrapper
 * @csspart help-text - The help text wrapper
 * @csspart input-group - The input group wrapper
 * @csspart control - The visual textarea control
 * @csspart input - The native textarea wrapper
 * @csspart prefix - The prefix slot container
 * @csspart suffix - The suffix slot container
 * @csspart meta - The feedback and counter row
 * @csspart feedback - The validation feedback wrapper
 * @csspart counter - The character counter
 *
 * @fires co-focus - Emitted when the native textarea gains focus
 * @fires co-blur - Emitted when the native textarea loses focus
 * @fires co-input - Emitted when the native textarea value changes during editing
 * @fires co-change - Emitted when the native textarea value is committed
 */
@customElement('co-textarea')
export class CoTextarea extends LionTextarea {
  static get styles() {
    return [...super.styles, cobaltTextareaStyles];
  }

  /** The textarea size. */
  @property({ reflect: true })
  size: TextareaSize = 'md';

  /** Applies danger styling without changing validation state. */
  @property({ type: Boolean, reflect: true })
  danger = false;

  /** Marks the textarea as required for validation and assistive technology. */
  @property({ type: Boolean, reflect: true })
  required = false;

  /** Custom message shown when required validation fails. */
  @property({ attribute: 'required-message' })
  requiredMessage = '';

  /** Controls automatic or manual resizing behavior. */
  @property({ reflect: true })
  resize: TextareaResize = 'auto';

  /** Regular expression pattern the complete value must match. */
  @property({ reflect: true })
  pattern = '';

  /** Custom message shown when pattern validation fails. */
  @property({ attribute: 'pattern-message' })
  patternMessage = '';

  /** Maximum number of characters allowed by the native textarea. */
  @property({ type: Number, attribute: 'maxlength', reflect: true })
  maxLength?: number;

  /** Minimum number of characters expected by the native textarea. */
  @property({ type: Number, attribute: 'minlength', reflect: true })
  minLength?: number;

  /** Custom message shown when minlength validation fails. */
  @property({ attribute: 'minlength-message' })
  minLengthMessage = '';

  /** Custom message shown when maxlength validation fails. */
  @property({ attribute: 'maxlength-message' })
  maxLengthMessage = '';

  private readonly _validation = new CobaltValidationController(this);

  private _counterNode?: HTMLElement;

  override get slots() {
    const slots = super.slots;

    return {
      ...slots,
      input: () => {
        const textarea = slots.input() as HTMLTextAreaElement;
        const value = this.getAttribute('value');
        if (value !== null) {
          textarea.value = value;
        }
        return textarea;
      },
    };
  }

  override get value(): string {
    return super.value;
  }

  override set value(value: string) {
    const oldValue = this.value;
    super.value = value;
    this.requestUpdate('value', oldValue);
    this._resizeForCurrentMode();
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('focusin', this._handleFocusIn);
    this.addEventListener('focusout', this._handleFocusOut);
    this.addEventListener('input', this._handleNativeInput);
    this.addEventListener('change', this._handleNativeChange);
  }

  override disconnectedCallback(): void {
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
    this._applyResizeMode();
    this._syncCounterDescription();
    this._syncValidation(true, true);
  }

  override updated(changedProperties: PropertyValues<this>): void {
    ensureValidatorsArray(this);
    super.updated(changedProperties);

    if (changedProperties.has('maxLength') || changedProperties.has('minLength')) {
      this._syncNativeLengthAttributes();
    }

    if (
      changedProperties.has('resize') ||
      changedProperties.has('rows') ||
      changedProperties.has('maxRows')
    ) {
      this._applyResizeMode();
    }

    if (changedProperties.has('maxLength')) {
      this._syncCounterDescription();
    }

    if (this._validationPropsChanged(changedProperties)) {
      this._syncValidation(
        changedProperties.has('validators'),
        this._validationRulesChanged(changedProperties),
      );
    }
  }

  override resizeTextarea(): void {
    if (this.resize !== 'auto') return;
    super.resizeTextarea();
  }

  protected override _groupTwoTemplate() {
    return html`
      ${this._inputGroupTemplate()}
      <div part="meta" class="form-field__meta">
        ${this._feedbackTemplate()} ${this._counterTemplate()}
      </div>
    `;
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
        <div part="control" class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `;
  }

  protected override _inputGroupPrefixTemplate() {
    return !Array.from(this.children).find((child) => child.slot === 'prefix')
      ? nothing
      : html`
          <div part="prefix" class="input-group__prefix">
            <slot name="prefix"></slot>
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

  protected override _inputGroupSuffixTemplate() {
    return !Array.from(this.children).find((child) => child.slot === 'suffix')
      ? nothing
      : html`
          <div part="suffix" class="input-group__suffix">
            <slot name="suffix"></slot>
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

  private _counterTemplate() {
    if (!this._hasMaxLength()) return nothing;

    return html`
      <output
        part="counter"
        class="form-field__counter ${this._currentLength() >= this.maxLength!
          ? 'form-field__counter--danger'
          : ''}"
      >
        ${this._currentLength()} / ${this.maxLength}
      </output>
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
    this.requestUpdate('value');
    this._dispatchValueEvent('co-input');
  };

  private _handleNativeChange = (event: Event) => {
    if (event.target !== this._inputNode) return;
    this._dispatchValueEvent('co-change');
  };

  private _dispatchValueEvent(type: 'co-input' | 'co-change') {
    this.dispatchEvent(
      new CustomEvent<TextareaValueChangeDetail>(type, {
        detail: {
          value: this._inputNode.value,
          modelValue: this.modelValue,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _hasMaxLength() {
    return isUsableLength(this.maxLength);
  }

  private _currentLength() {
    return this.value.length;
  }

  private _syncNativeLengthAttributes() {
    const textarea = this._inputNode;
    if (!textarea) return;

    if (this._hasMaxLength()) {
      textarea.maxLength = this.maxLength!;
    } else {
      textarea.removeAttribute('maxlength');
    }

    if (isUsableLength(this.minLength)) {
      textarea.minLength = this.minLength;
    } else {
      textarea.removeAttribute('minlength');
    }
  }

  private _applyResizeMode() {
    const textarea = this._inputNode;
    if (!textarea) return;

    if (this.resize === 'auto') {
      autosize(textarea);
      this.setTextareaMaxHeight();
      textarea.style.resize = 'none';
      return;
    }

    autosize.destroy(textarea);
    textarea.style.height = '';
    textarea.style.maxHeight = '';
    textarea.style.overflowY = '';
    textarea.style.resize = this.resize === 'vertical' ? 'vertical' : 'none';
  }

  private _resizeForCurrentMode() {
    if (!this._inputNode || this.resize !== 'auto') return;
    this.resizeTextarea();
  }

  private _syncCounterDescription() {
    const counter = this.shadowRoot?.querySelector('[part="counter"]') as HTMLElement | null;

    if (this._counterNode && this._counterNode !== counter) {
      this.removeFromAriaDescribedBy(this._counterNode);
      this._counterNode = undefined;
    }

    if (!this._hasMaxLength()) {
      if (this._counterNode) {
        this.removeFromAriaDescribedBy(this._counterNode);
        this._counterNode = undefined;
      }
      return;
    }

    if (counter && this._counterNode !== counter) {
      this.addToAriaDescribedBy(counter, { idPrefix: 'counter', reorder: true });
      this._counterNode = counter;
    }
  }

  private _syncValidation(userValidatorsChanged = false, validationRulesChanged = false) {
    this._validation.sync(
      () => {
        const validators: Validator[] = [];

        if (this.required) {
          validators.push(createRequiredValidator(this.requiredMessage, 'Enter a value.'));
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
    const validationProperties: Array<keyof CoTextarea> = [
      'validators',
      'required',
      'requiredMessage',
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
    const validationProperties: Array<keyof CoTextarea> = [
      'required',
      'requiredMessage',
      'pattern',
      'patternMessage',
      'minLength',
      'minLengthMessage',
      'maxLength',
      'maxLengthMessage',
    ];
    return validationProperties.some((property) => changedProperties.has(property));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-textarea': CoTextarea;
  }
}
