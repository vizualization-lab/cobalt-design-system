export type CobaltModePreference = 'light' | 'dark' | 'auto';
export type CobaltResolvedMode = 'light' | 'dark';

export interface CobaltThemeStorageOptions {
  storageNamespace?: string;
}

export interface CobaltThemeOptions extends CobaltThemeStorageOptions {
  persist?: boolean;
}

export declare function resolveMode(mode?: CobaltModePreference): CobaltResolvedMode;

export declare function getStoredMode(
  options?: CobaltThemeStorageOptions,
): CobaltModePreference | null;

export declare function setStoredMode(
  mode: CobaltModePreference,
  options?: CobaltThemeStorageOptions,
): void;

export declare function clearStoredMode(options?: CobaltThemeStorageOptions): void;

export declare function setTheme(
  theme: string,
  mode?: CobaltModePreference,
  options?: CobaltThemeOptions,
): void;

export declare function getTheme(): {
  theme: string;
  mode: CobaltResolvedMode;
};
