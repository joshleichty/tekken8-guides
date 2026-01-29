import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="First Buttons"
      intro="Before diving into stances and flowcharts, you need solid fundamentals. These are the buttons you'll use constantly — your jabs, your basic punish, and your first mid check."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Learn the Four Stances"
    >
      <Section title="Your Fastest Button: The Jab">
        <MoveCard character="hwoarang"
          move={{
            input: '1',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '+1',
            onHit: '+8',
            tags: ['High', 'Plus on Block'],
            description: 'Your fastest button. +1 on block means you can continue pressure even when they block.',
          }}
          showVideo
        />

        <p>
          Hwoarang's jab is <span className="highlight">plus on block</span>. This is standard for 
          most characters, but what matters is how Hwoarang uses it — as a gateway to his stance 
          transitions and pressure.
        </p>

        <KeyConcept title="When to Use Jab" icon="👊">
          <ul>
            <li><strong>To interrupt</strong> — If opponent is pressing, jab shuts them down</li>
            <li><strong>To start pressure</strong> — 1 → 1,2,3 → LFS begins the flowchart</li>
            <li><strong>As a quick check</strong> — Throw it out to see what they do</li>
            <li><strong>After blocking</strong> — When you're unsure of frames, jab is safe</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The 1,2 Punish String">
        <MoveCard character="hwoarang"
          move={{
            input: '1,2',
            hitLevel: ['h', 'h'],
            damage: '5, 10',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+6',
            tags: ['High', 'High', 'Natural Combo', '10f Punish'],
            description: 'Your basic punish. Has extensions that transition to LFS or RFS.',
          }}
          showVideo
        />

        <p>
          1,2 is Hwoarang's <span className="highlight">10-frame punish</span>. When you block 
          something that's -10 or worse, this is what you use. But the real power is in its extensions:
        </p>

        <ul>
          <li><code>1,2,3</code> — Goes to <strong>Left Flamingo</strong> (+3 on block, +12 on hit)</li>
          <li><code>1,2,4</code> — Goes to <strong>Right Flamingo</strong> (+3 on block, +12 on hit)</li>
          <li><code>1,2,f+3</code> — Safe mid ender (-8 on block)</li>
          <li><code>1,2,f+4</code> — Low crush high, balcony break</li>
        </ul>

        <KeyConcept title="The Key Extensions" icon="🔑">
          <ul>
            <li><strong>1,2,3 → LFS</strong> — Puts you in Left Flamingo at +3 on block</li>
            <li><strong>1,2,4 → RFS</strong> — Puts you in Right Flamingo at +3 on block</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            On hit, you're <strong>+12</strong>. That's enough advantage to do almost anything. 
            This is why punishing with 1,2,3 or 1,2,4 is so powerful — you convert a block punish 
            into stance pressure.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Which Extension?">
          For now, default to <code>1,2,4</code> to go to Right Flamingo. RFS has your best pressure 
          tools. We'll cover both stances, but RFS is where the magic happens.
        </TipBox>
      </Section>

      <Section title="The Superior Jab: RFF 2">
        <MoveCard character="hwoarang"
          move={{
            input: 'RFF.2',
            hitLevel: ['h'],
            damage: '6',
            startup: 'i10',
            onBlock: '+2',
            onHit: '+8',
            tags: ['High', 'Plus 2 on Block', 'RFF.Only'],
            description: 'The "superior jab." +2 on block is better than regular jab. Only available from RFF.',
          }}
          showVideo
        />

        <p>
          From Right Foot Forward, your 2 jab is <span className="highlight">+2 on block</span> instead 
          of +1. This might seem minor, but it makes your frame traps stronger. It also extends 
          into the critical <code>RFF 2,4</code> string.
        </p>

        <MoveCard character="hwoarang"
          move={{
            input: 'RFF.2,4',
            hitLevel: ['h', 'h'],
            damage: '6, 9',
            startup: 'i10',
            onBlock: '-8',
            onHit: '+3g',
            onCH: '+3g',
            tags: ['High', 'High', 'Jails', 'RFS.Transition'],
            description: 'Jab string that can transition to RFS with forward. Key pressure tool.',
          }}
          showVideo
        />

        <p>
          <code>RFF 2,4</code> is your bread and butter from RFF. It jails on block (they can't duck 
          the second hit), and holding forward afterwards (<code>RFF 2,4~f</code>) transitions to 
          Right Flamingo at <strong>+4 on block, +16 on hit</strong>.
        </p>

        <KeyConcept title="RFF 2,4 Flowchart" icon="📊">
          <ol>
            <li>Land in RFF (from 1,2,4, d+3,4, etc.)</li>
            <li>Do RFF 2,4 (jails, -8 on block)</li>
            <li>Hold forward to enter RFS at +4</li>
            <li>Continue pressure with RFS f+4 or RFS options</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Your First Mid: df+1">
        <MoveCard character="hwoarang"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '10',
            startup: 'i13-14',
            onBlock: '-1',
            onHit: '+6',
            tags: ['Mid', 'Safe', 'Poke'],
            description: 'Your generic mid check. Hits crouching opponents and is safe on block.',
          }}
          showVideo
        />

        <p>
          df+1 is your answer to <strong>opponents who duck</strong>. Jabs are highs — they whiff 
          on crouching opponents. df+1 is a mid that hits them regardless.
        </p>

        <p>
          This move is available from <strong>both LFF and RFF</strong>. You'll use it constantly 
          to check opponents who try to duck your jab pressure.
        </p>

        <TipBox variant="warning" title="Don't Autopilot df+1">
          df+1 is only -1 on block, but it doesn't transition to stances and doesn't give you 
          much on hit. Use it as a check, not as your main pressure tool. Your goal is to get 
          into stances, not poke infinitely.
        </TipBox>
      </Section>

      <Section title="4,3 — Your Safe Mid String">
        <MoveCard character="hwoarang"
          move={{
            input: '4,3',
            hitLevel: ['h', 'm'],
            damage: '14, 16',
            startup: 'i11-12',
            onBlock: '-6',
            onHit: '+5',
            onCH: '+20a (wall splat)',
            tags: ['High', 'Mid', '11f Punish', 'Wall Splat on CH'],
            description: 'Safe high-mid string. Your 11f punish. Wall splats on counter-hit.',
          }}
          showVideo
        />

        <p>
          4,3 is <span className="highlight">Hwoarang's 11-frame punish</span>. Many characters 
          don't have a good 11f punish, but Hwoarang does. Use this when:
        </p>

        <ul>
          <li>Blocking moves that are -11 (most strings that push back)</li>
          <li>At the wall for counter-hit wall splat potential</li>
          <li>When you want a safe mid check without committing to stances</li>
        </ul>

        <TipBox variant="tip" title="Cancel to LFS">
          You can cancel 4,3 into Left Flamingo with <code>4,3~f</code>. This gives you +5 on hit 
          and transitions to LFS for more pressure. We'll use this later in flowcharts.
        </TipBox>
      </Section>

      <Section title="Putting It Together">
        <p>
          With just these tools, you have functional Hwoarang basics:
        </p>

        <KeyConcept title="Basic Game Plan" icon="🎯">
          <ol>
            <li><strong>Poke with jabs</strong> — Check opponent, look for punishes</li>
            <li><strong>Punish with 1,2,4</strong> — Go to RFS with advantage</li>
            <li><strong>Check with df+1</strong> — Catch crouching opponents</li>
            <li><strong>Use 4,3</strong> — When you need a safe 11f punish</li>
          </ol>
        </KeyConcept>

        <p>
          This isn't the complete Hwoarang — we haven't touched stances yet. But these buttons 
          are your foundation. Get comfortable with them before moving on.
        </p>

        <TipBox variant="tip" title="Practice These">
          Go to Practice Mode and do: <code>1 → df+1 → 1,2,4 → RFS (wait)</code>. Get comfortable 
          entering RFS from the jab string. Feel the rhythm. This is the first step to flowcharts.
        </TipBox>
      </Section>

      <Collapsible title="Frame Data Reference" icon="📊">
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
                <td style={{ padding: '8px' }}><code>1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+8</td>
                <td style={{ padding: '8px' }}>Standard jab</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3 (LFS)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+12 (LFS)</td>
                <td style={{ padding: '8px' }}>→ Left Flamingo</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3 (RFS)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+12 (RFS)</td>
                <td style={{ padding: '8px' }}>→ Right Flamingo</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RFF 2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+2</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+8</td>
                <td style={{ padding: '8px' }}>Superior jab</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RFF 2,4~f</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4 (RFS)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+16 (RFS)</td>
                <td style={{ padding: '8px' }}>Key pressure tool</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-1</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+6</td>
                <td style={{ padding: '8px' }}>Mid check</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>4,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i11</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+5</td>
                <td style={{ padding: '8px' }}>11f punish, CH wall splat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
