<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
})
</script>

<template>
  <HudShell class="chapter" :label="label || split">
    <div class="chapter-marks">
      <slot name="marks" />
    </div>
    <div class="chapter-body">
      <slot />
    </div>
  </HudShell>
</template>
