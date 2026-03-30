import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const changelogsDir = path.resolve(__dirname, '../.generated/changelogs');

export interface ChangelogEntry {
  hash: string;
  type: string;
  description: string;
  date: string;
}

export interface ComponentChangelog {
  component: string;
  entries: ChangelogEntry[];
}

export type ComponentChangelogData = Record<string, ComponentChangelog>;

export default {
  watch: ['../.generated/changelogs/*.json'],
  load(): ComponentChangelogData {
    const data: ComponentChangelogData = {};

    if (!fs.existsSync(changelogsDir)) {
      return data;
    }

    const files = fs.readdirSync(changelogsDir).filter((f) => f.endsWith('.json'));

    for (const file of files) {
      const content = fs.readFileSync(path.join(changelogsDir, file), 'utf-8');
      const changelog: ComponentChangelog = JSON.parse(content);
      data[changelog.component] = changelog;
    }

    return data;
  },
};
