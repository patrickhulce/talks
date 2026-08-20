<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  variant: {
    type: String,
    default: 'axis',
  },
})

const isPhases = computed(() => props.variant === 'phases')

function toneColor(tone) {
  if (tone === 'deep')
    return 'var(--n-accent-deep)'
  if (tone === 'dark')
    return 'var(--n-accent-dark)'
  return 'var(--n-accent)'
}

function phaseIndex(i) {
  return String(i + 1).padStart(2, '0')
}

function sideOf(item, i) {
  if (item.side === 'up' || item.side === 'above')
    return 'up'
  if (item.side === 'down' || item.side === 'below')
    return 'down'
  return i % 2 === 0 ? 'up' : 'down'
}

function mediaOf(item) {
  if (Array.isArray(item.images) && item.images.length)
    return item.images
  if (item.src)
    return [item.src]
  return []
}
</script>

<template>
  <div
    class="netflix-timeline"
    :class="{ 'is-phases': isPhases, 'is-axis': !isPhases }"
    role="list"
  >
    <template v-if="isPhases">
      <div class="timeline-rail" aria-hidden="true" />
      <PhaseCard
        v-for="(item, i) in items"
        :key="item.year || item.title || i"
        class="timeline-phase"
        :phase="phaseIndex(i)"
        :kicker="item.kicker || item.year"
        :title="item.title || item.label"
        :src="item.src"
        role="listitem"
      >
        <template v-if="item.body" #body>
          {{ item.body }}
        </template>
      </PhaseCard>
    </template>
    <template v-else>
      <div
        v-for="(item, i) in items"
        :key="item.year || i"
        class="axis-item"
        :data-side="sideOf(item, i)"
        :data-ellipsis="item.ellipsis ? 'true' : 'false'"
        role="listitem"
      >
        <div class="axis-pane above">
          <template v-if="sideOf(item, i) === 'up'">
            <div v-if="mediaOf(item).length" class="axis-media">
              <img v-for="(src, mi) in mediaOf(item)" :key="src + mi" :src="src" alt="">
            </div>
            <div class="axis-copy">
              <div class="axis-label">{{ item.label || item.title }}</div>
              <div v-if="item.body" class="axis-body">{{ item.body }}</div>
            </div>
            <span class="axis-stem" aria-hidden="true" />
          </template>
        </div>
        <div class="axis-line">
          <span class="axis-tick" :style="{ background: toneColor(item.tone) }" />
          <span class="axis-year">{{ item.year }}</span>
        </div>
        <div class="axis-pane below">
          <template v-if="sideOf(item, i) === 'down'">
            <span class="axis-stem" aria-hidden="true" />
            <div class="axis-copy">
              <div class="axis-label">{{ item.label || item.title }}</div>
              <div v-if="item.body" class="axis-body">{{ item.body }}</div>
            </div>
            <div v-if="mediaOf(item).length" class="axis-media">
              <img v-for="(src, mi) in mediaOf(item)" :key="src + mi" :src="src" alt="">
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.netflix-timeline {
  display: flex;
  align-items: stretch;
  width: 100%;
  position: relative;
}

.netflix-timeline.is-phases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  gap: 1rem;
  align-items: start;
  padding-top: 0.6rem;
}

.timeline-rail {
  position: absolute;
  left: 4%;
  right: 4%;
  top: 38%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--n-accent) 12%, var(--n-border) 50%, var(--n-accent) 88%, transparent);
  pointer-events: none;
  z-index: 0;
}

.is-phases :deep(.timeline-phase) {
  position: relative;
  z-index: 1;
}

.is-phases :deep(.timeline-phase:nth-child(even)) {
  margin-top: 0;
}

.is-phases :deep(.timeline-phase:nth-child(odd)) {
  margin-top: 2.2rem;
}

.netflix-timeline.is-axis {
  flex: 1;
  min-height: 0;
  align-items: stretch;
  gap: 0.15rem;
}

.axis-item {
  flex: 1;
  min-width: 0;
  display: grid;
  grid-template-rows: 1fr 10px 1fr;
  justify-items: center;
  position: relative;
}

.axis-pane {
  min-width: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 0.2rem;
}

.axis-pane.above {
  grid-row: 1;
  justify-content: flex-end;
}

.axis-pane.below {
  grid-row: 3;
  justify-content: flex-start;
}

.axis-line {
  grid-row: 2;
  position: relative;
  width: 100%;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.axis-line::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 4px;
  margin-top: -2px;
  background: var(--n-accent);
}

.axis-item:first-child .axis-line::before {
  left: 50%;
}

.axis-item:last-child .axis-line::before {
  right: 50%;
}

.axis-item[data-ellipsis='true'] .axis-line::before {
  background: var(--n-dim);
}

.axis-tick {
  position: relative;
  z-index: 1;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: var(--n-fg);
  box-shadow: 0 0 0 3px var(--n-bg), 0 0 8px var(--n-accent-glow);
}

.axis-year {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--n-font-mono);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--n-accent);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.axis-item[data-side='up'] .axis-year {
  top: calc(100% + 2px);
}

.axis-item[data-side='down'] .axis-year {
  bottom: calc(100% + 2px);
}

.axis-stem {
  display: block;
  width: 1px;
  height: 0.7rem;
  background: var(--n-fg);
  flex: none;
}

.axis-copy {
  min-width: 0;
  width: 100%;
}

.axis-label {
  font-family: var(--n-font-display);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.15;
  color: var(--n-fg);
}

.axis-body {
  margin-top: 0.18rem;
  font-size: 0.62rem;
  line-height: 1.25;
  color: var(--n-muted);
}

.axis-media {
  display: flex;
  gap: 0.2rem;
  justify-content: center;
  width: 100%;
  margin: 0.25rem 0;
}

.axis-media img {
  max-width: 100%;
  max-height: 3.4rem;
  width: auto;
  height: auto;
  object-fit: cover;
  border: 1px solid var(--n-border);
}

.axis-item[data-side='up'] .axis-pane.above .axis-media {
  margin-bottom: 0.3rem;
}

.axis-item[data-side='down'] .axis-pane.below .axis-media {
  margin-top: 0.3rem;
}
</style>
