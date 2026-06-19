import { existsSync } from 'node:fs';
import { cp, mkdir, readFile, readdir, rm } from 'node:fs/promises';
import path from 'node:path';

export const KNOWN_SKILLS = [
  {
    name: 'cobalt',
    description: 'Cobalt design system agent skill',
    sourceDir: 'skills/cobalt',
  },
] as const;

export type SkillName = (typeof KNOWN_SKILLS)[number]['name'];

export const harnessNames = ['codex', 'claude'] as const;
export type HarnessName = (typeof harnessNames)[number];

export type SkillState = 'not-installed' | 'current' | 'outdated';

export type HarnessOutcomeKind =
  | 'installed'
  | 'current'
  | 'updated'
  | 'skipped'
  | 'missing'
  | 'removed'
  | 'removed-with-backup'
  | 'absent'
  | 'failed';

export interface HarnessStatus {
  harness: HarnessName;
  path: string;
  state: SkillState;
  modifiedFiles: string[];
}

export interface SkillStatus {
  name: SkillName;
  description: string;
  harnesses: HarnessStatus[];
}

export interface HarnessOutcome {
  harness: HarnessName;
  path: string;
  outcome: HarnessOutcomeKind;
  backups: string[];
  errorMessage?: string;
}

interface SkillIO {
  targetRoot: string;
  packageRoot: string;
  skillName?: SkillName;
}

interface HarnessIO extends SkillIO {
  harness: HarnessName;
}

export function getSkillDefinition(name: SkillName = 'cobalt') {
  const skill = KNOWN_SKILLS.find((entry) => entry.name === name);
  if (!skill) {
    throw new Error(`Unknown Cobalt skill "${name}".`);
  }
  return skill;
}

export function harnessTargetDir(
  harness: HarnessName,
  targetRoot: string,
  skillName: SkillName = 'cobalt',
): string {
  const harnessDir = harness === 'codex' ? '.codex' : '.claude';
  return path.join(targetRoot, harnessDir, 'skills', skillName);
}

export async function computeSkillStatus({
  targetRoot,
  packageRoot,
  skillName = 'cobalt',
}: SkillIO): Promise<SkillStatus> {
  const skill = getSkillDefinition(skillName);
  const sourceDir = path.join(packageRoot, skill.sourceDir);
  const harnesses: HarnessStatus[] = [];

  for (const harness of harnessNames) {
    const target = harnessTargetDir(harness, targetRoot, skillName);
    harnesses.push(await computeHarnessStatus({ harness, sourceDir, target }));
  }

  return {
    name: skill.name,
    description: skill.description,
    harnesses,
  };
}

export async function installSkill({
  targetRoot,
  packageRoot,
  harness,
  skillName = 'cobalt',
}: HarnessIO): Promise<HarnessOutcome> {
  const skill = getSkillDefinition(skillName);
  const sourceDir = path.join(packageRoot, skill.sourceDir);
  const target = harnessTargetDir(harness, targetRoot, skillName);

  try {
    if (existsSync(target)) {
      // Caller is responsible for deciding update vs no-op when an install exists.
      return { harness, path: target, outcome: 'current', backups: [] };
    }

    await copySkillTree(sourceDir, target, harness);
    return { harness, path: target, outcome: 'installed', backups: [] };
  } catch (error) {
    return failureOutcome(harness, target, error);
  }
}

export async function updateSkill({
  targetRoot,
  packageRoot,
  harness,
  skillName = 'cobalt',
}: HarnessIO): Promise<HarnessOutcome> {
  const skill = getSkillDefinition(skillName);
  const sourceDir = path.join(packageRoot, skill.sourceDir);
  const target = harnessTargetDir(harness, targetRoot, skillName);

  try {
    const status = await computeHarnessStatus({ harness, sourceDir, target });

    if (status.state === 'not-installed') {
      return { harness, path: target, outcome: 'missing', backups: [] };
    }

    if (status.state === 'current') {
      return { harness, path: target, outcome: 'current', backups: [] };
    }

    const backups: string[] = [];
    for (const relativePath of status.modifiedFiles) {
      const installedFile = path.join(target, relativePath);
      if (existsSync(installedFile)) {
        await rm(`${installedFile}.bak`, { force: true });
        await cp(installedFile, `${installedFile}.bak`);
        backups.push(`${relativePath}.bak`);
      }
    }

    await copySkillTree(sourceDir, target, harness);
    return { harness, path: target, outcome: 'updated', backups };
  } catch (error) {
    return failureOutcome(harness, target, error);
  }
}

