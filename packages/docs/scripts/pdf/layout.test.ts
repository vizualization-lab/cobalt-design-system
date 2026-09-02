import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateBookLayout, groupEntries, parseOutputArgument } from './layout';

test('groupEntries preserves canonical order and adjacent groups', () => {
  const grouped = groupEntries([
    { group: 'Start', title: 'One', link: '/one' },
    { group: 'Start', title: 'Two', link: '/two' },
    { group: 'API', title: 'Three', link: '/three' },
  ]);

  assert.deepEqual(
    grouped.map((group) => [group.label, group.entries.map((entry) => entry.link)]),
    [
      ['Start', ['/one', '/two']],
      ['API', ['/three']],
    ],
  );
});

test('calculateBookLayout accounts for cover, contents, dividers, and route pages', () => {
  const layout = calculateBookLayout(
    [
      { group: 'Start', title: 'One', link: '/one', heading: 'One', pageCount: 2 },
      { group: 'Start', title: 'Two', link: '/two', heading: 'Two', pageCount: 1 },
      { group: 'API', title: 'Three', link: '/three', heading: 'Three', pageCount: 3 },
    ],
    2,
  );

  assert.equal(layout.groups[0].dividerPage, 3);
  assert.equal(layout.groups[0].entries[0].startPage, 4);
  assert.equal(layout.groups[0].entries[1].startPage, 6);
  assert.equal(layout.groups[1].dividerPage, 7);
  assert.equal(layout.groups[1].entries[0].startPage, 8);
  assert.equal(layout.totalPages, 11);
});

test('parseOutputArgument uses a default and validates explicit values', () => {
  assert.equal(parseOutputArgument([], '/default.pdf'), '/default.pdf');
  assert.equal(parseOutputArgument(['--output', 'custom.pdf'], '/default.pdf'), 'custom.pdf');
  assert.throws(() => parseOutputArgument(['--output'], '/default.pdf'), /file path/);
});
