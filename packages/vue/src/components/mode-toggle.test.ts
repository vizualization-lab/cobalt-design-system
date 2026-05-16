import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoModeToggle } from './mode-toggle.js';

describe('Vue CoModeToggle wrapper', () => {
  it('renders co-mode-toggle element', () => {
    const wrapper = mount(CoModeToggle);
    expect(wrapper.find('co-mode-toggle').exists()).toBe(true);
  });

  it('passes mode and persist props', () => {
    const wrapper = mount(CoModeToggle, {
      props: { mode: 'dark', persist: false },
    });
    const el = wrapper.find('co-mode-toggle').element as any;
    expect(el.mode).toBe('dark');
    expect(el.persist).toBe(false);
  });

  it('does not set mode when the prop is omitted', () => {
    const wrapper = mount(CoModeToggle);
    const el = wrapper.find('co-mode-toggle').element as any;

    expect(el.hasAttribute('mode')).toBe(false);
  });

  it('re-emits co-change', async () => {
    const wrapper = mount(CoModeToggle);
    wrapper.find('co-mode-toggle').element.dispatchEvent(new CustomEvent('co-change'));
    expect(wrapper.emitted('co-change')).toBeTruthy();
  });
});
