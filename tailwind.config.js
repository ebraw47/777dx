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
        // Matched to SK777.BET in-app navy / gold / cyan lobby
        primary: '#0a2744',
        secondary: '#0d3358',
        accent: '#f5c518',
        cyan: '#3eb5e8',
      },
    },
  },
  plugins: [],
}
