import '@cobalt/components/mode-toggle';
import type { CoModeToggle as CoModeToggleElement } from '@cobalt/components/mode-toggle';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoModeToggle = createCobaltComponent<CoModeToggleElement>({
  tagName: 'co-mode-toggle',
  events: {
    onCoChange: 'co-change',
  },
});
