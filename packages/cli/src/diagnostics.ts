export type DiagnosticStatus = 'pass' | 'warn' | 'fail';
export type DiagnosticSeverity = 'info' | 'warning' | 'error';

export interface DiagnosticRecord {
  id: string;
  status: DiagnosticStatus;
  severity: DiagnosticSeverity;
  message: string;
  evidence?: string;
  suggestedAction?: string;
}

export interface CommandResult<T = unknown> {
  command: string;
  cwd?: string;
  summary: {
    status: DiagnosticStatus;
    pass: number;
    warn: number;
    fail: number;
  };
  diagnostics: DiagnosticRecord[];
  data: T;
}

export interface OutputOptions {
  json?: boolean;
  quiet?: boolean;
  color?: boolean;
}

export function summarizeDiagnostics(diagnostics: DiagnosticRecord[]): CommandResult['summary'] {
  const pass = diagnostics.filter((diagnostic) => diagnostic.status === 'pass').length;
  const warn = diagnostics.filter((diagnostic) => diagnostic.status === 'warn').length;
  const fail = diagnostics.filter((diagnostic) => diagnostic.status === 'fail').length;

  return {
    status: fail > 0 ? 'fail' : warn > 0 ? 'warn' : 'pass',
    pass,
    warn,
    fail,
  };
}

export function createResult<T>({
  command,
  cwd,
  diagnostics,
  data,
}: {
  command: string;
  cwd?: string;
  diagnostics: DiagnosticRecord[];
  data: T;
}): CommandResult<T> {
  return {
    command,
    cwd,
    summary: summarizeDiagnostics(diagnostics),
    diagnostics,
    data,
  };
}

export function printResult<T>(
  result: CommandResult<T>,
  options: OutputOptions,
  out: (message?: string) => void,
  formatHuman: (result: CommandResult<T>) => string,
): void {
  if (options.json) {
    out(JSON.stringify(result, null, 2));
    return;
  }

  if (!options.quiet) {
    out(formatHuman(result));
  }
}

export function diagnosticLine(
  diagnostic: DiagnosticRecord,
  options: Pick<OutputOptions, 'color'> = {},
): string {
  const marker =
    diagnostic.status === 'pass'
      ? colorize('✓', '32', options.color)
      : diagnostic.status === 'warn'
        ? colorize('!', '33', options.color)
        : colorize('×', '31', options.color);
  const details = [diagnostic.evidence, diagnostic.suggestedAction].filter(Boolean).join(' ');

  return details
    ? `${marker} ${diagnostic.id}: ${diagnostic.message} ${details}`
    : `${marker} ${diagnostic.id}: ${diagnostic.message}`;
}

function colorize(value: string, code: string, color = false): string {
  return color ? `\u001B[${code}m${value}\u001B[0m` : value;
}
