import '@cobalt/components/input-pill';
import type { CoInputPill as CoInputPillElement } from '@cobalt/components/input-pill';
import { createCobaltComponent } from '../create-cobalt-component.js';

export const CoInputPill = createCobaltComponent<CoInputPillElement>({
  tagName: 'co-input-pill',
  events: {
    onCoAction: 'co-action',
    onCoFocus: 'co-focus',
    onCoBlur: 'co-blur',
    onCoInput: 'co-input',
    onCoChange: 'co-change',
  },
});
