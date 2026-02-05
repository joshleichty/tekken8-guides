# Character Guide Philosophy

This document defines how to think about building Tekken 8 character guides. These are principles, not rules. Use judgment.

# Season 2

All guides should be for the season 2 versions of each character. Make sure that you fact check information in videos as they might be from season 1. Tekken Docs is always up to date with S2.

## The Problem We're Solving

Most fighting game educational content fails in one of two ways:

**The "Vibes" Problem**: Conceptual content that makes you *feel* like you're learning. You consume it, you nod along, you think you understand—but when you play, you have nothing concrete. The knowledge evaporates because it was never actionable.

**The "Encyclopedia" Problem**: Frame data dumps and move lists that contain *all* the information but teach nothing. You're drowning in data with no understanding of what matters, when, or why.

**Our goal**: The perfect information at the right time. Not information overload. Not vibes. Actual knowledge that transforms into gameplay.

## The Measure of Success

After completing a guide, a player should be able to reach **Fujin rank or higher**. Not by memorizing—by understanding. They should:
- Know WHY they make each decision
- Adapt to opponents they've never faced
- Continue growing beyond the guide
- Enjoy playing the character

If a guide doesn't produce competent, thinking players—it has failed.

## DO NOT COPY EXISTING GUIDES

**This is the most important section. Read it carefully.**

When creating a new character guide, **do not look at existing guides and copy their structure**. Every single guide has become formulaic because of this pattern:

1. Look at Jin's guide
2. Copy Chapter 1's structure
3. Fill in different data
4. Repeat for all chapters

**This is wrong.** The result is 12 guides that feel identical with different move names plugged in.

### Every New Guide Must Improve

Each guide you create should be **better than the last**. Not the same. Better. Ask yourself:
- What didn't work well in previous guides?
- What new way could I present this information?
- What component would make this clearer that doesn't exist yet?
- How can I make THIS character's guide the best one yet?

### Chapter 1 Is Not a Template

Chapter 1 is especially problematic. Every character's Chapter 1 has become: "Welcome! Here's the notation. Here's your gameplan. Here are your key moves."

**Stop.**

What does THIS character need the player to understand first? Start there.

### Create New Components

If the existing components don't serve the character's teaching needs, **build new ones**. You have full permission to:
- Create entirely new UI patterns
- Invent new interactive elements
- Design character-specific visualizations
- Build tools that don't exist yet

The codebase is a starting point, not a limitation.

### Follow Principles, Not Patterns

The principles below tell you WHAT to achieve. They don't tell you HOW. The "how" should be invented fresh for each character based on what they need.

If you find yourself copying structure from another guide, you've already failed. Start over. Think about THIS character.

## Writing Quality and Reader Experience

The guide should be enjoyable to read, not just useful to reference.

- Chapter 1 should open with a readable character overview before technical instruction:
  - who the character is in Tekken 8,
  - what it feels like to play them,
  - what player type they fit,
  - where their core strengths and risks live.
- Do not jump straight into move lists or drills in the opening screen.
- The opening should feel like an explainer that helps the reader understand the character’s identity first, then transitions into gameplay systems.
- Every chapter should begin with a short theory-first explanation of:
  - what skill this chapter builds,
  - why it matters in real matches,
  - how it connects to the previous chapter.
- Do not present chapters as move buckets. Moves are supporting tools for a concept, not the concept itself.
- Use enough prose to create flow and personality, but avoid walls of text. Aim for clear, vivid writing that helps the player picture match situations.
- Avoid rigid templating (for example: the exact same chapter rhythm, checklist cadence, and component pattern across characters). Reuse ideas when useful, not by default.
- By the end of each chapter, the reader should feel one concrete upgrade in how they think and play the character.

---

## Core Principles

### Information Must Become Action

For every piece of information, ask: **"How will this become gameplay?"**

If you can't answer that question, either restructure the information until it's actionable, or remove it. Frame data is meaningless unless the player knows when that data matters. A move's properties are useless unless you teach the situations where those properties shine.

Don't just show what moves do. Show when and why they matter.

### The Guide Is Used With The Game Open

