/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cursor: {
          base: '#0B0B0F',
          text: '#F5F5F7',
          muted: '#A3A3A8',
        },
        adobe: {
          red: '#ED1C24',
          amber: '#FF9A00',
        },
      },
    },
  },
  plugins: [],
};
