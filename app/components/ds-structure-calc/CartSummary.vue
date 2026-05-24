<template>
  <aside class="v1-cart">
    <div class="v1-cart-head">
      <span class="v1-cart-title">// CART</span>
      <span class="v1-cart-count">[{{ cartEntries.length }}]</span>
      <button v-if="cartEntries.length > 0" class="v1-cart-clear" type="button" @click="emit('clear')">
        clear
      </button>
    </div>

    <div v-if="cartEntries.length === 0" class="v1-cart-empty">
      <span class="v1-blink">█</span> select a cell to queue
    </div>

    <template v-else>
      <ul class="v1-cart-list">
        <li v-for="entry in cartEntries" :key="entry.id" class="v1-cart-item">
          <button
            class="v1-cart-x"
            type="button"
            :aria-label="`Remove ${entry.structureName} ${entry.levelLabel}`"
            @click="emit('remove', entry.id)"
          >×</button>
          <span class="v1-cart-name">{{ entry.structureName }}</span>
          <span class="v1-cart-lv">{{ entry.levelLabel }}</span>
        </li>
      </ul>

      <div class="v1-cart-divider">— TOTALS —</div>

      <div class="v1-cart-totals">
        <div v-if="resourceTotals.length === 0" class="v1-cart-empty">all free.</div>
        <div
          v-for="item in resourceTotals"
          v-else
          :key="item.resource"
          class="v1-cart-row"
        >
          <span class="v1-cart-rk" :style="{ color: resourceMeta(item.resource)?.tone }">
            <span class="v1-cart-glyph">[{{ resourceMeta(item.resource)?.glyph }}]</span>
            {{ item.resource }}
          </span>
          <span class="v1-cart-rv">{{ item.amount.toLocaleString() }}</span>
        </div>
      </div>
    </template>
  </aside>
</template>

<script setup lang="ts">
import type { CartEntry, StructureResourceCost } from '~/types/ds-structure-calc'

const RESOURCE_META: Record<string, { tone: string; glyph: string }> = {
  'Metals':        { tone: '#8aa1b8', glyph: 'M' },
  'Crystals':      { tone: '#7fd6ff', glyph: 'C' },
  'Resins':        { tone: '#c89bff', glyph: 'R' },
  'Chemicals':     { tone: '#ffb86b', glyph: 'H' },
  'Special Alloys': { tone: '#a3e6a1', glyph: 'A' },
}

defineProps<{
  cartEntries: CartEntry[]
  resourceTotals: StructureResourceCost[]
}>()

const emit = defineEmits<{
  remove: [id: string]
  clear: []
}>()

function resourceMeta(resource: string) {
  return RESOURCE_META[resource]
}
</script>

<style scoped>
.v1-cart {
  position: sticky;
  top: 20px;
  background: var(--bg-2);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 14px;
  font-size: 12px;
}
.v1-cart-head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 12px;
}
.v1-cart-title { color: var(--accent); letter-spacing: 0.1em; }
.v1-cart-count { color: var(--fg-dim); font-size: 11px; }
.v1-cart-clear {
  margin-left: auto;
  background: none;
  border: 1px solid var(--line-2);
  border-radius: 3px;
  font: inherit;
  font-size: 10.5px;
  color: var(--fg-dim);
  cursor: pointer;
  padding: 2px 6px;
  letter-spacing: 0.08em;
}
.v1-cart-clear:hover { color: var(--accent); border-color: var(--accent); }

.v1-cart-empty {
  color: var(--fg-dim-2);
  font-size: 11.5px;
  padding: 4px 0;
}
.v1-blink {
  display: inline-block;
  color: var(--accent);
  animation: v1blink 1s steps(2) infinite;
}
@keyframes v1blink { 50% { opacity: 0; } }

.v1-cart-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 280px;
  overflow-y: auto;
}
.v1-cart-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  font-size: 11.5px;
}
.v1-cart-x {
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  width: 14px;
  height: 14px;
  display: grid;
  place-items: center;
  color: var(--fg-dim-2);
  font-size: 14px;
  line-height: 1;
  padding: 0;
  flex-shrink: 0;
}
.v1-cart-x:hover { color: var(--accent); }
.v1-cart-name { flex: 1; color: var(--fg); }
.v1-cart-lv { color: var(--fg-dim); font-size: 10.5px; }

.v1-cart-divider {
  margin: 14px 0 8px;
  font-size: 10px;
  letter-spacing: 0.16em;
  color: var(--fg-dim-2);
  text-align: center;
}
.v1-cart-totals {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.v1-cart-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11.5px;
  padding: 5px 8px;
  background: var(--bg-3);
  border-radius: 3px;
}
.v1-cart-rk { display: flex; align-items: center; gap: 6px; }
.v1-cart-glyph { color: var(--fg-dim); font-size: 10px; }
.v1-cart-rv { font-variant-numeric: tabular-nums; font-weight: 600; }
</style>
