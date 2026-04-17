import React from 'react';
import { createComponent } from '@lit/react';
import {
  CoListbox as CoListboxElement,
  CoOption as CoOptionElement,
} from '@cobalt/components/listbox';

export const CoListbox = createComponent({
  tagName: 'co-listbox',
  elementClass: CoListboxElement,
  react: React,
  events: {
    onCoChange: 'co-change',
  },
});

export const CoOption = createComponent({
  tagName: 'co-option',
  elementClass: CoOptionElement,
  react: React,
});
