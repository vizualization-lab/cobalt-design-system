# How to Contribute

This guide covers the different ways you can contribute to the Cobalt Design System and the workflows involved in each.

## Reporting Bugs

If you've found a bug in a Cobalt component, please file an issue using the **Bug Report** template in the GitHub repository.

A good bug report includes:

- **Component name and package version** (e.g., `co-button` in `@cobalt/components@0.1.0`)
- **Steps to reproduce** the issue
- **Expected behavior** versus **actual behavior**
- **Browser and OS** information
- **Screenshots or screen recordings** if the issue is visual
- **A minimal reproduction** — a CodeSandbox or StackBlitz link is ideal

> **Tip:** The more detail you provide, the faster we can triage and resolve the issue. Reports with a minimal reproduction are prioritized.

## Requesting Features

Feature requests should be submitted as GitHub Issues using the **Feature Request** template. Include:

1. **Problem statement** — What problem are you trying to solve?
2. **Proposed solution** — How do you envision this working?
3. **Alternatives considered** — What other approaches did you evaluate?
4. **Use cases** — Who benefits from this and in what scenarios?

For new component proposals, follow the [Component Proposal Process](./component-proposal.md) instead.

## Getting Migration Help

If you need help moving an existing product or library onto Cobalt, open a GitHub issue using the **Migration Help** template.

Useful context includes:

- Your current UI stack and framework versions
- Which Cobalt packages or guides you are targeting
- The migration step or blocker you are stuck on
- What you have already tried
- Any timeline or rollout constraints

## Requesting General Support

If you need structured help with setup, usage, troubleshooting, or adoption, open a GitHub issue using the **General Support Request** template.

Include:

1. **Your goal** — What you are trying to accomplish
2. **Where you are blocked** — What is not working or remains unclear
3. **What you tried** — Steps, docs, or examples you already used
4. **Environment details** — Framework, package versions, and relevant tooling

For broader conversations or open-ended questions, use [GitHub Discussions](%GITHUB_URL%/discussions).

## Submitting Pull Requests

### Before You Submit

- Ensure your [development environment is set up](./development-setup.md)
- Review the [Coding Standards](./coding-standards.md)
- Check that no one else is already working on the same change

### Pull Request Workflow

1. **Fork the repository** and create a branch from `main`
2. **Name your branch** using the convention: `feat/co-component-description`, `fix/co-component-description`, or `docs/description`
3. **Make your changes** following the coding standards
4. **Add or update tests** to cover your changes
5. **Add a changeset** by running `pnpm changeset` and describing the change
6. **Push your branch** and open a pull request against `main`

### Pull Request Checklist

| Requirement            | Details                                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| Tests pass             | `pnpm test` completes with no failures                                                                         |
| Lint passes            | `pnpm lint` reports no errors                                                                                  |
| Changeset added        | Run `pnpm changeset` for any user-facing changes                                                               |
| Documentation updated  | Update or add docs for new or changed behavior                                                                 |
| Accessibility reviewed | For UI changes, run `pnpm test` (or the relevant package test command) and verify no accessibility regressions |
| Visual review          | Confirm the component renders correctly across themes                                                          |

## Code Review Process

All pull requests require at least **two approvals** before merging:

1. **Automated checks** — CI runs linting, tests, and build verification. All checks must pass.
2. **Peer review** — A team member reviews the code for correctness, style, and maintainability.
3. **Design review** — If the change affects visual appearance or interaction patterns, a designer must approve.
4. **Final approval** — A Cobalt core maintainer gives the final sign-off.

Reviewers will look for:

- Adherence to coding standards and component patterns
- Adequate test coverage (unit and accessibility)
- Clear, well-structured code with appropriate comments
- Backward compatibility or a proper migration path
- Performance considerations

> **Note:** Reviews typically happen within 2 business days. If your PR is urgent, tag `@cobalt/core-team` in the PR description.

## Communication Channels

For a full list of support channels, see the [Contact](/resources/contact) page.

## First-Time Contributors

If this is your first contribution, welcome! Here's how to get started:

1. Look for issues labeled **`good first issue`** — these are scoped, well-documented tasks
2. Comment on the issue to let others know you're working on it
3. Follow the [Development Setup](./development-setup.md) guide to configure your environment
4. If you get blocked, use [GitHub Discussions](%GITHUB_URL%/discussions) or the [Contact](/resources/contact) path instead of guessing

We're here to help you succeed with your first pull request.
