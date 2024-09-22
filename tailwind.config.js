/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        xl: "1356px",
        lg: "1140px",
        md: "960px",
        sm: "720px",
      },
    },
  },
  plugins: [],
};
