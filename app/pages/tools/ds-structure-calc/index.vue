<template>
  <div class="text-white bg-gray-800 min-h-screen w-screen p-4">
    <h1 class="heading mb-4">Death Stranding 2 Structure Cost Calculator</h1>

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
        :cart-entries="cartEntries"
        :resource-totals="resourceTotals"
        :resource-img-url="dsResourceImgUrl"
        :show-resource-names="showResourceNames"
        @remove="removeEntry"
        @clear="clearCart"
      />
    </div>

    <p class="description">
      This Death Stranding 2 structure cost calculator shows cumulative upgrade materials for each structure level.
      Click any level in the table to add it to cart and track total Metals, Ceramics, Chemicals, Resins, Crystals,
      and Special Alloys.
    </p>
  </div>
</template>

<script setup lang="ts">
import DsResourceCost from '~/components/ds-structure-calc/DsResourceCost.vue'
import dsStructuresData from '~/data/ds-structure-calc/structures.json'
import type {
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
const { cartEntries, addEntry, removeEntry, clearCart } = useDsStructureCalcCart()
const config = useRuntimeConfig()
const canonicalUrl = `${config.public.siteUrl}/tools/ds-structure-calc`
const ogImageUrl = `${config.public.siteUrl}/og/ds-calc.png`
const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Death Stranding 2 Structure Cost Calculator',
  description: 'Death Stranding 2 structure cost calculator for cumulative upgrade material totals.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  url: canonicalUrl,
}

useSeoMeta({
  title: 'Death Stranding 2 Structure Cost Calculator',
  description: 'Death Stranding 2 structure cost calculator to plan cumulative material costs by upgrade level.',
  ogTitle: 'Death Stranding 2 Structure Cost Calculator',
  ogDescription: 'Death Stranding 2 structure cost calculator for planning upgrades and total resources.',
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage: ogImageUrl,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Death Stranding 2 structure cost calculator',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Death Stranding 2 Structure Cost Calculator',
  twitterDescription: 'Death Stranding 2 structure cost calculator for cumulative upgrade material totals.',
  twitterImage: ogImageUrl,
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify(webApplicationSchema),
    },
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

  addEntry({
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

</script>

<style scoped>

.heading {
  background: linear-gradient(90deg, rgba(0, 212, 255, 0.65), transparent 50%);
  padding: 1rem;
  margin-top: 1rem;
}

.description {
  margin-top: 0.75rem;
  max-width: 64rem;
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
