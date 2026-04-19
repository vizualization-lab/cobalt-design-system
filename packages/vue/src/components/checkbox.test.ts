import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoCheckbox } from './checkbox.js';

describe('Vue CoCheckbox wrapper', () => {
  it('renders co-checkbox element', () => {
    const wrapper = mount(CoCheckbox, { props: { value: 'accept' } });
    expect(wrapper.find('co-checkbox').exists()).toBe(true);
  });
});
