<script setup>
defineProps({
  label: { type: String, default: '' },
})

function sectionsOf(raw) {
  if (!raw)
    return []
  if (Array.isArray(raw))
    return raw.map(s => String(s).trim()).filter(Boolean)
  return String(raw).split(',').map(s => s.trim()).filter(Boolean)
}

function isActive(section, label) {
  return String(section || '').toUpperCase() === String(label || '').toUpperCase()
}

function initials(name) {
  if (!name)
    return '•'
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function wordmark(configs) {
  return configs?.command || configs?.title || 'COMMAND'
}

function footerLeft(configs) {
  const event = configs?.event || configs?.info || ''
  const date = configs?.date || ''
  if (event && date)
    return `${date}  //  ${event}`
  return event || date || 'STABLE BUILD'
}
</script>

<template>
  <div class="slidev-layout">
    <header class="hud-header">
      <div class="hud-wordmark">{{ wordmark($slidev.configs) }}</div>
      <nav v-if="sectionsOf($slidev.configs.sections).length" class="hud-nav">
        <span
          v-for="section in sectionsOf($slidev.configs.sections)"
          :key="section"
          class="hud-nav-item"
          :class="{ active: isActive(section, label) }"
        >{{ section }}</span>
      </nav>
      <div class="hud-status">
        <span class="hud-status-text">INSIGHTS UPLOADED</span>
        <span class="hud-avatar" :title="$slidev.configs.speaker">{{ initials($slidev.configs.speaker) }}</span>
      </div>
    </header>
    <div class="hud-main">
      <slot />
    </div>
    <footer class="hud-footer">
      <span>{{ footerLeft($slidev.configs) }}</span>
      <span>{{ String($nav.currentPage ?? 1).padStart(2, '0') }}  /  {{ String($nav.total ?? 1).padStart(2, '0') }}</span>
    </footer>
  </div>
</template>

<style scoped>
.hud-header,
.hud-footer {
  display: flex;
  align-items: center;
  padding: 0 var(--n-pad-x);
  font-family: var(--n-font-mono);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  position: relative;
  z-index: 4;
}

.hud-header {
  justify-content: space-between;
  gap: 1.2rem;
  border-bottom: 1px solid var(--n-border);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.55));
}

.hud-wordmark {
  flex: 0 1 auto;
  min-width: 0;
  font-family: var(--n-font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--n-accent-pale);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 22ch;
}

.hud-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.35rem;
  flex: 1;
}

.hud-nav-item {
  font-size: 0.58rem;
  font-weight: 500;
  color: var(--n-muted);
  padding-bottom: 0.18rem;
  border-bottom: 1px solid transparent;
  white-space: nowrap;
}

.hud-nav-item.active {
  color: var(--n-fg);
  border-bottom-color: var(--n-accent);
}

.hud-status {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex: none;
}

.hud-status-text {
  font-size: 0.55rem;
  font-weight: 600;
  color: var(--n-accent);
  text-shadow: 0 0 10px var(--n-accent-glow);
}

.hud-avatar {
  width: 1.15rem;
  height: 1.15rem;
  border-radius: 50%;
  border: 1px solid var(--n-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.48rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--n-fg);
  box-shadow: 0 0 8px var(--n-accent-glow);
}

.hud-footer {
  justify-content: space-between;
  border-top: 1px solid var(--n-border);
  font-size: 0.62rem;
  font-weight: 500;
  color: var(--n-dim);
  background: rgba(0, 0, 0, 0.72);
}

.hud-footer span:last-child {
  color: var(--n-muted);
  font-variant-numeric: tabular-nums;
}
</style>
