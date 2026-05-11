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

  it('renders prefix slot content without requiring an icon', async () => {
    const el = await fixture<CoNavDrawerItem>(html`
      <co-nav-drawer-item value="custom">
        <span slot="prefix" data-testid="prefix">•</span>
        Custom
      </co-nav-drawer-item>
    `);
    await el.updateComplete;

    const prefix = el.shadowRoot!.querySelector('[part="prefix"]')!;
    const slot = el.shadowRoot!.querySelector('slot[name="prefix"]') as HTMLSlotElement;

    expect(prefix.hasAttribute('hidden')).to.be.false;
    expect(slot.assignedElements()[0].getAttribute('data-testid')).to.equal('prefix');
  });

  it('uses token-backed layout styles', async () => {
    const el = await fixture<CoNavDrawerItem>(html`
      <co-nav-drawer-item
        value="custom"
        style="
          --co-component-nav-drawer-item-padding-x: 31px;
          --co-component-nav-drawer-item-padding-y: 7px;
          --co-component-nav-drawer-item-margin-block: 2px;
        "
      >
        Custom
      </co-nav-drawer-item>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const styles = getComputedStyle(base);

    expect(styles.paddingLeft).to.equal('31px');
    expect(styles.paddingRight).to.equal('31px');
    expect(styles.paddingTop).to.equal('7px');
    expect(styles.paddingBottom).to.equal('7px');
    expect(styles.marginTop).to.equal('2px');
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
