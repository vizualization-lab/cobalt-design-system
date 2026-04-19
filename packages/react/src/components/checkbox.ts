import '@cobalt/components/checkbox';
import type { CoCheckbox as CoCheckboxElement } from '@cobalt/components/checkbox';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoCheckbox = createCobaltComponent<CoCheckboxElement>({
  tagName: 'co-checkbox',
});
