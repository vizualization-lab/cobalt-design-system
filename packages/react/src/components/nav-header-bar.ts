import '@cobalt/components';
import type { CoNavHeaderBar as CoNavHeaderBarElement } from '@cobalt/components';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoNavHeaderBar = createCobaltComponent<CoNavHeaderBarElement>({
  tagName: 'co-nav-header-bar',
  events: {},
});
