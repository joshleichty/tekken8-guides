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
      intro="Fahkumram's jabs and basic pokes are your foundation. While his df+1 is slower than average, his jab and standing 3 make up for it with range and frame advantage."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Learn Mids & Lows"
    >
      <Section title="Your Fastest Button: The Jab">
        <MoveCard character="fahkumram"
          move={{
            input: '1',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '+1',
            onHit: '+8',
            tags: ['High', 'Plus on Block', 'Long Range'],
            description: 'Fahkumram\'s jab has excellent range for a 10f move and is +1 on block, letting you continue pressure.',
          }}
          showVideo
        />

        <p>
          Fahkumram's jab is <span className="highlight">plus on block</span> at +1. This means after 
          they block your jab, your next move comes out faster than theirs. Use this to start pressure.
        </p>

        <KeyConcept title="When to Use Jab" icon="👊">
          <ul>
            <li><strong>To interrupt</strong> — Fastest move to stop opponent's offense</li>
            <li><strong>To start offense</strong> — Jab → your next move comes out faster</li>
            <li><strong>To check range</strong> — His jab reaches surprisingly far</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The 1,1 String">
        <MoveCard character="fahkumram"
          move={{
            input: '1,1',
            hitLevel: ['h', 'm'],
            damage: '5, 20',
            startup: 'i10',
            onBlock: '-9',
            onHit: '+8c',
            tags: ['High', 'Mid', 'Natural Combo on CH', 'Floor Break'],
            description: 'High-mid natural combo on CH. The second hit catches people who try to duck after the jab.',
          }}
          showVideo
        />

        <p>
          1,1 is <span className="highlight">high-mid</span>, which means the second hit catches 
          people trying to duck after the first jab. It's -9 on block so you lose your turn, but 
          on counter-hit it gives +8 for continued pressure.
        </p>

        <TipBox variant="tip" title="Catch Duckers">
          If opponents start ducking after your jab to avoid extensions, use 1,1. The mid elbow 
          will hit them for solid damage.
        </TipBox>
      </Section>

      <Section title="The 1,4 String">
        <MoveCard character="fahkumram"
          move={{
            input: '1,4',
            hitLevel: ['h', 'h'],
            damage: '5, 17',
            startup: 'i10',
            onBlock: '-8',
            onHit: '+8',
            tags: ['High', 'High', '10f Punish', 'Natural Combo'],
            description: 'Your basic 10f punish. Jails on block and gives +8 on hit for continued pressure.',
          }}
          showVideo
        />

        <p>
          1,4 is your <span className="highlight">10-frame punish</span>. When you block something 
          at least -10, this is what you hit them with. It's also great for pressure since it's 
          only -8 on block and gives +8 on hit.
        </p>

        <KeyConcept title="1,1 vs 1,4 — When to Use Each" icon="🔄">
          <ul>
            <li><strong>1,4</strong> — Default punish, better frames, more damage</li>
            <li><strong>1,1</strong> — Against duck-happy opponents who try to duck after jabs</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Mix them up. If they keep standing, 1,4 is your go-to. If they start ducking, 
            switch to 1,1 to catch them.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Standing 3 — Your Main Poke">
        <MoveCard character="fahkumram"
          move={{
            input: '3',
            hitLevel: ['m'],
            damage: '11',
            startup: 'i13',
            onBlock: '-9',
            onHit: '+2',
            onCH: '+9',
            tags: ['Mid', 'Long Range', 'Multiple Extensions'],
            description: 'Fahkumram\'s bread and butter poke. 13f mid with incredible range and powerful extensions.',
          }}
          showVideo
        />

        <p>
          Standing 3 is <span className="highlight">the backbone of Fahkumram's offense</span>. 
          It's a 13f mid with range that rivals other characters' approaching moves. You'll use this 
          constantly to control space.
        </p>

        <p>
          What makes it special are the <strong>extensions</strong>. The opponent has to respect 
          the follow-ups, which creates mental pressure. We'll cover these in Chapter 4.
        </p>

        <TipBox variant="tip" title="Better than df+1">
          While most characters spam df+1, Fahkumram's standing 3 is faster (i13 vs i15) and has 
          better range. Make this your primary mid poke, not df+1.
        </TipBox>
      </Section>

      <Section title="The Slow df+1">
        <MoveCard character="fahkumram"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '12',
            startup: 'i15',
            onBlock: '-3',
            onHit: '+6',
            tags: ['Mid', 'Safe', 'Tracks Left'],
            description: 'Standard df+1 check but slower at i15. Has useful extensions for pressure.',
          }}
          showVideo
        />

        <p>
          Fahkumram's df+1 is <span className="highlight">15 frames</span> — slower than most characters 
          who have i13-14 versions. This is one of his weaknesses. However, it tracks to the left 
          and has useful extensions.
        </p>

        <Collapsible title="df+1 Extensions" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <p><strong>df+1,4</strong> — Mid-high extension. Safe at -5 but can be ducked.</p>
            <ul style={{ marginBottom: '12px' }}>
              <li>Heat engager if Heat Dash is used</li>
              <li>Good for pressure when they're standing</li>
            </ul>
            
            <p><strong>df+1,2</strong> — Mid-mid extension. Grants Garuda Force on hit.</p>
            <ul>
              <li>-13 on block — punishable</li>
              <li>Floor breaks</li>
              <li>Use sparingly or on hit-confirm</li>
            </ul>
          </div>
        </Collapsible>

        <TipBox variant="warning" title="Don't Autopilot df+1">
          Due to its slow speed, df+1 will get counter-hit often if you're predictable. Use 
          standing 3 as your primary poke and save df+1 for when you need tracking.
        </TipBox>
      </Section>

      <Section title="2,1 — Your 12f Punish">
        <MoveCard character="fahkumram"
          move={{
            input: '2,1',
            hitLevel: ['h', 'h'],
            damage: '13, 20',
            startup: 'i12',
            onBlock: '-12',
            onHit: '+15a (+6)',
            tags: ['High', 'High', '12f Punish', 'Wall Splat', 'Knockdown'],
            description: 'Your 12f punish. Wall splats and knocks down on hit. -12 on block but the reward is huge.',
          }}
          showVideo
        />

        <p>
          2,1 is your <span className="highlight">12-frame punish</span>. It wall splats and gives 
          a knockdown on hit. When you block something -12 or worse, use this instead of 1,4 for 
          more damage and oki.
        </p>

        <KeyConcept title="Punishment Summary" icon="⚖️">
          <ul>
            <li><strong>-10 to -11</strong> — Use 1,4 (+8 on hit)</li>
            <li><strong>-12 or worse</strong> — Use 2,1 (knockdown, wall splat)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Putting It Together">
        <p>
          With just these moves (<code>1</code>, <code>1,1</code>, <code>1,4</code>, <code>3</code>, <code>df+1</code>), 
          you have a functional offense:
        </p>

        <KeyConcept title="The Basic Pressure Loop" icon="🔄">
          <ol>
            <li><strong>Start with jab (1)</strong> — You're +1 on block, they have to respect</li>
            <li><strong>If they keep standing</strong> — Use 1,4 for damage</li>
            <li><strong>If they start ducking</strong> — Use 1,1 or 3 to hit them</li>
            <li><strong>At mid-range</strong> — Use 3 to control space</li>
            <li><strong>Repeat</strong> — This simple mix is your foundation</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice This">
          Go to Practice Mode and cycle through these moves. Get comfortable with the inputs.
          Try: <code>1 → 3 → 1,4 → df+1 → repeat</code>. Feel the rhythm. That's Fahkumram's basic pressure.
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
                <td style={{ padding: '8px' }}><code>1,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+8c</td>
                <td style={{ padding: '8px' }}>High-mid, catches duckers</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+8</td>
                <td style={{ padding: '8px' }}>10f punish</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+2</td>
                <td style={{ padding: '8px' }}>Main poke, great range</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+6</td>
                <td style={{ padding: '8px' }}>Slow but tracks left</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+15a</td>
                <td style={{ padding: '8px' }}>12f punish, wall splat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
