<script setup>
defineProps({
  eyebrow: { type: String, default: 'THANK YOU' },
})
</script>

<template>
  <div class="slidev-layout end">
    <p v-if="eyebrow" class="compass-eyebrow">{{ eyebrow }}</p>
    <slot />
    <SlideNumber />
  </div>
</template>
