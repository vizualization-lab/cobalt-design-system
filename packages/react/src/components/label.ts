import '@cobalt/components/label';
import type { CoLabel as CoLabelElement } from '@cobalt/components/label';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoLabel = createCobaltComponent<CoLabelElement>({
  tagName: 'co-label',
});
