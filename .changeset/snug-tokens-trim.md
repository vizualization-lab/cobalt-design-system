---
'@cobalt/docs': patch
---

Tightened the token reference browser height on smaller and shorter viewports so the component fits above the fold. Body height now uses `dvh` (accounting for mobile browser chrome) and the Semantic/Primitive category cards are hidden on narrow widths or short heights, where they were the biggest contributors to the component overflowing the viewport.
