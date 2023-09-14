import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans'],
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#D1D5DB',
        rose: '#BE123C',
        'rose-100':'#B91C1C',
        'fade-rose-100': 'rgba(190, 18, 60, 0.10)',
        'light-gray': 'rgba(243, 244, 246, 0.50)',
        hash: '#666666',
        'light-hash':'#333333',
      }
    },
  },
  plugins: [],
}
export default config
