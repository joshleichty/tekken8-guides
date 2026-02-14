import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  Flowchart,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Dew Glide & Feisty Rabbit"
      intro="Lili's stances aren't the sprawling webs you see on characters like Hwoarang or Yoshimitsu. They're focused tools — Dew Glide for approaching and pressuring, Feisty Rabbit for cashing out. This chapter goes deep on both, teaching when to enter each stance, what to do once you're there, and crucially — when to cancel and reset."
      hasPrevious
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Making Them Pay"
    >
      <Section title="Dew Glide: The Approach Engine">
        <p>
          Dew Glide (<code>qcf</code>) is Lili's crouching dash. It goes under highs during the
          animation, gives access to her best pressure tools, and transitions seamlessly from several
          key moves. You've already met <code>qcf+3+4</code> — now it's time to learn the full
          stance.
        </p>

        <KeyConcept title="How to Enter Dew Glide" icon="🌊">
          <ul>
            <li><strong>Manual:</strong> <code>d, df, f</code> — standard quarter-circle forward</li>
            <li><strong>b+1~F:</strong> Hold forward after b+1 — your main stance transition poke</li>
            <li><strong>b+2,1~F:</strong> Hold forward after the string — safe on block with stance access</li>
            <li><strong>f,f+3~F:</strong> Hold forward after the running mid</li>
            <li><strong>3,2~F:</strong> Hold forward after the string — guaranteed DEW 2,1 on hit</li>
            <li><strong>u+3,3~F:</strong> Hold forward after the double kick — combo use only</li>
          </ul>
          <p style={{ marginTop: '8px' }}>
            <strong>Cancel Dew Glide</strong> by tapping <code>u</code> — this turns the stance into
            a sidestep. This is the foundation of safe fishing: enter stance, cancel, sidestep, repeat.
            You can also hold <code>d, DF</code> to transition into full crouch for while-standing moves.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Dew Glide Moves You Need">
        <p>
          You already know <code>DEW 3+4</code> from Chapter 1 (+6 on block). Here are the rest
          of Dew Glide's arsenal and when each earns its spot.
        </p>

        <MoveCard character="lili"
          videoId="DEW.2,1"
          move={{
            input: 'DEW 2,1',
            hitLevel: ['m', 'm'],
            damage: '13, 20',
            startup: 'i14, i22~23',
            onBlock: '-13',
            onHit: '+17d',
            tags: ['Mid', 'Heat Engager', 'Homing', 'Spike'],
            description: 'Homing mid-mid heat engager from Dew Glide. Guaranteed after b+1~F on counter hit or 3,2~F on normal hit. In heat, this launches for enormous damage. Non-hit-confirmable — you commit to both hits. Use this when you read the opponent stepping your DEW 3+4 or ducking under it.',
            notes: [
              'Homing — catches steps in both directions',
              'Guaranteed after CH b+1~F and NH 3,2~F',
              'In heat: launches for full combo — massive damage',
              '-13 on block — you eat a punish if they stand and block',
              'Non-confirmable — commit to both hits or don\'t start',
            ],
          }}
          showVideo
        />

        <MoveCard character="lili"
          videoId="DEW.3"
          move={{
            input: 'DEW 3',
            hitLevel: ['m'],
            damage: '28',
            startup: 'i17~18',
            onBlock: '-11',
            onHit: '+20a (+3)',
            tags: ['Mid', 'Tornado', 'Oki Tool'],
            description: 'Lili\'s one-hit tornado move. Essential for combos and doubles as an oki tool because it hits grounded. Safe-ish on block at -11 (eats jabs, not launchers). In neutral, this is a chunky mid that kills your momentum on block but hits like a truck when it lands.',
            notes: [
              'Tornado move — powers her combo damage',
              'Hits grounded — use after knockdowns for oki pressure',
              '-11 on block — jab punish only, momentum killer',
              'In combos: main tornado filler for maximum damage',
              'After f+3+4 spike: guaranteed on most wakeup options',
            ],
          }}
          showVideo
        />

        <MoveCard character="lili"
          videoId="DEW.1,4"
          move={{
            input: 'DEW 1,4',
            hitLevel: ['m', 'm'],
            damage: '12, 26',
            startup: 'i15~16, i25~31',
            onBlock: '-9',
            onHit: '+2a (-7)',
            tags: ['Mid', 'Safe', 'Chip Damage'],
            description: 'A safe mid-mid string from Dew Glide. The second hit does chip damage on block and becomes massively plus in heat (+7~+13). In Season 2, this is one of Lili\'s key chip tools — use it after heavy plus frames where the opponent can\'t step, then watch them melt.',
            notes: [
              'Safe at -9 on block — no punish',
              'Chip damage on block, enhanced in heat',
              'In heat: +7~+13 on block — massive frame advantage',
              'Counter hit on first hit confirms the extension',
              'Low crush on second hit — goes over downjabs',
            ],
          }}
          showVideo
        />

        <MoveCard character="lili"
          videoId="DEW.1+2"
          move={{
            input: 'DEW 1+2',
            hitLevel: ['m'],
            damage: '28',
            startup: 'i16~17',
            onBlock: '-11',
            onHit: '+17g',
            tags: ['Mid', 'Power Crush', 'Wall Splat'],
            description: 'Power crush from Dew Glide. Wall splats, and at -11 on block, throws are not guaranteed (most throws are i12+). Best used at the wall where the wall splat converts into combo damage. Also strong from Dew Glide transitions on block to make opponents respect your stance.',
            notes: [
              'Power crush 6~15 — beats mids and highs',
              'Wall splat for combo damage',
              '-11 on block — throws not guaranteed (unique among power crushes)',
              'Forces opponent crouch on hit — opponent recovers crouching',
              'Best at the wall where wall splat converts to big damage',
            ],
          }}
          showVideo
        />

        <MoveCard character="lili"
          videoId="DEW.2"
          move={{
            input: 'DEW 2',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i14',
            onBlock: '-9',
            onHit: '+0',
            tags: ['Mid', 'Homing', 'Tracking'],
            description: 'A 14-frame homing mid from Dew Glide. The fastest homing option in stance. Use this as a quick check when you suspect the opponent will try to step your Dew Glide pressure. Not much reward on its own, but it keeps them honest.',
          }}
          showVideo
        />
      </Section>

      <Section title="Season 2: The Slide from Dew Glide">
        <p>
          The single biggest change to Lili's Dew Glide in Season 2 is that <code>FC df+3</code> —
          the Horizon Slide — can now be performed from Dew Glide as <code>DEW df+3</code>. This
          gives her a low option from stance that she never had before, fundamentally changing what
          the opponent has to respect.
        </p>

        <KeyConcept title="Why This Changes Everything" icon="🔄">
          <p>
            Before Season 2, every Dew Glide option was a mid or a high. The opponent could stand-block
            through all of it. Now, ducking into <code>DEW df+3</code> punishes anyone who tries to
            stand-block your stance. Combined with <code>DEW df+4</code> (the ss+4 equivalent from
            stance, also new in Season 2), Dew Glide has evolved from "plus frame starter" into a
            complete pressure system with high crush, counter hit launchers, and a low threat.
          </p>
        </KeyConcept>

        <p>
          Additionally, Lili's <code>b+1~F</code> is now -2 on block instead of 0 (Season 2 nerf).
          This sounds bad, but it actually baits opponents into pressing — which is exactly when the
          slide and <code>DEW df+4</code> counter hit launch them. The nerf became a buff in disguise.
        </p>
      </Section>

      <Section title="The Dew Glide Cancel Game">
        <Flowchart
          title="Dew Glide Decision Tree"
          nodes={[
            { type: 'start', label: 'You entered Dew Glide' },
            { type: 'decision', label: 'What\'s the opponent doing?', branches: [
              { label: 'Blocking/frozen', action: 'DEW 3+4 (plus frames) or DEW df+3 (slide low)' },
              { label: 'Stepping', action: 'DEW 2,1 (homing heat engager) or DEW 2 (quick homing mid)' },
              { label: 'Pressing/jabbing', action: 'DEW df+4 (high crush CH launch) or DEW df+3 (high crush slide)' },
              { label: 'You\'re unsure', action: 'Cancel with u → sidestep → reassess' },
            ]},
            { type: 'end', label: 'After DEW 3+4 on block (+6): restart your pressure loop' },
          ]}
        />

        <TipBox variant="tip" title="The b+1 Loop Revisited">
          From Chapter 2, you learned to poke with <code>b+1~F</code>, cancel with <code>u</code>,
          and repeat. Now add depth: sometimes commit to <code>DEW 3+4</code> for plus frames.
          Sometimes throw the slide. Sometimes do <code>DEW 2,1</code> for a heat engager. The cancel
          is what makes this safe — but the threat of committing is what makes the opponent freeze.
          The mix between canceling and committing is the real stance game.
        </TipBox>
      </Section>

      <Section title="Feisty Rabbit: The Cash-Out">
        <p>
          Feisty Rabbit (<code>b+3</code> into background, <code>b+4</code> into foreground) is
          Lili's jumping stance. Outside of heat, it's primarily a movement tool and a way to access
          her heat engager. In heat, it becomes one of the most terrifying 50/50s in the game.
        </p>

        <MoveCard character="lili"
          videoId="b+3"
          move={{
            input: 'b+3 or b+4',
            hitLevel: ['—'],
            damage: '—',
            startup: '—',
            onBlock: '—',
            onHit: '—',
            tags: ['Stance', 'Movement', 'Heat Recovery'],
            description: 'Enter Feisty Rabbit. b+3 jumps into the background, b+4 into the foreground. Can be done from neutral, from backturn, or from Dew Glide. Hold the input to double jump and recover heat bar. Press F during the jump to transition to Dew Glide for additional mind games.',
            notes: [
              'b+3: jump into background | b+4: jump into foreground',
              'Hold b+3 or b+4: double jump, recovers heat bar',
              'Press F during jump: transition to Dew Glide',
              'Can be interrupted by fast moves — condition the opponent first',
              'From backturn: access FYR options after BT transitions',
            ],
          }}
          showVideo
        />

        <MoveCard character="lili"
          videoId="RAB.2"
          move={{
            input: 'FYR 2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i20~21',
            onBlock: '-9',
            onHit: '+13d',
            tags: ['Mid', 'Heat Engager', 'Safe'],
            description: 'Safe mid heat engager from Feisty Rabbit. Outside of heat, this is your main reason to enter the stance — a safe way to activate heat from a tricky angle. In heat, this becomes a heat dash launcher for massive combo damage. The 50/50 partner to FYR 3.',
            notes: [
              'Safe at -9 on block',
              'Heat engager — heat dash +5 into full combo',
              'In heat: launches for enormous damage',
              'Mix with FYR 3 (low) for the heat 50/50',
              '24 damage in heat (powered up)',
            ],
          }}
          showVideo
        />

        <MoveCard character="lili"
          videoId="RAB.3"
          move={{
            input: 'FYR 3',
            hitLevel: ['l'],
            damage: '20',
            startup: 'i20~21',
            onBlock: '-13',
            onHit: '+3c',
            onCH: 'Launch (Instant Tornado)',
            tags: ['Low', 'Homing', 'Heat Powered'],
            description: 'Homing low from Feisty Rabbit. Counter hit launches with instant tornado for a full combo. In heat, this knocks down on normal hit with a guaranteed qcf+3 follow-up on the ground. This is the low side of Lili\'s deadliest 50/50.',
            notes: [
              'Homing — catches steps in both directions',
              'CH: instant tornado launcher',
              'In heat: KND on normal hit, qcf+3 guaranteed on ground',
              'High crush from frame 6 — evades jabs and standing highs',
              'Mix with FYR 2 (mid) for the heat 50/50',
            ],
          }}
          showVideo
        />

        <MoveCard character="lili"
          videoId="RAB.4"
          move={{
            input: 'FYR 4',
            hitLevel: ['m'],
            damage: '24',
            startup: 'i23~29',
            onBlock: '-2~+4',
            onHit: '+4a (-5)',
            tags: ['Mid', 'Safe', 'Chip Damage', 'Heat Powered'],
            description: 'A safe mid from Feisty Rabbit that does chip damage on block. In heat, becomes +7~+13 on block — the same massive advantage as ff+3+4 in heat. Use this when you want to chip and maintain pressure without committing to the 50/50.',
            notes: [
              'Safe on block, chip damage',
              'In heat: +7~+13 on block — enormous frame advantage',
              'Low crush during animation',
              'Slower than FYR 2 and FYR 3 — can be interrupted',
              'Use to chip opponents who turtle in heat',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="Using Feisty Rabbit Outside of Heat">
        <p>
          Without heat, Feisty Rabbit is primarily a movement and fishing tool. High-level Lili
          players use it to:
        </p>
        <ul>
          <li><strong>Bait reactions:</strong> Jump with <code>b+3</code> or <code>b+4</code>, transition to Dew Glide with F, then cancel with u — the opponent sees the jump animation and often presses into nothing.</li>
          <li><strong>Change low timing:</strong> Cancel into Dew Glide, then do <code>d+3</code> or <code>d+1,2</code> — the jump changes the rhythm of your lows, making them harder to react to.</li>
          <li><strong>Fish for heat engager:</strong> <code>FYR 2</code> is safe at -9 and activates heat from an angle opponents don't expect.</li>
          <li><strong>Counter hit with FYR 3:</strong> The low is homing and CH launches — if the opponent mashes, they eat a full combo.</li>
        </ul>

        <TipBox variant="warning" title="Feisty Rabbit Is Interruptible">
          Lili can be hit out of Feisty Rabbit during the jump. If you enter the stance raw against
          a fast-pressing opponent, you'll eat a float combo. Always condition the opponent with your
          plus frames, backturn pressure, or knockdowns before jumping. The stance works because
          they're afraid to press — not because it's safe.
        </TipBox>
      </Section>

      <Section title="Practice: Stance Mastery">
        <PracticeBox
          title="Dew Glide and Feisty Rabbit Drills"
          setup="Practice Mode. Lili vs any opponent. Set dummy to Guard All."
          tasks={[
            { id: 'lili-dew-cancel', text: 'Do b+1~F into cancel (u) into sidestep ten times', detail: 'Press b+1, hold forward to enter Dew Glide, tap u to sidestep, hold back to block. Get this rhythm automatic — it\'s your safe fishing pattern.', type: 'counter', target: 10 },
            { id: 'lili-dew-commit', text: 'From b+1~F, do DEW 3+4 five times and DEW df+3 five times', detail: 'Alternate between committing to the plus frame tool and the slide. These are your two main "I\'m committing" options from stance.', type: 'counter', target: 10 },
            { id: 'lili-dew-21-confirm', text: 'Set dummy to Counter Hit. Land b+1~F into DEW 2,1 three times', detail: 'On counter hit, DEW 2,1 is guaranteed. In heat, this launches. Get comfortable with the timing of committing to the heat engager after a CH b+1.', type: 'counter', target: 3 },
            { id: 'lili-fyr-mix', text: 'Enter Feisty Rabbit and do FYR 2 three times, then FYR 3 three times', detail: 'Press b+3 or b+4, then press 2 (mid) or 3 (low). Feel the difference in timing and animation. This is the 50/50 you\'ll use in heat.', type: 'counter', target: 6 },
            { id: 'lili-fyr-dew-cancel', text: 'Enter Feisty Rabbit, hold F into Dew Glide, then cancel with u — five times', detail: 'b+3 or b+4, hold F, tap u, hold back. This is the advanced movement pattern — jump, stance, cancel. It looks flashy and baits reactions.', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
