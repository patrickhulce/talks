<script setup>
defineProps({
  label: { type: String, default: 'AGENDA' },
  title: { type: String, default: 'Agenda' },
  image: { type: String, default: '' },
  kicker: { type: String, default: 'SECURE PROTOCOL // INITIALIZED' },
  accent: { type: String, default: '' },
})
</script>

<template>
  <HudShell class="agenda" :label="label">
    <div class="agenda-body">
      <HudTitle :title="title" :accent="accent" :kicker="kicker" />
      <HudCard accent="none" class="agenda-card">
        <slot />
      </HudCard>
    </div>
    <div class="agenda-media">
      <HudFrame>
        <slot name="media">
          <img v-if="image" :src="image" alt="">
        </slot>
      </HudFrame>
    </div>
  </HudShell>
</template>
