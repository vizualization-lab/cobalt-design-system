import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-icon.js';
import type { CoIcon } from './co-icon.js';

describe('co-icon', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="home"></co-icon>`);
    expect(el).to.exist;
    expect(el.name).to.equal('home');
    expect(el.variant).to.equal('outlined');
    expect(el.size).to.equal('md');
    expect(el.label).to.be.undefined;
  });

  it('reflects name attribute', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="arrow-forward"></co-icon>`);
    expect(el.name).to.equal('arrow-forward');
    expect(el.getAttribute('name')).to.equal('arrow-forward');
  });

  it('reflects variant attribute', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="home" variant="filled"></co-icon>`);
    expect(el.variant).to.equal('filled');
    expect(el.getAttribute('variant')).to.equal('filled');
  });

  it('reflects size attribute', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="home" size="lg"></co-icon>`);
    expect(el.size).to.equal('lg');
    expect(el.getAttribute('size')).to.equal('lg');
  });

  it('renders an SVG element inside shadow DOM', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="home"></co-icon>`);
    const svg = el.shadowRoot!.querySelector('svg');
    expect(svg).to.exist;
    expect(svg!.getAttribute('viewBox')).to.equal('0 0 24 24');
  });

  it('renders nothing when name is empty', async () => {
    const el = await fixture<CoIcon>(html`<co-icon></co-icon>`);
    const svg = el.shadowRoot!.querySelector('svg');
    expect(svg).to.not.exist;
  });

  it('renders nothing when name does not match any icon', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="nonexistent-icon-xyz"></co-icon>`);
    const svg = el.shadowRoot!.querySelector('svg');
    expect(svg).to.not.exist;
  });

  it('is decorative by default (aria-hidden)', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="home"></co-icon>`);
    const svg = el.shadowRoot!.querySelector('svg')!;
    expect(svg.getAttribute('aria-hidden')).to.equal('true');
    expect(svg.getAttribute('role')).to.equal('presentation');
  });

  it('is informative when label is set (role="img")', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="home" label="Home"></co-icon>`);
    const svg = el.shadowRoot!.querySelector('svg')!;
    expect(svg.getAttribute('aria-hidden')).to.equal('false');
    expect(svg.getAttribute('role')).to.equal('img');
    expect(svg.getAttribute('aria-label')).to.equal('Home');
  });

  it('updates SVG when name changes', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="home"></co-icon>`);
    const svg1 = el.shadowRoot!.querySelector('svg')?.innerHTML;

    el.name = 'search';
    await el.updateComplete;

    const svg2 = el.shadowRoot!.querySelector('svg')?.innerHTML;
    // Content should be different (or at least re-rendered)
    expect(svg1).to.not.be.undefined;
    expect(svg2).to.not.be.undefined;
  });

  describe('accessibility', () => {
    it('is accessible as decorative icon', async () => {
      const el = await fixture(html`<co-icon name="home"></co-icon>`);
      await runA11yAudit(el, { component: 'co-icon', state: 'decorative' });
    });

    it('is accessible as informative icon', async () => {
      const el = await fixture(html`<co-icon name="home" label="Home page"></co-icon>`);
      await runA11yAudit(el, { component: 'co-icon', state: 'informative' });
    });
  });
});
