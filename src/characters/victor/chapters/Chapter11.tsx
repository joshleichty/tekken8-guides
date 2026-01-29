import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Punishment"
      intro="Victor has excellent punishment across all frame ranges. His punishes have great range, wall splat, and heat engage options. Learn these and you'll make opponents pay for every mistake."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Frame Traps & Pressure"
    >
      <Section title="What is Punishment?">
        <KeyConcept title="Punishment Basics" icon="⚖️">
          <ul>
            <li><strong>Punishment</strong> — Hitting opponents after blocking their unsafe move</li>
            <li><strong>Unsafe</strong> — Moves that are -10 or worse on block</li>
            <li><strong>Launch punishable</strong> — Moves that are -15 or worse</li>
            <li><strong>Free damage</strong> — They can't block your punish</li>
          </ul>
        </KeyConcept>

        <p>
          Victor's punishment is <span className="highlight">elite</span>. He has punishes with 
          great range, wall splat options, and heat engagers at multiple frame levels.
        </p>
      </Section>

      <Section title="Standing Punishment">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--success)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--success)' }}>10 Frame (-10 to -11)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>1,1,2</code> — 27 damage, hit confirmable, ~f to PRF</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Your default punish. Can transition to PRF at +7 on hit.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>12 Frame (-12)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>2,2,2</code> — 33 damage, goes to IAI (+4)</p>
            <p><code style={{ color: 'var(--accent)' }}>3,1+2</code> — 30 damage, +5 frames</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              2,2,2 gives stance mixup; 3,1+2 gives frame advantage.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>13 Frame (-13)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>uf+1,1</code> — 30 damage, wall splats!, ~f to PRF</p>
            <p><code style={{ color: 'var(--accent)' }}>df+4,2</code> — 31 damage, +4 in IAI</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              uf+1,1 wall splats and can stance cancel. df+4,2 gives IAI mixup.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent-secondary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent-secondary)' }}>14 Frame (-14)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>f+4,1</code> — 36 damage, <strong>heat engager!</strong>, wall splats</p>
            <p><code style={{ color: 'var(--accent)' }}>f+4,2</code> — 35 damage, +5c, no heat</p>
            <p><code style={{ color: 'var(--accent)' }}>df+3+4</code> — 28 damage, wall splats</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              f+4,1 is usually best — heat engage or heat dash for combo.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>15 Frame (-15 or worse)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>df+2</code> — LAUNCH PUNISH. Full combo (60+ damage)</p>
            <p><code style={{ color: 'var(--accent)' }}>uf+4</code> — Alternative launch</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Always launch -15 or worse moves. Free combo.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--text-muted)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>17 Frame (Long Range)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>b+3,1</code> — 40 damage, amazing range</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              For pushback moves like Deathfist. Range 2.8-2.9.
            </p>
          </div>
        </div>
      </Section>

      <Section title="While Standing Punishment">
        <p>
          These punishes are for after you block a low attack (you're in crouch).
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--success)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--success)' }}>11 Frame (-11 to -12)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws4</code> — 16 damage, standard</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Basic ws punish. Nothing special but consistent.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>13 Frame (-13)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws1+2</code> — 22 damage, +8 on hit, ~f to PRF</p>
            <p><code style={{ color: 'var(--accent)' }}>uf+1,1</code> — 30 damage, wall splats (works from crouch!)</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              uf+1,1 works from crouch due to uf input. Great ws punish.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>15 Frame (-15 or worse)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws1</code> — LAUNCH PUNISH. Full combo</p>
            <p><code style={{ color: 'var(--accent)' }}>uf+4</code> — Alternative launch</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Both are i15. Launch punish all -15 lows.
            </p>
          </div>
        </div>

        <TipBox variant="tip" title="uf+1,1 From Crouch">
          Because uf+1,1 requires an up-forward input, it naturally works as a ws punish. 
          This gives Victor an i13 wall splatting ws punish — very strong.
        </TipBox>
      </Section>

      <Section title="Whiff Punishment">
        <KeyConcept title="Best Whiff Punishes" icon="🎯">
          <ul>
            <li><code>df+2</code> — Best. i15 launcher with good range.</li>
            <li><code>f,f+2</code> — Great range, tornado.</li>
            <li><code>1+2</code> — If close enough, CH launcher (even on whiff punish).</li>
            <li><code>b+3,1</code> — For maximum range whiff punishment.</li>
            <li><code>uf+1,1</code> — Good range, wall splats.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Whiff Punish Practice">
          In practice mode, set opponent to do a move with bad recovery (like a hopkick). 
          Practice recognizing the whiff and responding with df+2 → full combo. This is 
          where big damage comes from.
        </TipBox>
      </Section>

      <Section title="Matchup-Specific Punishes">
        <KeyConcept title="Long Range Punishes" icon="📏">
          <p>Some moves push back on block, making normal punishes whiff:</p>
          <ul>
            <li><strong>Paul's Deathfist</strong> → <code>b+3,1</code> (i17, good range)</li>
            <li><strong>Kazuya's db+1,2</strong> → <code>b+3,1</code></li>
            <li><strong>Claudio's f+2,2</strong> → <code>f,f+2</code> (dash)</li>
            <li><strong>Heihachi's f,f+2</strong> → <code>b+3,1</code></li>
            <li><strong>Jack's d+1+2</strong> → <code>b+3,1</code></li>
          </ul>
        </KeyConcept>
      </Section>

      <Collapsible title="Punishment Quick Reference" icon="📊" defaultOpen>
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
                <td style={{ padding: '8px' }}><code>1,1,2</code> (27)</td>
                <td style={{ padding: '8px' }}>—</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-11</td>
                <td style={{ padding: '8px' }}><code>1,1,2</code> (27)</td>
                <td style={{ padding: '8px' }}><code>ws4</code> (16)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-12</td>
                <td style={{ padding: '8px' }}><code>2,2,2</code> (33) or <code>3,1+2</code> (30)</td>
                <td style={{ padding: '8px' }}><code>ws4</code> (16)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-13</td>
                <td style={{ padding: '8px' }}><code>uf+1,1</code> (30, wall splat)</td>
                <td style={{ padding: '8px' }}><code>uf+1,1</code> (30, wall splat)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-14</td>
                <td style={{ padding: '8px' }}><code>f+4,1</code> (36, heat engager)</td>
                <td style={{ padding: '8px' }}><code>uf+1,1</code> (30)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-15+</td>
                <td style={{ padding: '8px' }}><code>df+2</code> (launch!)</td>
                <td style={{ padding: '8px' }}><code>ws1</code> (launch!)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-17 (range)</td>
                <td style={{ padding: '8px' }}><code>b+3,1</code> (40)</td>
                <td style={{ padding: '8px' }}>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>

      <Collapsible title="Practice Routine" icon="🏋️">
        <div style={{ marginTop: '12px' }}>
          <ol>
            <li style={{ marginBottom: '12px' }}>
              <strong>-10 Practice</strong>: Record opponent doing -10 move → punish with 1,1,2
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>-13 Practice</strong>: Record opponent doing -13 move → punish with uf+1,1
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>-14 Practice</strong>: Record opponent doing -14 move → punish with f+4,1
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>-15 Practice</strong>: Record opponent doing -15 move → launch with df+2
            </li>
            <li>
              <strong>Whiff Practice</strong>: Set opponent to whiff → punish with df+2 → combo
            </li>
          </ol>
        </div>
      </Collapsible>
    </Chapter>
  )
}
