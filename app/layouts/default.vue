<template>
  <main class="h-screen w-screen overflow-hidden relative bg-white dark:bg-gray-800">
    <header class="fixed top-0 left-0 w-full h-16 bg-white dark:bg-gray-800 z-10">
      <div class="container mx-auto px-4 h-full flex items-center justify-center gap-4">
        <NuxtLink to="https://github.com/njiaaah" class="text-lg">
          <span class="text-gray-800 dark:text-white">GitHub</span>
        </NuxtLink>
        <NuxtLink to="https://t.me/njiah1" class="text-lg">
          <span class="text-gray-800 dark:text-white">Telegram</span>
        </NuxtLink>
        <NuxtLink to="mailto:njiah@njiah.ru" class="text-lg">
          <span class="text-gray-800 dark:text-white">Email</span>
        </NuxtLink>
      </div>
    </header>
    <ThemeSwitcher class="z-10" />
    <div class="absolute inset-0 overflow-y-auto">
      <slot />
    </div>
  </main>
</template>