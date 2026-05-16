<template>
  <div>
    <NuxtLink to="/timeline" class="inline-block mb-6 text-sm underline">Back to timeline</NuxtLink>
    <div v-if="pending">Loading…</div>
    <div v-else-if="!doc">Page not found</div>
    <div  v-else class="bg-blue-500">
    <ContentRenderer :value="doc" class="bg-blue-500" />
  </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'timeline',
});

const route = useRoute();
const slug = route.params.slug as string;

const { data: doc, pending } = await useAsyncData(`job-${slug}`, () =>
  queryCollection('content').path(`/jobs/${slug}`).first()
);
</script>
