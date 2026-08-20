<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  tone: { type: String, default: 'dark' },
  title: { type: String, default: '' },
  kicker: { type: String, default: '' },
  accent: { type: String, default: '' },
})
</script>

<template>
  <HudShell class="default" :label="label || split">
    <HudTitle v-if="title" :title="title" :accent="accent" :kicker="kicker" />
    <div class="default-body" :class="{ 'has-hud-title': title }">
      <slot />
    </div>
  </HudShell>
</template>
