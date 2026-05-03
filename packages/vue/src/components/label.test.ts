import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoLabel } from './label.js';

describe('Vue CoLabel wrapper', () => {
  it('renders a co-label element', () => {
    const wrapper = mount(CoLabel, { slots: { default: 'Email address' } });
    expect(wrapper.find('co-label').exists()).toBe(true);
  });

  it('syncs htmlFor, required, optional, and optionalLabel to the element', () => {
    const wrapper = mount(CoLabel, {
      props: {
        htmlFor: 'email',
        required: true,
        optional: true,
        optionalLabel: 'Not required',
      },
      slots: { default: 'Email address' },
    });
    const el = wrapper.find('co-label').element as any;

    expect(el.htmlFor).toBe('email');
    expect(el.required).toBe(true);
    expect(el.optional).toBe(true);
    expect(el.optionalLabel).toBe('Not required');
  });

  it('renders slotted content', () => {
    const wrapper = mount(CoLabel, {
      slots: { default: '<span slot="prefix">icon</span>Email address' },
    });

    expect(wrapper.find('[slot="prefix"]').text()).toBe('icon');
  });
});
