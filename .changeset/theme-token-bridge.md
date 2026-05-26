---
'@cobalt/tokens': minor
'@cobalt/components': minor
'@cobalt/docs': minor
'@cobalt/workbench': minor
---

Added theme bridge color tokens so semantic accent colors resolve through `co.color.primitive.theme.*` across brands and modes.

Renamed the primary semantic color paths to theme-oriented paths:

- `co.color.state.primary.*` is now `co.color.state.theme.*`.
- `co.color.surface.interactive.primary.*` is now `co.color.surface.interactive.theme.*`.

Added `co.color.text.theme` and `co.color.border.theme` semantic tokens for theme-colored text and border use cases.
