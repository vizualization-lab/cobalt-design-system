import '@cobalt/components/option';
import type { CoOption as CoOptionElement } from '@cobalt/components/option';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoOption = createCobaltComponent<CoOptionElement>({
  tagName: 'co-option',
});
