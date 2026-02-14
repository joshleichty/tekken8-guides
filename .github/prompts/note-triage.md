# Note Triage

Evaluate the note. If it's actionable (wrong data, typo, formatting issue, factual error), implement it. If it's spam, vague, a question, or a feature request — skip it. If it requires an architectural change or significant restructuring, skip it.

These are small edits only. Don't test. Don't build. Just make the edit and open a PR.

If you skip, just exit. Don't create a PR.

## Locating the file

- `/<character>` → `src/characters/<character>/chapters/Chapter1.tsx`
- `/<character>/chapter-<N>` → `src/characters/<character>/chapters/Chapter<N>.tsx`
- `/vs/<character>/chapter-<N>` → `src/characters/<character>/counter/chapters/Chapter<N>.tsx`

Use the `selector` and `selected_html` to find the exact spot.

## Verification

Frame data source of truth: `data/framedata/<character>.json` (always Season 2). If the note contradicts it, trust the JSON. If unsure, skip.

## Making the change

Read the file, find the section, make the minimal edit. If the note says "fix all instances," search and fix every occurrence.

## PR format

Branch: `note/<note-id>`

Title: short description of the fix.

Description:
```
> <user's message>

**Page:** <page>
**Note ID:** <note-id>

<what you changed and why>
```
