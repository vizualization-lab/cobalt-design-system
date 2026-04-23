import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-nav-drawer.js';
import '../nav-drawer-item/co-nav-drawer-item.js';
import '../nav-separator/co-nav-separator.js';
import type { CoNavDrawer } from './co-nav-drawer.js';

describe('co-nav-drawer', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoNavDrawer>(html`
      <co-nav-drawer>
        <co-nav-drawer-item value="home" icon="home">Home</co-nav-drawer-item>
      </co-nav-drawer>
    `);
    expect(el).to.exist;
    expect(el.open).to.be.true;
    expect(el.label).to.equal('Navigation');
  });

  it('renders nav landmark with label', async () => {
    const el = await fixture<CoNavDrawer>(html`
      <co-nav-drawer label="Main menu">
        <co-nav-drawer-item value="home" icon="home">Home</co-nav-drawer-item>
      </co-nav-drawer>
    `);
    const nav = el.shadowRoot!.querySelector('nav');
    expect(nav!.getAttribute('aria-label')).to.equal('Main menu');
  });

  it('hides when not open', async () => {
    const el = await fixture<CoNavDrawer>(html`
      <co-nav-drawer .open=${false}>
        <co-nav-drawer-item value="home" icon="home">Home</co-nav-drawer-item>
      </co-nav-drawer>
    `);
    expect(el.hasAttribute('open')).to.be.false;
  });

  describe('accessibility', () => {
    it('is accessible in default state', async () => {
      const el = await fixture(html`
        <co-nav-drawer label="Main menu">
          <co-nav-drawer-item value="home" icon="home">Home</co-nav-drawer-item>
          <co-nav-drawer-item value="about" icon="info">About</co-nav-drawer-item>
        </co-nav-drawer>
      `);
      await runA11yAudit(el, { component: 'co-nav-drawer', state: 'default' });
    });
  });
});
