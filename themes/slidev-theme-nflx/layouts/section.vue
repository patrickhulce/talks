<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  image: { type: String, default: '' },
  kicker: { type: String, default: '' },
})

const slots = useSlots()
const hasMedia = computed(() => Boolean(props.image || slots.media))
</script>

<template>
  <HudShell class="section" :class="{ 'has-media': hasMedia }" :label="label || split">
    <div v-if="hasMedia" class="section-media">
      <HudFrame>
        <slot name="media">
          <img v-if="image" :src="image" alt="">
        </slot>
      </HudFrame>
    </div>
    <div class="section-body">
      <slot />
    </div>
  </HudShell>
</template>
