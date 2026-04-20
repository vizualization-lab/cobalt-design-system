import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionRadio } from '@lion/ui/radio-group.js';
import { cobaltRadioStyles } from './co-radio.styles.js';
import '../icon/co-icon.js';

/**
 * @tag co-radio
 * @summary A radio button with co-icon indicator replacing the native radio visual.
 *
 * @slot - Radio label content
 *
 * @csspart base - The radio wrapper
 * @csspart icon - The co-icon indicator
 * @csspart label - The label wrapper
 */
@customElement('co-radio')
export class CoRadio extends LionRadio {
  static get styles() {
    return [...super.styles, cobaltRadioStyles];
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
      <div part="base" class="radio" @mousedown=${this._onMousedown} @click=${this._onRadioClick}>
        <slot name="input"></slot>
        <co-icon
          part="icon"
          class="radio__icon"
          name=${this.checked ? 'radio-button-checked' : 'radio-button-unchecked'}
          size="sm"
          ?fill=${this.checked}
          aria-hidden="true"
        ></co-icon>
        <span part="label" class="radio__label">
          <slot name="label"></slot>
        </span>
      </div>
    `;
  }

  private _onMousedown(e: Event) {
    // Prevent mousedown from moving focus away from the native input
    if ((e.target as HTMLElement)?.slot !== 'input') {
      e.preventDefault();
    }
  }

  private _onRadioClick(e: Event) {
    const input = this.querySelector('[slot="input"]') as HTMLInputElement | null;
    if (input && !this.disabled && e.target !== input) {
      input.click();
      input.focus();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-radio': CoRadio;
  }
}
