---
'@cobalt/tokens': patch
---

Fixed the Tokens Studio round-trip artifact. Removed group-level `$description` entries from the primitive color palettes (Tokens Studio drops the import when a description sits on a group instead of next to a `$value`) and hardened `merge-tokens.js` so any future stray group-level `$description` is stripped before the merged JSON is written.
