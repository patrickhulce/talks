<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout timeline">
    <slot />
    <FooterLabel :label="label" :split="split" />
    <SlideNumber />
  </div>
</template>
