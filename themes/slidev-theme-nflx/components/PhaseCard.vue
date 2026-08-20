<script setup>
defineProps({
  phase: { type: String, default: '' },
  kicker: { type: String, default: '' },
  title: { type: String, default: '' },
  src: { type: String, default: '' },
})
</script>

<template>
  <article class="phase-card">
    <HudFrame v-if="src || $slots.default" class="phase-card-frame" :src="src">
      <slot />
    </HudFrame>
    <HudMeta v-if="phase || kicker">{{ [phase && `PHASE_${phase}`, kicker].filter(Boolean).join('  //  ') }}</HudMeta>
    <h3 v-if="title">{{ title }}</h3>
    <div class="phase-card-body">
      <slot name="body" />
    </div>
  </article>
</template>

<style scoped>
.phase-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.phase-card-frame {
  aspect-ratio: 16 / 10;
  height: auto;
  min-height: 0;
  margin-bottom: 0.7rem;
}

h3 {
  margin: 0.15rem 0 0.35rem;
  font-family: var(--n-font-display);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--n-fg);
}

.phase-card-body {
  font-size: 0.82rem;
  line-height: 1.35;
  color: var(--n-muted);
}

.phase-card :deep(.hud-kicker) {
  margin-bottom: 0.25rem;
}
</style>
