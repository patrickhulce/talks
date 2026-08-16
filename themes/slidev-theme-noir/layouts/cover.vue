<script setup>
defineProps({
  event: { type: String, default: '' },
  date: { type: String, default: '' },
  speaker: { type: String, default: '' },
  email: { type: String, default: '' },
  bar: { type: String, default: '' },
  link: { type: String, default: '' },
  image: { type: String, default: '' },
  band: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout cover" :class="{ 'has-band': band }">
    <img v-if="band" class="cover-band" :src="band" alt="">
    <div class="cover-title">
      <slot />
    </div>
    <div v-if="bar || event || date" class="cover-meta">
      {{ bar || [event, date].filter(Boolean).join(' · ') }}
    </div>
    <div class="cover-row">
      <div class="cover-media">
        <slot name="media">
          <img v-if="image" class="cover-photo" :src="image" alt="">
        </slot>
      </div>
      <div v-if="speaker || email" class="cover-speaker">
        <div v-if="speaker">{{ speaker }}</div>
        <div v-if="email" class="email">{{ email }}</div>
      </div>
    </div>
    <div v-if="link" class="cover-link">{{ link }}</div>
    <SlideNumber />
  </div>
</template>
