# Adding Storybook Stories for a New Component

This guide covers the repeatable Storybook onboarding flow for new Cobalt components.

It generates starter stories for:

- Web Components
- React
- Vue
- Angular
- The Storybook hub component list

It does **not** cover:

- workbench previews
- docs-site component pages
- broader design documentation

Those are separate tasks with their own files and review paths.

## How Storybook Onboarding Works

Storybook onboarding is registry-driven. New components are added from a single source of truth in `packages/storybook-fixtures/src/component-registry.js`.

That registry feeds:

- generated Storybook API metadata
- generated starter stories
- Storybook module aliases
- the Storybook hub component list

If you are adding a new component, do not hand-author four new story files first. Start with the registry entry.

## Standard Workflow

1. Add the component to `packages/storybook-fixtures/src/component-registry.js`.
2. Set `storybook.management` to `generated`.
3. Choose `storybook.overviewPreset`.
4. Add `webComponentImports` for any child custom elements the generated web story may render.
5. Run `pnpm storybook:generate`.
6. Review the generated stories and the Storybook hub entry.
7. Run `pnpm storybook:check`.
8. Build the Storybooks before opening a PR.

## Add the Registry Entry

Add a new object to `storybookComponentDefinitions` with:

- `id`: the internal component id used by Storybook helpers
- `title`: the Storybook title segment, for example `Date Picker`
- `tagName`: the custom element tag, for example `co-date-picker`
- `className`: the Angular wrapper class name used by metadata extraction
- `importName`: the wrapper export name used by source snippets
- `componentPath`: the package import path segment, for example `date-picker`
- `componentSource`: the web component source file used for Storybook aliasing
- `angularSource`: the Angular source file used for control metadata extraction
- `webComponentImports`: the custom element modules needed by the generated web story
- `storybook.management`: use `generated` for generator-managed stories
- `storybook.overviewPreset`: use the current starter preset

Use existing entries as the template. Keep the list alphabetized by component family where practical.

## Starter Overview vs Override

Generated components get two stories by default:

- `Playground`: control-driven and interactive
- `Overview`: a generated starter example using the component's default Storybook args

If the starter overview is not enough, add a central override in `packages/storybook-fixtures/src/story-overrides.js`.

Overrides are keyed by component id and framework. They let you inject:

- extra import lines
- a framework-specific `Overview` story implementation

Use overrides sparingly. The default path should stay generator-driven so future updates remain cheap.

## Commands

Run these commands from the repository root:

```bash
pnpm storybook:generate
pnpm storybook:check
```

`storybook:generate` updates both:

- controls metadata in `packages/storybook-fixtures/src/api-metadata.ts`
- generated Storybook story files for registry-managed components

`storybook:check` fails if either generated output is stale.

## Review Checklist

After generating stories, verify:

- all four framework story files were created
- the component appears in the Storybook hub
- the generated Storybook titles use `Components/<Title>`
- the web Storybook imports every child custom element it needs
- the framework wrappers render correctly in their Storybooks
- code snippets still show the native framework wrappers in React, Vue, and Angular

## Build Verification

Before merging, run the Storybook builds that exercise the new component:

```bash
pnpm storybook:build
```

If you are iterating on a single framework, you can use the narrower Storybook commands during development, but the full build should pass before merge.

## Existing Manual Stories

Not every existing component story is generator-managed yet.

- Generator-managed stories are authoritative and should not be edited directly.
- Manual stories remain manual until they are explicitly migrated.
- If you need richer examples for a manual component, keep editing that component's story file directly.

When migrating a manual component to the generator, delete the old per-framework story files first, then run `pnpm storybook:stories:generate`.
