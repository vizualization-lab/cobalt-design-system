import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-button.js';
import type { CoButton } from './co-button.js';

describe('co-button', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoButton>(html`<co-button>Click me</co-button>`);
    expect(el).to.exist;
    expect(el.variant).to.equal('primary');
    expect(el.size).to.equal('md');
    expect(el.disabled).to.be.false;
    expect(el.loading).to.be.false;
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<CoButton>(html`<co-button variant="danger">Delete</co-button>`);
    expect(el.variant).to.equal('danger');
    expect(el.getAttribute('variant')).to.equal('danger');
  });

  it('reflects success variant attribute', async () => {
    const el = await fixture<CoButton>(html`<co-button variant="success">Confirm</co-button>`);
    expect(el.variant).to.equal('success');
    expect(el.getAttribute('variant')).to.equal('success');
  });

  it('applies themed secondary colors on the host', async () => {
    const el = await fixture<CoButton>(html`<co-button variant="secondary">Secondary</co-button>`);
    el.style.setProperty('--co-color-interactive-secondary-default', 'rgb(250 251 252)');
    el.style.setProperty('--co-color-interactive-primary-default', 'rgb(12 34 56)');
    el.style.setProperty('--co-border-width-action', '2px');

    await el.updateComplete;

    const styles = getComputedStyle(el);
    expect(styles.backgroundColor).to.equal('rgb(250, 251, 252)');
    expect(styles.color).to.equal('rgb(12, 34, 56)');
    expect(styles.boxShadow).to.include('rgb(12, 34, 56)');
  });

  it('reflects size attribute', async () => {
    const el = await fixture<CoButton>(html`<co-button size="lg">Large</co-button>`);
    expect(el.size).to.equal('lg');
    expect(el.getAttribute('size')).to.equal('lg');
  });

  it('reflects xl size attribute', async () => {
    const el = await fixture<CoButton>(html`<co-button size="xl">Extra Large</co-button>`);
    expect(el.size).to.equal('xl');
    expect(el.getAttribute('size')).to.equal('xl');
  });

  it('renders button structure in shadow DOM', async () => {
    const el = await fixture<CoButton>(html`<co-button>Click</co-button>`);
    const base = el.shadowRoot!.querySelector('[part="base"]');
    expect(base).to.exist;
  });

  it('applies disabled attribute to host', async () => {
    const el = await fixture<CoButton>(html`<co-button disabled>Disabled</co-button>`);
    expect(el.hasAttribute('disabled')).to.be.true;
    expect(el.disabled).to.be.true;
  });

  it('shows spinner when loading', async () => {
    const el = await fixture<CoButton>(html`<co-button loading>Loading</co-button>`);
    const spinner = el.shadowRoot!.querySelector('co-icon[name="progress-activity"]');
    expect(spinner).to.exist;
    expect(spinner!.hasAttribute('animated')).to.be.true;
  });

  it('does not show spinner when not loading', async () => {
    const el = await fixture<CoButton>(html`<co-button>Click</co-button>`);
    const spinner = el.shadowRoot!.querySelector('co-icon[name="progress-activity"]');
    expect(spinner).to.not.exist;
  });

  it('projects default slot content', async () => {
    const el = await fixture<CoButton>(html`<co-button>Hello</co-button>`);
    expect(el.textContent?.trim()).to.equal('Hello');
  });

  it('projects prefix slot', async () => {
    const el = await fixture<CoButton>(html`
      <co-button>
        <span slot="prefix">★</span>
        Star
      </co-button>
    `);
    const prefixSlot = el.querySelector('[slot="prefix"]');
    expect(prefixSlot).to.exist;
    expect(prefixSlot!.textContent).to.equal('★');
  });

  it('projects suffix slot', async () => {
    const el = await fixture<CoButton>(html`
      <co-button>
        Go
        <span slot="suffix">→</span>
      </co-button>
    `);
    const suffixSlot = el.querySelector('[slot="suffix"]');
    expect(suffixSlot).to.exist;
    expect(suffixSlot!.textContent).to.equal('→');
  });

  it('dispatches co-focus event', async () => {
    const el = await fixture<CoButton>(html`<co-button>Focus me</co-button>`);
    let focusFired = false;
    el.addEventListener('co-focus', () => {
      focusFired = true;
    });
    el.dispatchEvent(new Event('focus'));
    expect(focusFired).to.be.true;
  });

  it('dispatches co-blur event', async () => {
    const el = await fixture<CoButton>(html`<co-button>Blur me</co-button>`);
    let blurFired = false;
    el.addEventListener('co-blur', () => {
      blurFired = true;
    });
    el.dispatchEvent(new Event('blur'));
    expect(blurFired).to.be.true;
  });

  it('renders as a link when href is set', async () => {
    const el = await fixture<CoButton>(
      html`<co-button href="https://example.com">Link</co-button>`,
    );
    const anchor = el.shadowRoot!.querySelector('a');
    expect(anchor).to.exist;
    expect(anchor!.getAttribute('href')).to.equal('https://example.com');
  });

  // WCAG 2.1 AA: automated via axe-core
  // Manual checks: keyboard (2.1.1), focus visible (2.4.7), target size (2.5.5)
  describe('accessibility', () => {
    it('is accessible in default state', async () => {
      const el = await fixture(html`<co-button>Click me</co-button>`);
      await runA11yAudit(el, { component: 'co-button', state: 'default' });
    });

    it('is accessible when disabled', async () => {
      const el = await fixture(html`<co-button disabled>Disabled</co-button>`);
      await runA11yAudit(el, { component: 'co-button', state: 'disabled' });
    });

    it('is accessible with loading state', async () => {
      const el = await fixture(html`<co-button loading>Loading</co-button>`);
      await runA11yAudit(el, { component: 'co-button', state: 'loading' });
    });
  });
});
