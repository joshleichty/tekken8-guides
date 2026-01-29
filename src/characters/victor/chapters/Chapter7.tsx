import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Stance Transitions"
      intro="Understanding how to flow between neutral, PRF, and IAI is what separates good Victor players from great ones. This chapter covers all the transitions and when to use each route."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Learn First Combos"
    >
      <Section title="The Three States">
        <KeyConcept title="Victor's States" icon="🔄">
          <ul>
            <li><strong>Neutral</strong> — Normal standing state, can block</li>
            <li><strong>PRF (Perfumer)</strong> — Knife stance, good lows, can't block</li>
            <li><strong>IAI</strong> — Katana stance, wall pressure, can't block</li>
          </ul>
        </KeyConcept>

        <p>
          Victor flows between these states constantly. Understanding when and how to 
          transition is crucial for applying pressure and maintaining momentum.
        </p>
      </Section>

      <Section title="Neutral → PRF Transitions">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <code style={{ color: 'var(--accent)' }}>f+3</code>
            <span style={{ marginLeft: '12px' }}>Manual entry (i20, has punch parry)</span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--success)' }}>
            <code style={{ color: 'var(--success)' }}>2,1~f</code>
            <span style={{ marginLeft: '12px' }}>+7 on hit — <strong>Best transition</strong></span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <code>1,1,2~f</code>
            <span style={{ marginLeft: '12px' }}>+7 on hit (from 10f punish)</span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <code>b+1~f</code>
            <span style={{ marginLeft: '12px' }}>-5 on block, +5 on hit</span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <code>db+1,1~f</code>
            <span style={{ marginLeft: '12px' }}>-5 on block, +4 on hit</span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <code>ws1+2~f</code>
            <span style={{ marginLeft: '12px' }}>+8 on hit (from crouch)</span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <code>FC.1+2~f</code>
            <span style={{ marginLeft: '12px' }}>+6 on hit (low mixup)</span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <code>uf+1,1~f</code>
            <span style={{ marginLeft: '12px' }}>+19gc on hit</span>
          </div>
        </div>

        <TipBox variant="tip" title="Best PRF Entry">
          <code>2,1~f</code> on hit is your bread and butter. It's fast, gives good plus 
          frames, and sets up PRF.1 or PRF.1+2 naturally.
        </TipBox>
      </Section>

      <Section title="Neutral → IAI Transitions">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <code style={{ color: 'var(--accent)' }}>3+4</code>
            <span style={{ marginLeft: '12px' }}>Manual entry (i30)</span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--success)' }}>
            <code style={{ color: 'var(--success)' }}>f,f,f+2~d</code>
            <span style={{ marginLeft: '12px' }}>+5 on block — <strong>Best approach</strong></span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <code>2,2,2</code>
            <span style={{ marginLeft: '12px' }}>+4 on hit (auto transition)</span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <code>qcf+2</code>
            <span style={{ marginLeft: '12px' }}>+4 on hit (auto transition)</span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <code>df+4,2</code>
            <span style={{ marginLeft: '12px' }}>+4 on hit (auto transition, used in combos)</span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <code>f,f,f+1+2</code>
            <span style={{ marginLeft: '12px' }}>+4 on hit (running low)</span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <code>uf+1,1~d/3+4</code>
            <span style={{ marginLeft: '12px' }}>-11 on block, +3 on hit (knowledge check)</span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <code>f+4,2~d</code>
            <span style={{ marginLeft: '12px' }}>+5c on hit (combo ender)</span>
          </div>
        </div>

        <TipBox variant="tip" title="Best IAI Entry">
          <code>f,f,f+2~d</code> on block is incredible — +5 in IAI stance while they're 
          blocking. This sets up all your IAI pressure safely.
        </TipBox>
      </Section>

      <Section title="PRF → IAI Transitions">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <code style={{ color: 'var(--accent)' }}>PRF.3+4</code>
            <span style={{ marginLeft: '12px' }}>Manual transition</span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--success)' }}>
            <code style={{ color: 'var(--success)' }}>PRF.2,2</code>
            <span style={{ marginLeft: '12px' }}>+5 on hit, -4 on block — <strong>Main route</strong></span>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <code>PRF.1+2~d</code>
            <span style={{ marginLeft: '12px' }}>+14 on hit, +6 on block (oki)</span>
          </div>
        </div>

        <KeyConcept title="The PRF → IAI Flow" icon="🌊">
          <ol>
            <li>Enter PRF via <code>2,1~f</code> (+7 on hit)</li>
            <li>Go for <code>PRF.1</code> (low) or <code>PRF.1+2</code> (mid)</li>
            <li>Transition to IAI with <code>PRF.2,2</code></li>
            <li>Apply IAI pressure (IAI.2, IAI.d+1+2)</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="IAI → PRF Transitions">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <code style={{ color: 'var(--accent)' }}>IAI.1,1~f</code>
            <span style={{ marginLeft: '12px' }}>-10 on block, +19gc on hit</span>
          </div>
        </div>

        <p>
          IAI.1,1 can transition to PRF with ~f, but it's less common than other routes. 
          Usually you either stay in IAI or exit to neutral.
        </p>
      </Section>

      <Section title="Exiting Stances">
        <KeyConcept title="Cancelling Stances" icon="🚫">
          <ul>
            <li><strong>PRF exit</strong> — <code>PRF~db</code> or just press db</li>
            <li><strong>PRF to crouch</strong> — <code>PRF~df</code> (crouch dash)</li>
            <li><strong>IAI exit</strong> — <code>IAI~db</code> or <code>IAI~3+4</code></li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Can't Block in Stances">
          Remember: you cannot block in PRF or IAI. If your pressure fails or you're at 
          disadvantage, exit the stance immediately with db.
        </TipBox>
      </Section>

      <Section title="Stance Pressure Routes">
        <KeyConcept title="Basic Pressure Route" icon="📍">
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
            2,1~f → PRF → PRF.1 or PRF.1+2 → PRF.2,2 → IAI → IAI.2 or IAI.d+1+2
          </p>
        </KeyConcept>

        <KeyConcept title="Running Approach Route" icon="🏃">
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
            f,f,f+2~d → IAI → IAI.d+2 or IAI.2 → Continue IAI pressure
          </p>
        </KeyConcept>

        <KeyConcept title="Knowledge Check Route" icon="🎓">
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
            2,2,2 → IAI → IAI.d+1+2 or IAI.2 → Wall splat or knockdown
          </p>
        </KeyConcept>

        <KeyConcept title="Wall Pressure Route" icon="🧱">
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
            (combo into wall) → f+4,2~d → IAI → IAI.d+2 → 50/50 (IAI.2 / IAI.d+1+2)
          </p>
        </KeyConcept>
      </Section>

      <Section title="Practical Application">
        <TipBox variant="tip" title="Don't Force Stances">
          You don't HAVE to go into stance every time. If your move gets blocked at 
          disadvantage, just stay in neutral. Only transition when you have plus frames 
          or on hit.
        </TipBox>

        <TipBox variant="tip" title="Read Your Opponent">
          <ul>
            <li><strong>They press after strings</strong> → Use 1,2,1 (CH launch) or stay in neutral</li>
            <li><strong>They respect your strings</strong> → Transition to PRF for lows</li>
            <li><strong>They duck PRF options</strong> → Use PRF.1+2 or PRF.3</li>
            <li><strong>They freeze in IAI</strong> → Use IAI.d+1+2 (power low)</li>
          </ul>
        </TipBox>
      </Section>

      <Collapsible title="Quick Transition Reference" icon="📋">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>From</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>To</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Best Route</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Frames</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>Neutral</td>
                <td style={{ padding: '8px' }}>PRF</td>
                <td style={{ padding: '8px' }}><code>2,1~f</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+7 on hit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Neutral</td>
                <td style={{ padding: '8px' }}>IAI</td>
                <td style={{ padding: '8px' }}><code>f,f,f+2~d</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+5 on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>PRF</td>
                <td style={{ padding: '8px' }}>IAI</td>
                <td style={{ padding: '8px' }}><code>PRF.2,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+5 on hit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>PRF</td>
                <td style={{ padding: '8px' }}>Neutral</td>
                <td style={{ padding: '8px' }}><code>PRF~db</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>IAI</td>
                <td style={{ padding: '8px' }}>Neutral</td>
                <td style={{ padding: '8px' }}><code>IAI~db</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
