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
      intro="Law has solid punishment at every frame level. When opponents make mistakes, make them pay. Consistent punishment is the difference between good and great players."
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
            Good punishment separates intermediate players from good ones. Learn your punishes 
            and use them consistently.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Standing Punishment">
        <p>
          These punishes are for when you block an unsafe move while standing:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--success)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--success)' }}>10 Frame (-10 to -11)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>1,1,2</code> — Standard 10f punish</p>
            <p><code style={{ color: 'var(--accent)' }}>1,2</code> — Alternative with DSS transition (<code>1,2~f</code>)</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              1,1,2 does more damage. 1,2 lets you go into DSS for plus frames.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>12 Frame (-12)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>3,4</code> — Good damage, knockdown</p>
            <p><code style={{ color: 'var(--accent)' }}>uf+1</code> — Situational, less damage</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              3,4 is your main 12f punish. Both hits are high though.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>13 Frame (-13)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>df+1,2</code> — Good damage, good range</p>
            <p><code style={{ color: 'var(--accent)' }}>4,3~f</code> — DSS transition for plus frames</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              df+1,2 is enhanced in Heat mode. 4,3~f is +8 in DSS but both hits are high.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent-secondary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent-secondary)' }}>14 Frame (-14)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>3+4,4</code> — Your main whiff punisher, great damage</p>
            <p><code style={{ color: 'var(--accent)' }}>b+4,3</code> — Wall splat punisher, good range</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              3+4,4 is Law's signature punisher. b+4,3 is better near walls.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>15 Frame (-15 or worse)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>df+2</code> — Launch punish! Full combo.</p>
            <p><code style={{ color: 'var(--accent)' }}>uf+4</code> — Alternative hopkick</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              If it's -15 or worse, launch them. Full combo damage.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>18 Frame (-18 or worse)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>UF+4,3</code> — Flip kicks for max damage</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Use flip kicks when you block something very unsafe (-18+).
            </p>
          </div>
        </div>
      </Section>

      <Section title="While Standing Punishment">
        <p>
          After blocking a low attack, you're in crouch. These are your punishes:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--success)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--success)' }}>11 Frame (-11 to -12)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws+4</code> — Fast mid, can go to DSS with <code>~f</code></p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              ws+4 is only 14 damage, but ws+4~f gives +5 in DSS for continued pressure.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>13 Frame (-13)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws+1,2</code> — More damage than ws+4</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              35 damage, knockdown. Delayable second hit.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>14 Frame (-14)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws+3+4</code> — Flip kick from crouch, risky</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Launches but is -21 if blocked. Only use as punishment, not neutral.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>15 Frame (-15 or worse)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws+2</code> — LAUNCH PUNISH. Full combo.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Law's ws+2 is i15, standard launch punish from crouch.
            </p>
          </div>
        </div>

        <TipBox variant="tip" title="ws+4 is Special">
          Most characters use ws+4 just for damage. Law uses ws+4~f to get +5 DSS pressure. 
          Even on -11 lows, consider if you want damage (ws+4) or pressure (ws+4~f → DSS).
        </TipBox>
      </Section>

      <Section title="Whiff Punishment">
        <p>
          When opponents miss attacks, you punish the recovery:
        </p>

        <KeyConcept title="Best Whiff Punishes" icon="🎯">
          <ul>
            <li><code>3+4,4</code> — Great range, good damage, i14</li>
            <li><code>df+2</code> — Launch punish, safe</li>
            <li><code>b+4,3</code> — Wall splat, good range</li>
            <li><code>1+2</code> — Long range in Heat (becomes safe launcher)</li>
            <li><code>b+2</code> — Quick check at range, can confirm into junkyard</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Pushback Punishment">
          Some moves push back on block, making normal punishes whiff. Use:
          <ul style={{ marginTop: '8px' }}>
            <li><code>3+4,4</code> — Great range</li>
            <li><code>1+2</code> — Good range, especially in Heat</li>
            <li><code>f+1+2</code> — Decent range mid</li>
          </ul>
        </TipBox>
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
                <td style={{ padding: '8px' }}><code>1,1,2</code> / <code>1,2</code></td>
                <td style={{ padding: '8px' }}>—</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-11</td>
                <td style={{ padding: '8px' }}><code>1,1,2</code></td>
                <td style={{ padding: '8px' }}><code>ws+4</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-12</td>
                <td style={{ padding: '8px' }}><code>3,4</code></td>
                <td style={{ padding: '8px' }}><code>ws+4</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-13</td>
                <td style={{ padding: '8px' }}><code>df+1,2</code> / <code>4,3~f</code></td>
                <td style={{ padding: '8px' }}><code>ws+1,2</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-14</td>
                <td style={{ padding: '8px' }}><code>3+4,4</code> / <code>b+4,3</code></td>
                <td style={{ padding: '8px' }}><code>ws+3+4</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-15+</td>
                <td style={{ padding: '8px' }}><code>df+2</code> (launch!)</td>
                <td style={{ padding: '8px' }}><code>ws+2</code> (launch!)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-18+</td>
                <td style={{ padding: '8px' }}><code>UF+4,3</code> (max damage)</td>
                <td style={{ padding: '8px' }}><code>ws+2</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>

      <Collapsible title="Practice Routine" icon="🏋️" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Set up these drills in practice mode:
          </p>

          <ol>
            <li style={{ marginBottom: '12px' }}>
              <strong>-10 Practice</strong>: Record opponent doing -10 move → punish with 1,1,2
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>-12 Practice</strong>: Record opponent doing -12 move → punish with 3,4
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>-14 Practice</strong>: Record opponent doing -14 move → punish with 3+4,4
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>-15 Practice</strong>: Record opponent doing -15 move → launch with df+2
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>WS Practice</strong>: Record opponent doing -14 low → launch with ws+2
            </li>
            <li>
              <strong>Whiff Practice</strong>: Set opponent to whiff → punish with 3+4,4 or df+2
            </li>
          </ol>

          <p style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
            10 reps each, then move on. Punishment is about recognition and muscle memory.
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
