<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  title: { type: String, default: '' },
  labels: { type: Array, default: () => [] },
})

const { $clicks } = useSlideContext()

const activeIndex = computed(() => {
  const last = Math.max(0, props.labels.length - 1)
  return Math.min(Math.max(0, Number($clicks.value) || 0), last)
})
</script>

<template>
  <div class="hud-code-rail" :data-active="activeIndex">
    <WindowChrome :title="title">
      <slot />
    </WindowChrome>
    <div class="hud-code-rail-labels">
      <p
        v-for="(label, i) in labels"
        :key="i"
        :class="{ 'is-active': i === activeIndex }"
      >{{ label }}</p>
    </div>
  </div>
</template>

<style scoped>
.hud-code-rail {
  display: flex;
  align-items: stretch;
  gap: 1.5rem;
  min-width: 0;
  max-width: 100%;
}

.hud-code-rail :deep(.window-chrome) {
  min-width: 0;
  max-width: calc(100% - 14rem);
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
