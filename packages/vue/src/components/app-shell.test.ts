import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { CoAppShell } from './app-shell.js';

describe('Vue CoAppShell wrapper', () => {
  it('renders co-app-shell element with slotted children and props', () => {
    const wrapper = mount(CoAppShell, {
      props: { drawerOpen: true, railWidth: '120px', drawerWidth: '280px' },
      slots: { default: '<div slot="body">Body</div>' },
    });

    const el = wrapper.find('co-app-shell').element as any;
    expect(el).toBeTruthy();
    expect(el.drawerOpen).toBe(true);
    expect(el.railWidth).toBe('120px');
    expect(el.drawerWidth).toBe('280px');
    expect(wrapper.find('[slot="body"]').text()).toBe('Body');
  });

  it('preserves host attrs and exposes the underlying element', () => {
    const wrapper = mount(CoAppShell, {
      attrs: { class: 'docs-shell' },
    });

    const el = wrapper.find('co-app-shell').element;
    expect(wrapper.find('co-app-shell').classes()).toContain('docs-shell');
    expect((wrapper.vm as any).element).toBe(el);
  });

  it('re-emits drawer events', async () => {
    const wrapper = mount(CoAppShell);
    const el = wrapper.find('co-app-shell').element;

    el.dispatchEvent(new CustomEvent('co-drawer-open'));
    el.dispatchEvent(new CustomEvent('co-drawer-close'));
    el.dispatchEvent(new CustomEvent('co-drawer-toggle'));
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('co-drawer-open')).toBeTruthy();
    expect(wrapper.emitted('co-drawer-close')).toBeTruthy();
    expect(wrapper.emitted('co-drawer-toggle')).toBeTruthy();
  });
});
