/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        krona: "var(--font-krona)",
        inter: "var(--font-inter)",
      },
      colors: {
        "pri-bg": "#070707",
        "pri-blue": "#15B5E8",
        "pri-cyan": "#2FD9A6",
        "sec-cyan": "#123544",
        "text-gray": "#5E5E5E",
        "text-light-gray": "#b5bec3",
        "primary-bg-light": "#111116",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
