import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const packageRoot = path.resolve(fileURLToPath(import.meta.url), '../..');

test('build emits per-icon declaration modules for export patterns', async () => {
  const build = spawnSync(process.execPath, ['scripts/build-registry.js'], {
    cwd: packageRoot,
    encoding: 'utf8',
  });

  assert.equal(build.status, 0, build.stderr || build.stdout);

  const packageJson = JSON.parse(await readFile(path.join(packageRoot, 'package.json'), 'utf8'));
  assert.equal(packageJson.exports['./*'].types, './dist/icons/*.d.ts');
  assert.equal(packageJson.exports['./animated/*'].types, './dist/animated/*.d.ts');

  const homeTypes = await readFile(path.join(packageRoot, 'dist/icons/home.d.ts'), 'utf8');
  assert.match(homeTypes, /export \{ descriptor as home \};/);
  assert.match(homeTypes, /export default descriptor;/);
  assert.doesNotMatch(homeTypes, /declare module/);

  await assert.rejects(() => access(path.join(packageRoot, 'dist/icons.d.ts')), { code: 'ENOENT' });

  const reservedWordTypes = await readFile(
    path.join(packageRoot, 'dist/icons/delete.d.ts'),
    'utf8',
  );
  assert.match(reservedWordTypes, /export \{ descriptor as _delete \};/);
  assert.match(reservedWordTypes, /export default descriptor;/);
  assert.doesNotMatch(
    reservedWordTypes,
    /const _default: IconDescriptor;\s*export default _default;/,
  );
});
