import { executeServerCommand } from '@web/test-runner-commands';

export interface A11yRuleResult {
  id: string;
  tags: string[];
}

export interface A11yViolationDetail {
  impact: string;
  id: string;
  description: string;
  tags: string[];
  nodes: string[];
}

export interface A11yAuditResult {
  component: string;
  state: string;
  timestamp: string;
  passes: number;
  violations: number;
  incomplete: number;
  violationDetails: A11yViolationDetail[];
  passedRules: A11yRuleResult[];
}

export interface A11yAuditOptions {
  component?: string;
  state?: string;
}

/**
 * Runs axe-core accessibility audit on the given element.
 * Returns structured results and throws an error if any violations are found.
 */
export async function runA11yAudit(
  el: Element,
  options?: A11yAuditOptions,
): Promise<A11yAuditResult> {
  // axe-core is CJS-only and attaches to window.axe when loaded in the browser
  await import('axe-core');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const axe = (globalThis as any).axe;
  if (!axe?.run) {
    throw new Error('axe-core did not load correctly');
  }
  const results = await axe.run(el as HTMLElement);

  const result: A11yAuditResult = {
    component: options?.component ?? 'unknown',
    state: options?.state ?? 'default',
    timestamp: new Date().toISOString(),
    passes: results.passes.length,
    violations: results.violations.length,
    incomplete: results.incomplete.length,
    violationDetails: results.violations.map(
      (v: {
        impact: string;
        id: string;
        description: string;
        tags: string[];
        nodes: { html: string }[];
      }) => ({
        impact: v.impact,
        id: v.id,
        description: v.description,
        tags: v.tags,
        nodes: v.nodes.map((n: { html: string }) => n.html),
      }),
    ),
    passedRules: results.passes.map((p: { id: string; tags: string[] }) => ({
      id: p.id,
      tags: p.tags,
    })),
  };

  // Send result to the server via WTR executeServerCommand
  try {
    await executeServerCommand('a11y-result', result);
  } catch {
    // Silently ignore if command infrastructure is not available
  }

  if (results.violations.length > 0) {
    const messages = results.violations.map(
      (v: { impact: string; id: string; description: string; nodes: { html: string }[] }) => {
        const nodes = v.nodes.map((n: { html: string }) => n.html).join('\n  ');
        return `[${v.impact}] ${v.id}: ${v.description}\n  ${nodes}`;
      },
    );
    throw new Error(`Accessibility violations found:\n${messages.join('\n\n')}`);
  }

  return result;
}
