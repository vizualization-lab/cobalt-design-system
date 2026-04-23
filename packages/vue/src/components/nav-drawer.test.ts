import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoNavDrawer } from './nav-drawer.js';

describe('Vue CoNavDrawer wrapper', () => {
  it('renders co-nav-drawer element', () => {
    const wrapper = mount(CoNavDrawer, { props: { label: 'Menu' } });
    expect(wrapper.find('co-nav-drawer').exists()).toBe(true);
  });
});
