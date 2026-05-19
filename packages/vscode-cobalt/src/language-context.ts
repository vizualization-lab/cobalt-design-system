export interface AttributeValueContext {
  attributeName: string;
  value: string;
  valueStart: number;
  valueEnd: number;
}

export interface ClassSegment {
  text: string;
  start: number;
  end: number;
}

const CLASS_ATTRIBUTE_RE =
  /(?:^|[\s<])(?<name>class|className)\s*=\s*(?:\{\s*)?(?<quote>["'`])(?<value>[^"'`]*)\k<quote>/g;

export function findClassAttributeContext(
  lineText: string,
  character: number,
): AttributeValueContext | undefined {
  CLASS_ATTRIBUTE_RE.lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = CLASS_ATTRIBUTE_RE.exec(lineText)) !== null) {
    const attributeName = match.groups?.name;
    const value = match.groups?.value;
    const quote = match.groups?.quote;
    if (!attributeName || value === undefined || !quote) continue;

    const valueStart = match.index + match[0].lastIndexOf(`${quote}${value}${quote}`) + 1;
    const valueEnd = valueStart + value.length;

    if (character >= valueStart && character <= valueEnd) {
      return {
        attributeName,
        value,
        valueStart,
        valueEnd,
      };
    }
  }

  return undefined;
}

export function getClassSegment(value: string, relativeOffset: number): ClassSegment {
  const boundedOffset = Math.max(0, Math.min(relativeOffset, value.length));
  let start = boundedOffset;
  let end = boundedOffset;

  while (start > 0 && !/\s/.test(value[start - 1])) {
    start -= 1;
  }

  while (end < value.length && !/\s/.test(value[end])) {
    end += 1;
  }

  return {
    text: value.slice(start, end),
    start,
    end,
  };
}

export function isTokenCompletionContext(lineText: string, character: number): boolean {
  const beforeCursor = lineText.slice(0, character);
  return /var\(\s*(?:--co-[\w-]*)?$/.test(beforeCursor) || /--co-[\w-]*$/.test(beforeCursor);
}
