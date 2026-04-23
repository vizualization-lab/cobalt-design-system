import '@cobalt/components';
import type { CoNavRailBar as CoNavRailBarElement } from '@cobalt/components';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoNavRailBar = createCobaltComponent<CoNavRailBarElement>({
  tagName: 'co-nav-rail-bar',
  events: {
    onCoChange: 'co-change',
  },
});