Players read these guides with Practice Mode running. Structure content so that:
- Concepts have immediate practice applications
- Progress is measurable—they know when they've got it
- The guide feels like a coach, not a textbook

### Perfect Information at the Right Time

Information overload kills learning. A beginner doesn't need frame traps. An intermediate player doesn't need basic notation explained again.

Layer content deliberately. Core content for everyone. Deeper content for those who want it. Concepts introduced when they become relevant. Never flood a beginner with advanced tech. Never bore an intermediate player with basics.

### Each Guide Must Feel Like Its Character

**This is critical.** Guides have become formulaic—same structure, same presentation, different data plugged in.

Every character has a soul. Every character demands a different teaching approach. A counter-hit fishing character needs you to feel the patience and timing. A stance character needs transitions to feel natural, not like a list to memorize. A rushdown character should feel fast to learn.

Don't copy structure from other guides. Ask: "How would this character teach someone to play them?" Let that guide your structure, pacing, and tone.

### You Are Not Bound By Existing Structure

The current structure exists as a starting point, not a constraint. You have full permission to:
- Reorganize chapters if a different order teaches better
- Merge or split chapters based on character needs
- Create entirely new section types
- Build new components if existing ones don't serve the purpose
- Make the guide surprising if that keeps engagement

If you're writing something and realize it feels like every other character's version of the same thing—stop. Rethink. What does THIS character need?

### Concepts Before Moves, Situations Before Concepts

The teaching order matters:
1. The situation (when/where this applies)
2. The concept (why this works)
3. The moves (what you actually press)
4. The practice (how to drill it)

Teach players to see the game first. Then show the tools for those moments.

### Build Game Plans, Not Move Lists

A character is not a collection of moves. A character is a set of interconnected strategies. By the end, the player should have:
- A clear mental model of their character's win condition
- Game plans for different situations
- The ability to construct new approaches from principles
- Confidence in their decision-making

Show how moves work together. Show the thinking behind choices.

## On Components and Tools

The codebase has various components—move cards, drills, quizzes, challenges, flowcharts. These are tools, not requirements.

**Be intentional.** A component should only be used when it genuinely serves learning. Too many interactive elements makes a guide feel like a chore. Components that don't translate to actual gameplay are noise.

If an existing component doesn't serve what you're trying to teach, don't force it. Build something better, or find another way to teach the concept.

The goal is learning, not using components.

## On Moderation

Everything can be overused. Interactivity can become exhausting. Explanations can become walls of text. Move cards can become lists to skim. Practice drills can become busy work.

Use judgment. Vary the pacing. Know when to teach, when to let them practice, when to move on. A guide that's relentlessly one thing—all drills, all explanation, all reference—fails even if each piece is good.

## On Videos

**Every MoveCard should have `showVideo` enabled.** Videos are pulled from the Okizeme CDN based on character name and move input.

### Video URL Patterns

The Okizeme CDN uses specific naming conventions. The auto-generated URL often doesn't match. Use `videoId` to override.

**1. Stance moves use `.` notation (not spaces):**
- `PHX 2` → `videoId="PHX.2"`
- `FC df+2` → `videoId="FC.df+2"`
- `SNE 3+4,2` → `videoId="SNE.3+4,2"`
- `GMH 1` → `videoId="GMH.1"`
- `SCR 2,1` → `videoId="SCR.2,1"`
- `MNT 1,3` → `videoId="MNT.1,3"`
- `TRT 3` → `videoId="TRT.3"`
- `BAD 2,4` → `videoId="BAD.2,4"`
- `BAD 3` → `videoId="BAD.3"`
- `RFF.2,4~f` → `videoId="RFF.2,4"` (remove transition)
- `NSS.FC df+3` → `videoId="NSS.FC.df+3"`
- `SS 1` → `videoId="SS.1"`

**2. Double-tap forward uses capital second F:**
- `f,f+2` → `videoId="f,F+2"`
- `f,f+3` → `videoId="f,F+3"`
- `f,f+4` → `videoId="f,F+4"`
- `ff+4` → `videoId="f,F+4"`
- `f,f,f+2` → `videoId="f,f,F+2"`
- `f,f,f+3` → `videoId="f,f,F+3"`
- `f,f,f+1+2` → `videoId="f,f,F+1+2"`

