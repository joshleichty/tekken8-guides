import { Chapter, Section } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Standard Combos"
      intro="Now that you understand the fundamentals, let's build your combo repertoire with optimized routes for every situation. These combos balance damage, wall carry, and consistency."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Learn Punishment"
    >
      <Section title="Standard Launch Combos">
        <p>
          These routes work from your main launchers and give the best balance of damage 
          and wall carry:
        </p>

        <ComboCard
          title="Standard Route (df+2,3 / ws3)"
          starter="df+2,3 / ws3"
          route={['df+3~4', 'b+1', 'd+3,4,3~4', 'uf+4 T!']}
          damage="~62"
          difficulty="intermediate"
          wallCarry
          notes={[
            'df+3~4 is the high pickup',
            'b+1 re-launches them',
            'd+3,4,3~4 is the piano filler',
            'uf+4 Tornado for wall splat'
          ]}
        />

        <ComboCard
          title="Optimized Route (More Damage)"
          starter="df+2,3 / ws3"
          route={['df+3~4', '3,4~4', 'dash', '3,4~4', 'dash', '3,4~3 T!', 'db+4', 'df+4,3']}
          damage="~68"
          difficulty="advanced"
          wallCarry
          notes={[
            'Two reps of 3,4~4 for more damage',
            'Requires tight dash timing',
            'db+4 spike after Tornado',
            'df+4,3 for wall carry'
          ]}
        />

        <TipBox variant="tip" title="When to Use Each">
          Use the standard route until you're comfortable, then graduate to the optimized 
          route for more damage. The optimized route requires better execution but rewards 
          with ~6 more damage.
        </TipBox>
      </Section>

      <Section title="b,f+4 (Jet Kick) Combos">
        <p>
          Jet kick launches higher and from further away, allowing different routes:
        </p>

        <ComboCard
          title="Jet Kick Standard"
          starter="b,f+4"
          route={['df+3~4', '3,4~4', 'dash', '3,4~4', 'dash', '3,4~3 T!']}
          damage="~68"
          difficulty="intermediate"
          wallCarry
          notes={[
            'Higher launch means more reps possible',
            'Great wall carry'
          ]}
        />

        <ComboCard
          title="Jet Kick Max Carry"
          starter="b,f+4"
          route={['df+3~4', '3,4~4', 'dash', '3,4~4', 'dash', '3,4~3 T!', 'db+4', 'df+4,3']}
          damage="~72"
          difficulty="advanced"
          wallCarry
          notes={[
            'Maximum wall carry',
            'Can take them from spawn to wall on most stages'
          ]}
        />
      </Section>

      <Section title="Counter-Hit Combos">
        <ComboCard
          title="CH 3+4 Route"
          starter="CH 3+4"
          route={['df+3~4', '3,4~4', 'dash', 'b+4', 'f+3,2,4~3 T!']}
          damage="~72"
          difficulty="intermediate"
          notes={[
            'Confirm the crumple animation',
            'b+4 is a tight pickup',
            'f+3,2,4~3 gives Tornado'
          ]}
        />

        <ComboCard
          title="CH b+3+4 Route"
          starter="CH b+3+4"
          route={['f,f+1+2 or f+2,1']}
          damage="~45-55"
          difficulty="beginner"
          notes={[
            'Simple follow-up after CH b+3+4',
            'f,f+1+2 grants GRF',
            'With GRF: GRF f+2,1,2 for more damage'
          ]}
        />
      </Section>

      <Section title="Heat Combos">
        <p>
          In Heat, you have access to Heat Dash extensions for more damage:
        </p>

        <ComboCard
          title="Heat Burst Combo (b+3)"
          starter="Heat on b+3~F"
          route={['df+3~4', '3,4~4', 'dash', '3,4~4', 'dash', '3,4~3 T!', 'db+4', 'df+4,3']}
          damage="~75"
          difficulty="intermediate"
          notes={[
            'b+3 is a heat engager',
            'Heat Dash after b+3',
            'Standard pickup from there'
          ]}
        />

        <ComboCard
          title="Heat Combo (df+1,4 starter)"
          starter="Heat on df+1,4~F"
          route={['dash', 'df+3~4', '3,4~4', '3,4~4', '3,4~3 T!', 'db+4', 'df+4,3']}
          damage="~78"
          difficulty="advanced"
          notes={[
            'df+1,4 heat dash gives high launch',
            'Three 3,4 reps possible',
            'Maximum Heat combo damage'
          ]}
        />

        <ComboCard
          title="Heat Burst Ender"
          starter="Any launcher → standard route"
          route={['...after db+4 or 3,1', 'Heat Burst', 'ws2,4~3 T!', 'df+4,3']}
          damage="+8 damage"
          difficulty="intermediate"
          notes={[
            'Use Heat Burst in combo for extra damage',
            'Minimal Heat cost',
            'Good when you need to close out a round'
          ]}
        />
      </Section>

      <Section title="Wall Combos">
        <ComboCard
          title="Basic Wall Combo"
          starter="Wall Splat"
          route={['b+4,3,2']}
          damage="~30"
          difficulty="beginner"
          notes={[
            'Simple and reliable',
            'Grants Garuda Force'
          ]}
        />

        <ComboCard
          title="Wall Combo with Tornado"
          starter="Wall Splat (T! available)"
          route={['uf+4 T!', 'b+4,3,2']}
          damage="~45"
          difficulty="beginner"
          notes={[
            'If Tornado hasn\'t been used',
            'More damage than basic'
          ]}
        />

        <ComboCard
          title="Optimized Wall Combo"
          starter="Wall Splat (T! available)"
          route={['df+4,3 T!', 'f+3,2,4 (delay last hit)']}
          damage="~50"
          difficulty="intermediate"
          notes={[
            'df+4,3 gives Tornado at wall',
            'Delay the 4 in f+3,2,4 for more damage'
          ]}
        />

        <ComboCard
          title="Alternative Wall Combo"
          starter="Wall Splat"
          route={['1,2,1,4']}
          damage="~35"
          difficulty="beginner"
          notes={[
            'Good when b+4,3,2 might drop',
            'More consistent on some wall angles'
          ]}
        />
      </Section>

      <Section title="Small Combos & Follow-ups">
        <ComboCard
          title="b+1 Follow-up"
          starter="b+1 (on hit)"
          route={['f,f+1+2']}
          damage="~42"
          difficulty="beginner"
          notes={[
            'Guaranteed after b+1 knockdown',
            'Grants Garuda Force'
          ]}
        />

        <ComboCard
          title="ws2,4 Follow-up"
          starter="ws2,4 (on hit)"
          route={['f,f+1+2']}
          damage="~55"
          difficulty="beginner"
          notes={[
            'After 14f WS punish',
            'Grants Garuda Force'
          ]}
        />

        <ComboCard
          title="CH FC df+2 Follow-up"
          starter="CH FC df+2"
          route={['f,f+1+2']}
          damage="~44"
          difficulty="beginner"
          notes={[
            'After counter-hit full crouch low',
            'Grants Garuda Force'
          ]}
        />

        <ComboCard
          title="Low Parry Combo"
          starter="Low Parry (df)"
          route={['db+4', '3,1', 'f+3,2,1']}
          damage="~40"
          difficulty="beginner"
          notes={[
            'Standard low parry conversion'
          ]}
        />
      </Section>

      <Section title="Combo Enders">
        <KeyConcept title="Ender Selection Guide" icon="🎯">
          <ul>
            <li><strong>df+4,3</strong> — Best wall carry, standard choice</li>
            <li><strong>db+4</strong> — Keeps them close, better oki</li>
            <li><strong>b+4,3,2</strong> — Grants GRF, use at wall or when you need install</li>
            <li><strong>df+1,2</strong> — Floor break, grants GRF</li>
            <li><strong>2,1</strong> — Wall break, quick damage</li>
          </ul>
        </KeyConcept>
      </Section>

      <Collapsible title="Combo Reference Table" icon="📊" defaultOpen>
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Starter</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Route</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Damage</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>df+2,3</code></td>
                <td style={{ padding: '8px' }}>df+3~4 → 3,4~4 → 3,4~3 T! → db+4 → df+4,3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~68</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws3</code></td>
                <td style={{ padding: '8px' }}>Same as df+2,3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~68</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b,f+4</code></td>
                <td style={{ padding: '8px' }}>df+3~4 → 3,4~4 → 3,4~4 → 3,4~3 T!</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~72</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>CH 3+4</code></td>
                <td style={{ padding: '8px' }}>df+3~4 → 3,4~4 → b+4 → f+3,2,4~3 T!</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~72</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f+1+2</code></td>
                <td style={{ padding: '8px' }}>3,4~4 → 3,4~3 T! → db+4 → df+4,3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~65</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Wall Splat</td>
                <td style={{ padding: '8px' }}>uf+4 T! → b+4,3,2</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
