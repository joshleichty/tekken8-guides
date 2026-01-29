import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Punishment"
      intro="Fahkumram has excellent punishment with exceptional range. His 13f 3,1 reaches incredibly far, and his whiff punishment is among the best in the game. Master these to capitalize on every opponent mistake."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Frame Traps & Setups"
    >
      <Section title="What is Punishment?">
        <p>
          <span className="highlight">Punishment</span> is hitting your opponent after you 
          block their unsafe move. If a move is -10 or worse on block, you can punish it.
        </p>

        <KeyConcept title="Why Punishment Matters" icon="⚖️">
          <ul>
            <li><strong>Free damage</strong> — They can't block your punish</li>
            <li><strong>Mental pressure</strong> — Makes them afraid to use unsafe moves</li>
            <li><strong>Comeback potential</strong> — Turn their aggression against them</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Fahkumram's range advantage means he can punish moves that might push back 
            too far for other characters.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Standing Punishment">
        <p>
          These punishes are for when you block an unsafe move while standing.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--success)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--success)' }}>10 Frame (-10 to -11)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>1,4</code> — Your go-to 10f punish. +8 on hit, 22 damage.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              This gives you frame advantage to continue pressure. Extremely important.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>12 Frame (-12)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>2,1</code> — Wall splat, knockdown. 33 damage.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              More damage than 1,4 with knockdown for oki. Use when you don't need frames.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>13 Frame (-13)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>3,1</code> — INCREDIBLE RANGE. +7 on hit, 23 damage.</p>
            <p><code style={{ color: 'var(--accent)' }}>GRF df+3+4,3</code> — With GRF, leads to Rama on hit.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              3,1's range is absurd — it punishes things other characters can't reach.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent-secondary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent-secondary)' }}>14 Frame (-14)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>b+1</code> — Great range, knockdown. Guarantees f,f+1+2.</p>
            <p><code style={{ color: 'var(--accent)' }}>b+2,1</code> — 42 damage, wall splat.</p>
            <p><code style={{ color: 'var(--accent)' }}>uf+3</code> — Heat engager option.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              b+1 is preferred for the guaranteed follow-up and GRF grant.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>15 Frame (-15 or worse)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>df+2,3</code> — LAUNCH PUNISH. Full combo (~65+)</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              If it's -15 or worse, launch them for full damage.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>18 Frame (-18 or worse)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>b,f+4</code> — Jet kick launch. Full combo (~70+)</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Use for moves that are very negative. More damage than df+2,3.
            </p>
          </div>
        </div>
      </Section>

      <Section title="While Standing Punishment">
        <p>
          After you block a low attack, you're in crouch. These are your punishes from that state.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--success)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--success)' }}>11 Frame (-11 to -12)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws4</code> — Generic ws4. Fast and reliable.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Your default WS punish. 20 damage, +5 on hit.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>13 Frame (-13)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws1,2</code> — Heat engager, wall splat. 37 damage.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Great 13f WS punish. Can lead to Heat activation.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>14 Frame (-14)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws2,4</code> — Wall splat, combo with f,f+1+2.</p>
            <p><code style={{ color: 'var(--accent)' }}>uf+3</code> — Heat engager option from crouch.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              ws2,4 gives guaranteed f,f+1+2 for GRF.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>15 Frame (-15 or worse)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws3</code> — LAUNCH PUNISH. Full combo.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Fahkumram's 15f WS launcher. Same routes as df+2,3.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Whiff Punishment">
        <p>
          Fahkumram excels at whiff punishment thanks to his range. When opponents miss:
        </p>

        <KeyConcept title="Best Whiff Punishes" icon="🎯">
          <ul>
            <li><code>df+4,3</code> — i16, amazing range. Combo with d+4 guaranteed.</li>
            <li><code>3,1</code> — i13, great range. Easy and consistent.</li>
            <li><code>b+1</code> — i14, good range. Combo with f,f+1+2.</li>
            <li><code>f+2,1</code> — i15, long range. Wall splat, with GRF get f+2,1,2.</li>
            <li><code>b,f+4</code> — i18, fullscreen range. Full launch combo.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="df+4,3 is Your Best Friend">
          df+4,3 is arguably Fahkumram's best whiff punish. At i16 with massive range, 
          it catches almost everything. The guaranteed d+4 follow-up gives solid damage.
        </TipBox>
      </Section>

      <Section title="Punishment with Pushback">
        <p>
          Some moves push back on block, making normal punishes whiff. Fahkumram handles 
          this better than most characters:
        </p>

        <KeyConcept title="Long Range Punishes" icon="📏">
          <ul>
            <li><code>3,1</code> — Absurd range for a 13f move</li>
            <li><code>b+1</code> — Reaches far at 14f</li>
            <li><code>df+4,3</code> — Amazing range for whiff punish</li>
            <li><code>b,f+4</code> — Fullscreen reach</li>
          </ul>
        </KeyConcept>

        <p>
          When in doubt, use 3,1. Its range covers most pushback situations that other 
          characters struggle with.
        </p>
      </Section>

      <Collapsible title="Quick Reference Table" icon="📊" defaultOpen>
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Frames</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Standing</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>While Standing</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-10</td>
                <td style={{ padding: '8px' }}><code>1,4</code></td>
                <td style={{ padding: '8px' }}>—</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-11</td>
                <td style={{ padding: '8px' }}><code>1,4</code></td>
                <td style={{ padding: '8px' }}><code>ws4</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-12</td>
                <td style={{ padding: '8px' }}><code>2,1</code></td>
                <td style={{ padding: '8px' }}><code>ws4</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-13</td>
                <td style={{ padding: '8px' }}><code>3,1</code> (range)</td>
                <td style={{ padding: '8px' }}><code>ws1,2</code> (heat)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-14</td>
                <td style={{ padding: '8px' }}><code>b+1</code> / <code>b+2,1</code></td>
                <td style={{ padding: '8px' }}><code>ws2,4</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-15+</td>
                <td style={{ padding: '8px' }}><code>df+2,3</code> (launch)</td>
                <td style={{ padding: '8px' }}><code>ws3</code> (launch)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-18+</td>
                <td style={{ padding: '8px' }}><code>b,f+4</code> (launch)</td>
                <td style={{ padding: '8px' }}><code>ws3</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>

      <Collapsible title="Suggested Whiff Punishes" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Follow-up</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ padding: '8px' }}>Knockdown, wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i14</td>
                <td style={{ padding: '8px' }}>f,f+1+2 (grants GRF)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+2,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ padding: '8px' }}>Full combo</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+4,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ padding: '8px' }}>d+4 guaranteed</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b,f+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ padding: '8px' }}>Full combo (best range)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
