<script setup>
defineProps({
  label: { type: String, default: '' },
})
</script>

<template>
  <div class="callout">
    <div class="callout-box">
      <slot />
    </div>
    <p v-if="label" class="callout-label">{{ label }}</p>
  </div>
</template>

<style scoped>
.callout {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
}

.callout-box {
  width: 100%;
  min-height: 6.5rem;
  border: 2px solid var(--n-accent);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.callout-label {
  margin: 0.45rem 0 0;
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: var(--n-accent);
  text-align: center;
}
</style>
