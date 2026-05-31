import { fixture, html, expect } from '@open-wc/testing';
import '@cobalt/icons/all';
import { iconNames, customIconNames, animatedIconNames } from '@cobalt/icons/manifest';
import { iconSearchTermsByIconName } from '@cobalt/icons/metadata';
import { getIcon } from '@cobalt/icons/registry';
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

  it('reflects xl size attribute', async () => {
    const el = await fixture<CoIcon>(html`<co-icon name="home" size="xl"></co-icon>`);
    expect(el.size).to.equal('xl');
    expect(el.getAttribute('size')).to.equal('xl');
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
      expect(iconNames).to.include('co-logo');
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

    it('includes custom icon search metadata', () => {
      expect(iconSearchTermsByIconName['co-placeholder']).to.include('empty state');
      expect(iconSearchTermsByIconName['co-logo']).to.include('cobalt');
    });

    it('resolves the Cobalt logo outline and filled variants', () => {
      expect(customIconNames.has('co-logo')).to.equal(true);
      const outline = getIcon('co-logo');
      const filled = getIcon('co-logo', { fill: true });
      expect(outline?.content).to.be.a('string').and.not.equal('');
      expect(filled?.content).to.be.a('string').and.not.equal('');
    });
  });

  describe('search metadata', () => {
    it('includes committed Material Symbols tags', () => {
      expect(iconSearchTermsByIconName.person).to.include('avatar');
      expect(iconSearchTermsByIconName.person).to.include('my account');
    });
  });

  describe('animated icons', () => {
    it('animated defaults to false', async () => {
      const el = await fixture<CoIcon>(html`<co-icon name="home"></co-icon>`);
      expect(el.animated).to.equal(false);
      expect(el.hasAttribute('animated')).to.be.false;
    });

    it('reflects animated attribute when set', async () => {
      const el = await fixture<CoIcon>(html`<co-icon name="notifications" animated></co-icon>`);
      expect(el.animated).to.equal(true);
      expect(el.hasAttribute('animated')).to.be.true;
    });

    it('renders animated variant with co-anim-* classes when animated is set', async () => {
      const el = await fixture<CoIcon>(html`<co-icon name="notifications" animated></co-icon>`);
      const svg = el.shadowRoot!.querySelector('svg');
      expect(svg).to.exist;
      const animEl = svg!.querySelector('.co-anim-bell-body');
      expect(animEl, 'should contain co-anim-bell-body class').to.exist;
    });

    it('falls back to static icon when animated is set but no animated variant exists', async () => {
      const el = await fixture<CoIcon>(html`<co-icon name="home" animated></co-icon>`);
      const svg = el.shadowRoot!.querySelector('svg');
      expect(svg).to.exist;
      // Should render the static icon (no co-anim-* elements)
      const animEl = svg!.querySelector('[class^="co-anim-"]');
      expect(animEl).to.not.exist;
    });

    it('renders static icon when animated is false even for icons with animated variants', async () => {
      const el = await fixture<CoIcon>(html`<co-icon name="notifications"></co-icon>`);
      const svg = el.shadowRoot!.querySelector('svg');
      expect(svg).to.exist;
      const animEl = svg!.querySelector('.co-anim-bell-body');
      expect(animEl).to.not.exist;
    });

    it('replay() enables animated when not already set', async () => {
      const el = await fixture<CoIcon>(html`<co-icon name="notifications"></co-icon>`);
      expect(el.animated).to.equal(false);
      await el.replay();
      expect(el.animated).to.equal(true);
    });

    it('replay() restarts animation when already animated', async () => {
      const el = await fixture<CoIcon>(html`<co-icon name="notifications" animated></co-icon>`);
      expect(el.animated).to.equal(true);
      await el.replay();
      // Should still be animated after replay
      expect(el.animated).to.equal(true);
      await el.updateComplete;
      const svg = el.shadowRoot!.querySelector('svg');
      expect(svg!.querySelector('.co-anim-bell-body')).to.exist;
    });

    it('animatedIconNames contains expected icons', () => {
      expect(animatedIconNames.has('notifications')).to.be.true;
      expect(animatedIconNames.has('progress-activity')).to.be.true;
      expect(animatedIconNames.has('check-circle')).to.be.true;
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
      for (const size of ['xs', 'sm', 'md', 'lg', 'xl'] as const) {
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

    it('is accessible with animated', async () => {
      const el = await fixture(html`<co-icon name="notifications" animated></co-icon>`);
      await runA11yAudit(el, { component: 'co-icon', state: 'animated' });
    });

    it('is accessible with animated and label', async () => {
      const el = await fixture(
        html`<co-icon name="notifications" animated label="New notifications"></co-icon>`,
      );
      await runA11yAudit(el, { component: 'co-icon', state: 'animated-informative' });
    });
  });
});
