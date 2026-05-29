const {
  GALLERY_THUMB_WIDTH_PX,
  GALLERY_GRID_ROW_UNIT_PX,
} = require('./src/app/constants/galleryLayout.js');

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
      width: {
        'gallery-thumb': `${GALLERY_THUMB_WIDTH_PX}px`,
      },
      gridTemplateColumns: {
        gallery: `repeat(auto-fit, minmax(${GALLERY_THUMB_WIDTH_PX}px, 1fr))`,
      },
      gridAutoRows: {
        gallery: `${GALLERY_GRID_ROW_UNIT_PX}px`,
      },
      boxShadow: {
        panel: '0 24px 48px rgb(0 0 0 / 0.35)',
      },
    },
  },
  plugins: [],
};
