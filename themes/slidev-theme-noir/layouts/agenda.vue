<script setup>
defineProps({
  label: { type: String, default: 'AGENDA' },
  title: { type: String, default: 'Agenda' },
  image: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout agenda">
    <div class="agenda-media">
      <h1 v-if="title">{{ title }}</h1>
      <slot name="media">
        <img v-if="image" :src="image" alt="">
      </slot>
    </div>
    <div class="agenda-body">
      <slot />
    </div>
    <FooterLabel :label="label" />
    <SlideNumber />
  </div>
</template>
