export type CobaltTokenTier = 'primitive' | 'semantic' | 'component';

export interface CobaltTokenThemeValue {
  theme: string;
  mode: 'light' | 'dark' | string;
  value: string;
}

export interface CobaltToken {
  name: `--co-${string}`;
  category: string;
  tier: CobaltTokenTier;
  value: string;
  resolvedValue?: string;
  description?: string;
  themeModes?: CobaltTokenThemeValue[];
}

export interface CobaltUtility {
  className: string;
  css: string;
  tokenRefs: string[];
  responsivePrefix?: 'sm' | 'md' | 'lg' | 'xl' | string;
  description?: string;
}

export interface CobaltToolingManifestV1 {
  schemaVersion: 1;
  cobaltVersion: string;
  tokens: CobaltToken[];
  utilities: CobaltUtility[];
}

export type MetadataSource = 'auto' | 'workspace' | 'bundled';

export interface MetadataSnapshot {
  manifest: CobaltToolingManifestV1;
  source: 'workspace' | 'bundled';
  uri?: string;
}

export function isCobaltToolingManifest(value: unknown): value is CobaltToolingManifestV1 {
  if (!value || typeof value !== 'object') return false;

  const candidate = value as Partial<CobaltToolingManifestV1>;
  return (
    candidate.schemaVersion === 1 &&
    typeof candidate.cobaltVersion === 'string' &&
    Array.isArray(candidate.tokens) &&
    Array.isArray(candidate.utilities)
  );
}
