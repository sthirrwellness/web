import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#E9E5E0',
        'brand-text-dark': '#55594F',
        'brand-text-light': '#B99C75',
        'brand-button': '#5F6F5A',
      },
      fontFamily: {
        // Assuming a serif font for headings and sans-serif for body
        // You would set this up in your layout file
        serif: ['var(--font-lora)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config