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
      number={11}
      title="Punishment"
      intro="Jin has some of the best punishment in Tekken 8. When opponents make mistakes, you should make them pay. Here's every punish you need to know."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Bringing Jin Together"
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

        <TipBox variant="tip" title="How to Know What's Punishable">
          In practice mode, set the CPU to do a move and try your punishes. If "Punish" 
          appears, it works. Over time, you'll learn what's punishable by matchup knowledge.
        </TipBox>
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
            <p><code style={{ color: 'var(--accent)' }}>2,4</code> — Your go-to. Wall splats, ZEN transition with <code>~f</code></p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Alternative: <code>1,2</code> if you want extensions (1,2,3 for safety)
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>12 Frame (-12)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>b+1,2</code> — Tornado move, wall splats, more damage than 2,4</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Use this instead of 2,4 when you need the extra damage
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>13 Frame (-13)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>1+2</code> — Heat engager. Use to activate Heat.</p>
            <p><code style={{ color: 'var(--accent)' }}>df+1,4</code> — More damage, good range, wall splats on CH</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              1+2 is -14 but you're going into Heat anyway
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent-secondary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent-secondary)' }}>14 Frame (-14)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>f+1+2</code> — Long range, wall splats, knockdown</p>
            <p><code style={{ color: 'var(--accent)' }}>f+3,1</code> — Heat engager option</p>
            <p><code style={{ color: 'var(--accent)' }}>4,3,1</code> — In Heat, confirmable heat dash launcher</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              EWHF is technically i14 but requires perfect execution
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>15 Frame (-15 or worse)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>d+3+4</code> — Hopkick. Launch punish!</p>
            <p><code style={{ color: 'var(--accent)' }}>uf+4</code> — Alternative hopkick</p>
            <p><code style={{ color: 'var(--accent)' }}>EWHF</code> — For the execution gods</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              If it's -15 or worse, launch them. Full combo.
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
            <p><code style={{ color: 'var(--accent)' }}>ws4,4</code> — Fast, good damage, leaves you +4</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Your default WS punish. 28 damage, continue pressure.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>13 Frame (-13)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws1,3,2,1,4,2</code> — The Kazama Combo</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              37 damage, knockdown. The full string is: ws1,3,2,1,4,2
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>14 Frame (-14 or worse)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws2</code> — LAUNCH PUNISH. Full combo.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Jin has one of the best ws2s in the game. i14, launch punish, easy conversion.
            </p>
          </div>
        </div>

        <TipBox variant="tip" title="ws2 is Elite">
          Many characters don't get launch punishes until ws15 or ws16. Jin's ws2 at i14 is 
          privileged. Learn what lows are -14 and launch punish every time.
        </TipBox>
      </Section>

      <Section title="Whiff Punishment">
        <p>
          When an opponent misses an attack (whiffs), you punish the recovery. This requires 
          reading their spacing and timing.
        </p>

        <KeyConcept title="Best Whiff Punishes" icon="🎯">
          <ul>
            <li><code>EWHF</code> — The best. i11, launches, massive damage.</li>
            <li><code>f+4</code> — Safe and long range. CH launches, NH is +4.</li>
            <li><code>ff+2</code> — Good range heat engager.</li>
            <li><code>b+2,1</code> — Long range, safe, good damage.</li>
            <li><code>f+1+2</code> — When you need reach but not a launch.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Whiff Punishing with Electric">
          The Electric is Jin's best whiff punisher because it's fast (i11) and launches. 
          Practice doing EWHF when you see a whiff. This alone will carry you to higher ranks.
        </TipBox>
      </Section>

      <Section title="Punishment with Pushback">
        <p>
          Some moves push back on block, making normal punishes whiff. Jin has tools for these:
        </p>

        <KeyConcept title="Long Range Punishes" icon="📏">
          <ul>
            <li><code>f+4,2</code> — Massive range, -7 on block</li>
            <li><code>b+2,1</code> — Good range, -9 on block</li>
            <li><code>f+1+2</code> — Decent range, knockdown</li>
            <li><code>dash → EWHF</code> — If you have execution</li>
          </ul>
        </KeyConcept>

        <p>
          Examples: Deathfist, some shoulder moves, magic 4s with pushback. When in doubt, 
          use f+4,2 for its range.
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
                <td style={{ padding: '8px' }}><code>2,4</code></td>
                <td style={{ padding: '8px' }}>—</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-11</td>
                <td style={{ padding: '8px' }}><code>2,4</code></td>
                <td style={{ padding: '8px' }}><code>ws4,4</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-12</td>
                <td style={{ padding: '8px' }}><code>b+1,2</code></td>
                <td style={{ padding: '8px' }}><code>ws4,4</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-13</td>
                <td style={{ padding: '8px' }}><code>1+2</code> / <code>df+1,4</code></td>
                <td style={{ padding: '8px' }}><code>ws1,3,2,1,4,2</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-14</td>
                <td style={{ padding: '8px' }}><code>f+1+2</code> / <code>f+3,1</code></td>
                <td style={{ padding: '8px' }}><code>ws2</code> (launch!)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-15+</td>
                <td style={{ padding: '8px' }}><code>d+3+4</code> (launch!)</td>
                <td style={{ padding: '8px' }}><code>ws2</code> (launch!)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>

      <Collapsible title="Practice Routine" icon="🏋️" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Set these up in practice mode to drill punishment:
          </p>

          <ol>
            <li style={{ marginBottom: '12px' }}>
              <strong>-10 Practice</strong>: Record opponent doing a -10 move → punish with 2,4
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>-12 Practice</strong>: Record opponent doing a -12 move → punish with b+1,2
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>-15 Practice</strong>: Record opponent doing a -15 move → launch with d+3+4
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>WS Practice</strong>: Record opponent doing a -14 low → launch with ws2
            </li>
            <li>
              <strong>Whiff Practice</strong>: Set opponent to whiff → punish with EWHF or f+4
            </li>
          </ol>

          <p style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
            10 reps each, then move on. Punishment is about recognition and reaction — 
            the more you see it, the faster you'll punish.
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
