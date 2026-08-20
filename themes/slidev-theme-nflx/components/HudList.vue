<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <ol v-if="items.length" class="hud-list">
    <li v-for="(item, i) in items" :key="item.title || i">
      <div>
        <strong>{{ item.title || item }}</strong>
        <small v-if="item.body">{{ item.body }}</small>
      </div>
    </li>
  </ol>
  <ol v-else class="hud-list">
    <slot />
  </ol>
</template>
