---
'@cobalt/docs': patch
---

Fixed the release-notes page so multi-line changeset entries (those with nested bullets) display their full body. The renderer previously captured only the top-level dash and silently dropped any indented sub-bullets, making minor releases with rich changeset bodies appear truncated.
