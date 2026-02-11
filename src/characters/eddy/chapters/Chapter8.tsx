import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Heat and Power"
      intro="Heat is Tekken 8's comeback and burst mechanic. For Eddy, it's gasoline on the flywheel. Heat gives you a mid launcher that's plus on block, a chip damage high that's also plus, and — critically — activating heat grants one level of Mandinga for free. The two systems compound."
      hasPrevious={true}
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="The Low Game"
    >
      <Section title="Heat Engagers">
        <p>
          These are the moves that activate heat on hit. You get one heat activation per round,
          so choose your moment. Eddy has several engagers, each serving a different tactical role.
        </p>

        <MoveCard character="eddy"
          videoId="RLX.4,3"
          move={{
            input: 'RLX 4,3',
            hitLevel: ['m', 'm'],
            damage: '14, 25',
            startup: 'i15~16',
            onBlock: '-13',
            onHit: '+16a / HE',
            tags: ['Heat Engager', 'Mid', 'RLX', 'Hit Confirmable'],
            description: 'Your primary heat engager from the RLX 50/50. Hit confirmable — check the first hit before committing to the second. On hit, activates heat AND gives you +16 for a guaranteed follow-up.',
            notes: [
              'Hit confirmable — RLX 4 alone is -8 (safe)',
              'Heat activation on hit = free Mandinga level',
              'Guaranteed crouch throw (d+2+4) after heat activation',
              'This is often how you\'ll activate heat: natural RLX pressure → RLX 4,3 hits → heat mode',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="f+3+4"
          move={{
            input: 'f+3+4',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i24~26',
            onBlock: '-8',
            onHit: '+14a / HE',
            tags: ['Heat Engager', 'Mid', 'Safe', 'Range'],
            description: 'Safe mid heat engager with long range. -8 on block means you\'re safe. Use from midrange when you want to fish for heat activation without risking a punish.',
            notes: [
              '-8 on block — safe',
              'Long range — catches people from distance',
              'Linear — can be sidestepped',
              'Use when you want heat but can\'t risk -13 from RLX 4,3',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="4,4"
          move={{
            input: '4,4',
            hitLevel: ['m', 'h'],
            damage: '12, 20',
            startup: 'i13~14',
            onBlock: '-6',
            onHit: '+14a / HE (on CH)',
            tags: ['Heat Engager', 'Mid-High', 'CH Confirm', 'Safe'],
            description: 'A fast mid-high string. The first hit alone is a solid i13 mid poke. On counter hit, the full string is natural and activates heat. Good for fishing — throw 4 as a poke, confirm into 4,4 on CH.',
            notes: [
              'First hit (4) is a great standalone mid poke',
              'Natural combo on CH only — can be ducked on normal hit',
              'CH 4,4 activates heat and gives follow-up opportunity',
              '-6 on block — safe to throw out',
              'Use in pressure to fish for CH heat activation',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="uf+1,4"
          move={{
            input: 'uf+1,4',
            hitLevel: ['m', 'm'],
            damage: '12, 22',
            startup: 'i14',
            onBlock: '-15',
            onHit: 'KND / HE',
            tags: ['Heat Engager', 'Punisher', 'i14'],
            description: 'Your i14 standing punisher that also activates heat. Primarily used as punishment — the -15 on block means you don\'t throw this raw.',
            notes: [
              'i14 punisher — use for -14 or worse moves',
              'Heat engager — punishment that also activates your install',
              '-15 on block — punishment only',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="b+3+4"
          move={{
            input: 'b+3+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i20~21',
            onBlock: '-10',
            onHit: '+17a / HE',
            tags: ['Heat Engager', 'Power Crush', 'Mid'],
            description: 'Power crush heat engager. Absorbs hits while activating heat. Use when the opponent is pressing into you and you want to armor through their offense and enter heat simultaneously.',
            notes: [
              'Power crush — absorbs mids and highs',
              'Heat engager on hit',
              '-10 on block — punishable but common',
              'Useful as a defensive heat activation',
            ],
          }}
          showVideo
        />

        <KeyConcept title="Choosing Your Moment" icon="⚡">
          <p>
            Don't activate heat randomly. The best heat activations happen when:
          </p>
          <ul>
            <li><strong>You already have Mandinga level 1</strong> — heat adds another level, putting you at 2. Now HSP b+4 knocks down and HSP 3+4 floor breaks.</li>
            <li><strong>You're near the wall</strong> — heat moves are devastating at the wall. H.3+4 into HSP at the wall is terrifying.</li>
            <li><strong>You're winning the round</strong> — heat seals rounds. The chip damage from heat moves plus Mandinga pressure is often too much to survive.</li>
            <li><strong>Naturally from RLX 4,3</strong> — don't force heat. If you're running your RLX 50/50 and 4,3 hits, that's the ideal moment. You built into it.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat-Only Moves">
        <p>
          While in heat, Eddy gains access to two new moves plus his heat smash. These are
          the tools that make heat mode terrifying.
        </p>

        <MoveCard character="eddy"
          videoId="H.3+4"
          move={{
            input: 'H.3+4',
            hitLevel: ['m'],
            damage: '24',
            startup: 'i18~19',
            onBlock: '+9',
            onHit: 'Launch',
            tags: ['Heat', 'Mid', 'Plus on Block', 'Launcher', 'HSP Transition'],
            description: 'The reason Eddy\'s heat is terrifying. A mid launcher that\'s PLUS NINE on block and transitions to HSP. On hit, full combo. On block, you\'re +9 in Handstand — the best possible position. This move is the centerpiece of heat Eddy.',
            notes: [
              '+9 on block into HSP — better than WR 3',
              'Launches on hit for full combo',
              'Transitions to HSP — with Mandinga, you have the full 50/50',
              'With MND level 2: HSP b+4 and HSP 3+4 are at full power',
              'Chip damage on block',
              'Linear — can be sidestepped',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="H.qcf+4"
          move={{
            input: 'H.qcf+4',
            hitLevel: ['h'],
            damage: '24',
            startup: 'i16~17',
            onBlock: '+9',
            onHit: '+18a',
            tags: ['Heat', 'High', 'Plus on Block', 'Chip'],
            description: 'A high that\'s +9 on block with chip damage. Faster than H.3+4 but it\'s a high — duckable. Mix this with H.3+4 to create a standing high/mid mix. They duck the high? Mid launcher. They stand block? +9 either way.',
            notes: [
              '+9 on block with chip — always your turn',
              'High — duckable on read',
              'Faster startup than H.3+4',
              'Mix with H.3+4: they have to guess high or mid',
              'qcf motion: d, df, f+4',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="H.2+3"
          move={{
            input: 'H.2+3 (Heat Smash)',
            hitLevel: ['m'],
            damage: '50',
            startup: 'i20~21',
            onBlock: '-15',
            onHit: 'KND',
            tags: ['Heat Smash', 'Mid', 'Unblockable Cancel'],
            description: 'Eddy\'s heat smash. Massive damage, mid, and ends heat. Use to close out rounds or when the combo damage will kill. The threat of heat smash makes opponents block, which opens up your chip pressure.',
            notes: [
              '50 damage — round ender',
              '-15 on block — launch punishable',
              'Use sparingly — the threat is often more valuable than throwing it',
              'Mix with H.3+4 — both are mids, one is plus, one is death',
            ],
          }}
          showVideo
        />

        <TipBox variant="tip" title="The Heat Flowchart">
          In heat with Mandinga: <code>H.3+4</code> is your primary tool. On block (+9 into HSP),
          you now have the full Mandinga 50/50 — HSP b+4 (+7 mid) or HSP 3+4 (low). On hit, you
          get a full combo. If they start ducking to avoid <code>H.qcf+4</code>, that's when
          <code>H.3+4</code> launches them. And the heat smash exists as a constant threat that
          forces respect. The opponent is in a blender with no good options.
        </TipBox>
      </Section>

      <Section title="Heat + Mandinga Timing">
        <p>
          Heat and Mandinga compound powerfully, but the timing matters.
        </p>

        <KeyConcept title="The Ideal Sequence" icon="🔥">
          <ol>
            <li><strong>Early round:</strong> Play your neutral game, enter stances, land RLX 3,3 → Mandinga level 1</li>
            <li><strong>Mid round:</strong> Land another builder (combo ending <code>db+4,4</code>, another RLX 3,3) → Mandinga level 1 confirmed</li>
            <li><strong>Activate heat:</strong> RLX 4,3 connects naturally during your 50/50 → heat mode + free Mandinga level (now level 2)</li>
            <li><strong>Heat pressure:</strong> H.3+4 (+9 into HSP) → full Mandinga level 2 HSP 50/50 with powered-up moves</li>
          </ol>
          <p style={{ marginTop: '12px' }}>
            This is the dream scenario — but it doesn't have to be perfect. Even heat with Mandinga
            level 1 is extremely strong. Don't hold heat waiting for the "ideal" moment. If RLX 4,3
            hits, take it.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Hoard Heat">
          A common mistake is saving heat for the "perfect moment" and then dying with it unused.
          Heat has a timer — use it or lose it. An early heat activation that gives you wall carry
          or round-winning pressure is better than a "perfectly timed" heat that never happens.
          If <code>RLX 4,3</code> connects, you're in heat. Start the pressure immediately.
        </TipBox>
      </Section>

      <Section title="Heat Burst and Combo Extension">
        <p>
          You can also activate heat mid-combo via heat burst for extra damage. This costs your
          heat activation but extends combos significantly.
        </p>
        <ul>
          <li><strong>After tornado:</strong> End with <code>uf+4</code> into heat burst for extra damage and RLX setup.</li>
          <li><strong>Instant tornado launchers:</strong> For <code>ws+1,3 → RLX 3+4 T!</code> or <code>SS 3+4 → ws+3 T!</code>, activate heat burst after <code>RLX 2,4~D</code> for a longer combo.</li>
        </ul>
        <p>
          <strong>When to heat burst vs. save heat:</strong> If the extra damage kills, burst.
          If you're ahead and want heat pressure for the rest of the round, save it. If you're behind
          and need every point of damage, burst. There's no universal answer — it's a judgment call
          based on the round state.
        </p>
      </Section>

      <Section title="Practice: Heat Mode">
        <PracticeBox
          title="Heat Activation and Pressure"
          setup="Practice Mode. Set dummy to Stand Guard. Activate heat manually or via engager."
          tasks={[
            { id: 'eddy-heat-34', text: 'Use H.3+4 five times on a blocking dummy', detail: 'Activate heat, press 3+4. See the +9 on block. You\'re now in HSP — this is the strongest position in the game.', type: 'counter', target: 5 },
            { id: 'eddy-heat-34-hsp', text: 'H.3+4 (blocked) → HSP b+4 with Mandinga', detail: 'Build Mandinga first (land RLX 3,3), then heat. H.3+4 on block → HSP b+4 for the +7 mid. Feel the pressure stack.', type: 'counter', target: 5 },
            { id: 'eddy-heat-qcf4', text: 'Use H.qcf+4 five times', detail: 'In heat, do qcf+4 (d, df, f+4). See it\'s +9 on block with chip. Mix this with H.3+4.', type: 'counter', target: 5 },
            { id: 'eddy-heat-smash', text: 'Land heat smash (H.2+3) in a combo', detail: 'Launch with df+3, do a short combo, end with H.2+3 for big damage. Feel the weight of the finisher.', type: 'toggle' },
            { id: 'eddy-heat-rlx43', text: 'Activate heat via RLX 4,3 into d+2+4', detail: 'Enter RLX, land RLX 4,3 on hit → d+2+4 guaranteed. This is the natural heat activation path.', type: 'counter', target: 3 },
          ]}
        />
      </Section>

      <Section title="What's Next">
        <p>
          Heat amplifies everything. But the engine runs on one thing above all: lows. Eddy has
          one of the richest low arsenals in the game — <code>f,f+3</code>, <code>d+3</code>,{' '}
          <code>db+3</code>, <code>RLX 3,3</code>, <code>FC df+4</code>, and more. The next
          chapter gives you a decision framework for when to use each one, because throwing
          the wrong low at the wrong time is how Eddy players get punished.
        </p>
      </Section>
    </Chapter>
  )
}
