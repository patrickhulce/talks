<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: 'ABOUT / THE TALK' },
})
</script>

<template>
  <HudShell class="about" :label="label || split">
    <slot />
    <div class="about-tiles">
      <slot name="tiles" />
    </div>
  </HudShell>
</template>
