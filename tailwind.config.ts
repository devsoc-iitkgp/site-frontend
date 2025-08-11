import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
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
      screens: {
        hd: "1080px", // Custom screen for extra small devices
      },
      keyframes: {
        rotateRing: {
          '0%': {
            transform: 'rotateX(60deg) rotateY(-50deg) rotateZ(0deg)',
          },
          '100%': {
            transform: 'rotateX(60deg) rotateY(-50deg) rotateZ(360deg)',
          },
        },
      },
      animation: {
        rotateRing: 'rotateRing 3s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
