<template>
  <div class="v1-root" :class="{ 'v1-compact': !showResourceNames }">
    <header class="v1-head">
      <div class="v1-head-l">
        <div class="v1-head-tag">ds2/util</div>
        <h1 class="v1-head-title">Structure Cost Calculator</h1>
        <div class="v1-head-meta">
          Death Stranding 2 · 14 structures · 3 tiers · porter-grade output
        </div>
      </div>
      <div class="v1-head-r">
        <div class="v1-search">
          <span class="v1-search-prompt">⌕</span>
          <input
            v-model="query"
            placeholder="filter structure..."
            aria-label="Filter structures by name"
          />
        </div>
        <label class="v1-toggle">
          <input v-model="showResourceNames" type="checkbox" />
          <span>resource names</span>
        </label>
      </div>
    </header>

    <div class="v1-grid">
      <div
        class="v1-table"
        role="table"
        aria-label="Death Stranding 2 structure upgrade costs"
      >
        <div class="v1-table-head" role="row">
          <div class="v1-th v1-th-name" role="columnheader">STRUCTURE</div>
          <div class="v1-th" role="columnheader">LEVEL 1</div>
          <div class="v1-th" role="columnheader">LEVEL 2</div>
          <div class="v1-th" role="columnheader">LEVEL 3</div>
        </div>

        <div
          v-for="(structure, si) in filteredStructures"
          :key="structure.id"
          class="v1-row"
          role="row"
        >
          <div class="v1-name" role="rowheader">
            <span class="v1-name-i">{{ String(si + 1).padStart(2, "0") }}</span>
            {{ structure.name }}
          </div>

          <button
            v-for="(stage, stageIndex) in structure.stages"
            :key="stageIndex"
            type="button"
            role="cell"
            class="v1-cell"
            :class="{
              'v1-cell--free': !Array.isArray(stage),
              'is-active': activeKey === `${structure.id}-${stageIndex}`,
            }"
            :data-level="`L${stageIndex + 1}`"
            :aria-label="`Add ${structure.name} Level ${stageIndex + 1} to cart`"
            :aria-pressed="activeKey === `${structure.id}-${stageIndex}`"
            @click="onStageClick(structure, stageIndex, stage)"
          >
            <div v-if="Array.isArray(stage)" class="v1-cell-stack">
              <DsResourceCost
                v-for="material in stage"
                :key="material.resource"
                :resource="material.resource"
                :amount="material.amount"
              />
            </div>
            <span v-else class="v1-free">FREE</span>
          </button>
        </div>
      </div>

      <DsStructureCalcCartSummary
        class="v1-cart"
        :cart-entries="cartEntries"
        :resource-totals="resourceTotals"
        @remove="removeEntry"
        @clear="clearCart"
      />
    </div>

    <p class="v1-desc">
      Death Stranding 2 structure cost calculator showing cumulative upgrade
      materials per level. Structures covered: Generators, Watchtowers,
      Safehouses, Bridges, Zip-Lines, Jump Ramps, Transponders, Chiral Bridges,
      Catapults, and more. Resources tracked: Metals, Chemicals, Resins,
      Crystals, and Special Alloys. Click any cost cell to add it to cart and
      track totals.
    </p>
  </div>
</template>

<script setup lang="ts">
import DsResourceCost from "~/components/ds-structure-calc/DsResourceCost.vue";
import dsStructuresData from "~/data/ds-structure-calc/structures.json";
import type {
  Structure,
  StructureResourceCost,
  StructureStage,
} from "~/types/ds-structure-calc";

const showResourceNames = ref(true);
const query = ref("");
const activeKey = ref<string | null>(null);
let activeTimeout: ReturnType<typeof setTimeout> | null = null;

const { cartEntries, addEntry, removeEntry, clearCart } =
  useDsStructureCalcCart();
const config = useRuntimeConfig();
const canonicalUrl = `${config.public.siteUrl}/tools/ds-structure-calc`;
const ogImageUrl = `${config.public.siteUrl}/og/ds-calc.png`;

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Death Stranding 2 (DS2) Structure Cost Calculator",
  description:
    "Plan DS2 upgrade materials — Metals, Ceramics, Chemicals, Resins, Crystals, Special Alloys — for Generators, Watchtowers, Safehouses, Bridges, Zip-Lines, and more.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  url: canonicalUrl,
};

useSeoMeta({
  title: "Death Stranding 2 (DS2) Structure Cost Calculator",
  description:
    "Death Stranding 2 structure cost calculator. Plan upgrade materials — Metals, Ceramics, Chemicals, Resins, Crystals, Special Alloys — for Generators, Watchtowers, Safehouses, Bridges, Zip-Lines, and more.",
  ogTitle: "Death Stranding 2 (DS2) Structure Cost Calculator",
  ogDescription:
    "Plan DS2 upgrade materials — Metals, Ceramics, Chemicals, Resins, Crystals, Special Alloys — for all structures across every upgrade level.",
  ogType: "website",
  ogUrl: canonicalUrl,
  ogImage: ogImageUrl,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Death Stranding 2 structure cost calculator",
  twitterCard: "summary_large_image",
  twitterTitle: "Death Stranding 2 (DS2) Structure Cost Calculator",
  twitterDescription:
    "Plan DS2 upgrade materials — Metals, Ceramics, Chemicals, Resins, Crystals, Special Alloys — for all structures across every upgrade level.",
  twitterImage: ogImageUrl,
});

