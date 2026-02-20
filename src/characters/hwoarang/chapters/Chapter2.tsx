import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, Flowchart, PracticeBox, MatchScenario, DrillMode } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="The First Loop"
      intro="Every Hwoarang player's journey starts with the same move: d+3,4. This low-high string transitions you into Right Flamingo at plus frames. What you do from there — and how you loop back — is the engine that drives the entire character."
      hasPrevious
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="The Infinite Machine"
    >
      <Section title="The Cornerstone">
        <p>
          d+3,4 is a low-high string that transitions into Right Flamingo Stance (RFS). On block, you're
          +8 to +10 in RFS. On hit, you're +14 to +16. On counter hit, you're +19 to +21. These numbers
          mean that after this move connects or is blocked, <strong>almost nothing the opponent does can
          interrupt your next move</strong>.
        </p>

        <MoveCard
          character="hwoarang"
          move={{
            input: 'd+3,4',
            hitLevel: ['l', 'h'],
            damage: '7, 13',
            startup: 'i17',
            onBlock: '+8g~+10g',
            onHit: '+14g~+16g',
            onCH: '+19~+21',
            tags: ['Low-High', 'Key Move', 'Stance Transition'],
            description: 'The move that defines Hwoarang. Low kick transitions into a high kick that puts you in RFS with massive plus frames. The low is only 7 damage but the real value is the position — you enter RFS where all your pressure options live. Comes from LFF, RFF, and LFS (not RFS).',
          }}
          showVideo
        />

        <KeyConcept title="Why This Move Is Everything" icon="🔑">
          <p>
            d+3,4 is not a big damage move. It's a <strong>position move</strong>. The 7-damage low is just the
            price of admission. What you're really buying is: RFS at +8 minimum on block, with the opponent forced
            to guess what you do next. And you have excellent options.
          </p>
          <p>
            The second hit is a high. This means the opponent <em>can</em> duck it and launch you. This is the
            built-in risk. But if they duck and you see it, you have mid options from RFS that punish them.
            This tension — will the second hit connect, or will they duck? — is what makes everything else work.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Available From Three Stances">
          You can do d+3,4 from LFF (default stance), RFF, and LFS. The only stance where you <em>can't</em> do
          it is RFS (because you're already there). This means no matter where you are in the stance cycle, d+3,4
          is almost always available. The RFF version does 3 extra damage and tracks slightly better.
        </TipBox>
      </Section>

      <Section title="The RFS Menu">
        <p>
          You've landed d+3,4. You're in RFS at +8 or better. Now what? You have a menu of options, each
          designed to beat a specific defensive choice. This is not random button pressing — it's reading
          what your opponent wants to do and picking the tool that punishes it.
        </p>

        <MoveCard
          character="hwoarang"
          videoId="RFS.f+4"
          move={{
            input: 'RFS f+4',
            hitLevel: ['h', 'h'],
            damage: '8, 8',
            startup: 'i8',
            onBlock: '+0',
            onHit: '+2',
            onCH: '+5',
            tags: ['High-High', 'Fastest Option', 'i8'],
            description: 'Your fastest move in RFS — 8 frames. Nobody can interrupt this after d+3,4 on block. Jails on first block. Keeps you in RFS so you can continue pressure. On CH the second hit gives +6, which means another RFS f+4 is uninterruptible. In heat, RFS f+4,4 becomes a natural-hit launcher.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="RFS.2"
          move={{
            input: 'RFS 2',
            hitLevel: ['h'],
            damage: '6',
            startup: 'i13',
            onBlock: '+5',
            onHit: '+7',
            tags: ['High', 'Plus on Block', 'Transition'],
            description: 'The jab that resets the loop. +5 on block, transitions to RFF. From RFF you can do another d+3,4, use RFF f+3 into LFS, or check with RFF b+2. This is how you keep the pressure going — d+3,4 into RFS 2 puts you right back in position to loop.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="RFS.df+4"
          move={{
            input: 'RFS df+4',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i17',
            onBlock: '+1',
            onHit: '+8c',
            onCH: 'Launch',
            tags: ['Mid', 'Plus on Block', 'CH Launcher'],
            description: 'Your mid check from RFS. +1 on block means you maintain pressure. On hit +8 with forced crouch — df+4 or df+2 is guaranteed to beat any response. On counter hit, full launch. Use this when the opponent starts ducking d+3,4\'s second hit.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="RFS.4,3"
          move={{
            input: 'RFS 4,3',
            hitLevel: ['m', 'm'],
            damage: '17, 21',
            startup: 'i14',
            onBlock: '+4',
            onHit: '+25a (+16)',
            tags: ['Mid-Mid', 'Safe', 'Wall Splat', 'S2'],
            description: 'Season 2 staple. Safe mid-mid string that\'s +4 on block and transitions to LFS. On CH the first hit combos into the second for a wall splat. Low crushes, so it beats d+1 attempts. At the wall, this is devastating.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="RFS.d+4,3"
          move={{
            input: 'RFS d+4,3',
            hitLevel: ['l', 'h'],
            damage: '15, 12',
            startup: 'i20',
            onBlock: '-9',
            onHit: '-1',
            tags: ['Low-High', 'Hell Sweep'],
            description: 'The hell sweep. The low that makes your mids work. On its own the reward is modest, but in heat the third hit (RFS d+4,3,4) becomes a natural combo for a full knockdown. Without heat, only do two hits — the third can be ducked on normal hit. The threat of this low is what forces the opponent to stand and respect your mids.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="RFS.3~4"
          move={{
            input: 'RFS 3~4',
            hitLevel: ['m', 'm'],
            damage: '11, 21',
            startup: 'i16',
            onBlock: '-3',
            onHit: '+26a (+16)',
            tags: ['Mid-Mid', 'Low Crush', 'Wall Splat'],
            description: 'Flying Eagle. Mid-mid that low crushes. Beats d+1 mashing attempts. The just-frame blue spark version (press 3 for exactly 1 frame, then 4) is +1 on block instead of -3 and does more damage. Safe enough to use regularly, and devastating on hit.',
          }}
          showVideo
        />
      </Section>

      <Section title="The d+3,4 Decision Tree">
        <p>
          This flowchart shows your decision-making after d+3,4 connects on block. You're in RFS at +8.
          The opponent has to choose how to respond, and you pick the option that beats their choice.
        </p>

        <Flowchart
          title="d+3,4 on Block → RFS Options"
          nodes={[
            { type: 'start', label: 'd+3,4 blocked → You are in RFS at +8~+10' },
            { type: 'decision', label: 'What does the opponent do?', branches: [
              { label: 'They press buttons (jab, d+1)', action: 'RFS f+4 (i8, uninterruptible) or RFS 4,3 (mid-mid, low crushes d+1)' },
              { label: 'They stand block', action: 'RFS d+4,3 (hell sweep) or d+3,4 again to re-enter the loop' },
              { label: 'They duck (reading the high)', action: 'RFS df+4 (mid, CH launcher) or RFS 3~4 (mid-mid, low crushes)' },
              { label: 'They sidestep', action: 'RFS f+3 (homing mid) or wait and whiff punish' },
            ]},
            { type: 'end', label: 'After any RFS option: transition back to RFF or LFS → loop continues' },
          ]}
        />

        <MatchScenario
          title="RFS at +8: Opponent Mashing"
          situation="You've landed d+3,4 on block. You're in RFS at +8. The opponent has been jabbing to try to interrupt your flamingo pressure."
          options={[
            {
              action: 'RFS f+4',
              result: 'Correct. At i8, this beats everything the opponent can press. They\'re at +8 disadvantage and your move is 8 frames — they literally cannot press a button faster than this. Keeps you in RFS to continue.',
              isOptimal: true,
              followup: 'If they stop pressing, switch to RFS 2 for plus frames or RFS df+4 for a mid check.',
            },
            {
              action: 'RFS 2',
              result: 'Works here but risky. At i13 you\'re coming out at frame 5 total — still beats a jab (i10 - 8 = frame 2 advantage). But it\'s a high, so if they duck-jab instead of standing jab, you get launched.',
            },
            {
              action: 'RFS df+4',
              result: 'Mid, so it beats ducking. But at i17, your effective speed is frame 9. Their jab comes out at frame 2. You lose the trade. Save this for when they stop mashing.',
            },
            {
              action: 'RFS d+4,3',
              result: 'Way too slow. The hell sweep is i20 — your opponent\'s jab hits you on frame 2. Only use this when they\'re standing still and blocking.',
            },
          ]}
          keyTakeaway="Against a mashing opponent, RFS f+4 is your guaranteed answer. It's literally the fastest move in the game from this position. Once they respect it and stop pressing, your slower but more rewarding options open up."
        />
      </Section>

      <Section title="The Basic Loop">
        <p>
          Now that you know the RFS menu, here's the simplest possible loop. This is your bread and butter —
          the sequence you should be able to do in your sleep before moving to Chapter 3.
        </p>

        <KeyConcept title="d+3,4 → RFS 2 → d+3,4 → RFS 2 → ..." icon="🔄">
          <p>
            That's it. d+3,4 puts you in RFS. RFS 2 puts you in RFF. From RFF, d+3,4 puts you back in RFS.
            RFS 2 puts you back in RFF. This loop continues forever. Each d+3,4 is a +8 minimum on block.
            Each RFS 2 is +5 on block. You're permanently plus.
          </p>
          <p>
            The opponent can escape by ducking d+3,4's second hit (it's a high) or by sidestepping. But if
            they don't know to do that — and at most levels, they won't — you have a genuine infinite pressure
            sequence.
          </p>
          <p>
            When you see them start to respect the loop (standing and blocking), that's when you mix in
            RFS d+4,3 (hell sweep) or switch to RFS df+4 (mid CH launcher). The loop creates the respect.
            The mixups cash in on it.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Get Greedy">
          The loop works because your opponent is forced to guess. But every time you enter flamingo, you can't
          block. If the opponent makes a hard read — a rage art, a power crush, a well-timed duck-launch — you
          eat full damage. Run the loop two or three times. If the opponent is holding it, great — run the mixups.
          If they're adapting, back off and reset to neutral. The best Hwoarang players know when to stop.
        </TipBox>
      </Section>

      <Section title="Practice: The First Loop">
        <DrillMode
          title="d+3,4 Loop Muscle Memory"
          objective="Build the muscle memory for Hwoarang's fundamental loop. Start simple and add layers."
          steps={[
            {
              instruction: 'Transition Only',
              detail: 'Do d+3,4 from LFF. Just feel the transition into RFS. Don\'t press anything after.',
              targetReps: 10,
            },
            {
              instruction: 'Add RFS 2',
              detail: 'd+3,4 → RFS 2. You should end up in RFF. Repeat: d+3,4 → RFS 2 from RFF.',
              targetReps: 10,
            },
            {
              instruction: 'Full Loop',
              detail: 'd+3,4 → RFS 2 → d+3,4 → RFS 2. Keep the loop going for as long as you can without dropping it.',
              targetReps: 10,
            },
            {
              instruction: 'Mix In Options',
              detail: 'Run the loop but randomly substitute RFS f+4, RFS df+4, or RFS d+4,3 instead of RFS 2. Get comfortable choosing different options from RFS.',
              targetReps: 10,
            },
          ]}
        />

        <PracticeBox
          title="d+3,4 Confirmation Drill"
          setup="Practice Mode. Set dummy to Random Guard."
          tasks={[
            { id: 'loop-basic', text: 'd+3,4 → RFS 2 → d+3,4 (keep the loop going for 3 cycles)', type: 'counter', target: 5 },
            { id: 'rfs-f4', text: 'd+3,4 → RFS f+4 (practice the i8 option)', type: 'counter', target: 10 },
            { id: 'rfs-df4', text: 'd+3,4 → RFS df+4 (mid check)', type: 'counter', target: 10 },
            { id: 'rfs-sweep', text: 'd+3,4 → RFS d+4,3 (hell sweep)', type: 'counter', target: 10 },
            { id: 'rfs-43', text: 'd+3,4 → RFS 4,3 (safe mid-mid)', type: 'counter', target: 10 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
