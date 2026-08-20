<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
})
</script>

<template>
  <HudShell class="split" :label="label || split">
    <div class="split-pane dark">
      <slot name="left" />
    </div>
    <div class="split-pane light">
      <slot name="right" />
    </div>
  </HudShell>
</template>
