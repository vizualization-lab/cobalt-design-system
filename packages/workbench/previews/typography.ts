import '@cobalt/tokens/css/utilities';

export const title = 'Typography';

const semanticRoles = [
  ['display', 'Operational clarity at scale'],
  ['heading', 'Track live operational health'],
  ['title', 'Incident response summary'],
  ['subtitle', 'Regional service availability'],
  ['eyebrow', 'Monday, January 1'],
  ['body-lg', 'A concise lead paragraph introduces the page and sets context.'],
  ['body', 'Default reading text should feel calm, direct, and comfortable.'],
  ['body-sm', 'Compact body text supports dense rows, summaries, and secondary copy.'],
  ['label', 'Form label'],
  ['caption', 'Updated 2 minutes ago'],
];

const headings = [
  ['h1', 'Page title'],
  ['h2', 'Section title'],
  ['h3', 'Subsection title'],
  ['h4', 'Grouped content title'],
  ['h5', 'Field group label'],
  ['h6', 'Supporting label'],
];

export const html = `
  <style>
    .typography-preview {
      display: grid;
      gap: var(--co-space-8);
      color: var(--co-color-text-default);
    }

    .typography-card {
      border: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
      border-radius: var(--co-shape-radius-lg);
      background: var(--co-color-surface-static-raised);
      overflow: hidden;
    }

    .typography-card__header {
      display: grid;
      gap: var(--co-space-2);
      padding: var(--co-space-5) var(--co-space-6);
      border-bottom: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
    }

    .typography-card__title {
      margin: 0;
      font-size: var(--co-typography-title-size);
      font-weight: var(--co-typography-title-weight);
      letter-spacing: var(--co-typography-title-tracking);
      line-height: var(--co-typography-title-line-height);
    }

    .typography-card__description {
      margin: 0;
      max-width: 720px;
      color: var(--co-color-text-secondary);
      font-size: var(--co-typography-body-sm-size);
      line-height: var(--co-typography-body-sm-line-height);
    }

    .type-role-list,
    .type-heading-list {
      display: grid;
      gap: 0;
      padding: 0 var(--co-space-6);
    }

    .type-row {
      display: grid;
      grid-template-columns: minmax(150px, 220px) minmax(0, 1fr);
      gap: var(--co-space-4);
      align-items: baseline;
      padding: var(--co-space-5) 0;
      border-bottom: var(--co-shape-border-width-thin) solid var(--co-color-border-default);
    }

    .type-row:last-child {
      border-bottom: 0;
    }

    .type-row__meta {
      display: grid;
      gap: var(--co-space-1);
      min-width: 0;
      color: var(--co-color-text-secondary);
      font-size: var(--co-typography-caption-size);
      line-height: var(--co-typography-caption-line-height);
    }

    .type-row__meta strong {
      color: var(--co-color-text-default);
      font-size: var(--co-typography-label-size);
      font-weight: var(--co-typography-label-weight);
      line-height: var(--co-typography-label-line-height);
    }

    .type-row__meta code {
      width: fit-content;
    }

    .type-row__sample {
      min-width: 0;
      margin: 0;
    }

    .type-heading-list h1,
    .type-heading-list h2,
    .type-heading-list h3,
    .type-heading-list h4,
    .type-heading-list h5,
    .type-heading-list h6 {
      min-width: 0;
      margin: 0;
    }

    @media (max-width: 720px) {
      .type-row {
        grid-template-columns: 1fr;
        gap: var(--co-space-2);
      }
    }
  </style>

  <div class="typography-preview">
    <section class="typography-card">
      <div class="typography-card__header">
        <h2 class="typography-card__title">Semantic roles</h2>
        <p class="typography-card__description">
          Utility classes apply each semantic role's size, weight, tracking, and line-height together.
        </p>
      </div>
      <div class="type-role-list">
        ${semanticRoles
          .map(
            ([role, sample]) => `
              <article class="type-row">
                <div class="type-row__meta">
                  <strong>${role}</strong>
                  <code>.co-type-${role}</code>
                </div>
                <p class="type-row__sample co-type-${role}">${sample}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="typography-card">
      <div class="typography-card__header">
        <h2 class="typography-card__title">Heading elements</h2>
        <p class="typography-card__description">
          Native heading elements render through the baseline mappings from <code>base.css</code>.
        </p>
      </div>
      <div class="type-heading-list">
        ${headings
          .map(
            ([tag, sample]) => `
              <article class="type-row">
                <div class="type-row__meta">
                  <strong>${tag}</strong>
                  <code>&lt;${tag}&gt;</code>
                </div>
                <${tag}>${sample}</${tag}>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  </div>
`;
