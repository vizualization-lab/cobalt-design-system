<template>
  <svg
    viewBox="0 0 540 420"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    aria-label="CSS cascade layers as fanned sheets"
    style="width: 100%; max-width: 540px; display: block; margin: 16px auto"
  >
    <defs>
      <filter id="ls-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="0" dy="4" result="off" />
        <feComponentTransfer><feFuncA type="linear" slope="0.18" /></feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="ls-primary-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="var(--co-color-primary-base)" />
        <stop offset="100%" stop-color="var(--co-color-primary-dark)" />
      </linearGradient>
    </defs>

    <!-- Layers 1–5: raised cards -->
    <g
      v-for="(layer, i) in standardLayers"
      :key="layer.name"
      :transform="`rotate(-8 270 ${62 + i * 50})`"
      filter="url(#ls-shadow)"
    >
      <rect
        x="80"
        :y="30 + i * 50"
        width="380"
        height="64"
        rx="8"
        ry="8"
        fill="var(--co-color-surface-raised)"
        stroke="var(--co-color-border-subtle)"
        stroke-width="1"
      />
      <text
        :x="100"
        :y="56 + i * 50"
        font-family="var(--co-font-family-mono)"
        font-size="13"
        font-weight="500"
        fill="var(--co-color-primary-base)"
      >
        @layer {{ layer.name }}
      </text>
      <text
        :x="100"
        :y="77 + i * 50"
        font-family="var(--co-font-family-sans)"
        font-size="12"
        font-weight="400"
        fill="var(--co-color-text-tertiary)"
      >
        {{ layer.desc }}
      </text>
      <g>
        <rect
          :x="410"
          :y="52 + i * 50"
          width="32"
          height="20"
          rx="10"
          ry="10"
          fill="var(--co-color-surface-sunken)"
          stroke="transparent"
        />
        <text
          :x="426"
          :y="66 + i * 50"
          text-anchor="middle"
          font-family="var(--co-font-family-sans)"
          font-size="11"
          font-weight="600"
          fill="var(--co-color-text-default)"
        >
          {{ i + 1 }}
        </text>
      </g>
    </g>

    <!-- Layer 6: primary accent card -->
    <g transform="rotate(-8 270 312)" filter="url(#ls-shadow)">
      <rect
        x="80"
        y="280"
        width="380"
        height="64"
        rx="8"
        ry="8"
        fill="url(#ls-primary-grad)"
        stroke="var(--co-color-primary-base)"
        stroke-width="1"
      />
      <text
        x="100"
        y="306"
        font-family="var(--co-font-family-mono)"
        font-size="13"
        font-weight="600"
        fill="var(--co-color-text-on-primary)"
      >
        @layer co.overrides
      </text>
      <text
        x="100"
        y="327"
        font-family="var(--co-font-family-sans)"
        font-size="12"
        font-weight="400"
        fill="var(--co-color-text-on-primary)"
        opacity="0.85"
      >
        Consumer overrides
      </text>
      <g>
        <rect
          x="410"
          y="302"
          width="32"
          height="20"
          rx="10"
          ry="10"
          fill="rgba(255,255,255,0.18)"
          stroke="rgba(255,255,255,0.35)"
        />
        <text
          x="426"
          y="316"
          text-anchor="middle"
          font-family="var(--co-font-family-sans)"
          font-size="11"
          font-weight="600"
          fill="var(--co-color-text-on-primary)"
        >
          6
        </text>
      </g>
    </g>

    <!-- WINS callout -->
    <g>
      <line
        x1="470"
        y1="292"
        x2="500"
        y2="320"
        stroke="var(--co-color-primary-base)"
        stroke-width="1"
      />
      <circle cx="500" cy="320" r="3" fill="var(--co-color-primary-base)" />
      <text
        x="464"
        y="284"
        font-family="var(--co-font-family-sans)"
        font-size="11"
        font-weight="600"
        fill="var(--co-color-primary-base)"
        letter-spacing="0.14em"
      >
        WINS
      </text>
    </g>
  </svg>
</template>

<script setup lang="ts">
const standardLayers = [
  { name: 'co.reset', desc: 'Global reset defaults' },
  { name: 'co.base', desc: 'Base element styles' },
  { name: 'co.tokens', desc: 'Light-mode tokens' },
  { name: 'co.theme', desc: 'Dark + custom themes' },
  { name: 'co.utilities', desc: 'Utility classes' },
];
</script>
