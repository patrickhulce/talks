<script setup>
defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  target: { type: String, default: '' },
  caption: { type: String, default: '' },
  scanlines: { type: Boolean, default: true },
  fit: { type: String, default: 'cover' },
  hug: { type: Boolean, default: false },
})
</script>

<template>
  <div class="hud-frame" :data-scanlines="scanlines ? 'true' : 'false'" :data-fit="fit" :data-hug="hug ? 'true' : 'false'">
    <span class="hud-bracket tl" aria-hidden="true" />
    <span class="hud-bracket tr" aria-hidden="true" />
    <span class="hud-bracket bl" aria-hidden="true" />
    <span class="hud-bracket br" aria-hidden="true" />
    <div class="hud-frame-media">
      <img v-if="src" :src="src" :alt="alt">
      <slot v-else />
      <div v-if="scanlines" class="hud-scanlines" aria-hidden="true" />
    </div>
    <div v-if="target || caption || $slots.overlay" class="hud-frame-overlay">
      <slot name="overlay">
        <p v-if="target" class="hud-frame-target">{{ target }}</p>
        <p v-if="caption" class="hud-frame-caption">{{ caption }}</p>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.hud-frame {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 8rem;
  flex: 1 1 0;
  border: 1px solid var(--n-border);
  background: #050505;
  overflow: hidden;
}

.hud-bracket {
  position: absolute;
  width: 1.15rem;
  height: 1.15rem;
  z-index: 3;
  pointer-events: none;
  border-color: var(--n-accent);
  border-style: solid;
}

.hud-bracket.tl { top: 6px; left: 6px; border-width: 2px 0 0 2px; }
.hud-bracket.tr { top: 6px; right: 6px; border-width: 2px 2px 0 0; }
.hud-bracket.bl { bottom: 6px; left: 6px; border-width: 0 0 2px 2px; }
.hud-bracket.br { bottom: 6px; right: 6px; border-width: 0 2px 2px 0; }

.hud-frame-media {
  position: absolute;
  inset: 0;
}

.hud-frame-media > :first-child {
  width: 100%;
  height: 100%;
}

.hud-frame-media :deep(img),
.hud-frame-media :deep(video),
.hud-frame-media :deep(.media-tile),
.hud-frame-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(0.25) contrast(1.08);
}

.hud-frame[data-fit='contain'] :deep(img),
.hud-frame[data-fit='contain'] img {
  object-fit: contain;
  filter: none;
  background: #050505;
}

.hud-frame[data-hug='true'] {
  flex: none;
  width: min(100%, 20rem);
  height: auto;
  min-height: 0;
  aspect-ratio: 1;
}

.hud-scanlines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    repeating-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.18) 0 1px,
      transparent 1px 3px
    );
  mix-blend-mode: multiply;
}

.hud-frame-overlay {
  position: absolute;
  right: 0.7rem;
  bottom: 0.7rem;
  z-index: 2;
  max-width: 70%;
  padding: 0.45rem 0.6rem;
  background: rgba(10, 10, 10, 0.82);
  border: 1px solid var(--n-border);
}

.hud-frame-target {
  margin: 0;
  font-family: var(--n-font-mono);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--n-accent);
}

.hud-frame-caption {
  margin: 0.18rem 0 0;
  font-family: var(--n-font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.06em;
  color: var(--n-muted);
}
</style>
