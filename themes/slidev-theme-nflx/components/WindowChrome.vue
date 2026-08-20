<script setup>
import { useSlots } from 'vue'

defineProps({
  title: { type: String, default: '' },
  kind: { type: String, default: 'code' },
  url: { type: String, default: 'localhost:5173' },
})

const slots = useSlots()
</script>

<template>
  <div class="window-chrome" :data-kind="kind">
    <div class="window-chrome-bar">
      <svg class="window-chrome-dots" viewBox="0 0 52 14" aria-hidden="true">
        <circle cx="7" cy="7" r="5" fill="#ff1e4e" />
        <circle cx="26" cy="7" r="5" fill="#c4123a" />
        <circle cx="45" cy="7" r="5" fill="#5e5e5e" />
      </svg>
      <div v-if="kind === 'browser'" class="window-chrome-tab">{{ title || 'Preview' }}</div>
      <span v-else-if="title" class="window-chrome-title">{{ title }}</span>
    </div>
    <div v-if="kind === 'browser'" class="window-chrome-url">
      <span>{{ url }}</span>
    </div>
    <div class="window-chrome-body">
      <slot />
      <div v-if="kind === 'screenshot' && !slots.default" class="window-chrome-skeleton" aria-hidden="true">
        <div class="sk-nav" />
        <div class="sk-hero" />
        <div class="sk-row">
          <div class="sk-card" />
          <div class="sk-card" />
          <div class="sk-card" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.window-chrome {
  overflow: hidden;
  border: 1px solid var(--n-border);
  background: var(--n-code);
  width: 100%;
  box-shadow: 0 0 0 1px rgba(255, 30, 78, 0.08);
}

.window-chrome-bar {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  height: 1.7rem;
  padding: 0 0.7rem;
  background: #111;
  border-bottom: 1px solid var(--n-border);
}

.window-chrome-dots {
  width: 3.25rem;
  height: 0.88rem;
  flex: none;
}

.window-chrome-title {
  font-family: var(--n-font-mono);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--n-muted);
}

.window-chrome-tab {
  font-family: var(--n-font-mono);
  font-size: 0.68rem;
  font-weight: 500;
  background: var(--n-surface);
  color: var(--n-fg);
  padding: 0.18rem 0.7rem;
  border: 1px solid var(--n-border);
  border-bottom: 0;
}

.window-chrome-url {
  height: 1.55rem;
  display: flex;
  align-items: center;
  padding: 0 0.7rem 0 3.9rem;
  background: #0d0d0d;
  border-bottom: 1px solid var(--n-border);
}

.window-chrome-url span {
  display: block;
  width: 100%;
  background: #050505;
  border: 1px solid var(--n-border);
  padding: 0.12rem 0.7rem;
  font-family: var(--n-font-mono);
  font-size: 0.68rem;
  font-weight: 500;
  color: var(--n-dim);
}

.window-chrome-body :deep(pre) {
  margin: 0;
  border-radius: 0;
  background: transparent !important;
  border: 0 !important;
}

.window-chrome-skeleton {
  padding: 1rem 1.1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 14rem;
}

.sk-nav,
.sk-hero,
.sk-card {
  background: linear-gradient(90deg, #1a1a1a, #242424 50%, #1a1a1a);
}

.sk-nav {
  height: 1.1rem;
  width: 55%;
}

.sk-hero {
  height: 6.5rem;
}

.sk-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.6rem;
}

.sk-card {
  height: 3.4rem;
}
</style>
