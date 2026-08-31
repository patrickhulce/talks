<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  title: { type: String, default: '' },
  labels: { type: Array, default: () => [] },
})

const { $clicksContext } = useSlideContext()

const activeIndex = computed(() => {
  const last = Math.max(0, props.labels.length - 1)
  const raw = $clicksContext?.current
  const n = typeof raw === 'number' ? raw : Number(raw)
  const current = Number.isFinite(n) ? Math.max(0, n) : 0
  return Math.min(current, last)
})

function isActive(i) {
  return i === activeIndex.value
}
</script>

<template>
  <div class="hud-code-rail" :data-active="String(activeIndex)">
    <WindowChrome :title="title">
      <slot />
    </WindowChrome>
    <div class="hud-code-rail-labels">
      <p
        v-for="(label, i) in labels"
        :key="i"
        :class="{ 'is-active': isActive(i) }"
      >{{ label }}</p>
    </div>
  </div>
</template>

<style scoped>
.hud-code-rail {
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 1.5rem;
  min-width: 0;
}

.hud-code-rail :deep(.window-chrome) {
  flex: 1 1 auto;
  min-width: 0;
  width: auto;
}

.hud-code-rail :deep(.line) {
  opacity: 0.35;
  border-left: 2px solid transparent;
  padding-left: 0.45rem;
  margin-left: -0.45rem;
  transition: opacity 180ms ease, border-color 180ms ease;
}

.hud-code-rail :deep(.line.highlighted) {
  opacity: 1;
  border-left-color: var(--n-accent);
}

.hud-code-rail-labels {
  flex: 0 0 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.hud-code-rail-labels p {
  margin: 0;
  font-family: var(--n-font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--n-dim);
  transition: color 180ms ease;
}

.hud-code-rail-labels p.is-active {
  color: var(--n-accent);
}
</style>
