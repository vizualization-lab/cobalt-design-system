import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoBanner } from './banner.js';

describe('Vue CoBanner wrapper', () => {
  it('renders co-banner element', () => {
    const wrapper = mount(CoBanner, { slots: { default: '<span slot="title">Notice</span>' } });
    expect(wrapper.find('co-banner').exists()).toBe(true);
  });

  it('passes label prop', () => {
    const wrapper = mount(CoBanner, {
      props: { label: 'Alert' },
      slots: { default: '<span slot="title">Alert</span>' },
    });
    expect(wrapper.find('co-banner').attributes('label')).toBe('Alert');
  });
});
