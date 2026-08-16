<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  tone: { type: String, default: 'dark' },
})
</script>

<template>
  <div class="slidev-layout quote" :class="{ 'is-light': tone === 'light' }">
    <slot />
    <FooterLabel :label="label" :split="split" />
    <SlideNumber />
  </div>
</template>
