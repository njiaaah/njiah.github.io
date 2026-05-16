<template>
  <aside class="cart-panel shrink-0 w-full lg:w-64 border border-white/20 p-4">
    <h2 class="text-sm mb-3">Cart</h2>

  <div v-if="resourceTotals.length === 0" class="text-xs text-white/50">
    Click a cost cell to add
  </div>

    <div v-else class="flex flex-col gap-2 text-[8px] mb-4">
      <DsResourceCost
        v-for="item in resourceTotals"
        :key="item.resource"
        :resource="item.resource"
        :amount="item.amount"
        :img-url="resourceImgUrl[item.resource]"
        :show-resource-name="showResourceNames"
      />
    </div>

    <ul v-if="itemCounts.length > 0" class="text-xs space-y-1 mb-4">
      <li v-for="item in itemCounts" :key="item.label">
        {{ item.label }}<span v-if="item.count > 1"> ({{ item.count }})</span>
      </li>
    </ul>

    <button
      v-if="itemCounts.length > 0"
      type="button"
      class="text-xs px-3 py-1 border border-white/30 hover:bg-white/10"
      @click="emit('clear')"
    >
      Clear
    </button>
  </aside>
</template>

<script setup lang="ts">
import DsResourceCost from '~/components/ds-structure-calc/DsResourceCost.vue'
import type { CartItemCount, StructureResourceCost } from '~/types/ds-structure-calc'

defineProps<{
  resourceTotals: StructureResourceCost[]
  itemCounts: CartItemCount[]
  resourceImgUrl: Record<string, string>
  showResourceNames: boolean
}>()

const emit = defineEmits<{
  clear: []
}>()
</script>

<style scoped>
.cart-panel {
  background-color: rgba(150, 212, 212, 0.08);
}
</style>
