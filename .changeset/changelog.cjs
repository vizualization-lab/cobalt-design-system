/**
 * Custom changesets changelog generator.
 *
 * Differences from the default `@changesets/cli/changelog`:
 * - No commit SHA prefixes — end users reading release notes don't need
 *   them, and the aggregated docs changelog dedupes by summary text.
 * - No "Updated dependencies" lines — internal lockstep bumps are noise
 *   in a fixed-version monorepo where every package shares one version.
 *
 * Release dates are handled by scripts/aggregate-changelog.js (the
 * changesets changelog API cannot modify version headings).
 */

/** @type {import('@changesets/types').ChangelogFunctions['getReleaseLine']} */
async function getReleaseLine(changeset) {
  const [firstLine, ...futureLines] = changeset.summary
    .split('\n')
    .map((line) => line.trimEnd());

  let returnVal = `- ${firstLine}`;
  if (futureLines.length > 0) {
    returnVal += `\n${futureLines.map((line) => `  ${line}`).join('\n')}`;
  }

  return returnVal;
}

/** @type {import('@changesets/types').ChangelogFunctions['getDependencyReleaseLine']} */
async function getDependencyReleaseLine() {
  return '';
}

const changelogFunctions = { getReleaseLine, getDependencyReleaseLine };

module.exports = changelogFunctions;
module.exports.default = changelogFunctions;
