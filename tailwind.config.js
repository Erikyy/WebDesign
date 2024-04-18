/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        webflow: {
          "primary": "#428CE7",
          "secondary": "#f6d860",
          "accent": "#F5FBFF",
          "neutral": "#3d4451",
          "base-100": "#1E2224",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}

