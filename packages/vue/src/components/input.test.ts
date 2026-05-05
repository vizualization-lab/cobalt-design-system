import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Validator } from '@cobalt/components/validation';
import { CoInput } from './input.js';

class AlwaysValid extends Validator {
  override execute() {
    return false;
  }
}

describe('Vue CoInput wrapper', () => {
  it('renders a co-input element', () => {
    const wrapper = mount(CoInput, { props: { label: 'Name' } });
    expect(wrapper.find('co-input').exists()).toBe(true);
  });

  it('sets size property on the element', () => {
    const wrapper = mount(CoInput, { props: { label: 'Name', size: 'lg' } });
    const el = wrapper.find('co-input').element as any;
    expect(el.size).toBe('lg');
  });

  it('sets danger property when prop is true', () => {
    const wrapper = mount(CoInput, { props: { label: 'Email', danger: true } });
    const el = wrapper.find('co-input').element as any;
    expect(el.danger).toBe(true);
  });

  it('sets disabled property when prop is true', () => {
    const wrapper = mount(CoInput, { props: { label: 'Name', disabled: true } });
    const el = wrapper.find('co-input').element as any;
    expect(el.disabled).toBe(true);
  });

  it('sets readonly property when prop is true', () => {
    const wrapper = mount(CoInput, { props: { label: 'Account id', readOnly: true } });
    const el = wrapper.find('co-input').element as any;
    expect(el.readOnly).toBe(true);
  });

  it('sets label and placeholder properties', () => {
    const wrapper = mount(CoInput, {
      props: { label: 'Email', placeholder: 'name@example.com' },
    });
    const el = wrapper.find('co-input').element as any;
    expect(el.label).toBe('Email');
    expect(el.placeholder).toBe('name@example.com');
  });

  it('sets validation properties on the element', () => {
    const validators = [new AlwaysValid()];
    const wrapper = mount(CoInput, {
      props: {
        label: 'Email',
        requiredMessage: 'Enter a value.',
        emailMessage: 'Enter an email.',
        pattern: '[a-z]+',
        patternMessage: 'Use lowercase letters.',
        minLength: 2,
        minLengthMessage: 'Too short.',
        maxLength: 8,
        maxLengthMessage: 'Too long.',
        validators,
      },
    });
    const el = wrapper.find('co-input').element as any;
    expect(el.requiredMessage).toBe('Enter a value.');
    expect(el.emailMessage).toBe('Enter an email.');
    expect(el.pattern).toBe('[a-z]+');
    expect(el.patternMessage).toBe('Use lowercase letters.');
    expect(el.minLength).toBe(2);
    expect(el.minLengthMessage).toBe('Too short.');
    expect(el.maxLength).toBe(8);
    expect(el.maxLengthMessage).toBe('Too long.');
    expect(el.validators).toContain(validators[0]);
  });

  it('renders slotted content', () => {
    const wrapper = mount(CoInput, {
      props: { label: 'Search' },
      slots: { default: '<span slot="prefix">icon</span>' },
    });
    expect(wrapper.find('[slot="prefix"]').text()).toBe('icon');
  });
});
