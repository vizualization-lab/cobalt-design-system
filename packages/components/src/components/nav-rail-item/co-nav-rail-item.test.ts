import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-nav-rail-item.js';
import type { CoNavRailItem } from './co-nav-rail-item.js';

describe('co-nav-rail-item', () => {
  it('renders a link when href is provided', async () => {
    const el = await fixture<CoNavRailItem>(
      html`<co-nav-rail-item icon="home" href="/dashboard">Dashboard</co-nav-rail-item>`,
    );
    const link = el.shadowRoot!.querySelector('a.nav-item');
    expect(link).to.exist;
    expect(link!.getAttribute('href')).to.equal('/dashboard');
  });

  it('renders a button when href is not provided', async () => {
    const el = await fixture<CoNavRailItem>(
      html`<co-nav-rail-item icon="home">Dashboard</co-nav-rail-item>`,
    );
    const button = el.shadowRoot!.querySelector('button.nav-item');
    expect(button).to.exist;
    expect(button!.getAttribute('type')).to.equal('button');
  });

  it('reflects selected state to aria-current for links', async () => {
    const el = await fixture<CoNavRailItem>(
      html`<co-nav-rail-item icon="home" href="/dashboard" selected>Dashboard</co-nav-rail-item>`,
    );
    const link = el.shadowRoot!.querySelector('a.nav-item');
    expect(link!.getAttribute('aria-current')).to.equal('page');
  });

  it('keeps href-backed disabled items rendered as links and removed from tab order', async () => {
    const el = await fixture<CoNavRailItem>(
      html`<co-nav-rail-item icon="billing" href="/billing" disabled>Billing</co-nav-rail-item>`,
    );
    const link = el.shadowRoot!.querySelector('a.nav-item') as HTMLAnchorElement | null;
    expect(link).to.exist;
    expect(link!.getAttribute('aria-disabled')).to.equal('true');
    expect(link!.tabIndex).to.equal(-1);
  });

  it('uses the label property as slot fallback', async () => {
    const el = await fixture<CoNavRailItem>(
      html`<co-nav-rail-item icon="home" label="Dashboard"></co-nav-rail-item>`,
    );
    expect(el.shadowRoot!.textContent).to.contain('Dashboard');
  });

  it('updates the managed focus target', async () => {
    const el = await fixture<CoNavRailItem>(
      html`<co-nav-rail-item icon="home">Dashboard</co-nav-rail-item>`,
    );
    el.setFocusable(true);
    await el.updateComplete;
    const button = el.shadowRoot!.querySelector('button.nav-item') as HTMLButtonElement;
    expect(button.tabIndex).to.equal(0);
  });

  describe('accessibility', () => {
    it('is accessible as a link item', async () => {
      const el = await fixture(
        html`<co-nav-rail-item icon="home" href="/dashboard">Dashboard</co-nav-rail-item>`,
      );
      await runA11yAudit(el, { component: 'co-nav-rail-item', state: 'link' });
    });
  });
});
