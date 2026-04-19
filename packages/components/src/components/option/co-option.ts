import { html, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionOption } from '@lion/ui/listbox.js';
import { cobaltOptionStyles } from './co-option.styles.js';
import '../icon/co-icon.js';

/**
 * @tag co-option
 * @summary A shared option component for Cobalt listbox and combobox controls.
 *
 * @slot - Option label content
 * @slot prefix - Custom prefix indicator (replaces default radio/checkbox icon)
 * @slot suffix - Trailing status indicator (icon, badge, etc.)
 *
 * @csspart base - The option wrapper
 * @csspart prefix - The prefix indicator container
 * @csspart label - The option label wrapper
 * @csspart suffix - The suffix container
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

  override connectedCallback(): void {
    super.connectedCallback();
    this._syncMultipleAttribute();
  }

  override updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);
    this._syncMultipleAttribute();
  }

  private get _indicatorIconName(): string {
    const isMultiple = this.hasAttribute('multiple');
    if (isMultiple) {
      return this.checked ? 'check-box' : 'check-box-outline-blank';
    }
    return this.checked ? 'radio-button-checked' : 'radio-button-unchecked';
  }

  override render() {
    return html`
      <div part="base" class="option">
        <span part="prefix" class="option__prefix" aria-hidden="true">
          <slot name="prefix">
            <co-icon name=${this._indicatorIconName} size="sm" ?fill=${this.checked}></co-icon>
          </slot>
        </span>
        <span part="label" class="option__label">
          <slot></slot>
        </span>
        <span part="suffix" class="option__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `;
  }

  private _syncMultipleAttribute() {
    const parent = (this as unknown as { _parentFormGroup?: { multipleChoice?: boolean } })
      ._parentFormGroup;
    if (parent?.multipleChoice) {
      this.setAttribute('multiple', '');
    } else {
      this.removeAttribute('multiple');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-option': CoOption;
  }
}
