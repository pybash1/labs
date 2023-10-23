import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "var(--font-sans)", ...fontFamily.sans],
        chalkduster: ["Chalkduster", ...fontFamily.sans],
        bradley: ["'Bradley Hand'", ...fontFamily.sans],
        satoshi: ["Satoshi", ...fontFamily.sans],
      },
      colors: {
        blueprint: "#3d6dd7",
      },
    },
  },
  plugins: [],
} satisfies Config;
