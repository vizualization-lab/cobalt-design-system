import { html, LitElement, nothing } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { CoBreakpointMd, CoComponentNavRailBarWidth } from '@cobalt/tokens';
import { cobaltAppShellStyles } from './co-app-shell.styles.js';

export interface AppShellDrawerDetail {
  open: boolean;
}

/**
 * @tag co-app-shell
 * @summary A responsive application shell with optional banner, top navigation, rail, drawer, body, and footer regions.
 *
 * @slot banner - Full-width content above the shell top navigation
 * @slot topnav - Full-width top navigation row; the shell-owned mobile toggle appears before this content
 * @slot rail - Persistent desktop rail content; appears first in the mobile overlay when present
 * @slot drawer - Persistent desktop drawer content; appears after the rail in the mobile overlay when present
 * @slot body - Main application content region
 * @slot footer - Full-width footer content below the shell body
 *
 * @csspart base - The overall shell wrapper
 * @csspart banner - The full-width banner row
 * @csspart topnav - The full-width top navigation row
 * @csspart toggle - The mobile drawer toggle button
 * @csspart content - The shell content row
 * @csspart rail - The rail region, rendered persistently on desktop and in the mobile overlay
 * @csspart drawer - The drawer region, rendered persistently on desktop and in the mobile overlay
 * @csspart body - The main body region
 * @csspart footer - The footer region
 * @csspart backdrop - The backdrop shown behind the mobile overlay
 *
 * @fires co-drawer-open - Emitted when the mobile drawer overlay opens
 * @fires co-drawer-close - Emitted when the mobile drawer overlay closes
 * @fires co-drawer-toggle - Emitted when the mobile drawer overlay toggles
 */
@customElement('co-app-shell')
export class CoAppShell extends LitElement {
  static override styles = [cobaltAppShellStyles];

  /** Controls the mobile drawer overlay state. */
  @property({ type: Boolean, attribute: 'drawer-open', reflect: true })
  drawerOpen = false;

  /** CSS length used for the persistent desktop rail column. */
  @property({ attribute: 'rail-width', reflect: true })
  railWidth = '';

  /** CSS length used for the persistent desktop drawer column. */
  @property({ attribute: 'drawer-width', reflect: true })
  drawerWidth = '';

  @state()
  private _hasBanner = false;

  @state()
  private _hasTopnav = false;

  @state()
  private _hasRail = false;

  @state()
  private _hasDrawer = false;

  @state()
  private _hasFooter = false;

  @state()
  private _desktop = false;

  @query('.app-shell__overlay-panel')
  private _drawerPanel?: HTMLElement;

  @query('#drawer-toggle')
  private _drawerToggle?: HTMLButtonElement;

  private _desktopQuery?: MediaQueryList;

  private _lightDomObserver?: MutationObserver;

  private _drawerPanelId = `co-app-shell-drawer-${Math.random().toString(36).slice(2)}`;

  override connectedCallback(): void {
    super.connectedCallback();
    this._syncSlotPresence();

    this._desktopQuery = window.matchMedia(`(min-width: ${CoBreakpointMd})`);
    this._desktop = this._desktopQuery.matches;
    this._desktopQuery.addEventListener('change', this._handleDesktopChange);
    window.addEventListener('keydown', this._handleWindowKeydown);

    this._lightDomObserver = new MutationObserver(() => this._syncSlotPresence());
    this._lightDomObserver.observe(this, {
      childList: true,
      subtree: false,
      attributes: true,
      attributeFilter: ['slot'],
    });
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._desktopQuery?.removeEventListener('change', this._handleDesktopChange);
    window.removeEventListener('keydown', this._handleWindowKeydown);
    this._lightDomObserver?.disconnect();
  }

  override updated(changedProperties: Map<string, unknown>): void {
    queueMicrotask(() => this._syncToggleAriaControls());

    if (changedProperties.has('drawerOpen') && this._showBackdrop) {
      if (this.drawerOpen) {
        queueMicrotask(() => this._drawerPanel?.focus());
      }
    }
  }

