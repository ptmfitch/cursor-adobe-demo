# Demo script — Adobe × Cursor 3 (10–15 min)

Open `~/Programming/git/cursor-adobe-demo` in Cursor. Run `npm run mongo:up` and `npm run dev` before the session.

## Agenda

| Min | Beat | Narrate |
|-----|------|---------|
| 0–1 | Show repo + broken page | Full IDE context; agents see the whole project |
| 1–3 | Typo, image, spacing | Fast model / Tab for small edits; Rules in `@demo-standards.mdc` |
| 3–6 | Fix `/api/ping` 500 | Thinking model for debug; Agent View for API + UI |
| 6–10 | MongoDB MCP + index | MCP connects your stack; Plan mode optional before index |
| 10–13 | Reveal trail steps 1–2 | Multi-step guidance in `demoTheme.ts` / `demoLayout.ts` |
| 13–15 | Capability strip | Model routing, MCP, Rules, IDE / CLI / Web Agents |

## Model routing (switch in agent picker)

| Fix | Suggested prompt | Model tier |
|-----|------------------|------------|
| Typo `Welcom` | Fix the welcome headline typo | Fast — try Tab first |
| Hero image | Wire hero logo to `public/cursor-mark.svg` | Fast |
| Feature spacing | Even card spacing per `@demo-standards.mdc` | Fast |
| API 500 | Fix `/api/ping` to return 200 JSON | Thinking / debug |
| Mongo slow | Inspect `usage_events`, add index on `team` | Agent + MongoDB MCP |

## Live fixes (pick 3–5)

### 1. Typo (30s)

File: `src/app/page.tsx` — change `Welcom` → `Welcome`.

### 2. Hero image (1–2 min)

File: `src/components/Hero.tsx` — set `src="/cursor-mark.svg"`.

### 3. Uneven spacing (1–2 min)

Files: `src/lib/demoLayout.ts`, `src/components/FeatureGrid.tsx`

- Set `FEATURE_SECTION_GAP_PX` to `FEATURE_SECTION_GAP_STANDARD_PX` (24)
- Set `HIDDEN_HINT_COLOR` to `CURSOR_MUTED_TEXT` in `demoTheme.ts`
- Remove per-card margin overrides; use one `FEATURE_CARD_GAP_PX`

### 4. API 500 (2–3 min)

File: `src/app/api/ping/route.ts`

```ts
return NextResponse.json({ ok: true, message: 'Adobe trial API ready' });
```

Click **Test API** — green status unlocks **Load team stats**.

### 5. MongoDB MCP (4–5 min)

1. Click **Load team stats** — note `docsExamined` in the UI
2. MongoDB MCP: list collections, sample `usage_events`, explain query on `{ team: "design" }`
3. Optional: Plan mode — propose `{ team: 1 }` index, confirm, apply
4. Re-run stats — lower `docsExamined` / faster response

Example index (via MCP or mongosh):

```js
db.usage_events.createIndex({ team: 1 })
```

## Progressive reveal (optional)

1. Fix `HIDDEN_HINT_COLOR` → first hint visible
2. Fix `FEATURE_SECTION_GAP_PX` → second hint visible
3. Fix ping API → final MCP/model line appears

## Differentiators to mention (no competitor names)

- **Models**: Match depth to task size
- **Agent View**: Multi-file edits with project context
- **MCP**: Real databases and tools in the loop
- **Rules**: Standards in `.cursor/rules/`
- **Surfaces**: Same agents in IDE, CLI, and web
- **Background agents**: Long refactors while you keep coding

## Optional verification

After API fix: Browser MCP snapshot of `http://localhost:3001` to confirm UI state.
