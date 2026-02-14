# Note Triage

This workflow is designed for small to medium changes — fixing content, rewriting a section, updating move data, adding or removing things from a chapter, etc. Keep it quick and focused.

If the note is ambiguous about scope, bias towards the smaller interpretation. Don't overthink it. If it's a huge change that would touch many files or require architectural work, skip it. If you get stuck or it feels impossible, skip it. Skipping means just exit without creating a PR.

Don't build. Don't test. Just make the changes and open the PR.

## Locating the file

- `/<character>` → `src/characters/<character>/chapters/Chapter1.tsx`
- `/<character>/chapter-<N>` → `src/characters/<character>/chapters/Chapter<N>.tsx`
- `/vs/<character>/chapter-<N>` → `src/characters/<character>/counter/chapters/Chapter<N>.tsx`

Use the `selector` and `selected_html` to find the exact spot. If a screenshot URL is included, reference it in the PR description so the reviewer can see what the user saw.

## Verification

Frame data source of truth: `data/framedata/<character>.json` (always Season 2). Cross-reference when the note involves frame data or move properties.

## Making the change

Read the file, understand the context, and make the change. Match the style and tone of the surrounding content. If the note asks to fix something across the whole guide, search and fix every occurrence.

## PR format

Branch: `note/<note-id>`

Title: short description of the change.

Description:
```
> <the note's message>

**Page:** <page>
**Note ID:** <note-id>
**Screenshot:** <screenshot URL if provided>

<what you changed and why>
```
