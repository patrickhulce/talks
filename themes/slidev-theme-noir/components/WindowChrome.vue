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
        <circle cx="7" cy="7" r="5" fill="#e50914" />
        <circle cx="26" cy="7" r="5" fill="#d83729" />
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
  border: 1px solid #2a2a2a;
  background: #141414;
  width: 100%;
}

.slidev-layout.is-light .window-chrome,
.window-chrome[data-kind="browser"],
.window-chrome[data-kind="screenshot"] {
  border-color: #d0d0d0;
  background: #fff;
}

.window-chrome-bar {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  height: 1.7rem;
  padding: 0 0.7rem;
  background: #111;
  border-bottom: 1px solid #2a2a2a;
}

.window-chrome[data-kind="browser"] .window-chrome-bar,
.window-chrome[data-kind="screenshot"] .window-chrome-bar {
  background: #f3f3f3;
  border-bottom-color: #e2e2e2;
}

.window-chrome-dots {
  width: 3.25rem;
  height: 0.88rem;
  flex: none;
}

.window-chrome-title {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--n-muted);
}

.window-chrome-tab {
  font-size: 0.7rem;
  font-weight: 600;
  background: #fff;
  color: #222;
  padding: 0.18rem 0.7rem;
  border-radius: 6px 6px 0 0;
}

.window-chrome-url {
  height: 1.55rem;
  display: flex;
  align-items: center;
  padding: 0 0.7rem 0 3.9rem;
  background: #f3f3f3;
  border-bottom: 1px solid #e2e2e2;
}

.window-chrome-url span {
  display: block;
  width: 100%;
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 999px;
  padding: 0.12rem 0.7rem;
  font-size: 0.68rem;
  font-weight: 500;
  color: #666;
}

.window-chrome-body :deep(pre) {
  margin: 0;
  border-radius: 0;
  background: transparent !important;
  border: 0 !important;
}

.window-chrome[data-kind="code"] {
  border-color: #d0d0d0;
  background: #fff;
}

.window-chrome[data-kind="code"] .window-chrome-bar {
  background: #f3f3f3;
  border-bottom-color: #e2e2e2;
}

.window-chrome[data-kind="code"] .window-chrome-body :deep(pre) {
  background: #fff !important;
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
  background: linear-gradient(90deg, #ececec, #f7f7f7 50%, #ececec);
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
