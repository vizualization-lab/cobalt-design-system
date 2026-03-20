import React from 'react';
import { createComponent } from '@lit/react';
import { CoButton as CoButtonElement } from '@cobalt/components/button';

export const CoButton = createComponent({
  tagName: 'co-button',
  elementClass: CoButtonElement,
  react: React,
  events: {
    onCoFocus: 'co-focus',
    onCoBlur: 'co-blur',
  },
});
