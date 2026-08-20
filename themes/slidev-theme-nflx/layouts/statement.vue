<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  display: { type: Boolean, default: false },
  kicker: { type: String, default: '' },
})
</script>

<template>
  <HudShell class="statement" :class="{ display }" :label="label || split">
    <HudMeta v-if="kicker">{{ kicker }}</HudMeta>
    <slot />
  </HudShell>
</template>
