import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-nav-drawer.js';
import '../nav-drawer-group/co-nav-drawer-group.js';
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

  it('syncs selection for nested drawer items', async () => {
    const el = await fixture<CoNavDrawer>(html`
      <co-nav-drawer>
        <co-nav-drawer-group label="Navigation" value="navigation" open>
          <co-nav-drawer-item value="drawer">Drawer</co-nav-drawer-item>
        </co-nav-drawer-group>
      </co-nav-drawer>
    `);
    const item = el.querySelector('co-nav-drawer-item') as any;

    item.click();

    expect(el.value).to.equal('drawer');
    expect(item.selected).to.be.true;
  });

  it('moves keyboard focus through visible items and groups', async () => {
    const el = await fixture<CoNavDrawer>(html`
      <co-nav-drawer>
        <co-nav-drawer-item value="overview">Overview</co-nav-drawer-item>
        <co-nav-drawer-group label="Navigation" value="navigation" open>
          <co-nav-drawer-item value="drawer">Drawer</co-nav-drawer-item>
        </co-nav-drawer-group>
        <co-nav-drawer-group label="Closed" value="closed">
          <co-nav-drawer-item value="hidden">Hidden</co-nav-drawer-item>
        </co-nav-drawer-group>
      </co-nav-drawer>
    `);
    const overview = el.querySelector('co-nav-drawer-item[value="overview"]') as HTMLElement & {
      shadowRoot: ShadowRoot;
    };
    const navigation = el.querySelector(
      'co-nav-drawer-group[value="navigation"]',
    ) as HTMLElement & {
      shadowRoot: ShadowRoot;
    };
    const closed = el.querySelector('co-nav-drawer-group[value="closed"]') as HTMLElement & {
      shadowRoot: ShadowRoot;
    };

    overview.shadowRoot.querySelector<HTMLElement>('[part="base"]')!.focus();
    overview.shadowRoot
      .querySelector<HTMLElement>('[part="base"]')!
      .dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, composed: true }),
      );

    expect(navigation.shadowRoot.activeElement).to.equal(
      navigation.shadowRoot.querySelector('[part="trigger"]'),
    );

    navigation.shadowRoot
      .querySelector<HTMLElement>('[part="trigger"]')!
      .dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true, composed: true }));

    expect(closed.shadowRoot.activeElement).to.equal(
      closed.shadowRoot.querySelector('[part="trigger"]'),
    );
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
