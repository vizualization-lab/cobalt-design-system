import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { getIcon } from '@cobalt/icons';
import type { IconStyle } from '@cobalt/icons';
import { cobaltIconStyles } from './co-icon.styles.js';

export type IconVariant = IconStyle;
export type IconSize = 'xs' | 'sm' | 'md' | 'lg';

/**
 * @tag co-icon
 * @summary Renders a Material Design icon from the @cobalt/icons registry.
 *
 * @csspart svg - The inner SVG element
 */
@customElement('co-icon')
export class CoIcon extends LitElement {
  static override styles = [cobaltIconStyles];

  /** The icon name in kebab-case (e.g. "arrow-forward"). */
  @property({ reflect: true })
  name = '';

  /** The icon style variant. */
  @property({ reflect: true })
  variant: IconVariant = 'outlined';

  /** The icon size. */
  @property({ reflect: true })
  size: IconSize = 'md';

  /** Accessible label. When set, the icon is treated as informative (role="img"). */
  @property()
  label?: string;

  override render() {
    const svgContent = getIcon(this.name, this.variant);

    if (!svgContent) return nothing;

    const isDecorative = !this.label;

    return html`
      <svg
        part="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        role=${isDecorative ? 'presentation' : 'img'}
        aria-hidden=${isDecorative ? 'true' : 'false'}
        aria-label=${this.label ?? nothing}
      >
        ${unsafeSVG(svgContent)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-icon': CoIcon;
  }
}
