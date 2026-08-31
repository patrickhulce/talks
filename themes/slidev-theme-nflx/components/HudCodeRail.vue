<script setup>
import { Comment, Fragment, Text, cloneVNode, computed, useSlots } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  title: { type: String, default: '' },
  labels: { type: Array, default: () => [] },
  ranges: { type: Array, default: () => [] },
})

const { $clicksContext } = useSlideContext()
const slots = useSlots()

const activeIndex = computed(() => {
  const last = Math.max(0, props.labels.length - 1)
  const raw = $clicksContext?.current
  const n = typeof raw === 'number' ? raw : Number(raw)
  const current = Number.isFinite(n) ? Math.max(0, n) : 0
  return Math.min(current, last)
})

function isActive(i) {
  return i === activeIndex.value
}

function asRegExp(value) {
  if (value instanceof RegExp)
    return value
  try {
    return new RegExp(String(value ?? ''))
  }
  catch {
    return /$^/
  }
}

function flatten(nodes) {
  const out = []
  for (const node of nodes || []) {
    if (!node || node.type === Comment)
      continue
    if (node.type === Fragment)
      out.push(...flatten(node.children))
    else if (node.type === Text && !String(node.children).trim())
      continue
    else
      out.push(node)
  }
  return out
}

function vnodeText(node) {
  if (node == null)
    return ''
  if (typeof node === 'string' || typeof node === 'number')
    return String(node)
  if (Array.isArray(node))
    return node.map(vnodeText).join('')
  if (typeof node.children === 'string' || typeof node.children === 'number')
    return String(node.children)
  if (Array.isArray(node.children))
    return node.children.map(vnodeText).join('')
  if (node.children?.default)
    return vnodeText(node.children.default())
  return ''
}

function className(node) {
  const cls = node?.props?.class
  if (!cls)
    return ''
  if (typeof cls === 'string')
    return cls
  if (Array.isArray(cls))
    return cls.filter(Boolean).join(' ')
  if (typeof cls === 'object')
    return Object.keys(cls).filter(k => cls[k]).join(' ')
  return ''
}

function collectLines(node, out = []) {
  if (!node)
    return out
  if (Array.isArray(node)) {
    for (const child of node)
      collectLines(child, out)
    return out
  }
  if (/(?:^|\s)line(?:\s|$)/.test(className(node))) {
    out.push(vnodeText(node).replace(/\n$/, ''))
    return out
  }
  if (node.children?.default)
    collectLines(node.children.default(), out)
  else if (node.children)
    collectLines(node.children, out)
  return out
}

function findFrom(lines, re, from) {
  for (let i = from; i < lines.length; i++) {
    if (re.test(lines[i]))
      return i
  }
  return -1
}

function rangeStr(start, end) {
  return start === end ? String(start) : `${start}-${end}`
}

function resolveStages(lines) {
  if (!props.ranges.length || !lines.length)
    return null
  let from = 0
  return props.ranges.map((range) => {
    const startRe = asRegExp(range.start)
    const endRe = asRegExp(range.end)
    let start = findFrom(lines, startRe, from)
    if (start < 0)
      start = Math.min(from, lines.length - 1)
    let end = findFrom(lines, endRe, start)
    if (end < 0)
      end = lines.length - 1
    from = end + 1
    return rangeStr(start + 1, end + 1)
  })
}

const CodeSlot = {
  setup() {
    return () => {
      const nodes = flatten(slots.default?.() ?? [])
      const stages = resolveStages(collectLines(nodes))
      return nodes.map(vnode => stages
        ? cloneVNode(vnode, { ranges: stages })
        : vnode)
    }
  },
}
</script>

<template>
  <div class="hud-code-rail" :data-active="String(activeIndex)">
    <WindowChrome :title="title">
      <CodeSlot />
    </WindowChrome>
    <div class="hud-code-rail-labels">
      <p
        v-for="(label, i) in labels"
        :key="i"
        :class="{ 'is-active': isActive(i) }"
      >{{ label }}</p>
    </div>
  </div>
</template>

<style scoped>
.hud-code-rail {
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 1.5rem;
  min-width: 0;
}

.hud-code-rail :deep(.window-chrome) {
  flex: 1 1 auto;
  min-width: 0;
  width: auto;
}

.hud-code-rail :deep(.line) {
  opacity: 0.35;
  border-left: 2px solid transparent;
  padding-left: 0.45rem;
  margin-left: -0.45rem;
  transition: opacity 180ms ease, border-color 180ms ease;
}

.hud-code-rail :deep(.line.highlighted) {
  opacity: 1;
  border-left-color: var(--n-accent);
}

.hud-code-rail-labels {
  flex: 0 0 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.hud-code-rail-labels p {
  margin: 0;
  font-family: var(--n-font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--n-dim);
  transition: color 180ms ease;
}

.hud-code-rail-labels p.is-active {
  color: var(--n-accent);
}
</style>
