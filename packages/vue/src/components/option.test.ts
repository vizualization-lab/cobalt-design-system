import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoOption } from './option.js';

describe('Vue CoOption wrapper', () => {
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
