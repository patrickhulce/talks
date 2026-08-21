<script setup>
import NetflixArrow from './NetflixArrow.vue'

defineProps({
  examples: { type: Array, default: () => [] },
  trainingCaption: { type: String, default: '' },
  inferencePrompt: { type: String, default: '' },
  inferenceImages: { type: Array, default: () => [] },
})
</script>

<template>
  <div class="concept-flow">
    <div class="concept-col">
      <h2>Model</h2>
      <div class="concept-col-body">
        <div v-for="(ex, i) in examples" :key="i" class="concept-pair">
          <span class="concept-chip">{{ ex.label }}</span>
          <NetflixArrow />
          <div class="concept-thumb">
            <img :src="ex.src" :alt="ex.alt || ex.label">
          </div>
        </div>
      </div>
    </div>
    <div class="concept-col">
      <h2>Training</h2>
      <div class="concept-col-body">
        <div class="concept-train-row">
          <div v-for="(ex, i) in examples" :key="i" class="concept-train-item">
            <div class="concept-thumb">
              <img :src="ex.src" :alt="ex.alt || ex.label">
            </div>
            <span class="concept-chip">{{ ex.label }}</span>
          </div>
        </div>
        <NetflixArrow direction="down" />
        <p class="concept-caption">{{ trainingCaption }}</p>
      </div>
    </div>
    <div class="concept-col">
      <h2>Inference</h2>
      <div class="concept-col-body">
        <span class="concept-chip">{{ inferencePrompt }}</span>
        <NetflixArrow direction="down" />
        <div class="concept-result">
          <div v-for="(img, i) in inferenceImages" :key="i" class="concept-thumb">
            <img :src="img.src" :alt="img.alt || inferencePrompt">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.concept-flow {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.4rem;
  flex: 1;
  width: 100%;
  min-height: 0;
  align-content: center;
  align-items: start;
}

.concept-col {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.concept-col h2 {
  text-align: center;
  margin: 0 0 0.65rem;
  font-size: 2.2rem;
}

.concept-col-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.concept-pair {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  width: 100%;
}

.concept-pair :deep(.netflix-arrow svg) {
  width: 3.4rem;
}

.concept-col-body :deep(.netflix-arrow[data-direction='down'] svg) {
  width: 2.2rem;
}

.concept-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  padding: 0.55rem 0.9rem;
  background: var(--n-accent);
  color: #fff;
  font-family: var(--n-font-display);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.1;
  text-align: center;
  box-shadow: 0 0 14px var(--n-accent-glow);
}

.concept-thumb {
  flex: none;
  width: 8rem;
  aspect-ratio: 1;
  overflow: hidden;
  border: 1px solid var(--n-border);
  background: #050505;
}

.concept-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.concept-train-row {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.85rem;
}

.concept-train-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.concept-caption {
  margin: 0;
  font-family: var(--n-font-display);
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  color: var(--n-fg);
  max-width: 16ch;
  line-height: 1.2;
}

.concept-result {
  display: flex;
  gap: 0.65rem;
}

.concept-result .concept-thumb:only-child {
  width: 16rem;
  aspect-ratio: 3 / 2;
}
</style>
