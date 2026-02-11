import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  Flowchart,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="The Two Stances"
      intro="Most guides teach Handstand and Relax as separate chapters. That's a mistake. These stances flow into each other constantly — moves from HSP transition to RLX, moves from RLX transition to HSP, and you can switch between them with a tap of up or down. They're one system. Learn them that way."
      hasPrevious={true}
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Mandinga"
    >
      <Section title="Handstand (HSP)">
        <p>
          Entered via <code>f+1+2</code> manually, or from WR 3, <code>3,3</code>, <code>1,2~F</code>,
          and many other moves. Eddy is inverted — hands on the ground, legs in the air.
        </p>
        <p>
          <strong>Critical rule: you cannot block in Handstand.</strong> If you're in HSP and the opponent
          attacks with a mid or high, you eat it. You can only act or transition out. HSP does have an
          auto low parry when you have Mandinga (covered next chapter), but without it, you're fully
          committed.
        </p>
        <p>
          This is why plus frames matter so much. You enter HSP at +8 after WR 3, or +8 after
          CH <code>3,3</code>. At those advantages, your moves come out before theirs. But if you're
          negative in HSP, you're in serious danger.
        </p>

        <h3>Core HSP Options</h3>

        <MoveCard character="eddy"
          videoId="HSP.4"
          move={{
            input: 'HSP 4',
            hitLevel: ['m'],
            damage: '10',
            startup: 'i12~13',
            onBlock: '-1',
            onHit: '+10',
            onCH: '+31a',
            tags: ['Mid', 'Fast', 'CH Launcher', 'HSP Transition'],
            description: 'Your fastest HSP option. A quick mid that stays in Handstand. On counter hit, launches for a full combo. At +8 from WR 3, this beats every button the opponent can press.',
            notes: [
              'i12 — fastest mid from HSP',
              '-1 on block — nearly neutral, still your turn in HSP',
              '+10 on hit → HSP 4,2 follow-up becomes very real',
              'CH → HSP 4,2 tornado combo',
              'Use HSP 4,2~3 for a safe chip option (+4 on block)',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="HSP.1"
          move={{
            input: 'HSP 1',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i23~25',
            onBlock: '+6',
            onHit: '+8c',
            onCH: '+19d',
            tags: ['Mid', 'Plus on Block', 'RLX Transition', 'Chip'],
            description: 'The sledgehammer. A mid elbow that transitions to RLX with chip damage on block and massive plus frames. On hit or block, it\'s always your turn. On CH, it splats for guaranteed follow-up damage.',
            notes: [
              '+6 on block into RLX with chip — always your turn',
              '+8 on hit into RLX — 50/50 is fully enforced',
              'CH splat for guaranteed follow-up',
              'Slow at i23 — use when you have frame advantage',
              'This is how you flow from HSP → RLX',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="HSP.1+2"
          move={{
            input: 'HSP 1+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i22~23',
            onBlock: '-12',
            onHit: '+14c',
            tags: ['Mid', 'Power Crush'],
            description: 'HSP power crush. Use when the opponent is pressing buttons against your Handstand. -12 on block, but absorbs hits.',
            notes: [
              'Power crush 7~21 — absorbs mids and highs',
              '-12 on block — light punish',
              'Use when they try to challenge your HSP with fast mids',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="HSP.1+3"
          move={{
            input: 'HSP 1+3',
            hitLevel: ['h'],
            damage: '26',
            startup: 'i23~24',
            onBlock: '',
            onHit: '+6',
            tags: ['Throw', 'Unbreakable', 'RLX Transition'],
            description: 'Unbreakable throw from Handstand that wall splats and transitions to RLX at +6. Cannot be broken — the only defense is to duck it.',
            notes: [
              'Unbreakable — must be ducked',
              'Wall splats for a full combo',
              '+6 in RLX on hit — 50/50 continues',
              'High — ducking gives opponent a full punish',
            ],
          }}
          showVideo
        />

        <KeyConcept title="The HSP Decision Tree" icon="🤸">
          <p>At +8 in Handstand (after WR 3 on block):</p>
          <ul>
            <li><strong>They press buttons</strong> → HSP 4 counter hits them (combo on CH)</li>
            <li><strong>They block and wait</strong> → HSP 1 for +6 RLX or HSP throw for unbreakable grab</li>
            <li><strong>They duck the throw</strong> → HSP 4 or HSP 1+2 hits them mid</li>
            <li><strong>They sidestep</strong> → The real weakness. Most HSP options are linear.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Without Mandinga, HSP has no threatening low. The throw is high (duckable), and everything
            else is mid. This means the opponent can <em>stand block everything</em> except the throw.
            HSP becomes truly dangerous in Chapter 5 when Mandinga unlocks a low and a plus-on-block mid.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Relax (RLX)">
        <p>
          Entered via <code>d+3+4</code> manually, or from <code>f,f+3</code> on hit, HSP 1,
          and many other transitions. Eddy sits low to the ground.
        </p>
        <p>
          <strong>You CAN block in Relax.</strong> Hold back and you'll guard mids and lows normally.
          Highs whiff naturally because you're so low. This makes RLX much safer to be in than HSP — if
          you're unsure what to do, you can just block.
        </p>

        <h3>The Core 50/50</h3>

        <p>
          This is the heart of Eddy's damage. From RLX with plus frames, the opponent has to guess:
        </p>

        <MoveCard character="eddy"
          videoId="RLX.3,3"
          move={{
            input: 'RLX 3,3',
            hitLevel: ['l', 'h'],
            damage: '12, 30',
            startup: 'i16~17',
            onBlock: '-13',
            onHit: '+12a (+3) / +7a (+6)',
            tags: ['Low', 'Hell Sweep', 'Mandinga Builder', 'Clean Hit'],
            description: 'Eddy\'s hell sweep. On clean hit, the second hit is guaranteed for 42 damage and sends them flying. Also builds one stack of Mandinga. The low side of your 50/50.',
            notes: [
              'Must be CLEAN HIT (point blank) for second hit to be guaranteed',
              'At tip range, first hit connects but second can be blocked',
              'Builds 1 Mandinga stack on hit',
              '-13 on block — you eat a punish',
              'Jails from first hit — can\'t duck the second if first connects',
              '-3 on hit when gaining Mandinga level',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="RLX.4,3"
          move={{
            input: 'RLX 4,3',
            hitLevel: ['m', 'm'],
            damage: '14, 25',
            startup: 'i15~16',
            onBlock: '-13',
            onHit: '+16a / HE',
            tags: ['Mid', 'Heat Engager', 'Hit Confirmable'],
            description: 'The mid side of the RLX 50/50. A hit-confirmable mid-mid heat engager that wall splats. On hit, activates heat. On block, -13 — same risk as the hell sweep.',
            notes: [
              'Hit confirmable — you can block-check the first hit before committing',
              'Heat Engager — activates heat on hit',
              'Wall splats for devastating damage',
              '-13 on block if you commit to both hits',
              'First hit alone (RLX 4) is -8 on block — safe to just poke with',
            ],
          }}
          showVideo
        />

        <TipBox variant="tip" title="The Clean Hit Problem">
          <code>RLX 3,3</code> has a clean hit requirement. At point blank — after <code>f,f+3</code>{' '}
          on hit, for example — the second hit is guaranteed. But from tip range, the opponent can
          block the second hit after eating the first. If you're far from the opponent in RLX, either
          close the gap first with RLX forward movement, or use a different low like <code>RLX 1</code>.
        </TipBox>

        <h3>Other RLX Options</h3>

        <MoveCard character="eddy"
          videoId="RLX.1+2"
          move={{
            input: 'RLX 1+2',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i18~19',
            onBlock: '-8',
            onHit: '+25a (+20)',
            tags: ['Mid', 'Safe', 'Shoulder', 'Wall Splat'],
            description: 'A safe mid shoulder charge from RLX that wall splats and can\'t be parried. Use this when you want mid damage without risking the -13 of RLX 4,3.',
            notes: [
              '-8 on block — safe alternative to RLX 4,3',
              'Shoulder — can\'t be parried by Asuka/Jun',
              'Wall splats for a full combo',
              'Chip damage on block',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="RLX.3+4"
          move={{
            input: 'RLX 3+4',
            hitLevel: ['m'],
            damage: '24',
            startup: 'i17~18',
            onBlock: '-18',
            onHit: '+29a (+19)',
            tags: ['Mid', 'Launcher', 'Tornado'],
            description: 'The RLX launcher. Massive risk at -18 on block, but gives a tornado on hit for a full combo. Use on hard reads or when the opponent is conditioned to duck.',
            notes: [
              'Tornado on hit — full combo',
              '-18 on block — launch punishable',
              'Use sparingly, only on hard reads',
              'Best when opponent is conditioned to block low',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="RLX.2"
          move={{
            input: 'RLX 2',
            hitLevel: ['m'],
            damage: '16',
            startup: 'i18~19',
            onBlock: '-2',
            onHit: '+8',
            tags: ['Mid', 'Safe', 'Combo Tool'],
            description: 'A safe mid poke from RLX. -2 on block with the extension RLX 2,4~D going back to RLX at +3 on block. Primarily used in combos but also a low-risk mid check.',
            notes: [
              '-2 on block — very safe',
              'RLX 2,4 extension: combo from first hit, RLX 2,4~D returns to RLX',
              '+8 on hit — can follow up with more pressure',
              'Primary combo filler tool',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="Flowing Between Stances">
        <p>
          The stances connect in both directions. Here are the main transitions:
        </p>

        <h3>HSP → RLX</h3>
        <ul>
          <li><strong>HSP 1</strong> — The primary bridge. +6 on block, +8 on hit, deposits you in RLX.</li>
          <li><strong>HSP 3,3,3</strong> — Low-profiling string that ends in RLX. Tornado on the third hit.</li>
          <li><strong>HSP n,d</strong> — Manual transition. Just tap down to switch stance.</li>
        </ul>

        <h3>RLX → HSP</h3>
        <ul>
          <li><strong>RLX n,d</strong> — Manual transition. Tap up to switch to Handstand.</li>
          <li>Several RLX strings end in standing or crouching, from which you can re-enter HSP.</li>
        </ul>

        <h3>Standing → HSP</h3>
        <ul>
          <li><strong><code>f+1+2</code></strong> or <strong><code>b+1+2</code></strong> — Manual entry</li>
          <li><strong>WR 3</strong> — +8 on block approach</li>
          <li><strong><code>1,2~F</code></strong> — Jab into HSP transition</li>
          <li><strong><code>3,3</code></strong> — Mid-mid into HSP at -3 (block) or +8 (CH hit)</li>
        </ul>

        <h3>Standing → RLX</h3>
        <ul>
          <li><strong><code>d+3+4</code></strong> — Manual entry</li>
          <li><strong><code>f,f+3</code></strong> — +6 on hit approach low</li>
          <li><strong><code>d+2,3</code></strong> — Mid string that transitions on hit/CH</li>
        </ul>

        <Flowchart
          title="The Stance Flow"
          nodes={[
            { type: 'start', label: 'Standing / Neutral' },
            { type: 'decision', label: 'How do you enter?', branches: [
              { label: 'WR 3 / 3,3 / 1,2~F', action: 'Enter HSP' },
              { label: 'f,f+3 / FC df+3', action: 'Enter RLX' },
            ]},
            { type: 'decision', label: 'In HSP — what\'s the read?', branches: [
              { label: 'They press', action: 'HSP 4 (CH combo)' },
              { label: 'They wait', action: 'HSP 1 → RLX (+6)' },
            ]},
            { type: 'decision', label: 'In RLX — the 50/50', branches: [
              { label: 'Go low', action: 'RLX 3,3 (hell sweep + Mandinga)' },
              { label: 'Go mid', action: 'RLX 4,3 (heat engager)' },
            ]},
            { type: 'end', label: 'Damage → Reset or Continue Pressure' },
          ]}
        />
      </Section>

      <Section title="Practice: The Complete Flow">
        <PracticeBox
          title="Stance Transitions"
          setup="Practice Mode. Set dummy to Stand Guard. Start close."
          tasks={[
            { id: 'eddy-wr3-hsp1-rlx', text: 'WR 3 → HSP 1 → notice you\'re in RLX', detail: 'This is the primary flow: approach into HSP, transition to RLX. Both moves are plus on block.', type: 'counter', target: 5 },
            { id: 'eddy-wr3-hsp4', text: 'WR 3 → HSP 4 → HSP 4,2', detail: 'The frame trap option. At +8, HSP 4 beats everything. Full string on hit gives tornado.', type: 'counter', target: 5 },
            { id: 'eddy-ff3-rlx33', text: 'f,f+3 → RLX 3,3 (hit dummy, not guard)', detail: 'Set dummy to no action. f,f+3 on hit → RLX 3,3 clean hit. Feel the hell sweep connect.', type: 'counter', target: 5 },
            { id: 'eddy-ff3-rlx43', text: 'f,f+3 → RLX 4,3 (on hit)', detail: 'The mid side. f,f+3 on hit → RLX 4,3. Notice the heat engager activation.', type: 'counter', target: 5 },
            { id: 'eddy-full-chain', text: 'Chain: WR 3 → HSP 1 → (in RLX) 3,3', detail: 'The full flywheel: approach → HSP → RLX → hell sweep. This is Eddy\'s core loop.', type: 'counter', target: 3 },
          ]}
        />

        <TipBox variant="tip" title="Don't Memorize, Flow">
          If you're thinking "now I press HSP 1, now I press RLX 3,3" — you're memorizing a sequence.
          Instead, think in terms of <strong>situations</strong>. "I'm plus in HSP — do they press
          or block?" If they block, HSP 1 into RLX. "I'm plus in RLX — low or mid?" That decision
          framework is what translates to real matches. The specific buttons become muscle memory.
        </TipBox>
      </Section>

      <Section title="What's Next">
        <p>
          You know the stances. You know the 50/50. But if you've been paying attention, you
          noticed that <code>RLX 3,3</code> does something besides deal damage — it builds
          Mandinga. And <code>HSP 2,3</code> and <code>db+4,4</code> do the same thing. Next
          chapter reveals what you've been building toward this whole time: the install mechanic
          that makes Eddy's Handstand truly terrifying.
        </p>
      </Section>
    </Chapter>
  )
}
