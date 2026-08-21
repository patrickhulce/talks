<script setup>
defineProps({
  title: { type: String, default: '' },
  kicker: { type: String, default: '' },
  accent: { type: String, default: 'left' },
  variant: { type: String, default: 'content' },
})
</script>

<template>
  <div class="hud-card" :data-accent="accent" :data-variant="variant">
    <div v-if="title || kicker" class="hud-card-head">
      <p v-if="title" class="hud-card-title">{{ title }}</p>
      <p v-if="kicker" class="hud-card-kicker">{{ kicker }}</p>
    </div>
    <div class="hud-card-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.hud-card {
  --cut: var(--n-chamfer);
  position: relative;
  background: var(--n-surface);
  border: 1px solid var(--n-border);
  clip-path: polygon(
    0 var(--cut),
    var(--cut) 0,
    100% 0,
    100% calc(100% - var(--cut)),
    calc(100% - var(--cut)) 100%,
    0 100%
  );
  padding: 1.05rem 1.15rem 1.1rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.hud-card[data-accent='left'] {
  box-shadow: inset 2px 0 0 var(--n-accent);
}

.hud-card[data-accent='bottom'] {
  box-shadow: inset 2px 0 0 var(--n-accent), inset 0 -2px 0 var(--n-accent);
}

.hud-card[data-accent='none'] {
  box-shadow: none;
}

.hud-card[data-variant='full'] {
  height: 100%;
}

.hud-card-head {
  margin-bottom: 0.7rem;
}

.hud-card-title {
  margin: 0;
  font-family: var(--n-font-display);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--n-fg);
}

.hud-card-kicker {
  margin: 0.2rem 0 0;
  font-family: var(--n-font-mono);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--n-dim);
}

.hud-card-body {
  flex: 1;
  min-height: 0;
  color: var(--n-muted);
  font-size: 1.02rem;
  line-height: 1.4;
}

.hud-card-body :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0;
}

.hud-card-body :deep(li) {
  position: relative;
  padding-left: 1.05rem;
  font-size: 0.98rem;
  color: var(--n-soft);
}

.hud-card-body :deep(li + li) {
  margin-top: 0.45rem;
}

.hud-card-body :deep(li::before) {
  content: '+';
  position: absolute;
  left: 0;
  color: var(--n-accent);
  font-weight: 700;
}
</style>
