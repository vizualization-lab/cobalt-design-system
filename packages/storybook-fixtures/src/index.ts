export const buttonVariants = ['primary', 'secondary', 'danger', 'success', 'ghost'] as const;
export const buttonSizes = ['sm', 'md', 'lg', 'xl'] as const;
export const fieldSizes = ['sm', 'md', 'lg', 'xl'] as const;
export const buttonIconSizes = ['sm', 'md', 'lg', 'xl'] as const;
export const labelPositions = ['bottom', 'top'] as const;
export const textareaResizeOptions = ['auto', 'vertical', 'none'] as const;
export const autocompleteModes = ['both', 'list', 'inline', 'none'] as const;

export const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'carrot', label: 'Carrot' },
  { value: 'date', label: 'Date' },
] as const;

export const commonIcons = [
  'home',
  'search',
  'settings',
  'person',
  'add',
  'delete',
  'edit',
  'info',
  'warning',
  'check-circle',
  'arrow-forward',
  'open-in-new',
] as const;

export const animatedIcons = ['notifications', 'progress-activity', 'check-circle'] as const;

export const componentLinks = [
  { label: 'Button', path: 'button', tag: '<co-button>' },
  { label: 'Button Icon', path: 'button-icon', tag: '<co-button-icon>' },
  { label: 'Icon', path: 'icon', tag: '<co-icon>' },
  { label: 'Input', path: 'input', tag: '<co-input>' },
  { label: 'Textarea', path: 'textarea', tag: '<co-textarea>' },
  { label: 'Option', path: 'option', tag: '<co-option>' },
  { label: 'Listbox', path: 'listbox', tag: '<co-listbox>' },
  { label: 'Select', path: 'select', tag: '<co-select>' },
  { label: 'Combobox', path: 'combobox', tag: '<co-combobox>' },
  { label: 'Form', path: 'form', tag: '<co-form>' },
] as const;

export const frameworkTargets = [
  {
    id: 'web-components',
    label: 'Web Components',
    description: 'Native custom elements rendered directly in the browser.',
    devUrl: 'http://localhost:6101',
    staticPath: './web-components/',
  },
  {
    id: 'react',
    label: 'React',
    description: 'React wrappers rendered through React DOM.',
    devUrl: 'http://localhost:6102',
    staticPath: './react/',
  },
  {
    id: 'vue',
    label: 'Vue',
    description: 'Vue wrappers rendered through Vue 3.',
    devUrl: 'http://localhost:6103',
    staticPath: './vue/',
  },
  {
    id: 'angular',
    label: 'Angular',
    description: 'Angular standalone directives rendered through Angular.',
    devUrl: 'http://localhost:6104',
    staticPath: './angular/',
  },
] as const;

export function titleCase(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export * from './api-metadata.js';
export * from './controls.js';
