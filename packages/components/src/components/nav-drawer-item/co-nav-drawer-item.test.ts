import { fixture, html, expect } from '@open-wc/testing';
import './co-nav-drawer-item.js';
import type { CoNavDrawerItem } from './co-nav-drawer-item.js';

describe('co-nav-drawer-item', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoNavDrawerItem>(html`
      <co-nav-drawer-item value="home" icon="home">Home</co-nav-drawer-item>
    `);
    expect(el).to.exist;
    expect(el.value).to.equal('home');
    expect(el.icon).to.equal('home');
    expect(el.selected).to.be.false;
    expect(el.disabled).to.be.false;
  });

  it('renders icon', async () => {
    const el = await fixture<CoNavDrawerItem>(html`
      <co-nav-drawer-item value="home" icon="home">Home</co-nav-drawer-item>
    `);
    const icon = el.shadowRoot!.querySelector('co-icon');
    expect(icon).to.exist;
    expect(icon!.getAttribute('name')).to.equal('home');
  });

  it('renders as link when href is set', async () => {
    const el = await fixture<CoNavDrawerItem>(html`
      <co-nav-drawer-item value="home" icon="home" href="/home">Home</co-nav-drawer-item>
    `);
    const link = el.shadowRoot!.querySelector('a');
    expect(link).to.exist;
    expect(link!.getAttribute('href')).to.equal('/home');
  });

  it('reflects selected state', async () => {
    const el = await fixture<CoNavDrawerItem>(html`
      <co-nav-drawer-item value="home" icon="home" selected>Home</co-nav-drawer-item>
    `);
    expect(el.selected).to.be.true;
    expect(el.hasAttribute('selected')).to.be.true;
  });
});
