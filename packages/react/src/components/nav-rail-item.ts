import '@cobalt/components';
import type { CoNavRailItem as CoNavRailItemElement } from '@cobalt/components';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoNavRailItem = createCobaltComponent<CoNavRailItemElement>({
  tagName: 'co-nav-rail-item',
});
