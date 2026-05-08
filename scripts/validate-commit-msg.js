#!/usr/bin/env node

const fs = require('node:fs');

const messagePath = process.argv[2];

if (!messagePath) {
  console.error('Commit message file path is required.');
  process.exit(1);
}

const raw = fs.readFileSync(messagePath, 'utf8');
const subject = raw
  .split(/\r?\n/)
  .map((line) => line.trim())
  .find((line) => line && !line.startsWith('#'));

const pattern = /^(feat|fix|docs|style|refactor|test|chore)(\([^)]+\))?!?: .+$/;

if (subject && pattern.test(subject)) {
  process.exit(0);
}

console.error('Invalid commit message format.');
console.error('');
console.error('Use Conventional Commits with an optional scope:');
console.error('  type: description');
console.error('  type(scope): description');
console.error('');
console.error('Allowed types: feat, fix, docs, style, refactor, test, chore');
console.error('Examples:');
console.error('  feat: add release tagging');
console.error('  fix(co-button): restore focus ring');
process.exit(1);
