import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoNavSeparator } from './nav-separator.js';

describe('Vue CoNavSeparator wrapper', () => {
  it('renders co-nav-separator element', () => {
    const wrapper = mount(CoNavSeparator);

    expect(wrapper.find('co-nav-separator').exists()).toBe(true);
  });
});
