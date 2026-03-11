<script setup lang="ts">
const features = [
  {
    icon: 'tokens',
    title: 'Design Tokens',
    description:
      'Style Dictionary powers a multi-format token pipeline — CSS, SCSS, JS, and a Shoelace mapping layer that themes components automatically.',
    link: '/tokens/',
  },
  {
    icon: 'components',
    title: 'Web Components',
    description:
      'Thin Lit wrappers compose Shoelace components with a curated API. Slots, parts, and events forwarded cleanly across shadow boundaries.',
    link: '/components/button',
  },
  {
    icon: 'frameworks',
    title: 'Framework Wrappers',
    description:
      'Auto-generated React, Vue, and Angular wrappers from Custom Elements Manifest. Native DX in every framework.',
    link: '/components/button',
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
          <span>v0.0.1 — Proof of Concept</span>
        </div>

        <h1 class="hero-title">
          <span class="title-line">Build interfaces with</span>
          <span class="title-accent">Cobalt</span>
        </h1>

        <p class="hero-subtitle">
          A composable design system architecture. Lit web components wrap Shoelace, themed by Style
          Dictionary tokens, with wrappers for every framework.
        </p>

        <div class="hero-actions">
          <a href="/components/button" class="action-primary">
            <span>Explore Components</span>
            <svg
              width="16"
              height="16"
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
          </a>
          <a href="/tokens/" class="action-secondary">View Tokens</a>
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
        :href="feature.link"
        class="feature-card"
        :style="{ animationDelay: `${200 + i * 100}ms` }"
      >
        <div class="feature-icon">
          <!-- Tokens icon -->
          <svg
            v-if="feature.icon === 'tokens'"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="12" r="8" stroke-dasharray="4 4" />
            <line x1="12" y1="1" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="23" />
            <line x1="1" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="23" y2="12" />
          </svg>
          <!-- Components icon -->
          <svg
            v-else-if="feature.icon === 'components'"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="8" height="8" rx="2" />
            <rect x="14" y="2" width="8" height="8" rx="2" />
            <rect x="2" y="14" width="8" height="8" rx="2" />
            <path d="M18 14v8M14 18h8" />
          </svg>
          <!-- Frameworks icon -->
          <svg
            v-else
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <line x1="12" y1="22" x2="12" y2="15.5" />
            <polyline points="22 8.5 12 15.5 2 8.5" />
          </svg>
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

    <!-- Architecture summary -->
    <section class="arch-section">
      <div class="arch-label">Architecture</div>
      <div class="arch-flow">
        <div class="arch-node">
          <span class="arch-node-label">Style Dictionary</span>
          <span class="arch-node-sub">tokens</span>
        </div>
        <div class="arch-arrow" aria-hidden="true">
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
        <div class="arch-node">
          <span class="arch-node-label">Lit + Shoelace</span>
          <span class="arch-node-sub">components</span>
        </div>
        <div class="arch-arrow" aria-hidden="true">
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
        <div class="arch-node">
          <span class="arch-node-label">React / Vue / Angular</span>
          <span class="arch-node-sub">wrappers</span>
        </div>
      </div>
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
  background: radial-gradient(
    ellipse at center,
    rgba(37, 99, 235, 0.12) 0%,
    rgba(37, 99, 235, 0.04) 40%,
    transparent 70%
  );
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
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--co-blue-300);
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.15);
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
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin-bottom: 20px;
}

.title-line {
  display: block;
  color: var(--co-text-secondary);
  font-weight: 400;
  font-size: 1.3rem;
  letter-spacing: -0.01em;
  margin-bottom: 6px;
}

.title-accent {
  background: linear-gradient(
    135deg,
    var(--co-blue-300) 0%,
    var(--co-blue-500) 50%,
    var(--co-blue-300) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--co-text-muted);
  max-width: 520px;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.action-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  background: var(--co-blue-600);
  color: white;
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all var(--co-duration) var(--co-ease);
  box-shadow:
    0 0 0 1px rgba(37, 99, 235, 0.5),
    0 4px 16px -4px rgba(37, 99, 235, 0.4);
}

.action-primary:hover {
  background: var(--co-blue-500);
  transform: translateY(-1px);
  box-shadow:
    0 0 0 1px rgba(37, 99, 235, 0.6),
    0 8px 24px -4px rgba(37, 99, 235, 0.4);
}

.action-secondary {
  display: inline-flex;
  align-items: center;
  padding: 10px 22px;
  background: transparent;
  color: var(--co-text-secondary);
  font-size: 0.88rem;
  font-weight: 500;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid var(--co-border-strong);
  transition: all var(--co-duration) var(--co-ease);
}

.action-secondary:hover {
  color: var(--co-text-primary);
  border-color: var(--co-blue-500);
  background: var(--co-shimmer);
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
  background: var(--co-surface);
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
  border-color: rgba(37, 99, 235, 0.25);
  background: var(--co-surface-raised);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px -8px rgba(37, 99, 235, 0.15);
}

.feature-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: rgba(37, 99, 235, 0.1);
  color: var(--co-blue-400);
  margin-bottom: 18px;
  transition: all var(--co-duration) var(--co-ease);
}

.feature-card:hover .feature-icon {
  background: rgba(37, 99, 235, 0.15);
  box-shadow: 0 0 20px -4px rgba(37, 99, 235, 0.25);
}

.feature-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--co-text-primary);
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.feature-desc {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--co-text-muted);
  flex: 1;
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 16px;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--co-blue-400);
  transition: gap var(--co-duration) var(--co-ease);
}

.feature-card:hover .feature-link {
  gap: 8px;
}

/* ── Architecture Flow ─────────────────────────── */
.arch-section {
  padding: 40px 0;
  border-top: 1px solid var(--co-border);
}

.arch-label {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--co-text-muted);
  margin-bottom: 24px;
}

.arch-flow {
  display: flex;
  align-items: center;
  gap: 12px;
}

.arch-node {
  display: flex;
  flex-direction: column;
  padding: 14px 20px;
  background: var(--co-surface);
  border: 1px solid var(--co-border);
  border-radius: 10px;
  flex: 1;
}

.arch-node-label {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--co-text-primary);
  letter-spacing: -0.01em;
}

.arch-node-sub {
  font-size: 0.72rem;
  color: var(--co-text-muted);
  margin-top: 2px;
}

.arch-arrow {
  flex-shrink: 0;
}
</style>
