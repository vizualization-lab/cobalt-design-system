export interface NavItem {
  text: string;
  link?: string;
  icon?: string;
  children?: NavItem[];
  defaultOpen?: boolean;
}

export interface NavGroup {
  label: string;
  icon: string;
  items: NavItem[];
  defaultOpen?: boolean;
  /** Short label used in the rail when the full label is too long. */
  railLabel?: string;
}

export const navigation: NavGroup[] = [
  {
    label: 'Get Started',
    icon: 'rocket-launch',
    defaultOpen: false,
    items: [
      { text: 'Overview', link: '/getting-started/' },
      { text: 'For Designers', link: '/getting-started/designers' },
      { text: 'For Developers', link: '/getting-started/developers' },
      { text: 'For Product Managers', link: '/getting-started/product-managers' },
    ],
  },
  {
    label: 'Foundations',
    railLabel: 'Foundations',
    icon: 'stacks',
    defaultOpen: false,
    items: [
      { text: 'Overview', link: '/foundations/' },
      { text: 'Colors', link: '/foundations/colors' },
      { text: 'Typography', link: '/foundations/typography' },
      { text: 'Spacing', link: '/foundations/spacing' },
      { text: 'Elevation', link: '/foundations/elevation' },
      { text: 'Motion', link: '/foundations/motion' },
      { text: 'Breakpoints', link: '/foundations/breakpoints' },
      { text: 'Iconography', link: '/foundations/iconography' },
      { text: 'Accessibility', link: '/foundations/accessibility' },
      { text: 'Utility Classes', link: '/foundations/utilities' },
      { text: 'CSS Layers', link: '/foundations/css-layers' },
      { text: 'Tailwind Integration', link: '/foundations/tailwind' },
      { text: 'Token Structure', link: '/tokens/structure' },
      { text: 'Figma Alignment', link: '/tokens/figma-alignment' },
      { text: 'Figma Handoff', link: '/tokens/figma-handoff' },
      { text: 'Token Reference', link: '/tokens/' },
    ],
  },
  {
    label: 'Components',
    icon: 'widgets',
    defaultOpen: true,
    items: [
      { text: 'Overview', link: '/components/' },
      { text: 'Button', link: '/components/button' },
      { text: 'Button Icon', link: '/components/button-icon' },
      { text: 'Icon', link: '/components/icon' },
      {
        text: 'Forms',
        defaultOpen: true,
        children: [
          { text: 'Combo Box', link: '/components/combobox' },
          { text: 'Input', link: '/components/input' },
          { text: 'Form', link: '/components/form' },
          { text: 'List Box', link: '/components/listbox' },
          { text: 'Option', link: '/components/option' },
          { text: 'Text Area', link: '/components/textarea' },
        ],
      },
    ],
  },
  {
    label: 'Patterns',
    icon: 'grid-view',
    defaultOpen: false,
    items: [
      { text: 'Overview', link: '/patterns/' },
      { text: 'Forms & Validation', link: '/patterns/forms' },
      { text: 'Navigation', link: '/patterns/navigation' },
      { text: 'Data Display', link: '/patterns/data-display' },
      { text: 'Feedback & Status', link: '/patterns/feedback' },
      { text: 'Layout', link: '/patterns/layout' },
    ],
  },
  {
    label: 'Guidance',
    icon: 'info',
    defaultOpen: false,
    items: [
      { text: 'Overview', link: '/guidance/' },
      { text: 'Design Principles', link: '/guidance/principles' },
      { text: 'Content & Writing', link: '/guidance/content' },
      { text: 'Migration Guides', link: '/guidance/migration' },
    ],
  },
  {
    label: 'Contributing',
    railLabel: 'Contribute',
    icon: 'person-add',
    defaultOpen: false,
    items: [
      { text: 'Overview', link: '/contributing/' },
      { text: 'How to Contribute', link: '/contributing/how-to-contribute' },
      { text: 'Component Proposals', link: '/contributing/component-proposal' },
      { text: 'Development Setup', link: '/contributing/development-setup' },
      { text: 'Coding Standards', link: '/contributing/coding-standards' },
      { text: 'Design Contributions', link: '/contributing/design-contribution' },
      { text: 'Designing Icons', link: '/contributing/designing-icons' },
      { text: 'Versioning & Releases', link: '/contributing/versioning' },
    ],
  },
  {
    label: 'Resources',
    icon: 'auto-stories',
    defaultOpen: false,
    items: [
      { text: 'Overview', link: '/resources/' },
      { text: 'Contact', link: '/resources/contact' },
      { text: 'For Developers', link: '/resources/developers' },
      { text: 'For Designers', link: '/resources/designers' },
    ],
  },
  {
    label: 'Changelog',
    icon: 'description',
    defaultOpen: false,
    items: [{ text: 'Release Notes', link: '/changelog' }],
  },
];

export interface FlatNavItem {
  text: string;
  link: string;
  group: string;
}

function flattenItems(items: NavItem[], group: string): FlatNavItem[] {
  return items.flatMap((item) => {
    if (item.children) return flattenItems(item.children, group);
    if (!item.link) return [];
    return [{ text: item.text, link: item.link, group }];
  });
}

export const flatNavItems: FlatNavItem[] = navigation.flatMap((group) =>
  flattenItems(group.items, group.label),
);

/**
 * Derive the VitePress `themeConfig.sidebar` array from the navigation data.
 */
type SidebarItem = { text: string; link?: string; collapsed?: boolean; items?: SidebarItem[] };

function mapNavItems(items: NavItem[]): SidebarItem[] {
  return items
    .filter((item) => item.link || item.children)
    .map((item) => {
      if (item.children) {
        return {
          text: item.text,
          collapsed: !item.defaultOpen,
          items: mapNavItems(item.children),
        };
      }
      return { text: item.text, link: item.link! };
    });
}

export function toVitePressSidebar(): { text: string; items: SidebarItem[] }[] {
  return navigation.map((group) => ({
    text: group.label,
    items: mapNavItems(group.items),
  }));
}

/**
 * Derive the VitePress `themeConfig.nav` array from the navigation data.
 * Picks the groups that make sense as top-level nav entries (skips Overview and Changelog).
 */
const topNavGroups = ['Get Started', 'Foundations', 'Components', 'Patterns', 'Guidance'];

export function toVitePressNav(): { text: string; link: string }[] {
  return navigation
    .filter((group) => topNavGroups.includes(group.label))
    .map((group) => {
      const firstLink = group.items.find((item) => item.link)?.link ?? '/';
      return {
        text: group.label,
        link: firstLink,
      };
    });
}
