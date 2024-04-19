module.exports = {
  mode: "jit", // Just-In-Time Compiler
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      // colors: {
      //   yellow: "#fde047",
      //   blue: "#bfdbfe",
      //   pink: "#fbcfe8",
      //   green: "#bbf7d0",
      //   orange: "#fdba74",
      //   purple: "#e9d5ff",
      // },
      rotate: {
        2: "2deg",
        3: "3deg",
        n2: "-2deg",
        n3: "-3deg",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
      rotate: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [],
};
