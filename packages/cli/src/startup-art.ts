const cobaltWordmark = String.raw`
 ██████╗ ██████╗ ██████╗  █████╗ ██╗  ████████╗
██╔════╝██╔═══██╗██╔══██╗██╔══██╗██║  ╚══██╔══╝
██║     ██║   ██║██████╔╝███████║██║     ██║
██║     ██║   ██║██╔══██╗██╔══██║██║     ██║
╚██████╗╚██████╔╝██████╔╝██║  ██║███████╗██║
 ╚═════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝
`.replace(/^\n|\n$/g, '');

interface StartupArtOptions {
  color?: boolean;
  version: string;
}

export function renderStartupArt({ color = false, version }: StartupArtOptions): string {
  const wordmark = colorizeLines(
    cobaltWordmark,
    ['38;5;159', '38;5;153', '38;5;117', '38;5;111', '38;5;75', '38;5;69'],
    color,
  );
  const brand = colorize('COBALT', '38;5;111', color);
  const cli = colorize(`@cobalt/cli v${version}`, '1;97', color);
  const versionLine = `${brand}  ${cli}`;

  return `\n${wordmark}\n\n${versionLine}`;
}

export function shouldUseColor({
  env,
  isTty,
}: {
  env: NodeJS.ProcessEnv;
  isTty: boolean;
}): boolean {
  return isTty && env.NO_COLOR === undefined;
}

function colorize(value: string, code: string, color: boolean): string {
  return color ? `\u001B[${code}m${value}\u001B[0m` : value;
}

function colorizeLines(value: string, codes: string[], color: boolean): string {
  if (!color) {
    return value;
  }

  return value
    .split('\n')
    .map((line, index) => colorize(line, codes[index % codes.length], color))
    .join('\n');
}
