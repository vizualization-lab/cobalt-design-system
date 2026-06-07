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
    '38;5;250',
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

const SHADOW_CHARS = /[╔╗╚╝═║╠╣╦╩╬]/;

function colorizeLines(
  value: string,
  blockCodes: string[],
  shadowCode: string,
  color: boolean,
): string {
  if (!color) {
    return value;
  }

  return value
    .split('\n')
    .map((line, index) => colorizeShadow(line, blockCodes[index % blockCodes.length], shadowCode))
    .join('\n');
}

function colorizeShadow(line: string, blockCode: string, shadowCode: string): string {
  let result = '';
  let buffer = '';
  let bufferIsShadow = false;

  const flush = () => {
    if (buffer === '') return;
    result += `\u001B[${bufferIsShadow ? shadowCode : blockCode}m${buffer}\u001B[0m`;
    buffer = '';
  };

  for (const char of line) {
    if (char === ' ') {
      flush();
      result += char;
      continue;
    }
    const isShadow = SHADOW_CHARS.test(char);
    if (buffer !== '' && isShadow !== bufferIsShadow) {
      flush();
    }
    bufferIsShadow = isShadow;
    buffer += char;
  }
  flush();
  return result;
}
