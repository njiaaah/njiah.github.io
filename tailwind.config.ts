import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx,mjs}',
    './content/**/*.{md,yml,yaml}',
  ],
} satisfies Config
