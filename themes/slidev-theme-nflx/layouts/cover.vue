<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  event: { type: String, default: '' },
  date: { type: String, default: '' },
  speaker: { type: String, default: '' },
  email: { type: String, default: '' },
  bar: { type: String, default: '' },
  link: { type: String, default: '' },
  image: { type: String, default: '' },
  band: { type: String, default: '' },
  label: { type: String, default: '' },
  kicker: { type: String, default: '' },
})

const slots = useSlots()
const hasMedia = computed(() => Boolean(props.image || slots.media))
</script>

<template>
  <HudShell class="cover" :class="{ 'has-band': band }" :label="label">
    <div class="cover-grid" :class="{ 'no-media': !hasMedia }">
      <div class="cover-copy">
        <HudMeta>{{ kicker || bar || [event, date].filter(Boolean).join(' // ') || 'SECURE PROTOCOL // INITIALIZED' }}</HudMeta>
        <slot />
        <div v-if="speaker || email" class="cover-speaker">
          <div v-if="speaker">{{ speaker }}</div>
          <div v-if="email" class="email">{{ email }}</div>
        </div>
        <div v-if="link" class="cover-link">{{ link }}</div>
      </div>
      <div v-if="hasMedia" class="cover-media">
        <HudFrame fit="contain" hug>
          <slot name="media">
            <img v-if="image" class="cover-photo" :src="image" alt="">
          </slot>
        </HudFrame>
      </div>
    </div>
  </HudShell>
</template>
