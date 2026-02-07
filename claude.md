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

---

## Counter Guides (Anti-Character Guides)

### The Core Goal

A player completes the counter guide. They queue into that character online. They are meaningfully better at the matchup than they would have been using any other strategy — watching videos, reading frame data, grinding ranked, studying punishment tables, or any combination of those. That's the bar.

If the guide doesn't clear that bar, it doesn't matter how well-designed it is.

### What Matchup Knowledge Actually Is

This is the other half of fighting games that almost nobody teaches well. Character guides teach you to play a character. Counter guides teach you to *beat* one. These are fundamentally different problems.

Here's the proof: players lose mirror matches all the time. A Dragunov main who knows every combo, every frame trap, every setup — losing to another Dragunov. Not because they don't know the character, but because knowing *how to play* a character and knowing *how to fight against* that character are separate skills. Pros debate whether mirror match results come down to player skill or matchup knowledge, and the consensus leans heavily toward matchup knowledge. You can fully understand a character's toolkit and still not know what to do when you're on the receiving end of it.

This means matchup knowledge is its own domain. It's not a subset of character knowledge. It's not the inverse of character knowledge. It's a distinct skill that has to be learned on its own terms.

### Why This Problem Is So Hard

Every character in Tekken has hundreds of moves. Dozens of strings with extensions. Stances with transitions. Frame data for every hit level, on block, on hit. The information space is enormous.

You can't memorize it all. Nobody can. Pros who've played for 20 years still get caught by matchups they haven't studied. And even if you could memorize every frame number, that wouldn't translate to gameplay — you'd know that WR2 is +5 on block into IAI stance, but that fact alone doesn't tell you what to do when it happens at speed in a real match with adrenaline pumping.

But here's the thing: most of those hundreds of moves don't matter. Most strings never get used in real play. Most frame data is irrelevant because you'll never block that move in ranked. The information that *does* matter — the handful of things that actually determine whether you win or lose the matchup — is buried inside the mountain of data that doesn't.

So the problem is really two problems stacked together:
1. **Figuring out what actually matters** — which moves, situations, and knowledge points are the ones that will change your results?
2. **Making it stick** — how do you take that knowledge and make it something the player can actually use under pressure in a real match?

Neither of these is solved by existing approaches.

### Why Everything Else Fails

**Frame data and punishment lists** (Tekken Docs, anti-strat pages): These contain all the information but teach nothing. Listing 47 punishable moves doesn't help a player who can't recognize which move they just blocked. The information is correct but completely decontextualized — it's an encyclopedia when what the player needs is a coach.

**Tips and guide videos**: These create the *feeling* of learning. You watch a 15-minute video, you nod along, you feel like you understand. Then you play and nothing is different. The knowledge evaporated because it was never practiced, never drilled, never connected to actual gameplay situations. Watching someone explain a concept is not the same as experiencing it.

**"Just play the matchup"**: This is how most people learn, and it's the slowest possible path. You'll develop heuristics over hundreds of games, but they'll be incomplete, often wrong, and reinforced by bad habits. You'll learn to duck one high but miss the other five. You'll develop a punish for one move but whiff-punish three others because you can't tell them apart. Experience without structure is just slow trial and error.

**Punishment-only approaches**: Learning to punish every unsafe move sounds good in theory. In practice, the player learns punishment in isolation — they see the move, they punish it. In a real match, the move comes embedded in a string, at a different spacing, with different preceding context, and they can't recognize it. The skill doesn't transfer because it was trained out of context.

**Ducking-highs-only approaches**: Same problem. You learn to duck specific strings in a recording. In a match, the timing is different, the preceding pressure is different, and your brain didn't learn to *see* the high — it learned to duck at a specific timing that only exists in the drill.

**Targeted drills (the more sophisticated approach)**: Some content creators set up multi-recording drills that randomize options. This is closer to the right idea, but still has deep problems. Does the drill actually map to what the character does in a real match? Does it train a genuine skill or just pattern-match to the recording order? If you jab and it beats every recording, what did you learn? If it's a 50/50, what are you drilling exactly — guessing?

The common thread: every existing approach either gives you **information without learning** or **learning without transfer**. The information exists (Tekken Docs has it all). The learning tools exist (Practice Mode is powerful). But nobody has solved the bridge between them — taking the right information and turning it into genuine matchup competence.

### What "Better at the Matchup" Actually Means

Being good at a matchup doesn't mean memorizing frame data. It doesn't mean being able to punish every move in isolation. It means:

