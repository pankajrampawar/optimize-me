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
        "navGreen": "rgb(5, 33, 28)",
        "navText": "rgb(210, 255, 255)",
        "background": "rgb(225, 236, 234)",
      }
    },
  },
  plugins: [],
}
export default config