  openDrawer(): void {
    if (!this._canToggleDrawer || this.drawerOpen) return;
    this.drawerOpen = true;
    this._dispatchDrawerEvent('co-drawer-open', true);
    this._dispatchDrawerEvent('co-drawer-toggle', true);
  }

  closeDrawer(): void {
    if (!this._canToggleDrawer || !this.drawerOpen) return;
    this.drawerOpen = false;
    this._dispatchDrawerEvent('co-drawer-close', false);
    this._dispatchDrawerEvent('co-drawer-toggle', false);
    queueMicrotask(() => this._drawerToggle?.focus());
  }

  toggleDrawer(): void {
    if (!this._canToggleDrawer) return;
    if (this.drawerOpen) {
      this.closeDrawer();
    } else {
      this.openDrawer();
    }
  }

  override render() {
    const showTopnav = this._hasTopnav || this._showDrawerToggle;
    const bodyClass = `app-shell__body${this._hasDesktopSideNav ? ' app-shell__body--offset' : ''}`;

    return html`
      <div part="base" class="app-shell">
        ${this._hasBanner
          ? html`
              <div part="banner" class="app-shell__banner">
                <div class="app-shell__banner-inner">
                  <slot class="app-shell__banner-slot" name="banner"></slot>
                </div>
              </div>
            `
          : nothing}
        ${showTopnav
          ? html`
              <div part="topnav" class="app-shell__topnav">
                <div class="app-shell__topnav-inner">
                  ${this._showDrawerToggle
                    ? html`
                        <button
                          id="drawer-toggle"
                          part="toggle"
                          type="button"
                          class="app-shell__toggle"
                          aria-expanded=${String(this.drawerOpen)}
                          aria-label=${this.drawerOpen ? 'Close navigation' : 'Open navigation'}
                          @click=${this.toggleDrawer}
                        >
                          Menu
                        </button>
                      `
                    : nothing}
                  ${this._hasTopnav
                    ? html`
                        <div class="app-shell__topnav-slot">
                          <slot class="app-shell__topnav-slot-inner" name="topnav"></slot>
                        </div>
                      `
                    : nothing}
                </div>
              </div>
            `
          : nothing}

        <div
          part="content"
          class="app-shell__content-row"
          style=${styleMap({ gridTemplateColumns: this._contentColumns })}
        >
          ${this._desktop && this._hasRail
            ? html`
                <aside part="rail" class="app-shell__rail">
                  <slot class="app-shell__rail-slot" name="rail"></slot>
                </aside>
              `
            : nothing}
          ${this._desktop && this._hasDrawer
            ? html`
                <aside part="drawer" class="app-shell__drawer">
                  <slot class="app-shell__drawer-slot" name="drawer"></slot>
                </aside>
              `
            : nothing}

          <main part="body" class=${bodyClass}>
            <slot class="app-shell__body-slot" name="body"></slot>
          </main>
        </div>

        ${this._hasFooter
          ? html`
              <footer part="footer" class="app-shell__footer">
                <div class="app-shell__footer-inner">
                  <slot class="app-shell__footer-slot" name="footer"></slot>
                </div>
              </footer>
            `
          : nothing}
        ${!this._desktop && this._hasOverlayContent
          ? html`
              <div
                class=${`app-shell__overlay${this.drawerOpen ? ' app-shell__overlay--open' : ''}`}
                aria-hidden=${String(!this.drawerOpen)}
                style=${styleMap({ '--_co-app-shell-overlay-width': this._overlayWidth })}
              >
                <div
                  id=${this._drawerPanelId}
                  class="app-shell__overlay-panel"
                  data-overlay-layout=${this._hasSplitOverlayLayout ? 'split' : 'stack'}
                  tabindex="-1"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Navigation"
                  style=${styleMap({
                    '--_co-app-shell-overlay-width': this._overlayWidth,
                    gridTemplateColumns: this._overlayColumns,
                  })}
                >
                  ${this._hasRail
                    ? html`
                        <section
                          part="rail"
                          class="app-shell__overlay-section app-shell__overlay-section--rail"
                        >
                          <slot class="app-shell__overlay-rail-slot" name="rail"></slot>
                        </section>
                      `
                    : nothing}
                  ${this._hasDrawer
                    ? html`
                        <section
                          part="drawer"
                          class="app-shell__overlay-section app-shell__overlay-section--drawer"
                        >
                          <slot class="app-shell__overlay-drawer-slot" name="drawer"></slot>
                        </section>
                      `
                    : nothing}
                </div>
              </div>
            `
          : nothing}
        ${this._showBackdrop
          ? html`
              <button
                part="backdrop"
                type="button"
                class="app-shell__backdrop"
                aria-label="Close navigation"
                @click=${this.closeDrawer}
              ></button>
            `
          : nothing}
      </div>
    `;
  }

