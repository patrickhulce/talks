<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, default: '' },
  split: { type: String, default: '' },
})

const parts = computed(() => {
  const raw = props.split || props.label
  if (!raw)
    return []
  if (raw.includes('/'))
    return raw.split(/\s*\/\s*/).map(s => s.trim()).filter(Boolean)
  return [raw]
})
</script>

<template>
  <div v-if="parts.length" class="footer-label">
    <span class="footer-tick" />
    <span class="footer-words">
      <span v-for="(part, i) in parts" :key="i">{{ part }}</span>
    </span>
  </div>
</template>

<style scoped>
.footer-label {
  position: absolute;
  left: var(--n-footer-x);
  bottom: var(--n-footer-y);
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0;
  z-index: 8;
  font-size: 0.67rem;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--n-fg);
  line-height: 1.2;
}

.slidev-layout.is-light .footer-label,
.slidev-layout.agenda .footer-label,
.slidev-layout.split .footer-label {
  color: var(--n-fg);
}

.slidev-layout.agenda .footer-label,
.slidev-layout.split .footer-label {
  color: #fff;
}

.slidev-layout.is-light:not(.agenda):not(.split) .footer-label {
  color: var(--n-fg-light);
}

.footer-tick {
  display: block;
  width: 1px;
  height: 1.1em;
  background: var(--n-accent);
  flex: none;
}

.footer-words {
  display: flex;
  flex-direction: column;
}

.footer-words span {
  display: block;
}
</style>
