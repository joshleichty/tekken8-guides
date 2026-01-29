import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Dragonfly Stance (DGF)"
      intro="Dragonfly is Yoshimitsu's most important stance. It's where your frame traps, mixups, and plus frame pressure live. Master DGF and you master Yoshimitsu's offense."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Learn Kincho Stance"
    >
      <Section title="Entering Dragonfly">
        <KeyConcept title="Manual Entry" icon="🚁">
          <p><code>u+1+2</code> — Manual entry into Dragonfly</p>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            You can enter DGF manually, but you're more vulnerable. The move-based transitions 
            are safer and give plus frames.
          </p>
        </KeyConcept>

        <KeyConcept title="Move Transitions" icon="🔄">
          <p>These moves transition to DGF by holding up:</p>
          <ul>
            <li><code>3,1</code> — +7 in DGF on block, +18 on hit</li>
            <li><code>3~4</code> — +5 in DGF on block</li>
            <li><code>f,f,F+3</code> — +7 in DGF on block</li>
            <li><code>Heat Smash</code> — +10 in DGF on block</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Key Transition">
          <code>3,1 → DGF</code> is your main entry. At +7 in DGF, you have frame traps against 
          everything. This is where Yoshimitsu's pressure game lives.
        </TipBox>
      </Section>

      <Section title="DGF Key Moves">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'DGF.f+1+2',
            hitLevel: ['h', 'h', 'h'],
            damage: '9, 9, 18',
            startup: 'i16-17',
            onBlock: '-2',
            onHit: '+18a',
            tags: ['High', 'High', 'High', 'Homing', 'Chip Damage'],
            description: 'Homing triple hit. -2 on block means Flash frame traps. Your main DGF pressure tool.',
          }}
          showVideo
        />

        <p>
          DGF f+1+2 is your <span className="highlight">main DGF pressure move</span>. It's homing, 
          does chip damage, and at -2 you can Flash frame trap. After 3,1 (+7), this is guaranteed 
          to beat jabs.
        </p>

        <KeyConcept title="3,1 → DGF f+1+2 Frame Trap" icon="⚡">
          <ol>
            <li><code>3,1</code> — You're +7 in DGF on block</li>
            <li><code>DGF f+1+2</code> — i16, so they need i9 or faster to interrupt</li>
            <li>No one has i9 mids — your f+1+2 beats all attacks</li>
            <li>On block, you're -2 — Flash frame trap potential</li>
          </ol>
        </KeyConcept>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'DGF.2,4',
            hitLevel: ['h', 'M'],
            damage: '15, 22',
            startup: 'i16-18',
            onBlock: '-14',
            onHit: '+15a (Tornado)',
            tags: ['High', 'Mid', 'Tornado', 'Launcher', 'Punishable'],
            description: 'Frame trap launcher. The second hit is a Tornado launcher. -14 on block is risky.',
          }}
          showVideo
        />

        <p>
          DGF 2,4 is a <span className="highlight">frame trap launcher</span>. If they press buttons 
          after 3,1, this launches for a combo. Risky on block at -14 though.
        </p>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'DGF.4',
            hitLevel: ['m'],
            damage: '24',
            startup: 'i18-20',
            onBlock: '-4',
            onHit: '+14g',
            tags: ['Mid', 'Heat Engager', 'Safe', 'Wall Splats'],
            description: 'Heat engager mid. Safe at -4, wall splats. Your mid option when they duck f+1+2.',
          }}
          showVideo
        />

        <p>
          DGF 4 is your <span className="highlight">mid option</span>. Use it when they start 
          ducking DGF f+1+2 (which is all highs). Heat engager with wall splat.
        </p>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'DGF.3+4',
            hitLevel: ['h!', 't'],
            damage: '17, 18',
            startup: 'i20-21',
            onBlock: '—',
            onHit: '+0',
            tags: ['High', 'Throw', 'Unbreakable', 'Floor Break'],
            description: 'Unbreakable throw! Floor breaks. Amazing against passive players who block everything.',
          }}
          showVideo
        />

        <p>
          DGF 3+4 is an <span className="highlight">UNBREAKABLE THROW</span>. If they're blocking 
          everything, just throw them. Floor breaks for extra damage on certain stages.
        </p>

        <TipBox variant="tip" title="The DGF Throw">
          Most throws in Tekken can be broken. DGF 3+4 cannot. Against opponents who turtle in 
          DGF pressure, this throw is free damage. Use it!
        </TipBox>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'DGF.3',
            hitLevel: ['L'],
            damage: '18',
            startup: 'i22-23',
            onBlock: '-13',
            onHit: '+6c',
            onCH: '+28a',
            tags: ['Low', 'Airborne', 'Cannot Be Low Parried'],
            description: 'Airborne low that can\'t be low parried. Plus on normal hit, big knockdown on CH.',
          }}
          showVideo
        />

        <p>
          DGF 3 is an <span className="highlight">airborne low</span>. Because Yoshimitsu is flying, 
          it CAN'T BE LOW PARRIED. Use it for chip and to mix up your DGF pressure.
        </p>
      </Section>

      <Section title="DGF Pressure Flowchart">
        <KeyConcept title="The DGF Mixup" icon="🔄">
          <p>After entering DGF with plus frames (3,1, Running 3, etc.):</p>
          <ol>
            <li><strong>DGF f+1+2</strong> — Default. Homing, chip damage.</li>
            <li><strong>DGF 4</strong> — Mid option when they duck.</li>
            <li><strong>DGF 2,4</strong> — Launcher when they press buttons.</li>
            <li><strong>DGF 3+4</strong> — Unbreakable throw vs turtles.</li>
            <li><strong>DGF 3</strong> — Low mixup, can't be parried.</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Jab Check">
          DGF is vulnerable to i10 jabs if you're not plus. If they jab on reaction to seeing 
          DGF, your options lose. That's why you enter DGF from plus frame moves like 3,1.
        </TipBox>
      </Section>

      <Section title="DGF in Heat">
        <p>
          In Heat, DGF gains some enhancements:
        </p>

        <KeyConcept title="Heat DGF Buffs" icon="🔥">
          <ul>
            <li><strong>DGF 1</strong> — Becomes enhanced, more damage</li>
            <li><strong>DGF f+1+2</strong> — More chip damage</li>
            <li><strong>DGF 4</strong> — Becomes a launcher on heat dash</li>
          </ul>
        </KeyConcept>

        <MoveCard character="yoshimitsu"
          videoId="H.DGF.1"
          move={{
            input: 'Heat DGF.1',
            hitLevel: ['M'],
            damage: '26',
            startup: 'i30-31',
            onBlock: '+2',
            onHit: '+46a (Floor Break)',
            tags: ['Mid', 'Plus on Block', 'Floor Break', 'Heat Enhanced'],
            description: 'Heat-only enhanced mid. PLUS ON BLOCK. Consumes 90 frames of Heat.',
          }}
          showVideo
        />

        <p>
          Heat DGF 1 is <span className="highlight">PLUS ON BLOCK</span>. This is insane. Use it 
          during Heat for safe pressure that keeps you in advantage.
        </p>
      </Section>

      <Section title="DGF Movement">
        <KeyConcept title="DGF Navigation" icon="🕹️">
          <ul>
            <li><code>DGF f</code> — Move forward (realigns)</li>
            <li><code>DGF d+3+4</code> — Go to Indian Sit stance</li>
            <li><code>Hold direction</code> — Slowly drift that direction</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            You can use DGF f to realign and create distance, then attack from a different angle.
          </p>
        </KeyConcept>
      </Section>

      <Section title="DGF Combos">
        <KeyConcept title="Combo from DGF 2,4" icon="📋">
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
            DGF 2,4 → f+2,1 → 3~4~U → DGF f+1+2
          </p>
          <p style={{ marginTop: '12px' }}>
            DGF 2,4 gives Tornado, so you continue with the spinning ender.
          </p>
        </KeyConcept>
      </Section>

      <Collapsible title="DGF Move Reference" icon="📊">
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
                <td style={{ padding: '8px' }}><code>DGF f+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>h,h,h</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-2</td>
                <td style={{ padding: '8px' }}>Main pressure, homing</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DGF 2,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>h, M</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ padding: '8px' }}>Frame trap launcher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DGF 4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-4</td>
                <td style={{ padding: '8px' }}>Safe mid, Heat engager</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DGF 3+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Throw</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ padding: '8px' }}>Unbreakable throw</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DGF 3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>L</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ padding: '8px' }}>Airborne low</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DGF 2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>h</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                <td style={{ padding: '8px' }}>Plus on block, keeps flying</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>H.DGF 1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>M</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+2</td>
                <td style={{ padding: '8px' }}>Heat only, plus on block</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
