# Developer Resources

Helpful links, tools, and references for developers working with the Cobalt Design System.

> **Note:** This page is a living document. Content will be expanded as new tools and guides become available.

## Package Registry

- **npm:** All Cobalt packages are published under the `@cobalt` scope
- **Versions:** Check the [Release Notes](/release-notes) for the latest release information
- **Compatibility:** See the [Getting Started for Developers](/getting-started/developers) guide for supported frameworks and versions

## Browser DevTools Tips

- Use the **Elements** panel to inspect Shadow DOM inside `<co-*>` components — expand the `#shadow-root` node to see internal structure
- The **Styles** pane shows CSS custom properties inherited by components — search for `--co-` to find active tokens
- Use **Computed** tab to see resolved token values when debugging theming issues

## Recommended VS Code Extensions

- **Lit Plugin** — Syntax highlighting, type-checking, and completions for Lit templates
- **Custom Elements Manifest Analyzer** — IntelliSense for custom element tags and attributes
- **CSS Variable Autocomplete** — Autocomplete for `--co-*` token names in stylesheets

## Related Technologies

Cobalt builds on top of these open-source projects:

| Technology       | Role in Cobalt          | Documentation                                      |
| ---------------- | ----------------------- | -------------------------------------------------- |
| Lit              | Web component framework | [lit.dev](https://lit.dev)                         |
| Lion             | Base component library  | [lion.js.org](https://lion.js.org)                 |
| Style Dictionary | Token build pipeline    | [styledictionary.com](https://styledictionary.com) |
| VitePress        | Documentation site      | [vitepress.dev](https://vitepress.dev)             |

## Troubleshooting Quick Reference

| Symptom                      | Try This                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------ |
| Component not rendering      | Confirm the import is correct and the custom element is registered             |
| Tokens not applying          | Check that `@cobalt/tokens/css/tokens.css` is imported before component styles |
| Dark mode not working        | Verify `data-theme="dark"` is set on the `<html>` element                      |
| Styles leaking or overridden | Review the [CSS Layers](/foundations/css-layers) guide for cascade order       |
| Tests failing in CI          | Run `pnpm exec playwright install` to install browser binaries                 |

## Need Help?

Visit the [Contact](/resources/contact) page for all support channels, including GitHub Discussions.
