import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Heat System"
      intro="Heat gives Fahkumram permanent Garuda Force access for its duration. This means all GRF moves, guard breaks, and Rama stance are available without earning the install first. Here's how to maximize your Heat."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Defense & Parries"
    >
      <Section title="Heat Basics">
        <p>
          You get <span className="highlight">one Heat activation per round</span>. When activated, 
          your health bar glows and a timer appears. For Fahkumram, Heat is especially powerful 
          because it grants permanent Garuda Force.
        </p>

        <KeyConcept title="Fahkumram's Heat Benefits" icon="🔥">
          <ul>
            <li><strong>Permanent Garuda Force</strong> — All GRF moves available throughout Heat</li>
            <li><strong>Recoverable health</strong> — White health regenerates while in Heat</li>
            <li><strong>Chip damage</strong> — Your attacks do chip on block</li>
            <li><strong>Heat Dash</strong> — Extend combos for more damage</li>
            <li><strong>Heat Smash</strong> — Powerful finisher move</li>
            <li><strong>Guard breaks available</strong> — Can charge kicks without earning GRF first</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Permanent GRF is Huge">
          Without Heat, you need to earn Garuda Force through specific moves. In Heat, you have 
          it constantly — meaning GRF df+3+4,3, GRF f+2,1,2, GRF 1+2 parry, and all guard breaks 
          are always available.
        </TipBox>
      </Section>

      <Section title="Heat Engagers">
        <p>
          <span className="highlight">Heat Engagers</span> are moves that activate Heat on hit. 
          Using them is better than Heat Burst because you get a guaranteed situation:
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          <MoveCard character="fahkumram"
            move={{
              input: 'b+3',
              hitLevel: ['h'],
              damage: '27',
              startup: 'i16',
              onBlock: '-7',
              onHit: '+15a (+6)',
              tags: ['High', 'Heat Engager', 'Homing', 'Safe'],
              description: 'Homing high heat engager. Catches sidesteps and is safe on block.',
            }}
          />

          <MoveCard character="fahkumram"
            move={{
              input: 'f+1+2',
              hitLevel: ['m'],
              damage: '25',
              startup: 'i21',
              onBlock: '-4',
              onHit: '+24a (+14)',
              tags: ['Mid', 'Heat Engager', 'Long Range', 'Safe'],
              description: 'Safe mid heat engager with great range. Very linear, so use after conditioning.',
            }}
          />

          <MoveCard character="fahkumram"
            move={{
              input: 'df+1,4',
              hitLevel: ['m', 'h'],
              damage: '12, 23',
              startup: 'i15',
              onBlock: '-5',
              onHit: '+20a (+11)',
              tags: ['Mid', 'High', 'Heat Engager', 'Duckable'],
              description: 'df+1 extension heat engager. Second hit can be ducked.',
            }}
          />

          <MoveCard character="fahkumram"
            move={{
              input: 'uf+3',
              hitLevel: ['m'],
              damage: '23',
              startup: 'i14',
              onBlock: '-14',
              onHit: '+9a (+0)',
              tags: ['Mid', 'Heat Engager', 'Low Crush', 'Knee'],
              description: 'Jumping knee heat engager. Low crushes but unsafe on block.',
            }}
          />

          <MoveCard character="fahkumram"
            move={{
              input: 'ws1,2',
              hitLevel: ['m', 'h'],
              damage: '12, 25',
              startup: 'i13',
              onBlock: '-9',
              onHit: '+20a (+11)',
              tags: ['Mid', 'High', 'Heat Engager', '13f Punish'],
              description: 'While standing heat engager. Use as 13f WS punish.',
            }}
          />
        </div>

        <KeyConcept title="Which Engager to Use?" icon="🎯">
          <ul>
            <li><strong>b+3</strong> — Against stepping opponents (homing)</li>
            <li><strong>f+1+2</strong> — At range when they're not stepping</li>
            <li><strong>df+1,4</strong> — After df+1 pressure, duckable</li>
            <li><strong>uf+3</strong> — Reading a low, low crush launcher</li>
            <li><strong>ws1,2</strong> — 13f WS punishment</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Smash">
        <MoveCard character="fahkumram"
          move={{
            input: 'H.2+3',
            hitLevel: ['m', 'm'],
            damage: '50',
            startup: 'i16',
            onBlock: '+7',
            onHit: 'Throw',
            tags: ['Heat Smash', 'Balcony Break', 'Throw on Hit', 'Low Crush'],
            description: 'Fahkumram\'s Heat Smash. Transitions to attack throw on hit. Low crushes.',
          }}
          showVideo
        />

        <p>
          Fahkumram's Heat Smash is a <span className="highlight">mid launcher</span> that 
          transitions to an attack throw on hit. Key features:
        </p>

        <ul>
          <li><strong>+7 on block</strong> — You maintain frame advantage even on block</li>
          <li><strong>Low crushes</strong> — Goes over low attacks</li>
          <li><strong>Balcony break</strong> — Can break balconies</li>
          <li><strong>50 damage</strong> — High damage throw on hit</li>
        </ul>

        <TipBox variant="tip" title="Heat Smash is Plus on Block">
          Unlike many Heat Smashes, Fahkumram's is +7 on block. This means even if they block it, 
          you're at massive advantage. Don't be afraid to throw it out.
        </TipBox>
      </Section>

      <Section title="Heat Strategy">
        <KeyConcept title="When to Activate Heat" icon="⏱️">
          <ul>
            <li><strong>After a combo</strong> — Heat Dash extends combos for more damage</li>
            <li><strong>When you need GRF moves</strong> — Instant access to all GRF tools</li>
            <li><strong>At the wall</strong> — Rama pressure becomes even scarier</li>
            <li><strong>To close out a round</strong> — Heat Smash for the kill</li>
            <li><strong>When health is low</strong> — Recover white health</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Heat Pressure Plan" icon="🔥">
          <ol>
            <li><strong>Engage with b+3 or f+1+2</strong> — Start Heat safely</li>
            <li><strong>Use GRF df+3+4,3</strong> — On hit, go to Rama</li>
            <li><strong>Spam guard breaks</strong> — Charge kicks freely for Rama access</li>
            <li><strong>Pressure with GRF f+2,1,2</strong> — +2 on block pressure</li>
            <li><strong>Heat Smash to close</strong> — +7 on block, big damage on hit</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Waste Heat">
          Heat gives you permanent GRF — make use of it! Don't activate Heat and then 
          play normally. Go for GRF moves, guard breaks, and Rama mixups.
        </TipBox>
      </Section>

      <Section title="Heat Combo Extension">
        <p>
          Heat Dash after heat engagers lets you extend combos:
        </p>

        <Collapsible title="Heat Combo Examples" icon="📖" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <p><strong>b+3 Heat Dash Route:</strong></p>
            <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px', marginBottom: '16px' }}>
              b+3 ~F → df+3~4 → 3,4~4 → 3,4~4 → 3,4~3 T! → db+4 → df+4,3
            </p>

            <p><strong>df+1,4 Heat Dash Route:</strong></p>
            <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px', marginBottom: '16px' }}>
              df+1,4 ~F → dash → df+3~4 → 3,4~4 → 3,4~4 → 3,4~3 T! → db+4 → df+4,3
            </p>

            <p><strong>Heat Burst in Combo:</strong></p>
            <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
              ...after db+4 or 3,1 → Heat Burst → ws2,4~3 → df+4,3
            </p>
          </div>
        </Collapsible>
      </Section>

      <Collapsible title="Heat Move Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Type</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>b+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>Homing, safe, best engager</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>Long range, safe, linear</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>df+1 extension, duckable</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>uf+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>Low crush, -14 on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws1,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>13f WS punish</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>H.2+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Smash</td>
                <td style={{ padding: '8px' }}>+7 on block, 50 dmg, low crush</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
