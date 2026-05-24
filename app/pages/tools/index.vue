<template>
  <div class="min-h-screen flex items-center px-6 py-12 bg-white dark:bg-gray-900">
    <div class="w-full max-w-2xl mx-auto">
      <NuxtLink
        to="/"
        class="text-sm font-medium text-gray-500 dark:text-gray-400 underline underline-offset-4 hover:no-underline"
      >
        back
      </NuxtLink>

      <div class="mt-8 flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h1 class="text-lg font-semibold text-gray-900 dark:text-white">
            tools
          </h1>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            small utilities
          </p>
        </div>
      </div>

      <ul class="mt-10 space-y-4">
        <li v-for="tool in tools" :key="tool.path">
          <NuxtLink
            :to="tool.path"
            class="text-sm font-medium text-gray-900 dark:text-white underline underline-offset-4 hover:no-underline"
          >
            {{ tool.title }}
          </NuxtLink>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {{ tool.description }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const canonicalUrl = `${config.public.siteUrl}/tools`

const tools = [
  {
    path: '/tools/ds-structure-calc',
    title: 'Death Stranding 2 Structure Cost Calculator',
    description: 'Plan materials and upgrade costs for DS2 structures.',
  },
]

useSeoMeta({
  title: 'Tools',
  description: 'Small utilities by njiah. Game calculators and practical tools.',
  ogTitle: 'Tools',
  ogDescription: 'Small utilities by njiah. Game calculators and practical tools.',
  ogType: 'website',
  ogUrl: canonicalUrl,
  twitterCard: 'summary',
  twitterTitle: 'Tools',
  twitterDescription: 'Small utilities by njiah. Game calculators and practical tools.',
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})
</script>
