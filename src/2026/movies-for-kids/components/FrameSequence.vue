<script setup>
import { computed } from 'vue'
import videoUrl from '../videos/example.mp4'

const props = defineProps({ step: { type: Number, default: 0 } })
const keyframes = computed(() => props.step >= 2)
const files = import.meta.glob('../images/example-frame-*.jpg', { eager: true, query: '?url', import: 'default' })
const frames = computed(() => Object.entries(files).sort(([a], [b]) => a.localeCompare(b)).map(([, url]) => url))
</script>

<template>
  <div class="frame-lesson" :class="{ 'show-keyframes': keyframes }">
    <p class="frame-definition" aria-live="polite">
      <template v-if="keyframes">Important frames are called <strong>keyframes.</strong></template>
      <template v-else-if="step === 1">Each picture is called a <strong>frame.</strong></template>
      <template v-else>A video is a bunch of pictures<br>changing very quickly.</template>
    </p>
    <div class="frame-comparison">
      <div class="loop-column">
        <HudFrame fit="contain" :scanlines="false">
          <video :src="videoUrl" autoplay loop muted playsinline controls aria-label="Example video playing on a loop" />
        </HudFrame>
      </div>
      <div class="film-grid" aria-label="Nine evenly spaced frames, read left to right then top to bottom">
        <figure v-for="(src, index) in frames" :key="src" :class="{ 'key-frame': keyframes && (index === 0 || index === 8) }">
          <img :src="src" :alt="`Frame ${index + 1} of 9 from the example video`" />
          <figcaption>{{ String(index + 1).padStart(2, '0') }}<span v-if="keyframes && index === 0"> / FIRST</span><span v-if="keyframes && index === 8"> / LAST</span></figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.frame-lesson { display: flex; flex-direction: column; height: 100%; padding-top: 1.5rem; box-sizing: border-box; gap: 1.35rem; min-height: 0; }
.frame-definition { font-size: 2rem; line-height: 1.25; font-weight: 600; text-align: center; margin: 0; min-height: 5rem; align-content: center; flex: none; }
.frame-definition strong { color: var(--n-accent); }
.frame-comparison { display: grid; grid-template-columns: 0.9fr 1.25fr; align-items: center; gap: 1.5rem; flex: 1; min-height: 0; }
.loop-column { display: flex; flex-direction: column; gap: 0.7rem; min-width: 0; }
.loop-column .hud-frame { flex: none; aspect-ratio: 16 / 9; min-height: 0; }
.film-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.65rem 0.45rem; }
figure { margin: 0; border: 2px solid #3b3b3b; background: #0a0a0a; position: relative; transition: border-color 180ms, box-shadow 180ms; }
figure::before, figure::after { content: ''; display: block; height: 7px; background: repeating-linear-gradient(90deg, transparent 0 8px, #4b4b4b 8px 14px, transparent 14px 22px); }
figure img { width: 100%; aspect-ratio: 16 / 9; object-fit: contain; display: block; }
figcaption { position: absolute; bottom: 10px; left: 5px; padding: 1px 4px; color: white; background: #000b; font: 0.6rem var(--n-font-mono); }
figure.key-frame { border-color: var(--n-accent); box-shadow: 0 0 16px var(--n-accent-glow); }
figure.key-frame::before, figure.key-frame::after { background: repeating-linear-gradient(90deg, transparent 0 8px, var(--n-accent) 8px 14px, transparent 14px 22px); }
figure.key-frame figcaption { background: var(--n-accent); }
</style>
