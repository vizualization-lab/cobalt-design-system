import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-nav-rail-bar.js';
import '../nav-rail-item/co-nav-rail-item.js';
import type { CoNavRailBar } from './co-nav-rail-bar.js';

describe('co-nav-rail-bar', () => {
  it('selects the first enabled item when none is selected', async () => {
    const el = await fixture<CoNavRailBar>(html`
      <co-nav-rail-bar>
        <co-nav-rail-item value="home" icon="home">Home</co-nav-rail-item>
        <co-nav-rail-item value="reports" icon="sync">Reports</co-nav-rail-item>
      </co-nav-rail-bar>
    `);

    const items = el.querySelectorAll('co-nav-rail-item');
    expect(el.value).to.equal('home');
    expect(items[0].selected).to.be.true;
    expect(items[1].selected).to.be.false;
  });

  it('normalizes multiple selected children to the first selected item', async () => {
    const el = await fixture<CoNavRailBar>(html`
      <co-nav-rail-bar>
        <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
        <co-nav-rail-item value="reports" icon="sync" selected>Reports</co-nav-rail-item>
      </co-nav-rail-bar>
    `);

    const items = el.querySelectorAll('co-nav-rail-item');
    expect(el.value).to.equal('home');
    expect(items[0].selected).to.be.true;
    expect(items[1].selected).to.be.false;
  });

  it('updates selection and emits co-change on click', async () => {
    const el = await fixture<CoNavRailBar>(html`
      <co-nav-rail-bar>
        <co-nav-rail-item value="home" icon="home">Home</co-nav-rail-item>
        <co-nav-rail-item value="reports" icon="sync">Reports</co-nav-rail-item>
      </co-nav-rail-bar>
    `);

    const items = el.querySelectorAll('co-nav-rail-item');
    const event = oneEvent(el, 'co-change');
    const secondControl = items[1].shadowRoot!.querySelector('.nav-item') as HTMLElement;
    secondControl.click();
    const change = await event;

    expect(el.value).to.equal('reports');
    expect(items[0].selected).to.be.false;
    expect(items[1].selected).to.be.true;
    expect(change.detail.value).to.equal('reports');
  });

  it('moves selection with keyboard navigation', async () => {
    const el = await fixture<CoNavRailBar>(html`
      <co-nav-rail-bar>
        <co-nav-rail-item value="home" icon="home">Home</co-nav-rail-item>
        <co-nav-rail-item value="reports" icon="sync">Reports</co-nav-rail-item>
        <co-nav-rail-item value="settings" icon="settings">Settings</co-nav-rail-item>
      </co-nav-rail-bar>
    `);

    const firstItem = el.querySelector('co-nav-rail-item')!;
    firstItem.focus();
    firstItem.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
        composed: true,
      }),
    );
    await el.updateComplete;

    const items = el.querySelectorAll('co-nav-rail-item');
    expect(el.value).to.equal('reports');
    expect(items[1].selected).to.be.true;
  });

  it('keeps enabled items in sequential tab order', async () => {
    const el = await fixture<CoNavRailBar>(html`
      <co-nav-rail-bar>
        <co-nav-rail-item value="home" icon="home">Home</co-nav-rail-item>
        <co-nav-rail-item value="reports" icon="sync">Reports</co-nav-rail-item>
        <co-nav-rail-item value="billing" icon="billing" disabled>Billing</co-nav-rail-item>
      </co-nav-rail-bar>
    `);

    const items = el.querySelectorAll('co-nav-rail-item');
    const firstControl = items[0].shadowRoot!.querySelector('.nav-item') as HTMLElement;
    const secondControl = items[1].shadowRoot!.querySelector('.nav-item') as HTMLElement;
    const thirdControl = items[2].shadowRoot!.querySelector('.nav-item') as HTMLElement;

    expect(firstControl.tabIndex).to.equal(0);
    expect(secondControl.tabIndex).to.equal(0);
    expect(thirdControl.tabIndex).to.equal(-1);
  });

  it('skips disabled items during keyboard navigation', async () => {
    const el = await fixture<CoNavRailBar>(html`
      <co-nav-rail-bar>
        <co-nav-rail-item value="home" icon="home">Home</co-nav-rail-item>
        <co-nav-rail-item value="reports" icon="sync" disabled>Reports</co-nav-rail-item>
        <co-nav-rail-item value="settings" icon="settings">Settings</co-nav-rail-item>
      </co-nav-rail-bar>
    `);

    const firstItem = el.querySelector('co-nav-rail-item')!;
    firstItem.focus();
    firstItem.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
        composed: true,
      }),
    );
    await el.updateComplete;

    const items = el.querySelectorAll('co-nav-rail-item');
    expect(el.value).to.equal('settings');
    expect(items[2].selected).to.be.true;
  });

  it('does not overflow its host width when padded', async () => {
    const el = await fixture<CoNavRailBar>(html`
      <co-nav-rail-bar style="inline-size: 200px;">
        <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
        <co-nav-rail-item value="reports" icon="sync">Reports</co-nav-rail-item>
      </co-nav-rail-bar>
    `);

    const nav = el.shadowRoot?.querySelector<HTMLElement>('.nav-rail-bar');
    expect(nav).to.exist;
    expect(nav!.offsetWidth).to.equal(el.clientWidth);
    expect(el.scrollWidth).to.equal(el.clientWidth);
  });

  it('honors fixed block insets without overflowing the viewport', async () => {
    const el = await fixture<CoNavRailBar>(html`
      <co-nav-rail-bar style="position: fixed; top: 20px; bottom: 20px; inline-size: 200px;">
        <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
        <co-nav-rail-item value="reports" icon="sync">Reports</co-nav-rail-item>
      </co-nav-rail-bar>
    `);

    const rect = el.getBoundingClientRect();
    expect(Math.round(rect.top)).to.equal(20);
    expect(Math.round(window.innerHeight - rect.bottom)).to.equal(20);
  });

  it('keeps additional slotted content inside the rail bounds', async () => {
    const el = await fixture<CoNavRailBar>(html`
      <co-nav-rail-bar style="position: fixed; top: 20px; bottom: 20px; inline-size: 200px;">
        <co-nav-rail-item value="home" icon="home" selected>Home</co-nav-rail-item>
        <co-nav-rail-item value="reports" icon="sync">Reports</co-nav-rail-item>
        <div slot="footer" class="rail-footer">v0.1.0</div>
      </co-nav-rail-bar>
    `);

    const nav = el.shadowRoot?.querySelector<HTMLElement>('.nav-rail-bar');
    const footer = el.querySelector<HTMLElement>('.rail-footer');
    expect(nav).to.exist;
    expect(footer).to.exist;

    const navRect = nav!.getBoundingClientRect();
    const footerRect = footer!.getBoundingClientRect();
    expect(Math.round(footerRect.bottom)).to.be.at.most(Math.round(navRect.bottom));
  });

  describe('accessibility', () => {
    it('is accessible as a vertical navigation landmark', async () => {
      const el = await fixture(
        html`<co-nav-rail-bar label="Primary">
          <co-nav-rail-item value="home" icon="home" href="/home">Home</co-nav-rail-item>
          <co-nav-rail-item value="reports" icon="sync" href="/reports">Reports</co-nav-rail-item>
        </co-nav-rail-bar>`,
      );
      await runA11yAudit(el, { component: 'co-nav-rail-bar', state: 'default' });
    });
  });
});
