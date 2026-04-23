import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cobaltNavDrawerStyles } from './co-nav-drawer.styles.js';

export interface NavDrawerChangeDetail {
  value: string;
}

/**
 * @tag co-nav-drawer
 * @summary A collapsible navigation drawer for site/app menus.
 *
 * @slot - Drawer content (co-nav-drawer-item, co-nav-separator, headings)
 *
 * @csspart base - The nav landmark wrapper
 * @csspart content - The scrollable content container
 *
 * @fires co-change - Emitted when the selected item changes
 */
@customElement('co-nav-drawer')
export class CoNavDrawer extends LitElement {
  static override styles = [cobaltNavDrawerStyles];

  /** Controls drawer visibility. */
  @property({ type: Boolean, reflect: true })
  open = true;

  /** Value of the currently selected nav item. */
  @property({ reflect: true })
  value = '';

  /** Accessible label for the nav landmark. */
  @property()
  label = 'Navigation';

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('click', this._onItemClick);
    this.addEventListener('keydown', this._onKeyDown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this._onItemClick);
    this.removeEventListener('keydown', this._onKeyDown);
  }

  override render() {
    return html`
      <nav part="base" class="drawer" aria-label=${this.label}>
        <div part="content" class="drawer__content">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
      </nav>
    `;
  }

  private _getItems(): HTMLElement[] {
    return Array.from(this.querySelectorAll('co-nav-drawer-item:not([disabled])'));
  }

  private _onSlotChange() {
    // Sync initial selection
    if (this.value) {
      this._syncSelection(this.value);
    }
  }

  private _syncSelection(value: string) {
    const items = Array.from(this.querySelectorAll('co-nav-drawer-item'));
    items.forEach((item: any) => {
      item.selected = item.value === value;
    });
  }

  private _onItemClick = (e: Event) => {
    const item = (e.target as HTMLElement).closest('co-nav-drawer-item') as HTMLElement | null;
    if (!item || (item as any).disabled) return;

    const value = (item as any).value;
    if (value && value !== this.value) {
      this.value = value;
      this._syncSelection(value);
      this.dispatchEvent(
        new CustomEvent<NavDrawerChangeDetail>('co-change', {
          detail: { value },
          bubbles: true,
          composed: true,
        }),
      );
    }
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    const items = this._getItems();
    if (!items.length) return;

    const currentIndex = items.findIndex(
      (item) => item === document.activeElement || item.contains(document.activeElement),
    );

    let nextIndex = -1;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'ArrowUp':
        e.preventDefault();
        nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        break;
      case 'Home':
        e.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        nextIndex = items.length - 1;
        break;
      default:
        return;
    }

    if (nextIndex >= 0) {
      items[nextIndex].focus();
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'co-nav-drawer': CoNavDrawer;
  }
}
