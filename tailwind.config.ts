import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,lgx}",
    "./src/**/*.{js,ts,jsx,tsx,lgx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#E2E8F0',
        secondary: '#ffffff',
      },
      color: {
        primary: "#1B2559"
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

export default config