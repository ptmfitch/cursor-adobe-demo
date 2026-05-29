# Adobe × Cursor 3 Demo App

Polished single-page demo for a 10–15 minute Adobe trial walkthrough. Looks intentional on first load; hidden hints unlock as you fix deliberate issues live.

## Quick start

```bash
cd ~/Programming/git/cursor-adobe-demo
npm install
npm run mongo:up    # local MongoDB in background + seed (~5k docs, no team index)
npm run dev         # http://localhost:3001
```

## What's included

- **Page**: Branded welcome, glass activity panel, minimal copy
- **Hidden reveal chain**: color → hero mark → spacing → API → MCP (see `DEMO_SCRIPT.md`)
- **`GET /api/ping`**: Returns 500 until fixed
- **`GET /api/stats?team=design`**: MongoDB query without `team` index
- **Rules**: `.cursor/rules/demo-standards.mdc`

## MongoDB

Requires a local `mongod` (Homebrew example):

```bash
brew tap mongodb/brew
brew install mongodb-community
```

Then `npm run mongo:up` starts a background instance on port 27017 using `.mongo-data/` in this repo. When you're done: `npm run mongo:down`.

## Demo script

See [DEMO_SCRIPT.md](./DEMO_SCRIPT.md) for the reveal order and timed agenda.

## Built-in demo fixes

1. Typo: `Welcom` in `src/app/page.tsx`
2. Hint color: `HIDDEN_HINT_COLOR` in `demoTheme.ts`
3. Hero mark: broken image / `SHOW_HERO_MARK` in `demoTheme.ts`
4. Panel spacing: `FEATURE_SECTION_GAP_PX` + `PANEL_INSET_END_PX` in `demoLayout.ts`
5. API 500 in `src/app/api/ping/route.ts`
6. Slow Mongo query — add `{ team: 1 }` index via MongoDB MCP
