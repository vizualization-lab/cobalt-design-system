import path from 'node:path';
import { localPackagesDirectory } from './constants.js';
import type { ResolvedNewOptions } from './types.js';

export function nextCommands(targetDir: string, options: ResolvedNewOptions): string[] {
  const relativeTarget = path.relative(process.cwd(), targetDir) || '.';
  const lines: string[] = [];

  if (relativeTarget !== '.') {
    lines.push(`cd ${shellQuote(relativeTarget)}`);
  }

  if (options.cobaltSource === 'local') {
    lines.push(`copy cobalt-*.tgz files into ./${localPackagesDirectory}/`);
  }

  lines.push('npm install', 'npm run dev');
  return lines;
}

export function shellQuote(value: string): string {
  if (/^[\w./-]+$/.test(value)) {
    return value;
  }

  return `'${value.replaceAll("'", "'\\''")}'`;
}
