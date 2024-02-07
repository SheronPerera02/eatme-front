/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        plex_sans: ["IBM Plex Sans", "sans-serif"],
        pt_sans: ["Pt Sans", "sans-serif"],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/aspect-ratio")],
};
