module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./components/**",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    borderRadius: {
      box: "14px",
      full: "9999px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#804EE1",
        },
        secondary: {
          DEFAULT: "#FF9022",
        },
        success: {
          DEFAULT: "#3AAE2B",
        },
        info: {
          DEFAULT: "#4368F1",
        },
        danger: {
          DEFAULT: "#FB3E56",
        },
        warning: {
          DEFAULT: "#080C3D",
          10: "#53599F",
          30: "#313671",
          50: "#7379C6",
        },
        background: {
          gray: "#F7F7F7",
          slate: "#F5F5F5",
          "gray-light": "#525252",
        },
        tc: {
          light: "#D6D6D6",
          DEFAULT: "#9B9B9B",
        },
        "primary-shades": {
          10: "#804EE1",
          20: "#673FB5",
          30: "#4E2F89",
          50: "#35205E",
          60: "#291848",
          80: "#1C1032",
          90: "#10091C",
          100: "#030106",
        },
        "secondary-shades": {
          10: "#FF9022",
          20: "#CC731B",
          30: "#995614",
          50: "#663A0E",
          60: "#4D2B0A",
          80: "#331D07",
          90: "#1A0E03",
          100: "#000000",
        },
      },
    },
    backgroundImage: {
      "header-bg-pattern":
        "linear-gradient(180deg, #F5F5F5 0%, #F5F5F5 79.34%, rgba(245, 245, 245, 0) 100%);",
    },
    container: {
      center: true,
      screens: {
        sm: "760px",
        md: "1018px",
      },
    },
  },
  plugins: [],
};
