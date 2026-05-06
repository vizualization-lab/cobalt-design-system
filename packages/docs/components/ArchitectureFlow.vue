<script setup lang="ts">
interface ArchStep {
  label: string;
  sub: string;
}

const steps: ArchStep[] = [
  { label: 'Style Dictionary', sub: 'DTCG formatted tokens' },
  { label: 'Lit', sub: 'components' },
  { label: 'React / Vue / Angular', sub: 'wrappers' },
];
</script>

<template>
  <div class="arch-flow">
    <template v-for="(step, i) in steps" :key="step.label">
      <div class="arch-node">
        <span class="arch-node-label">{{ step.label }}</span>
        <span class="arch-node-sub">{{ step.sub }}</span>
      </div>
      <div v-if="i < steps.length - 1" class="arch-arrow" aria-hidden="true">
        <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
          <line
            x1="0"
            y1="8"
            x2="28"
            y2="8"
            stroke="var(--co-blue-500)"
            stroke-width="1"
            stroke-dasharray="3 3"
          />
          <polyline
            points="24,4 28,8 24,12"
            stroke="var(--co-blue-500)"
            stroke-width="1"
            fill="none"
          />
        </svg>
      </div>
    </template>
  </div>
</template>

<style scoped>
.arch-flow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 24px 0 32px;
}

.arch-node {
  display: flex;
  flex-direction: column;
  padding: 14px 20px;
  background: var(--co-color-surface-static-raised);
  border: 1px solid var(--co-border);
  border-radius: 10px;
  flex: 1;
}

.arch-node-label {
  font-size: var(--co-typography-label-size);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-label-tracking);
  line-height: var(--co-typography-label-line-height);
  color: var(--co-text-primary);
}

.arch-node-sub {
  font-size: var(--co-typography-caption-size);
  font-weight: var(--co-typography-caption-weight);
  letter-spacing: var(--co-typography-caption-tracking);
  line-height: var(--co-typography-caption-line-height);
  color: var(--co-color-text-tertiary);
  margin-top: 2px;
}

.arch-arrow {
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .arch-flow {
    flex-direction: column;
    gap: 12px;
  }

  .arch-arrow {
    transform: rotate(90deg);
  }
}
</style>
