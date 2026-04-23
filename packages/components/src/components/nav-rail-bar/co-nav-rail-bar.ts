import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cobaltNavRailBarStyles } from './co-nav-rail-bar.styles.js';
import type { CoNavRailItem } from '../nav-rail-item/co-nav-rail-item.js';
import '../nav-rail-item/co-nav-rail-item.js';

export interface NavRailBarChangeDetail {
  value: string;
}

/**
 * @tag co-nav-rail-bar
 * @summary A vertical navigation container that manages selection across nested co-nav-rail-item children.
 *
 * @slot - co-nav-rail-item children rendered as the navigation destinations
 *
 * @csspart base - The nav landmark wrapper
 * @csspart items - The items container
 *
 * @fires co-change - Emitted when the selected nav item changes
 */
@customElement('co-nav-rail-bar')
export class CoNavRailBar extends LitElement {
  static override styles = [cobaltNavRailBarStyles];

  /** Value of the currently selected nav item. */
  @property({ reflect: true })
  value = '';

  /** Accessible label for the nav landmark. */
  @property()
  label = 'Side navigation';

  // Guards against feeding a parent-driven value update back into another
  // selection sync while we are normalizing child state.
  private _syncingSelection = false;

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'navigation');
    this.addEventListener('click', this._handleClick);
    this.addEventListener('keydown', this._handleKeydown);
    this._syncSelection();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this._handleClick);
    this.removeEventListener('keydown', this._handleKeydown);
  }

  override updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('value') && !this._syncingSelection) {
      this._syncSelection();
    }
  }

  private get _items(): CoNavRailItem[] {
    return Array.from(this.children).filter(
      (el): el is CoNavRailItem => el.tagName.toLowerCase() === 'co-nav-rail-item',
    );
  }

  private get _enabledItems(): CoNavRailItem[] {
    return this._items.filter((item) => !item.disabled);
  }

  override render() {
    return html`
      <nav part="base" class="nav-rail-bar" aria-label=${this.label}>
        <div part="items" class="nav-rail-bar__items">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </nav>
    `;
  }

  private _handleSlotChange = () => {
    this._syncSelection();
  };

  private _handleClick = (event: Event) => {
    const item = this._findItemFromEvent(event);
    if (!item || item.disabled) return;
    this._selectItem(item, true);
  };

  private _handleKeydown = (event: KeyboardEvent) => {
    if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;

    const enabledItems = this._enabledItems;
    if (enabledItems.length === 0) return;

    // Prefer the item that currently owns focus, then the selected item, and
    // finally the first enabled item so keyboard navigation always has an anchor.
    const currentItem =
      this._findItemFromEvent(event) ??
      enabledItems.find((item) => item.selected) ??
      enabledItems[0];

    const currentIndex = Math.max(0, enabledItems.indexOf(currentItem));

    let nextItem = currentItem;

    if (event.key === 'Home') nextItem = enabledItems[0];
    if (event.key === 'End') nextItem = enabledItems[enabledItems.length - 1];
    if (event.key === 'ArrowUp') nextItem = enabledItems[Math.max(0, currentIndex - 1)];
    if (event.key === 'ArrowDown') {
      nextItem = enabledItems[Math.min(enabledItems.length - 1, currentIndex + 1)];
    }

    event.preventDefault();
    this._selectItem(nextItem, true, true);
  };

  private _findItemFromEvent(event: Event): CoNavRailItem | undefined {
    return event
      .composedPath()
      .find(
        (node): node is CoNavRailItem =>
          node instanceof HTMLElement && node.tagName.toLowerCase() === 'co-nav-rail-item',
      );
  }

  private _syncSelection(emit = false): void {
    const items = this._items;
    const enabledItems = this._enabledItems;
    if (items.length === 0 || enabledItems.length === 0) return;

    // `value` is the strongest source of truth when provided. Otherwise we keep
    // the first preselected enabled child or fall back to the first enabled item.
    const matchingItem = this.value
      ? enabledItems.find((item) => item.value === this.value)
      : undefined;

    const firstSelectedEnabled = enabledItems.find((item) => item.selected);
    const selectedItem = matchingItem ?? firstSelectedEnabled ?? enabledItems[0];

    this._selectItem(selectedItem, emit);
  }

  private _selectItem(item: CoNavRailItem, emit = false, focusItem = false): void {
    if (item.disabled) return;

    const items = this._items;
    this._syncingSelection = true;

    // Keep every enabled item in the normal tab order so Tab walks the rail
    // sequentially from top to bottom. Disabled items stay unfocusable.
    for (const navItem of items) {
      const isSelected = navItem === item;
      navItem.selected = isSelected;
      navItem.setFocusable(!navItem.disabled);
    }

    const nextValue = item.value;
    const changed = this.value !== nextValue;
    this.value = nextValue;
    this._syncingSelection = false;

    if (focusItem) {
      item.focus();
    }

    if (emit && changed) {
      this.dispatchEvent(
        new CustomEvent<NavRailBarChangeDetail>('co-change', {
          detail: { value: nextValue },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-nav-rail-bar': CoNavRailBar;
  }
}
