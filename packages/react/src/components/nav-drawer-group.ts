import '@cobalt/components/nav-drawer-group';
import type { CoNavDrawerGroup as CoNavDrawerGroupElement } from '@cobalt/components/nav-drawer-group';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoNavDrawerGroup = createCobaltComponent<CoNavDrawerGroupElement>({
  tagName: 'co-nav-drawer-group',
  events: { onCoToggle: 'co-toggle' },
});
