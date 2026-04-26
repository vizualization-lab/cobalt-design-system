import '@cobalt/components';
import type { CoCard as CoCardElement } from '@cobalt/components';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoCard = createCobaltComponent<CoCardElement>({
  tagName: 'co-card',
  events: {},
});
