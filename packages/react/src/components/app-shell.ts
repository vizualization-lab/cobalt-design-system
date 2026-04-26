import '@cobalt/components/app-shell';
import type { CoAppShell as CoAppShellElement } from '@cobalt/components/app-shell';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoAppShell = createCobaltComponent<CoAppShellElement>({
  tagName: 'co-app-shell',
  events: {
    onCoDrawerOpen: 'co-drawer-open',
    onCoDrawerClose: 'co-drawer-close',
    onCoDrawerToggle: 'co-drawer-toggle',
  },
});
