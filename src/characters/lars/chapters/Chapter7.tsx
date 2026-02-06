import { Chapter, Section } from '../../../components/guide'
import {
  ComboCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Combos"
      intro="Lars has the best wall carry in the game and some of the most versatile combo routes. Start with the beginner paths, then graduate to optimal damage. Every launcher deserves a combo — don't leave damage on the table."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="The Wall"
    >
      <Section title="Beginner Combos">
        <p>
          These combos are easy to execute and work from most starters. Learn these first — 
          they'll carry you far while you build muscle memory for the harder routes.
        </p>

        <ComboCard
          title="Universal Beginner"
          starter="f,b+2,1 | uf+4 | CH FC df+2 | CH DEN 2"
          route={['f+1,2,3~DEN 1', 'b+3~F SEN 1+2', 'DEN 2 u+4']}
          damage="~62"
          difficulty="beginner"
          notes={['Works from most standing launchers', 'Good wall carry', 'DEN 2 u+4 is the spike ender']}
        />

        <ComboCard
          title="Arc Blast / SEN 3 Starter"
          starter="f+1+2 | SEN 3"
          route={['df+3~D DEN 2', 'f+2,1~SEN 1+2', 'f+2,1~SEN 1']}
          damage="~58"
          difficulty="beginner"
          notes={['Simple route for the two most common launchers', 'SEN 1 ender for heat engager option']}
        />

        <ComboCard
          title="Lightning Screw"
          starter="uf+3"
          route={['ws+2~F SEN 1+2', 'df+1', 'f+2,1~SEN 1']}
          damage="~55"
          difficulty="beginner"
          notes={['uf+3 leaves you in FC so ws+2 is natural', 'Transitions into stance ender']}
        />

        <ComboCard
          title="Shadow Cutter Counter Hit"
          starter="CH db+4"
          route={['FC df+2', 'db+2,1', 'f+2,1~SEN 1+2 T!', 'f+2,1~SEN 3+4']}
          damage="~65"
          difficulty="beginner"
          notes={['db+4 CH leaves you in FC', 'FC df+2 is guaranteed as a frame trap on hit too']}
        />

        <ComboCard
          title="Counter Hit ff+1+2"
          starter="CH ff+1+2"
          route={['db+2,1', 'f+2,1~SEN 1+2', 'f+2,1~SEN 1']}
          damage="~60"
          difficulty="beginner"
          notes={['Fast approach tool CH', 'db+2,1 picks up the float']}
        />

        <ComboCard
          title="While Standing Launcher"
          starter="ws+1 | ff+2"
          route={['uf+3', 'ws+2~F SEN 1+2', 'DEN 2 u+4']}
          damage="~58"
          difficulty="beginner"
          notes={['uf+3 refloats after ws+1', 'Simple and reliable']}
        />

        <ComboCard
          title="ws+3 Stagger Punish"
          starter="ws+3~D"
          route={['LEN 2', 'f+1,2,3~DEN 1~F', 'SEN 1']}
          damage="~60"
          difficulty="beginner"
          notes={['Hold D after ws+3 to enter LEN', 'LEN 2 starts the combo', 'Used against heavily minus lows']}
        />

        <ComboCard
          title="Low Parry"
          starter="Low Parry"
          route={['f+1,2,3~DEN 1', 'b+3~F SEN 1']}
          damage="~45"
          difficulty="beginner"
          notes={['Quick and reliable from low parry', 'Less damage but consistent']}
        />
      </Section>

      <Section title="Intermediate Combos">
        <p>
          Once the beginner routes feel automatic, upgrade to these for more damage and better 
          wall carry.
        </p>

        <ComboCard
          title="Optimal Universal"
          starter="f,b+2,1 | uf+4 | CH FC df+2 | CH DEN 2"
          route={['DEN 2', 'f+1,2,3~DEN 1', 'b+3~F SEN 1+2', 'DEN 2 u+4']}
          damage="~72"
          difficulty="intermediate"
          wallCarry
          notes={['DEN 2 adds damage at the start', 'Maximum wall carry', 'Stance transitions maintain momentum']}
        />

        <ComboCard
          title="Optimal Arc Blast / SEN 3"
          starter="f+1+2 | SEN 3"
          route={['df+3~D DEN 2', 'df+2~SEN 4', '2', 'b+3~F SEN 1+2', 'DEN 2 u+4']}
          damage="~70"
          difficulty="intermediate"
          wallCarry
          notes={['SEN 4 tailspin enables longer route', 'More damage and wall carry than beginner version']}
        />

        <ComboCard
          title="Optimal ws+1"
          starter="ws+1~F"
          route={['SEN 3', 'df+3~D DEN 2', 'df+2~SEN 4', 'db+2~F SEN 1+2', 'DEN 2 u+4']}
          damage="~68"
          difficulty="intermediate"
          wallCarry
          notes={['Hold F on ws+1 to enter SEN', 'SEN 3 starts the juggle', 'Very long wall carry']}
        />

        <ComboCard
          title="Optimal ws+3 Stagger"
          starter="ws+3~D"
          route={['LEN 2', 'fff+1~b', 'ff+4,2~DEN 1', 'df+3~D DEN 2 u+4']}
          damage="~72"
          difficulty="intermediate"
          wallCarry
          notes={['LEN 2 tornado into running juggle', 'fff+1~b cancel for positioning', 'Maximum damage from stagger punish']}
        />

        <ComboCard
          title="DEN 1+2 Tornado"
          starter="DEN 1+2"
          route={['fff+1~b', 'ff+4,2~DEN 1', 'df+3~D DEN 2 u+4']}
          damage="~65"
          difficulty="intermediate"
          notes={['DEN 1+2 is tornado in combos', 'fff+1 running pickup', 'Used as combo extensions']}
        />

        <ComboCard
          title="Running ff+2 (Tornado)"
          starter="ff+2"
          route={['uf+3', 'FC df+2', 'db+2~F SEN 1+2 T!', 'f+2,1~SEN 3+4']}
          damage="~68"
          difficulty="intermediate"
          wallCarry
          notes={['ff+2 is a tornado starter', 'Transitions into SEN enders', 'Good wall carry']}
        />

        <ComboCard
          title="Heat Dash Combo (from any Heat Engager)"
          starter="Heat Dash (3+4, DEN 3, SEN 1, 1,1,1, DEN 1,2)"
          route={['df+3~D DEN 2', 'df+3~D DEN 2', 'f+1,2,3~DEN 1+2 T!', '(wait) f+2,1~SEN 3+4']}
          damage="~75-85"
          difficulty="intermediate"
          wallCarry
          notes={['Maximum damage from heat dash', 'Double df+3 pickup', 'DEN 1+2 tornado extension', 'Wait for timing on final ender']}
        />
      </Section>

      <Section title="Combo Enders">
        <KeyConcept title="Choose Your Ender" icon="🎯">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Goal</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Ender</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>Max Damage</td>
                <td style={{ padding: '8px' }}><code>DEN 2, u+4</code> or <code>fff+2+4</code></td>
                <td style={{ padding: '8px' }}>Spike ender for damage</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Wall Carry</td>
                <td style={{ padding: '8px' }}><code>f+1,2,3</code> or <code>df+3,3</code> or <code>db+2,3</code></td>
                <td style={{ padding: '8px' }}>Long-traveling enders to reach walls</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Wall Break</td>
                <td style={{ padding: '8px' }}><code>f+1+4</code> or <code>1,2</code> or <code>SEN 1</code></td>
                <td style={{ padding: '8px' }}>Break through to next stage</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Floor Break</td>
                <td style={{ padding: '8px' }}><code>f,b+2,1</code> or <code>SEN 3+4</code></td>
                <td style={{ padding: '8px' }}>Break through floor stages</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>
      </Section>

      <Section title="Small Combos & Guaranteed Follow-Ups">
        <KeyConcept title="Mini Combos" icon="💥">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Situation</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Follow-Up</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>ss+2 hit</td>
                <td style={{ padding: '8px' }}><code>ff+2</code> or <code>DEN 3+4</code> (into SEN pressure)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>CH d+2</td>
                <td style={{ padding: '8px' }}><code>d+1+2</code> or <code>f+3 → DEN 3+4</code></td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>CH DEN 3+4~F</td>
                <td style={{ padding: '8px' }}><code>SEN 1</code> (guaranteed)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>df+3 hit</td>
                <td style={{ padding: '8px' }}><code>DEN 1,2</code> (hold D for DEN, heat engager)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>db+1+2 hit</td>
                <td style={{ padding: '8px' }}><code>DEN 1,2</code> (hold D for DEN transition)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>1+2 hit (power crush)</td>
                <td style={{ padding: '8px' }}><code>db+4</code> (guaranteed)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>b+1 CH</td>
                <td style={{ padding: '8px' }}><code>4,4~F+2</code> into SEN (guaranteed knockdown)</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>
      </Section>

      <Section title="Practice: Combo Drill">
        <PracticeBox
          title="Beginner Combo Muscle Memory"
          setup="Set opponent to Stand. Practice each starter."
          tasks={[
            { id: 'combo-1', text: 'Land the universal beginner combo from f,b+2,1 five times', detail: 'f,b+2,1 → f+1,2,3~DEN 1 → b+3~F SEN 1+2 → DEN 2 u+4', type: 'counter', target: 5 },
            { id: 'combo-2', text: 'Land the f+1+2 beginner combo five times', type: 'counter', target: 5 },
            { id: 'combo-3', text: 'Land CH db+4 → FC df+2 combo five times', detail: 'Set opponent to press after hit for CH', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Intermediate Combo Practice"
          setup="Once beginner combos are comfortable."
          tasks={[
            { id: 'combo-int-1', text: 'Upgrade to the optimal universal combo', detail: 'Add DEN 2 at the start for more damage', type: 'toggle' },
            { id: 'combo-int-2', text: 'Practice the heat dash combo from any heat engager', detail: 'This is your biggest damage opportunity', type: 'toggle' },
            { id: 'combo-int-3', text: 'Practice wall combos near the wall', detail: 'See next chapter for wall details', type: 'toggle' },
          ]}
        />

        <TipBox variant="tip" title="Combo Priority">
          Don't try to learn every combo at once. Master the beginner universal route first — 
          it works from almost every starter and does good damage. Only upgrade when you 
          can land the beginner version 10 times in a row without dropping.
        </TipBox>
      </Section>

      <Collapsible title="Combo Starter Quick Reference" icon="📋">
        <div style={{ marginTop: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '6px', color: 'var(--accent)' }}>Starter</th>
                <th style={{ textAlign: 'left', padding: '6px', color: 'var(--accent)' }}>How You Get It</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
              <tr><td style={{ padding: '6px' }}><code>f,b+2,1</code></td><td style={{ padding: '6px' }}>14f punish (your best)</td></tr>
              <tr><td style={{ padding: '6px' }}><code>f+1+2</code></td><td style={{ padding: '6px' }}>15f punish, whiff punish</td></tr>
              <tr><td style={{ padding: '6px' }}><code>uf+4</code></td><td style={{ padding: '6px' }}>Orbital (read a low)</td></tr>
              <tr><td style={{ padding: '6px' }}><code>uf+3</code></td><td style={{ padding: '6px' }}>Lightning screw (risky launcher)</td></tr>
              <tr><td style={{ padding: '6px' }}><code>CH db+4</code></td><td style={{ padding: '6px' }}>Shadow cutter counter-hit</td></tr>
              <tr><td style={{ padding: '6px' }}><code>CH FC df+2</code></td><td style={{ padding: '6px' }}>Crouch mid counter-hit</td></tr>
              <tr><td style={{ padding: '6px' }}><code>CH DEN 2</code></td><td style={{ padding: '6px' }}>Stance mid counter-hit</td></tr>
              <tr><td style={{ padding: '6px' }}><code>CH ff+1+2</code></td><td style={{ padding: '6px' }}>Approach mid counter-hit</td></tr>
              <tr><td style={{ padding: '6px' }}><code>SEN 3</code></td><td style={{ padding: '6px' }}>Stance launcher (risky)</td></tr>
              <tr><td style={{ padding: '6px' }}><code>ws+1</code></td><td style={{ padding: '6px' }}>15f WS launcher</td></tr>
              <tr><td style={{ padding: '6px' }}><code>ws+3~D</code></td><td style={{ padding: '6px' }}>Stagger low punish → LEN</td></tr>
              <tr><td style={{ padding: '6px' }}><code>CH b+2,1</code></td><td style={{ padding: '6px' }}>Delayed string counter-hit</td></tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
