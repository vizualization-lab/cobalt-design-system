<template>
  <svg
    viewBox="0 0 540 420"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    aria-label="CSS cascade layers as a stacked priority diagram"
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
    </defs>

    <!-- Layers 1–6: stacked with the highest-priority layer in front -->
    <g v-for="(layer, i) in layers" :key="layer.name" filter="url(#ls-shadow)">
      <rect
        :x="cardX"
        :y="cardTop(stackIndex(i))"
        :width="cardWidth"
        :height="cardHeight"
        rx="8"
        ry="8"
        :fill="
          layer.isFront
            ? 'var(--co-color-interactive-subtle-active)'
            : 'var(--co-color-surface-raised)'
        "
        :stroke="
          layer.isFront
            ? 'var(--co-color-interactive-subtle-selected)'
            : 'var(--co-color-border-subtle)'
        "
        stroke-width="1"
      />
      <text
        :x="cardX + 20"
        :y="cardTop(stackIndex(i)) + 26"
        font-family="var(--co-font-family-mono)"
        font-size="13"
        :font-weight="layer.isFront ? '600' : '500'"
        :fill="layer.isFront ? 'var(--co-color-text-link)' : 'var(--co-color-primary-base)'"
      >
        @layer {{ layer.name }}
      </text>
      <text
        :x="cardX + 20"
        :y="cardTop(stackIndex(i)) + 47"
        font-family="var(--co-font-family-sans)"
        font-size="12"
        font-weight="400"
        :fill="layer.isFront ? 'var(--co-color-text-default)' : 'var(--co-color-text-tertiary)'"
        :opacity="layer.isFront ? '0.85' : '1'"
      >
        {{ layer.desc }}
      </text>
      <g>
        <rect
          :x="badgeX"
          :y="cardTop(stackIndex(i)) + 22"
          :width="badgeWidth"
          :height="badgeHeight"
          rx="10"
          ry="10"
          :fill="
            layer.isFront ? 'var(--co-color-surface-default)' : 'var(--co-color-surface-sunken)'
          "
          :stroke="layer.isFront ? 'var(--co-color-interactive-subtle-selected)' : 'transparent'"
        />
        <text
          :x="badgeX + badgeWidth / 2"
          :y="cardTop(stackIndex(i)) + 36"
          text-anchor="middle"
          font-family="var(--co-font-family-sans)"
          font-size="11"
          font-weight="600"
          :fill="layer.isFront ? 'var(--co-color-text-link)' : 'var(--co-color-text-default)'"
        >
          {{ i + 1 }}
        </text>
      </g>
    </g>

    <!-- Priority callout -->
    <g>
      <line
        :x1="calloutDotX"
        :y1="calloutDotY"
        :x2="calloutLineEndX"
        :y2="calloutLineEndY"
        stroke="var(--co-color-text-link)"
        stroke-width="1"
      />
      <circle :cx="calloutDotX" :cy="calloutDotY" r="3" fill="var(--co-color-text-link)" />
      <text
        :x="calloutTextX"
        :y="calloutTextY"
        text-anchor="end"
        font-family="var(--co-font-family-sans)"
        font-size="11"
        font-weight="600"
        fill="var(--co-color-text-link)"
      >
        Takes priority
      </text>
    </g>
  </svg>
</template>

<script setup lang="ts">
type Layer = {
  name: string;
  desc: string;
  isFront?: boolean;
};

const layers: Layer[] = [
  { name: 'co.reset', desc: 'Global reset defaults' },
  { name: 'co.base', desc: 'Base element styles' },
  { name: 'co.tokens', desc: 'Light-mode tokens' },
  { name: 'co.theme', desc: 'Dark + custom themes' },
  { name: 'co.utilities', desc: 'Utility classes' },
  { name: 'co.overrides', desc: 'Consumer overrides', isFront: true },
];

const cardX = 80;
const cardWidth = 380;
const cardHeight = 64;
const cardStartY = 44;
const cardStepY = 56;

const badgeWidth = 32;
const badgeHeight = 20;
const badgeX = cardX + cardWidth - 50;

function cardTop(index: number) {
  return cardStartY + index * cardStepY;
}

function stackIndex(renderIndex: number) {
  return layers.length - 1 - renderIndex;
}

const frontLayerTop = cardTop(0);
const calloutDotX = cardX + cardWidth - 18;
const calloutDotY = frontLayerTop + 18;
const calloutLineEndX = cardX + cardWidth - 6;
const calloutLineEndY = frontLayerTop - 6;
const calloutTextX = 532;
const calloutTextY = frontLayerTop - 12;
</script>
