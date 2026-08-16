<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: 'ABOUT / THE TALK' },
})
</script>

<template>
  <div class="slidev-layout about">
    <slot />
    <div class="about-tiles">
      <slot name="tiles" />
    </div>
    <FooterLabel :label="label" :split="split" />
    <SlideNumber />
  </div>
</template>
