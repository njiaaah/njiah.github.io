<template>
  <div class="my-4">
    <div v-if="stack.length" class="mb-4 flex flex-wrap gap-2">
      <span
        v-for="tech in stack"
        :key="tech"
        class="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      >
        {{ tech }}
      </span>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { works } = usePortfolio();

const stack = computed(() => {
  const slug = route.params.slug as string;
  const work = works.value.find((w) => w.slug === slug);
  return work?.stack ?? [];
});
</script>
