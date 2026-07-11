import releaseLines from '../../.generated/release-lines.json';

export interface NavItem {
  text: string;
  link?: string;
  icon?: string;
  children?: NavItem[];
  defaultOpen?: boolean;
  /** Small chip rendered after the label (e.g. "Latest"). */
  badge?: string;
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
      { text: 'SCSS Integration', link: '/foundations/scss' },
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
      { text: 'Mode Toggle', link: '/components/mode-toggle' },
      {
        text: 'Layout',
        defaultOpen: false,
        children: [
          { text: 'App Shell', link: '/components/app-shell' },
          { text: 'Banner', link: '/components/banner' },
          { text: 'Card', link: '/components/card' },
        ],
      },
      {
        text: 'Navigation',
        defaultOpen: false,
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
        defaultOpen: false,
        children: [
          { text: 'Checkbox Group', link: '/components/checkbox-group' },
          { text: 'Combo Box', link: '/components/combobox' },
          { text: 'Form', link: '/components/form' },
          { text: 'Input', link: '/components/input' },
          { text: 'Label', link: '/components/label' },
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
      { text: 'Starter Templates', link: '/guidance/starter-templates' },
      { text: 'Adoption Plan', link: '/guidance/adoption' },
      { text: 'Element Mapping', link: '/guidance/element-mapping' },
      { text: 'Migration Guide', link: '/guidance/migration' },
      { text: 'Design Principles', link: '/guidance/principles' },
      { text: 'Content & Writing', link: '/guidance/content' },
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
      { text: 'Strategy', link: '/resources/strategy' },
      { text: 'Artifacts', link: '/resources/artifacts' },
      { text: 'Cobalt CLI', link: '/resources/cli' },
      { text: 'Contact', link: '/resources/contact' },
      { text: 'For Developers', link: '/resources/developers' },
      { text: 'For Designers', link: '/resources/designers' },
    ],
  },
  {
    label: 'Release Notes',
    railLabel: 'Releases',
    icon: 'description',
    defaultOpen: false,
    items: [
      { text: 'Overview', link: '/release-notes' },
      // Release lines (major.minor) grouped by major version, generated at
      // predev/prebuild from the root CHANGELOG.md into
      // .generated/release-lines.json. The newest major starts expanded;
      // older majors start collapsed so the menu scales with history.
      ...buildReleaseLineNav(),
    ],
  },
];

/** Group release lines by major version for the Release Notes nav. */
function buildReleaseLineNav(): NavItem[] {
  const majors = new Map<string, NavItem[]>();

  for (const [index, line] of releaseLines.entries()) {
    const major = line.label.split('.')[0]; // "v1.0" -> "v1"
    if (!majors.has(major)) majors.set(major, []);
    majors.get(major)!.push({
      text: `${line.label} releases (${line.releaseCount})`,
      link: `/release-notes/${line.id}`,
      // release-lines.json is sorted newest first, so index 0 is latest.
      ...(index === 0 ? { badge: 'Latest' } : {}),
    });
  }

  return [...majors.entries()].map(([major, children], majorIndex) => ({
    text: `${major} releases`,
    children,
    defaultOpen: majorIndex === 0,
  }));
}

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
