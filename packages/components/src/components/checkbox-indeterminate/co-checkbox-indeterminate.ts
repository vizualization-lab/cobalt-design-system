import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionCheckboxIndeterminate } from '@lion/ui/checkbox-group.js';
import { cobaltCheckboxIndeterminateStyles } from './co-checkbox-indeterminate.styles.js';
import '../icon/co-icon.js';

/**
 * @tag co-checkbox-indeterminate
 * @summary A parent checkbox that manages nested child checkboxes with indeterminate state support.
 *
 * @slot - Nested co-checkbox children
 * @slot label - Checkbox label content
 *
 * @csspart base - The checkbox wrapper
 * @csspart icon - The co-icon indicator
 * @csspart label - The label wrapper
 * @csspart children - The nested checkboxes container
 */
@customElement('co-checkbox-indeterminate')
export class CoCheckboxIndeterminate extends LionCheckboxIndeterminate {
  static get styles() {
    return [...super.styles, cobaltCheckboxIndeterminateStyles];
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

  private get _indicatorIconName(): string {
    if (this.indeterminate) return 'check-indeterminate-small';
    return this.checked ? 'check-box' : 'check-box-outline-blank';
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
          name=${this._indicatorIconName}
          size="sm"
          ?fill=${this.checked || this.indeterminate}
          aria-hidden="true"
        ></co-icon>
        <span part="label" class="checkbox__label">
          <slot name="label"></slot>
        </span>
      </div>
      ${this._afterTemplate()}
    `;
  }

  protected override _afterTemplate() {
    return html`
      <div part="children" class="checkbox__nested" role="list">
        <slot></slot>
      </div>
    `;
  }

  private _onMousedown(e: Event) {
    if ((e.target as HTMLElement)?.slot !== 'input') {
      e.preventDefault();
    }
  }

  private _onCheckboxClick(e: Event) {
    const input = this.querySelector('[slot="input"]') as HTMLInputElement | null;
    if (input && !this.disabled && e.target !== input) {
      input.click();
      input.focus();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-checkbox-indeterminate': CoCheckboxIndeterminate;
  }
}
