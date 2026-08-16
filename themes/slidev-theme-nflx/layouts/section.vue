<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  image: { type: String, default: '' },
})

const slots = useSlots()
const hasMedia = computed(() => Boolean(props.image || slots.media))
</script>

<template>
  <div class="slidev-layout section" :class="{ 'has-media': hasMedia }">
    <div v-if="hasMedia" class="section-media">
      <slot name="media">
        <img v-if="image" :src="image" alt="">
      </slot>
    </div>
    <div class="section-body">
      <slot />
    </div>
    <FooterLabel :label="label" :split="split" />
    <SlideNumber />
  </div>
</template>
