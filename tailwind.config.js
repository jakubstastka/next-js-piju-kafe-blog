/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        jet: "#323031",
        floralwhite: "#FFF8F0",
        geraniumlake: "#DB3A34",
        satingold: "#C89933",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(200, 153, 51, 0.3)",
        md: "0 6px 15px rgba(200, 153, 51, 0.3)",
        lg: "0 8px 30px rgba(200, 153, 51, 0.8)",
      },
    },
  },
  plugins: [],
};
