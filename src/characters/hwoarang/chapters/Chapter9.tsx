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
      intro="Hwoarang has excellent punishment across all frame windows. When opponents make mistakes, make them pay — and go straight into your pressure."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Frame Traps & Pressure"
    >
      <Section title="What is Punishment?">
        <p>
          <span className="highlight">Punishment</span> is hitting your opponent after you 
          block their unsafe move. If a move is -10 or worse on block, you can punish it.
        </p>

        <KeyConcept title="Why Punishment Matters for Hwoarang" icon="⚖️">
          <ul>
            <li><strong>Free damage</strong> — Guaranteed hits they can't avoid</li>
            <li><strong>Stance entry</strong> — Your punishes go to RFS for pressure</li>
            <li><strong>Mental pressure</strong> — Makes them afraid to attack</li>
            <li><strong>Momentum</strong> — Punishment → pressure → damage</li>
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
              <span style={{ fontWeight: 600, color: 'var(--success)' }}>10 Frame (-10)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>2,f+3</code> — Safe mid ender, good damage (15 + 14)</p>
            <p><code style={{ color: 'var(--accent)' }}>1,2,3</code> or <code style={{ color: 'var(--accent)' }}>1,2,4</code> — Go to flamingo for pressure</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              <strong>Recommended:</strong> 1,2,4 → RFS for pressure after the punish
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--success)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--success)' }}>11 Frame (-11)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>4,3</code> — High-mid, safe (-6), wall splats on CH</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Best 11f punish in the game tier. Use this often.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>13 Frame (-13)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>df+1,3</code> — Mid string, goes to LFS</p>
            <p><code style={{ color: 'var(--accent)' }}>df+3+4</code> — <strong>Heat engager!</strong> Use this when you want Heat</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              df+3+4 is key — 13f punish that activates Heat AND continues pressure
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>14 Frame (-14)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>uf+3+4,4</code> — Double kick with follow-up, goes to RFF</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              More damage than 13f options. Good reach.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>15 Frame (-15)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>df+2</code> — <strong>Launch punish!</strong> Full combo.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              If it's -15, launch them. Always.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>16 Frame (-16+)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>b+3</code> — <strong>Best whiff punisher.</strong> Massive range launcher.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              b+3 is -19 on block, but you're punishing so it doesn't matter.
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
              <span style={{ fontWeight: 600, color: 'var(--success)' }}>11 Frame (ws -11)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws4,4</code> — Fast, good damage, goes to RFF at +4</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Your default WS punish. Always use this for -11 to -13 lows.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>12 Frame (ws -12)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws1,4</code> — New in T8! Plus frames on hit, LFS transition</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              More damage than ws4,4 but same speed. Use when you want LFS pressure.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>14 Frame (ws -14)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws3</code> — Knockdown, +14 on hit guarantees follow-up</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              After ws3 hits, ff+3 or b+3 are guaranteed. Or start pressure with d+3,4.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--danger)' }}>15 Frame (ws -15)</span>
            </div>
            <p><code style={{ color: 'var(--accent)' }}>ws2,3</code> — <strong>Launch punish!</strong> Full combo.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Hwoarang finally has a WS launcher. Use it on all -15 lows.
            </p>
          </div>
        </div>

        <TipBox variant="warning" title="ws2,3 Range">
          ws2,3 has mediocre range. Against lows with big pushback (like some snake edges), 
          it might whiff. In those cases, do a crouch cancel into b+3 instead: 
          tap up to stand → b+3 launches.
        </TipBox>
      </Section>

      <Section title="Whiff Punishment">
        <p>
          When opponents miss attacks, punish the recovery:
        </p>

        <KeyConcept title="Best Whiff Punishes" icon="🎯">
          <ul>
            <li><code>b+3</code> — <strong>THE whiff punisher.</strong> Massive range, launches.</li>
            <li><code>JFSR</code> — Safe mid launcher with good range</li>
            <li><code>4,3</code> — Fast, safe, good for medium whiffs</li>
            <li><code>ff+4</code> — Heat engager with long range</li>
            <li><code>uf+3+4,4</code> — Double kick, goes to RFF</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="b+3 is King">
          b+3 is one of the best whiff punishers in the entire game. The range is ridiculous. 
          Any time you see a whiff at mid to long range, b+3 will reach. Make this your 
          default whiff punish.
        </TipBox>
      </Section>

      <Section title="Punishment to Pressure">
        <p>
          What makes Hwoarang's punishment special is that it leads to pressure:
        </p>

        <KeyConcept title="Punish → Pressure Routes" icon="🔥">
          <ul>
            <li><code>1,2,4</code> → RFS (+3) → Start RFS pressure</li>
            <li><code>df+3+4</code> → Heat activation → Heat pressure</li>
            <li><code>ws4,4</code> → RFF (+4) → RFF 2,4~f → RFS</li>
            <li><code>ws3</code> → ff+3 (guaranteed) → Continue pressure</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Your goal isn't just to punish — it's to convert punishment into stance pressure 
            and snowball the round.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Heat Punish">
        <p>
          df+3+4 is a 13f heat engager. Use it to punish -13 moves and immediately activate Heat:
        </p>

        <KeyConcept title="df+3+4 Heat Punish" icon="🔥">
          <ol>
            <li>Block something -13</li>
            <li>Punish with df+3+4</li>
            <li>Heat activates → Heat Dash forward</li>
            <li>Continue with Heat pressure</li>
          </ol>
          <p style={{ marginTop: '12px' }}>
            This is huge. You're not just punishing — you're activating your best resource 
            AND getting a guaranteed follow-up from Heat Dash.
          </p>
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
                <td style={{ padding: '8px' }}><code>2,f+3</code> / <code>1,2,4</code></td>
                <td style={{ padding: '8px' }}>—</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-11</td>
                <td style={{ padding: '8px' }}><code>4,3</code></td>
                <td style={{ padding: '8px' }}><code>ws4,4</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-12</td>
                <td style={{ padding: '8px' }}><code>4,3</code></td>
                <td style={{ padding: '8px' }}><code>ws1,4</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-13</td>
                <td style={{ padding: '8px' }}><code>df+3+4</code> (Heat!)</td>
                <td style={{ padding: '8px' }}><code>ws4,4</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-14</td>
                <td style={{ padding: '8px' }}><code>uf+3+4,4</code></td>
                <td style={{ padding: '8px' }}><code>ws3</code></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-15+</td>
                <td style={{ padding: '8px' }}><code>df+2</code> (launch!)</td>
                <td style={{ padding: '8px' }}><code>ws2,3</code> (launch!)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>Whiff</td>
                <td style={{ padding: '8px' }}><code>b+3</code></td>
                <td style={{ padding: '8px' }}>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>

      <Collapsible title="Matchup-Specific Punishes" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Some moves require specific punishes due to pushback or recovery:
          </p>

          <p><strong>Slide (generic snake edge)</strong></p>
          <ul style={{ marginBottom: '12px' }}>
            <li>ws2,3 may whiff at max range</li>
            <li>Alternative: crouch cancel → b+3</li>
          </ul>

          <p><strong>Kazuya's db+1,2</strong></p>
          <ul style={{ marginBottom: '12px' }}>
            <li>b+3 close or ff+4</li>
          </ul>

          <p><strong>Paul's Deathfist</strong></p>
          <ul style={{ marginBottom: '12px' }}>
            <li>df+3+4 → b+3 (Heat punish)</li>
          </ul>

          <p><strong>King's Jaguar Step 4</strong></p>
          <ul>
            <li>ws4 float</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
