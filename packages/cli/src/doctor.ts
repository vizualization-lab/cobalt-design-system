import type { DiagnosticRecord } from './diagnostics.js';
import { createResult } from './diagnostics.js';
import {
  cobaltComponentDependencies,
  expectedLocalPackages,
  inspectProject,
  usesCobaltComponents,
  type ProjectInspection,
} from './project-inspect.js';

export async function runDoctor(root: string) {
  const inspection = await inspectProject(root);
  const diagnostics = buildDoctorDiagnostics(inspection);

  return createResult({
    command: 'doctor',
    cwd: inspection.root,
    diagnostics,
    data: inspection,
  });
}

export function buildDoctorDiagnostics(inspection: ProjectInspection): DiagnosticRecord[] {
  const diagnostics: DiagnosticRecord[] = [];

  diagnostics.push(
    inspection.packageJsonFound
      ? pass('cobalt.package-json', 'Found package.json.', inspection.root)
      : fail(
          'cobalt.package-json',
          'Could not find package.json.',
          inspection.root,
          'Run this command from a project root or pass --cwd.',
        ),
  );

  diagnostics.push(
    inspection.cobaltDependencies.length > 0
      ? pass(
          'cobalt.dependencies',
          `Found ${inspection.cobaltDependencies.length} Cobalt package dependency entries.`,
          inspection.cobaltDependencies.map((dependency) => dependency.name).join(', '),
        )
      : fail(
          'cobalt.dependencies',
          'No @cobalt/* dependencies were found.',
          'package.json',
          'Install @cobalt/tokens and one Cobalt component package.',
        ),
  );

  diagnostics.push(
    inspection.hasTokenCss
      ? pass('cobalt.styles.tokens', 'Cobalt token CSS is imported.')
      : fail(
          'cobalt.styles.tokens',
          'Cobalt token CSS is not imported.',
          undefined,
          "Import '@cobalt/tokens/css' in the app's global stylesheet or entrypoint.",
        ),
  );

  diagnostics.push(
    inspection.hasFontCss
      ? pass('cobalt.styles.fonts', 'Cobalt font CSS is imported.')
      : warn(
          'cobalt.styles.fonts',
          'Cobalt font CSS was not found.',
          undefined,
          "Import '@cobalt/tokens/css/fonts' if the app should use Cobalt's self-hosted fonts.",
        ),
  );

  diagnostics.push(
    inspection.hasBaseCss
      ? pass('cobalt.styles.base', 'Cobalt base CSS is imported.')
      : warn(
          'cobalt.styles.base',
          'Cobalt base CSS was not found.',
          undefined,
          "Import '@cobalt/tokens/css/base' when native element defaults should use Cobalt styles.",
        ),
  );

  if (usesCobaltComponents(inspection)) {
    const triggeringPackages = cobaltComponentDependencies(inspection.cobaltDependencies)
      .map((dependency) => dependency.name)
      .join(', ');

    diagnostics.push(
      inspection.hasPreUpgradeCss
        ? pass(
            'cobalt.styles.pre-upgrade',
            'Cobalt pre-upgrade stylesheet is imported.',
            triggeringPackages,
          )
        : warn(
            'cobalt.styles.pre-upgrade',
            'Cobalt pre-upgrade stylesheet is not imported; co-* elements will flash unstyled while Lit upgrades them.',
            triggeringPackages,
            "Import '@cobalt/components/pre-upgrade.css' once in the app's global entrypoint (next to '@cobalt/tokens/css'). See the migration guide's 'Suppressing flash-of-unstyled-content' section for build-system recipes.",
          ),
    );
  }

  diagnostics.push(
    inspection.hasDataCoBase
      ? pass('cobalt.base-scope', 'Found data-co-base usage.')
      : warn(
          'cobalt.base-scope',
          'No data-co-base attribute was found.',
          undefined,
          'Add data-co-base to the app root or migrated slice when using Cobalt base styles.',
        ),
  );

  if (inspection.cobaltVersions.length > 1) {
    diagnostics.push(
      warn(
        'cobalt.versions.mismatch',
        'Multiple Cobalt dependency versions were found.',
        inspection.cobaltVersions.join(', '),
        'Align @cobalt/* packages to the same version.',
      ),
    );
  } else if (inspection.cobaltVersions.length === 1) {
    diagnostics.push(
      pass(
        'cobalt.versions.aligned',
        'Cobalt dependency versions are aligned.',
        inspection.cobaltVersions[0],
      ),
    );
  }

  if (inspection.localPackages.mode) {
    diagnostics.push(
      inspection.localPackages.directoryFound
        ? pass(
            'cobalt.local.directory',
            'Local Cobalt package directory exists.',
            inspection.localPackages.directory,
          )
        : fail(
            'cobalt.local.directory',
            'Local Cobalt package directory is missing.',
            inspection.localPackages.directory,
            'Copy the cobalt-packages folder into the project before installing dependencies.',
          ),
    );

    for (const packageName of expectedLocalPackages()) {
      const expectedPrefix = packageName.replace('@cobalt/', 'cobalt-');
      const found = inspection.localPackages.tarballs.some((tarball) =>
        tarball.startsWith(`${expectedPrefix}-`),
      );

      if (!found) {
        diagnostics.push(
          warn(
            'cobalt.local.tarball-missing',
            `Local tarball for ${packageName} was not found.`,
            inspection.localPackages.directory,
            'Copy the full Cobalt package bundle before installing dependencies.',
          ),
        );
      }
    }

    for (const tarball of inspection.localPackages.missingTarballs) {
      diagnostics.push(
        fail(
          'cobalt.local.dependency-missing',
          `Referenced local tarball is missing: ${tarball}.`,
          inspection.localPackages.directory,
          'Copy the missing tarball or regenerate the local package bundle.',
        ),
      );
    }
  }

  if (
    !inspection.localPackages.mode &&
    inspection.cobaltDependencies.length > 0 &&
    !inspection.npmrc.found
  ) {
    diagnostics.push(
      warn(
        'cobalt.registry.npmrc-missing',
        'No project .npmrc was found for registry-based Cobalt dependencies.',
        undefined,
        'Use project-level .npmrc configuration unless your environment configures the registry elsewhere.',
      ),
    );
  }

  for (const barrelImport of inspection.barrelImports) {
    diagnostics.push(
      warn(
        'cobalt.imports.barrel',
        'Found @cobalt/components barrel import.',
        barrelImport.file,
        "Prefer per-component imports like '@cobalt/components/button' in production code.",
      ),
    );
  }

  if (inspection.barrelImports.length === 0) {
    diagnostics.push(pass('cobalt.imports.subpath', 'No @cobalt/components barrel imports found.'));
  }

  return diagnostics;
}

function pass(id: string, message: string, evidence?: string): DiagnosticRecord {
  return {
    id,
    status: 'pass',
    severity: 'info',
    message,
    evidence,
  };
}

function warn(
  id: string,
  message: string,
  evidence?: string,
  suggestedAction?: string,
): DiagnosticRecord {
  return {
    id,
    status: 'warn',
    severity: 'warning',
    message,
    evidence,
    suggestedAction,
  };
}

function fail(
  id: string,
  message: string,
  evidence?: string,
  suggestedAction?: string,
): DiagnosticRecord {
  return {
    id,
    status: 'fail',
    severity: 'error',
    message,
    evidence,
    suggestedAction,
  };
}
