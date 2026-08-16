<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  link: { type: String, default: '' },
  image: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout demo">
    <slot />
    <p v-if="link" class="demo-link">{{ link }}</p>
    <div class="demo-media">
      <slot name="media">
        <img v-if="image" :src="image" alt="">
      </slot>
    </div>
    <FooterLabel :label="label" :split="split" />
    <SlideNumber />
  </div>
</template>
