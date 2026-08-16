<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  title: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout code is-light has-title-bar">
    <TitleBar :title="title" />
    <div class="code-body">
      <slot />
    </div>
    <FooterLabel :label="label" :split="split" />
    <SlideNumber />
  </div>
</template>
