<script setup>
defineProps({
  name: { type: String, default: 'link' },
})
</script>

<template>
  <svg class="netflix-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      v-if="name === 'mail'"
      d="M3 6.5h18v11H3v-11Zm0 0 9 7 9-7"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linejoin="round"
    />
    <path
      v-else-if="name === 'at'"
      d="M16.5 12a4.5 4.5 0 1 1-1.6-3.4M16.5 8v5.2a2.3 2.3 0 0 0 4 1.6 8.5 8.5 0 1 1-3.2-11"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
    />
    <path
      v-else
      d="M9.2 14.8 14.8 9.2M8 11.2l-1.4 1.4a3.4 3.4 0 0 0 4.8 4.8L13 16m3-3.2 1.4-1.4a3.4 3.4 0 0 0-4.8-4.8L11 8"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped>
.netflix-icon {
  width: 1em;
  height: 1em;
  flex: none;
  color: var(--n-fg);
}
</style>
