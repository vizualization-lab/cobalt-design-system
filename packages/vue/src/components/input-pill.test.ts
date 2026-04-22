import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoInputPill } from './input-pill.js';

describe('Vue CoInputPill wrapper', () => {
  it('renders co-input-pill element', () => {
    const wrapper = mount(CoInputPill, { props: { placeholder: 'Search' } });
    expect(wrapper.find('co-input-pill').exists()).toBe(true);
  });
});