export async function removeSkill({
  targetRoot,
  packageRoot,
  harness,
  skillName = 'cobalt',
}: HarnessIO): Promise<HarnessOutcome> {
  const skill = getSkillDefinition(skillName);
  const sourceDir = path.join(packageRoot, skill.sourceDir);
  const target = harnessTargetDir(harness, targetRoot, skillName);

  try {
    const status = await computeHarnessStatus({ harness, sourceDir, target });

    if (status.state === 'not-installed') {
      return { harness, path: target, outcome: 'absent', backups: [] };
    }

    const backups: string[] = [];
    if (status.state === 'outdated') {
      const backupRoot = `${target}.bak`;
      await rm(backupRoot, { recursive: true, force: true });
      for (const relativePath of status.modifiedFiles) {
        const installedFile = path.join(target, relativePath);
        if (existsSync(installedFile)) {
          const backupFile = path.join(backupRoot, relativePath);
          await mkdir(path.dirname(backupFile), { recursive: true });
          await cp(installedFile, backupFile);
          backups.push(path.posix.join(path.basename(backupRoot), toPosix(relativePath)));
        }
      }
    }

    await rm(target, { recursive: true, force: true });
    return {
      harness,
      path: target,
      outcome: backups.length > 0 ? 'removed-with-backup' : 'removed',
      backups,
    };
  } catch (error) {
    return failureOutcome(harness, target, error);
  }
}

interface HarnessStatusInput {
  harness: HarnessName;
  sourceDir: string;
  target: string;
}

async function computeHarnessStatus({
  harness,
  sourceDir,
  target,
}: HarnessStatusInput): Promise<HarnessStatus> {
  if (!existsSync(target)) {
    return { harness, path: target, state: 'not-installed', modifiedFiles: [] };
  }

  const bundledFiles = await enumerateBundledFiles(sourceDir, harness);
  const modifiedFiles: string[] = [];

  for (const relativePath of bundledFiles) {
    const sourceFile = path.join(sourceDir, relativePath);
    const targetFile = path.join(target, relativePath);

    if (!existsSync(targetFile)) {
      modifiedFiles.push(relativePath);
      continue;
    }

    const [sourceBytes, targetBytes] = await Promise.all([
      readFile(sourceFile),
      readFile(targetFile),
    ]);
    if (!sourceBytes.equals(targetBytes)) {
      modifiedFiles.push(relativePath);
    }
  }

  return {
    harness,
    path: target,
    state: modifiedFiles.length > 0 ? 'outdated' : 'current',
    modifiedFiles: modifiedFiles.map(toPosix).sort(),
  };
}

async function enumerateBundledFiles(sourceDir: string, harness: HarnessName): Promise<string[]> {
  const results: string[] = [];

  async function walk(currentDir: string, relative: string): Promise<void> {
    const entries = await readdir(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const entryRelative = relative ? path.join(relative, entry.name) : entry.name;
      if (harness === 'claude' && entryRelative === 'agents') {
        continue;
      }
      if (entry.isDirectory()) {
        await walk(path.join(currentDir, entry.name), entryRelative);
      } else if (entry.isFile()) {
        results.push(entryRelative);
      }
    }
  }

  await walk(sourceDir, '');
  return results;
}

async function copySkillTree(
  sourceDir: string,
  target: string,
  harness: HarnessName,
): Promise<void> {
  await mkdir(path.dirname(target), { recursive: true });

  if (harness === 'codex') {
    await cp(sourceDir, target, { recursive: true, force: true });
    return;
  }

  await mkdir(target, { recursive: true });
  const entries = await readdir(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'agents') {
      continue;
    }
    await cp(path.join(sourceDir, entry.name), path.join(target, entry.name), {
      recursive: entry.isDirectory(),
      force: true,
    });
  }
}

function toPosix(value: string): string {
  return value.split(path.sep).join('/');
}

function failureOutcome(harness: HarnessName, target: string, error: unknown): HarnessOutcome {
  return {
    harness,
    path: target,
    outcome: 'failed',
    backups: [],
    errorMessage: error instanceof Error ? error.message : String(error),
  };
}
