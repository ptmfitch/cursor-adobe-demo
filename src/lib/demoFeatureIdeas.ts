export type DemoEffort = 'quick' | 'medium' | 'ambitious';

export type DemoCategory =
  | 'Search'
  | 'API'
  | 'UI'
  | 'Collections'
  | 'Performance';

export type DemoFeatureIdea = {
  id: string;
  title: string;
  pitch: string;
  effort: DemoEffort;
  categories: DemoCategory[];
  prompt: string;
};

export const DEMO_FEATURE_IDEAS: DemoFeatureIdea[] = [
  {
    id: 'gallery-api',
    title: 'Production /api/gallery route',
    pitch: 'Paginated Pexels fetch with blur placeholders — copy the reference handler pattern.',
    effort: 'ambitious',
    categories: ['API', 'Performance'],
    prompt:
      'Using src/app/api/reference/gallery as the pattern, add /api/gallery with topic + page params, Zod validation, and blur placeholders like nextjs-image-gallery.',
  },
  {
    id: 'search-results',
    title: 'Search results page',
    pitch: 'Wire SearchBar to /results/[query] with a full masonry grid.',
    effort: 'ambitious',
    categories: ['Search', 'UI'],
    prompt:
      'Wire SearchBar to navigate to /results/[query] and build a results page with the Gallery component pattern from nextjs-image-gallery.',
  },
  {
    id: 'infinite-scroll',
    title: 'Infinite scroll',
    pitch: 'Load more photos as you scroll — the classic gallery wow moment.',
    effort: 'ambitious',
    categories: ['UI', 'API', 'Performance'],
    prompt:
      'Add GalleryInfiniteScroll to the homepage preview, fetching pages from /api/gallery using an intersection observer sentinel.',
  },
  {
    id: 'lightbox',
    title: 'Lightbox modal',
    pitch: 'Click a thumbnail — full-screen view with keyboard navigation.',
    effort: 'medium',
    categories: ['UI'],
    prompt:
      'Add a lightbox modal that opens when a gallery image is clicked, with escape to close and arrow key navigation.',
  },
  {
    id: 'image-detail',
    title: 'Image detail drawer',
    pitch: 'Slide-out panel with photographer credit, dimensions, and Pexels link.',
    effort: 'medium',
    categories: ['UI'],
    prompt:
      'Add an image detail drawer showing alt text, dimensions, and a link to the photo on Pexels when a gallery image is selected.',
  },
  {
    id: 'collections-api',
    title: 'Collections API',
    pitch: 'POST /api/collections to save favorites — in-memory store, reference-style errors.',
    effort: 'ambitious',
    categories: ['API', 'Collections'],
    prompt:
      'Add POST /api/collections following src/lib/api patterns to save favorite photo IDs per team, plus GET to list saved collections.',
  },
  {
    id: 'favorites-ui',
    title: 'Favorites heart toggle',
    pitch: 'Heart icon on each image, synced to the collections API.',
    effort: 'medium',
    categories: ['UI', 'Collections'],
    prompt:
      'Add a heart toggle on gallery images that saves and removes favorites via the collections API with optimistic UI.',
  },
  {
    id: 'category-chips',
    title: 'Creative category chips',
    pitch: 'Filter strip — Photography, Illustration, Abstract — updates the grid topic.',
    effort: 'medium',
    categories: ['Search', 'UI'],
    prompt:
      'Add category filter chips below the search bar that update the gallery topic and refetch curated or search results.',
  },
  {
    id: 'orientation-filter',
    title: 'Orientation filter',
    pitch: 'Landscape / portrait / square toggle on the gallery grid.',
    effort: 'medium',
    categories: ['Search', 'UI'],
    prompt:
      'Add orientation filters that narrow the visible gallery photos to landscape, portrait, or square based on width/height ratio.',
  },
  {
    id: 'express-cta',
    title: 'Open in Express CTA',
    pitch: 'Adobe Express mock button on image detail — on-brand creative handoff.',
    effort: 'quick',
    categories: ['UI'],
    prompt:
      'Add an "Open in Express" CTA button on the image detail drawer as a styled mock handoff action for Adobe creative workflows.',
  },
  {
    id: 'color-palette',
    title: 'Dominant color palette',
    pitch: 'Extract and display a 5-swatch palette from the selected image.',
    effort: 'ambitious',
    categories: ['UI', 'Performance'],
    prompt:
      'When an image is selected, extract dominant colors and show a 5-swatch palette strip below the detail drawer.',
  },
  {
    id: 'slideshow',
    title: 'Fullscreen slideshow',
    pitch: 'Auto-advancing fullscreen mode with progress indicator.',
    effort: 'medium',
    categories: ['UI'],
    prompt:
      'Add a fullscreen slideshow mode that cycles through visible gallery photos with autoplay and a progress bar.',
  },
  {
    id: 'navbar',
    title: 'Gallery navbar',
    pitch: 'Sticky nav with logo, search, and Adobe trial badge — like the reference repo.',
    effort: 'quick',
    categories: ['UI'],
    prompt:
      'Add a sticky Navbar component with gallery branding, integrated SearchBar, and Adobe trial badge inspired by nextjs-image-gallery.',
  },
  {
    id: 'blur-polish',
    title: 'Blur placeholder polish',
    pitch: 'Skeleton shimmer while blur placeholders load — premium feel.',
    effort: 'quick',
    categories: ['Performance', 'UI'],
    prompt:
      'Add skeleton shimmer placeholders on gallery images while blur data URLs are loading for a smoother perceived performance.',
  },
  {
    id: 'team-board',
    title: 'Team mood board',
    pitch: 'Drag photos into a shared board layout — great visual demo payoff.',
    effort: 'ambitious',
    categories: ['UI', 'Collections'],
    prompt:
      'Add a team mood board section where users can drag gallery images into a pinned board grid with local persistence.',
  },
  {
    id: 'download-batch',
    title: 'Batch download API',
    pitch: 'POST selected IDs — returns a manifest of download URLs.',
    effort: 'ambitious',
    categories: ['API', 'Collections'],
    prompt:
      'Add POST /api/downloads that accepts photo IDs and returns a JSON manifest of Pexels download URLs following the reference API error pattern.',
  },
];

export const EFFORT_LABELS: Record<DemoEffort, string> = {
  quick: 'Quick win',
  medium: 'Medium',
  ambitious: 'Ambitious',
};

export const EFFORT_ORDER: DemoEffort[] = ['quick', 'medium', 'ambitious'];

export const CATEGORY_STYLES: Record<DemoCategory, string> = {
  Search: 'border-adobe-amber/30 bg-adobe-amber/10 text-adobe-amber',
  API: 'border-adobe-red/25 bg-adobe-red/10 text-adobe-red',
  UI: 'border-white/15 bg-white/8 text-cursor-text',
  Collections: 'border-white/20 bg-white/5 text-cursor-muted',
  Performance: 'border-white/10 bg-white/5 text-cursor-muted',
};
