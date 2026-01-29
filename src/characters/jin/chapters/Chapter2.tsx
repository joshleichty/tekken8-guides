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
      intro="Every Tekken character has jabs and a df+1. They're the foundation of offense — fast, safe, and used to start your pressure. Jin's versions are excellent."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Learn Mids & Lows"
    >
      <Section title="Your Fastest Button: The Jab">
        <MoveCard
          move={{
            input: '1',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '+1',
            onHit: '+8',
            tags: ['High', 'Plus on Block'],
            description: 'Your fastest button. Being +1 on block means you can continue pressure even when they block it.',
          }}
          showVideo
        />

        <p>
          Jin's jab is <span className="highlight">plus on block</span>. This is significant — 
          most jabs are neutral or minus. Being +1 means if they press a button after blocking 
          your jab, your next move will beat theirs.
        </p>

        <KeyConcept title="When to Use Jab" icon="👊">
          <ul>
            <li><strong>To interrupt</strong> — If opponent is pressing, jab shuts them down</li>
            <li><strong>To start offense</strong> — Jab → your next move comes out faster</li>
            <li><strong>As a quick check</strong> — Throw it out to see what they do</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The 1,2 String">
        <MoveCard
          move={{
            input: '1,2',
            hitLevel: ['h', 'h'],
            damage: '5, 12',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+6',
            tags: ['High', 'High', 'Natural Combo', '10f Punish'],
            description: 'Your basic punish and pressure string. Has powerful extensions covered in Chapter 4.',
          }}
          showVideo
        />

        <p>
          1,2 is Jin's <span className="highlight">10-frame punish</span>. When you block something 
          unsafe (at least -10), this is what you hit them with. It's also great for general pressure.
        </p>

        <TipBox variant="tip" title="What 'Jails' Means">
          1,2 "jails" on block — the opponent <strong>cannot duck</strong> the second hit if they 
          blocked the first. Even though both hits are high, they're stuck blocking. This makes 
          1,2 very safe to throw out.
        </TipBox>

        <Collapsible title="1,2 Extensions Preview" icon="📖">
          <p style={{ marginTop: '12px' }}>
            1,2 has three important extensions that we'll cover in Chapter 4:
          </p>
          <ul>
            <li><code>1,2,3</code> — Safe mid ender, neutral on block</li>
            <li><code>1,2,4</code> — Heat engager, but can be ducked</li>
            <li><code>1,2,1</code> — Tornado move, but launch punishable</li>
          </ul>
          <p>For now, just use 1,2 by itself. We'll add the extensions later.</p>
        </Collapsible>
      </Section>

      <Section title="The 2,1 Alternative">
        <MoveCard
          move={{
            input: '2,1',
            hitLevel: ['h', 'm'],
            damage: '9, 9',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+6',
            tags: ['High', 'Mid', 'Natural Combo'],
            description: 'High-mid jab string. The second hit catches people who try to duck after the first jab.',
          }}
          showVideo
        />

        <p>
          2,1 is <span className="highlight">high-mid</span> instead of high-high. If someone 
          tries to duck after the first hit, the second hit catches them. Use this against 
          opponents who figured out that 1,2 is double-high.
        </p>

        <KeyConcept title="1,2 vs 2,1 — When to Use Each" icon="🔄">
          <ul>
            <li><strong>1,2</strong> — Default punish, safer extensions available</li>
            <li><strong>2,1</strong> — Against duck-happy opponents, when you suspect they'll duck</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Mix them up. If they keep standing, 1,2 is fine. If they start ducking, 
            switch to 2,1 to catch them.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Your Main Mid Poke: df+1">
        <MoveCard
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '10',
            startup: 'i13-14',
            onBlock: '-3',
            onHit: '+4',
            onCH: '+6',
            tags: ['Mid', 'Poke', 'Safe'],
            description: 'Your primary mid check. Hits crouching opponents and has useful extensions.',
          }}
          showVideo
        />

        <p>
          df+1 is your answer to <strong>opponents who duck</strong>. Jabs are highs — they go 
          over crouching opponents. df+1 is a mid, so it hits them regardless.
        </p>

        <p>
          It's also only -3 on block, making it very safe to throw out. Use it constantly to 
          check your opponent.
        </p>

        <Collapsible title="df+1 Extensions" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <p><strong>df+1,4</strong> — Natural high extension. Knocks down on counter-hit.</p>
            <ul>
              <li>The second hit is HIGH — can be ducked</li>
              <li>Good players will duck and launch you</li>
              <li>Use sparingly to catch people pressing buttons</li>
            </ul>
            
            <p style={{ marginTop: '16px' }}><strong>df+1,4~4</strong> — Mid alternative to the high.</p>
            <ul>
              <li>Changes the second hit to a MID</li>
              <li>-12 on block but can't be ducked</li>
              <li>Use when they've learned to duck df+1,4</li>
            </ul>
          </div>
        </Collapsible>

        <TipBox variant="warning" title="Don't Autopilot the Extension">
          If you always do df+1,4, good opponents will duck and launch you. Mix it up — 
          sometimes just df+1, sometimes df+1,4, sometimes df+1,4~4 (the mid version).
        </TipBox>
      </Section>

      <Section title="Putting It Together">
        <p>
          With just these four moves (<code>1</code>, <code>1,2</code>, <code>2,1</code>, <code>df+1</code>), 
          you have a functional offense:
        </p>

        <KeyConcept title="The Basic Pressure Loop" icon="🔄">
          <ol>
            <li><strong>Start with jab (1)</strong> — You're +1 on block, they have to respect</li>
            <li><strong>If they keep standing</strong> — Use 1,2 for damage</li>
            <li><strong>If they start ducking</strong> — Use df+1 or 2,1 to hit them</li>
            <li><strong>Repeat</strong> — This simple mix is Jin's foundation</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice This">
          Go to Practice Mode and just cycle through these moves for a few minutes. 
          Get comfortable with the inputs. Try: <code>1 → df+1 → 1,2 → 2,1 → repeat</code>. 
          Feel the rhythm. That's Jin's basic pressure.
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
                <td style={{ padding: '8px' }}><code>2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+6</td>
                <td style={{ padding: '8px' }}>h-m, catches duckers</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4</td>
                <td style={{ padding: '8px' }}>Main mid poke</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
