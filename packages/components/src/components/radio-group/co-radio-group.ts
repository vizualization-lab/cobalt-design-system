import { html, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionRadioGroup } from '@lion/ui/radio-group.js';
import { cobaltRadioGroupStyles } from './co-radio-group.styles.js';
import {
  CobaltValidationController,
  createRequiredValidator,
  ensureValidatorsArray,
} from '../../utils/validation.js';

export { CoRadio } from '../radio/co-radio.js';

export interface RadioGroupChangeDetail {
  value: unknown;
  modelValue: unknown;
}

/**
 * @tag co-radio-group
 * @summary A radio group component for single-choice selection with Cobalt theming.
 *
 * @slot - Radio button children (co-radio elements)
 * @slot label - Label content for the radio group
 * @slot help-text - Help text shown below the label
 * @slot feedback - Validation feedback rendered by Lion
 *
 * @csspart label - The label wrapper
 * @csspart help-text - The help text wrapper
 * @csspart group - The radio options container
 * @csspart feedback - The validation feedback wrapper
 *
 * @fires co-change - Emitted when the selected radio changes
 */
@customElement('co-radio-group')
export class CoRadioGroup extends LionRadioGroup {
  static get styles() {
    return [...super.styles, cobaltRadioGroupStyles];
  }

  /** Marks the radio group as required for validation. */
  @property({ type: Boolean, reflect: true })
  required = false;

  /** Custom message shown when required validation fails. */
  @property({ attribute: 'required-message' })
  requiredMessage = '';

  private readonly _validation = new CobaltValidationController(this);

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('model-value-changed', this._handleModelValueChanged);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('model-value-changed', this._handleModelValueChanged);
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
  }

  override render() {
    return html`
      <div part="label" class="form-field__label">
        <slot name="label"></slot>
      </div>
      <small part="help-text" class="form-field__help-text">
        <slot name="help-text"></slot>
      </small>
      <div part="group" class="radio-group__options" role="radiogroup">
        <slot></slot>
      </div>
      <div part="feedback" class="form-field__feedback">
        <slot name="feedback"></slot>
      </div>
    `;
  }

  private _handleModelValueChanged = (event: Event) => {
    const customEvent = event as CustomEvent<{ initialize?: boolean }>;
    if (customEvent.target !== this || customEvent.detail?.initialize) return;

    this.dispatchEvent(
      new CustomEvent<RadioGroupChangeDetail>('co-change', {
        detail: {
          value: this.modelValue,
          modelValue: this.modelValue,
        },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private _syncValidation(userValidatorsChanged = false, validationRulesChanged = false) {
    this._validation.sync(
      () =>
        this.required ? [createRequiredValidator(this.requiredMessage, 'Select an option.')] : [],
      userValidatorsChanged,
      validationRulesChanged,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-radio-group': CoRadioGroup;
  }
}
