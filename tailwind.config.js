/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        burtons: "burtons",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in forwards",
        draw: "draw 2s linear forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)"},
          "100%": { opacity: "1", transform: "translateX(0)"},
        },
        draw: {
          from: { "stroke-dashoffset": "800"},
          to: { "stroke-dashoffset": "0"},
        },
      },
    },
  },
  plugins: [],
};