- **You understand what the opponent is trying to do to you.** Not just the moves, but the intent. The gameplan. What they're building toward. This gives you a mental model that lets you predict and respond to things you've never specifically drilled.
- **You make the right decision in the common situations.** Not every situation — just the ones that actually come up. The approach, the close-range pressure, the stance transitions, the wall. If you handle these correctly, you handle 90% of real matches.
- **You know the difference between things you can control and things you have to guess.** Some situations are knowledge checks (you know the answer or you don't). Some are reactable (you can train them). Some are genuine reads (you guess). Knowing which is which prevents you from wasting practice time on coin flips and wasting real matches on things you should have just known.
- **The knowledge lives in your hands, not just your head.** You don't just know that the gun is a high — you actually duck it when it happens at speed. The gap between knowing and doing is the entire challenge.

### Counter Guides Are a Different Shape Than Character Guides

A character guide can be deep. You're investing in one character for hundreds, maybe thousands of hours. You want mastery.

A counter guide has to be short. You need one for every character in the game — 30+ characters. A player cannot spend 10 hours on every matchup. The guide has to be completable in 1-3 focused sessions while delivering real, lasting improvement.

This constraint changes everything about how you design the guide. You can't be comprehensive. You have to be ruthlessly efficient — figuring out which 20% of the matchup knowledge delivers 80% of the results, and teaching that with maximum density and minimum waste.

It also means you can't just shrink a character guide. The structure, the pacing, the teaching methods — all different. A character guide builds depth over time. A counter guide needs to deliver breadth with targeted depth, quickly.

### The Hard Open Questions

These are problems we've identified but haven't fully solved. They should inform how you approach building counter guides, but don't pretend there are clean answers yet.

**How do you make drill practice actually transfer?** The biggest risk with any drill is that the player learns to beat the drill instead of learning to play the matchup. The brain is lazy — it will find the minimum information needed to succeed in the practice environment and learn exactly that. If one response beats everything, it learns that response regardless of what the opponent did. If the drill has a rhythm, it learns the rhythm instead of the recognition. Designing drills that genuinely teach matchup skills and not just drill-completion skills is the central unsolved challenge.

**How do you represent what a character actually does?** Setting up recordings in Practice Mode is an approximation. Real Victor players don't do random moves — they have patterns, flowcharts, habits. But a recording can only do one thing. Four recordings randomized don't capture the flow of a real opponent's offense. The question is whether and how we can get close enough that the practice transfers.

**Where's the line between knowledge and training?** Some matchup knowledge is pure information — you either know it or you don't, and no drill is needed. Some requires genuine practice under pressure. A lot of it is ambiguous. Telling someone "duck the gun" is knowledge, but can they actually do it at speed against a string they've never seen? At what point does knowledge need to become training? This line is different for every player and every piece of information.

**What should be trained vs. what should be accepted as a read?** Some situations are reactable for tournament pros but effectively random for most players. Where do you draw the line? Is it dishonest to drill something that 80% of players will never react to consistently? Is it a disservice not to, for the 20% who might?

**How do you teach without being formulaic?** Every character demands a different approach. A stance character requires different teaching than a rushdown character. A gimmicky character with one exploitable weakness needs a completely different guide than a fundamentals-heavy character with no easy answers. But there's also a tension: consistency helps players know what to expect. Finding the right balance between character-specific design and learnable structure is an ongoing problem.

### Insights So Far

These aren't final answers. They're observations from thinking about this problem that should guide design decisions.

**Knowledge is disproportionately valuable.** In most matchups, a relatively small number of simple, memorable rules — things you just *know* with no reaction required — cover a huge portion of the matchup. Things like "every gunshot is a high" or "if you blocked the stance transition, you can act" collapse dozens of frame data entries into one principle. Delivering this knowledge clearly and memorably is probably the highest-ROI thing a counter guide can do.

**Understanding intent matters more than understanding data.** Knowing what the opponent is *trying to accomplish* — their gameplan, their win condition, what they're building toward — gives you a mental model that handles novel situations. Frame data doesn't. If you understand that Victor wants to push you to the wall and run his wall mix, you'll make better decisions even in situations the guide never covered.

**The brain does four things in a match: perceiving, classifying, deciding, executing.** Each is trained by a completely different method. Perception is trained by exposure to animations. Classification is trained by understanding (knowledge). Decision is trained by practice under ambiguity — but only when the ambiguity involves something you can actually perceive. Execution is trained by repetition. A good counter guide needs to know which of these it's trying to improve at any given moment, because using the wrong method for the wrong process wastes time.

**Drills fail in specific, identifiable ways.** A drill with only one recording trains timing, not recognition. A drill where one response beats everything teaches the brain to shortcut. A drill on a true 50/50 trains guessing. These are failure modes to watch for, not necessarily problems with a clean solution.

**Experiencing the character's offense from the inside builds intuition fast.** Playing briefly as the opponent character — not to learn them, but to feel what their offense is like from the other side — creates an intuitive model of their gameplan that transfers to defense in a way that reading about it doesn't. This is an underused tool. But it must be done carefully:

The primary value of "play as" sections is **seeing animations you'll defend against.** The player doesn't know the opponent's character at all. They don't know how to enter stances, what buttons do what, or how anything works. The section must be completely literal: "press d1+2 to enter chainsaws," "press f1 — watch the animation," "press 3,2 — see the second hit? That's a high." Every single input must be spelled out. Never say "try her options" — say exactly which buttons to press and what to watch for. The player should leave with visual recognition of key animations, not an understanding of the character's gameplan in the abstract. Keep it short, keep it concrete, and always tell them what to look at.

**Not everything is trainable, and the guide should be honest about it.** Some situations are genuine reads. Pretending they're drillable wastes the player's time and erodes trust. The guide should clearly distinguish between things you can learn, things you can train, and things you have to guess — and teach the correct response for each side of the guess.

### The Measure of Success

After completing a counter guide, the player should be meaningfully better at the matchup than they would have been spending the same amount of time on any other strategy. They should understand the character's gameplan, handle the common situations correctly, and know where the genuine guesses are.

The counter guide has failed if it produced someone who can recite information but still doesn't know what to do in a real match. It has succeeded if the player can't quote a single frame number but makes the right decision in every common situation they face.

---

## The Final Question

Every time you write something, ask:

> "If a player reads this section and then plays a match—will they actually be better?"

If the answer isn't clear, rethink it.

Don't write guides. Build players.
