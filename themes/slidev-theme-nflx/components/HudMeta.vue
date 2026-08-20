<script setup>
defineProps({
  as: { type: String, default: 'p' },
})
</script>

<template>
  <component :is="as" class="hud-kicker">
    <slot />
  </component>
</template>

<style scoped>
.hud-kicker {
  margin: 0 0 0.55rem;
  font-family: var(--n-font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--n-accent);
}
</style>
