<template>
  <div class="slide-number">
    {{ $nav.currentPage }}
  </div>
</template>

<style scoped>
.slide-number {
  position: absolute;
  right: 53px;
  bottom: 62px;
  z-index: 8;
  margin: 0;
  font-size: 0.67rem;
  font-weight: 300;
  letter-spacing: 0.04em;
  color: var(--n-fg);
  font-variant-numeric: tabular-nums;
}

.slidev-layout.is-light .slide-number,
.slidev-layout.agenda .slide-number,
.slidev-layout.split .slide-number {
  color: var(--n-fg-light);
}

.slidev-layout.cover .slide-number,
.slidev-layout.beat .slide-number,
.slidev-layout.section:not(.is-light) .slide-number,
.slidev-layout.chapter .slide-number,
.slidev-layout.statement .slide-number,
.slidev-layout.end .slide-number,
.slidev-layout.demo .slide-number {
  color: var(--n-fg);
}
</style>
