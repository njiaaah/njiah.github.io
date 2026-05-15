export interface DateRange {
  start: string
  end: string
}

export interface Work {
  slug: string
  title?: string
  dateRange: DateRange
  imageUrl: string
  stack?: string[]
}

export interface Job {
  slug: string
  title?: string
  dateRange: DateRange
  color?: string
}

export interface Portfolio {
  works: Work[]
  jobs: Job[]
}
