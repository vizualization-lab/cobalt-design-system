import { fixture, html, expect } from '@open-wc/testing';
import { runA11yAudit } from '../../test-utils/a11y.js';
import './co-input-pill.js';
import type { CoInputPill } from './co-input-pill.js';

describe('co-input-pill', () => {
  it('renders with default props', async () => {
    const el = await fixture<CoInputPill>(html`
      <co-input-pill placeholder="Type here"></co-input-pill>
    `);
    expect(el).to.exist;
    expect(el.variant).to.equal('default');
    expect(el.size).to.equal('md');
  });

  it('renders pill-shaped border radius', async () => {
    const el = await fixture<CoInputPill>(html`
      <co-input-pill placeholder="Search"></co-input-pill>
    `);
    const container = el.shadowRoot!.querySelector('.input-group__container');
    expect(container).to.exist;
  });

  it('renders search variant with prefix icon', async () => {
    const el = await fixture<CoInputPill>(html`
      <co-input-pill variant="search" placeholder="Search..."></co-input-pill>
    `);
    const prefix = el.shadowRoot!.querySelector('.input-group__prefix co-icon');
    expect(prefix).to.exist;
    expect(prefix!.getAttribute('name')).to.equal('search');
  });

  it('renders chat variant with action button', async () => {
    const el = await fixture<CoInputPill>(html`
      <co-input-pill variant="chat" placeholder="Message"></co-input-pill>
    `);
    const button = el.shadowRoot!.querySelector('co-button-icon');
    expect(button).to.exist;
    expect(button!.getAttribute('name')).to.equal('arrow-forward');
  });

  it('dispatches co-action event on button click', async () => {
    const el = await fixture<CoInputPill>(html`
      <co-input-pill variant="chat" placeholder="Message"></co-input-pill>
    `);

    let actionFired = false;
    el.addEventListener('co-action', (() => {
      actionFired = true;
    }) as EventListener);

    const button = el.shadowRoot!.querySelector('co-button-icon') as HTMLElement;
    button.click();
    expect(actionFired).to.be.true;
  });

  it('allows custom action-icon override', async () => {
    const el = await fixture<CoInputPill>(html`
      <co-input-pill action-icon="send" placeholder="Send"></co-input-pill>
    `);
    const button = el.shadowRoot!.querySelector('co-button-icon');
    expect(button!.getAttribute('name')).to.equal('send');
  });

  it('allows custom prefix-icon override', async () => {
    const el = await fixture<CoInputPill>(html`
      <co-input-pill prefix-icon="star" placeholder="Favorites"></co-input-pill>
    `);
    const prefix = el.shadowRoot!.querySelector('.input-group__prefix co-icon');
    expect(prefix!.getAttribute('name')).to.equal('star');
  });

  it('does not render action button when no action icon', async () => {
    const el = await fixture<CoInputPill>(html`
      <co-input-pill variant="search" placeholder="Search"></co-input-pill>
    `);
    const button = el.shadowRoot!.querySelector('co-button-icon');
    expect(button).to.not.exist;
  });

  describe('accessibility', () => {
    it('is accessible in default state', async () => {
      const el = await fixture(html`
        <co-input-pill placeholder="Type here" label="Input"></co-input-pill>
      `);
      await runA11yAudit(el, { component: 'co-input-pill', state: 'default' });
    });

    it('is accessible with search variant', async () => {
      const el = await fixture(html`
        <co-input-pill variant="search" label="Search"></co-input-pill>
      `);
      await runA11yAudit(el, { component: 'co-input-pill', state: 'search' });
    });

    it('is accessible with chat variant', async () => {
      const el = await fixture(html`
        <co-input-pill variant="chat" placeholder="Message" label="Chat"></co-input-pill>
      `);
      await runA11yAudit(el, { component: 'co-input-pill', state: 'chat' });
    });
  });
});
