---
'@cobalt/cli': minor
---

Added `co agent themes` so the available theme catalog can be discovered programmatically instead of being hardcoded in SKILL.md or consumer code. Each entry returns the theme `name`, `cssImportPath`, optional `scssImportPath`, and supported `modes`. The catalog is derived from the installed `@cobalt/tokens` build (workspace) with a bundled snapshot as fallback when the package isn't installed. The SKILL playbook for switching themes now queries this command first instead of naming themes inline.
