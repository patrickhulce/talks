<script setup>
import { computed, unref } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
  title: { type: String, default: '' },
  kicker: { type: String, default: '' },
  accent: { type: String, default: '' },
})

const { $frontmatter } = useSlideContext()

const heading = computed(() => {
  const front = unref($frontmatter) || {}
  return {
    title: String(props.title || front.title || ''),
    accent: String(props.accent || front.accent || ''),
    kicker: props.kicker || front.kicker || '',
  }
})
</script>

<template>
  <HudShell class="code" :label="label || split">
    <HudTitle
      v-if="heading.title"
      :title="heading.title"
      :accent="heading.accent"
      :kicker="heading.kicker"
      :stacked="false"
    />
    <div class="code-body">
      <slot />
    </div>
  </HudShell>
</template>
