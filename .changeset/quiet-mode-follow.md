---
'@cobalt/docs': patch
---

Removed the per-demo dark/light toggle from `ComponentDemo` and `AppShellDemo`. Demo previews now follow the page's active theme and mode through the cascade, so there is a single source of truth for the active theme.
