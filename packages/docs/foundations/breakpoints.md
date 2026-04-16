# Breakpoints

Cobalt defines five responsive breakpoints that align with common device categories. Use them to adapt layouts, spacing, and typography as the viewport changes.

## Breakpoint scale

| Token | Min-width | Target devices                      |
| ----- | --------- | ----------------------------------- |
| `sm`  | 640 px    | Large phones in landscape           |
| `md`  | 768 px    | Tablets in portrait                 |
| `lg`  | 1024 px   | Tablets in landscape, small laptops |
| `xl`  | 1280 px   | Desktops                            |
| `2xl` | 1536 px   | Large desktops, ultra-wide monitors |

> **Tip:** Cobalt follows a **mobile-first** approach. Base styles target the smallest screens; breakpoint media queries layer on enhancements for wider viewports.

## Usage in CSS

### Media queries

```css
.co-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--co-space-4);
}

@media (min-width: 640px) {
  .co-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .co-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--co-space-6);
  }
}

@media (min-width: 1280px) {
  .co-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Container queries

For component-level responsiveness, Cobalt also supports CSS container queries. Components declare a containment context and adapt to the container width rather than the viewport:

```css
.co-card-grid {
  container-type: inline-size;
}

@container (min-width: 640px) {
  .co-card {
    flex-direction: row;
  }
}
```

## Usage in JavaScript

The `@cobalt/utils` package exports breakpoint values for JS-based responsive logic:

```tsx
import { breakpoints } from '@cobalt/utils';

// breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 }

function useMediaQuery(bp: keyof typeof breakpoints): boolean {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpoints[bp]}px)`);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [bp]);

  return matches;
}
```

### Example

```tsx
function Navigation() {
  const isDesktop = useMediaQuery('lg');

  return isDesktop ? <SideNav /> : <MobileDrawer />;
}
```

## Design guidelines

| Guideline                 | Detail                                                                       |
| ------------------------- | ---------------------------------------------------------------------------- |
| Mobile-first              | Write base styles for the narrowest screen, then add `min-width` queries.    |
| Avoid orientation queries | Use width breakpoints instead — they cover more real-world cases.            |
| Test at edges             | Verify layouts at exactly 640, 768, 1024, 1280, and 1536 px.                 |
| Combine with spacing      | Increase `--co-space-*` values at wider breakpoints for comfortable density. |
| Don't hide content        | Responsive design should re-arrange content, not remove it entirely.         |

## Best practices

1. **Limit breakpoint-specific overrides.** If a component needs more than three breakpoint blocks, consider simplifying the layout.
2. **Prefer flexible layouts.** Use `flex-wrap`, `minmax()` in grid, and `clamp()` before reaching for media queries.
3. **Keep breakpoint values in sync.** Always import from `@cobalt/utils` or reference the token — never hard-code pixel values in multiple places.

## Related

- [Utility Classes](./utilities.md) — responsive prefix utilities (`sm:`, `md:`, `lg:`, `xl:`)
- [Spacing](./spacing.md) — responsive spacing patterns
- [Typography](./typography.md) — font sizes across viewports
