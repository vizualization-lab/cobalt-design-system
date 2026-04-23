import '@cobalt/components/nav-drawer';
import type { CoNavDrawer as CoNavDrawerElement } from '@cobalt/components/nav-drawer';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoNavDrawer = createCobaltComponent<CoNavDrawerElement>({
  tagName: 'co-nav-drawer',
  events: { onCoChange: 'co-change' },
});
