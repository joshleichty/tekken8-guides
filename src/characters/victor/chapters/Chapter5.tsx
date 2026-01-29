import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Perfumer Stance (PRF)"
      intro="Perfumer is Victor's neutral and okizeme stance. It features his best low poke, safe mids, and transitions into IAI. Master this stance and you'll control the pace of every round."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Learn IAI Stance"
    >
      <Section title="How to Enter Perfumer">
        <KeyConcept title="PRF Entry Options" icon="🚪">
          <ul>
            <li><code>f+3</code> — Manual entry (has punch parry properties!)</li>
            <li><code>2,1~f</code> — From jab string (+7 on hit)</li>
            <li><code>1,1,2~f</code> — From 10f punish (+7 on hit)</li>
            <li><code>b+1~f</code> — From safe mid (-5 on block)</li>
            <li><code>db+1,1~f</code> — From mid check (-5 on block)</li>
            <li><code>ws1+2~f</code> — From crouch mixup (+8 on hit)</li>
            <li><code>FC.1+2~f</code> — From low mixup (+6 on hit)</li>
            <li><code>uf+1,1~f</code> — From wall splat tool (+19 on hit)</li>
          </ul>
        </KeyConcept>

        <p>
          The most common entries are <code>2,1~f</code> on hit and <code>b+1~f</code> in neutral. 
          Both transition smoothly and let you start PRF pressure.
        </p>

        <TipBox variant="tip" title="f+3 Parry Property">
          The manual entry <code>f+3</code> has a <strong>punch parry</strong> window (frames 5-10). 
          If you parry a punch, you're at +15-20 and can do any i17 move guaranteed. The timing 
          is strict, but it's useful knowledge.
        </TipBox>
      </Section>

      <Section title="PRF.1 — Victor's Best Low">
        <MoveCard character="victor"
          move={{
            input: 'PRF.1',
            hitLevel: ['l'],
            damage: '15',
            startup: 'i19-20',
            onBlock: '-12',
            onHit: '+4c',
            onCH: '+14g',
            tags: ['Low', 'Weapon', 'Best Low', 'High Crush', 'Hits Grounded'],
            description: 'Victor\'s best low poke. Only -12 on block, +4 in crouch on hit, and hits grounded!',
          }}
          showVideo
        />

        <p>
          PRF.1 is <span className="highlight">Victor's best low by far</span>. At -12 on block, 
          most characters cannot launch punish it. It's +4 in crouch on hit, high crushes, and 
          even hits grounded opponents for okizeme.
        </p>

        <KeyConcept title="Why PRF.1 is Elite" icon="⭐">
          <ul>
            <li><strong>-12 on block</strong> — Safe from most launches</li>
            <li><strong>+4 FC on hit</strong> — Sets up ws1+2 frame trap</li>
            <li><strong>High crushes</strong> — Beats jabs and high strings</li>
            <li><strong>Hits grounded</strong> — Great for oki</li>
            <li><strong>Good range</strong> — Reaches from stance entry distance</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Frame Trap">
          After PRF.1 hits (+4 FC), go for <code>ws2</code> (i14, CH launcher). If they press 
          anything slower than i10, they get counter-hit launched. This is Victor's bread and butter.
        </TipBox>

        <TipBox variant="warning" title="Some Characters Launch -12">
          Claudio, Lee, Lili, and others have i12 ws launchers. Know the matchup before 
          spamming PRF.1. Against these characters, be more selective.
        </TipBox>
      </Section>

      <Section title="PRF.1+2 — Plus-on-Block Mid">
        <MoveCard character="victor"
          move={{
            input: 'PRF.1+2',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i25-27',
            onBlock: '+6',
            onHit: '+14a',
            tags: ['Mid', 'PLUS on Block', 'Hits Grounded', 'Oki Tool', 'Balcony Break'],
            description: 'Plus on block sheath slam. Slow but rewarding. Your main oki tool.',
          }}
          showVideo
        />

        <p>
          PRF.1+2 is <span className="highlight">plus on block</span> (+6) and hits grounded. 
          It's slow (i25), but the reward is massive. This is Victor's main okizeme tool.
        </p>

        <KeyConcept title="PRF.1+2 Applications" icon="🎯">
          <ul>
            <li><strong>Oki</strong> — After knockdown, this hits grounded or standing</li>
            <li><strong>After uf+1,1</strong> — Frame trap: uf+1,1 (+15) → PRF.1+2 catches pressing</li>
            <li><strong>Mental stack</strong> — They're scared of PRF.1, PRF.1+2 catches blocking</li>
            <li><strong>IAI transition</strong> — Hold d after for IAI at +6</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Can Be Stepped">
          PRF.1+2 is linear and slow. Good players will sidestep it. Don't rely on it in 
          neutral — use it primarily for oki and frame traps.
        </TipBox>
      </Section>

      <Section title="PRF.3 — Heat Engager Mid">
        <MoveCard character="victor"
          move={{
            input: 'PRF.3',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i15-17',
            onBlock: '-8',
            onHit: '+41d / HE',
            tags: ['Mid', 'Heat Engager', 'Safe', 'Knee', 'Low Crush', 'Balcony Break'],
            description: 'Fast heat engager knee from PRF. Safe on block, launches on heat dash.',
          }}
          showVideo
        />

        <p>
          PRF.3 is a <span className="highlight">fast, safe heat engager</span> from stance. 
          It's a knee (low crushes) and wall splats. Use this when you want to engage heat 
          from PRF pressure.
        </p>

        <KeyConcept title="PRF.3 Uses" icon="🔥">
          <ul>
            <li><strong>Heat engage</strong> — Quick, safe way to activate heat</li>
            <li><strong>Combo ender</strong> — Wall splat ender from combos</li>
            <li><strong>Low crush</strong> — Beats low pokes</li>
            <li><strong>Mix with PRF.1</strong> — Mid option against ducking</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="PRF.2,2 — IAI Transition String">
        <MoveCard character="victor"
          move={{
            input: 'PRF.2,2',
            hitLevel: ['m', 'm'],
            damage: '9, 13',
            startup: 'i12-13',
            onBlock: '-4 IAI',
            onHit: '+5 IAI',
            tags: ['Mid', 'Mid', 'IAI.Transition', 'Combo Filler'],
            description: 'Mid-mid string that transitions to IAI. Used in combos and pressure.',
          }}
          showVideo
        />

        <p>
          PRF.2,2 is your <span className="highlight">PRF to IAI transition</span>. It's -4 
          in IAI on block (fairly safe) and +5 in IAI on hit. Also used extensively in combos.
        </p>

        <MoveCard character="victor"
          move={{
            input: 'PRF.2,2,1',
            hitLevel: ['m', 'm', 'h'],
            damage: '9, 13, 20',
            startup: 'i12-13',
            onBlock: '-1',
            onHit: '+12',
            onCH: 'T! Launch',
            tags: ['Mid', 'Mid', 'High', 'Tornado', 'CH Launcher'],
            description: 'The high extension is a tornado move and CH launcher. Used in combos.',
          }}
          showVideo
        />

        <p>
          PRF.2,2,1 is used in combos for the tornado. The high extension also <span className="highlight">CH launches</span>, 
          creating mental stack — opponents who want to duck the high might get counter-hit.
        </p>

        <TipBox variant="tip" title="The Mental Game">
          <ol>
            <li>Do <code>PRF.2,2,1</code> — If they press, they get CH launched</li>
            <li>They start respecting the extension — Stop at <code>PRF.2,2</code></li>
            <li>Now you're in IAI for more mixups</li>
          </ol>
        </TipBox>
      </Section>

      <Section title="PRF.4 — Homing Option">
        <MoveCard character="victor"
          move={{
            input: 'PRF.4',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i18-19',
            onBlock: '-2',
            onHit: '+13',
            onCH: '+14',
            tags: ['High', 'Homing', 'Safe', 'Balcony Break'],
            description: 'Same as b+4 but from stance. Use when opponents try to sidestep PRF.',
          }}
          showVideo
        />

        <p>
          PRF.4 is <span className="highlight">your homing option from PRF</span>. It's the 
          same as b+4 — on CH, guarantees f+4,1 for heat engage. Use it when opponents try 
          to step your PRF options.
        </p>
      </Section>

      <Section title="PRF Crouch Cancel">
        <KeyConcept title="PRF to Crouch" icon="👇">
          <p>
            You can hold <code>df</code> while in PRF to crouch dash into full crouch. 
            This gives you access to your FC mixup (ws1+2 / FC.1+2) from stance.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="PRF to FC Mixup">
          The flow: <code>2,1~f</code> → PRF → hold df → FC
          <br/>Now you can do <code>ws1+2</code> (safe mid) or <code>FC.1+2</code> (low) 
          for a true mixup. This is advanced but powerful.
        </TipBox>
      </Section>

      <Section title="PRF Pressure Flowchart">
        <KeyConcept title="Basic PRF Flow" icon="🔄">
          <ol>
            <li><strong>Enter PRF</strong> — Via 2,1~f (safest), b+1~f, db+1,1~f</li>
            <li><strong>Low option</strong> — PRF.1 for damage, +4 FC</li>
            <li><strong>Mid option</strong> — PRF.1+2 for plus frames</li>
            <li><strong>Heat option</strong> — PRF.3 to engage heat</li>
            <li><strong>IAI transition</strong> — PRF.2,2 to go into IAI</li>
            <li><strong>Anti-step</strong> — PRF.4 if they're sidestepping</li>
          </ol>
        </KeyConcept>

        <KeyConcept title="PRF on Oki" icon="⬇️">
          <p>After knockdown:</p>
          <ul>
            <li><code>PRF.1</code> — Hits grounded, +4 FC on hit</li>
            <li><code>PRF.1+2</code> — Hits grounded, +6 on block</li>
            <li><code>PRF.3</code> — If they try to wake-up attack</li>
          </ul>
        </KeyConcept>
      </Section>

      <Collapsible title="PRF Frame Data" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Hit</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>PRF.1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i19</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4c</td>
                <td style={{ padding: '8px' }}>Best low, hits grounded</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>PRF.1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i25</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+14a</td>
                <td style={{ padding: '8px' }}>PLUS on block, oki tool</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>PRF.2,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-4 IAI</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+5 IAI</td>
                <td style={{ padding: '8px' }}>To IAI, combo filler</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>PRF.2,2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-1</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+12</td>
                <td style={{ padding: '8px' }}>T! move, CH launches</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>PRF.3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>HE</td>
                <td style={{ padding: '8px' }}>Heat engager, low crush</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>PRF.4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-2</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+13</td>
                <td style={{ padding: '8px' }}>Homing, CH → f+4,1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
