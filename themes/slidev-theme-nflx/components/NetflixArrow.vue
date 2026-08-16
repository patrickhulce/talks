<script setup>
defineProps({
  label: { type: String, default: '' },
})
</script>

<template>
  <div class="netflix-arrow">
    <svg viewBox="0 0 80 28" fill="none" aria-hidden="true">
      <path d="M0 10h52v-8L80 14 52 26v-8H0V10Z" fill="#e50914" />
    </svg>
    <span v-if="label">{{ label }}</span>
  </div>
</template>

<style scoped>
.netflix-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}

.netflix-arrow svg {
  width: 5.2rem;
  height: auto;
}

.netflix-arrow span {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--n-accent);
}
</style>
