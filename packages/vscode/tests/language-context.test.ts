import { describe, expect, it } from 'vitest';
import {
  findClassAttributeContext,
  getClassSegment,
  isTokenCompletionContext,
} from '../src/language-context';

describe('findClassAttributeContext', () => {
  it('detects static HTML class attributes', () => {
    const line = '<div class="co-gap-2 co-p-4">';
    const context = findClassAttributeContext(line, line.indexOf('co-p-4') + 2);

    expect(context).toEqual({
      attributeName: 'class',
      value: 'co-gap-2 co-p-4',
      valueStart: 12,
      valueEnd: 27,
    });
  });

  it('detects static JSX className attributes', () => {
    const line = '<div className={"co-gap-2 co-p-4"} />';
    const context = findClassAttributeContext(line, line.indexOf('co-gap-2') + 2);

    expect(context?.attributeName).toBe('className');
    expect(context?.value).toBe('co-gap-2 co-p-4');
  });

  it('ignores dynamic class bindings', () => {
    expect(findClassAttributeContext('<div :class="classes">', 15)).toBeUndefined();
    expect(findClassAttributeContext('<div [class]="classes">', 15)).toBeUndefined();
  });
});

describe('getClassSegment', () => {
  it('returns the current class token around the cursor', () => {
    expect(getClassSegment('co-gap-2 md:co-gap-4 co-p-4', 12)).toEqual({
      text: 'md:co-gap-4',
      start: 9,
      end: 20,
    });
  });

  it('returns an empty segment between classes', () => {
    expect(getClassSegment('co-gap-2  co-p-4', 9)).toEqual({
      text: '',
      start: 9,
      end: 9,
    });
  });
});

describe('isTokenCompletionContext', () => {
  it('detects var token positions', () => {
    expect(isTokenCompletionContext('color: var(--co-color', 21)).toBe(true);
    expect(isTokenCompletionContext('color: --co-color', 17)).toBe(true);
  });

  it('ignores unrelated CSS positions', () => {
    expect(isTokenCompletionContext('color: red', 10)).toBe(false);
  });
});
