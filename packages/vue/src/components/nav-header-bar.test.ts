import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoNavHeaderBar } from './nav-header-bar.js';

describe('Vue CoNavHeaderBar wrapper', () => {
  it('renders co-nav-header-bar element', () => {
    const wrapper = mount(CoNavHeaderBar, { slots: { default: 'Content' } });
    expect(wrapper.find('co-nav-header-bar').exists()).toBe(true);
  });

  it('passes label prop', () => {
    const wrapper = mount(CoNavHeaderBar, {
      props: { label: 'App Header' },
      slots: { default: 'Content' },
    });
    expect((wrapper.find('co-nav-header-bar').element as any).label).toBe('App Header');
  });
});
