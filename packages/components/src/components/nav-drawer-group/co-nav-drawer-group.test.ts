import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import './co-nav-drawer-group.js';
import '../nav-drawer-item/co-nav-drawer-item.js';
import type { CoNavDrawerGroup } from './co-nav-drawer-group.js';

describe('co-nav-drawer-group', () => {
  it('renders label and slotted items', async () => {
    const el = await fixture<CoNavDrawerGroup>(html`
      <co-nav-drawer-group label="Navigation" open>
        <co-nav-drawer-item value="drawer">Drawer</co-nav-drawer-item>
      </co-nav-drawer-group>
    `);

    const label = el.shadowRoot!.querySelector('[part="label"]');
    const content = el.shadowRoot!.querySelector('[part="content"]');

    expect(label!.textContent).to.equal('Navigation');
    expect(content!.hasAttribute('hidden')).to.be.false;
    expect(el.querySelector('co-nav-drawer-item')).to.exist;
  });

  it('reflects and controls content visibility with open', async () => {
    const el = await fixture<CoNavDrawerGroup>(html`
      <co-nav-drawer-group label="Navigation">
        <co-nav-drawer-item value="drawer">Drawer</co-nav-drawer-item>
      </co-nav-drawer-group>
    `);

    const content = el.shadowRoot!.querySelector('[part="content"]')!;
    expect(el.open).to.be.false;
    expect(el.hasAttribute('open')).to.be.false;
    expect(content.hasAttribute('hidden')).to.be.true;

    el.open = true;
    await el.updateComplete;
    expect(el.hasAttribute('open')).to.be.true;
    expect(content.hasAttribute('hidden')).to.be.false;
  });

  it('uses token-backed trigger and nested content spacing', async () => {
    const el = await fixture<CoNavDrawerGroup>(html`
      <co-nav-drawer-group
        label="Navigation"
        open
        style="
          --co-component-nav-drawer-group-trigger-padding-x: 31px;
          --co-component-nav-drawer-group-trigger-padding-y: 7px;
          --co-component-nav-drawer-group-trigger-radius: 9px;
          --co-component-nav-drawer-group-content-indent: 19px;
          --co-component-nav-drawer-group-content-gap: 3px;
        "
      >
        <co-nav-drawer-item value="drawer">Drawer</co-nav-drawer-item>
      </co-nav-drawer-group>
    `);
    const trigger = el.shadowRoot!.querySelector<HTMLElement>('[part="trigger"]')!;
    const content = el.shadowRoot!.querySelector<HTMLElement>('[part="content"]')!;
    const triggerStyles = getComputedStyle(trigger);
    const contentStyles = getComputedStyle(content);

    expect(triggerStyles.paddingLeft).to.equal('31px');
    expect(triggerStyles.paddingTop).to.equal('7px');
    expect(triggerStyles.borderTopLeftRadius).to.equal('9px');
    expect(contentStyles.paddingLeft).to.equal('19px');
    expect(contentStyles.gap).to.equal('3px');
  });

  it('emits co-toggle when clicked', async () => {
    const el = await fixture<CoNavDrawerGroup>(html`
      <co-nav-drawer-group label="Navigation" value="navigation"></co-nav-drawer-group>
    `);
    const trigger = el.shadowRoot!.querySelector('button')!;
    const event = oneEvent(el, 'co-toggle');

    trigger.click();

    const toggleEvent = (await event) as CustomEvent;
    expect(toggleEvent.detail).to.deep.equal({ value: 'navigation', open: true });
    expect(el.open).to.be.true;
  });

  it('emits co-toggle from keyboard activation', async () => {
    const el = await fixture<CoNavDrawerGroup>(html`
      <co-nav-drawer-group label="Navigation" value="navigation"></co-nav-drawer-group>
    `);
    const trigger = el.shadowRoot!.querySelector('button')!;
    const event = oneEvent(el, 'co-toggle');

    trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));

    const toggleEvent = (await event) as CustomEvent;
    expect(toggleEvent.detail.open).to.be.true;
  });
});
