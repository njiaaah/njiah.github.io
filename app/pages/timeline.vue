<template>
  <div
    ref="scrollEl"
    class="flex flex-col overflow-x-scroll h-full w-full justify-end pb-4 px-20 bg-white dark:bg-gray-900"
    @wheel.prevent="onWheel"
    @scroll="saveScrollPosition"
  >
      <div class="h-[80%] min-h-[80%] flex">

        <div class="min-w-[0px] xl:min-w-[200px] h-ful"></div>
        <ul
          v-for="year in years"
          :key="year"
          class="border-l border-b overflow-y-hidden border-gray-400 dark:border-gray-400 min-w-[800px] relative"
        >
          <h2 class="text-2xl text-gray-400 pl-4">{{ year }}</h2>
          <li v-for="(work, i) in worksByYear[year]" :key="i">
            <Work
              :slug="work.slug"
              :date="work.dateRange.end"
              :image-url="work.imageUrl"
              :title="work.title"
              :row="computeRows(worksByYear[year] ?? [])[i]"
            />
          </li>
        </ul>

        <div class="min-w-[500px] lg:min-w-[300px] h-ful"></div>
      </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'timeline',
});

const config = useRuntimeConfig()
const canonicalUrl = `${config.public.siteUrl}/timeline`

useSeoMeta({
  title: 'Portfolio Timeline',
  description: 'Interactive timeline of portfolio projects and work history by njiah.',
  ogTitle: 'Portfolio Timeline',
  ogDescription: 'Explore projects and work history in a horizontal timeline view.',
  ogType: 'website',
  ogUrl: canonicalUrl,
  twitterCard: 'summary',
  twitterTitle: 'Portfolio Timeline',
  twitterDescription: 'Interactive timeline of projects and work history by njiah.',
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})

const { refresh, worksByYear, years } = usePortfolio();
const scrollEl = ref<HTMLDivElement | null>(null);
const SCROLL_KEY = 'timelineScrollLeft';

function saveScrollPosition() {
  const el = scrollEl.value;
  if (!el) return;
  sessionStorage.setItem(SCROLL_KEY, String(el.scrollLeft));
}

function onWheel(e: WheelEvent) {
  const el = scrollEl.value;
  if (!el) return;
  el.scrollLeft += e.deltaY;
}

onMounted(() => {
  refresh();
  nextTick(() => {
    const el = scrollEl.value;
    if (!el) return;
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved !== null) {
      el.scrollLeft = parseInt(saved, 10);
    }
  });
});

onBeforeUnmount(saveScrollPosition);

function getLeftPercent(date: string) {
  const month = new Date(date).getMonth();
  return Math.min(90, Math.max(10, Math.floor(100 - (month / 12) * 100)));
}

function computeRows(works: any[]): number[] {
  const rows: number[] = works.map(() => 0);
  for (let i = 0; i < works.length; i++) {
    const leftI = getLeftPercent(works[i].dateRange.end);
    for (let j = 0; j < i; j++) {
      const leftJ = getLeftPercent(works[j].dateRange.end);
      if (Math.abs(leftI - leftJ) < 15) {
        rows[i] = Math.max(rows[i] ?? 0, (rows[j] ?? 0) + 1);
      }
    }
  }
  return rows;
}
</script>

<style scoped>

</style>