import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoSelect } from './select.js';

describe('Vue CoSelect wrapper', () => {
  it('renders co-select element', () => {
    const wrapper = mount(CoSelect);
    expect(wrapper.find('co-select').exists()).toBe(true);
  });

  it('passes size prop to element', () => {
    const wrapper = mount(CoSelect, { props: { size: 'lg' } });
    const el = wrapper.find('co-select').element as any;
    expect(el.size).toBe('lg');
  });
});
