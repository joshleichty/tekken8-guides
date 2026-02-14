import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  DecisionGrid,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="Controlling the Floor"
      intro="Before Lili can lock opponents behind plus frames or force guesses from backturn, she needs to win the space between them. This chapter teaches the neutral tools that control distance, build small advantages, and create the openings that the rest of your game exploits."
      hasPrevious
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="The Plus Frame Lock"
    >
      <Section title="The Mid Poke: df+1">
        <p>
          Every character has a fast mid poke. Lili's is exceptional. At 13 frames, <code>df+1</code>{' '}
          is your main way to check the opponent in neutral — fast enough to interrupt most things,
          safe enough to throw out repeatedly, and at -1 on block you can sidestep almost anything
          the opponent tries in retaliation.
        </p>

        <MoveCard character="lili"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '10',
            startup: 'i13',
            onBlock: '-1',
            onHit: '+8',
            tags: ['Mid', 'Safe', 'Plus on Hit'],
            description: 'Your bread-and-butter mid check. Fast, safe, and +8 on hit — which means after landing this, your f+4 becomes a frame trap that counter hit launches mashers. At -1 on block, Lili can freely sidestep, making her "disadvantage" irrelevant against linear retaliation.',
            notes: [
              'Tracks well to Lili\'s left (opponent\'s right)',
              '+8 on hit — same frame trap as 1,2 on hit',
              '-1 on block allows free sidestep to either side',
              'Use after qcf+3+4 on block to enforce your plus frames',
            ],
          }}
          showVideo
        />

        <p>
          The magic of <code>df+1</code> isn't the move itself — it's what it enables. At -1, your
          sidestep effectively turns "their turn" into "nobody's turn." And at +8 on hit, your
          counter hit launchers become frame traps. <code>df+1</code> on hit into <code>f+4</code>{' '}
          catches anyone who presses a button.
        </p>
      </Section>

      <Section title="The Keepout Mid: f+4">
        <p>
          Lili has legs that reach half the stage. <code>f+4</code> is the move that makes opponents
          afraid to approach. It's long, it's safe, and on counter hit it launches for a full combo.
        </p>

        <MoveCard character="lili"
          move={{
            input: 'f+4',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i17',
            onBlock: '-9',
            onHit: '+7',
            onCH: 'Launch',
            tags: ['Mid', 'Safe', 'CH Launcher', 'Keepout'],
            description: 'Lili\'s signature keepout tool. The range on this kick is absurd — it hits from distances where most characters have nothing. Safe on block with pushback, and counter hit launches for a full combo. Use this to punish approaches, close out rounds, and fish after plus frames.',
            notes: [
              'Counter hit launches — pickup with qcf+3 or approach for combo',
              'Pushback on block makes punishment difficult even at -9',
              'Wall crush on hit (+19) — excellent near walls',
              'Best used as a frame trap after +8 tools (1,2 on hit, df+1 on hit, df+3 on hit)',
            ],
          }}
          showVideo
        />

        <KeyConcept title="The +8 Frame Trap" icon="🔑">
          <p>
            Lili has multiple moves that leave her at +8 on hit: <code>1,2</code>, <code>df+1</code>,
            <code> df+3</code>, <code>f,f+4~B</code>, and more. After any of these land, <code>f+4</code>{' '}
            (i17) becomes a frame trap — if the opponent presses anything slower than i9, they eat
            a counter hit launch. Since almost no character has an i9 mid, this is essentially
            guaranteed to either hit clean or counter hit launch anyone who doesn't block.
          </p>
          <p style={{ marginTop: '12px' }}>
            This pattern — plus-frame poke into <code>f+4</code> — is one of Lili's most reliable
            damage sources. Learn to recognize when you're +8 and pull the trigger.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Tracking Mid: df+4">
        <p>
          Lili's biggest weakness is linearity. <code>df+4</code> patches that hole at close range.
          It's a 13-frame mid that tracks to her right — the side her <code>df+1</code> doesn't
          cover. Together, they form a poke pair that catches movement in both directions.
        </p>

        <MoveCard character="lili"
          move={{
            input: 'df+4',
            hitLevel: ['m'],
            damage: '12',
            startup: 'i13~14',
            onBlock: '-8',
            onHit: '-2',
            onCH: '+5',
            tags: ['Mid', 'Tracking'],
            description: 'A 13-frame tracking mid that catches sidesteps to Lili\'s right. The low extension df+4,4 is natural on hit and forces a mind game — finish or don\'t. On counter hit, the extension is guaranteed even with a delay, allowing you to confirm it on reaction.',
            notes: [
              'Tracks to Lili\'s right — covers the side df+1 misses',
              'df+4,4 extension: natural on hit, -13 on block (low)',
              'Counter hit df+4: extension guaranteed even on full delay — visual confirm',
              'Use after plus frames (qcf+3+4, df+3) to catch steppers',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="The Long-Range Low: d+3">
        <p>
          Lows in Tekken force the opponent to stop blocking standing. <code>d+3</code> does this
          from a distance most lows can't reach, and it tracks well enough to catch movement on
          both sides.
        </p>

        <MoveCard character="lili"
          videoId="d+3"
          move={{
            input: 'd+3',
            hitLevel: ['l'],
            damage: '14',
            startup: 'i19~20',
            onBlock: '-12',
            onHit: '+1',
            onCH: '+5c',
            tags: ['Low', 'Tracking', 'Range'],
            description: 'One of the longest-range lows in Tekken. Lili slides forward as she kicks, closing distance and chipping the opponent down. It tracks well to both sides — a rarity in her kit. Use this relentlessly to force the opponent to respect your lows, then punish their crouch with mids.',
            notes: [
              'Excellent range — hits from mid-range where opponents don\'t expect lows',
              'Tracks well to both sides, unlike most of Lili\'s kit',
              'On counter hit (+5c), opponent is crouching — 1+2 frame traps',
              'Only +1 on hit, so don\'t overcommit afterward — step or poke',
              '-12 on block — risky but the range makes it hard to punish consistently',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="The Counter Hit Fisher: b+1">
        <p>
          <code>b+1</code> is where Lili's neutral game connects to her stance game. On its own,
          it's a 17-frame safe mid that doesn't look impressive. But hold forward, and it transitions
          into Dew Glide — suddenly it's 0 on block and +8 on hit, with the entire Dew Glide
          moveset at your fingertips.
        </p>

        <MoveCard character="lili"
          videoId="b+1"
          move={{
            input: 'b+1~F',
            hitLevel: ['m'],
            damage: '16',
            startup: 'i17',
            onBlock: '0 (with DEW)',
            onHit: '+8 (with DEW)',
            onCH: '+14 (with DEW)',
            tags: ['Mid', 'Safe', 'Stance Transition', 'CH Launcher'],
            description: 'A mid poke that transitions into Dew Glide by holding forward. On hit, guarantees DEW 2,1 for a heat engager. On counter hit, guarantees DEW 2,1 or DEW 3+4 for enormous damage. On block, you\'re neutral with all of Dew Glide\'s options available — or cancel the stance with u into a sidestep for safety.',
            notes: [
              'Without DEW transition: -8 on block, +2 on hit',
              'With DEW transition: 0 on block, +8 on hit',
              'On CH with DEW: DEW 2,1 (heat engager) guaranteed',
              'Cancel DEW with u to sidestep — creates a safe fishing tool',
              'b+1,4 extension: -11 on block, natural combo, wall splats from far',
            ],
          }}
          showVideo
        />

        <TipBox variant="tip" title="The b+1 Loop">
          Experienced Lili players use <code>b+1~F</code> as a rhythm tool. Poke with it,
          cancel Dew Glide with <code>u</code> into a sidestep, then poke again. You're
          fishing for a counter hit while staying safe. The opponent sees the Dew Glide transition
          and doesn't know if you'll commit to a stance move or cancel. When they finally press
          a button to interrupt, that's when you get your counter hit — and the combo that follows.
        </TipBox>
      </Section>

      <Section title="The Homing Mid: f+3">
        <p>
          When opponents start stepping your linear tools, <code>f+3</code> stops them cold.
          It's homing, safe at -3 on block, and on counter hit guarantees a <code>qcf+3</code>{' '}
          on the ground for big damage.
        </p>

        <MoveCard character="lili"
          move={{
            input: 'f+3',
            hitLevel: ['m'],
            damage: '26',
            startup: 'i20~22',
            onBlock: '-3',
            onHit: '+17a (+8)',
            onCH: 'KND, free qcf+3',
            tags: ['Mid', 'Homing', 'Safe'],
            description: 'Lili\'s main homing mid. Slower than her other tools but safe and devastatingly chunky when it lands. Use this after df+3 on block when opponents try to sidewalk your follow-ups, or raw in neutral to catch movement. On counter hit, qcf+3 on the ground is guaranteed.',
            notes: [
              'Homing — catches sidestep and sidewalk in both directions',
              'Safe at -3 on block — you can step or poke after',
              'Excellent at the wall — chunky damage with limited risk',
              'Range is shorter than f+4 — gauge your distance carefully',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="Putting It Together">
        <DecisionGrid
          title="Your Neutral Toolkit"
          description="Each tool answers a different question. Knowing which one to pull is the skill."
          rows={[
            { situation: 'Need a quick check', response: 'df+1', reason: 'Fastest mid (i13), +8 on hit, -1 allows sidestep', risk: 'Linear — can be stepped to your left' },
            { situation: 'Opponent approaching', response: 'f+4', reason: 'Long range, safe, CH launches', risk: 'Slow (i17), loses to fast interrupts at close range' },
            { situation: 'Opponent stepping', response: 'df+4 or f+3', reason: 'df+4 tracks right (i13), f+3 homing (i20)', risk: 'df+4 is -8, f+3 is slow with short range' },
            { situation: 'Want to chip/condition', response: 'd+3', reason: 'Long-range low, tracks both sides', risk: '-12 on block, only +1 on hit' },
            { situation: 'Want stance pressure', response: 'b+1~F', reason: 'Neutral on block in DEW, +8 on hit, CH confirms', risk: 'Linear, i17 speed' },
            { situation: 'After +8 (1,2/df+1 on hit)', response: 'f+4', reason: 'Becomes a true frame trap — CH launches anyone pressing', risk: 'Opponent can block and wait, but then you\'re plus again' },
          ]}
        />

        <PracticeBox
          title="Neutral Rhythm Drill"
          setup="Practice Mode. Lili vs any opponent. Set dummy to Guard All, then Second Action: Random (between approach and stand)."
          tasks={[
            { id: 'lili-neutral-df1-step', text: 'Land df+1 then sidestep three times', detail: 'After df+1 on block (-1), tap u to step. Feel how "minus one" means nothing when you can step freely.', type: 'counter', target: 3 },
            { id: 'lili-neutral-f4-keepout', text: 'Whiff punish with f+4 from max range five times', detail: 'Back away and let the dummy whiff something, then press f+4. Marvel at the range of this kick.', type: 'counter', target: 5 },
            { id: 'lili-neutral-frametrap', text: 'Land 1,2 on hit then f+4 three times', detail: 'Set dummy to "After Hit: 2nd Action" and record them pressing a jab. After 1,2 hits (+8), press f+4. Watch the counter hit launch.', type: 'counter', target: 3 },
            { id: 'lili-neutral-b1-cancel', text: 'Do b+1~F then cancel DEW with u five times', detail: 'Press b+1, hold f to enter Dew Glide, then tap u to sidestep out. This is the "safe fishing" pattern. Get the muscle memory.', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
