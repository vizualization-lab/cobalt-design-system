<script setup lang="ts">
import { useData, withBase } from 'vitepress';
import { CoButton } from '@cobalt/vue/button';
import { CoCard } from '@cobalt/vue/card';
import { CoIcon } from '@cobalt/vue/icon';

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
      'Lit provides a structured foundation for components that abstract implementation. Components are shipped with token-driven Cobalt theming baked in.',
    link: '/components',
  },
  {
    iconName: 'code-blocks',
    title: 'Framework Wrappers',
    description:
      'Thin wrappers for React, Vue, and Angular leverage shared web components while providing native developer experiences in each framework.',
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
          <CoButton :href="withBase('/getting-started')" variant="primary" size="md">
            Get Started
            <CoIcon slot="suffix" name="arrow-right-alt" size="md" aria-hidden="true"></CoIcon>
          </CoButton>
          <CoButton :href="withBase('/foundations')" variant="secondary" size="md">
            <CoIcon slot="prefix" name="stacks" size="md" aria-hidden="true"></CoIcon>
            Explore Foundations
          </CoButton>
        </div>
      </div>

      <!-- Decorative crystal shape -->
      <div class="hero-crystal" aria-hidden="true">
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <defs>
            <linearGradient id="crystal-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color: var(--co-hero-crystal-fill-start)" />
              <stop offset="100%" style="stop-color: var(--co-hero-crystal-fill-end)" />
            </linearGradient>
            <linearGradient id="crystal-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color: var(--co-hero-crystal-stroke-start)" />
              <stop offset="50%" style="stop-color: var(--co-hero-crystal-stroke-mid)" />
              <stop offset="100%" style="stop-color: var(--co-hero-crystal-stroke-end)" />
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
            style="stroke: var(--co-hero-crystal-facet)"
            stroke-width="0.5"
          />
          <line
            x1="40"
            y1="90"
            x2="280"
            y2="230"
            style="stroke: var(--co-hero-crystal-facet)"
            stroke-width="0.5"
          />
          <line
            x1="280"
            y1="90"
            x2="40"
            y2="230"
            style="stroke: var(--co-hero-crystal-facet)"
            stroke-width="0.5"
          />
          <!-- Inner hexagon -->
          <polygon
            points="160,80 230,120 230,200 160,240 90,200 90,120"
            fill="none"
            style="stroke: var(--co-hero-crystal-inner)"
            stroke-width="0.5"
          />
          <!-- Cobalt logo — fades in softly inside the crystal, then recedes -->
          <g class="hero-crystal-logo">
            <path
              fill-rule="evenodd"
              style="fill: var(--co-hero-crystal-logo)"
              d="M215.13 137.73L207.99 126.24C207.61 125.62 207.05 125.06 206.37 124.69L168.91 104.56C168.29 104.25 167.61 104.06 166.86 104.06L152.89 104.06C152.2 104.06 151.46 104.25 150.84 104.56L113.38 124.69C112.7 125.06 112.14 125.56 111.76 126.24L104.62 137.73C104.19 138.41 104 139.22 104 140.03L104 182.64C104 183.45 104.25 184.26 104.81 184.94L109.53 192.58C109.9 193.2 110.46 193.76 111.14 194.13L150.9 215.44C151.52 215.75 152.2 215.94 152.95 215.94L167.17 215.94C167.86 215.94 168.6 215.75 169.22 215.44L208.98 194.13C209.66 193.76 210.22 193.26 210.6 192.58L215.38 184.94C215.81 184.26 216 183.45 216 182.64L216 140.03C216 139.22 215.75 138.41 215.38 137.73ZM153.94 112.7L165.81 112.7L201.34 131.77L201.9 132.64L175.75 146.68L165.99 151.89L159.91 148.6L153.82 151.89L141.77 145.43L155.56 138.04C158.66 138.04 161.09 138.04 164.19 138.04L168.35 140.28L182.15 132.57L164.07 123.88C161.15 123.94 158.73 124 155.81 124.06L128.85 138.54L117.91 132.7L118.47 131.83L154.01 112.76ZM155.56 171.65L155.56 182.27L141.58 174.75C140.03 172.27 138.79 170.28 137.3 167.8L137.3 152.76L147.05 157.98L147.05 157.98C147.05 157.98 149.28 159.16 149.28 159.16L149.28 165.81L155.56 169.22L155.56 171.59ZM116.05 187.05L112.57 181.4L112.57 141.21L113.38 139.97L113.38 139.97C113.38 139.97 113.38 139.97 113.38 139.97L124.31 145.87L124.31 174.82C125.87 177.3 127.11 179.29 128.6 181.77L155.56 196.25L155.56 207.43L153.82 207.43L116.05 187.18ZM207.18 181.4L203.7 187.05L165.93 207.3L164.19 207.3L164.19 196.06L191.15 181.59C192.71 179.1 193.95 177.11 195.44 174.63L195.44 156.68L182.52 163.63L182.52 167.73C180.97 170.22 179.72 172.21 178.23 174.69L164.26 182.21L164.26 169.22L170.53 165.81L170.53 159.16L172.77 157.98L172.77 157.98C172.77 157.98 179.78 154.19 179.78 154.19L206.43 139.9L207.24 141.15L207.24 181.34Z"
            />
          </g>
          <!-- Shimmer dot -->
          <circle cx="160" cy="160" r="3" style="fill: var(--co-hero-crystal-dot)">
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
            style="stroke: var(--co-hero-crystal-pulse)"
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
        <CoCard>
          <div class="feature-icon" slot="header">
            <CoIcon :name="feature.iconName" size="md" aria-hidden="true"></CoIcon>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.description }}</p>
          <span class="feature-link" slot="footer">
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
        </CoCard>
      </a>
    </section>
  </div>
