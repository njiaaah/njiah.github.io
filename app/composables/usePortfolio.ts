import type { Portfolio, Work, Job } from "~/types/portfolio";

const PORTFOLIO_FETCH_KEY = "portfolio";

export function usePortfolio() {
  const works = ref<Work[]>([]);
  const jobs = ref<Job[]>([]);

  const { data, pending, error, refresh } = useFetch<Portfolio>(
    "/portfolio.json",
    {
      key: PORTFOLIO_FETCH_KEY,
    },
  );

  watch(
    data,
    (newData) => {
      works.value = newData?.works ?? [];
      jobs.value = newData?.jobs ?? [];
    },
    { immediate: true },
  );

  const getMaxYear = computed(() => {
    let year = 0;

    return year;
  });

  const itemsWithYears = computed(() =>
    [...works.value, ...jobs.value].filter((item) => {
      const s = parseInt(item.dateRange.start, 10);
      const e = parseInt(item.dateRange.end, 10);
      return Number.isFinite(s) && Number.isFinite(e);
    }),
  );

  const maxYear = computed(() => {
    if (itemsWithYears.value.length === 0) return new Date().getFullYear();
    return Math.max(
      ...itemsWithYears.value.map((item) => parseInt(item.dateRange.end, 10)),
    );
  });

  const minYear = computed(() => {
    if (itemsWithYears.value.length === 0) return new Date().getFullYear();
    return Math.min(
      ...itemsWithYears.value.map((item) => parseInt(item.dateRange.start, 10)),
    );
  });

  const worksByYear = computed<Record<string, Work[]>>(() => {
    let byYear: Record<string, Work[]> = {};

    for (const work of works.value) {
      const endYear = parseInt(work.dateRange.end, 10);
      if (!Number.isFinite(endYear)) continue;

      const key = String(endYear);
      if (!byYear[key]) {
        byYear[key] = [];
      }
      byYear[key].push(work);
    }

    return byYear;
  });

  const jobsByYear = computed<Record<string, Job[]>>(() => {
    const byYear: Record<string, Job[]> = {};

    for (const job of jobs.value) {
      const startYear = parseInt(job.dateRange.start);
      const endYear = parseInt(job.dateRange.end);

      if (Number.isNaN(startYear) || Number.isNaN(endYear)) continue;

      for (let year = startYear; year <= endYear; year++) {
        const key = String(year);
        if (!byYear[key]) {
          byYear[key] = [];
        }
        byYear[key].push(job);
      }
    }

    return byYear;
  });

  const totalYears = computed(() => {
    const n = maxYear.value - minYear.value + 1;
    return Math.max(0, n);
  });

  const years = computed(() => {
    const min = minYear.value;
    const count = totalYears.value;
    return Array.from({ length: count }, (_, i) => min + i).reverse();
  });

  return {
    works,
    jobs,
    refresh,
    maxYear,
    minYear,
    worksByYear,
    jobsByYear,
    totalYears,
    years,
  };
}
