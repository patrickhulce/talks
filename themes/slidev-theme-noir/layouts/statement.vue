<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  display: { type: Boolean, default: false },
})
</script>

<template>
  <div class="slidev-layout statement" :class="{ display }">
    <slot />
    <FooterLabel :label="label" :split="split" />
    <SlideNumber />
  </div>
</template>
