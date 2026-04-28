import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoCard } from './card.js';

describe('Vue CoCard wrapper', () => {
  it('renders co-card element', () => {
    const wrapper = mount(CoCard, { slots: { default: 'Content' } });
    expect(wrapper.find('co-card').exists()).toBe(true);
  });

  it('passes label prop', () => {
    const wrapper = mount(CoCard, {
      props: { label: 'Info' },
      slots: { default: 'Content' },
    });
    expect((wrapper.find('co-card').element as any).label).toBe('Info');
  });
});
