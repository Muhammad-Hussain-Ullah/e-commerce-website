import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customCream: '#FFF3E3',
        customGold: '#B88E2F',
        customGrey: '#666666',
        customLightGray: '#F4F5F7',
        customGreyText: '#898989',
      },
    },
  },
  plugins: [],
};
export default config;
