<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  tone: { type: String, default: 'light' },
  title: { type: String, default: '' },
})
</script>

<template>
  <div
    class="slidev-layout default"
    :class="{
      'is-light': tone === 'light',
      'has-title-bar': tone === 'light',
    }"
  >
    <TitleBar v-if="tone === 'light'" :title="title" />
    <slot />
    <FooterLabel :label="label" :split="split" />
    <SlideNumber />
  </div>
</template>
