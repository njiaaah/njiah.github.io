import type { CartEntry } from '~/types/ds-structure-calc'

const CART_KEY = 'dsStructureCalcCart'

function ensureEntryIds(entries: CartEntry[]): CartEntry[] {
  return entries.map((entry) => {
    if (entry.id) {
      return entry
    }
    return { ...entry, id: crypto.randomUUID() }
  })
}

export function useDsStructureCalcCart() {
  const cartEntries = ref<CartEntry[]>([])

  function loadFromStorage() {
    if (typeof sessionStorage === 'undefined') {
      return
    }
    const saved = sessionStorage.getItem(CART_KEY)
    if (saved === null) {
      return
    }
    try {
      const parsed = JSON.parse(saved) as CartEntry[]
      cartEntries.value = ensureEntryIds(parsed)
    } catch {
      cartEntries.value = []
    }
  }

  function saveToStorage() {
    if (typeof sessionStorage === 'undefined') {
      return
    }
    sessionStorage.setItem(CART_KEY, JSON.stringify(cartEntries.value))
  }

  onMounted(loadFromStorage)
  watch(cartEntries, saveToStorage, { deep: true })

  function createCartEntryId(): string {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID()
    }
    // hehe
    return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
  }

  function removeEntry(id: string) {
    const index = cartEntries.value.findIndex((entry) => entry.id === id)
    if (index === -1) {
      return
    }
    cartEntries.value.splice(index, 1)
  }

  function clearCart() {
    cartEntries.value = []
  }

  return {
    cartEntries,
    addEntry,
    removeEntry,
    clearCart,
  }
}
