# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a Vite + React + TypeScript single-page application providing Tekken 8 character guides. There is no backend database — it is a static SPA with optional Vercel serverless functions for user feedback.

### Running the app

- `npm run dev` — starts the Vite dev server on port 5173
- `npm run build` — runs `tsc -b && vite build` (TypeScript type-check + production build)
- `npm run preview` — serves the production build locally

### Lint

- `npm run lint` is defined in `package.json` but `eslint` is **not** listed as a dependency. The lint command will fail with `eslint: not found` until ESLint is added to `devDependencies`. This is a pre-existing issue in the repo.

### Testing

- No automated test framework is configured (no Jest, Vitest, etc.). Manual testing via the browser is the primary method.

### Key caveats

- The `.env.example` shows optional env vars (`VITE_NOTES_API_URL`, `VITE_NOTES_API_URL_DEV`) only needed for the feedback/notes serverless API — not required to run the SPA.
- The Vercel serverless functions (`api/notes.ts`, `api/upload.ts`) require `vercel dev` and a `BLOB_READ_WRITE_TOKEN` to test locally. They are optional for general development.
- Path aliases (`@/`, `@components/`, `@themes/`, `@characters/`) are configured in both `vite.config.ts` and `tsconfig.json`.
