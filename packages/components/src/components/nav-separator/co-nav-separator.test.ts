import { fixture, html, expect } from '@open-wc/testing';
import './co-nav-separator.js';

describe('co-nav-separator', () => {
  it('renders a horizontal rule', async () => {
    const el = await fixture(html`<co-nav-separator></co-nav-separator>`);
    expect(el).to.exist;
    const hr = el.shadowRoot!.querySelector('hr');
    expect(hr).to.exist;
  });
});