**3. While standing removes the `+` after `ws`:**
- `ws+3` → `videoId="ws3"`
- `ws+4` → `videoId="ws4"`
- `ws+1,2` → `videoId="ws1,2"`

**4. Just frame colon becomes comma:**
- `2:1` → `videoId="2,1"`
- `df+1,2:1` → `videoId="df+1,2,1"`

**5. Transition notation `~F` or `~f` is removed:**
- `1,1~F` → `videoId="1,1"`
- `RFF.2,4~f` → `videoId="RFF.2,4"`

**6. Heat moves use `H.` prefix (capital H):**
- `Heat Smash` → `videoId="H.2+3"`
- `Heat 1+2` → `videoId="H.1+2"`
- `h.db+1+2` → `videoId="H.db+1+2"`
- `h.u+1+2` → `videoId="H.u+1+2"`
- `h.IAI.d+2` → `videoId="H.IAI.d+2"`
- `Heat DGF.1` → `videoId="H.DGF.1"`

**7. Complex strings need simple videoId:**
If your input has parentheses, "or", "at wall", "hold", "CH", or other descriptive text:
- `1+3 or 2+4 (at wall)` → `videoId="1+3"`
- `df+2,1 (hold)` → `videoId="df+2,1"`
- `1+3+4 (Taunt)` → `videoId="1+3+4"`
- `WR1+2 (f,f,F+1+2)` → `videoId="f,f,F+1+2"`
- `db+1,1 (at wall)` → `videoId="db+1,1"`
- `RAM.1+3 or RAM.2+4` → `videoId="RAM.1+3"`
- `db+1+2, 1 (BDS 1)` → `videoId="BDS.1"`
- `b+3 or b+4` → `videoId="b+3"`
- `CH FC df+4` → `videoId="FC.df+4"` (remove CH)
- `CH uf+2` → `videoId="uf+2"` (remove CH)

**8. Full crouch moves use `FC.` notation:**
- `FC df+2` → `videoId="FC.df+2"`
- `FC df,d,df+3` → `videoId="FC.df,d,df+3"`

### Required Workflow for New Character Guides

After creating or modifying a character guide, you MUST:

1. **Build the app**: Run `npm run build` to verify no TypeScript errors
2. **Run the video checker**: Run `node scripts/check-videos.js [character-name]` to check all video URLs
3. **Fix broken videos**: For each 404:
   - Test patterns with `curl -s -o /dev/null -w "%{http_code}" "https://okizeme.b-cdn.net/[character]/[pattern].mp4"`
   - Apply the rules above to find the correct pattern
   - Add `videoId` prop with the working pattern
4. **Re-run checker**: Verify fixes worked
5. **Accept remaining failures**: Some moves may not have videos on the CDN—that's okay

**Batch testing example:**
```bash
echo -n "FC.df+2: " && curl -s -o /dev/null -w "%{http_code}" "https://okizeme.b-cdn.net/clive/FC.df+2.mp4" && echo
echo -n "f,F+2: " && curl -s -o /dev/null -w "%{http_code}" "https://okizeme.b-cdn.net/clive/f,F+2.mp4" && echo
```

### Example MoveCard with videoId

```tsx
<MoveCard character="zafina"
  videoId="SCR.2,1"  // Override because input has space
  move={{
    input: 'SCR 2,1',  // Display string keeps the space
    hitLevel: ['m', 'm'],
    damage: '17, 25',
    // ... rest of move data
  }}
  showVideo
/>
```

### Important Notes

- The `videoId` is just the filename without `.mp4` and without URL encoding
- The `input` prop is for display—keep it human-readable
- `videoId` is for the CDN—match their naming exactly
- Not all moves have videos on Okizeme—aim for 90%+ coverage
- Only `MoveCard` supports `showVideo`—don't add it to `ComboCard`, `PracticeBox`, etc.

## The Final Question

Every time you write something, ask:

> "If a player reads this section and then plays a match—will they actually be better?"

If the answer isn't clear, rethink it.

Don't write guides. Build players.
