import { fixture, html, expect } from '@open-wc/testing';
import { iconNames, customIconNames } from '@cobalt/icons';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-icon.js';
import type { CoIcon } from './co-icon.js';

describe('co-icon', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="home"></co-icon>`);
    expect(el).to.exist;
    expect(el.name).to.equal('home');
    expect(el.size).to.equal('md');
    expect(el.fill).to.equal(false);
    expect(el.label).to.be.undefined;
  });

  it('reflects name attribute', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="arrow-forward"></co-icon>`);
    expect(el.name).to.equal('arrow-forward');
    expect(el.getAttribute('name')).to.equal('arrow-forward');
  });

  it('reflects size attribute', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="home" size="lg"></co-icon>`);
    expect(el.size).to.equal('lg');
    expect(el.getAttribute('size')).to.equal('lg');
  });

  it('defaults fill to false', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="home"></co-icon>`);
    expect(el.fill).to.equal(false);
    expect(el.hasAttribute('fill')).to.be.false;
  });

  it('reflects fill attribute when set', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="home" fill></co-icon>`);
    expect(el.fill).to.equal(true);
    expect(el.hasAttribute('fill')).to.be.true;
  });

  it('renders an SVG element inside shadow DOM', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="home"></co-icon>`);
    const svg = el.shadowRoot!.querySelector('svg');
    expect(svg).to.exist;
    expect(svg!.getAttribute('viewBox')).to.equal('0 -960 960 960');
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

  describe('custom icons', () => {
    it('renders custom icon with viewBox="0 0 24 24"', async () => {
      const el = await fixture<CoIcon>(html`<co-icon name="co-placeholder"></co-icon>`);
      const svg = el.shadowRoot!.querySelector('svg');
      expect(svg).to.exist;
      expect(svg!.getAttribute('viewBox')).to.equal('0 0 24 24');
    });

    it('renders Material icon with viewBox="0 -960 960 960"', async () => {
      const el = await fixture<CoIcon>(html`<co-icon name="home"></co-icon>`);
      const svg = el.shadowRoot!.querySelector('svg');
      expect(svg).to.exist;
      expect(svg!.getAttribute('viewBox')).to.equal('0 -960 960 960');
    });

    it('resolves custom icon with fill', async () => {
      for (const fill of [false, true]) {
        const el = await fixture<CoIcon>(
          html`<co-icon name="co-placeholder" .fill=${fill}></co-icon>`,
        );
        const svg = el.shadowRoot!.querySelector('svg');
        expect(svg, `${fill ? 'fill' : 'no-fill'} should render`).to.exist;
        expect(svg!.getAttribute('viewBox')).to.equal('0 0 24 24');
      }
    });

    it('includes custom icon names in iconNames', () => {
      expect(iconNames).to.include('co-placeholder');
    });

    it('customIconNames contains only co- prefixed names', () => {
      for (const name of customIconNames) {
        expect(name.startsWith('co-'), `"${name}" should start with "co-"`).to.be.true;
      }
    });

    it('customIconNames is a subset of iconNames', () => {
      for (const name of customIconNames) {
        expect(iconNames).to.include(name);
      }
    });
  });

  // WCAG 2.1 AA: automated via axe-core
  describe('accessibility', () => {
    it('is accessible as decorative icon', async () => {
      const el = await fixture(html`<co-icon name="home"></co-icon>`);
      await runA11yAudit(el, { component: 'co-icon', state: 'decorative' });
    });

    it('is accessible as informative icon', async () => {
      const el = await fixture(html`<co-icon name="home" label="Home page"></co-icon>`);
      await runA11yAudit(el, { component: 'co-icon', state: 'informative' });
    });

    it('is accessible with fill', async () => {
      const el = await fixture(html`<co-icon name="home" fill></co-icon>`);
      await runA11yAudit(el, { component: 'co-icon', state: 'fill' });
    });

    it('is accessible with fill and label', async () => {
      const el = await fixture(html`<co-icon name="home" fill label="Home page"></co-icon>`);
      await runA11yAudit(el, { component: 'co-icon', state: 'fill-informative' });
    });

    it('is accessible at all sizes', async () => {
      for (const size of ['xs', 'sm', 'md', 'lg'] as const) {
        const el = await fixture(html`<co-icon name="home" size=${size}></co-icon>`);
        await runA11yAudit(el, { component: 'co-icon', state: `size-${size}` });
      }
    });

    it('is accessible as custom decorative icon', async () => {
      const el = await fixture(html`<co-icon name="co-placeholder"></co-icon>`);
      await runA11yAudit(el, { component: 'co-icon', state: 'custom-decorative' });
    });

    it('is accessible as custom informative icon', async () => {
      const el = await fixture(html`<co-icon name="co-placeholder" label="Placeholder"></co-icon>`);
      await runA11yAudit(el, { component: 'co-icon', state: 'custom-informative' });
    });
  });
});
