<script setup>
defineProps({
  eyebrow: { type: String, default: 'ABOUT' },
  image: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout intro">
    <p v-if="eyebrow" class="compass-eyebrow">{{ eyebrow }}</p>
    <div class="intro-grid">
      <div class="intro-media">
        <slot name="media">
          <img v-if="image" :src="image" alt="">
        </slot>
      </div>
      <div class="intro-body">
        <slot />
      </div>
    </div>
    <SlideNumber />
  </div>
</template>
