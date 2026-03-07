import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, Flowchart } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="The Approach"
      intro="You've learned to control space and wait. But sometimes you need to go in — you're behind on life, the timer's running, or the opponent is turtling. This chapter teaches you how Lidia closes the gap and starts her offense."
      hasPrevious
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Reading the Stance"
    >
      <Section title="f,f+2 — The Bread and Butter">
        <MoveCard
          character="lidia"
          videoId="f,F+2"
          move={{
            input: 'f,f+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i13',
            onBlock: '+5',
            onHit: '+15g',
            onCH: '+17',
            tags: ['plus on block'],
            description: "Lidia's primary approach tool. 13-frame mid that's +5 on block and transitions into HRS. This is the move that starts your stance offense. On hit you get guaranteed follow-ups (HRS 1 or HRS 2). On counter-hit, HRS 2 is also guaranteed. On block, you're in HRS at +5 — the opponent has to respect your options. The running version (WR+2 / f,f,F+2) does 4 more damage.",
            notes: [
              'On hit: HRS 2 is guaranteed (heat engager!)',
              'On CH: HRS 1 or HRS 2 guaranteed',
              'In heat: enhanced with reversal-break properties',
            ],
          }}
          showVideo
        />

        <p>
          f,f+2 is the move that makes Lidia's offense work. It's fast (i13 once running), safe
          (+5 on block), and transitions into HRS where you have real options. The catch is that
          it's linear — sidestep right beats it. That's why you need the tracking pair (df+1, df+2)
          established from the previous chapter before you start relying on f,f+2.
        </p>

        <Flowchart
          title="f,f+2 Decision Tree"
          nodes={[
            { type: 'start', label: 'f,f+2 connects or is blocked' },
            { type: 'decision', label: 'Did it hit?', branches: [
              { label: 'Yes (normal hit)', action: 'HRS 2 guaranteed → heat engager' },
              { label: 'Yes (counter hit)', action: 'HRS 2 guaranteed → heat engager + HAE transition' },
              { label: 'Blocked (+5 HRS)', action: 'Read the opponent → HRS options (see Chapter 5)' },
            ]},
            { type: 'end', label: 'On block: hold back if unsure. You have the option to just exit stance safely.' },
          ]}
        />

        <KeyConcept title="The Hit Confirm" icon="🎯">
          <p>
            When f,f+2 hits, you must recognize it and follow up with HRS 2. The counter-hit
            animation is distinct — Lidia hunches the opponent over. Practice watching for this.
            On normal hit, HRS 2 is guaranteed. On counter-hit, HRS 2 is also guaranteed and
            transitions into HAE in heat. When Lidia is already in heat, HRS 2 is guaranteed
            even on normal hit without needing counter-hit.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Running Moves">
        <MoveCard
          character="lidia"
          videoId="f,f,F+1"
          move={{
            input: 'WR+1 (f,f,F+1)',
            hitLevel: ['h'],
            damage: '24',
            startup: 'i13',
            onBlock: '+6',
            onHit: '+24a',
            tags: ['wall splat', 'plus on block'],
            description: "Running 1. High, +6 on block, wall splats, knocks down on hit. In heat, it transitions to stance and the hit combo leads into HAE 1 → d+1+2. On block at +6, you get frame traps (covered in Chapter 10). The weakness: it's a high that can be ducked and launched.",
            notes: [
              'Duckable — use alongside WR+3 to cover the duck',
              'In heat: enhanced with reversal-break properties',
              '+6 on block → frame trap territory',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          videoId="f,f,F+3"
          move={{
            input: 'WR+3 (f,f,F+3)',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i23',
            onBlock: '+6',
            onHit: '+11c',
            tags: ['plus on block'],
            description: "Running 3. Mid, +6 on block, chip damage, forces tech backroll on hit. Slower than WR+1 but can't be ducked. Use this when opponents start crouching your WR+1. The +6 on block gives you the same frame trap opportunities.",
          }}
          showVideo
        />

        <p>
          WR+1 and WR+3 form a high/mid pair from range. If the opponent ducks WR+1, use WR+3.
          If they stand and block, WR+1 is faster and gives the same +6. Both are excellent for
          closing distance and starting pressure.
        </p>
      </Section>

      <Section title="Close-Range Tools">
        <MoveCard
          character="lidia"
          move={{
            input: 'b+1',
            hitLevel: ['m'],
            damage: '24',
            startup: 'i18',
            onBlock: '+2',
            onHit: '+22c',
            tags: ['heat engager', 'wall splat'],
            description: "Safe mid heat engager. +2 on block means you can frame trap with 1,2 or 2,4 afterward. Wall splats. Chip damage. Poor tracking and limited range, but at close range this is one of your best buttons. Fish for this to activate heat.",
            notes: [
              'Linear — loses to SSR',
              '+2 on block → frame traps (1,2 or 2,4)',
              'Wall splats for huge damage near walls',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          move={{
            input: 'df+4,2',
            hitLevel: ['m', 'h'],
            damage: '12, 20',
            startup: 'i15',
            onBlock: '-8',
            onHit: '+11d',
            tags: ['tornado', 'whiff punish'],
            description: "Mid-high tornado string. Excellent whiff punisher — when you see the opponent whiff something from range 2, this is fast and covers distance. The follow-up f,f+3 is guaranteed on hit.",
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          videoId="db+3+4"
          move={{
            input: 'db+3+4',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i22',
            onBlock: '-3',
            onHit: '+5',
            tags: ['low parry'],
            description: "Has low parry properties (frames 5-13). If the opponent tries to poke you with a low, this catches it for a guaranteed f,f+1+2 follow-up. Useful in okizeme situations where you expect a low get-up kick, and as a check tool when opponents rely on lows to interrupt you.",
          }}
          showVideo
        />
      </Section>

      <Section title="2,4 — The Unsung Hero">
        <MoveCard
          character="lidia"
          move={{
            input: '2,4',
            hitLevel: ['h', 'm'],
            damage: '8, 13',
            startup: 'i11',
            onBlock: '-8',
            onHit: '+4',
            description: "11-frame high-mid natural combo. Safe on block at -8, +4 on hit. Some Lidia players prefer this over 1,2 as their go-to poke because it's a high-mid string (the second hit can't be ducked) and it's completely safe. At +4 on hit, you can continue pressure with your mid options.",
          }}
          showVideo
        />
        <p>
          2,4 is a quiet workhorse. It won't make highlight reels, but it's the kind of
          move that quietly wins rounds. Throw it out, collect your +4, and continue your offense.
          No stance commitment, no risk.
        </p>
      </Section>

      <Section title="Putting It Together">
        <p>
          Your approach game has layers. From long range, use Political Storm and backdashing.
          From mid-range, use WR+1/WR+3 and f,f+2 to close the gap. At close range, use b+1
          to fish for heat, df+1/df+2 to track sidesteps, and 1,2 or 2,4 to maintain pressure.
        </p>

        <PracticeBox
          title="Approach Drill"
          setup="Practice Mode, start at range 3 from the opponent"
          tasks={[
            { id: 'ff2-confirm', text: 'Land f,f+2 on hit, follow up with HRS 2 every time', type: 'counter', target: 10 },
            { id: 'ff2-block', text: 'Get f,f+2 blocked, hold back to exit HRS safely', type: 'counter', target: 5 },
            { id: 'wr-pair', text: 'Alternate WR+1 and WR+3 approaches. Notice the opponent can duck WR+1 but not WR+3', type: 'toggle' },
            { id: 'b1-fish', text: 'At close range, land b+1 into heat activation', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="The Default Approach">
          When in doubt, your default approach sequence is: backdash at range 3 watching for whiffs →
          walk forward when safe → f,f+2 from range 2 → hold back in HRS if blocked, or HRS 2 on
          hit. This simple pattern carries you through most games.
        </TipBox>
      </Section>
    </Chapter>
  )
}
