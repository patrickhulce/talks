<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  title: { type: String, default: '' },
  image: { type: String, default: '' },
  caption: { type: String, default: '' },
  bleed: { type: Boolean, default: false },
  tone: { type: String, default: 'light' },
})
</script>

<template>
  <div
    class="slidev-layout image-slide"
    :class="{
      'is-light': tone === 'light',
      'has-title-bar': tone === 'light',
      bleed,
    }"
  >
    <TitleBar v-if="tone === 'light'" :title="title" />
    <slot />
    <div class="image-frame">
      <slot name="media">
        <img v-if="image" :src="image" alt="">
      </slot>
    </div>
    <p v-if="caption" class="image-caption">{{ caption }}</p>
    <FooterLabel :label="label" :split="split" />
    <SlideNumber />
  </div>
</template>
