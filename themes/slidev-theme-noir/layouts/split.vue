<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout split">
    <div class="split-pane dark">
      <slot name="left" />
    </div>
    <div class="split-pane light">
      <slot name="right" />
    </div>
    <FooterLabel :label="label" :split="split" />
    <SlideNumber />
  </div>
</template>
