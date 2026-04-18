import '@cobalt/components/button-icon';
import type { CoButtonIcon as CoButtonIconElement } from '@cobalt/components/button-icon';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoButtonIcon = createCobaltComponent<CoButtonIconElement>({
  tagName: 'co-button-icon',
  events: {
    onCoFocus: 'co-focus',
    onCoBlur: 'co-blur',
  },
});
