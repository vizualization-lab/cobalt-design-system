import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionCheckbox } from '@lion/ui/checkbox-group.js';
import { cobaltCheckboxStyles } from './co-checkbox.styles.js';
import '../icon/co-icon.js';

/**
 * @tag co-checkbox
 * @summary A checkbox with co-icon indicator replacing the native checkbox visual.
 *
 * @slot - Checkbox label content
 *
 * @csspart base - The checkbox wrapper
 * @csspart icon - The co-icon indicator
 * @csspart label - The label wrapper
 */
@customElement('co-checkbox')
export class CoCheckbox extends LionCheckbox {
  static get styles() {
    return [...super.styles, cobaltCheckboxStyles];
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
      <div
        part="base"
        class="checkbox"
        @mousedown=${this._onMousedown}
        @click=${this._onCheckboxClick}
      >
        <slot name="input"></slot>
        <co-icon
          part="icon"
          class="checkbox__icon"
          name=${this.checked ? 'check-box' : 'check-box-outline-blank'}
          size="sm"
          ?fill=${this.checked}
          aria-hidden="true"
        ></co-icon>
        <span part="label" class="checkbox__label">
          <slot name="label"></slot>
        </span>
      </div>
    `;
  }

  private _onMousedown(e: Event) {
    if ((e.target as HTMLElement)?.slot !== 'input') {
      e.preventDefault();
    }
  }

  private _onCheckboxClick() {
    const input = this.querySelector('[slot="input"]') as HTMLInputElement | null;
    if (input && !this.disabled) {
      input.click();
      input.focus();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-checkbox': CoCheckbox;
  }
}
