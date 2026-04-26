import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-nav-header-bar.js';
import type { CoNavHeaderBar } from './co-nav-header-bar.js';

describe('co-nav-header-bar', () => {
  it('renders a header landmark with default aria-label', async () => {
    const el = await fixture<CoNavHeaderBar>(html`
      <co-nav-header-bar>Content</co-nav-header-bar>
    `);

    const header = el.shadowRoot!.querySelector('header');
    expect(header).to.exist;
    expect(header!.getAttribute('aria-label')).to.equal('Header');
  });

  it('uses custom label for aria-label', async () => {
    const el = await fixture<CoNavHeaderBar>(html`
      <co-nav-header-bar label="Main Navigation">Content</co-nav-header-bar>
    `);

    const header = el.shadowRoot!.querySelector('header');
    expect(header!.getAttribute('aria-label')).to.equal('Main Navigation');
  });

  it('renders logo slot content', async () => {
    const el = await fixture<CoNavHeaderBar>(html`
      <co-nav-header-bar>
        <img slot="logo" src="logo.svg" alt="Logo" />
        Content
      </co-nav-header-bar>
    `);

    const logo = el.querySelector('[slot="logo"]');
    expect(logo).to.exist;
    expect(logo!.tagName).to.equal('IMG');
  });

  it('renders default slot content', async () => {
    const el = await fixture<CoNavHeaderBar>(html`
      <co-nav-header-bar>
        <nav>Navigation items</nav>
      </co-nav-header-bar>
    `);

    const nav = el.querySelector('nav');
    expect(nav).to.exist;
    expect(nav!.textContent).to.equal('Navigation items');
  });

  it('renders avatar slot content', async () => {
    const el = await fixture<CoNavHeaderBar>(html`
      <co-nav-header-bar>
        <button slot="avatar">User</button>
        Content
      </co-nav-header-bar>
    `);

    const avatar = el.querySelector('[slot="avatar"]');
    expect(avatar).to.exist;
    expect(avatar!.textContent).to.equal('User');
  });

  it('passes accessibility audit', async () => {
    const el = await fixture<CoNavHeaderBar>(html`
      <co-nav-header-bar label="App Header">
        <img slot="logo" src="logo.svg" alt="Logo" />
        <nav>Links</nav>
        <button slot="avatar" aria-label="User menu">U</button>
      </co-nav-header-bar>
    `);

    await runA11yAudit(el, { component: 'co-nav-header-bar', state: 'default' });
  });
});
