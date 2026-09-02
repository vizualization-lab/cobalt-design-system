export interface PrintEntry {
  group: string;
  title: string;
  link: string;
}

export interface RenderedEntry extends PrintEntry {
  pageCount: number;
  heading: string;
}

export interface PositionedEntry extends RenderedEntry {
  startPage: number;
}

export interface PositionedGroup {
  label: string;
  dividerPage: number;
  entries: PositionedEntry[];
}

export interface BookLayout {
  coverPages: number;
  tocPages: number;
  totalPages: number;
  groups: PositionedGroup[];
}

export function groupEntries(
  entries: PrintEntry[],
): Array<{ label: string; entries: PrintEntry[] }> {
  const groups: Array<{ label: string; entries: PrintEntry[] }> = [];

  for (const entry of entries) {
    let group = groups.at(-1);
    if (!group || group.label !== entry.group) {
      group = { label: entry.group, entries: [] };
      groups.push(group);
    }
    group.entries.push(entry);
  }

  return groups;
}

/** Page numbers are displayed with the unnumbered cover omitted. */
export function calculateBookLayout(entries: RenderedEntry[], tocPages: number): BookLayout {
  const coverPages = 1;
  let physicalPage = coverPages + tocPages;
  const groups: PositionedGroup[] = [];

  for (const group of groupEntries(entries)) {
    const positioned: PositionedGroup = {
      label: group.label,
      dividerPage: physicalPage,
      entries: [],
    };
    physicalPage += 1;

    for (const entry of group.entries as RenderedEntry[]) {
      positioned.entries.push({ ...entry, startPage: physicalPage });
      physicalPage += entry.pageCount;
    }
    groups.push(positioned);
  }

  return {
    coverPages,
    tocPages,
    totalPages: physicalPage,
    groups,
  };
}

export function parseOutputArgument(args: string[], fallback: string): string {
  const outputIndex = args.indexOf('--output');
  if (outputIndex === -1) return fallback;
  const value = args[outputIndex + 1];
  if (!value || value.startsWith('--')) {
    throw new Error('Expected a file path after --output');
  }
  return value;
}
