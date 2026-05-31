import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { getIcon, getAnimatedIcon, type IconDescriptor } from '@cobalt/icons/registry';
import { cobaltIconStyles } from './co-icon.styles.js';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type { IconDescriptor };

const DEFAULT_MATERIAL_VIEW_BOX = '0 -960 960 960';

/**
 * @tag co-icon
 * @summary Renders a registered icon from the @cobalt/icons registry.
 *
 * @csspart svg - The inner SVG element
 */
@customElement('co-icon')
export class CoIcon extends LitElement {
  static override styles = [cobaltIconStyles];

  /** The icon name in kebab-case (e.g. "arrow-forward"). Resolved against
   *  the icon registry — register the icon by importing `@cobalt/icons/<name>`. */
  @property({ reflect: true })
  name = '';

  /** An icon descriptor passed directly. Takes precedence over `name`. Useful
   *  for value-form imports: `import home from '@cobalt/icons/home'`. */
  @property({ attribute: false })
  icon?: IconDescriptor;

  /** The icon size. */
  @property({ reflect: true })
  size: IconSize = 'md';

  /** Whether to use the filled version of the icon. */
  @property({ type: Boolean, reflect: true })
  fill = false;

  /** Whether to use the animated variant of the icon (if available). */
  @property({ type: Boolean, reflect: true })
  animated = false;

  /** Accessible label. When set, the icon is treated as informative (role="img"). */
  @property()
  label?: string;

  /**
   * Restart the animation from the beginning.
   * Useful for one-shot animations like bell ring or check scale-in.
   */
  async replay(): Promise<void> {
    if (!this.animated) {
      this.animated = true;
      await this.updateComplete;
      return;
    }
    this.animated = false;
    await this.updateComplete;
    this.getBoundingClientRect();
    this.animated = true;
    await this.updateComplete;
  }

  override render() {
    const fromProp = this.icon;
    const animatedDescriptor =
      this.animated && this.name ? getAnimatedIcon(this.name, { fill: this.fill }) : undefined;
    const staticDescriptor =
      fromProp ?? (this.name ? getIcon(this.name, { fill: this.fill }) : undefined);
    const descriptor = animatedDescriptor ?? staticDescriptor;

    if (!descriptor) return nothing;

    const isDecorative = !this.label;
    const viewBox = descriptor.viewBox || DEFAULT_MATERIAL_VIEW_BOX;

    return html`
      <svg
        part="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox=${viewBox}
        fill="currentColor"
        role=${isDecorative ? 'presentation' : 'img'}
        aria-hidden=${isDecorative ? 'true' : 'false'}
        aria-label=${this.label ?? nothing}
      >
        ${unsafeSVG(descriptor.content)}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-icon': CoIcon;
  }
}
