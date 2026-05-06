import '@cobalt/components/icon';
import type { CoIcon as CoIconElement } from '@cobalt/components/icon';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoIcon = createCobaltComponent<CoIconElement>({
  tagName: 'co-icon',
});
