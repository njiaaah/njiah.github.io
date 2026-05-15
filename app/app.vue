<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-from,
.page-enter-active,
.page-enter-to,
.page-leave-from,
.page-leave-active,
.page-leave-to {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease, scale 0.5s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  scale: 0.95;
}
</style>
