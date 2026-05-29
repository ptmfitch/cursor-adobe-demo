# Agents

## Project overview

Next.js 15 Adobe × Cursor trial demo — creative gallery landing inspired by nextjs-image-gallery. Live demo = pick a gallery feature card and build with Agent.

## Running locally

```bash
cp .env.example .env.local
npm run dev
```

Server: `http://localhost:3001`. Set `NEXT_PUBLIC_PEXELS_API_KEY` for live curated photos.

## Reference API

`GET /api/reference/gallery?topic=curated&page=1` — see [REFERENCE_API.md](./REFERENCE_API.md).

Gallery lib: `src/lib/gallery/`. Shared API pattern: `src/lib/api/`.

## Validation

```bash
npm run lint
npm run build
```

## Demo approach

- Page shows gallery preview + build ideas — not wired to infinite scroll yet.
- Copy patterns from nextjs-image-gallery and the reference route.
- Pick a card from `FeatureIdeasPanel` and build live.
