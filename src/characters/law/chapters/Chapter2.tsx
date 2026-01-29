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
      intro="Law lives and dies by his jab range. When you're close enough to land a jab, you can start the pressure that makes Law terrifying. Let's learn the foundation."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Learn Mids & Lows"
    >
      <Section title="Your Foundation: The Jab">
        <MoveCard character="law"
          move={{
            input: '1',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '+1',
            onHit: '+8',
            tags: ['High', 'Plus on Block'],
            description: 'Law\'s jab is plus on block. This means even when they block it, you\'re at advantage to continue pressure.',
          }}
          showVideo
        />

        <p>
          Law's jab is <span className="highlight">plus on block</span>. This is crucial — most jabs 
          are neutral. Being +1 means if they try to press a button after blocking your jab, 
          your next attack beats theirs.
        </p>

        <KeyConcept title="Why Law's Jab is Special" icon="👊">
          <ul>
            <li><strong>Plus on block</strong> — Continue pressure even when blocked</li>
            <li><strong>Counter-hit strings</strong> — 1,1,1 and 1,2,3 confirm from first hit CH</li>
            <li><strong>Stance transitions</strong> — Many strings go into DSS with hold forward</li>
            <li><strong>Frame trap starter</strong> — Jab → f+1+2 catches mashers</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Get in Jab Range">
          Law's entire gameplan revolves around getting to jab range. Use movement, b+2, and 
          running moves to close distance. Once you're close enough to jab, the magic begins.
        </TipBox>
      </Section>

      <Section title="The 1,2 String">
        <MoveCard character="law"
          move={{
            input: '1,2',
            hitLevel: ['h', 'h'],
            damage: '5, 8',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+6',
            tags: ['High', 'High', 'Natural Combo', '10f Punish'],
            description: 'Your basic 10-frame punish. Jails on block so they can\'t duck the second hit.',
          }}
          showVideo
        />

        <p>
          1,2 is Law's <span className="highlight">10-frame punish</span>. When you block something 
          at -10 or worse, this is your guaranteed damage. It also "jails" — opponents can't duck 
          the second hit if they blocked the first.
        </p>

        <p>
          This string has many extensions that we'll cover in Chapter 4. For now, just know that 
          1,2 is safe to throw out and leads to powerful options.
        </p>

        <Collapsible title="1,2 Extensions Preview" icon="📖">
          <p style={{ marginTop: '12px' }}>
            1,2 has several important extensions covered in Chapter 4:
          </p>
          <ul>
            <li><code>1,2,3</code> — Safe mid ender, -5 on block</li>
            <li><code>1,2,2,2</code> — Counter-hit confirmable, goes to DSS</li>
            <li><code>1,2,2,1+2</code> — Mid ender, wall splats</li>
          </ul>
          <p>For now, just use 1,2 by itself for punishment.</p>
        </Collapsible>
      </Section>

      <Section title="The 2,2 String">
        <MoveCard character="law"
          move={{
            input: '2,2',
            hitLevel: ['h', 'm'],
            damage: '8, 10',
            startup: 'i10',
            onBlock: '-8',
            onHit: '+4',
            tags: ['High', 'Mid', 'Delayable'],
            description: 'High-mid jab string. The second hit catches duckers and is delayable for frame traps.',
          }}
          showVideo
        />

        <p>
          2,2 is <span className="highlight">high-mid</span> instead of high-high. If opponents 
          try to duck after your first jab, the second hit catches them. Use this against 
          duck-happy opponents.
        </p>

        <KeyConcept title="1,2 vs 2,2 — When to Use Each" icon="🔄">
          <ul>
            <li><strong>1,2</strong> — Default punish, more extensions available</li>
            <li><strong>2,2</strong> — Against duckers, delayable for frame traps</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            The 2,2 can also extend to 2,2,2 and 2,2,1+2, similar to the 1,2 extensions.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Your Main Mid Poke: df+1">
        <MoveCard character="law"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '10',
            startup: 'i13',
            onBlock: '-1',
            onHit: '+5',
            tags: ['Mid', 'Poke', 'Safe'],
            description: 'Your primary mid check. Hits crouching opponents and has a useful 2 extension.',
          }}
          showVideo
        />

        <p>
          df+1 is your answer to <strong>opponents who duck</strong>. Jabs are highs — they whiff 
          on crouching opponents. df+1 is a mid that hits them regardless.
        </p>

        <p>
          At only -1 on block, it's essentially safe. Use it constantly to check opponents and 
          establish respect for your mids.
        </p>

        <Collapsible title="df+1,2 Extension" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <p><strong>df+1,2</strong> — Mid-high follow-up with a weapon hit.</p>
            <ul>
              <li>The second hit is HIGH — can be ducked</li>
              <li>-8 on block, safe but opponents can step</li>
              <li>Becomes enhanced in Heat</li>
              <li>Use sparingly — good players will duck</li>
            </ul>
          </div>
        </Collapsible>

        <TipBox variant="warning" title="df+1 is Linear">
          df+1 can be stepped to Law's left (your right). If opponents are consistently 
          stepping your df+1, switch to b+4 (homing) or b+1 (tracks right).
        </TipBox>
      </Section>

      <Section title="The b+1 Alternative">
        <MoveCard character="law"
          move={{
            input: 'b+1',
            hitLevel: ['m'],
            damage: '12',
            startup: 'i14',
            onBlock: '-9',
            onHit: '+2',
            tags: ['Mid', 'Tracks Right', 'DSS.Transition'],
            description: 'Mid that tracks to Law\'s right (opponent stepping left). Can transition to DSS.',
          }}
          showVideo
        />

        <p>
          b+1 <span className="highlight">tracks to Law's right</span>. Since opponents typically 
          step right to avoid your jabs and df+1, b+1 catches them. It can also transition to 
          DSS by holding forward.
        </p>

        <p>
          The b+1,2 and b+1,2,2 extensions are covered in Chapter 4 — they're some of Law's 
          strongest pressure tools, especially in Heat mode.
        </p>
      </Section>

      <Section title="Putting It Together">
        <p>
          With these four moves (<code>1</code>, <code>1,2</code>, <code>df+1</code>, <code>b+1</code>), 
          you have functional offense:
        </p>

        <KeyConcept title="The Basic Pressure Loop" icon="🔄">
          <ol>
            <li><strong>Get to jab range</strong> — Use movement or b+2 to close distance</li>
            <li><strong>Jab (1)</strong> — You're +1 on block, they have to respect</li>
            <li><strong>If they stand</strong> — Jab again, or use df+1 to condition</li>
            <li><strong>If they duck</strong> — df+1 or b+1 hits them</li>
            <li><strong>If they step right</strong> — b+1 tracks and catches them</li>
            <li><strong>Repeat</strong> — This simple mix is Law's foundation</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice This">
          Go to Practice Mode and cycle through these moves. Try: <code>1 → 1,2 → df+1 → b+1 → repeat</code>. 
          Get comfortable with the inputs and timing. This is Law's core.
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
                <td style={{ padding: '8px' }}>Plus on block!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+6</td>
                <td style={{ padding: '8px' }}>10f punish, jails</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>2,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4</td>
                <td style={{ padding: '8px' }}>h-m, catches duckers</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-1</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+5</td>
                <td style={{ padding: '8px' }}>Main mid poke</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i14</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+2</td>
                <td style={{ padding: '8px' }}>Tracks right, DSS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
