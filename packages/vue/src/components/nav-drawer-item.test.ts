import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import { CoNavDrawerItem } from './nav-drawer-item.js';

describe('Vue CoNavDrawerItem wrapper', () => {
  it('renders co-nav-drawer-item element and passes props', () => {
    const wrapper = mount(CoNavDrawerItem, {
      props: {
        value: 'home',
        icon: 'home',
        href: '/home',
        selected: true,
        disabled: true,
      },
      slots: { default: 'Home' },
    });

    const el = wrapper.find('co-nav-drawer-item').element as any;
    expect(el.value).toBe('home');
    expect(el.icon).toBe('home');
    expect(el.href).toBe('/home');
    expect(el.selected).toBe(true);
    expect(el.disabled).toBe(true);
  });

  it('preserves host attrs and prefix slot content', () => {
    const wrapper = mount(CoNavDrawerItem, {
      attrs: { class: 'docs-sidebar-item' },
      slots: {
        default: () => [h('co-icon', { slot: 'prefix', name: 'fiber-manual-record' }), 'Forms'],
      },
    });

    expect(wrapper.find('co-nav-drawer-item').classes()).toContain('docs-sidebar-item');
    expect(wrapper.find('co-icon[slot="prefix"]').exists()).toBe(true);
  });
});
