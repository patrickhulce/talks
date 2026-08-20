<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  tone: { type: String, default: 'dark' },
  kicker: { type: String, default: '' },
})
</script>

<template>
  <HudShell class="quote" :label="label || split">
    <HudMeta v-if="kicker">{{ kicker }}</HudMeta>
    <slot />
  </HudShell>
</template>
