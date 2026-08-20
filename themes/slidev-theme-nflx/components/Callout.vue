<script setup>
defineProps({
  label: { type: String, default: '' },
  overlay: { type: String, default: '' },
})
</script>

<template>
  <div class="callout" :data-overlay="overlay || undefined">
    <div class="callout-box">
      <slot />
      <p v-if="label && overlay" class="callout-badge" :data-edge="overlay">{{ label }}</p>
    </div>
    <p v-if="label && !overlay" class="callout-label">{{ label }}</p>
  </div>
</template>

<style scoped>
.callout {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
}

.callout[data-overlay] {
  height: 100%;
  min-height: 0;
}

.callout-box {
  --cut: 10px;
  position: relative;
  width: 100%;
  min-height: 6.5rem;
  border: 1px solid var(--n-border);
  background: var(--n-surface);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(
    0 var(--cut),
    var(--cut) 0,
    100% 0,
    100% calc(100% - var(--cut)),
    calc(100% - var(--cut)) 100%,
    0 100%
  );
  box-shadow: inset 2px 0 0 var(--n-accent);
}

.callout[data-overlay] .callout-box {
  height: 100%;
  min-height: 0;
  flex: 1;
}

.callout-box :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.2) contrast(1.05);
}

.callout[data-overlay] .callout-box :deep(img) {
  position: absolute;
  inset: 0;
}

.callout-label {
  margin: 0.45rem 0 0;
  font-family: var(--n-font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--n-accent);
  text-align: center;
}

.callout-badge {
  position: absolute;
  left: 0;
  z-index: 2;
  margin: 0;
  padding: 0.38rem 0.72rem;
  background: var(--n-accent);
  color: #fff;
  font-family: var(--n-font-display);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1;
  box-shadow: 0 0 12px var(--n-accent-glow);
}

.callout-badge[data-edge='top'] {
  top: 0;
}

.callout-badge[data-edge='bottom'] {
  bottom: 0;
}
</style>
