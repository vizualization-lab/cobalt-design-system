<script setup lang="ts">
const roles = [
  {
    name: 'display',
    label: 'Display',
    sample: 'Operational clarity at scale',
    meta: '48 px / regular / tightest tracking',
  },
  {
    name: 'heading',
    label: 'Heading',
    sample: 'Track live operational health',
    meta: '36 px / regular / tight tracking',
  },
  {
    name: 'title',
    label: 'Title',
    sample: 'Incident response summary',
    meta: '24 px / regular / tight tracking',
  },
  {
    name: 'subtitle',
    label: 'Subtitle',
    sample: 'Regional service availability',
    meta: '20 px / medium / tight tracking',
  },
  {
    name: 'eyebrow',
    label: 'Eyebrow',
    sample: 'Monday, January 1',
    meta: '12 px / medium / wide tracking',
  },
  {
    name: 'body-lg',
    label: 'Body large',
    sample: 'A concise lead paragraph introduces the page and sets context.',
    meta: '18 px / regular / normal tracking',
  },
  {
    name: 'body',
    label: 'Body',
    sample: 'Default reading text should feel calm, direct, and comfortable.',
    meta: '16 px / regular / normal tracking',
  },
  {
    name: 'body-sm',
    label: 'Body small',
    sample: 'Compact body text supports dense rows, summaries, and secondary copy.',
    meta: '14 px / regular / normal tracking',
  },
  {
    name: 'label',
    label: 'Label',
    sample: 'Form label',
    meta: '14 px / medium / normal tracking',
  },
  {
    name: 'caption',
    label: 'Caption',
    sample: 'Updated 2 minutes ago',
    meta: '12 px / regular / normal tracking',
  },
] as const;

const headingElements = [
  {
    tag: 'h1',
    label: 'Heading level 1',
    role: 'heading',
    sample: 'Page title',
  },
  {
    tag: 'h2',
    label: 'Heading level 2',
    role: 'title',
    sample: 'Section title',
  },
  {
    tag: 'h3',
    label: 'Heading level 3',
    role: 'subtitle',
    sample: 'Subsection title',
  },
  {
    tag: 'h4',
    label: 'Heading level 4',
    role: 'subtitle',
    sample: 'Grouped content title',
  },
  {
    tag: 'h5',
    label: 'Heading level 5',
    role: 'label',
    sample: 'Field group label',
  },
  {
    tag: 'h6',
    label: 'Heading level 6',
    role: 'caption',
    sample: 'Supporting label',
  },
] as const;
</script>

<template>
  <section data-co-base class="typography-preview" aria-labelledby="typography-preview-title">
    <div class="typography-preview__header">
      <p id="typography-preview-title" class="typography-preview__eyebrow">Semantic roles</p>
      <div class="typography-preview__specimen">
        <p class="typography-preview__body">
          Semantic typography roles combine size, weight, tracking, and line-height into reusable
          treatments.
        </p>
      </div>
    </div>

    <details class="typography-preview__details">
      <summary>View all semantic roles</summary>
      <div class="typography-preview__roles">
        <article v-for="role in roles" :key="role.name" class="typography-preview__role">
          <div class="typography-preview__role-meta">
            <span>{{ role.label }}</span>
            <code>co-type-{{ role.name }}</code>
            <span>{{ role.meta }}</span>
          </div>
          <p class="typography-preview__role-sample" :class="`is-${role.name}`">
            {{ role.sample }}
          </p>
        </article>
      </div>
    </details>

    <details class="typography-preview__details">
      <summary>View heading element mappings</summary>
      <div class="typography-preview__roles">
        <article
          v-for="heading in headingElements"
          :key="heading.tag"
          class="typography-preview__role"
        >
          <div class="typography-preview__role-meta">
            <span>{{ heading.label }}</span>
            <code>&lt;{{ heading.tag }}&gt;</code>
            <span>Maps to {{ heading.role }}</span>
          </div>
          <component
            :is="heading.tag"
            class="typography-preview__heading-sample"
            :class="`is-${heading.tag}`"
          >
            {{ heading.sample }}
          </component>
        </article>
      </div>
    </details>
  </section>
</template>

<style scoped>
.typography-preview {
  margin: 24px 0 32px;
  border: 1px solid var(--co-color-border-default);
  border-radius: var(--co-shape-radius-lg);
  overflow: hidden;
  background: var(--co-color-surface-static-raised);
  color: var(--co-color-text-default);
}

.typography-preview__header {
  display: grid;
  gap: var(--co-space-4);
  padding: var(--co-space-6);
}

.typography-preview__eyebrow {
  margin: 0;
  color: var(--co-color-text-secondary);
  font-size: var(--co-typography-eyebrow-size);
  font-weight: var(--co-typography-eyebrow-weight);
  letter-spacing: var(--co-typography-eyebrow-tracking);
  line-height: var(--co-typography-eyebrow-line-height);
  text-transform: uppercase;
}

.typography-preview__specimen {
  display: grid;
  gap: var(--co-space-2);
  max-width: 720px;
}

.typography-preview__display {
  margin: 0;
  font-size: var(--co-typography-display-size);
  font-weight: var(--co-typography-display-weight);
  letter-spacing: var(--co-typography-display-tracking);
  line-height: var(--co-typography-display-line-height);
}

.typography-preview__body {
  margin: 0;
  color: var(--co-color-text-secondary);
  font-size: var(--co-typography-body-size);
  font-weight: var(--co-typography-body-weight);
  letter-spacing: var(--co-typography-body-tracking);
  line-height: var(--co-typography-body-line-height);
}

