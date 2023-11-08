/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "360px",
      // => @media (min-width: 360px) { ... }
      xs: "460px",
      // => @media (min-width: 440px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      ml: "900px",
      // => @media (min-width: 900px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: {
        coffee: "#6f4e37",
        "coffee-light": "#e4d2c2",
        "coffee-dark": "#3c2b23",
        "coffee-darkest": "#353535",
        "coffee-header": "#a76e36",
        "clr-bg-1": "#e7e7e7",
        "clr-bg-2": "#f0f0f0",
      },
      fontFamily: {
        noto: ["Noto Kufi Arabic", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
