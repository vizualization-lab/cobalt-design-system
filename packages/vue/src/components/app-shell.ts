import { defineComponent, h, onMounted, onUnmounted, ref, type PropType } from 'vue';
import '@cobalt/components/app-shell';

export type CoAppShellProps = {
  drawerOpen?: boolean;
  railWidth?: string;
  drawerWidth?: string;
};

export const CoAppShell = defineComponent({
  name: 'CoAppShell',
  props: {
    drawerOpen: {
      type: Boolean,
      default: false,
    },
    railWidth: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
    drawerWidth: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
  },
  emits: ['co-drawer-open', 'co-drawer-close', 'co-drawer-toggle'],
  setup(props, { emit, slots }) {
    const elRef = ref<HTMLElement | null>(null);

    const listeners = {
      'co-drawer-open': (event: Event) => emit('co-drawer-open', event),
      'co-drawer-close': (event: Event) => emit('co-drawer-close', event),
      'co-drawer-toggle': (event: Event) => emit('co-drawer-toggle', event),
    };

    onMounted(() => {
      const el = elRef.value;
      if (!el) return;

      for (const [name, listener] of Object.entries(listeners)) {
        el.addEventListener(name, listener);
      }
    });

    onUnmounted(() => {
      const el = elRef.value;
      if (!el) return;

      for (const [name, listener] of Object.entries(listeners)) {
        el.removeEventListener(name, listener);
      }
    });

    return () =>
      h(
        'co-app-shell',
        {
          ref: elRef,
          drawerOpen: props.drawerOpen,
          railWidth: props.railWidth,
          drawerWidth: props.drawerWidth,
        },
        slots.default?.(),
      );
  },
});
