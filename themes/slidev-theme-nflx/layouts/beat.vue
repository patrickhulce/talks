<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  number: { type: String, default: '#1' },
  image: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout beat">
    <img v-if="image" class="beat-bg" :src="image" alt="">
    <p class="beat-number">{{ number }}</p>
    <div class="beat-body">
      <slot />
    </div>
    <FooterLabel :label="label" :split="split" />
    <SlideNumber />
  </div>
</template>
