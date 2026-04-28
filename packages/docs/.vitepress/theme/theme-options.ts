export const DEFAULT_DOCS_THEME = 'default';

export const DOCS_THEME_OPTIONS = [
  { id: 'default', label: 'Default' },
  { id: 'purple', label: 'Purple' },
  { id: 'brick', label: 'Brick' },
  { id: 'forest', label: 'Forest' },
] as const;

export type DocsThemeId = (typeof DOCS_THEME_OPTIONS)[number]['id'];

export function isDocsThemeId(value: string | null | undefined): value is DocsThemeId {
  return DOCS_THEME_OPTIONS.some((theme) => theme.id === value);
}
