<script setup>
import { computed, useId } from 'vue'

const props = defineProps({
  icon: { type: String, default: '' },
  src: { type: String, default: '' },
  size: { type: String, default: '' },
  tone: { type: String, default: 'dim' },
  caption: { type: String, default: '' },
})

const fid = useId()

const tones = {
  dim: ['#1a1a1a', '#5e5e5e', '#2a2a2a'],
  dark: ['#000000', '#801f17', '#3a0c08'],
  deep: ['#1a0504', '#d83729', '#801f17'],
  accent: ['#3a0608', '#e50914', '#801f17'],
}

const stops = computed(() => tones[props.tone] || tones.dim)
</script>

<template>
  <div class="media-tile" :data-size="size" :data-tone="tone">
    <img v-if="src" :src="src" alt="">
    <template v-else>
      <div
        class="media-tile-wash"
        :style="{
          background: `linear-gradient(148deg, ${stops[0]} 0%, ${stops[1]} 52%, ${stops[2]} 100%)`,
        }"
      />
      <svg class="media-tile-grain" aria-hidden="true">
        <filter :id="fid">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" :filter="`url(#${fid})`" opacity="0.22" />
      </svg>
      <svg v-if="icon === 'browser'" class="media-tile-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="6" y="10" width="52" height="44" stroke="#fff" stroke-width="2.2" />
        <path d="M6 20h52" stroke="#fff" stroke-width="2.2" />
        <circle cx="14" cy="15" r="2" fill="#e50914" />
        <circle cx="21" cy="15" r="2" fill="#d83729" />
        <circle cx="28" cy="15" r="2" fill="#fff" />
      </svg>
      <svg v-else-if="icon === 'chip'" class="media-tile-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="16" y="16" width="32" height="32" stroke="#fff" stroke-width="2.2" />
        <rect x="24" y="24" width="16" height="16" fill="#fff" />
        <path d="M22 8v8M32 8v8M42 8v8M22 48v8M32 48v8M42 48v8M8 22h8M8 32h8M8 42h8M48 22h8M48 32h8M48 42h8" stroke="#fff" stroke-width="2.2" />
      </svg>
      <svg v-else-if="icon === 'film'" class="media-tile-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="10" y="12" width="44" height="40" stroke="#fff" stroke-width="2.2" />
        <path d="M10 20h44M10 44h44" stroke="#fff" stroke-width="2" />
        <rect x="14" y="14" width="5" height="4" fill="#fff" />
        <rect x="23" y="14" width="5" height="4" fill="#fff" />
        <rect x="36" y="14" width="5" height="4" fill="#fff" />
        <rect x="45" y="14" width="5" height="4" fill="#fff" />
        <rect x="14" y="46" width="5" height="4" fill="#fff" />
        <rect x="23" y="46" width="5" height="4" fill="#fff" />
        <rect x="36" y="46" width="5" height="4" fill="#fff" />
        <rect x="45" y="46" width="5" height="4" fill="#fff" />
      </svg>
      <svg v-else-if="icon === 'wave'" class="media-tile-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M6 34c6-14 10-14 16 0s10 14 16 0 10-14 16 0 4 10 8 8" stroke="#fff" stroke-width="2.4" stroke-linecap="round" />
      </svg>
      <svg v-else-if="icon === 'layers'" class="media-tile-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M8 26 32 14l24 12-24 12L8 26Z" stroke="#fff" stroke-width="2.2" />
        <path d="M8 34l24 12 24-12" stroke="#fff" stroke-width="2.2" />
        <path d="M8 42l24 12 24-12" stroke="#fff" stroke-width="2.2" />
      </svg>
      <svg v-else-if="icon === 'qr'" class="media-tile-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="18" height="18" stroke="#fff" stroke-width="2.2" />
        <rect x="38" y="8" width="18" height="18" stroke="#fff" stroke-width="2.2" />
        <rect x="8" y="38" width="18" height="18" stroke="#fff" stroke-width="2.2" />
        <rect x="13" y="13" width="8" height="8" fill="#fff" />
        <rect x="43" y="13" width="8" height="8" fill="#fff" />
        <rect x="13" y="43" width="8" height="8" fill="#fff" />
        <rect x="38" y="38" width="6" height="6" fill="#fff" />
        <rect x="48" y="38" width="8" height="6" fill="#fff" />
        <rect x="38" y="48" width="8" height="8" fill="#fff" />
        <rect x="50" y="50" width="6" height="6" fill="#fff" />
      </svg>
    </template>
    <span v-if="caption" class="media-tile-caption">{{ caption }}</span>
  </div>
</template>

<style scoped>
.media-tile {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  width: 100%;
  overflow: hidden;
  background: #111;
}

.media-tile[data-size="sm"] {
  width: 4.6rem;
  height: 4.6rem;
}

.media-tile[data-size="md"] {
  width: 8rem;
  height: 8rem;
}

.media-tile[data-size="lg"] {
  width: 9.5rem;
  height: 9.5rem;
}

.media-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.media-tile-wash,
.media-tile-grain {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.media-tile-icon {
  position: relative;
  z-index: 1;
  width: 46%;
  height: 46%;
  opacity: 0.92;
}

.media-tile-caption {
  position: absolute;
  left: 0.55rem;
  bottom: 0.45rem;
  z-index: 1;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
}
</style>