useHead({
  link: [{ rel: "canonical", href: canonicalUrl }],
  script: [
    {
      type: "application/ld+json",
      textContent: JSON.stringify(webApplicationSchema),
    },
  ],
});

const filteredStructures = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return dsStructuresData.structures;
  return dsStructuresData.structures.filter((s) =>
    s.name.toLowerCase().includes(q),
  );
});

function getCumulativeCosts(
  stages: StructureStage[],
  upToIndex: number,
): StructureResourceCost[] {
  const totals: Record<string, number> = {};
  for (let i = 0; i <= upToIndex; i++) {
    const stage = stages[i];
    if (!Array.isArray(stage)) continue;
    for (const material of stage) {
      totals[material.resource] =
        (totals[material.resource] ?? 0) + material.amount;
    }
  }
  return Object.entries(totals)
    .map(([resource, amount]) => ({ resource, amount }))
    .sort((a, b) => a.resource.localeCompare(b.resource));
}

function onStageClick(
  structure: Structure,
  stageIndex: number,
  stage: StructureStage,
) {
  const key = `${structure.id}-${stageIndex}`;
  addEntry({
    structureId: structure.id,
    structureName: structure.name,
    stageIndex,
    levelLabel: `L${stageIndex + 1}`,
    costs: getCumulativeCosts(structure.stages, stageIndex),
  });
  activeKey.value = key;
  if (activeTimeout !== null) clearTimeout(activeTimeout);
  activeTimeout = setTimeout(() => {
    if (activeKey.value === key) activeKey.value = null;
  }, 320);
}

const resourceTotals = computed(() => {
  const totals: Record<string, number> = {};
  for (const entry of cartEntries.value) {
    for (const material of entry.costs) {
      totals[material.resource] =
        (totals[material.resource] ?? 0) + material.amount;
    }
  }
  return Object.entries(totals)
    .map(([resource, amount]) => ({ resource, amount }))
    .sort((a, b) => a.resource.localeCompare(b.resource));
});
</script>

<style scoped>
.v1-root {
  --bg: #0d1117;
  --bg-2: #141b24;
  --bg-3: #1c2530;
  --line: #232d3a;
  --line-2: #2d3a4a;
  --fg: #d9e2ec;
  --fg-dim: #6b7a8c;
  --fg-dim-2: #3e4a5c;
  --accent: #ffb86b;
  --accent-2: #5cc7ff;

  font-family: "JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace;
  background: var(--bg);
  color: var(--fg);
  min-height: 100vh;
  padding: 28px 32px 40px;
  font-size: 13px;
  line-height: 1.5;
  box-sizing: border-box;
}

/* Header */
.v1-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 22px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--line);
  flex-wrap: wrap;
}
.v1-head-tag {
  display: inline-block;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 3px 8px;
  background: var(--bg-3);
  color: var(--accent);
  border: 1px solid var(--line-2);
  border-radius: 3px;
  margin-bottom: 8px;
}
.v1-head-title {
  font:
    600 22px/1.2 "JetBrains Mono",
    monospace;
  margin: 0;
  letter-spacing: -0.01em;
}
.v1-head-title::before {
  content: "> ";
  color: var(--accent);
}
.v1-head-meta {
  font-size: 11px;
  color: var(--fg-dim);
  margin-top: 6px;
}
.v1-head-r {
  display: flex;
  gap: 14px;
  align-items: center;
  flex-wrap: wrap;
}

.v1-search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-2);
  border: 1px solid var(--line-2);
  padding: 7px 11px;
  border-radius: 4px;
  width: 240px;
}
.v1-search-prompt {
  color: var(--accent);
}
.v1-search input {
  background: transparent;
  border: 0;
  outline: 0;
  color: var(--fg);
  font: inherit;
  flex: 1;
  min-width: 0;
}
.v1-search input::placeholder {
  color: var(--fg-dim-2);
}

.v1-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--fg-dim);
  cursor: pointer;
  user-select: none;
}
.v1-toggle input {
  accent-color: var(--accent);
}

/* Grid */
.v1-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 24px;
  align-items: start;
}

/* Table */
.v1-table {
  border: 1px solid var(--line);
  border-radius: 6px;
  overflow: hidden;
  background: var(--bg-2);
  min-width: 0;
  overflow-x: auto;
}
.v1-table-head,
.v1-row {
  display: grid;
  grid-template-columns: 200px 1fr 1fr 1fr;
  min-width: 560px;
}
.v1-table-head {
  background: var(--bg-3);
  border-bottom: 1px solid var(--line);
}
.v1-th {
  padding: 10px 14px;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--fg-dim);
  border-right: 1px solid var(--line);
}
.v1-th:last-child {
  border-right: 0;
}
.v1-th-name {
  color: var(--accent);
}

