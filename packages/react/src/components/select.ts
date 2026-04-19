import '@cobalt/components/select';
import type { CoSelect as CoSelectElement } from '@cobalt/components/select';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoSelect = createCobaltComponent<CoSelectElement>({
  tagName: 'co-select',
  events: {
    onCoFocus: 'co-focus',
    onCoBlur: 'co-blur',
    onCoChange: 'co-change',
  },
});
