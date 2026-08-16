<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout section">
    <p v-if="eyebrow" class="compass-eyebrow">{{ eyebrow }}</p>
    <slot />
    <SlideNumber />
  </div>
</template>
