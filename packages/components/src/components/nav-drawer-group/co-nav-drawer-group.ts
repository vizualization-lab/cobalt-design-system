import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cobaltNavDrawerGroupStyles } from './co-nav-drawer-group.styles.js';
import '../icon/co-icon.js';

let nextGroupId = 0;

export interface NavDrawerGroupToggleDetail {
  value: string;
  open: boolean;
}

/**
 * @tag co-nav-drawer-group
 * @summary A collapsible group for nested content inside co-nav-drawer.
 *
 * @slot - Nested drawer content
 *
 * @csspart base - The group wrapper
 * @csspart trigger - The toggle button
 * @csspart chevron - The disclosure chevron
 * @csspart label - The group label
 * @csspart content - The collapsible content container
 *
 * @fires co-toggle - Emitted when the group open state changes
 */
@customElement('co-nav-drawer-group')
export class CoNavDrawerGroup extends LitElement {
  static override styles = [cobaltNavDrawerGroupStyles];

  private readonly _contentId = `co-nav-drawer-group-content-${nextGroupId++}`;

  /** Text shown in the group trigger. */
  @property()
  label = '';

  /** Value included with toggle events. */
  @property({ reflect: true })
  value = '';

  /** Controls whether nested content is visible. */
  @property({ type: Boolean, reflect: true })
  open = false;

  override focus(options?: FocusOptions): void {
    this.shadowRoot?.querySelector<HTMLElement>('[part="trigger"]')?.focus(options);
  }

  override render() {
    return html`
      <div part="base" class="group">
        <button
          part="trigger"
          class="group__trigger"
          type="button"
          aria-expanded=${this.open ? 'true' : 'false'}
          aria-controls=${this._contentId}
          @click=${this._onToggle}
          @keydown=${this._onKeyDown}
        >
          <co-icon
            part="chevron"
            class="group__chevron"
            name="chevron-right"
            size="xs"
            aria-hidden="true"
          ></co-icon>
          <span part="label" class="group__label">${this.label}</span>
        </button>
        <div part="content" id=${this._contentId} class="group__content" ?hidden=${!this.open}>
          <slot></slot>
        </div>
      </div>
    `;
  }

  private _onToggle = () => {
    this.open = !this.open;
    this.dispatchEvent(
      new CustomEvent<NavDrawerGroupToggleDetail>('co-toggle', {
        detail: { value: this.value, open: this.open },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private _onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    this._onToggle();
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'co-nav-drawer-group': CoNavDrawerGroup;
  }
}
