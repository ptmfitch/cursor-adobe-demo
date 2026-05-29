# Demo script — Adobe × Cursor 3 (10–15 min)

Open `~/Programming/git/cursor-adobe-demo` in Cursor. Copy your Pexels key from nextjs-image-gallery if you have one:

```bash
cp .env.example .env.local
# NEXT_PUBLIC_PEXELS_API_KEY=...
npm run dev
```

## Flow

1. **Show the gallery landing** — curated preview, search bar shell, build ideas.
2. **Open the reference API** — compare with your nextjs-image-gallery `/api/gallery` route.
3. **Pick a card** — ship a gallery feature live (infinite scroll, search, lightbox, collections).
4. **Narrate Cursor** — Agent View, models, MCP as you build.

## Agenda

| Min | Beat | Narrate |
|-----|------|---------|
| 0–2 | Landing + gallery preview | Adobe creative context — not a generic SaaS page |
| 2–4 | `src/app/api/reference/gallery` vs gallery repo | Clean errors, Zod, blur placeholders |
| 4–5 | `curl` the reference endpoint | Prove the pattern before building |
| 5–12 | Pick one ambitious card | Infinite scroll or search results = best wow |
| 12–15 | Recap what shipped | Cursor surfaces used during the build |

## Recommended live builds

| Card | Why it wows |
|------|-------------|
| **Infinite scroll** | Visible, scrolling payoff — classic gallery moment |
| **Search results page** | SearchBar → `/results/[query]` — full user flow |
| **Production /api/gallery** | Shows Agent can match reference quality quickly |
| **Lightbox modal** | Immediate visual delight on click |

Each card includes a ready-made Agent prompt referencing nextjs-image-gallery patterns.

## Reference API

```bash
curl "http://localhost:3001/api/reference/gallery?topic=curated&page=1"
curl "http://localhost:3001/api/reference/gallery?topic=architecture&page=1"
```

See [REFERENCE_API.md](./REFERENCE_API.md).

## Model routing

| Task | Model tier |
|------|------------|
| Navbar, blur polish, Express CTA | Fast |
| /api/gallery from reference | Thinking |
| Infinite scroll + API + UI | Agent + Plan mode |
