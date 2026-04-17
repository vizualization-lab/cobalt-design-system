import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoListbox, CoOption } from './listbox.js';

describe('Vue CoListbox wrapper', () => {
  it('renders co-listbox and co-option elements', () => {
    const wrapper = mount(CoListbox, {
      props: { label: 'Fruit' },
      slots: { default: '<co-option value="apple">Apple</co-option>' },
    });
    expect(wrapper.find('co-listbox').exists()).toBe(true);
    expect(wrapper.find('co-option').exists()).toBe(true);
  });

  it('sets listbox properties on the element', () => {
    const wrapper = mount(CoListbox, {
      props: { label: 'Fruit', multipleChoice: true, orientation: 'horizontal' },
    });
    const el = wrapper.find('co-listbox').element as any;
    expect(el.multipleChoice).toBe(true);
    expect(el.orientation).toBe('horizontal');
  });

  it('renders a co-option element', () => {
    const wrapper = mount(CoOption, {
      props: { value: 'apple', checked: true, disabled: true },
      slots: { default: 'Apple' },
    });
    const el = wrapper.find('co-option').element as any;
    expect(el.value).toBe('apple');
    expect(el.checked).toBe(true);
    expect(el.disabled).toBe(true);
  });
});
