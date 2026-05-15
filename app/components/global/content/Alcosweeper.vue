<template>
  <div class="alcosweeper my-6">
    <button
      type="button"
      class="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow transition hover:bg-blue-600"
      @click="open = true"
    >
      Launch Alcosweeper
    </button>

    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="open"
          class="alcosweeper-modal"
          @click.self="open = false"
        >
          <div class="alcosweeper-window">
            <button
              type="button"
              class="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700"
              aria-label="Close"
              @click="open = false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="/alcosweeper/"
              class="h-full w-full flex-1 border-0"
              title="Alcosweeper"
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const open = ref(false);
</script>

<style scoped>
.alcosweeper-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
}
.alcosweeper-window {
  position: absolute;
  inset: 1vmin;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
