import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoIcon } from './icon.js';

describe('Vue CoIcon wrapper', () => {
  it('renders co-icon element and passes props', () => {
    const wrapper = mount(CoIcon, {
      props: { name: 'home', size: 'lg', fill: true, label: 'Home' },
    });

    const el = wrapper.find('co-icon').element as any;
    expect(el.name).toBe('home');
    expect(el.size).toBe('lg');
    expect(el.fill).toBe(true);
    expect(el.label).toBe('Home');
  });

  it('preserves passthrough attrs', () => {
    const wrapper = mount(CoIcon, {
      props: { name: 'home' },
      attrs: { slot: 'prefix', class: 'marker', 'aria-hidden': 'true' },
    });
    const el = wrapper.find('co-icon');

    expect(el.attributes('slot')).toBe('prefix');
    expect(el.classes()).toContain('marker');
    expect(el.attributes('aria-hidden')).toBe('true');
  });
});
