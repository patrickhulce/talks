<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

function toneColor(tone) {
  if (tone === 'deep')
    return 'var(--n-accent-deep)'
  if (tone === 'dark')
    return 'var(--n-accent-dark)'
  return 'var(--n-accent)'
}
</script>

<template>
  <div class="netflix-timeline" role="list">
    <div
      v-for="(item, i) in items"
      :key="item.year || i"
      class="netflix-timeline-item"
      role="listitem"
    >
      <div class="netflix-timeline-label">{{ item.label }}</div>
      <div class="netflix-timeline-axis">
        <div class="netflix-timeline-tick" :style="{ background: toneColor(item.tone) }" />
      </div>
      <div class="netflix-timeline-year">{{ item.year }}</div>
    </div>
  </div>
</template>

<style scoped>
.netflix-timeline {
  display: flex;
  align-items: stretch;
  width: 100%;
  position: relative;
}

.netflix-timeline-item {
  flex: 1;
  display: grid;
  grid-template-rows: 3.4rem 0.5rem 1.8rem;
  justify-items: center;
  min-width: 0;
  position: relative;
  z-index: 1;
}

.netflix-timeline-label {
  align-self: end;
  padding-bottom: 0.55rem;
  font-size: 1.15rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.15;
  max-width: 100%;
}

.netflix-timeline-axis {
  position: relative;
  width: 100%;
  height: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.netflix-timeline-axis::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 2px;
  margin-top: -1px;
  background: var(--n-dim);
}

.netflix-timeline-item:first-child .netflix-timeline-axis::before {
  left: 50%;
}

.netflix-timeline-item:last-child .netflix-timeline-axis::before {
  right: 50%;
}

.netflix-timeline-tick {
  position: relative;
  z-index: 1;
  width: 68%;
  max-width: 5.2rem;
  height: 0.38rem;
}

.netflix-timeline-year {
  align-self: start;
  padding-top: 0.45rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--n-soft);
  font-variant-numeric: tabular-nums;
}
</style>
