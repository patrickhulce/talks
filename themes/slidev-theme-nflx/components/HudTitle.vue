<script setup>
import { computed } from 'vue'

const props = defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, default: '' },
  accent: { type: String, default: '' },
  stacked: { type: Boolean, default: true },
})

const parts = computed(() => {
  const raw = (props.title || '').trim()
  if (props.accent)
    return { lead: raw, accent: props.accent }
  const words = raw.split(/\s+/).filter(Boolean)
  if (words.length < 2)
    return { lead: raw, accent: '' }
  return { lead: words.slice(0, -1).join(' '), accent: words[words.length - 1] }
})
</script>

<template>
  <div class="hud-title" :data-stacked="stacked ? 'true' : 'false'">
    <HudMeta v-if="kicker">{{ kicker }}</HudMeta>
    <h1>
      <span v-if="parts.lead" class="hud-title-lead">{{ parts.lead }}</span>
      <span v-if="parts.accent" class="hud-title-accent">{{ parts.accent }}</span>
    </h1>
    <span class="hud-title-rule" aria-hidden="true" />
  </div>
</template>

<style scoped>
.hud-title {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
}

.hud-title :deep(.hud-kicker) {
  margin: 0 0 0.22rem;
  padding: 0;
}

.hud-title h1 {
  display: block;
  margin: 0;
  padding: 0;
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: 0.02em;
  text-align: left;
}

.hud-title[data-stacked='true'] .hud-title-lead,
.hud-title[data-stacked='true'] .hud-title-accent {
  display: block;
  margin: 0;
  padding: 0;
  white-space: nowrap;
}

.hud-title[data-stacked='false'] h1 {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.28em;
}

.hud-title-lead {
  color: var(--n-fg);
}

.hud-title-accent {
  color: var(--n-accent);
  text-shadow: 0 0 22px var(--n-accent-glow);
}

.hud-title-rule {
  display: block;
  align-self: flex-start;
  width: 3.2rem;
  height: 3px;
  margin: 0.4rem 0 0;
  padding: 0;
  background: var(--n-accent);
  box-shadow: 0 0 12px var(--n-accent-glow);
}
</style>
