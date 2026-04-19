import { html, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionCheckboxGroup } from '@lion/ui/checkbox-group.js';
import { Required, type Validator } from '@lion/ui/form-core.js';
import { cobaltCheckboxGroupStyles } from './co-checkbox-group.styles.js';

export { CoCheckbox } from '../checkbox/co-checkbox.js';

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
    'co-checkbox-group': CoCheckboxGroup;
  }
}
