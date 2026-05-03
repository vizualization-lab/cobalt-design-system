import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

type ContentBucket = 'prefix' | 'default' | 'suffix';

/**
 * @tag co-label
 * @summary A native-label wrapper for external field layouts and form associations.
 *
 * @slot - The visible label content
 * @slot prefix - Optional content shown before the label text
 * @slot suffix - Optional content shown after the label text
 */
@customElement('co-label')
export class CoLabel extends LitElement {
  @property({ attribute: 'for', reflect: true })
  htmlFor?: string;

  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ type: Boolean, reflect: true })
  optional = false;

  @property({ attribute: 'optional-label' })
  optionalLabel = '(optional)';

  private readonly _contentNodes: Record<ContentBucket, Node[]> = {
    prefix: [],
    default: [],
    suffix: [],
  };

  private _observer?: MutationObserver;

  override createRenderRoot() {
    return this;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('click', this._handleClick);
    this._collectDirectChildren();
    this._observer = new MutationObserver((mutations) => {
      const hasExternalChildren = mutations.some(({ addedNodes }) =>
        Array.from(addedNodes).some((node) => this._isExternalChild(node)),
      );

      if (!hasExternalChildren) return;
      this._collectDirectChildren();
      this._attachContentNodes();
    });
    this._observer.observe(this, { childList: true });
  }

  override disconnectedCallback(): void {
    this.removeEventListener('click', this._handleClick);
    this._observer?.disconnect();
    super.disconnectedCallback();
  }

  override firstUpdated(): void {
    this._attachContentNodes();
  }

  override updated(): void {
    this._attachContentNodes();
  }

  override render() {
    return html`
      <style data-co-label-internal="true">
        .co-label__root {
          display: inline-flex;
          align-items: center;
          gap: var(--co-space-gap-sm);
          color: var(--co-color-text-default);
          cursor: default;
          font-family: var(--co-font-family-sans);
          font-size: var(--co-typography-label-size);
          font-weight: var(--co-typography-label-weight);
          letter-spacing: var(--co-typography-label-tracking);
          line-height: var(--co-typography-label-line-height);
        }

        .co-label__root--interactive {
          cursor: pointer;
        }

        .co-label__required {
          color: var(--co-color-feedback-danger-text);
        }

        .co-label__text-group {
          display: inline-flex;
          align-items: center;
          gap: var(--co-space-1);
          min-inline-size: 0;
        }

        .co-label__content,
        .co-label__content > * {
          min-inline-size: 0;
        }

        .co-label__content {
          display: inline-flex;
          align-items: center;
          gap: var(--co-space-gap-sm);
          color: inherit;
        }

        .co-label__content:empty {
          display: none;
        }

        .co-label__optional {
          color: var(--co-color-text-secondary);
          font-weight: var(--co-font-weight-regular);
        }
      </style>
      <label
        data-co-label-internal="true"
        class=${`co-label__root${this.htmlFor ? ' co-label__root--interactive' : ''}`}
        for=${ifDefined(this.htmlFor || undefined)}
      >
        ${this.required
          ? html`<span class="co-label__required" aria-hidden="true">*</span>`
          : nothing}
        <span
          data-co-label-internal="true"
          class="co-label__content co-label__content--prefix"
        ></span>
        <span data-co-label-internal="true" class="co-label__text-group">
          <span
            data-co-label-internal="true"
            class="co-label__content co-label__content--default"
          ></span>
          ${this._optionalTemplate()}
        </span>
        <span
          data-co-label-internal="true"
          class="co-label__content co-label__content--suffix"
        ></span>
      </label>
    `;
  }

  private _optionalTemplate() {
    if (this.required || !this.optional || !this.optionalLabel) {
      return nothing;
    }

    return html`<span class="co-label__optional">${this.optionalLabel}</span>`;
  }

  private _collectDirectChildren() {
    for (const node of Array.from(this.childNodes)) {
      if (!this._isExternalChild(node)) continue;
      const bucket = this._bucketForNode(node);
      if (!this._contentNodes[bucket].includes(node)) {
        this._contentNodes[bucket].push(node);
      }
    }
  }

  private _attachContentNodes() {
    this._moveNodes(this.querySelector('.co-label__content--prefix'), this._contentNodes.prefix);
    this._moveNodes(this.querySelector('.co-label__content--default'), this._contentNodes.default);
    this._moveNodes(this.querySelector('.co-label__content--suffix'), this._contentNodes.suffix);
  }

  private _moveNodes(container: Element | null, nodes: Node[]) {
    if (!container) return;

    for (const node of nodes) {
      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    }
  }

  private _bucketForNode(node: Node): ContentBucket {
    if (node instanceof HTMLElement) {
      const slot = node.getAttribute('slot');
      if (slot === 'prefix') return 'prefix';
      if (slot === 'suffix') return 'suffix';
    }

    return 'default';
  }

  private _isExternalChild(node: Node) {
    if (node instanceof Text && !node.textContent?.trim()) {
      return false;
    }

    if (!(node instanceof HTMLElement)) {
      return true;
    }

    return node.dataset.coLabelInternal !== 'true';
  }

  private _handleClick = () => {
    if (!this.htmlFor) return;

    const target = this.ownerDocument?.getElementById(this.htmlFor);
    if (!(target instanceof HTMLElement)) return;

    queueMicrotask(() => {
      if (this._hasFocusWithin(target)) return;

      target.focus();
      if (this._hasFocusWithin(target)) return;

      this._findFocusableDescendant(target)?.focus();
    });
  };

  private _hasFocusWithin(target: HTMLElement) {
    return target.matches(':focus-within') || this.ownerDocument?.activeElement === target;
  }

  private _findFocusableDescendant(target: HTMLElement) {
    const selector =
      '[slot="input"], input, textarea, select, button, [tabindex]:not([tabindex="-1"])';

    return (
      target.querySelector<HTMLElement>(selector) ??
      target.shadowRoot?.querySelector<HTMLElement>(selector) ??
      null
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-label': CoLabel;
  }
}
