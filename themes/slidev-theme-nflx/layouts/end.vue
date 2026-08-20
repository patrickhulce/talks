<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  image: { type: String, default: '' },
  label: { type: String, default: '' },
})

const slots = useSlots()
const hasMedia = computed(() => Boolean(props.image || slots.media))
</script>

<template>
  <HudShell class="end" :class="{ 'has-media': hasMedia }" :label="label">
    <div class="end-grid">
      <div class="end-body">
        <slot />
      </div>
      <div v-if="hasMedia" class="end-media">
        <HudFrame fit="contain">
          <slot name="media">
            <img v-if="image" :src="image" alt="">
          </slot>
        </HudFrame>
      </div>
    </div>
  </HudShell>
</template>
