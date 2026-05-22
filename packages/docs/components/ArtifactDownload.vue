<script setup lang="ts">
import { computed } from 'vue';
import { withBase } from 'vitepress';

const props = defineProps<{
  title: string;
  type: string;
  description: string;
  downloadHref: string;
  screenshotSrc: string;
  screenshotAlt: string;
  fileName: string;
}>();

const resolvedDownloadHref = computed(() => withBase(props.downloadHref));
const resolvedScreenshotSrc = computed(() => withBase(props.screenshotSrc));
</script>

<template>
  <article class="artifact-download">
    <div class="artifact-download__content">
      <p class="artifact-download__type">{{ type }}</p>
      <h3 class="artifact-download__title">{{ title }}</h3>
      <p class="artifact-download__description">{{ description }}</p>
      <div class="artifact-download__actions">
        <a class="artifact-download__button-link" :href="resolvedDownloadHref" :download="fileName">
          <co-button variant="primary">
            <co-icon name="download" size="sm" />
            Download VSIX
          </co-button>
        </a>
        <code class="artifact-download__file">{{ fileName }}</code>
      </div>
    </div>
    <figure class="artifact-download__preview">
      <img :src="resolvedScreenshotSrc" :alt="screenshotAlt" />
    </figure>
  </article>
</template>

<style scoped>
.artifact-download {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: var(--co-space-6);
  align-items: center;
  padding: var(--co-space-6);
  margin: var(--co-space-3) 0;
  border: var(--co-border-width-default) solid var(--co-color-border-default);
  border-radius: var(--co-control-radius-container);
  background: var(--co-color-surface-static-raised);
}

.artifact-download__content {
  min-width: 0;
}

.artifact-download__type {
  margin: 0 0 var(--co-space-2);
  color: var(--co-color-text-secondary);
  font-size: var(--co-typography-label-size);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-label-tracking);
  line-height: var(--co-typography-label-line-height);
}

.artifact-download__title {
  margin: 0;
  color: var(--co-color-text-default);
}

.artifact-download__description {
  margin: var(--co-space-3) 0 0;
  color: var(--co-color-text-secondary);
}

.artifact-download__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--co-space-3);
  align-items: center;
  margin-block-start: var(--co-space-4);
}

.artifact-download__button-link {
  display: inline-flex;
  text-decoration: none;
}

.artifact-download__file {
  overflow-wrap: anywhere;
}

.artifact-download__preview {
  min-width: 0;
  margin: 0;
}

.artifact-download__preview img {
  display: block;
  inline-size: 100%;
  border: var(--co-border-width-default) solid var(--co-color-border-default);
  border-radius: var(--co-shape-radius-md);
}

@media (max-width: 720px) {
  .artifact-download {
    grid-template-columns: 1fr;
  }
}
</style>
