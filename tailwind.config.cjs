const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: true,
    prefix: "",
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#1d4ed8",
          secondary: "#3b82f6",
          accent: "#60a5fa",
          neutral: "#38bdf8",
        },
      },
    ],
  },

  theme: {
    extend: {}
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")]
};

module.exports = config;