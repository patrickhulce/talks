<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  title: { type: String, default: '' },
  image: { type: String, default: '' },
  caption: { type: String, default: '' },
  bleed: { type: Boolean, default: false },
  tone: { type: String, default: 'dark' },
  kicker: { type: String, default: '' },
  accent: { type: String, default: '' },
  target: { type: String, default: '' },
})
</script>

<template>
  <HudShell class="image-slide" :class="{ bleed }" :label="label || split">
    <HudTitle v-if="title" :title="title" :accent="accent" :kicker="kicker" />
    <slot />
    <div class="image-frame">
      <HudFrame :src="image" :caption="caption" :target="target">
        <slot name="media" />
      </HudFrame>
    </div>
  </HudShell>
</template>
