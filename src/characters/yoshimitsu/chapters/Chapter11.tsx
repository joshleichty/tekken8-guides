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
      title="Kincho Stance (KIN)"
      intro="Kincho is Yoshimitsu's sword meditation stance. It has the most moves of any stance, with long-range pokes, mixups, and even a guard crush setup. KIN is where Yoshimitsu plays footsies."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Learn Other Stances"
    >
      <Section title="Entering Kincho">
        <KeyConcept title="Manual Entry" icon="⚔️">
          <p><code>1+2</code> — Manual entry into Kincho</p>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            KIN has a parry on entry (frames 3-9). The parry can catch predictable attacks, but 
            it's not reliable. Don't depend on it.
          </p>
        </KeyConcept>

        <KeyConcept title="Move Transitions" icon="🔄">
          <p>These moves can transition to KIN:</p>
          <ul>
            <li><code>b+2 → n,1+2</code> — After b+2 mid</li>
            <li><code>ws+4 → 1+2</code> — After while standing 4</li>
            <li><code>2,2 → 1+2</code> — After 2,2 string</li>
            <li><code>df+1+4 → 1+2</code> — After crouch dash move</li>
            <li><code>f,f+3 → 1+2</code> — After running 3</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="KIN Entry Frames">
          Unlike DGF, you usually enter KIN from neutral or block recovery. The parry frames 
          give you some protection, but you're not plus like DGF entries.
        </TipBox>
      </Section>

      <Section title="KIN Key Moves">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'KIN.f+2',
            hitLevel: ['h'],
            damage: '25',
            startup: 'i12-13',
            onBlock: '-1',
            onHit: '+9a',
            onCH: '+49a',
            tags: ['High', 'Heat Engager', 'Homing', 'Fast'],
            description: 'FASTEST move from KIN. Heat engager, homing, wall breaks. Your go-to KIN attack.',
          }}
          showVideo
        />

        <p>
          KIN f+2 is <span className="highlight">Yoshimitsu's fastest KIN move</span>. At i12-13, 
          it beats most interruption attempts. Heat engager with massive range.
        </p>

        <KeyConcept title="KIN f+2 Applications" icon="⚡">
          <ul>
            <li><strong>Against approaching</strong> — Long range catches them coming in</li>
            <li><strong>Heat activation</strong> — Engages Heat safely</li>
            <li><strong>Wall breaks</strong> — Wall stagger for plus frames</li>
            <li><strong>Frame trap</strong> — +11 wall stagger leads to mixups</li>
          </ul>
        </KeyConcept>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'KIN.4',
            hitLevel: ['h'],
            damage: '23',
            startup: 'i16-17',
            onBlock: '+0',
            onHit: '+20a',
            onCH: '+49a',
            tags: ['High', 'Homing', 'Neutral on Block', 'KIN.Loop'],
            description: 'Homing high that\'s NEUTRAL on block. Can loop back into KIN with 1+2.',
          }}
          showVideo
        />

        <p>
          KIN 4 is <span className="highlight">neutral on block</span>. You can press 1+2 after to 
          go back into KIN, creating a pressure loop. On hit, it's hugely plus.
        </p>

        <KeyConcept title="KIN 4 Loop" icon="🔄">
          <ol>
            <li><code>KIN 4</code> — They block, you're +0</li>
            <li><code>1+2</code> — Back into Kincho</li>
            <li><code>KIN f+2</code> — They respect, you get the hit</li>
            <li>OR <code>KIN 4</code> again — Repeat the loop</li>
          </ol>
        </KeyConcept>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'KIN.2,1+2',
            hitLevel: ['m', 'M'],
            damage: '15, 30',
            startup: 'i21-22',
            onBlock: '-15 to -13',
            onHit: '+2a',
            tags: ['Mid', 'Mid', 'Floor Break', 'Guard Crush Setup'],
            description: 'Mid launcher. Can be charged for guard crush. The charged version is +11 in Heat.',
          }}
          showVideo
        />

        <p>
          KIN 2,1+2 is your <span className="highlight">guard crush setup</span>. Hold the 1+2 to 
          charge it — the charged version guard crushes and is plus in Heat.
        </p>

        <TipBox variant="tip" title="The Guard Crush">
          <p>In Heat: <code>KIN 2,1+2</code> (charged) is +11 on block and guard crushes.</p>
          <p style={{ marginTop: '8px' }}>After guard crush, <code>b+2,2</code> is guaranteed for free Heat dash combo.</p>
        </TipBox>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'KIN.d+1',
            hitLevel: ['L'],
            damage: '20',
            startup: 'i23-24',
            onBlock: '-13',
            onHit: '+3',
            onCH: '+38a',
            tags: ['Low', 'Long Range', 'Plus on Hit'],
            description: 'Long-range low from KIN. Plus on hit, CH knockdown. Can cancel to FC with db.',
          }}
          showVideo
        />

        <p>
          KIN d+1 is your <span className="highlight">KIN low option</span>. Long range, plus on hit. 
          Can cancel the startup with db to go to crouch for mind games.
        </p>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'KIN.f+1+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i24-25',
            onBlock: '+14c',
            onHit: '+14c',
            onCH: '+49a',
            tags: ['Mid', 'PLUS ON BLOCK', 'Flea Transition', 'New Move'],
            description: 'New T8 move. PLUS 14 ON BLOCK. Transitions to Flea. Frame traps into FLE 1+2.',
          }}
          showVideo
        />

        <p>
          KIN f+1+2 is a <span className="highlight">new Tekken 8 move</span> that's PLUS 14 ON BLOCK. 
          Transitions to Flea stance. On CH, full combo.
        </p>
      </Section>

      <Section title="KIN 1 — Safe Mid">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'KIN.1,1',
            hitLevel: ['m', 'm,m'],
            damage: '10, 5+15',
            startup: 'i17',
            onBlock: '-9',
            onHit: '+7c',
            tags: ['Mid', 'Mid', 'Floor Break', 'Safe', 'NSS.Enhanced'],
            description: 'Safe mid poke from KIN. -9 is unpunishable. Enhanced in NSS/Heat for more damage.',
          }}
          showVideo
        />

        <p>
          KIN 1,1 is your <span className="highlight">safe mid from KIN</span>. At -9, it can't be 
          punished. Use it when you want a mid check without the risk of KIN 2.
        </p>

        <KeyConcept title="KIN 1 vs KIN 2" icon="⚖️">
          <ul>
            <li><strong>KIN 1,1</strong> — Safe (-9), less damage, use for poking</li>
            <li><strong>KIN 2,1+2</strong> — Risky (-15), more damage, use for reads/punishment</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="KIN Mixup Options">
        <KeyConcept title="The KIN Game" icon="🎯">
          <p>From Kincho, you have:</p>
          <ul>
            <li><strong>KIN f+2</strong> — Fast high, Heat engager, -1</li>
            <li><strong>KIN 4</strong> — Homing high, neutral on block</li>
            <li><strong>KIN 1,1</strong> — Safe mid poke</li>
            <li><strong>KIN 2,1+2</strong> — Risky mid launcher</li>
            <li><strong>KIN d+1</strong> — Long range low</li>
            <li><strong>KIN f+1+2</strong> — Plus on block mid</li>
            <li><strong>KIN 1+4</strong> — Flash from KIN</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="KIN is Jabbable">
          Unlike DGF after 3,1, you're not automatically plus in KIN. Opponents can jab you out 
          of many KIN options. Use KIN when you have space or after plus frame moves.
        </TipBox>
      </Section>

      <Section title="KIN b+2,1 — The Mid Launcher">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'KIN.b+2,1',
            hitLevel: ['m', 'M'],
            damage: '15, 19',
            startup: 'i15-16',
            onBlock: '-12',
            onHit: '+30a (Tornado)',
            tags: ['Mid', 'Mid', 'Tornado', 'Natural Combo'],
            description: 'Mid-mid launcher. First hit is safe (-9), second launches. Natural combo from first hit.',
          }}
          showVideo
        />

        <p>
          KIN b+2,1 is a <span className="highlight">mid launcher from KIN</span>. The first hit is 
          -9 (safe), and the second launches for Tornado. Great for punishment from KIN.
        </p>
      </Section>

      <Collapsible title="KIN Move Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Height</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Use</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>KIN f+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>h</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-1</td>
                <td style={{ padding: '8px' }}>Best KIN move, Heat engager</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>KIN 4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>h</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+0</td>
                <td style={{ padding: '8px' }}>Neutral, homing, KIN loop</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>KIN 1,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m, m,m</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Safe mid poke</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>KIN 2,1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m, M</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-15~-13</td>
                <td style={{ padding: '8px' }}>Guard crush, launcher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>KIN d+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>L</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ padding: '8px' }}>Long range low</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>KIN f+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+14c</td>
                <td style={{ padding: '8px' }}>Plus on block, FLE transition</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>KIN b+2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m, M</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ padding: '8px' }}>Mid launcher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>KIN 1+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-20</td>
                <td style={{ padding: '8px' }}>Flash from KIN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
