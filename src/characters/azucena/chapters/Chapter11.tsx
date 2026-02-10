import { Chapter, Section } from '../../../components/guide'
import {
  KeyConcept,
  TipBox,
  DecisionGrid,
  Flowchart,
  Collapsible,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="The Complete Azucena"
      intro="Every piece is in place. Approach, poke, punish, stance, counter hit, combo, neutral, heat, defense — eleven chapters of tools and concepts. This final chapter weaves them into a complete gameplan and teaches the advanced connections that separate good Azucena players from great ones."
      onPrevious={() => goToChapter(10)}
      hasNext={false}
    >
      <Section title="Frame Traps">
        <p>
          A frame trap is when you do two moves in sequence where the gap between them is small enough that
          if the opponent tries to press a button, they get counter hit. Azucena has excellent frame traps
          because so many of her moves leave her plus.
        </p>

        <DecisionGrid
          title="Azucena's Key Frame Traps"
          description="Each trap works because the gap between your moves is smaller than their fastest option."
          rows={[
            { situation: 'db+3 hit (+4 BT)', response: 'BT 1+2 (i14)', reason: 'Effective i10 — trades with their jab as CH', risk: '-10 if they just block' },
            { situation: 'd+1 blocked (+4)', response: 'ws+1 (i13)', reason: 'Effective i9 — beats jabs for CH launch', risk: '-8 if they block' },
            { situation: '1,1 hit → LIB (+8)', response: 'LIB 2 (i16)', reason: 'Effective i8 — beats everything', risk: '-9 if they block' },
            { situation: 'ws+4,1 hit → LIB (+5)', response: 'LIB 1 (i8)', reason: 'Effective i3 — unbeatable', risk: 'High, can be ducked' },
            { situation: 'WR 3,2 blocked (+2)', response: '1+2 (i15)', reason: 'Effective i13 — high crush beats jabs', risk: 'High, -8 if blocked' },
            { situation: 'df+1,4 hit (+7)', response: 'd+1 (i20)', reason: 'Effective i13 — plus even if blocked', risk: 'Slow, can be stepped' },
            { situation: 'LIB d+3 blocked (+2 FC)', response: 'FC df+4 (i16)', reason: 'Re-enters LIB for another cycle', risk: 'Can be interrupted by fast moves' },
          ]}
        />
      </Section>

      <Section title="Knowledge Checks">
        <p>
          These are things your opponent needs to know about Azucena. If they don't know them, you get
          free damage. If they do know them, you need to adjust.
        </p>

        <KeyConcept title="What Opponents Should Know (But Often Don't)" icon="📚">
          <ul>
            <li><strong>df+1,4 second hit is a high</strong> — They can duck and launch after blocking the first hit. But it jails, so they can't duck between hits. They CAN duck the extensions (,1 and ,1~2).</li>
            <li><strong>f+4,4 second hit is duckable</strong> — If they block the first hit, they can duck the second for a full launch punish. Mix with f+4 by itself or f+4 into stance cancel.</li>
            <li><strong>LIB d+4,4 is launch punishable</strong> — -26 on block. Any character can launch this. Don't overuse the hellsweep.</li>
            <li><strong>db+3 is -14</strong> — Punishable by many characters. Don't spam it.</li>
            <li><strong>1,1 on block doesn't give real LIB</strong> — At -1, the opponent can jab out of everything. LIB is only real from 1,1 on <em>hit</em>.</li>
            <li><strong>SSL beats a lot</strong> — Many of Azucena's key moves are linear. Opponents who step left consistently will frustrate you.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Reading the Opponent's Knowledge">
          In the first round, test what they know. Do df+1,4,1 — do they duck? Do f+4,4 — do they duck the
          second hit? Do 1,1 on block → LIB — do they jab? If they don't know these things, exploit them
          aggressively. If they do, respect the knowledge and adapt.
        </TipBox>
      </Section>

      <Section title="The Wall Game">
        <p>
          Azucena is dangerous at the wall. Her plus-frame pressure becomes suffocating when the opponent
          can't back away.
        </p>

        <KeyConcept title="Wall Pressure Tools" icon="🧱">
          <ul>
            <li><strong>WR 3,2</strong> — Still plus at the wall. Pushes them deeper into the corner.</li>
            <li><strong>df+1,4</strong> — All five layers work even better at the wall. The CH trap becomes scarier because wall splats extend combos.</li>
            <li><strong>db+3</strong> — The low into BT. At the wall, BT 1+2 CH can wall splat for extra damage.</li>
            <li><strong>b+2</strong> — Homing mid. In heat, b+2~F gives plus frames for wall pressure. Great for catching sidesteps at the wall.</li>
            <li><strong>Throws</strong> — At the wall, command grabs are devastating. uf+1+2 wall splats for extra combos.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Okizeme (After Knockdown)">
        <p>
          After knocking the opponent down, you get to pressure their wakeup. Azucena's oki is about
          maintaining the momentum that got you the knockdown in the first place.
        </p>

        <KeyConcept title="Oki Options" icon="⬇️">
          <ul>
            <li><strong>Dash forward → WR 3,2</strong> — If they stay on the ground or getup kick, this catches them. If they tech roll, you're at +2 for more pressure.</li>
            <li><strong>d+1</strong> — Catches some getup options and is +4 on block even if they block on wakeup.</li>
            <li><strong>Shimmy → df+2</strong> — If they getup kick, you can step back and launch their whiff.</li>
            <li><strong>LIB d+3</strong> — If you're near them and in LIB (from a stance combo ender), this catches grounded opponents and is plus on block.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Complete Gameplan">
        <Flowchart
          title="Azucena's Complete Flow"
          nodes={[
            { type: 'start', label: 'Round Start: Dash forward, establish range' },
            { type: 'decision', label: 'At range 2: How do you get in?', branches: [
              { label: 'f,f,f+3,2 (approach)', action: '+2 on block → start poking. KND on hit → oki pressure.' },
              { label: 'uf+3+4 (hop approach)', action: '-4 on block (safe). +4 into LIB on hit.' },
            ]},
            { type: 'decision', label: 'At range 0-1: How do you pressure?', branches: [
              { label: 'df+1,4 (backbone poke)', action: 'Five layers of response based on opponent habits.' },
              { label: '1,1 or d+2,3', action: 'Quick checks that feed into LIB on hit.' },
              { label: 'db+3 / db+4 (low)', action: 'Condition them to block low → mids become free.' },
            ]},
            { type: 'decision', label: 'In LIB: What\'s the read?', branches: [
              { label: 'They stand → LIB d+4,4', action: 'Hellsweep launch. Full combo.' },
              { label: 'They crouch → LIB 4,1', action: 'Safe mid knockdown. Continue pressure.' },
              { label: 'They press buttons → LIB 1+2', action: 'Counter hit launch.' },
            ]},
            { type: 'end', label: 'Every outcome feeds back into pressure. The loop never ends.' }
          ]}
        />
      </Section>

      <Section title="Where to Go From Here">
        <KeyConcept title="Continued Growth" icon="📈">
          <p>
            This guide gives you the foundation. From here, your growth comes from:
          </p>
          <ul>
            <li><strong>Match experience</strong> — Reading opponents gets better with reps. Play ranked.</li>
            <li><strong>Matchup knowledge</strong> — Learn what's punishable from each character you face.</li>
            <li><strong>Optimization</strong> — Max damage combos, optimal wall routes, heat combo extensions.</li>
            <li><strong>Conditioning</strong> — The meta-game of teaching your opponent to expect one thing, then doing another.</li>
          </ul>
        </KeyConcept>

        <Collapsible title="Useful Resources" icon="🔗">
          <div style={{ padding: '12px', color: 'var(--text-secondary)' }}>
            <ul>
              <li><strong>TekkenDocs</strong> — Frame data reference for Azucena and every character. Use it to learn what's punishable in each matchup.</li>
              <li><strong>Applay's Cheat Sheet</strong> — Quick reference for recommended moves, punishment, and combos.</li>
              <li><strong>Tekken Discord</strong> — Character-specific channels with active communities.</li>
              <li><strong>Practice Mode</strong> — Your best teacher. Record the situations you lose to and drill solutions.</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="The Final Word">
        <KeyConcept title="The Perfect Blend" icon="☕">
          <p>
            Azucena is called "The Perfect Blend" for a reason. She blends simplicity with depth, pressure
            with reads, stances with fundamentals. She doesn't need complex execution or deep flowcharts.
            She needs you to <strong>pay attention to your opponent</strong> and make simple, correct
            decisions over and over.
          </p>
          <p style={{ marginTop: '12px' }}>
            Approach. Pressure. Punish. The machine doesn't need to be complicated. It just needs to
            never stop.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Go Play">
          Close the guide. Open ranked. Dash forward. WR 3,2. You know what to do next.
        </TipBox>
      </Section>
    </Chapter>
  )
}
