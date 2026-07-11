import { loadReleaseLines } from '../scripts/release-notes-lib.js';

export default {
  paths() {
    return loadReleaseLines().map((line) => ({
      params: { line: line.id, label: line.label, latestVersion: line.latestVersion },
    }));
  },
};
