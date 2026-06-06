import { mkdir, readFile, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { configKeys, type ConfigKey } from './constants.js';
import type { CobaltConfig } from './types.js';

export function resolveConfigPath(env: NodeJS.ProcessEnv = process.env): string {
  return env.COBALT_CONFIG || path.join(os.homedir(), '.cobalt.config.json');
}

export async function readConfig(configPath = resolveConfigPath()): Promise<CobaltConfig> {
  try {
    return JSON.parse(await readFile(configPath, 'utf8')) as CobaltConfig;
  } catch (error) {
    if (isNodeError(error) && error.code === 'ENOENT') {
      return {};
    }

    if (error instanceof SyntaxError) {
      throw new Error(`Could not parse Cobalt config at ${configPath}: ${error.message}`);
    }

    throw error;
  }
}

export async function writeConfig(
  config: CobaltConfig,
  configPath = resolveConfigPath(),
): Promise<void> {
  await mkdir(path.dirname(configPath), { recursive: true });
  await writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`);
}

export function getConfigValue(config: CobaltConfig, key: ConfigKey): string | undefined {
  assertKnownConfigKey(key);

  return key.split('.').reduce<unknown>((current, part) => {
    if (current && typeof current === 'object') {
      return (current as Record<string, unknown>)[part];
    }

    return undefined;
  }, config) as string | undefined;
}

export function setConfigValue(config: CobaltConfig, key: ConfigKey, value: string): CobaltConfig {
  assertKnownConfigKey(key);

  const next = structuredClone(config ?? {});
  const parts = key.split('.');
  let current = next as Record<string, unknown>;

  for (const part of parts.slice(0, -1)) {
    current[part] = current[part] ?? {};
    current = current[part] as Record<string, unknown>;
  }

  current[parts[parts.length - 1]] = value;
  return next;
}

export function unsetConfigValue(config: CobaltConfig, key: ConfigKey): CobaltConfig {
  assertKnownConfigKey(key);

  const next = structuredClone(config ?? {});
  const parts = key.split('.');
  let current: Record<string, unknown> | undefined = next as Record<string, unknown>;

  for (const part of parts.slice(0, -1)) {
    current = current?.[part] as Record<string, unknown> | undefined;
    if (!current) {
      return next;
    }
  }

  delete current[parts[parts.length - 1]];
  return next;
}

export function assertKnownConfigKey(key: string): asserts key is ConfigKey {
  if (!(configKeys as readonly string[]).includes(key)) {
    throw new Error(`Unknown config key "${key}". Choose one of: ${configKeys.join(', ')}.`);
  }
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && 'code' in error;
}
