<template>
  <aside
    class="cart-panel shrink-0 w-full lg:w-64 lg:sticky lg:top-4 border border-white/20 p-4"
    :class="{ 'cart-panel--pulse': pulse }"
  >
    <h2 class="text-sm mb-3 ds-text">Cart</h2>

    <div v-if="resourceTotals.length === 0" class="text-xs text-white/50">
      Click any cost cell in the table
    </div>

    <div v-else class="flex flex-col gap-2 text-xs mb-4">
      <DsResourceCost
        v-for="item in resourceTotals"
        :key="item.resource"
        :resource="item.resource"
        :amount="item.amount"
        :img-url="resourceImgUrl[item.resource]"
        :show-resource-name="showResourceNames"
      />
    </div>

    <ul v-if="cartEntries.length > 0" class="text-xs space-y-1 mb-4">
      <li
        v-for="entry in cartEntries"
        :key="entry.id"
        class="flex items-center justify-between gap-2"
      >
        <span>{{ entry.structureName }} {{ entry.levelLabel }}</span>
        <button
          type="button"
          class="shrink-0 px-1.5 py-0.5 border border-white/30 hover:bg-white/10 leading-none"
          aria-label="Remove from cart"
          @click="emit('remove', entry.id)"
        >
          ×
        </button>
      </li>
    </ul>

    <button
      v-if="cartEntries.length > 0"
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
import type { CartEntry, StructureResourceCost } from '~/types/ds-structure-calc'

defineProps<{
  cartEntries: CartEntry[]
  resourceTotals: StructureResourceCost[]
  resourceImgUrl: Record<string, string>
  showResourceNames: boolean
  pulse?: boolean
}>()

const emit = defineEmits<{
  remove: [id: string]
  clear: []
}>()
</script>

<style scoped>
.cart-panel {
  background-color: rgba(150, 212, 212, 0.08);
}

.cart-panel--pulse {
  animation: cart-pulse 400ms ease-out;
}

@keyframes cart-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.5);
  }
  100% {
    box-shadow: 0 0 0 6px rgba(0, 212, 255, 0);
  }
}
</style>
