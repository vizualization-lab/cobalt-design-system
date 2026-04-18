import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoButtonIcon } from './button-icon.js';

describe('Vue CoButtonIcon wrapper', () => {
  it('renders co-button-icon element', () => {
    const wrapper = mount(CoButtonIcon, {
      props: { name: 'star' },
      attrs: { 'aria-label': 'Star' },
    });
    expect(wrapper.find('co-button-icon').exists()).toBe(true);
  });

  it('passes name and variant props to element', async () => {
    const wrapper = mount(CoButtonIcon, {
      props: { name: 'delete', variant: 'danger' },
      attrs: { 'aria-label': 'Delete' },
    });
    const el = wrapper.find('co-button-icon').element as any;
    expect(el.name).toBe('delete');
    expect(el.variant).toBe('danger');
  });

  it('passes label prop to element', async () => {
    const wrapper = mount(CoButtonIcon, {
      props: { name: 'star', label: 'Favorite' },
    });
    const el = wrapper.find('co-button-icon').element as any;
    expect(el.label).toBe('Favorite');
  });
});
