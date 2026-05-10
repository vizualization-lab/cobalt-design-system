import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cobaltNavDrawerItemStyles } from './co-nav-drawer-item.styles.js';
import '../icon/co-icon.js';

/**
 * @tag co-nav-drawer-item
 * @summary A navigation item for use inside co-nav-drawer.
 *
 * @slot - Item label text
 * @slot prefix - Custom prefix content (overrides default icon)
 *
 * @csspart base - The item wrapper
 * @csspart prefix - The prefix icon/slot container
 * @csspart label - The label text container
 */
@customElement('co-nav-drawer-item')
export class CoNavDrawerItem extends LitElement {
  static override styles = [cobaltNavDrawerItemStyles];

  @state()
  private _hasPrefixSlot = false;

  /** Selection value tracked by the parent drawer. */
  @property({ reflect: true })
  value = '';

  /** co-icon name for the prefix icon. */
  @property()
  icon = '';

  /** Link destination. */
  @property()
  href?: string;

  /** Whether this item is currently selected. */
  @property({ type: Boolean, reflect: true })
  selected = false;

  /** Whether this item is disabled. */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  override focus(options?: FocusOptions): void {
    this.shadowRoot?.querySelector<HTMLElement>('[part="base"]')?.focus(options);
  }

  override render() {
    const showPrefix = this.icon || this._hasPrefixSlot;
    const content = html`
      <span part="prefix" class="item__prefix" ?hidden=${!showPrefix}>
        <slot name="prefix" @slotchange=${this._onPrefixSlotChange}>
          ${this.icon
            ? html`<co-icon name=${this.icon} size="sm" aria-hidden="true"></co-icon>`
            : nothing}
        </slot>
      </span>
      <span part="label" class="item__label">
        <slot></slot>
      </span>
    `;

    if (this.href && !this.disabled) {
      return html`
        <a
          part="base"
          class="item"
          href=${this.href}
          tabindex=${this.disabled ? -1 : 0}
          aria-current=${this.selected ? 'page' : nothing}
          aria-disabled=${this.disabled ? 'true' : nothing}
        >
          ${content}
        </a>
      `;
    }

    return html`
      <div
        part="base"
        class="item"
        role="link"
        tabindex=${this.disabled ? -1 : 0}
        aria-current=${this.selected ? 'page' : nothing}
        aria-disabled=${this.disabled ? 'true' : nothing}
      >
        ${content}
      </div>
    `;
  }

  private _onPrefixSlotChange = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    this._hasPrefixSlot = slot.assignedNodes({ flatten: true }).length > 0;
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'co-nav-drawer-item': CoNavDrawerItem;
  }
}
