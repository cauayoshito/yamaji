/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Cores da identidade Yamaji
      colors: {
        bg: "#0A0A0B", // fundo dark
        fg: "#F3F5F7", // texto principal
        muted: "#9EA3A9", // texto secundário
        accent: "#00FFA3", // neon green (principal)
        accent2: "#4A90E2", // tech blue (secundária)
        card: "#131417", // fundo de cards/blocos
      },

      // Tipografias (configure no globals.css com @import das fontes)
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Montserrat", "system-ui", "sans-serif"],
      },

      // Larguras e container
      maxWidth: {
        container: "1200px",
      },

      // Radius e sombras
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 163, 0.40)", // brilho neon para hovers
      },

      // Animações usadas no Hero (glows)
      keyframes: {
        yamajiPulse: {
          "0%,100%": {
            transform: "translate(-50%,0) scale(1)",
            opacity: "0.9",
          },
          "50%": {
            transform: "translate(-50%,10px) scale(1.05)",
            opacity: "1",
          },
        },
        yamajiFloat: {
          "0%,100%": { transform: "translate(0,0) scale(1)", opacity: "0.9" },
          "50%": {
            transform: "translate(-8px,-6px) scale(1.04)",
            opacity: "1",
          },
        },
      },
      animation: {
        yamajiPulse: "yamajiPulse 9s ease-in-out infinite",
        yamajiFloat: "yamajiFloat 12s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
