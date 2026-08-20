<script setup>
defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  link: { type: String, default: '' },
  image: { type: String, default: '' },
})
</script>

<template>
  <HudShell class="demo" :label="label || split">
    <slot />
    <p v-if="link" class="demo-link">{{ link }}</p>
    <div class="demo-media">
      <HudFrame fit="contain">
        <slot name="media">
          <img v-if="image" :src="image" alt="">
        </slot>
      </HudFrame>
    </div>
  </HudShell>
</template>
