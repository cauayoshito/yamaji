/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        fg: "#F3F5F7",
        muted: "#9EA3A9",
        accent: "#00FFA3" /* Yamaji neon green */,
        accent2: "#4A90E2" /* secondary (tech blue) */
      },
      maxWidth: { container: "1200px" }
    }
  },
  plugins: []
}
