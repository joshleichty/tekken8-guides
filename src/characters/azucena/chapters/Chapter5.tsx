import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  StanceBox,
  Flowchart,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Back Turn"
      intro="Back Turn isn't a separate gameplan — it's a pressure extension. You enter it from one move (db+3), and its entire purpose is to keep the chain going when Libertador winds down. LIB starts the pressure. BT extends it. Then BT loops back to LIB. The opponent never gets a clean turn."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Counter Hit Queen"
    >
      <Section title="The Entry: db+3">
        <p>
          Back Turn is accessed primarily through <code>db+3</code> — a low poke that transitions to BT
          on hit at +4. That +4 is where the magic happens: your opponent is minus, you're in a new stance,
          and they have to deal with a completely different set of options.
        </p>

        <MoveCard character="azucena"
          move={{
            input: 'db+3',
            hitLevel: ['l'],
            damage: '12',
            startup: 'i16',
            onBlock: '-14',
            onHit: '+4 → BT',
            tags: ['Low', 'BT Entry', 'Pressure Chain'],
            description: 'Your primary low poke and BT entry point. -14 on block is punishable, but on hit you get +4 into Back Turn — setting up the BT pressure game.',
            notes: ['+4 into BT on hit', '-14 on block — punishable by some characters', 'Your main low in close range', 'Also enters BT on block (but you\'re minus)']
          }}
          showVideo
        />

        <StanceBox name="Back Turn (BT)" input="db+3 on hit (or b+3+4 transition)" icon="💃">
          <p>
            Azucena's secondary stance. Entered primarily from db+3 on hit (+4). BT options are focused on
            frame traps and looping back into Libertador for another 50/50 cycle.
          </p>
        </StanceBox>
      </Section>

      <Section title="The Deadly Frame Trap">
        <p>
          Here's the math that makes BT terrifying. After db+3 on hit, you're at +4 in Back Turn. Your
          opponent's fastest option is a 10-frame jab, which comes out at effective frame 6. Your key BT
          weapon:
        </p>

        <MoveCard character="azucena"
          videoId="BT.1+2"
          move={{
            input: 'BT 1+2',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i14',
            onBlock: '-10',
            onHit: '+5',
            onCH: 'Launch',
            tags: ['Frame Trap', 'CH Launcher', 'The BT Weapon'],
            description: 'The reason BT exists. At i14, with your +4 advantage from db+3, this comes out at effective frame 10 — exactly trading with their jab. And when it trades: counter hit. Full combo.',
            notes: ['i14 from +4 = effective frame 10', 'Their jab at +0 = effective frame 10', 'Trade = counter hit for YOU (mid beats high)', 'On counter hit → full combo', '-10 on block — only jab punishable']
          }}
          showVideo
        />

        <KeyConcept title="Why This Trade Always Works" icon="🧮">
          <p>
            When both moves come out on the same frame, priority goes to the <strong>mid</strong>. BT 1+2 is
            a mid. Their jab is a high. In a simultaneous exchange, your mid beats their high for a counter
            hit launch.
          </p>
          <p style={{ marginTop: '12px' }}>
            This means your opponent's FASTEST option (jab) loses to your BT 1+2 after db+3 on hit. They have
            to either block (letting you continue pressure) or use a specific counter like a power crush or
            evasive move. Most players just block — and that's exactly what you want.
          </p>
        </KeyConcept>
      </Section>

      <Section title="BT Options">
        <MoveCard character="azucena"
          videoId="BT.3"
          move={{
            input: 'BT 3',
            hitLevel: ['l'],
            damage: '14',
            startup: 'i16',
            onBlock: '-14',
            onHit: '+4 → LIB',
            tags: ['Low', 'LIB Transition', 'The Loop'],
            description: 'BT\'s low option that transitions BACK to Libertador on hit. This is the loop: LIB → db+3 → BT → BT 3 → LIB again. The pressure cycles endlessly.',
            notes: ['Transitions to LIB on hit at +4', '-14 on block — punishable', 'Creates the LIB ↔ BT loop', 'Each cycle is another guess the opponent must make']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          videoId="BT.3+4"
          move={{
            input: 'BT 3+4',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i20',
            onBlock: '-14',
            onHit: 'Launch',
            tags: ['Evasive Launcher', 'BT Power Move'],
            description: 'An evasive launcher from BT. Ducks under highs during startup and launches on hit. Use when opponents jab or try high attacks to escape BT.',
            notes: ['Evasive — ducks under highs', 'Launches on hit → full combo', '-14 on block — punishable', 'Use on reads against high attacks']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          videoId="BT.2,2"
          move={{
            input: 'BT 2:2',
            hitLevel: ['m', 'm'],
            damage: '15, 22',
            startup: 'i14',
            onBlock: '-8',
            onHit: 'KND',
            tags: ['Safe', 'Knockdown', 'BT Mid'],
            description: 'A safe mid string from BT. -8 on block, knockdown on hit. Your low-risk BT option when you don\'t want to commit to the CH trap.',
            notes: ['-8 on block — safe', 'Knockdown on hit', 'Just-frame timing between hits for extra damage', 'Safe alternative to BT 1+2']
          }}
          showVideo
        />
      </Section>

      <Section title="The Pressure Loop">
        <Flowchart
          title="The LIB ↔ BT Loop"
          nodes={[
            { type: 'start', label: 'Enter LIB (from 1,1, ws+4,1, etc.)' },
            { type: 'decision', label: 'In LIB — what does the opponent do?', branches: [
              { label: 'They stand block → LIB d+4,4 or db+3', action: 'Hellsweep or low poke. db+3 enters BT on hit.' },
              { label: 'They crouch → LIB 4,1 or LIB 2', action: 'Safe mids. Damage and continue.' },
            ]},
            { type: 'decision', label: 'In BT (from db+3 hit at +4)', branches: [
              { label: 'They press buttons → BT 1+2', action: 'Counter hit launch. Full combo.' },
              { label: 'They block → BT 3 (low)', action: 'BT 3 transitions BACK to LIB. Loop restarts.' },
            ]},
            { type: 'end', label: 'Each cycle costs the opponent life and composure.' }
          ]}
        />

        <KeyConcept title="The Unending Chain" icon="🔗">
          <p>
            The beauty of this loop is that it never truly ends. Every hit in the chain leads to another
            stance entry, another guess, another opportunity for damage. The opponent doesn't need to make
            one wrong guess — they need to make the <em>right</em> guess every single time, over and over.
          </p>
          <p style={{ marginTop: '12px' }}>
            Eventually, they'll guess wrong. That's not an "if" — it's a "when." Your job is to keep the
            chain going long enough for the inevitable mistake.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Escaping BT">
        <p>
          Sometimes you enter BT at the wrong time — opponent's turn, bad spacing, they ducked the db+3.
          You need to know your escape routes.
        </p>

        <TipBox variant="tip" title="BT Escape Options">
          <ul>
            <li><strong>Hold back (b)</strong> — Walk out of BT. Safest option when you're minus.</li>
            <li><strong>d/db</strong> — Crouch out of BT. Useful for ducking expected highs.</li>
            <li><strong>BT sidestep</strong> — Step out of pressure. Risky but can create space.</li>
          </ul>
        </TipBox>

        <TipBox variant="warning" title="Know When BT Is Fake">
          If db+3 is <em>blocked</em>, you're in BT at -14. Your opponent gets a free punish. Don't
          press buttons from BT when the entry move was blocked. Hold back to escape, or accept the punish
          and reset. BT pressure only works from a <strong>hit</strong>.
        </TipBox>
      </Section>

      <Section title="Practice: The BT Chain">
        <PracticeBox
          title="BT Pressure Drill"
          setup="Practice Mode. Start at close range, opponent on Stand Guard."
          tasks={[
            { id: 'az-db3-bt', text: 'Land db+3 and enter BT ten times', detail: 'Get comfortable with the low poke and the BT transition.', type: 'counter', target: 10 },
            { id: 'az-bt12', text: 'Do db+3 → BT 1+2 as a frame trap ten times', detail: 'Set opponent to "After Hit: Jab" and watch the counter hit launch.', type: 'counter', target: 10 },
            { id: 'az-bt3-loop', text: 'Do db+3 → BT 3 → LIB → LIB 4,1 five times', detail: 'The full loop. Low into BT, BT low into LIB, LIB mid. Feel the chain.', type: 'counter', target: 5 },
            { id: 'az-bt-full', text: 'Do 1,1 → LIB → db+3 → BT 1+2 three times', detail: 'The complete chain: punish → LIB → low → BT frame trap.', type: 'counter', target: 3 },
          ]}
        />
      </Section>

      <Section title="What's Next">
        <p>
          You now understand both stances and how they form a pressure loop. But what happens when the
          opponent doesn't sit still? When they mash buttons, try to interrupt, or panic? That's where
          Azucena's <strong>counter hits</strong> come in — and she has more significant CH tools than
          almost any character in the game.
        </p>
      </Section>
    </Chapter>
  )
}
