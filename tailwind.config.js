/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "tl-lg": "10px 0 0 0",
        "tr-lg": "0 10px 0 0",
        "bl-lg": "0 0 0 10px",
        "br-lg": "0 0 10px 0",
      },
    },
  },
  plugins: [],
};
