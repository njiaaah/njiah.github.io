<template>
  <div class="max-w-3xl mx-auto px-4 py-8 bg-white dark:bg-gray-800 pt-16">
    <NuxtLink to="/timeline" class="inline-block mb-6 text-sm underline text-gray-900 dark:text-gray-100">Back to timeline</NuxtLink>
    <div v-if="pending">Loading…</div>
    <div v-else-if="!doc">Page not found</div>
    <article v-else class="content-prose">
      <ContentRenderer :value="doc" />
    </article>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'timeline',
});

const route = useRoute();
const slug = route.params.slug as string;

const { data: doc, pending } = await useAsyncData(`work-${slug}`, () =>
  queryCollection('content').path(`/works/${slug}`).first()
)

useHead({
  meta: [{ name: 'robots', content: 'noindex, follow' }],
})
</script>

<style scoped>
.content-prose :deep(h1) { @apply text-3xl font-bold mt-8 mb-4 first:mt-0 text-gray-900 dark:text-gray-100; }
.content-prose :deep(h2) { @apply text-xl font-semibold mt-6 mb-3; }
.content-prose :deep(h3) { @apply text-lg font-medium mt-4 mb-2; }
.content-prose :deep(p) { @apply my-4 leading-relaxed text-gray-700 dark:text-gray-300; }
.content-prose :deep(ul) { @apply my-4 list-disc list-inside space-y-1; }
.content-prose :deep(ol) { @apply my-4 list-decimal list-inside space-y-1; }
.content-prose :deep(li) { @apply text-gray-700 dark:text-gray-300; }
.content-prose :deep(strong) { @apply font-semibold text-gray-900 dark:text-gray-100; }
.content-prose :deep(em) { @apply italic; }
.content-prose :deep(code) { @apply px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm font-mono; }
.content-prose :deep(pre code) { @apply p-0 bg-transparent; }
.content-prose :deep(blockquote) { @apply border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-4 italic text-gray-600 dark:text-gray-400; }
.content-prose :deep(img) { @apply rounded-lg w-full max-w-2xl my-6 shadow-md; }
.content-prose :deep(a) { color: #2563eb; text-decoration: underline; }
.content-prose :deep(a:hover) { text-decoration: none; }
</style>
