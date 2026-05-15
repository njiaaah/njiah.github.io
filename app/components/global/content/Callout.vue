<template>
  <div
    class="my-6 rounded-lg border-l-4 p-4"
    :class="[
      type === 'warning' && 'border-amber-500 bg-amber-50 dark:bg-amber-950/30',
      type === 'info' && 'border-blue-500 bg-blue-50 dark:bg-blue-950/30',
      type === 'success' && 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30',
      (!type || type === 'tip') && 'border-gray-400 bg-gray-100 dark:bg-gray-800',
    ]"
  > cock
    <p v-if="title" class="mb-2 font-semibold" v-text="title" />
    <div class="text-sm [&_p]:m-0 [&_p]:leading-relaxed">
      <slot mdc-unwrap="p" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'tip' | 'info' | 'warning' | 'success';
  title?: string;
}>();
</script>
