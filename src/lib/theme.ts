export const THEME = {
  colors: {
    pageBackground: '#0B0B0F',
    pageSurface: '#141419',
    cursorText: '#F5F5F7',
    cursorMuted: '#A3A3A8',
    adobeRed: '#ED1C24',
    adobeAmber: '#FF9A00',
  },
  layout: {
    pageMaxWidthPx: 1040,
    sectionGapPx: 56,
    panelPaddingPx: 32,
    heroLogoSizePx: 56,
  },
  radii: {
    panel: '1.5rem',
    card: '1rem',
    pill: '9999px',
  },
} as const;

export const TRIAL_DURATION_DAYS = 30;

export const DEFAULT_PAGE_LIMIT = 20;

export const MAX_PAGE_LIMIT = 50;

export const DEFAULT_PAGE_OFFSET = 0;
