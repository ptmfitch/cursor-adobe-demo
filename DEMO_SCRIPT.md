# Demo script — Adobe × Cursor 3 (10–15 min)

Open `~/Programming/git/cursor-adobe-demo` in Cursor. Run `npm run mongo:up` and `npm run dev` before the session.

The page looks polished on purpose. Hidden hints at the bottom unlock as you fix things — only you see the next step in `DEMO_SCRIPT.md` until each reveal fires.

## Progressive reveal (your script)

| You do (not on screen) | Hidden hint that appears |
|------------------------|--------------------------|
| Fix `HIDDEN_HINT_COLOR` → `CURSOR_MUTED_TEXT` in `demoTheme.ts` | “Remove the hero mark.” |
| Set `SHOW_HERO_MARK` to `false` or fix image in `Hero.tsx` | “Balance the panel inset in demoLayout.ts.” |
| Fix `FEATURE_SECTION_GAP_PX` + panel inset per `@demo-standards.mdc` | “Repair the ping endpoint.” |
| Fix `/api/ping` → **Test API** shows Connected | “Index usage_events.team — use MCP.” |

Optional quick win before the chain: typo `Welcom` → `Welcome` in `page.tsx` (Tab first).

## Agenda

| Min | Beat | Narrate |
|-----|------|---------|
| 0–1 | Show the page | Looks intentional — then peel back the layers |
| 1–4 | Color → image → spacing | Fast model; Rules in `@demo-standards.mdc` |
| 4–7 | API 500 | Thinking model; Agent View across route + panel |
| 7–11 | MongoDB MCP + index | Real stack; Plan mode optional |
| 11–15 | Talk Cursor 3 surfaces, models, MCP | You drive — nothing repeated on the page |

## Model routing

| Fix | Suggested prompt | Model tier |
|-----|------------------|------------|
| Typo | Fix the welcome headline | Fast / Tab |
| Hint color | Set hint text color per demo-standards | Fast |
| Hero mark | Remove or fix the hero image | Fast |
| Panel spacing | Balance panel inset and section gap per rules | Fast |
| API 500 | Fix `/api/ping` to return 200 JSON | Thinking |
| Mongo | Inspect `usage_events`, add `{ team: 1 }` index | Agent + MCP |

## Fix details

### Color (hint 1)

`src/lib/demoTheme.ts` — `HIDDEN_HINT_COLOR = CURSOR_MUTED_TEXT`

### Hero mark (hint 2)

`src/lib/demoTheme.ts` — `SHOW_HERO_MARK = false`, or `Hero.tsx` → `/cursor-mark.svg`

### Spacing (hint 3)

`src/lib/demoLayout.ts`:

- `FEATURE_SECTION_GAP_PX = FEATURE_SECTION_GAP_STANDARD_PX`
- `PANEL_INSET_END_PX = PANEL_INSET_STANDARD_PX`

### API (hint 4)

`src/app/api/ping/route.ts`:

```ts
return NextResponse.json({ ok: true, message: 'Ready' });
```

### MongoDB MCP

1. **Load team stats** — note docs examined
2. MongoDB MCP: sample `usage_events`, explain `{ team: "design" }`
3. `db.usage_events.createIndex({ team: 1 })`
4. Re-run stats

## Differentiators (you narrate — not on page)

Models per task, Agent View, MCP, Rules, IDE / CLI / Web Agents, background agents.
