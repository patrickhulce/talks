<script setup>
defineProps({
  kind: { type: String, default: 'solid' },
})
</script>

<template>
  <span class="hud-button" :data-kind="kind">
    <slot />
  </span>
</template>

<style scoped>
.hud-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 1.15rem;
  font-family: var(--n-font-display);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  line-height: 1;
}

.hud-button[data-kind='solid'] {
  background: var(--n-accent);
  color: #000;
  box-shadow: 0 0 16px var(--n-accent-glow);
}

.hud-button[data-kind='ghost'] {
  background: transparent;
  color: var(--n-accent);
  box-shadow: inset 0 0 0 1px var(--n-accent);
}
</style>