.typography-preview__details {
  border-top: 1px solid var(--co-color-border-default);
  background: var(--co-color-surface-static-default);
}

.typography-preview__details summary {
  cursor: pointer;
  padding: var(--co-space-4) var(--co-space-6);
  color: var(--co-color-text-default);
  font-size: var(--co-typography-label-size);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-label-tracking);
  line-height: var(--co-typography-label-line-height);
}

.typography-preview__roles {
  display: grid;
  gap: var(--co-space-4);
  padding: 0 var(--co-space-6) var(--co-space-6);
}

.typography-preview__role {
  display: grid;
  grid-template-columns: minmax(160px, 220px) minmax(0, 1fr);
  gap: var(--co-space-4);
  align-items: baseline;
  padding-block: var(--co-space-3);
  border-top: 1px solid var(--co-color-border-default);
}

.typography-preview__role-meta {
  display: grid;
  gap: var(--co-space-1);
  min-width: 0;
  color: var(--co-color-text-secondary);
  font-size: var(--co-typography-caption-size);
  line-height: var(--co-typography-caption-line-height);
}

.typography-preview__role-meta code {
  width: fit-content;
}

.typography-preview__role-sample {
  min-width: 0;
  margin: 0;
}

.typography-preview .typography-preview__heading-sample {
  position: static;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
  color: var(--co-color-text-default);
}

.typography-preview__role-sample.is-display {
  font-size: var(--co-typography-display-size);
  font-weight: var(--co-typography-display-weight);
  letter-spacing: var(--co-typography-display-tracking);
  line-height: var(--co-typography-display-line-height);
}

.typography-preview__role-sample.is-heading {
  font-size: var(--co-typography-heading-size);
  font-weight: var(--co-typography-heading-weight);
  letter-spacing: var(--co-typography-heading-tracking);
  line-height: var(--co-typography-heading-line-height);
}

.typography-preview__role-sample.is-title {
  font-size: var(--co-typography-title-size);
  font-weight: var(--co-typography-title-weight);
  letter-spacing: var(--co-typography-title-tracking);
  line-height: var(--co-typography-title-line-height);
}

.typography-preview__role-sample.is-subtitle {
  font-size: var(--co-typography-subtitle-size);
  font-weight: var(--co-typography-subtitle-weight);
  letter-spacing: var(--co-typography-subtitle-tracking);
  line-height: var(--co-typography-subtitle-line-height);
}

.typography-preview__role-sample.is-eyebrow {
  font-size: var(--co-typography-eyebrow-size);
  font-weight: var(--co-typography-eyebrow-weight);
  letter-spacing: var(--co-typography-eyebrow-tracking);
  line-height: var(--co-typography-eyebrow-line-height);
  text-transform: uppercase;
}

.typography-preview__role-sample.is-body-lg {
  font-size: var(--co-typography-body-lg-size);
  font-weight: var(--co-typography-body-lg-weight);
  letter-spacing: var(--co-typography-body-lg-tracking);
  line-height: var(--co-typography-body-lg-line-height);
}

.typography-preview__role-sample.is-body {
  font-size: var(--co-typography-body-size);
  font-weight: var(--co-typography-body-weight);
  letter-spacing: var(--co-typography-body-tracking);
  line-height: var(--co-typography-body-line-height);
}

.typography-preview__role-sample.is-body-sm {
  font-size: var(--co-typography-body-sm-size);
  font-weight: var(--co-typography-body-sm-weight);
  letter-spacing: var(--co-typography-body-sm-tracking);
  line-height: var(--co-typography-body-sm-line-height);
}

.typography-preview__role-sample.is-label {
  font-size: var(--co-typography-label-size);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-label-tracking);
  line-height: var(--co-typography-label-line-height);
}

.type-caption,
.typography-preview__role-sample.is-caption {
  font-size: var(--co-typography-caption-size);
  font-weight: var(--co-typography-caption-weight);
  letter-spacing: var(--co-typography-caption-tracking);
  line-height: var(--co-typography-caption-line-height);
}

.typography-preview__heading-sample.is-h1 {
  font-size: var(--co-typography-heading-size);
  font-weight: var(--co-typography-heading-weight);
  letter-spacing: var(--co-typography-heading-tracking);
  line-height: var(--co-typography-heading-line-height);
}

.typography-preview__heading-sample.is-h2 {
  font-size: var(--co-typography-title-size);
  font-weight: var(--co-typography-title-weight);
  letter-spacing: var(--co-typography-title-tracking);
  line-height: var(--co-typography-title-line-height);
}

.typography-preview__heading-sample.is-h3,
.typography-preview__heading-sample.is-h4 {
  font-size: var(--co-typography-subtitle-size);
  font-weight: var(--co-typography-subtitle-weight);
  letter-spacing: var(--co-typography-subtitle-tracking);
  line-height: var(--co-typography-subtitle-line-height);
}

.typography-preview__heading-sample.is-h5 {
  font-size: var(--co-typography-label-size);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-label-tracking);
  line-height: var(--co-typography-label-line-height);
}

.typography-preview__heading-sample.is-h6 {
  font-size: var(--co-typography-caption-size);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-label-tracking);
  line-height: var(--co-typography-label-line-height);
}

@media (max-width: 640px) {
  .typography-preview__display {
    font-size: var(--co-typography-heading-size);
  }

  .typography-preview__role {
    grid-template-columns: 1fr;
    gap: var(--co-space-2);
  }
}
</style>
