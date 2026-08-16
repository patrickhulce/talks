<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  image: { type: String, default: '' },
})

const slots = useSlots()
const hasMedia = computed(() => Boolean(props.image || slots.media))
</script>

<template>
  <div class="slidev-layout end" :class="{ 'has-media': hasMedia }">
    <div class="end-grid">
      <div class="end-body">
        <slot />
      </div>
      <div v-if="hasMedia" class="end-media">
        <slot name="media">
          <img v-if="image" :src="image" alt="">
        </slot>
      </div>
    </div>
    <SlideNumber />
  </div>
</template>
