<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  kicker: { type: String, default: '' },
})
</script>

<template>
  <HudShell class="timeline" :label="label || split">
    <HudMeta v-if="kicker">{{ kicker }}</HudMeta>
    <slot />
  </HudShell>
</template>
