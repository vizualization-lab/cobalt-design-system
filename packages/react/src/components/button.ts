import '@cobalt/components/button';
import type { CoButton as CoButtonElement } from '@cobalt/components/button';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoButton = createCobaltComponent<CoButtonElement>({
  tagName: 'co-button',
  events: {
    onCoFocus: 'co-focus',
    onCoBlur: 'co-blur',
  },
});
