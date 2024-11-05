/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'cyan': '0px 0px 10px rgba(0, 255,255)',
      },
      keyframes: {
        t7m: {
          "0%, 100%": {
            transform: "rotate(-2deg) translate(0px,0px)",
          },
          "50%": {
            transform: "rotate(-2deg) translate(50px,50px)"
          }
        }
      },
      animation: {
        t7m: "t7m 4s linear infinite"
      }
    },
  },
  plugins: [],
}

