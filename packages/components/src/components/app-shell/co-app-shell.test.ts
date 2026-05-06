import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import { CoBreakpointMd } from '@cobalt/tokens';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-app-shell.js';
import '../nav-drawer/co-nav-drawer.js';
import '../nav-drawer-item/co-nav-drawer-item.js';
import '../nav-rail-bar/co-nav-rail-bar.js';
import '../nav-rail-item/co-nav-rail-item.js';
import type { CoAppShell } from './co-app-shell.js';

function stubMatchMedia(matches: boolean) {
  let lastQuery = '';
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: (query: string) => {
      lastQuery = query;
      return {
        matches,
        media: query,
        onchange: null,
        addEventListener() {},
        removeEventListener() {},
        addListener() {},
        removeListener() {},
        dispatchEvent() {
          return false;
        },
      };
    },
  });
  return {
    get lastQuery() {
      return lastQuery;
    },
  };
}

describe('co-app-shell', () => {
  it('renders correctly with only body', async () => {
    stubMatchMedia(true);
    const el = await fixture<CoAppShell>(html`
      <co-app-shell>
        <div slot="body">Body</div>
      </co-app-shell>
    `);

    expect(el.shadowRoot?.querySelector('.app-shell__body')).to.exist;
    expect(el.shadowRoot?.querySelector('.app-shell__topnav')).to.not.exist;
    expect(el.shadowRoot?.querySelector('.app-shell__rail')).to.not.exist;
    expect(el.shadowRoot?.querySelector('.app-shell__drawer')).to.not.exist;
  });

  it('renders correctly with topnav and body', async () => {
    stubMatchMedia(true);
    const el = await fixture<CoAppShell>(html`
      <co-app-shell>
        <div slot="topnav">Top navigation</div>
        <div slot="body">Body</div>
      </co-app-shell>
    `);

    expect(el.shadowRoot?.querySelector('.app-shell__topnav')).to.exist;
    expect(el.shadowRoot?.querySelector('#drawer-toggle')).to.not.exist;
  });

  it('renders correctly with rail and body', async () => {
    stubMatchMedia(true);
    const el = await fixture<CoAppShell>(html`
      <co-app-shell>
        <co-nav-rail-bar slot="rail" label="Sections">
          <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
        </co-nav-rail-bar>
        <div slot="body">Body</div>
      </co-app-shell>
    `);

    expect(el.shadowRoot?.querySelector('.app-shell__rail')).to.exist;
    expect(el.shadowRoot?.querySelector('.app-shell__drawer')).to.not.exist;
  });

  it('uses the tokenized desktop breakpoint and preserves rail width precedence', async () => {
    const media = stubMatchMedia(true);
    const fallback = await fixture<CoAppShell>(html`
      <co-app-shell>
        <co-nav-rail-bar slot="rail" label="Sections">
          <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
        </co-nav-rail-bar>
        <div slot="body">Body</div>
      </co-app-shell>
    `);

    expect(media.lastQuery).to.equal(`(min-width: ${CoBreakpointMd})`);
    const fallbackRow = fallback.shadowRoot?.querySelector<HTMLElement>('.app-shell__content-row');
    expect(fallbackRow?.style.gridTemplateColumns).to.equal(
      'var(--co-component-nav-rail-bar-width) minmax(0, 1fr)',
    );

    stubMatchMedia(true);
    const explicit = await fixture<CoAppShell>(html`
      <co-app-shell rail-width="144px">
        <co-nav-rail-bar slot="rail" label="Sections">
          <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
        </co-nav-rail-bar>
        <div slot="body">Body</div>
      </co-app-shell>
    `);

    const explicitRow = explicit.shadowRoot?.querySelector<HTMLElement>('.app-shell__content-row');
    expect(explicitRow?.style.gridTemplateColumns).to.contain('144px');
    expect(explicitRow?.style.gridTemplateColumns).to.contain('minmax(0');
  });

  it('renders correctly with rail, drawer, topnav, and body', async () => {
    stubMatchMedia(true);
    const el = await fixture<CoAppShell>(html`
      <co-app-shell>
        <co-nav-rail-bar slot="rail" label="Sections">
          <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
        </co-nav-rail-bar>
        <co-nav-drawer slot="drawer" label="Navigation">
          <co-nav-drawer-item value="overview" icon="dashboard" selected
            >Overview</co-nav-drawer-item
          >
        </co-nav-drawer>
        <div slot="topnav">Top navigation</div>
        <div slot="body">Body</div>
      </co-app-shell>
    `);

    expect(el.shadowRoot?.querySelector('.app-shell__topnav')).to.exist;
    expect(el.shadowRoot?.querySelector('.app-shell__rail')).to.exist;
    expect(el.shadowRoot?.querySelector('.app-shell__drawer')).to.exist;
    const body = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__body');
    expect(body?.classList.contains('app-shell__body--offset')).to.equal(true);
  });

  it('renders correctly with optional banner and footer', async () => {
    stubMatchMedia(true);
    const el = await fixture<CoAppShell>(html`
      <co-app-shell>
        <div slot="banner">Banner</div>
        <div slot="topnav">Top navigation</div>
        <div slot="body">Body</div>
        <div slot="footer">Footer</div>
      </co-app-shell>
    `);

    expect(el.shadowRoot?.querySelector('.app-shell__banner')).to.exist;
    expect(el.shadowRoot?.querySelector('.app-shell__footer')).to.exist;
  });

  it('shows the mobile toggle only when rail or drawer content exists', async () => {
    stubMatchMedia(false);
    const withoutNav = await fixture<CoAppShell>(html`
      <co-app-shell>
        <div slot="topnav">Top navigation</div>
        <div slot="body">Body</div>
      </co-app-shell>
    `);
    expect(withoutNav.shadowRoot?.querySelector('#drawer-toggle')).to.not.exist;

    const withNav = await fixture<CoAppShell>(html`
      <co-app-shell>
        <div slot="topnav">Top navigation</div>
        <div slot="drawer">Drawer</div>
        <div slot="body">Body</div>
      </co-app-shell>
    `);
    const toggle = withNav.shadowRoot?.querySelector<HTMLButtonElement>('#drawer-toggle');
    const panel = withNav.shadowRoot?.querySelector<HTMLElement>('.app-shell__overlay-panel');
    expect(toggle).to.exist;
    expect(toggle?.getAttribute('aria-controls')).to.equal(panel?.id);
    const overlay = withNav.shadowRoot?.querySelector<HTMLElement>('.app-shell__overlay');
    expect(getComputedStyle(overlay!).pointerEvents).to.equal('none');
    expect(getComputedStyle(overlay!).visibility).to.equal('hidden');
  });

  it('opens and closes the mobile overlay through state, methods, and events', async () => {
    stubMatchMedia(false);
    const el = await fixture<CoAppShell>(html`
      <co-app-shell>
        <div slot="topnav">Top navigation</div>
        <div slot="drawer">Drawer</div>
        <div slot="body">Body</div>
      </co-app-shell>
    `);

    const toggle = el.shadowRoot?.querySelector<HTMLButtonElement>('#drawer-toggle');
    expect(toggle).to.exist;

    setTimeout(() => toggle?.click());
    const openEvent = await oneEvent(el, 'co-drawer-open');
    expect((openEvent as CustomEvent).detail.open).to.equal(true);
    expect(el.drawerOpen).to.be.true;

    const toggleEvent = oneEvent(el, 'co-drawer-toggle');
    el.closeDrawer();
    const closeToggle = await toggleEvent;
    expect((closeToggle as CustomEvent).detail.open).to.equal(false);
    expect(el.drawerOpen).to.be.false;

    const openViaMethod = oneEvent(el, 'co-drawer-toggle');
    el.openDrawer();
    const reopened = await openViaMethod;
    expect((reopened as CustomEvent).detail.open).to.equal(true);
    expect(el.drawerOpen).to.be.true;
  });

  it('renders rail and drawer side by side inside the mobile overlay', async () => {
    stubMatchMedia(false);
    const el = await fixture<CoAppShell>(html`
      <co-app-shell drawer-open>
        <co-nav-rail-bar slot="rail" label="Sections">
          <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
        </co-nav-rail-bar>
        <co-nav-drawer slot="drawer" label="Navigation">
          <co-nav-drawer-item value="overview" icon="dashboard" selected
            >Overview</co-nav-drawer-item
          >
        </co-nav-drawer>
        <div slot="body">Body</div>
      </co-app-shell>
    `);

    const sections = Array.from(
      el.shadowRoot?.querySelectorAll('.app-shell__overlay-section') ?? [],
    );
    expect(sections).to.have.length(2);
    expect(sections[0].querySelector('slot[name="rail"]')).to.exist;
    expect(sections[1].querySelector('slot[name="drawer"]')).to.exist;

    const overlay = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__overlay');
    const panel = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__overlay-panel');
    expect(el.shadowRoot?.querySelector('lion-drawer')).to.not.exist;
    expect(getComputedStyle(overlay!).position).to.equal('fixed');
    expect(panel?.dataset.overlayLayout).to.equal('split');
    expect(panel?.style.gridTemplateColumns).to.contain('var(--co-component-nav-rail-bar-width)');
    expect(panel?.getAttribute('role')).to.equal('dialog');
  });

  it('stretches persistent desktop side columns to the content row height', async () => {
    stubMatchMedia(true);
    const el = await fixture<CoAppShell>(html`
      <co-app-shell>
        <co-nav-rail-bar slot="rail" label="Sections">
          <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
        </co-nav-rail-bar>
        <co-nav-drawer slot="drawer" label="Navigation">
          <co-nav-drawer-item value="overview" icon="dashboard" selected
            >Overview</co-nav-drawer-item
          >
        </co-nav-drawer>
        <div slot="body" style="block-size: 420px;">Body</div>
      </co-app-shell>
    `);

    const rail = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__rail');
    const drawer = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__drawer');
    const body = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__body');

    expect(rail).to.exist;
    expect(drawer).to.exist;
    expect(body).to.exist;
    expect(getComputedStyle(rail!).alignSelf).to.equal('stretch');
    expect(getComputedStyle(drawer!).alignSelf).to.equal('stretch');
    expect(rail!.offsetHeight).to.equal(body!.offsetHeight);
    expect(drawer!.offsetHeight).to.equal(body!.offsetHeight);
  });

  it('keeps desktop shell chrome fixed while the body region owns overflow', async () => {
    stubMatchMedia(true);
    const el = await fixture<CoAppShell>(html`
      <co-app-shell style="block-size: 480px;">
        <div slot="banner">Banner</div>
        <div slot="topnav">Top navigation</div>
        <co-nav-rail-bar slot="rail" label="Sections">
          <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
        </co-nav-rail-bar>
        <co-nav-drawer slot="drawer" label="Navigation">
          <co-nav-drawer-item value="overview" icon="dashboard" selected
            >Overview</co-nav-drawer-item
          >
        </co-nav-drawer>
        <div slot="body">
          <div style="block-size: 960px;">Body</div>
        </div>
        <div slot="footer">Footer</div>
      </co-app-shell>
    `);

    const contentRow = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__content-row');
    const banner = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__banner');
    const topnav = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__topnav');
    const rail = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__rail');
    const drawer = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__drawer');
    const body = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__body');
    const footer = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__footer');

    expect(contentRow).to.exist;
    expect(banner).to.exist;
    expect(topnav).to.exist;
    expect(body).to.exist;
    expect(rail).to.exist;
    expect(drawer).to.exist;
    expect(footer).to.exist;

    expect(getComputedStyle(banner!).position).to.equal('static');
    expect(getComputedStyle(topnav!).position).to.equal('static');
    expect(getComputedStyle(rail!).position).to.equal('static');
    expect(getComputedStyle(drawer!).position).to.equal('static');
    expect(getComputedStyle(contentRow!).overflow).to.equal('visible');
    expect(getComputedStyle(body!).overflow).to.equal('auto');
    expect(body!.scrollHeight).to.be.greaterThan(body!.clientHeight);
    expect(rail!.scrollHeight).to.equal(rail!.clientHeight);
    expect(drawer!.scrollHeight).to.equal(drawer!.clientHeight);
  });

  it('lets rail and drawer scroll only as a fallback when nav content exceeds the shell height', async () => {
    stubMatchMedia(true);
    const el = await fixture<CoAppShell>(html`
      <co-app-shell style="block-size: 480px;">
        <div slot="topnav">Top navigation</div>
        <div slot="rail" style="block-size: 960px;">Tall rail</div>
        <div slot="drawer" style="block-size: 960px;">Tall drawer</div>
        <div slot="body">Body</div>
      </co-app-shell>
    `);

    const rail = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__rail');
    const drawer = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__drawer');
    const body = el.shadowRoot?.querySelector<HTMLElement>('.app-shell__body');

    expect(rail).to.exist;
    expect(drawer).to.exist;
    expect(body).to.exist;

    expect(getComputedStyle(rail!).overflow).to.equal('visible');
    expect(getComputedStyle(drawer!).overflow).to.equal('visible');
    expect(body!.scrollHeight).to.equal(body!.clientHeight);
  });

  it('closes on backdrop press and Escape while the mobile overlay is open', async () => {
    stubMatchMedia(false);
    const el = await fixture<CoAppShell>(html`
      <co-app-shell drawer-open>
        <div slot="drawer">Drawer</div>
        <div slot="body">Body</div>
      </co-app-shell>
    `);

    const backdrop = el.shadowRoot?.querySelector<HTMLButtonElement>('.app-shell__backdrop');
    backdrop?.click();
    await el.updateComplete;
    expect(el.drawerOpen).to.be.false;

    el.drawerOpen = true;
    await el.updateComplete;
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await el.updateComplete;
    expect(el.drawerOpen).to.be.false;
  });

  it('is accessible when the mobile overlay is open', async () => {
    stubMatchMedia(false);
    const el = await fixture(html`
      <co-app-shell drawer-open>
        <div slot="topnav">Top navigation</div>
        <div slot="drawer">Drawer</div>
        <div slot="body">Body</div>
      </co-app-shell>
    `);

    await runA11yAudit(el, { component: 'co-app-shell', state: 'drawer-open' });
  });
});
