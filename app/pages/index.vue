<template>
  <div class="h-full flex items-center justify-center">
    <NuxtLink
      to="/timeline"
      class="text-lg font-medium text-primary underline underline-offset-4 hover:no-underline"
    >
      View timeline
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// prefetch portfolio
usePortfolio()

onMounted(() => {
  navigateTo('/timeline');
});
</script>
