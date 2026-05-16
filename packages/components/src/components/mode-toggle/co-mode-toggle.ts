import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { IconSize } from '../icon/co-icon.js';
import { getStoredMode, getTheme, resolveMode, setTheme } from '@cobalt/tokens/theme';
import { cobaltModeToggleStyles } from './co-mode-toggle.styles.js';
import '../icon/co-icon.js';

export type ModeToggleMode = 'light' | 'dark' | 'auto';

export interface ModeToggleChangeDetail {
  mode: ModeToggleMode;
  resolvedMode: 'light' | 'dark';
  persisted: boolean;
  storageNamespace: string;
}

const modeIcons: Record<ModeToggleMode, string> = {
  light: 'light-mode',
  auto: 'brightness-auto',
  dark: 'dark-mode',
};

const MODE_SYNC_EVENT = 'co-mode-toggle-sync';

/**
 * @tag co-mode-toggle
 * @summary A light, dark, and system color mode toggle.
 *
 * @csspart base - The toggle wrapper
 * @csspart button - The toggle button
 * @csspart icon - The internal co-icon element
 *
 * @fires co-change - Emitted when the selected mode changes
 */
@customElement('co-mode-toggle')
export class CoModeToggle extends LitElement {
  static override styles = [cobaltModeToggleStyles];

  /** The selected mode preference. Use `auto` to follow the system preference. */
  @property({ reflect: true })
  mode: ModeToggleMode = 'auto';

  /** The icon size passed to internal co-icon elements. */
  @property({ reflect: true })
  size: IconSize = 'md';

  /** Whether mode changes are persisted to localStorage. */
  @property({ type: Boolean, reflect: true })
  persist = true;

  /** Namespace used for localStorage persistence. */
  @property({ attribute: 'storage-namespace', reflect: true })
  storageNamespace = 'cobalt';

  /** Accessible label for the toggle. */
  @property()
  label = 'Color mode';

  /** Disables user interaction. */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  private _resolvedMode: 'light' | 'dark' = 'light';

  private _mediaQuery?: MediaQueryList;

  private _hasExplicitMode = false;

  override connectedCallback(): void {
    super.connectedCallback();
    this._hasExplicitMode = this.hasAttribute('mode');
    this._mediaQuery = this._getSystemModeQuery();
    this._mediaQuery?.addEventListener('change', this._handleSystemModeChange);
    window.addEventListener(MODE_SYNC_EVENT, this._handleModeSync as EventListener);

    if (this.persist && !this._hasExplicitMode) {
      const storedMode = getStoredMode({ storageNamespace: this.storageNamespace });
      if (storedMode) this.mode = storedMode;
    }

    this._applyMode();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._mediaQuery?.removeEventListener('change', this._handleSystemModeChange);
    window.removeEventListener(MODE_SYNC_EVENT, this._handleModeSync as EventListener);
  }

  override updated(changedProperties: Map<string, unknown>): void {
    if (
      changedProperties.has('mode') ||
      changedProperties.has('persist') ||
      changedProperties.has('storageNamespace')
    ) {
      if (
        !this._hasExplicitMode &&
        (changedProperties.has('persist') || changedProperties.has('storageNamespace'))
      ) {
        const storedMode = this.persist
          ? getStoredMode({ storageNamespace: this.storageNamespace })
          : null;
        if (storedMode && storedMode !== this.mode) {
          this.mode = storedMode;
          this._applyMode();
          return;
        }
      }

      this._applyMode();
    }
  }

  override render() {
    const nextMode = this._resolvedMode === 'dark' ? 'light' : 'dark';
    return html`
      <div part="base" class="mode-toggle">
        <button
          part="button"
          class="mode-toggle__button"
          type="button"
          aria-label=${this._compactLabel(nextMode)}
          ?disabled=${this.disabled}
          @click=${this._handleCompactClick}
        >
          <co-icon
            part="icon"
            name=${modeIcons[nextMode]}
            size=${this.size}
            aria-hidden="true"
          ></co-icon>
        </button>
      </div>
    `;
  }

  private _handleCompactClick = () => {
    const nextMode = this._resolvedMode === 'dark' ? 'light' : 'dark';
    this._setModeFromUser(nextMode);
  };

  private _setModeFromUser(mode: ModeToggleMode): void {
    if (this.disabled || this.mode === mode) return;
    this.mode = mode;
    this._applyMode({ persist: this.persist, emit: true, broadcast: true });
  }

  private _applyMode(
    options: { persist?: boolean; emit?: boolean; broadcast?: boolean } = {},
  ): void {
    const mode = this._normalizeMode(this.mode);
    if (mode !== this.mode) {
      this.mode = mode;
      return;
    }

    const theme = getTheme().theme;
    const resolvedMode = resolveMode(mode);
    this._resolvedMode = resolvedMode;
    setTheme(theme, mode, {
      persist: options.persist ?? false,
      storageNamespace: this.storageNamespace,
    });

    const detail: ModeToggleChangeDetail = {
      mode,
      resolvedMode,
      persisted: Boolean(options.persist),
      storageNamespace: this.storageNamespace,
    };

    if (options.emit) {
      this.dispatchEvent(
        new CustomEvent<ModeToggleChangeDetail>('co-change', {
          detail,
          bubbles: true,
          composed: true,
        }),
      );
    }

    if (options.broadcast) {
      window.dispatchEvent(new CustomEvent(MODE_SYNC_EVENT, { detail }));
    }
  }

  private _handleSystemModeChange = () => {
    if (this.mode !== 'auto') return;
    this._applyMode();
    this.requestUpdate();
  };

  private _handleModeSync = (event: CustomEvent<ModeToggleChangeDetail>) => {
    const detail = event.detail;
    if (!detail || detail.storageNamespace !== this.storageNamespace || detail.mode === this.mode) {
      return;
    }

    this.mode = detail.mode;
    this._resolvedMode = detail.resolvedMode;
  };

  private _getSystemModeQuery(): MediaQueryList | undefined {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined;
    return window.matchMedia('(prefers-color-scheme: dark)');
  }

  private _normalizeMode(mode: string): ModeToggleMode {
    return mode === 'light' || mode === 'dark' || mode === 'auto' ? mode : 'auto';
  }

  private _compactLabel(nextMode: 'light' | 'dark') {
    if (!this.label) return nothing;
    return nextMode === 'dark' ? 'Switch to dark mode' : 'Switch to light mode';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-mode-toggle': CoModeToggle;
  }
}
