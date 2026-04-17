<script setup lang="ts">
import { useData, withBase } from 'vitepress';

const { theme } = useData();

const features = [
  {
    iconName: 'palette',
    title: 'Design Tokens',
    description:
      'Style Dictionary powers a multi-format token pipeline with outputs for CSS, SCSS, and JS. Tokens apply directly to components and a Cobalt CSS utility library.',
    link: '/tokens/',
  },
  {
    iconName: 'widgets',
    title: 'Web Components',
    description:
      'Lit provides a structured foundation for components that abstract implementation. Components ship with token-driven Cobalt theming.',
    link: '/components',
  },
  {
    iconName: 'code-blocks',
    title: 'Framework Wrappers',
    description:
      'Thin wrappers for React, Vue, and Angular leverage shared web components while providing native developer experieces in each framework.',
    link: '/getting-started/developers',
  },
];
</script>

<template>
  <div class="cobalt-home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-grid" aria-hidden="true"></div>

      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          <span>v{{ theme.cobaltVersion }}</span>
        </div>

        <h1 class="hero-title">
          <span class="title-line">Build interfaces with</span>
          <span class="title-accent">Cobalt</span>
        </h1>

        <p class="hero-subtitle">
          A composable design system for tools and applications. Built as framework-agnostic web
          components, themed with design tokens, with wrappers for React, Vue, and Angular.
        </p>
        <p class="hero-subtitle">
          This is the temporary home of Cobalt while we integrate an enterprise solution.
        </p>

        <div class="hero-actions">
          <co-button :href="withBase('/getting-started')" variant="primary" size="md">
            Get Started
            <co-icon slot="suffix" name="arrow-right-alt" size="md" aria-hidden="true"></co-icon>
          </co-button>
          <co-button :href="withBase('/foundations')" variant="secondary" size="md">
            <co-icon slot="prefix" name="stacks" size="md" aria-hidden="true"></co-icon>
            Explore Foundations</co-button
          >
        </div>
      </div>

      <!-- Decorative crystal shape -->
      <div class="hero-crystal" aria-hidden="true">
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <defs>
            <linearGradient id="crystal-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(37,99,235,0.12)" />
              <stop offset="100%" stop-color="rgba(37,99,235,0.03)" />
            </linearGradient>
            <linearGradient id="crystal-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(96,165,250,0.3)" />
              <stop offset="50%" stop-color="rgba(37,99,235,0.15)" />
              <stop offset="100%" stop-color="rgba(96,165,250,0.05)" />
            </linearGradient>
          </defs>
          <polygon
            points="160,20 280,90 280,230 160,300 40,230 40,90"
            fill="url(#crystal-fill)"
            stroke="url(#crystal-stroke)"
            stroke-width="1"
          />
          <line
            x1="160"
            y1="20"
            x2="160"
            y2="300"
            stroke="rgba(96,165,250,0.08)"
            stroke-width="0.5"
          />
          <line
            x1="40"
            y1="90"
            x2="280"
            y2="230"
            stroke="rgba(96,165,250,0.08)"
            stroke-width="0.5"
          />
          <line
            x1="280"
            y1="90"
            x2="40"
            y2="230"
            stroke="rgba(96,165,250,0.08)"
            stroke-width="0.5"
          />
          <!-- Inner hexagon -->
          <polygon
            points="160,80 230,120 230,200 160,240 90,200 90,120"
            fill="none"
            stroke="rgba(96,165,250,0.1)"
            stroke-width="0.5"
          />
          <!-- Shimmer dot -->
          <circle cx="160" cy="160" r="3" fill="rgba(96,165,250,0.4)">
            <animate
              attributeName="opacity"
              values="0.2;0.8;0.2"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="160"
            cy="160"
            r="8"
            fill="none"
            stroke="rgba(96,165,250,0.15)"
            stroke-width="0.5"
          >
            <animate attributeName="r" values="8;16;8" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>

    <!-- Features -->
    <section class="features">
      <a
        v-for="(feature, i) in features"
        :key="feature.title"
        :href="withBase(feature.link)"
        class="feature-card"
        :style="{ animationDelay: `${200 + i * 100}ms` }"
      >
        <div class="feature-icon">
          <co-icon :name="feature.iconName" size="md" aria-hidden="true"></co-icon>
        </div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-desc">{{ feature.description }}</p>
        <span class="feature-link">
          Learn more
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="8" x2="13" y2="8" />
            <polyline points="9 4 13 8 9 12" />
          </svg>
        </span>
      </a>
    </section>
  </div>
</template>

<style scoped>
/* ── Hero ───────────────────────────────────────── */
.hero {
  position: relative;
  padding: 80px 0 60px;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  background: var(--co-hero-glow);
  pointer-events: none;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--co-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--co-border) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center top, black 0%, transparent 60%);
  -webkit-mask-image: radial-gradient(ellipse at center top, black 0%, transparent 60%);
  opacity: 0.4;
}