  private get _hasOverlayContent(): boolean {
    return this._hasRail || this._hasDrawer;
  }

  private get _canToggleDrawer(): boolean {
    return this._hasOverlayContent && !this._desktop;
  }

  private get _showDrawerToggle(): boolean {
    return this._canToggleDrawer;
  }

  private get _showBackdrop(): boolean {
    return this._canToggleDrawer && this.drawerOpen;
  }

  private get _hasDesktopSideNav(): boolean {
    return this._desktop && (this._hasRail || this._hasDrawer);
  }

  private get _resolvedRailWidth(): string {
    return this.railWidth || `var(--co-app-shell-rail-width, ${CoComponentNavRailBarWidth})`;
  }

  private get _resolvedDrawerWidth(): string {
    return this.drawerWidth || 'var(--co-app-shell-drawer-width, 260px)';
  }

  private get _contentColumns(): string {
    if (!this._desktop) {
      return 'minmax(0, 1fr)';
    }

    const columns: string[] = [];
    if (this._hasRail) columns.push(this._resolvedRailWidth);
    if (this._hasDrawer) columns.push(this._resolvedDrawerWidth);
    columns.push('minmax(0, 1fr)');
    return columns.join(' ');
  }

  private get _overlayWidth(): string {
    if (this._hasRail && this._hasDrawer) {
      return `calc(${this._resolvedRailWidth} + ${this._resolvedDrawerWidth})`;
    }

    if (this._hasDrawer) {
      return this._resolvedDrawerWidth;
    }

    return this._resolvedRailWidth;
  }

  private get _overlayColumns(): string {
    if (this._hasSplitOverlayLayout) {
      return `${this._resolvedRailWidth} minmax(0, 1fr)`;
    }

    return 'minmax(0, 1fr)';
  }

  private get _hasSplitOverlayLayout(): boolean {
    return this._hasRail && this._hasDrawer;
  }

  private _dispatchDrawerEvent(name: string, open: boolean) {
    this.dispatchEvent(
      new CustomEvent<AppShellDrawerDetail>(name, {
        detail: { open },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _handleDesktopChange = (event: MediaQueryListEvent) => {
    this._desktop = event.matches;
  };

  private _handleWindowKeydown = (event: KeyboardEvent) => {
    if (event.key !== 'Escape' || !this._showBackdrop) return;
    this.closeDrawer();
  };

  private _syncSlotPresence() {
    const hasSlot = (slotName: string) =>
      Array.from(this.children).some(
        (child) => child instanceof HTMLElement && child.getAttribute('slot') === slotName,
      );

    this._hasBanner = hasSlot('banner');
    this._hasTopnav = hasSlot('topnav');
    this._hasRail = hasSlot('rail');
    this._hasDrawer = hasSlot('drawer');
    this._hasFooter = hasSlot('footer');
  }

  private _syncToggleAriaControls() {
    if (!this._drawerToggle) return;

    const controls = this._drawerPanel?.id;
    if (controls) {
      this._drawerToggle.setAttribute('aria-controls', controls);
    } else {
      this._drawerToggle.removeAttribute('aria-controls');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-app-shell': CoAppShell;
  }
}
