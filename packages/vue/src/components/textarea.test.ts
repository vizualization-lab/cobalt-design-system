import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoTextarea } from './textarea.js';

describe('Vue CoTextarea wrapper', () => {
  it('renders a co-textarea element', () => {
    const wrapper = mount(CoTextarea, { props: { label: 'Comment' } });
    expect(wrapper.find('co-textarea').exists()).toBe(true);
  });

  it('sets size and resize properties on the element', () => {
    const wrapper = mount(CoTextarea, {
      props: { label: 'Comment', size: 'lg', resize: 'vertical' },
    });
    const el = wrapper.find('co-textarea').element as any;
    expect(el.size).toBe('lg');
    expect(el.resize).toBe('vertical');
  });

  it('sets danger property when prop is true', () => {
    const wrapper = mount(CoTextarea, { props: { label: 'Comment', danger: true } });
    const el = wrapper.find('co-textarea').element as any;
    expect(el.danger).toBe(true);
  });

  it('sets disabled property when prop is true', () => {
    const wrapper = mount(CoTextarea, { props: { label: 'Comment', disabled: true } });
    const el = wrapper.find('co-textarea').element as any;
    expect(el.disabled).toBe(true);
  });

  it('sets readonly property when prop is true', () => {
    const wrapper = mount(CoTextarea, { props: { label: 'Comment', readOnly: true } });
    const el = wrapper.find('co-textarea').element as any;
    expect(el.readOnly).toBe(true);
  });

  it('sets textarea properties', () => {
    const wrapper = mount(CoTextarea, {
      props: {
        label: 'Comment',
        placeholder: 'Write a note',
        rows: 4,
        maxRows: 8,
        maxLength: 120,
      },
    });
    const el = wrapper.find('co-textarea').element as any;
    expect(el.label).toBe('Comment');
    expect(el.placeholder).toBe('Write a note');
    expect(el.rows).toBe(4);
    expect(el.maxRows).toBe(8);
    expect(el.maxLength).toBe(120);
  });

  it('renders slotted content', () => {
    const wrapper = mount(CoTextarea, {
      props: { label: 'Comment' },
      slots: { default: '<span slot="prefix">icon</span>' },
    });
    expect(wrapper.find('[slot="prefix"]').text()).toBe('icon');
  });
});
