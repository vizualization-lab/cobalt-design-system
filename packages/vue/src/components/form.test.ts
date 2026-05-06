import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoForm } from './form.js';

describe('Vue CoForm wrapper', () => {
  it('renders co-form element and passes props', () => {
    const wrapper = mount(CoForm, {
      props: {
        disabled: true,
        label: 'Contact',
        helpText: 'All fields are required',
        name: 'contact',
      },
      slots: { default: '<button type="submit">Submit</button>' },
    });

    const el = wrapper.find('co-form').element as any;
    expect(el.disabled).toBe(true);
    expect(el.label).toBe('Contact');
    expect(el.helpText).toBe('All fields are required');
    expect(el.name).toBe('contact');
  });

  it('re-emits form events', async () => {
    const wrapper = mount(CoForm);
    const el = wrapper.find('co-form').element;

    el.dispatchEvent(new CustomEvent('co-submit'));
    el.dispatchEvent(new CustomEvent('co-invalid-submit'));
    el.dispatchEvent(new CustomEvent('co-reset'));
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('co-submit')).toBeTruthy();
    expect(wrapper.emitted('co-invalid-submit')).toBeTruthy();
    expect(wrapper.emitted('co-reset')).toBeTruthy();
  });
});