.v1-row {
  border-top: 1px solid var(--line);
}
.v1-row:hover {
  background: rgba(255, 255, 255, 0.015);
}

.v1-name {
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12.5px;
  color: var(--fg);
  border-right: 1px solid var(--line);
  letter-spacing: 0.04em;
}
.v1-name-i {
  color: var(--fg-dim-2);
  font-size: 10.5px;
  flex-shrink: 0;
}

/* Cells */
.v1-cell {
  all: unset;
  display: flex;
  align-items: flex-start;
  padding: 10px 14px;
  border-right: 1px solid var(--line);
  cursor: pointer;
  min-height: 44px;
  position: relative;
  transition: background 120ms ease;
  box-sizing: border-box;
}
.v1-cell:last-child {
  border-right: 0;
}
.v1-cell:hover {
  background: rgba(255, 184, 107, 0.06);
}
.v1-cell:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: -2px;
}
.v1-cell:hover::before {
  content: "+ add";
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 0.1em;
  background: var(--bg-3);
  padding: 2px 6px;
  border-radius: 3px;
}
.v1-cell.is-active {
  background: rgba(255, 184, 107, 0.18) !important;
}
.v1-cell.is-active::after {
  content: "✓ added";
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 0.1em;
}
.v1-cell.is-active:hover::before {
  display: none;
}

.v1-cell-stack {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}
.v1-free {
  font-size: 11px;
  color: var(--fg-dim-2);
  letter-spacing: 0.12em;
  align-self: center;
}

/* compact mode — hide pill names via :deep since DsResourceCost is a child component */
.v1-root.v1-compact :deep(.v1-pill-name) {
  display: none;
}

/* Description (SEO) */
.v1-desc {
  margin-top: 20px;
  font-size: 11.5px;
  color: var(--fg-dim);
  max-width: 72ch;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 900px) {
  .v1-root {
    padding: 20px 16px 32px;
  }
  .v1-grid {
    grid-template-columns: 1fr;
  }
  .v1-cart {
    order: -1;
    position: static;
  }
}

@media (max-width: 800px) {
  /* card layout — one card per structure */
  .v1-table {
    border: none;
    background: transparent;
    overflow: visible;
  }
  .v1-table-head {
    display: none;
  }
  .v1-row {
    display: block;
    min-width: 0;
    border: 1px solid var(--line);
    border-radius: 6px;
    overflow: hidden;
    background: var(--bg-2);
    margin-bottom: 8px;
  }
  .v1-row:hover {
    background: var(--bg-2);
  }
  .v1-name {
    border-right: 0;
    border-bottom: 1px solid var(--line);
    background: var(--bg-3);
    padding: 10px 14px;
    font-size: 12px;
    letter-spacing: 0.06em;
  }
  /* cells become full-width rows */
  .v1-cell {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    border-right: 0;
    border-top: 1px solid var(--line);
    padding: 10px 14px;
    min-height: 42px;
    box-sizing: border-box;
  }
  /* level label from data-level attr */
  .v1-cell::before {
    content: attr(data-level);
    position: static;
    font-size: 10px;
    color: var(--accent-2);
    letter-spacing: 0.12em;
    flex-shrink: 0;
    width: 22px;
    background: transparent;
    padding: 0;
    border-radius: 0;
    transform: none;
    top: auto;
    right: auto;
  }
  .v1-cell:hover::before {
    content: attr(data-level);
    position: static;
    color: var(--accent-2);
    background: transparent;
    padding: 0;
    border-radius: 0;
    transform: none;
    top: auto;
    right: auto;
  }
  .v1-cell-stack {
    flex: 1;
    flex-direction: row;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 0.5rem;
  }
  .v1-free {
    flex: 1;
    align-self: auto;
  }
  /* persistent + on right */
  .v1-cell::after {
    content: "+";
    position: static;
    margin-left: auto;
    flex-shrink: 0;
    font-size: 14px;
    color: var(--fg-dim);
    letter-spacing: 0;
    background: transparent;
    padding: 0;
    border-radius: 0;
    transform: none;
    top: auto;
    right: auto;
  }
  .v1-cell.is-active::after {
    content: "✓";
    color: var(--accent);
    position: static;
    font-size: 14px;
    letter-spacing: 0;
    background: transparent;
    padding: 0;
    border-radius: 0;
    transform: none;
    top: auto;
    right: auto;
  }
  .v1-cell.is-active:hover::before {
    content: attr(data-level);
    display: block;
  }
}

@media (max-width: 480px) {
  .v1-head {
    flex-direction: column;
    align-items: flex-start;
  }
  .v1-search {
    width: 100%;
  }
}
</style>
