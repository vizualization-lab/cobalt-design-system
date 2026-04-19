import '@cobalt/components/checkbox-group';
import type { CoCheckboxGroup as CoCheckboxGroupElement } from '@cobalt/components/checkbox-group';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoCheckboxGroup = createCobaltComponent<CoCheckboxGroupElement>({
  tagName: 'co-checkbox-group',
  events: { onCoChange: 'co-change' },
});
