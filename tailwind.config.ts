import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,lgx}",
    "./src/**/*.{js,ts,jsx,tsx,lgx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#f2f2f2',
        secondary: '#ffffff',
        tint: "#1B2559",
        "tint-alt": "#1B2559",
        "tint-dark": "#1B2559",
      },
      colors: {
        primary: "#1B2559",
        tint: "#1B2559",
        "tint-alt": "#4318FF",
        "tint-dark": "#1B255950",
      },
      animation: {
        "pop": "pop 0.1s ease-in-out",
        "width-increase": "width-increase 0.2s ease-in-out",
        "slide-left-fade": "slide-left-fade 0.1s ease-in-out",
        "slide-right-fade": "slide-right-fade 0.1s ease-in-out",
        "slide-down-fade": "slide-down-fade 0.1s ease-in-out",
        "fade-out": "fade-out 0.1s ",
        "fade-in": "fade-in 0.1s ",
        scale: 'scale 0.3s ease-in-out infinite',
        translate: 'translate 1s ease-in-out infinite',
        slideLeft: 'slideLeft 1s ease-in-out infinite',
        'gradient-flow': 'gradient-flow 5s ease infinite',
        'glow': 'glow 4s ease-in-out infinite',
      },
    },
    keyframes: {
      pop: {
        "0%": { transform: "scale(0.9)" },
        "100%": { transform: "scale(1)" }
      },
      "width-increase": {
        "0%": { width: "0%", },
        "100%": { width: "100%", }
      },
      "slide-left-fade": {
        "0%": { transform: "translateX(10%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" }
      },
      "slide-right-fade": {
        "0%": { transform: "translateX(-10%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" }
      },
      "slide-down-fade": {
        "0%": { transform: "translateY(-3%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" }
      },
      "fade-out": {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" }
      },
      "fade-in": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" }
      },
      scale: {
        '0%, 100%': { transform: 'scale(0)' },
        '50%': { transform: 'scale(1)' },
      },
      translate: {
        '0%': {
          transform: 'translateX(-110%)',
        },
        '100%': {
          transform: 'translateX(110%)'
        }
      },
      slideLeft: {
        '0%': {
          transform: 'translateX(0)',
        },
        '100%': {
          transform: 'translateX(-100%)'
        }
      },
      'gradient-flow': {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
      glow: {
        '0%, 100%': {
          'box-shadow': '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.5)',
        },
        '50%': {
          'box-shadow': '0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 1), 0 0 50px rgba(255, 255, 255, 1)',
        },
      },
    }
  },
  plugins: [],
  darkMode: "class"
}

export default config