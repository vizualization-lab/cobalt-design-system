import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoRadioGroup } from './radio-group.js';

describe('Vue CoRadioGroup wrapper', () => {
  it('renders co-radio-group element', () => {
    const wrapper = mount(CoRadioGroup, { props: { name: 'fruit' } });
    expect(wrapper.find('co-radio-group').exists()).toBe(true);
  });
});
