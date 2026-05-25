import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoInputStepper } from './input-stepper.js';

describe('Vue CoInputStepper wrapper', () => {
  it('renders a co-input-stepper element', () => {
    const wrapper = mount(CoInputStepper, { props: { label: 'Quantity' } });
    expect(wrapper.find('co-input-stepper').exists()).toBe(true);
  });

  it('sets numeric properties on the element', () => {
    const wrapper = mount(CoInputStepper, {
      props: { label: 'Quantity', min: 0, max: 10, step: 2 },
    });
    const el = wrapper.find('co-input-stepper').element as any;
    expect(el.min).toBe(0);
    expect(el.max).toBe(10);
    expect(el.step).toBe(2);
  });

  it('sets state properties on the element', () => {
    const wrapper = mount(CoInputStepper, {
      props: { label: 'Quantity', size: 'lg', danger: true, disabled: true },
    });
    const el = wrapper.find('co-input-stepper').element as any;
    expect(el.size).toBe('lg');
    expect(el.danger).toBe(true);
    expect(el.disabled).toBe(true);
  });

  it('renders slotted content', () => {
    const wrapper = mount(CoInputStepper, {
      props: { label: 'Price' },
      slots: { default: '<span slot="leading">$</span>' },
    });
    expect(wrapper.find('[slot="leading"]').text()).toBe('$');
  });
});
