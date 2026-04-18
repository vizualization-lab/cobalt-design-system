import { html, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LionOption } from '@lion/ui/listbox.js';
import { cobaltOptionStyles } from './co-option.styles.js';

/**
 * @tag co-option
 * @summary A shared option component for Cobalt listbox and combobox controls.
 *
 * @slot - Option label content
 * @slot indicator-icon - Icon indicator (auto-manages `fill` from checked state)
 * @slot indicator - Generic custom indicator (no auto state management)
 *
 * @csspart base - The option wrapper
 * @csspart indicator - The selection indicator
 * @csspart label - The option label wrapper
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

  private _iconElement: HTMLElement | null = null;

  override connectedCallback(): void {
    super.connectedCallback();
    this._syncMultipleAttribute();
  }

  override firstUpdated(changedProperties: PropertyValues<this>): void {
    super.firstUpdated(changedProperties);
    this._discoverIndicatorElements();
  }

  override updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);
    this._syncMultipleAttribute();
    this._syncIconFill();
  }

  override render() {
    return html`
      <div part="base" class="option">
        <span part="indicator" class="option__indicator" aria-hidden="true"></span>
        <span part="label" class="option__label">
          <slot></slot>
        </span>
      </div>
    `;
  }

  /**
   * Lion's SlotMixin wraps light DOM content in a <span>, preventing named
   * slot projection. Instead we find indicator elements in the light DOM and
   * move them into the shadow DOM indicator container directly. The :empty
   * pseudo-class in CSS hides the default indicator when custom content is present.
   */
  private _discoverIndicatorElements() {
    const iconEl = this.querySelector<HTMLElement>('[slot="indicator-icon"]');
    const genericEl = this.querySelector<HTMLElement>('[slot="indicator"]');
    const el = iconEl ?? genericEl;

    const indicatorHost = this.shadowRoot!.querySelector('.option__indicator');
    if (!el || !indicatorHost) return;

    indicatorHost.appendChild(el);

    if (iconEl) {
      this._iconElement = iconEl;
      this._syncIconFill();
    }
  }

  private _syncIconFill() {
    if (!this._iconElement) return;

    if (this.checked) {
      this._iconElement.setAttribute('fill', '');
    } else {
      this._iconElement.removeAttribute('fill');
    }
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
