<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout chapter">
    <div class="chapter-marks">
      <slot name="marks" />
    </div>
    <div class="chapter-body">
      <slot />
    </div>
    <FooterLabel :label="label" :split="split" />
    <SlideNumber />
  </div>
</template>
