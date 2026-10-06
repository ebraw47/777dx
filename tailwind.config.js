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
        logo: ['var(--font-logo)', 'Chakra Petch', 'sans-serif'],
      },
      colors: {
        // K666 official app — deep forest green / gold / mint
        primary: '#0d3a14',
        secondary: '#134e22',
        accent: '#fbdf03',
        cyan: '#8fd99a',
      },
    },
  },
  plugins: [],
}
