module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        bling: {
          "60%": {
            transform: "scale(1.2)",
            backgroundColor: "#f51767",
          },
        },
        appear: {
          "75%, 100%": {
            transform: "scale(1.6)",
            opacity: "0.2",
          },
        },
      },
      animation: {
        bling: "bling 1200ms ease-in-out",
        appear: "appear 500ms ease-in-out",
      },
    },
  },

  plugins: [require("daisyui")],

  variants: {
    extend: {
      opacity: ["disabled", "hover"],
      cursor: ["disabled", "hover"],
      backgroundColor: ["disabled", "hover"],
      borderColor: ["disabled"],
      animation: ["disabled"],
    },
  },
};
