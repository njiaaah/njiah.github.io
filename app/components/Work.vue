<template>
  <NuxtLink :to="`/works/${slug}`" class="work after:bg-gray-300 block opacity-75 hover:opacity-100 transition-all duration-300 group">
    <span v-if="title" class="work-title">{{ title }}</span>
    <NuxtImg :src="imageUrl" class="w-24 h-24 rounded-full shadow-md transition-all duration-300 hover:scale-110" fit="cover"></NuxtImg>
  </NuxtLink>
</template>

<script setup lang="ts">

interface Props {
  slug: string;
  date: string;
  imageUrl: string;
  title?: string;
  row?: number;
}
const props = defineProps<Props>();

const computedLeftOffset = computed(() => {
  const monthNumber = new Date(props.date).getMonth();
  const percent = Math.min(85, Math.max(15, Math.floor(100 - (monthNumber / 12) * 100)));
  return `${percent}%`;
});

const computedBottom = computed(() => `${(props.row ?? 0) * 15}%`);

const computedZIndex = computed(() => {
  if(props.row === undefined) return 0;
  return props.row * -1 + 5;
});
</script>

<style scoped>
.work {
  left: v-bind(computedLeftOffset);
  bottom: v-bind(computedBottom);
  position: absolute;
  height: 50%;
  z-index: v-bind(computedZIndex);
}
.work::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 200%;
  z-index: -1;
  opacity: 0.5;
}
.work-title {
  display: block;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-20px);
  white-space: nowrap;
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  font-size: 0.75rem;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  pointer-events: none;
}
.work:hover .work-title {
  opacity: 1;
  visibility: visible;
}
</style>
