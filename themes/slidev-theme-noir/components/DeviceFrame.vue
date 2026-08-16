<script setup>
defineProps({
  kind: { type: String, default: 'monitor' },
})
</script>

<template>
  <div class="device-frame" :data-kind="kind">
    <svg v-if="kind === 'phone'" viewBox="0 0 80 140" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="68" height="132" rx="10" stroke="currentColor" stroke-width="2.2" />
      <rect x="30" y="10" width="20" height="4" rx="2" fill="currentColor" opacity="0.35" />
      <circle cx="40" cy="128" r="3.2" stroke="currentColor" stroke-width="1.6" />
    </svg>
    <svg v-else-if="kind === 'tablet'" viewBox="0 0 140 100" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="132" height="88" rx="8" stroke="currentColor" stroke-width="2.2" />
      <circle cx="128" cy="50" r="2.6" fill="currentColor" opacity="0.35" />
    </svg>
    <svg v-else viewBox="0 0 160 110" fill="none" aria-hidden="true">
      <rect x="8" y="6" width="144" height="82" rx="3" stroke="currentColor" stroke-width="2.2" />
      <path d="M64 92h32l8 10H56l8-10Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
      <rect x="48" y="102" width="64" height="3" fill="currentColor" opacity="0.35" />
    </svg>
    <div class="device-frame-slot">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.device-frame {
  position: relative;
  width: 100%;
  max-width: 22rem;
  color: currentColor;
}

.device-frame svg {
  display: block;
  width: 100%;
  height: auto;
}

.device-frame-slot {
  position: absolute;
  inset: 12% 10% 22%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--n-muted);
  font-size: 0.85rem;
  font-weight: 600;
}

.device-frame[data-kind="tablet"] .device-frame-slot {
  inset: 12% 8% 12%;
}

.device-frame[data-kind="phone"] {
  max-width: 9.5rem;
}

.device-frame[data-kind="phone"] .device-frame-slot {
  inset: 10% 14% 12%;
}
</style>