</template>

<style scoped>
/* ── Hero ───────────────────────────────────────── */
.hero {
  position: relative;
  padding: 10px 8px 60px;
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
    var(--co-color-state-theme-dark) 0%,
    var(--co-color-state-theme-base) 100%
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
  max-width: 600px;
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
  border-radius: var(--co-control-radius-interactive, 10px);
}

.hero-action-link:hover,
.hero-action-link:focus,
.hero-action-link:visited {
  text-decoration: none;
  color: inherit;
}

/* Crystal */
.hero-crystal {
  --co-hero-crystal-fill-start: color-mix(
    in srgb,
    var(--co-color-state-theme-base) 12%,
    transparent
  );
  --co-hero-crystal-fill-end: color-mix(in srgb, var(--co-color-state-theme-base) 3%, transparent);
  --co-hero-crystal-stroke-start: color-mix(in srgb, var(--co-color-text-link) 30%, transparent);
  --co-hero-crystal-stroke-mid: color-mix(
    in srgb,
    var(--co-color-state-theme-base) 15%,
    transparent
  );
  --co-hero-crystal-stroke-end: color-mix(in srgb, var(--co-color-text-link) 5%, transparent);
  --co-hero-crystal-facet: color-mix(in srgb, var(--co-color-text-link) 8%, transparent);
  --co-hero-crystal-inner: color-mix(in srgb, var(--co-color-text-link) 10%, transparent);
  --co-hero-crystal-dot: color-mix(in srgb, var(--co-color-state-theme-base) 40%, transparent);
  --co-hero-crystal-pulse: color-mix(in srgb, var(--co-color-state-theme-base) 15%, transparent);
  --co-hero-crystal-logo: color-mix(in srgb, var(--co-color-state-theme-base) 55%, transparent);
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

/* Logo reveal — slow fade-in inside the crystal, then recede. The peak
   opacity stays low on purpose (and .hero-crystal is itself at 0.5), so
   the mark reads as a facet catching light rather than a badge. */
.hero-crystal-logo {
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  animation: heroLogoReveal 9s ease-in-out infinite;
}

@keyframes heroLogoReveal {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.985);
  }
  30%,
  45% {
    opacity: 0.3;
    transform: scale(1);
  }
  75% {
    opacity: 0;
    transform: scale(0.985);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-crystal {
    animation: none;
  }

  .hero-crystal-logo {
    animation: none;
    opacity: 0.16;
    transform: none;
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
  text-decoration: none;
  color: inherit;
  transition: all 0.3s var(--co-ease);
  animation: featureSlideIn 0.5s var(--co-ease) both;
  display: grid;
  border-radius: var(--co-component-card-radius, var(--co-shape-radius-lg));
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
  background: color-mix(in srgb, var(--co-color-state-theme-base) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--co-color-state-theme-base) 18%, transparent);
  color: var(--co-color-state-theme-base);
  margin-bottom: 18px;
  transition: all var(--co-duration) var(--co-ease);
}

.feature-card:hover .feature-icon {
  background: color-mix(in srgb, var(--co-color-state-theme-base) 20%, transparent);
  border-color: color-mix(in srgb, var(--co-color-state-theme-base) 28%, transparent);
  color: var(--co-color-state-theme-dark);
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
  color: var(--co-color-text-link);
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
