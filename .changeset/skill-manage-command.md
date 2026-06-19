---
'@cobalt/cli': minor
---

Added the `co skill` command group for managing the Cobalt agent skill in any project. `co skill list` and `co skill status` report per-harness install state (`not-installed | current | outdated`); `co skill add` installs missing harnesses and offers to update outdated installs (auto-updates under `--yes`); `co skill update` refreshes installed skills and backs up locally modified files to `<file>.bak`; `co skill remove` uninstalls and backs up local edits to a sibling `<skill-dir>.bak/` directory. The same installer now powers `co new --agent-skill`.
