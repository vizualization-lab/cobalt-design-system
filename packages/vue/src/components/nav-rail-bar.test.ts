import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoNavRailBar } from './nav-rail-bar.js';

describe('Vue CoNavRailBar wrapper', () => {
  it('renders a co-nav-rail-bar element with slotted children', () => {
    const wrapper = mount(CoNavRailBar, {
      slots: {
        default: '<co-nav-rail-item value="home">Home</co-nav-rail-item>',
      },
    });
    expect(wrapper.find('co-nav-rail-bar').exists()).toBe(true);
    expect(wrapper.find('co-nav-rail-item').exists()).toBe(true);
  });

  it('re-emits co-change', async () => {
    const wrapper = mount(CoNavRailBar);
    wrapper.find('co-nav-rail-bar').element.dispatchEvent(new CustomEvent('co-change'));
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('co-change')).toBeTruthy();
  });
});
