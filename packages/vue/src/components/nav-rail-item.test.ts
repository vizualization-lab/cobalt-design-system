import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoNavRailItem } from './nav-rail-item.js';

describe('Vue CoNavRailItem wrapper', () => {
  it('renders a co-nav-rail-item element', () => {
    const wrapper = mount(CoNavRailItem, { slots: { default: 'Home' } });
    expect(wrapper.find('co-nav-rail-item').exists()).toBe(true);
  });

  it('sets href property on the element', () => {
    const wrapper = mount(CoNavRailItem, {
      props: { href: '/home', value: 'home' },
      slots: { default: 'Home' },
    });
    const el = wrapper.find('co-nav-rail-item').element as any;
    expect(el.href).toBe('/home');
  });
});
