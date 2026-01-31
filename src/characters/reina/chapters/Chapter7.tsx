import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  PracticeBox,
  ComboCard,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Combos"
      intro="Reina has explosive combo damage. This chapter gives you routes for every launcher—from beginner-friendly to optimized. Learn one, then add more."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Punishment"
    >
      <Section title="Your First Combo">
        <p>
          Start here. This works from most launchers and doesn't require execution.
        </p>

        <ComboCard
          title="Beginner Universal"
          starter="df+2, uf+4, FC df+4, etc."
          route={['f,f+2~F', 'SEN 3', 'df+2', 'df+1', 'f+2,3~F', 'SEN 2 T!', 'uf+3+4,1+2']}
          damage="~65"
          difficulty="beginner"
          notes={[
            'Works from most standing launchers',
            'SEN 3 is guaranteed after f,f+2',
            'Good wall carry'
          ]}
        />

        <TipBox variant="tip" title="Get This Consistent First">
          Don't worry about optimized combos until you can land this 10 times in a row. 
          Consistency beats damage every time.
        </TipBox>
      </Section>

      <Section title="From EWGF (Electric)">
        <p>
          If you can do electrics, here are your routes:
        </p>

        <ComboCard
          title="Electric Combo"
          starter="EWGF (f,n,d,df+2)"
          route={['f,f+2~F', 'SEN 3', 'df+2', 'df+1', 'f+2,3~F', 'SEN 2 T!', 'uf+3+4,1+2']}
          damage="~72"
          difficulty="intermediate"
          notes={[
            'Same combo as beginner but more damage from electric starter',
            'Electric gives better scaling'
          ]}
        />

        <ComboCard
          title="Electric Optimized"
          starter="EWGF (f,n,d,df+2)"
          route={['f,f+2~F', 'SEN 3', 'df+2', 'df+1', 'f+2,3~F', 'SEN 1,qcf+2']}
          damage="~74"
          difficulty="advanced"
          notes={[
            'Replaces SEN 2 ender with SEN 1,qcf+2',
            'qcf+2 just-frame for +5 damage',
            'Slightly less wall carry'
          ]}
        />
      </Section>

      <Section title="From b+4 / Counter Hits">
        <p>
          These launchers give tornado directly, so combo structure is different.
        </p>

        <ComboCard
          title="Tornado Starter Combo"
          starter="b+4 T!, CH (3),4, CH f,n,d,df+3"
          route={['f,f+3+4', 'df+2', 'df+1', 'f+2,3~F', 'SEN 1,qcf+2']}
          damage="~65-70"
          difficulty="beginner"
          notes={[
            'b+4 already gives tornado',
            'Works from any tornado starter'
          ]}
        />

        <ComboCard
          title="Alternative Tornado Starter"
          starter="b+4 T!, CH (3),4"
          route={['f,f+3+4', 'df+2', 'df+1', 'f+2,3~F', 'SEN 2', '3,2']}
          damage="~67"
          difficulty="beginner"
          notes={[
            'Extra wall carry option',
            '3,2 ender carries far'
          ]}
        />
      </Section>

      <Section title="From FC df+4 (Crouch Launcher)">
        <ComboCard
          title="Full Crouch Launch"
          starter="FC df+4"
          route={['f+2,3~F', 'SEN 3', 'df+2', 'df+1', 'f+2,3~F', 'SEN 2 T!', 'uf+3+4,1+2']}
          damage="~68"
          difficulty="intermediate"
          notes={[
            'FC df+4 is your 15f crouch punish',
            'Slightly different pickup than standing launchers'
          ]}
        />
      </Section>

      <Section title="Wall Combos">
        <p>
          When you wall splat, here's how to get max damage:
        </p>

        <ComboCard
          title="Standard Wall"
          starter="Wall Splat"
          route={['df+1,1', '1+2']}
          damage="~25"
          difficulty="beginner"
          notes={[
            'Simple and consistent',
            'df+1,1 into 1+2 wall break'
          ]}
        />

        <ComboCard
          title="High Damage Wall"
          starter="Wall Splat"
          route={['1,1', 'd+3+4,4']}
          damage="~28"
          difficulty="beginner"
          notes={[
            'Slightly more damage',
            '3+4 gives good oki'
          ]}
        />

        <ComboCard
          title="Optimal Wall (Delayed b+1,3)"
          starter="Wall Splat"
          route={['b+1,(delayed)3', 'SEN 2~D', 'WRA 3+4']}
          damage="~55"
          difficulty="advanced"
          notes={[
            'Must delay the second hit of b+1,3',
            'Transitions to WRA for oki',
            'Most damaging wall combo'
          ]}
        />

        <TipBox variant="tip" title="Wall Combo Priority">
          For consistency, use df+1,1 → 1+2. Only go for the b+1,3 combo when you've practiced 
          the delay timing extensively.
        </TipBox>
      </Section>

      <Section title="Heat Combos">
        <p>
          After a heat engager, you can heat dash for combo extension.
        </p>

        <ComboCard
          title="After Heat Engager"
          starter="df+1,2~F (heat dash) or SEN 3~F (heat dash)"
          route={['d+4:1', 'f,n,d,df+3']}
          damage="+25-30"
          difficulty="intermediate"
          notes={[
            'Heat dash gives guaranteed follow-up',
            'd+4:1 just frame for better oki',
            'f,n,d,df+3 hits grounded and flips'
          ]}
        />

        <ComboCard
          title="Heat Burst Ender"
          starter="Any combo with T!"
          route={['...', 'T!', 'f,f,F+4', 'Heat Burst', 'd+2,1+2']}
          damage="Adds ~20"
          difficulty="intermediate"
          notes={[
            'Use heat burst in combo for extra damage',
            'Costs your heat activation',
            'Good for round-ending damage'
          ]}
        />
      </Section>

      <Section title="Combo Enders Reference">
        <KeyConcept title="Ender Selection" icon="🎯">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Ender</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Properties</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>uf+3+4,1+2</code></td>
                <td style={{ padding: '8px' }}>Long wall carry, consistent</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 1,qcf+2</code></td>
                <td style={{ padding: '8px' }}>Higher damage, less carry</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3,2</code></td>
                <td style={{ padding: '8px' }}>Long wall carry alternative</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1,1</code></td>
                <td style={{ padding: '8px' }}>Short carry, near wall</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>
      </Section>

      <Section title="Practice: Combo Drills">
        <PracticeBox
          title="Beginner Combo Mastery"
          setup="Set opponent to Stand. Practice from df+2."
          tasks={[
            { id: 'combo-1', text: 'Land beginner universal 5 times in a row', type: 'counter', target: 5 },
            { id: 'combo-2', text: 'Land wall combo (df+1,1 → 1+2) 5 times', type: 'counter', target: 5 },
            { id: 'combo-3', text: 'Land b+4 tornado combo 5 times', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Consistency Check"
          setup="Set opponent to Random Guard. Punish blocked moves with combo."
          tasks={[
            { id: 'consist-1', text: 'Complete full combo after punish 10 times', detail: 'No drops!', type: 'counter', target: 10 },
          ]}
        />
      </Section>

      <Collapsible title="Quick Combo Reference" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Launchers → f,f+2~F → SEN 3 → df+2 → df+1 → f+2,3~F → SEN 2 T! → uf+3+4,1+2</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Works from: df+2, uf+4, EWGF, FC df+4</p>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Tornado Starters → f,f+3+4 → df+2 → df+1 → f+2,3~F → SEN 1,qcf+2</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Works from: b+4 T!, CH 3,4, CH EWGK</p>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Wall Splat → df+1,1 → 1+2</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Simple and consistent wall damage</p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