.hero-content {
  position: relative;
  z-index: 1;
  animation: heroSlideIn 0.6s var(--co-ease) both;
}

@keyframes heroSlideIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: var(--co-typography-caption-size);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-caption-tracking);
  line-height: var(--co-typography-caption-line-height);
  color: var(--co-code-color);
  background: var(--co-blue-alpha-8);
  border: 1px solid var(--co-blue-alpha-15);
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 28px;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--co-blue-400);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

.hero-title {
  font-size: var(--co-typography-display-size);
  font-weight: var(--co-typography-display-weight);
  letter-spacing: var(--co-typography-display-tracking);
  line-height: var(--co-typography-display-line-height);
  margin-bottom: 20px;
}

.title-line {
  display: block;
  color: var(--co-text-secondary);
  font-size: var(--co-typography-eyebrow-size);
  font-weight: var(--co-typography-eyebrow-weight);
  letter-spacing: var(--co-typography-eyebrow-tracking);
  line-height: var(--co-typography-eyebrow-line-height);
  text-transform: uppercase;
  margin-bottom: 6px;
}

.title-accent {
  background: linear-gradient(
    135deg,
    var(--co-color-interactive-default-primary) 0%,
    var(--co-color-primitive-cobalt-400) 50%,
    var(--co-color-interactive-default-primary) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: var(--co-typography-body-lg-size);
  font-weight: var(--co-typography-body-lg-weight);
  letter-spacing: var(--co-typography-body-lg-tracking);
  line-height: var(--co-typography-body-lg-line-height);
  color: var(--co-text-muted);
  max-width: 520px;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.hero-action-link {
  display: inline-flex;
  text-decoration: none;
  color: inherit;
  border-radius: var(--co-control-radius, 10px);
}

.hero-action-link:hover,
.hero-action-link:focus,
.hero-action-link:visited {
  text-decoration: none;
  color: inherit;
}

/* Crystal */
.hero-crystal {
  position: absolute;
  top: 10px;
  right: -40px;
  opacity: 0.5;
  animation: crystalFloat 6s ease-in-out infinite;
}

@keyframes crystalFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(1deg);
  }
}

/* ── Features ──────────────────────────────────── */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 60px;
}

.feature-card {
  padding: 28px 24px;
  background: var(--co-color-surface-raised);
  border: 1px solid var(--co-border);
  border-radius: 14px;
  text-decoration: none;
  transition: all 0.3s var(--co-ease);
  animation: featureSlideIn 0.5s var(--co-ease) both;
  display: flex;
  flex-direction: column;
}

@keyframes featureSlideIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-card:hover {
  border-color: var(--co-blue-alpha-25);
  background: var(--co-color-surface-sunken);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px -8px var(--co-blue-alpha-15);
}

.feature-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: var(--co-color-surface-disabled);
  color: var(--co-color-text-default);
  margin-bottom: 18px;
  transition: all var(--co-duration) var(--co-ease);
}

.feature-card:hover .feature-icon {
  background: var(--co-color-primitive-neutral-400);
}

/* Dark-mode tiles sit darker than the card (which is surface-raised /
   neutral-800), recessing into the page neutral so the muted icon
   reads as a quiet inset rather than a bright accent. */
[data-theme='dark'] .feature-icon {
  background: var(--co-color-primitive-neutral-900);
}

[data-theme='dark'] .feature-card:hover .feature-icon {
  background: var(--co-color-primitive-neutral-950);
}

.feature-title {
  font-size: var(--co-typography-subtitle-size);
  font-weight: var(--co-typography-subtitle-weight);
  letter-spacing: var(--co-typography-subtitle-tracking);
  line-height: var(--co-typography-subtitle-line-height);
  color: var(--co-text-primary);
  margin-bottom: 8px;
}

.feature-desc {
  font-size: var(--co-typography-body-sm-size);
  font-weight: var(--co-typography-body-sm-weight);
  letter-spacing: var(--co-typography-body-sm-tracking);
  line-height: var(--co-typography-body-sm-line-height);
  color: var(--co-text-muted);
  flex: 1;
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 16px;
  font-size: var(--co-typography-label-size);
  font-weight: var(--co-typography-label-weight);
  letter-spacing: var(--co-typography-label-tracking);
  line-height: var(--co-typography-label-line-height);
  color: var(--co-color-primary-base);
  transition: gap var(--co-duration) var(--co-ease);
}

.feature-card:hover .feature-link {
  gap: 8px;
}

/* ── Responsive ──────────────────────────────────── */
@media (max-width: 768px) {
  /* On small screens, step the hero down one role. */
  .hero-title {
    font-size: var(--co-typography-heading-size);
    letter-spacing: var(--co-typography-heading-tracking);
    line-height: var(--co-typography-heading-line-height);
  }

  .hero-subtitle {
    font-size: var(--co-typography-body-size);
    line-height: var(--co-typography-body-line-height);
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .features {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
