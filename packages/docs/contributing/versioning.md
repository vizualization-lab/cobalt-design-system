# Versioning & Release Policy

The Cobalt Design System follows [Semantic Versioning](https://semver.org/) (semver) and uses [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs across the monorepo.

## Fixed / Lockstep Versioning

All publishable Cobalt packages share a single version number. When any package receives a changeset, **all six packages** bump to the same version:

- `@cobalt/tokens`
- `@cobalt/icons`
- `@cobalt/components`
- `@cobalt/react`
- `@cobalt/vue`
- `@cobalt/angular`

This is enforced by the `"fixed"` configuration in `.changeset/config.json`. Consumers can always assume that all `@cobalt/*` packages at the same version are compatible.

> The docs package (`@cobalt/docs`) is excluded from versioning — it is private and not published to npm.

## Semantic Versioning

Version numbers follow the `MAJOR.MINOR.PATCH` format:

| Increment | When to Use                                   | Example |
| --------- | --------------------------------------------- | ------- |
| **Major** | Breaking changes that require consumer action | `2.0.0` |
| **Minor** | New features that are backward-compatible     | `1.3.0` |
| **Patch** | Bug fixes and non-functional improvements     | `1.2.4` |

## What Constitutes a Breaking Change

A change is considered **breaking** if it requires consumers to modify their code, markup, or configuration when upgrading. Specifically:

### Breaking (Major Version Bump)

- Removing a public property, method, event, slot, or CSS custom property
- Renaming a component tag (e.g., `co-dialog` to `co-modal`)
- Changing the type or default value of a public property
- Changing event detail shape or event names
- Removing or renaming a CSS custom property (`--co-*`)
- Changing the DOM structure in a way that breaks CSS selectors or slot behavior
- Dropping support for a browser or Node.js version
- Changing the module export structure of a package

### Non-Breaking (Minor or Patch)

- Adding a new property, method, event, slot, or CSS custom property
- Adding a new component variant
- Fixing a bug that aligns behavior with documented expectations
- Updating internal implementation without affecting the public API
- Performance improvements
- Adding new exports alongside existing ones

> **Tip:** When in doubt, treat a change as breaking. It's better to bump a major version unnecessarily than to break consumers unexpectedly.

## Changesets Workflow

We use [Changesets](https://github.com/changesets/changesets) to track changes and automate version bumps and changelog generation.

### Adding a Changeset

After making changes, run:

```bash
pnpm changeset
```

You'll be prompted to:

1. **Select affected packages** — Choose which packages your change impacts
2. **Choose bump type** — Major, minor, or patch for each package
3. **Write a summary** — A human-readable description of the change

This creates a markdown file in the `.changeset/` directory. Commit this file along with your code changes.

### Convenience Commands

| Command              | Description                                   |
| -------------------- | --------------------------------------------- |
| `pnpm changeset`     | Create a new changeset interactively          |
| `pnpm version:bump`  | Apply pending changesets — bumps all packages |
| `pnpm version:check` | Show pending changesets without applying them |
| `pnpm release`       | Publish updated packages to npm               |

### Changeset Summary Guidelines

Write summaries from the consumer's perspective:

```markdown
---
'@cobalt/components': minor
---

Added `loading` property to co-button to display a spinner and disable interactions while an async action is in progress.
```

Keep summaries:

- **Concise** — One to two sentences
- **Consumer-focused** — Describe what changed for the user, not the implementation detail
- **Actionable** — For breaking changes, include migration steps

## Release Cadence

| Release Type    | Frequency | Description                                                 |
| --------------- | --------- | ----------------------------------------------------------- |
| **Patch**       | As needed | Bug fixes are released as soon as they pass CI              |
| **Minor**       | Biweekly  | New features are batched into scheduled releases            |
| **Major**       | Quarterly | Breaking changes are batched and coordinated with consumers |
| **Pre-release** | As needed | Alpha/beta releases for testing before stable               |

### Release Process

1. The Changesets GitHub Action opens a **Version Packages** PR automatically when changesets accumulate on `main`
2. The core team reviews the PR, verifying version bumps and changelog entries
3. Merging the PR triggers the publish pipeline, which publishes updated packages to npm
4. Release notes are published with the GitHub release

## Pre-release Channels

For testing unstable features, we maintain pre-release channels:

```bash
# Install a beta version
pnpm add @cobalt/components@beta

# Install a specific pre-release
pnpm add @cobalt/components@3.0.0-beta.1
```

Pre-release versions follow the pattern `{version}-{channel}.{number}` (e.g., `3.0.0-beta.1`).

## Deprecation Policy

When a component, property, or API is slated for removal:

1. **Announce deprecation** — Mark the API as deprecated in the current minor release with `@deprecated` JSDoc tags and console warnings
2. **Provide migration path** — Document the recommended alternative in the deprecation notice and changelog
3. **Minimum notice period** — Deprecated APIs remain available for at least **two major release cycles** (roughly 6 months)
4. **Remove in major release** — The deprecated API is removed in the next planned major version

```typescript
/**
 * @deprecated Use `variant` instead. Will be removed in v4.0.
 */
@property({ type: String })
type: string = 'primary';
```

> **Note:** Deprecated features continue to work and receive critical bug fixes during the notice period. They will not receive new features or enhancements.
