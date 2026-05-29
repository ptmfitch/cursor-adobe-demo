# Agents

## Project overview

Next.js 15 single-page demo for Adobe × Cursor trial presentations. No external APIs except local MongoDB.

## Running locally

```bash
npm run mongo:up
npm run dev
```

Server: `http://localhost:3001`. Requires `MONGODB_URI` only if not using default `mongodb://127.0.0.1:27017`.

`npm run mongo:up` starts a local `mongod` in the background (data in `.mongo-data/`). Stop with `npm run mongo:down`.

## Validation

```bash
npm run lint
npm run build
```

## Demo caveats

- `/api/ping` is intentionally broken (500) until fixed for the demo.
- Mongo seed has no `team` index — add during MCP beat.
- Several UI/layout issues are deliberate; see `DEMO_SCRIPT.md`.
