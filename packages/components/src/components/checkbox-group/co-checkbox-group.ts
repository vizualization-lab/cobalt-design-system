import { html, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionCheckboxGroup } from '@lion/ui/checkbox-group.js';
import { cobaltCheckboxGroupStyles } from './co-checkbox-group.styles.js';
import {
  CobaltValidationController,
  createRequiredValidator,
  ensureValidatorsArray,
} from '../../utils/validation.js';

export { CoCheckbox } from '../checkbox/co-checkbox.js';
export { CoCheckboxIndeterminate } from '../checkbox-indeterminate/co-checkbox-indeterminate.js';

export interface CheckboxGroupChangeDetail {
  value: unknown;
  modelValue: unknown;
}

/**
 * @tag co-checkbox-group
 * @summary A checkbox group component for multi-choice selection with Cobalt theming.
 *
 * @slot - Checkbox children (co-checkbox elements)
 * @slot label - Label content for the checkbox group
 * @slot help-text - Help text shown below the label
 * @slot feedback - Validation feedback rendered by Lion
 *
 * @csspart label - The label wrapper
 * @csspart help-text - The help text wrapper
 * @csspart group - The checkbox options container
 * @csspart feedback - The validation feedback wrapper
 *
 * @fires co-change - Emitted when the selected checkboxes change
 */
@customElement('co-checkbox-group')
export class CoCheckboxGroup extends LionCheckboxGroup {
  static get styles() {
    return [...super.styles, cobaltCheckboxGroupStyles];
  }

  /** Marks the checkbox group as required for validation. */
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
      <div part="group" class="checkbox-group__options" role="group">
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
      new CustomEvent<CheckboxGroupChangeDetail>('co-change', {
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
        this.required
          ? [createRequiredValidator(this.requiredMessage, 'Select at least one option.')]
          : [],
      userValidatorsChanged,
      validationRulesChanged,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-checkbox-group': CoCheckboxGroup;
  }
}
