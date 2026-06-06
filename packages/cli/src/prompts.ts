import { confirm, input, select } from '@inquirer/prompts';
import type { PromptAdapter } from './types.js';

export function createPrompts(): PromptAdapter {
  return {
    async text(label, defaultValue) {
      return input({
        message: label,
        default: defaultValue,
      });
    },
    async select(label, choices, defaultValue) {
      return select({
        message: label,
        choices: choices.map((choice) => ({ name: choice, value: choice })),
        default: defaultValue,
      });
    },
    async confirm(label, defaultValue) {
      return confirm({
        message: label,
        default: defaultValue,
      });
    },
  };
}
