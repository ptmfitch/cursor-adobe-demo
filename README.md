# Adobe × Cursor 3 Demo App

Single-page Next.js demo for a 10–15 minute Adobe trial walkthrough. Deliberate bugs and a progressive reveal trail are built in for live Agent fixes.

## Quick start

```bash
cd ~/Programming/git/cursor-adobe-demo
npm install
npm run mongo:up    # local MongoDB in background + seed (~5k docs, no team index)
npm run dev         # http://localhost:3001
```

## What's included

- **Page**: Welcome copy, Cursor 3 feature pills, capability strip, API buttons, dev playbook
- **`GET /api/ping`**: Returns 500 until fixed (demo debug beat)
- **`GET /api/stats?team=design`**: MongoDB query without `team` index (MCP optimization beat)
- **Reveal trail**: Fix colors → spacing → API to unlock hints
- **Rules**: `.cursor/rules/demo-standards.mdc` for spacing standards

## MongoDB

Requires a local `mongod` (Homebrew example):

```bash
brew tap mongodb/brew
brew install mongodb-community
```

Then `npm run mongo:up` starts a background instance on port 27017 using `.mongo-data/` in this repo. When you're done: `npm run mongo:down`.

If you already have MongoDB running on 27017 (e.g. via `brew services`), `mongo:up` skips startup and only seeds.

## Demo script

See [DEMO_SCRIPT.md](./DEMO_SCRIPT.md) for timed agenda, model picks, and MCP steps.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 3001 |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run mongo:up` | Start local MongoDB + seed |
| `npm run mongo:down` | Stop demo MongoDB instance |
| `npm run mongo:seed` | Re-seed only (drops collection) |

## Built-in demo fixes

1. Typo: `Welcom` in `src/app/page.tsx`
2. Broken hero image: `placeholder-cursor-logo.png` → use `cursor-mark.svg`
3. Uneven feature grid spacing in `FeatureGrid.tsx` / `demoLayout.ts`
4. API 500 in `src/app/api/ping/route.ts`
5. Slow Mongo query — add `{ team: 1 }` index via MongoDB MCP
6. Reveal trail: `HIDDEN_HINT_COLOR` and `FEATURE_SECTION_GAP_PX` in lib files
