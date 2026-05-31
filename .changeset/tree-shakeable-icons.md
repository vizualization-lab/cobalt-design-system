---
'@cobalt/icons': minor
'@cobalt/components': minor
'@cobalt/react': minor
'@cobalt/vue': minor
'@cobalt/angular': minor
'create-cobalt': minor
'@cobalt/docs': patch
---

Re-architected `@cobalt/icons` so apps only bundle the icons they actually reference. A minimal React starter that previously shipped an ~8 MB JS bundle (the entire icon registry) now ships ~250 KB.
