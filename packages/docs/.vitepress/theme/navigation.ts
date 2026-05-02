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
      { text: 'Token Reference', link: '/tokens/' },
    ],
  },
  {
    label: 'Components',
    icon: 'widgets',
    defaultOpen: true,
    items: [
      { text: 'Overview', link: '/components/' },
      { text: 'Component Status', link: '/components/status' },
      { text: 'Button', link: '/components/button' },
      { text: 'Button Icon', link: '/components/button-icon' },
      { text: 'Icon', link: '/components/icon' },
      { text: 'Input Pill', link: '/components/input-pill' },
      {
        text: 'Layout',
        defaultOpen: true,
        children: [
          { text: 'App Shell', link: '/components/app-shell' },
          { text: 'Banner', link: '/components/banner' },
          { text: 'Card', link: '/components/card' },
        ],
      },
      {
        text: 'Navigation',
        defaultOpen: true,
        children: [
          { text: 'Navigation Header Bar', link: '/components/nav-header-bar' },
          { text: 'Navigation Rail Bar', link: '/components/nav-rail-bar' },
          { text: 'Navigation Rail Item', link: '/components/nav-rail-item' },
          { text: 'Navigation Drawer', link: '/components/nav-drawer' },
          { text: 'Navigation Drawer Item', link: '/components/nav-drawer-item' },
        ],
      },
      {
        text: 'Forms',
        defaultOpen: true,
        children: [
          { text: 'Checkbox Group', link: '/components/checkbox-group' },
          { text: 'Combo Box', link: '/components/combobox' },
          { text: 'Input', link: '/components/input' },
          { text: 'Form', link: '/components/form' },
          { text: 'List Box', link: '/components/listbox' },
          { text: 'Option', link: '/components/option' },
          { text: 'Radio Group', link: '/components/radio-group' },
          { text: 'Select', link: '/components/select' },
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
    label: 'FAQs',
    railLabel: 'FAQs',
    icon: 'quiz',
    defaultOpen: false,
    items: [
      { text: 'Overview', link: '/faqs/' },
      { text: 'Installation & Setup', link: '/faqs/installation-and-setup' },
      { text: 'Figma & Design Access', link: '/faqs/figma-and-design-access' },
      { text: 'Tokens & Theming', link: '/faqs/tokens-and-theming' },
      { text: 'Utilities & Styling', link: '/faqs/utilities-and-styling' },
      { text: 'Help, Feedback & Support', link: '/faqs/help-feedback-and-support' },
      { text: 'Contributing & Roadmap', link: '/faqs/contributing-and-roadmap' },
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
      { text: 'Figma Handoff', link: '/contributing/figma-handoff' },
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
      { text: 'About Cobalt', link: '/resources/about-cobalt' },
      { text: 'Contact', link: '/resources/contact' },
      { text: 'For Developers', link: '/resources/developers' },
      { text: 'For Designers', link: '/resources/designers' },
    ],
  },
  {
    label: 'Changelog',
    icon: 'description',
    defaultOpen: false,
    items: [{ text: 'Release Notes', link: '/release-notes' }],
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
const topNavGroups = ['Get Started', 'Foundations', 'Components', 'Patterns', 'Guidance', 'FAQs'];

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
