<template>
  <div class="text-white bg-gray-800 min-h-screen w-screen p-4">
    <h1 class="heading">Death Stranding 2 Structure Cost Calculator</h1>

    <label class="flex items-center gap-2 text-sm mb-4 cursor-pointer">
      <input v-model="showResourceNames" type="checkbox" />
      Show resource names
    </label>

    <div class="flex flex-col lg:flex-row lg:w-fit max-w-full gap-4 items-start">
      <div class="min-w-0 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th rowspan="2" style="text-align: center;">Structure</th>
              <th colspan="4">
                Cost
              </th>
            </tr>
            <tr>
              <th>level 1</th>
              <th>level 2</th>
              <th>level 3</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="structure in dsStructuresData.structures" :key="structure.id">
              <td class="text-xs">{{ structure.name }}</td>
              <td
                v-for="(stage, stageIndex) in structure.stages"
                :key="stageIndex"
                class="text-[8px]"
                :class="{ 'ds-stage-cell--clickable': Array.isArray(stage) }"
                @click="onStageClick(structure, stageIndex, stage)"
              >
                <div v-if="Array.isArray(stage)" class="flex flex-col gap-0.5">
                  <DsResourceCost
                    v-for="material in stage"
                    :key="`${material.resource}-${material.amount}`"
                    :resource="material.resource"
                    :amount="material.amount"
                    :img-url="dsResourceImgUrl[material.resource]"
                    :show-resource-name="showResourceNames"
                  />
                </div>

                <div v-else>FREE</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <DsStructureCalcCartSummary
        :resource-totals="resourceTotals"
        :item-counts="itemCounts"
        :resource-img-url="dsResourceImgUrl"
        :show-resource-names="showResourceNames"
        @clear="clearCart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DsResourceCost from '~/components/ds-structure-calc/DsResourceCost.vue'
import dsStructuresData from '~/data/ds-structure-calc/structures.json'
import type {
  CartEntry,
  CartItemCount,
  Structure,
  StructureResourceCost,
  StructureStage,
} from '~/types/ds-structure-calc'

const webpModules = import.meta.glob<string>('../../../assets/image/ds/*.webp', {
  eager: true,
  import: 'default',
})

function fileStemFromGlobKey(key: string): string {
  const base = key.replace(/^.*[/\\]/, '')
  if (base.toLowerCase().endsWith('.webp')) {
    return base.slice(0, -'.webp'.length)
  }
  return base
}

const dsResourceImgUrl: Record<string, string> = {}
for (const [pathKey, url] of Object.entries(webpModules)) {
  dsResourceImgUrl[fileStemFromGlobKey(pathKey)] = url
}

const showResourceNames = ref(true)
const cartEntries = ref<CartEntry[]>([])
const config = useRuntimeConfig()
const canonicalUrl = `${config.public.siteUrl}/tools/ds-structure-calc`

useSeoMeta({
  title: 'Death Stranding 2 Structure Cost Calculator',
  description: 'Calculate cumulative material costs for Death Stranding 2 structures by level.',
  ogTitle: 'Death Stranding 2 Structure Cost Calculator',
  ogDescription: 'Plan upgrades and total resources for Death Stranding 2 structures.',
  ogType: 'website',
  ogUrl: canonicalUrl,
  twitterCard: 'summary',
  twitterTitle: 'Death Stranding 2 Structure Cost Calculator',
  twitterDescription: 'Calculate material totals for structure upgrades in Death Stranding 2.',
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})

function levelLabel(stageIndex: number): string {
  return `L${stageIndex + 1}`
}

function getCumulativeCosts(
  stages: StructureStage[],
  upToIndex: number,
): StructureResourceCost[] {
  const totals: Record<string, number> = {}

  for (let i = 0; i <= upToIndex; i++) {
    const stage = stages[i]
    if (!Array.isArray(stage)) {
      continue
    }
    for (const material of stage) {
      totals[material.resource] = (totals[material.resource] ?? 0) + material.amount
    }
  }

  const result: StructureResourceCost[] = []
  for (const [resource, amount] of Object.entries(totals)) {
    result.push({ resource, amount })
  }
  result.sort((a, b) => a.resource.localeCompare(b.resource))
  return result
}

function onStageClick(
  structure: Structure,
  stageIndex: number,
  stage: StructureStage,
) {
  if (!Array.isArray(stage)) {
    return
  }

  cartEntries.value.push({
    structureId: structure.id,
    structureName: structure.name,
    stageIndex,
    levelLabel: levelLabel(stageIndex),
    costs: getCumulativeCosts(structure.stages, stageIndex),
  })
}

const resourceTotals = computed(() => {
  const totals: Record<string, number> = {}

  for (const entry of cartEntries.value) {
    for (const material of entry.costs) {
      totals[material.resource] = (totals[material.resource] ?? 0) + material.amount
    }
  }

  const result: StructureResourceCost[] = []
  for (const [resource, amount] of Object.entries(totals)) {
    result.push({ resource, amount })
  }
  result.sort((a, b) => a.resource.localeCompare(b.resource))
  return result
})

const itemCounts = computed((): CartItemCount[] => {
  const counts = new Map<string, CartItemCount>()

  for (const entry of cartEntries.value) {
    const label = `${entry.structureName} ${entry.levelLabel}`
    const existing = counts.get(label)
    if (existing) {
      existing.count += 1
    } else {
      counts.set(label, { label, count: 1 })
    }
  }

  return Array.from(counts.values())
})

function clearCart() {
  cartEntries.value = []
}

definePageMeta({
  layout: 'deathstranding',
})
</script>

<style scoped>

.heading {
  background: linear-gradient(90deg, rgba(0, 212, 255, 0.65), transparent 50%);
  padding: 1rem;
  margin-bottom: 1rem;
}

table, th, td {
  border: 1px solid rgba(255, 255, 255, 0.233);
}

th, td {
  padding: .5rem;
}

tbody tr:nth-child(even) {
  background-color: rgba(150, 212, 212, 0.1);
}

td.ds-stage-cell--clickable {
  position: relative;
}

td.ds-stage-cell--clickable:hover {
  cursor: pointer;
}

td.ds-stage-cell--clickable:hover::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.15);
  pointer-events: none;
  z-index: 1;
}

td.ds-stage-cell--clickable > * {
  position: relative;
  z-index: 2;
}
</style>
