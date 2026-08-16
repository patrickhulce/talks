<script setup>
defineProps({
  event: { type: String, default: '' },
  date: { type: String, default: '' },
  speaker: { type: String, default: '' },
  kicker: { type: String, default: 'ENGINEERING' },
})
</script>

<template>
  <div class="slidev-layout cover">
    <div v-if="kicker" class="cover-kicker">
      {{ kicker }}
    </div>
    <slot />
    <div v-if="event || speaker || date" class="cover-meta">
      <div v-if="event">{{ event }}</div>
      <div v-if="speaker">{{ speaker }}</div>
      <div v-if="date">{{ date }}</div>
    </div>
    <SlideNumber />
  </div>
</template>
