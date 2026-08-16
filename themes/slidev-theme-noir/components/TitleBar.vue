<script setup>
defineProps({
  title: { type: String, default: '' },
})
</script>

<template>
  <div class="title-bar" aria-hidden="!title">
    <div class="title-bar-fill">
      <p v-if="title" class="title-bar-text">{{ title }}</p>
    </div>
    <div class="title-bar-rule" />
    <div class="title-bar-shadow" />
  </div>
</template>

<style scoped>
.title-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  pointer-events: none;
}

.title-bar-fill {
  height: var(--n-title-bar);
  background: #000;
  display: flex;
  align-items: center;
  padding: 0 40px;
}

.title-bar-text {
  margin: 0;
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #fff;
}

.title-bar-rule {
  position: relative;
  height: 4px;
  background: var(--n-accent);
}

.title-bar-rule::after {
  content: '';
  position: absolute;
  right: 16%;
  top: 0;
  width: 7.4rem;
  height: 22px;
  background: var(--n-accent);
  transform: skewX(-28deg);
}

.title-bar-shadow {
  height: 18px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent);
}
</style>
