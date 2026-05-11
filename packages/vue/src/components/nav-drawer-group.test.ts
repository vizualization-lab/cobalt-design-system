import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoNavDrawerGroup } from './nav-drawer-group.js';

describe('Vue CoNavDrawerGroup wrapper', () => {
  it('renders co-nav-drawer-group element and passes props', () => {
    const wrapper = mount(CoNavDrawerGroup, {
      props: { label: 'Navigation', value: 'navigation', open: true },
      slots: { default: '<co-nav-drawer-item value="drawer">Drawer</co-nav-drawer-item>' },
    });

    const el = wrapper.find('co-nav-drawer-group').element as any;
    expect(el.label).toBe('Navigation');
    expect(el.value).toBe('navigation');
    expect(el.open).toBe(true);
  });

  it('emits co-toggle', async () => {
    const wrapper = mount(CoNavDrawerGroup, {
      props: { label: 'Navigation', value: 'navigation' },
    });
    const el = wrapper.find('co-nav-drawer-group').element;

    el.dispatchEvent(new CustomEvent('co-toggle', { detail: { value: 'navigation', open: true } }));

    expect(wrapper.emitted('co-toggle')).toHaveLength(1);
  });

  it('preserves host attrs', () => {
    const wrapper = mount(CoNavDrawerGroup, {
      attrs: { class: 'docs-sidebar-group' },
    });

    expect(wrapper.find('co-nav-drawer-group').classes()).toContain('docs-sidebar-group');
  });
});
