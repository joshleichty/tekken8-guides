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
      intro="When opponents make unsafe moves, punish them. Dragunov's punishment isn't the flashiest, but his standing punishes give plus frames and his while standing punishes are elite."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Learn Heat System"
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
            <li><strong>Plus frames</strong> — Many of Dragunov's punishes are plus on hit</li>
            <li><strong>Momentum</strong> — Turn their aggression into your offense</li>
          </ul>
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
            <p><code style={{ color: 'var(--accent)' }}>2,1</code> — Your main punish. +8 on hit, access to SNK with df.</p>
            <p><code style={{ color: 'var(--accent)' }}>1,3</code> — Alternative with more range for pushback moves.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Both give plus frames on hit. 2,1 is preferred for SNK access.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>12 Frame (-12)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>4,1</code> — More damage than 2,1, +8 on hit.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Second hit is high but still combo from first hit.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>14 Frame (-14)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>b+4,3</code> — Heat engager! Wall splats. Your main -14 punish.</p>
            <p><code style={{ color: 'var(--accent)' }}>uf+1</code> — More damage at range, guaranteed crouch throw after.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              b+4,3 activates heat on heat dash. uf+1 for max damage.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent-secondary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent-secondary)' }}>15 Frame (-15 or worse)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>df+2</code> — LAUNCH PUNISH. Full combo.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              If it's -15 or worse, launch them. 60-70 damage.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>17 Frame (-17 or worse)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>f+1+2</code> — Long range knockdown for big pushback moves.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Use when df+2 would whiff due to pushback.
            </p>
          </div>
        </div>
      </Section>

      <Section title="While Standing Punishment">
        <p>
          After you block a low attack, you're crouching. These are your punishes from crouch.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--success)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--success)' }}>10 Frame</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>FC d+1</code> — Crouch jab for quick check.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Not a great punish, but fast and safe.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>11 Frame (-11 to -12)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws+4</code> — Fast mid, +6 on hit.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Your default WS punish. Quick and safe.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>12 Frame (-12 to -14)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws+1+2</code> — Heat engager! Wall splats. Best 12f option.</p>
            <p><code style={{ color: 'var(--accent)' }}>ws+1,3</code> — More damage, knockdown, wall splat.</p>
            <p><code style={{ color: 'var(--accent)' }}>ws+1,2</code> — Most range, wall splat, keeps them standing.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              ws+1+2 for heat, ws+1,3 for damage, ws+1,2 for wall splat at range.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>15 Frame (-15 or worse)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws+2</code> — LAUNCH PUNISH from crouch. Full combo.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Elite i15 ws launcher. Many characters don't get this until i16 or worse.
            </p>
          </div>
        </div>

        <TipBox variant="tip" title="ws+1+2 is Special">
          Dragunov's i12 ws+1+2 is a heat engager that wall splats. This is incredibly rare — 
          most characters get much weaker 12f ws punishes. Abuse this.
        </TipBox>
      </Section>

      <Section title="Whiff Punishment">
        <p>
          When opponents miss (whiff) an attack, punish their recovery. This is where 
          Dragunov's movement and launchers shine.
        </p>

        <KeyConcept title="Best Whiff Punishes" icon="🎯">
          <ul>
            <li><code>qcf+1</code> — Fast high launcher, safe. Your go-to.</li>
            <li><code>df+2</code> — Mid launcher for crouching opponents.</li>
            <li><code>4,1</code> — Quick punish, +8 on hit.</li>
            <li><code>b+4,3</code> — Heat engager option for bigger whiffs.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="qcf+1 for Whiffs">
          qcf+1 is your primary whiff punisher. It's fast (i15-16), launches on hit, 
          and is safe on block (-8). When you see a whiff, qcf+1 into full combo.
        </TipBox>
      </Section>

      <Section title="Punishment with Pushback">
        <p>
          Some moves push back on block, making normal punishes whiff. Dragunov has options:
        </p>

        <KeyConcept title="Long Range Punishes" icon="📏">
          <ul>
            <li><code>qcf+1</code> — Advances forward, reaches far</li>
            <li><code>qcf+2</code> — Mid launcher option at range</li>
            <li><code>uf+1</code> — i14, good range, guaranteed crouch throw</li>
            <li><code>f+1+2</code> — Knockdown at range</li>
          </ul>
        </KeyConcept>

        <p>
          Examples: Deathfist, shoulder moves, electrics with pushback. When in doubt, 
          qcf+1 or qcf+4 for their range.
        </p>
      </Section>

      <Section title="Punishing Crouching Opponents">
        <p>
          Some moves leave opponents crouching (like when they block your low). 
          Adjust your punishes:
        </p>

        <KeyConcept title="Against Crouching" icon="⬇️">
          <ul>
            <li><code>df+1</code> — Safe mid poke, starts pressure</li>
            <li><code>df+4</code> — i12, use instead of 4,1</li>
            <li><code>df+2</code> — Launches crouching opponents</li>
          </ul>
        </KeyConcept>
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
                <td style={{ padding: '8px' }}><code>2,1</code> or <code>1,3</code></td>
                <td style={{ padding: '8px' }}><code>FC d+1</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-11</td>
                <td style={{ padding: '8px' }}><code>2,1</code></td>
                <td style={{ padding: '8px' }}><code>ws+4</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-12</td>
                <td style={{ padding: '8px' }}><code>4,1</code></td>
                <td style={{ padding: '8px' }}><code>ws+1,3</code> or <code>ws+1+2</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-14</td>
                <td style={{ padding: '8px' }}><code>b+4,3</code> or <code>uf+1</code></td>
                <td style={{ padding: '8px' }}><code>ws+1+2</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-15+</td>
                <td style={{ padding: '8px' }}><code>df+2</code> (launch!)</td>
                <td style={{ padding: '8px' }}><code>ws+2</code> (launch!)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>

      <Section title="Common Matchup Punishes">
        <KeyConcept title="Character-Specific Punishes" icon="👤">
          <ul>
            <li><strong>Paul Deathfist</strong> — f+1+2 or qcf+1 for range</li>
            <li><strong>Kazuya db+1,2</strong> — f,f+2 → f+1+2</li>
            <li><strong>Snake Edges</strong> — ws+4 float → combo</li>
            <li><strong>King JGS 4</strong> — ws+4 float</li>
            <li><strong>Jack d+1+2</strong> — f+1+2</li>
          </ul>
        </KeyConcept>
      </Section>

      <Collapsible title="Practice Routine" icon="🏋️">
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Set these up in practice mode to drill punishment:
          </p>

          <ol>
            <li style={{ marginBottom: '12px' }}>
              <strong>-10 Practice</strong>: Record opponent doing a -10 move → punish with 2,1
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>-12 Practice</strong>: Record opponent doing a -12 move → punish with 4,1
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>-14 Practice</strong>: Record opponent doing a -14 move → punish with b+4,3
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>-15 Practice</strong>: Record opponent doing a -15 move → launch with df+2
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>WS Practice</strong>: Record opponent doing a -12 low → punish with ws+1+2
            </li>
            <li>
              <strong>Whiff Practice</strong>: Set opponent to whiff → punish with qcf+1
            </li>
          </ol>

          <p style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
            10 reps each, then move on. Punishment is about recognition and muscle memory — 
            the more you practice, the faster you'll react in matches.
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
