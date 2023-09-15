import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-color": {
          DEFAULT: "#00e887",
          light: "#78ffd580",
          dark: "#6729ff",
        },
        selected: {
          light: "#78ffd580",
          dark: "#2adba480",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), nextui()],
  darkMode: "class",
};
export default config;
