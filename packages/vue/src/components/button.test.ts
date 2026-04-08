import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoButton } from './button.js';

describe('Vue CoButton wrapper', () => {
  it('renders a co-button element', () => {
    const wrapper = mount(CoButton, { slots: { default: 'Click me' } });
    expect(wrapper.find('co-button').exists()).toBe(true);
  });

  it('sets variant property on the element', () => {
    const wrapper = mount(CoButton, {
      props: { variant: 'error' },
      slots: { default: 'Delete' },
    });
    const el = wrapper.find('co-button').element as any;
    expect(el.variant).toBe('error');
  });

  it('sets size property on the element', () => {
    const wrapper = mount(CoButton, {
      props: { size: 'lg' },
      slots: { default: 'Large' },
    });
    const el = wrapper.find('co-button').element as any;
    expect(el.size).toBe('lg');
  });

  it('sets disabled property when prop is true', () => {
    const wrapper = mount(CoButton, {
      props: { disabled: true },
      slots: { default: 'Disabled' },
    });
    const el = wrapper.find('co-button').element as any;
    expect(el.disabled).toBe(true);
  });

  it('sets loading property when prop is true', () => {
    const wrapper = mount(CoButton, {
      props: { loading: true },
      slots: { default: 'Loading' },
    });
    const el = wrapper.find('co-button').element as any;
    expect(el.loading).toBe(true);
  });

  it('sets href property on the element', () => {
    const wrapper = mount(CoButton, {
      props: { href: 'https://example.com' },
      slots: { default: 'Link' },
    });
    const el = wrapper.find('co-button').element as any;
    expect(el.href).toBe('https://example.com');
  });

  it('preserves aria-* attrs set by consumer', () => {
    const wrapper = mount(CoButton, {
      attrs: { 'aria-label': 'Close dialog' },
      slots: { default: 'X' },
    });
    expect(wrapper.find('co-button').attributes('aria-label')).toBe('Close dialog');
  });

  it('renders slot content', () => {
    const wrapper = mount(CoButton, {
      slots: { default: 'Hello world' },
    });
    expect(wrapper.find('co-button').text()).toBe('Hello world');
  });
});
