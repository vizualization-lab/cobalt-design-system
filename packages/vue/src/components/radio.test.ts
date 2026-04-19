import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoRadio } from './radio.js';

describe('Vue CoRadio wrapper', () => {
  it('renders co-radio element', () => {
    const wrapper = mount(CoRadio, { props: { value: 'apple' } });
    expect(wrapper.find('co-radio').exists()).toBe(true);
  });
});
