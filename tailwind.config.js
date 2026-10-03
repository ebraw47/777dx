/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        brand: ['var(--font-brand)', 'Space Grotesk', 'sans-serif'],
      },
      colors: {
        // Matched to JZ666 in-app dark charcoal / gold lobby
        primary: '#14100c',
        secondary: '#241c14',
        accent: '#FFC107',
      },
    },
  },
  plugins: [],
}
