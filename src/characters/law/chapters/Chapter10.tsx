import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Frame Traps & Setups"
      intro="Law's pressure game is built on frame traps — situations where opponents pressing buttons gets them counter-hit. Here's how to set up and execute these traps."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Heat System"
    >
      <Section title="What is a Frame Trap?">
        <p>
          A <span className="highlight">frame trap</span> is when you use your frame advantage 
          to make the opponent's fastest attacks lose to yours. If you're +3 and do a 17-frame 
          move, it effectively comes out at "14 frames" from their perspective.
        </p>

        <KeyConcept title="Frame Trap Math" icon="🔢">
          <p>Your move speed - Your advantage = "Effective" speed</p>
          <ul style={{ marginTop: '12px' }}>
            <li><strong>+1 (jab) + i20 (f+1+2)</strong> = Beats anything slower than i19</li>
            <li><strong>+3 (db+3) + i10 (jab)</strong> = Beats anything slower than i7 (nothing!)</li>
            <li><strong>+3 (f+1+2) + i10 (jab)</strong> = Your jab wins every time</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Jab Frame Traps">
        <p>
          Law's jab is +1 on block. From here, you have several frame traps:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>1 → 1,1,1</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              At +1, your 10f jab beats their 10f jab. If they press anything, 1,1,1 counter-hits 
              and confirms into Heat engager. Your main 10f CH trap.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>1 → f+1+2</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              f+1+2 is i20 but counter-hit launches. At +1, it beats anything slower than i19. 
              If they press ANYTHING, you get a full combo. Plus frames even if blocked.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--accent)' }}>1 → df+1</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              df+1 is i13. At +1, it beats anything i12 or slower. Safe option to continue 
              pressure without committing to counter-hit risk.
            </p>
          </div>
        </div>

        <TipBox variant="tip" title="Mix Your Traps">
          Don't always go for 1,1,1. If opponents are respecting your jab, use db+3 for the 
          low or f+1+2 for the CH launcher. If they're mashing, 1,1,1 confirms the counter-hit.
        </TipBox>
      </Section>

      <Section title="Plus Frame Setups">
        <p>
          After these plus frame moves, you have strong frame traps:
        </p>

        <KeyConcept title="After f+1+2 (+3 on block)" icon="🔨">
          <ul>
            <li><strong>Jab</strong> — Your i10 jab beats their i12 or slower</li>
            <li><strong>1,1,1</strong> — CH confirm if they press</li>
            <li><strong>df+1</strong> — Mid check, beats anything i16+</li>
            <li><strong>b+4</strong> — Homing mid to catch stepping</li>
            <li><strong>Crouch → slide</strong> — They respect? Go low</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="After db+3 (+3 on hit)" icon="👇">
          <ul>
            <li><strong>Jab into 1,1,1</strong> — CH confirm trap</li>
            <li><strong>f+1+2</strong> — CH launcher trap</li>
            <li><strong>b+4</strong> — Catches stepping, beats slow mids</li>
            <li><strong>df+1</strong> — Safe mid check</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            db+3 leaves them crouching, so they often try ws+4. Your jab will beat that.
          </p>
        </KeyConcept>

        <KeyConcept title="After ws+4~f (+5 DSS)" icon="⚡">
          <ul>
            <li><strong>DSS.2</strong> — +1 high, CH launches</li>
            <li><strong>DSS.f+1</strong> — i14 mid heat engager</li>
            <li><strong>DSS.f+4</strong> — Legend Kick, +7 on block (can be ducked)</li>
            <li><strong>DSS → df → slide</strong> — Go into slide mixup</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Knowledge Check Setups">
        <p>
          These work against opponents who don't know the matchup:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>4,u+3 → d+2,3</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Classic scrub killer. 4,u+3 is -1 on block, d+2,3 comes out at i11 and CH launches. 
              If they press anything, they die. <strong>Don't use this on anyone who knows the matchup.</strong>
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>4,3 (No DSS)</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Both hits are high. Anyone who knows to duck will launch you. But in Heat mode, 
              the auto-parry makes this more viable. Still risky.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
            <div style={{ marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--warning)' }}>uf+1,3</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              The second hit is a low that can be low parried. Knowledgeable players will 
              parry this every time. Use the uf+1 alone and threaten the 3.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Wall Pressure Setups">
        <p>
          At the wall, Law's frame traps become even scarier:
        </p>

        <KeyConcept title="Wall Pressure Flow" icon="🧱">
          <ol>
            <li><strong>f+1+2</strong> — Plus on block, threatens wall splat on CH</li>
            <li><strong>1,1,1 / 1,2,2,1+2</strong> — Wall splat strings</li>
            <li><strong>b+1,2,2</strong> — Tracks right, heat engager, wall splat</li>
            <li><strong>Junkyard (b+2,3,4)</strong> — Safe on block, CH launcher</li>
            <li><strong>ss+2 / ss+3</strong> — 50/50 mixup</li>
            <li><strong>wr+3</strong> — +6 on block, chip damage</li>
            <li><strong>DSS f+4</strong> — Legend Kick for chip</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The Wall Loop">
          Wall: f+1+2 → stay crouching → ws+4~f → DSS pressure → repeat. 
          Mix in slides, uf+3, and jab strings. Opponents have to guess constantly.
        </TipBox>
      </Section>

      <Section title="Oki Setups">
        <p>
          After knockdowns, these setups continue your pressure:
        </p>

        <KeyConcept title="After Slide" icon="💀">
          <ul>
            <li><strong>Turn around → 1+2</strong> — Guaranteed on most wakeup options</li>
            <li><strong>If they don't roll</strong> — 1+2 is guaranteed again</li>
            <li><strong>If they back roll and stand</strong> — They can block 1+2</li>
            <li><strong>After back roll</strong> — Dash → crouch → slide/uf+3 mixup</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="After 3+4,4" icon="🦶">
          <ul>
            <li><strong>Dash → uf+3+4</strong> — Stomp hits grounded, not guaranteed</li>
            <li><strong>Dash → 1+2</strong> — Catches some wakeup options</li>
            <li><strong>Run up → crouch</strong> — Slide/uf+3 mixup on wakeup</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Respect Tech Options">
          Good players will tech roll, get-up kick, or spring attack. Don't blindly rush in. 
          Sometimes the best oki is just maintaining good spacing and waiting for them to act.
        </TipBox>
      </Section>

      <Collapsible title="Frame Trap Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Setup</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Advantage</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Best Follow-up</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>1 on block</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ padding: '8px' }}>1,1,1 / f+1+2 / db+3</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+1+2 on block</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3</td>
                <td style={{ padding: '8px' }}>Jab / df+1 / slide mixup</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+3 on hit</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3</td>
                <td style={{ padding: '8px' }}>1,1,1 / f+1+2 / b+4</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+4~f on block</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+5 (DSS)</td>
                <td style={{ padding: '8px' }}>DSS.2 / DSS.f+1 / slide</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+3 on block</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+16 (DSS)</td>
                <td style={{ padding: '8px' }}>Anything (you're massively plus)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>wr+3 on block</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px' }}>1+2 / f+1+2 / jabs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
