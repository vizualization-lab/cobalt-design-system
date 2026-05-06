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
});
