import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoCheckboxIndeterminate } from './checkbox-indeterminate.js';

describe('Vue CoCheckboxIndeterminate wrapper', () => {
  it('renders co-checkbox-indeterminate element and passes props', () => {
    const wrapper = mount(CoCheckboxIndeterminate, {
      props: {
        value: 'all',
        checked: true,
        indeterminate: true,
        mixedState: true,
        disabled: true,
      },
      slots: { default: 'Select all' },
    });

    const el = wrapper.find('co-checkbox-indeterminate').element as any;
    expect(el.value).toBe('all');
    expect(el.checked).toBe(true);
    expect(el.indeterminate).toBe(true);
    expect(el.mixedState).toBe(true);
    expect(el.disabled).toBe(true);
  });
});
