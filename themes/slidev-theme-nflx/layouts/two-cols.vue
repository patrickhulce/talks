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
  <HudShell class="two-cols" :label="label || split">
    <HudTitle v-if="title" :title="title" :accent="accent" :kicker="kicker" />
    <div class="two-cols-grid">
      <HudCard accent="left">
        <slot name="left" />
      </HudCard>
      <HudCard accent="left">
        <slot name="right" />
      </HudCard>
    </div>
  </HudShell>
</template>
