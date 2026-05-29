# Reference API

Golden-pattern gallery endpoint for live demo builds. Modeled on [nextjs-image-gallery](../nextjs-image-gallery) — **not wired to infinite scroll yet**.

## Endpoint

`GET /api/reference/gallery`

### Query parameters

| Param | Required | Description |
|-------|----------|-------------|
| `page` | Yes | Pexels page number |
| `topic` | No | `curated` (default) or search term |

### Example

```bash
curl "http://localhost:3001/api/reference/gallery?topic=curated&page=1"
```

Response:

```json
{
  "data": {
    "photos": [...],
    "nextPage": "2",
    "topic": "curated",
    "page": "1"
  }
}
```

Invalid query → **422**. No results → **404**. Bad API key → **401**.

## Environment

```bash
cp .env.example .env.local
# Set NEXT_PUBLIC_PEXELS_API_KEY from https://www.pexels.com/api/
```

## Pattern to copy

| Layer | Path |
|-------|------|
| Errors | `src/lib/api/errors.ts` |
| Responses | `src/lib/api/responses.ts` |
| Validation | `src/lib/api/validation.ts` |
| Handler wrapper | `src/lib/api/handler.ts` |
| Pexels fetch | `src/lib/gallery/fetchImages.ts` |
| Blur placeholders | `src/lib/gallery/getBase64.ts` |
| Route | `src/app/api/reference/gallery/route.ts` |

Compare with the simpler route in nextjs-image-gallery:

`src/app/api/gallery/route.ts` — same behavior, less error handling.

When building live (e.g. `/api/gallery` for infinite scroll):

1. Copy the reference route structure
2. Wire `GalleryInfiniteScroll` from the gallery repo pattern
3. Point SearchBar at `/results/[query]`

Comments in the route: `// DEMO: copy this pattern...`
