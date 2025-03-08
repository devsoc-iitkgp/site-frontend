import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "glass-feature-card": "url('/Glass_feauture_card_bg.svg')",
        "number-bullet-bg": "url('/number_bullet-bg.svg')",
        "bullet-path": "url('/bullet-path.png')",
        "apnaInsti-path-logo": "url('/apnaInsti-path-logo.svg')",
        "apnaInsti-ss-bg": "url('/apnaInsti_ss_bg.svg')",
        "phone-bg": "url('/phone_bg.svg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins font
        montserrat: ["Montserrat", "sans-serif"],
      },
      rotate: {
        "20": "20deg",
        "25": "25deg",
        "22.5": "22.5deg",
        "15": "15deg",
        "345": "345deg",
      },
      screens: {
        hd: "1080px", // Custom screen for extra small devices
      },
    },
  },
  plugins: [],
} satisfies Config;
