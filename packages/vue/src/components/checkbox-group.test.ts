import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoCheckboxGroup } from './checkbox-group.js';

describe('Vue CoCheckboxGroup wrapper', () => {
  it('renders co-checkbox-group element', () => {
    const wrapper = mount(CoCheckboxGroup, { props: { name: 'toppings' } });
    expect(wrapper.find('co-checkbox-group').exists()).toBe(true);
  });
});
