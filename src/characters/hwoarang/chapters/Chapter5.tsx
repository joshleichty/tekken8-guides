import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, Collapsible, ConstraintPlay } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Getting In"
      intro="Hwoarang's loops are devastating — but they need close range to start. This chapter teaches you how to close the distance, control space, and create the openings that let your pressure begin. The approach is the hardest part. Once you're in, you already know what to do."
      hasPrevious
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Combos"
    >
      <Section title="The Problem">
        <p>
          Everything you've learned so far — d+3,4, the RFS menu, the infinite loops, punishment
          into stances — requires you to be at close range. But against good players, you can't just
          run forward and start pressing. They'll keep you out with pokes, sidestep your approaches,
          and whiff punish if you commit to the wrong move at the wrong distance.
        </p>
        <p>
          Hwoarang's neutral game is honest about this. He doesn't have a Dragunov-style running 2
          that solves every approach problem. He has a <strong>toolkit of mid-range moves</strong>, each
          with a specific purpose and a specific weakness. Learning which tool fits which situation is
          what separates the Hwoarang who gets blown up trying to get in from the one who smoothly
          transitions from neutral into pressure.
        </p>
      </Section>

      <Section title="Approach Tools">
        <p>
          These moves close distance. They're not pokes — they're commitments. You throw them to
          get from range 2-3 into the opponent's face, ideally at plus frames in a stance.
        </p>

        <MoveCard
          character="hwoarang"
          videoId="f,F+4"
          move={{
            input: 'f,f+4',
            hitLevel: ['h'],
            damage: '28',
            startup: 'i18',
            onBlock: '+5',
            onHit: '+8',
            tags: ['Approach', 'Heat Engager', 'Plus on Block', 'High'],
            description: 'Your primary approach tool and heat engager. +5 on block is excellent — you\'re plus and in the opponent\'s face with options. On hit, +8 with the opponent backturned for guaranteed follow-ups. Low crushes from frame 15, so it flies over lows. The catch: it\'s a high. If the opponent reads it and ducks, you eat a full launch. This risk-reward trade-off defines Hwoarang\'s approach game.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="f,F+3"
          move={{
            input: 'f,f+3',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i22',
            onBlock: '+6',
            onHit: '+23a',
            tags: ['Approach', 'Plus on Block', 'Mid', 'Chip Damage'],
            description: 'The safe approach. Mid kick that\'s +6 on block — they literally cannot punish you, and you\'re plus. 9 chip damage on block, so even blocked it costs them health. On hit, +23a for a guaranteed follow-up or transition into your loops. Slower than f,f+4 at i22, so it can be sidestepped or interrupted at long range. But at the right distance, this is your most reliable way in.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="RFF.df+3"
          move={{
            input: 'RFF df+3',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i22',
            onBlock: '+1',
            onHit: '+6',
            tags: ['Approach', 'Homing', 'Heat Engager', 'From RFF'],
            description: 'Homing mid from RFF that\'s also a heat engager. +1 on block means you\'re safe and can contest. Tracks both sides, so the opponent can\'t step it. Low crushes. Heat dash gives +5 and +36a(+26) for big damage. The problem: you need to be in RFF first. But since your loops frequently pass through RFF, this is often available mid-pressure.',
          }}
          showVideo
        />

        <KeyConcept title="f,f+4 vs. f,f+3: The Core Decision" icon="⚖️">
          <p>
            Your approach boils down to this choice:
          </p>
          <ul>
            <li><strong>f,f+4</strong> — High, faster (i18), +5 on block, heat engager. Use when the opponent is standing and respecting. Gets you in fast with a heat engage option.</li>
            <li><strong>f,f+3</strong> — Mid, slower (i22), +6 on block, chip damage. Use when they're ducking or you want zero-risk entry.</li>
          </ul>
          <p>
            Most Hwoarang players default to f,f+4 because the reward is higher and the heat engage
            is valuable. But if the opponent starts ducking it, f,f+3 keeps them honest. The two moves
            together create a high-mid mixup at approach range — before you've even started your
            flamingo pressure.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Pokes and Space Control">
        <p>
          Pokes aren't about big damage. They're about controlling the space between you and the
          opponent — checking their movement, stealing their turn, and creating small openings
          for your approach tools or loops.
        </p>

        <MoveCard
          character="hwoarang"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '10',
            startup: 'i13',
            onBlock: '-1',
            onHit: '+6',
            tags: ['Poke', 'Safe', 'Mid'],
            description: 'Your safest mid poke. i13, -1 on block. Does almost nothing on its own — 10 damage, no transition, no mixup. But it checks the opponent at mid range, beats lows, and is safe enough to throw whenever you need information. After df+1 on hit (+6), you can go into d+3,4 or df+4 to start pressure.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          move={{
            input: 'f+2',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i16',
            onBlock: '-2',
            onHit: '+9 (RFF)',
            tags: ['Poke', 'Safe', 'RFF Transition'],
            description: 'Mid poke that transitions to RFF on hit. At +9 in RFF, you have excellent options — RFF b+2 for plus frames, RFF f+3 into LFS, or d+3,4 to start the core loop. Slower than df+1 at i16 but the transition makes it far more rewarding on hit. Safe at -2 on block.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '14',
            startup: 'i16',
            onBlock: '-12',
            onHit: '-8',
            tags: ['Low Poke', 'RFS Transition'],
            description: 'Low kick that transitions to RFS with F (hold forward). At -12 on block, it\'s punishable by ws+4 class moves but not launch punishable. On normal hit, the transition puts you in RFS at +3. On CH, RFS at +10 — your entire RFS menu is free. Use db+4~F to sneak into RFS from neutral when the opponent is focused on standing threats.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          move={{
            input: 'db+3',
            hitLevel: ['l'],
            damage: '12',
            startup: 'i19',
            onBlock: '-13',
            onHit: '-1',
            onCH: '+17g',
            tags: ['Low Poke', 'High Crush'],
            description: 'Low poke that high crushes. Slower than db+4 at i19 but goes under highs and jabs from frames 6 through 51. On CH, +17g for a guaranteed follow-up. Use this when the opponent is jabbing a lot — it goes under their jab and hits them low. No stance transition, so this is pure chip and harassment.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="The Poke Into Approach Pattern">
          In real matches, you rarely approach raw. The pattern is: <strong>df+1 or f+2 at range 2</strong> to
          check the opponent and establish respect. If they start blocking and waiting, <strong>f,f+4 or f,f+3</strong> to
          close the remaining distance. If they're mashing, <strong>db+4~F or d+3,4</strong> at close range to start
          your loops. Pokes create the space for approaches. Approaches create the range for pressure.
        </TipBox>
      </Section>

      <Section title="Tracking and Homing">
        <p>
          Sidesteps are the opponent's best tool against Hwoarang. Many of your stance moves track
          poorly — especially to the left. These homing and tracking options keep them honest.
        </p>

        <MoveCard
          character="hwoarang"
          move={{
            input: 'df+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i16',
            onBlock: '-8',
            onHit: '+8 (RFF)',
            onCH: '+18a (+9)',
            tags: ['Homing', 'RFF Transition', 'Wall Splat'],
            description: 'Your primary homing mid from LFF. Tracks both directions and transitions to RFF on hit at +8. On CH, wall splats and gives +18a for guaranteed follow-ups. -8 on block is safe. Use this when the opponent starts sidestepping your approach — it catches them and puts you in RFF for pressure.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          move={{
            input: 'd+3+4',
            hitLevel: ['l'],
            damage: '18',
            startup: 'i21',
            onBlock: '-14',
            onHit: '+6 (LFS)',
            tags: ['Homing', 'Low', 'LFS Transition'],
            description: 'Homing low that goes into LFS on hit at +6. Catches sidestepping opponents with a low that transitions into your stance system. At -14 on block it\'s launch punishable, so don\'t overuse it. High crushes from frames 6-54. Best used as a surprise when the opponent is focused on stepping your mids.',
          }}
          showVideo
        />
      </Section>

      <Section title="JFSR: The Keepout Monster">
        <p>
          JFSR — Just Frame Skyrocket — is a move you need to know about now, even if you won't
          master the execution until Chapter 10. Understanding what it does changes how you play neutral.
        </p>

        <MoveCard
          character="hwoarang"
          videoId="f,n,df+4"
          move={{
            input: 'JFSR (f,n,df+4)',
            hitLevel: ['m'],
            damage: '18',
            startup: 'i16',
            onBlock: '-8',
            onHit: 'Launch (Tornado)',
            tags: ['Launcher', 'Safe', 'Just Frame', 'Keepout'],
            description: 'A safe mid launcher. -8 on block, Tornado on hit. i16 with great range. The input is f,n,df+4 — a crouch dash motion into 4. When you can do this consistently, it transforms your neutral game: the opponent can\'t just throw out random moves because JFSR punishes everything from range 2. Available from both LFF and RFF.',
          }}
          showVideo
        />

        <KeyConcept title="Why JFSR Changes Everything" icon="🚀">
          <p>
            Before JFSR, your neutral at range 2-3 is: df+1, b+3 whiff punish, and approach tools.
            After JFSR, you add a <strong>safe mid launcher at i16</strong> that covers the same range
            as b+3 but comes out faster and can't be punished on block.
          </p>
          <p>
            The input is hard — you need to hit a clean crouch dash into 4 with just-frame timing.
            Chapter 10 breaks down the execution. For now, just know it exists. Try it in practice mode.
            If you can land it even 30% of the time, start using it. If not, table it until you've built
            the muscle memory in Chapter 10.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Counter-Hit Fishing">
        <p>
          Sometimes the best way to "get in" isn't closing distance — it's making the opponent
          afraid to press buttons. These moves crush mashers and create huge damage on counter hit.
        </p>

        <MoveCard
          character="hwoarang"
          move={{
            input: 'b+4',
            hitLevel: ['h'],
            damage: '17',
            startup: 'i13',
            onBlock: '-10',
            onHit: '+1 (RFF)',
            onCH: 'Launch',
            tags: ['CH Launcher', 'Fast', 'High'],
            description: 'i13 high that launches on counter hit for a full combo. Transitions to RFF on any hit. On normal hit, +1 in RFF — nothing guaranteed but you\'re in stance. At -10 on block, it\'s the bare minimum of punishable. This is your CH fishing tool from neutral — throw it when you expect the opponent to press a button.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="SS.4"
          move={{
            input: 'SS 4',
            hitLevel: ['l'],
            damage: '18',
            startup: 'i19',
            onBlock: '-13',
            onHit: '+5c (RFF)',
            onCH: 'Launch',
            tags: ['CH Launcher', 'Low', 'Sidestep'],
            description: 'Sidestep into low kick that launches on counter hit. Transitions to RFF on any hit. The sidestep evades linear moves, and the low catches standing opponents. On CH, full launch combo. One of Hwoarang\'s best close-range reads — step their move, launch with the low. At -13, it\'s punishable on block but not launchable.',
          }}
          showVideo
        />

        <Collapsible title="Other CH Tools">
          <ul>
            <li><strong>db+4~F (i16):</strong> Low poke that transitions to RFS. On CH, RFS at +10 — df+4 or f+4 is guaranteed. A safer way to fish for counter hits since it's only -12 on block.</li>
            <li><strong>RFS df+4 (i17):</strong> Already covered in Chapter 2. The mid check from RFS that launches on CH. Use it mid-loop when you read the opponent pressing.</li>
            <li><strong>RFF b+3 (i20):</strong> CH launches from RFF. Slow but covers good range from RFF. Use sparingly as a read when you're in RFF and expect the opponent to press a big button.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Practice: Getting In">
        <ConstraintPlay
          title="Approach Only"
          description="Play 5 rounds using only f,f+4 and f,f+3 to approach. No raw d+3,4 from neutral. No running in with jabs. Approach with one of these two moves, then start your loops."
          allowedMoves={[
            { input: 'f,f+4', purpose: 'High approach — heat engager, +5 on block' },
            { input: 'f,f+3', purpose: 'Mid approach — safe, +6 on block, chip damage' },
            { input: 'df+1', purpose: 'Mid poke at range 1-2 only' },
            { input: 'f+2', purpose: 'Mid poke into RFF at range 1-2 only' },
          ]}
          duration="5 rounds"
          goal="Learn to approach with purpose instead of running forward and hoping."
          whatYouLearn={[
            'The correct range and timing for each approach tool',
            'When to use f,f+4 (high, faster) vs f,f+3 (mid, safer)',
            'How to transition from approach into your loop pressure',
          ]}
        />

        <PracticeBox
          title="Neutral Tools Drill"
          setup="Practice Mode vs. CPU or online. Focus on the approach sequence: poke → approach → loop."
          tasks={[
            { id: 'df1-check', text: 'Use df+1 at range 2 to check the opponent (feel the range)', type: 'counter', target: 10 },
            { id: 'ff4-approach', text: 'f,f+4 approach → start loops on block', type: 'counter', target: 10 },
            { id: 'ff3-approach', text: 'f,f+3 approach → start loops on block', type: 'counter', target: 10 },
            { id: 'df4-track', text: 'df+4 to catch a sidestep → RFF pressure', type: 'counter', target: 5 },
            { id: 'b4-fish', text: 'b+4 to catch opponent pressing buttons → CH launch', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
