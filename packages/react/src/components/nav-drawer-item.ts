import '@cobalt/components/nav-drawer-item';
import type { CoNavDrawerItem as CoNavDrawerItemElement } from '@cobalt/components/nav-drawer-item';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoNavDrawerItem = createCobaltComponent<CoNavDrawerItemElement>({
  tagName: 'co-nav-drawer-item',
});
