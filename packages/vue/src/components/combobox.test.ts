import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import { CoCombobox } from './combobox.js';

describe('Vue CoCombobox wrapper', () => {
  it('renders co-combobox and option children', () => {
    const wrapper = mount(CoCombobox, {
      props: { label: 'Fruit' },
      slots: { default: () => h('co-option', { value: 'apple' }, 'Apple') },
    });

    expect(wrapper.find('co-combobox').exists()).toBe(true);
    expect(wrapper.find('co-option').exists()).toBe(true);
  });

  it('sets combobox properties on the element', () => {
    const wrapper = mount(CoCombobox, {
      props: {
        label: 'Fruit',
        autocomplete: 'list',
        matchMode: 'begin',
        multiple: true,
        allowCustomChoice: true,
      },
    });
    const el = wrapper.find('co-combobox').element as any;

    expect(el.autocomplete).toBe('list');
    expect(el.matchMode).toBe('begin');
    expect(el.multiple).toBe(true);
    expect(el.allowCustomChoice).toBe(true);
  });
});
