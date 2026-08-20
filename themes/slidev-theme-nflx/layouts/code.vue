<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  title: { type: String, default: '' },
  kicker: { type: String, default: '' },
  accent: { type: String, default: '' },
})
</script>

<template>
  <HudShell class="code" :label="label || split">
    <HudTitle v-if="title" :title="title" :accent="accent" :kicker="kicker" :stacked="false" />
    <div class="code-body">
      <slot />
    </div>
  </HudShell>
</template>
