<template>
  <span class="v1-pill" :style="{ '--c': meta?.tone ?? '#888' }">
    <span class="v1-pill-dot">{{ meta?.glyph ?? '?' }}</span>
    <span class="v1-pill-name">{{ resource }}</span>
    <span class="v1-pill-num">{{ amount.toLocaleString() }}</span>
  </span>
</template>

<script setup lang="ts">
const RESOURCE_META: Record<string, { tone: string; glyph: string }> = {
  'Metals':        { tone: '#8aa1b8', glyph: 'M' },
  'Crystals':      { tone: '#7fd6ff', glyph: 'C' },
  'Resins':        { tone: '#c89bff', glyph: 'R' },
  'Chemicals':     { tone: '#ffb86b', glyph: 'H' },
  'Special Alloys': { tone: '#a3e6a1', glyph: 'A' },
}

const props = defineProps<{
  resource: string
  amount: number
}>()

const meta = computed(() => RESOURCE_META[props.resource])
</script>

<style scoped>
.v1-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  color: var(--fg);
  white-space: nowrap;
}
.v1-pill-dot {
  display: inline-grid;
  place-items: center;
  width: 16px;
  height: 16px;
  background: color-mix(in oklab, var(--c) 18%, var(--bg-3));
  color: var(--c);
  border: 1px solid color-mix(in oklab, var(--c) 35%, var(--bg-3));
  border-radius: 3px;
  font-size: 9.5px;
  font-weight: 700;
}
.v1-pill-name {
  color: var(--fg-dim);
  font-size: 10.5px;
}
.v1-pill-num {
  color: var(--c);
  font-variant-numeric: tabular-nums;
}
</style>
