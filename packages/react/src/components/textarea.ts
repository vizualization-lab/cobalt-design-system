import React from 'react';
import { createComponent } from '@lit/react';
import { CoTextarea as CoTextareaElement } from '@cobalt/components/textarea';

export const CoTextarea = createComponent({
  tagName: 'co-textarea',
  elementClass: CoTextareaElement,
  react: React,
  events: {
    onCoFocus: 'co-focus',
    onCoBlur: 'co-blur',
    onCoInput: 'co-input',
    onCoChange: 'co-change',
  },
});
