# Note Triage

Evaluate the note. If it's a real, specific fix (wrong frame data, typo, incorrect move property, factual error), implement it. If it's spam, a vague opinion, a question, or a feature request — skip it.

## Skip behavior

If you skip, just exit. Don't create a PR.

## Locating the file

The `page` field maps to source files:

- `/<character>/chapter-<N>` → `src/characters/<character>/chapters/Chapter<N>.tsx`
- `/vs/<character>/chapter-<N>` → `src/characters/<character>/counter/chapters/Chapter<N>.tsx`

The `selector` and `selected_html` fields tell you exactly what the user was looking at.

## Verification

Frame data JSON lives in `data/framedata/<character>.json`. That file is the source of truth (synced from Tekken Docs, always Season 2). If the note contradicts it, trust the JSON.

If you're unsure whether the note is correct, skip it.

## Making the change

Minimal edit. Don't refactor. Don't restructure. Just fix what the note describes.

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
