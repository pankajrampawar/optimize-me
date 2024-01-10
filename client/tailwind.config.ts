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
        "attendanceCard": "rgb(22, 123, 123)",
        "TopColor": "rgba(12, 55, 48, 1)",
        "BottomColor": "rgba(12, 55, 48, 0.28)",
        "CircleTop": "rgba(13, 59, 52, 1)",
        "CircleBottom": "rgba(22, 123, 123, 1)", 
        "CardColor": "rgb(19, 97, 96)",
      }
    },
  },
  plugins: [],
}
export default config
