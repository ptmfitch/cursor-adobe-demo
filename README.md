# Adobe × Cursor Creative Gallery Demo

Polished Adobe trial landing built around a **Pexels creative gallery** — inspired by [nextjs-image-gallery](../nextjs-image-gallery). Pick a feature card and build it live with Agent.

## Quick start

```bash
cd ~/Programming/git/cursor-adobe-demo
npm install
cp .env.example .env.local   # add Pexels API key for live photos
npm run dev                  # http://localhost:3001
```

## What's included

- **Gallery preview** — curated masonry grid (live with Pexels key, placeholders without)
- **Search bar shell** — wire to `/results/[query]` during demo
- **16 build cards** — gallery features to ship live (infinite scroll, lightbox, collections, …)
- **Reference API** — `GET /api/reference/gallery` (production-quality pattern)

## Docs

- [DEMO_SCRIPT.md](./DEMO_SCRIPT.md) — 10–15 minute flow
- [REFERENCE_API.md](./REFERENCE_API.md) — endpoint spec and copy-paste pattern

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 3001 |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
