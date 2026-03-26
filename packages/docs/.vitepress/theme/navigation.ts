export interface NavItem {
  text: string;
  link?: string;
  icon?: string;
}

export interface NavGroup {
  label: string;
  icon: string;
  items: NavItem[];
  defaultOpen?: boolean;
}

export const navigation: NavGroup[] = [
  {
    label: 'Overview',
    icon: 'home',
    defaultOpen: true,
    items: [{ text: 'Introduction', link: '/' }],
  },
  {
    label: 'Get Started',
    icon: 'rocket',
    defaultOpen: false,
    items: [
      { text: 'Overview', link: '/getting-started/' },
      { text: 'For Designers', link: '/getting-started/designers' },
      { text: 'For Developers', link: '/getting-started/developers' },
      { text: 'For Product Managers', link: '/getting-started/product-managers' },
    ],
  },
  {
    label: 'Design Foundations',
    icon: 'palette',
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
    ],
  },
  {
    label: 'Components',
    icon: 'components',
    defaultOpen: true,
    items: [
      { text: 'Button', link: '/components/button' },
      { text: 'Icon', link: '/components/icon' },
    ],
  },
  {
    label: 'Patterns',
    icon: 'patterns',
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
    icon: 'guidance',
    defaultOpen: false,
    items: [
      { text: 'Overview', link: '/guidance/' },
      { text: 'Design Principles', link: '/guidance/principles' },
      { text: 'Content & Writing', link: '/guidance/content' },
      { text: 'Developer Onboarding', link: '/guidance/developer-onboarding' },
      { text: 'Migration Guides', link: '/guidance/migration' },
    ],
  },
  {
    label: 'Contributing',
    icon: 'contributing',
    defaultOpen: false,
    items: [
      { text: 'Overview', link: '/contributing/' },
      { text: 'How to Contribute', link: '/contributing/how-to-contribute' },
      { text: 'Component Proposals', link: '/contributing/component-proposal' },
      { text: 'Development Setup', link: '/contributing/development-setup' },
      { text: 'Coding Standards', link: '/contributing/coding-standards' },
      { text: 'Design Contributions', link: '/contributing/design-contribution' },
      { text: 'Versioning & Releases', link: '/contributing/versioning' },
    ],
  },
  {
    label: 'Changelog',
    icon: 'changelog',
    defaultOpen: false,
    items: [{ text: 'Release Notes', link: '/changelog' }],
  },
];

export interface FlatNavItem {
  text: string;
  link: string;
  group: string;
}

export const flatNavItems: FlatNavItem[] = navigation.flatMap((group) =>
  group.items
    .filter((item): item is NavItem & { link: string } => !!item.link)
    .map((item) => ({ text: item.text, link: item.link, group: group.label })),
);
