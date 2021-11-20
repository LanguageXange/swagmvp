module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        bling: {
          "75%, 100%": {
            transform: "scale(1.6)",
            opacity: "0",
          },
        },
      },
      animation: {
        bling: "bling 500ms ease-in-out",
      },
    },
  },

  plugins: [require("daisyui")],

  variants: {
    extend: {
      opacity: ["disabled", "hover"],
      cursor: ["disabled"],
      backgroundColor: ["disabled", "hover"],
      borderColor: ["disabled"],
    },
  },
};
