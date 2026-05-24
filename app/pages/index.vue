<template>
  <div class="min-h-screen flex items-center px-6 py-12 bg-white dark:bg-gray-900">
    <div class="w-full max-w-2xl mx-auto flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
      <div>
        <h1 class="text-lg font-semibold text-gray-900 dark:text-white">
          njiah
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          portfolio / tools
        </p>
      </div>
      <div class="flex gap-6 text-sm">
        <NuxtLink
          to="/timeline"
          class="font-medium text-gray-900 dark:text-white underline underline-offset-4 hover:no-underline"
        >
          timeline
        </NuxtLink>
        <NuxtLink
          to="/tools"
          class="font-medium text-gray-500 dark:text-gray-400 underline underline-offset-4 hover:no-underline"
        >
          tools
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const canonicalUrl = config.public.siteUrl

useSeoMeta({
  title: 'njiah — portfolio / tools',
  description: 'Portfolio timeline and small tools by njiah. Work history, projects, and practical game utilities.',
  ogTitle: 'njiah — portfolio / tools',
  ogDescription: 'Portfolio timeline and small tools by njiah.',
  ogType: 'website',
  ogUrl: canonicalUrl,
  twitterCard: 'summary',
  twitterTitle: 'njiah — portfolio / tools',
  twitterDescription: 'Portfolio timeline and small tools by njiah.',
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})
</script>
