import { LitElement, html, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import type { IconSize } from '../icon/co-icon.js';
import { cobaltNavRailItemStyles } from './co-nav-rail-item.styles.js';
import '../icon/co-icon.js';

export type NavRailItemTarget = '_blank' | '_self' | '_parent' | '_top';

/**
 * @tag co-nav-rail-item
 * @summary A vertically stacked navigation item with an icon and label for use inside co-nav-rail-bar.
 *
 * @slot - Label content shown below the icon
 * @slot icon - Optional custom icon content that replaces the built-in co-icon
 *
 * @csspart control - The interactive anchor or button element
 * @csspart icon - The icon container
 * @csspart label - The label container
 */
@customElement('co-nav-rail-item')
export class CoNavRailItem extends LitElement {
  static override styles = [cobaltNavRailItemStyles];

  /** Stable value used by the parent navigation container. */
  @property({ reflect: true })
  value = '';

  /** Icon name passed to the internal co-icon when no icon slot is provided. */
  @property({ reflect: true })
  icon = '';

  /** Optional href for link-based navigation. */
  @property()
  href?: string;

  /** Target for link-based navigation. */
  @property()
  target?: NavRailItemTarget;

  /** Fallback label when no default slot content is provided. */
  @property()
  label?: string;

  /** Reflects the selected/current item state. */
  @property({ type: Boolean, reflect: true })
  selected = false;

  /** Prevents interaction and selection. */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  @query('.nav-item')
  private _control!: HTMLAnchorElement | HTMLButtonElement;

  private _controlTabIndex = -1;

  /**
   * Called by the parent co-nav-rail-bar to manage roving focus.
   */
  setFocusable(focusable: boolean): void {
    this._controlTabIndex = !this.disabled && focusable ? 0 : -1;
    if (this._control) {
      this._control.tabIndex = this._controlTabIndex;
    }
  }

  /**
   * Focuses the inner interactive control.
   */
  override focus(options?: FocusOptions): void {
    this._control?.focus(options);
  }

  private get _iconSize(): IconSize {
    return 'md';
  }

  private _handleDisabledLinkClick(event: MouseEvent): void {
    if (!this.disabled) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  }

  override updated(): void {
    if (this._control) {
      this._control.tabIndex = this.disabled ? -1 : this._controlTabIndex;
    }
  }

  override render() {
    const labelTemplate = html`
      <span part="label" class="nav-item__label">
        <slot>${this.label ?? nothing}</slot>
      </span>
    `;

    const iconTemplate = html`
      <span part="icon" class="nav-item__icon" aria-hidden="true">
        <slot name="icon">
          ${this.icon
            ? html`<co-icon name=${this.icon} size=${this._iconSize}></co-icon>`
            : nothing}
        </slot>
      </span>
    `;

    if (this.href) {
      return html`
        <a
          part="control"
          class="nav-item"
          href=${this.href}
          target=${this.target ?? nothing}
          aria-disabled=${this.disabled ? 'true' : nothing}
          aria-current=${this.selected ? 'page' : nothing}
          tabindex=${this.disabled ? -1 : this._controlTabIndex}
          @click=${this._handleDisabledLinkClick}
        >
          ${iconTemplate} ${labelTemplate}
        </a>
      `;
    }

    return html`
      <button
        part="control"
        class="nav-item"
        type="button"
        ?disabled=${this.disabled}
        aria-current=${this.selected && !this.href ? 'page' : nothing}
        tabindex=${this.disabled ? -1 : this._controlTabIndex}
      >
        ${iconTemplate} ${labelTemplate}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-nav-rail-item': CoNavRailItem;
  }
}
