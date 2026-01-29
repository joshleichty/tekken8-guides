import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter13({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={13}
      title="Heat System"
      intro="Victor's heat system enhances his katana, gives him new moves, and makes his u+1+2 safe. Understanding when and how to use heat is crucial for maximizing Victor's damage potential."
      onPrevious={() => goToChapter(12)}
      onNext={() => goToChapter(14)}
      nextLabel="Defense & Keep-Out"
    >
      <Section title="Victor's Heat Overview">
        <KeyConcept title="What Heat Does for Victor" icon="🔥">
          <ul>
            <li><strong>Enhanced IAI.d+2</strong> — +8 on block instead of +4, more chip</li>
            <li><strong>Safe u+1+2</strong> — Becomes -4 on block instead of -20</li>
            <li><strong>New move: db+1+2</strong> — +6 in IAI stance on block</li>
            <li><strong>Heat regeneration</strong> — Sword attacks restore heat gauge on hit</li>
            <li><strong>Heat smash</strong> — Low-hitting, breaks walls and balconies</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Engagers">
        <p>
          Victor has multiple ways to activate heat. Choose based on the situation:
        </p>

        <MoveCard character="victor"
          move={{
            input: 'd+2',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i18',
            onBlock: '0',
            onHit: '+4 / HE',
            tags: ['Mid', 'Heat Engager', 'Neutral on Block', 'Heat Dash Launcher'],
            description: 'Fastest heat engager. Zero on block, launches on heat dash.',
          }}
          showVideo
        />

        <MoveCard character="victor"
          move={{
            input: 'f+1+2',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i24-25',
            onBlock: '+3',
            onHit: '+1a / HE',
            tags: ['Mid', 'Heat Engager', 'PLUS on Block', '10 Chip', 'Heat Dash Launcher'],
            description: 'Plus on block with huge chip. Slow but very rewarding.',
          }}
          showVideo
        />

        <MoveCard character="victor"
          move={{
            input: 'f+4,1',
            hitLevel: ['m', 'h'],
            damage: '15, 21',
            startup: 'i14',
            onBlock: '-4',
            onHit: '+18a / HE',
            tags: ['Mid', 'High', 'Heat Engager', '14f Punish', 'Wall Splat'],
            description: 'Your 14f punish heat engager. Wall splats. Second hit can be ducked.',
          }}
          showVideo
        />

        <MoveCard character="victor"
          move={{
            input: 'b+1+2',
            hitLevel: ['h'],
            damage: '25',
            startup: 'i19-20',
            onBlock: '-9',
            onHit: '+16d / HE',
            tags: ['High', 'Heat Engager', 'Power Crush', 'Safe'],
            description: 'Power crush heat engager. Great for defensive heat activation.',
          }}
          showVideo
        />

        <MoveCard character="victor"
          move={{
            input: 'PRF.3',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i15-17',
            onBlock: '-8',
            onHit: '+41d / HE',
            tags: ['Mid', 'Heat Engager', 'Safe', 'Knee', 'Low Crush'],
            description: 'Fast heat engager from PRF stance. Low crushes.',
          }}
          showVideo
        />

        <MoveCard character="victor"
          move={{
            input: 'IAI.d+1',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i18',
            onBlock: '-2',
            onHit: '+24a / HE',
            tags: ['Mid', 'Heat Engager', 'Safe', 'Hits Grounded'],
            description: 'Safe heat engager from IAI. Hits grounded.',
          }}
          showVideo
        />

        <KeyConcept title="Heat Engager Decision" icon="🤔">
          <ul>
            <li><strong>Quick activation</strong> → <code>d+2</code></li>
            <li><strong>Safe/chip</strong> → <code>f+1+2</code></li>
            <li><strong>Punish</strong> → <code>f+4,1</code></li>
            <li><strong>Defensive</strong> → <code>b+1+2</code></li>
            <li><strong>From PRF</strong> → <code>PRF.3</code></li>
            <li><strong>From IAI</strong> → <code>IAI.d+1</code></li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat-Exclusive Move: db+1+2">
        <MoveCard character="victor"
          move={{
            input: 'h.db+1+2',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i28-29',
            onBlock: '+9 (IAI)',
            onHit: '+6a',
            tags: ['Mid', 'Heat Only', 'PLUS on Block', 'IAI.Transition'],
            description: 'Heat-only move. +9 in IAI stance on block. Slow but very plus.',
          }}
          showVideo
        />

        <p>
          h.db+1+2 is Victor's <span className="highlight">heat-exclusive move</span>. It's 
          slow (i28) but leaves you +9 in IAI stance on block. This creates terrifying 
          frame trap situations.
        </p>

        <KeyConcept title="After h.db+1+2 Block" icon="🔥">
          <p>At +9 in IAI:</p>
          <ul>
            <li><code>IAI.1,1</code> — i13 becomes i4. Uninterruptible.</li>
            <li><code>IAI.d+2</code> — i23 becomes i14. Still safe.</li>
            <li>You can basically do anything</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Enhanced u+1+2">
        <MoveCard character="victor"
          move={{
            input: 'h.u+1+2',
            hitLevel: ['m'],
            damage: '46',
            startup: 'i31-32',
            onBlock: '-4',
            onHit: '+0a',
            tags: ['Mid', 'Heat Enhanced', 'SAFE', 'Balcony Break', '23 Chip'],
            description: 'Becomes SAFE in heat. Massive chip damage. Breaks balconies.',
          }}
          showVideo
        />

        <p>
          In heat, u+1+2 becomes <span className="highlight">safe on block</span> (-4 instead 
          of -20) and does massive chip damage (23!). This move becomes a spam-worthy pressure 
          tool in heat.
        </p>

        <TipBox variant="tip" title="Heat Meter Warning">
          h.u+1+2 consumes a significant chunk of your heat meter. You can do about 3 of 
          these from a heat engager, or 2 from heat burst. Use them wisely.
        </TipBox>

        <KeyConcept title="When to Spam h.u+1+2" icon="💥">
          <ul>
            <li>Opponent at the wall — chip them to death</li>
            <li>Low HP opponent — safe chip closer</li>
            <li>When you have heat to burn — late round</li>
            <li>After knockdown — hits grounded</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Enhanced IAI.d+2">
        <MoveCard character="victor"
          move={{
            input: 'h.IAI.d+2',
            hitLevel: ['m', 'sm'],
            damage: '45',
            startup: 'i23-24',
            onBlock: '+8 (IAI)',
            onHit: '+20',
            tags: ['Mid', 'Special Mid', 'Heat Enhanced', '+8 on Block', '10 Chip'],
            description: 'In heat, becomes +8 on block instead of +4. Even more oppressive.',
          }}
          showVideo
        />

        <p>
          Heat-enhanced IAI.d+2 is <span className="highlight">+8 in IAI on block</span> with 
          more chip damage. This makes the IAI pressure loop even more terrifying.
        </p>

        <KeyConcept title="Heat IAI Loop" icon="🔁">
          <ol>
            <li>Activate heat</li>
            <li>Enter IAI (via h.db+1+2, f,f,f+2~d, etc.)</li>
            <li>Do h.IAI.d+2 — +8 on block</li>
            <li>You're at +8 in IAI — mix IAI.2 and IAI.d+1+2</li>
            <li>Repeat h.IAI.d+2 for chip and plus frames</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Heat Smash">
        <MoveCard character="victor"
          move={{
            input: 'Heat Smash',
            hitLevel: ['l', 'm'],
            damage: '39',
            startup: 'i20',
            onBlock: '-14',
            onHit: 'KND / Wall Break',
            tags: ['Low', 'Mid', 'Heat Smash', 'Balcony Break', 'Wall Break'],
            description: 'Low-hitting heat smash. Breaks walls and balconies. -14 on block.',
          }}
          showVideo
        />

        <p>
          Victor's heat smash is a <span className="highlight">low attack</span> — one of the 
          few in the game. It's -14 on block but tracks to Victor's weak side and breaks 
          stage hazards.
        </p>

        <KeyConcept title="Heat Smash Uses" icon="💢">
          <ul>
            <li><strong>Mixup</strong> — Low heat smash vs mid pressure</li>
            <li><strong>Wall break</strong> — Force stage transitions</li>
            <li><strong>Balcony break</strong> — Extend combos on breakable stages</li>
            <li><strong>Round ender</strong> — Low chip to close games</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Low Level Abuse">
          At low-to-mid ranks, players struggle to block low heat smashes. Abuse this until 
          opponents learn to block it.
        </TipBox>
      </Section>

      <Section title="Heat Dash Combos">
        <KeyConcept title="Heat Dash Extension" icon="🔥">
          <p>
            In heat, heat engagers become launchers when you hold forward (heat dash):
          </p>
          <ul>
            <li><code>d+2~f</code> — Launches, full combo</li>
            <li><code>f+1+2~f</code> — Launches, massive damage</li>
            <li><code>f+4,1~f</code> — Launches from 14f punish</li>
            <li><code>PRF.3~f</code> — Launches from PRF</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Combo Extension">
          You can heat burst mid-combo (after db+1,1~f) and then heat dash f+1+2 → u+1+2 
          for massive damage extension (+25 damage).
        </TipBox>
      </Section>

      <Section title="Heat Management">
        <KeyConcept title="When to Activate Heat" icon="⏰">
          <ul>
            <li><strong>With wall</strong> — Heat makes wall pressure even scarier</li>
            <li><strong>When ahead</strong> — Chip them out with safe pressure</li>
            <li><strong>To close rounds</strong> — Guaranteed damage in combos</li>
            <li><strong>When they're respecting</strong> — h.u+1+2 chip</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="When NOT to Activate" icon="🚫">
          <ul>
            <li><strong>Far from wall</strong> — Heat is less effective mid-screen</li>
            <li><strong>When behind badly</strong> — Save for potential comeback</li>
            <li><strong>Random activation</strong> — Wasted meter</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Heat Regeneration">
          Victor's sword attacks regenerate heat on hit. Use f+1+2 and sword moves in heat 
          to extend your heat duration.
        </TipBox>
      </Section>

      <Collapsible title="Heat Engagers Quick Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Best Use</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>d+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>0</td>
                <td style={{ padding: '8px' }}>Quick activation</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i24</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3</td>
                <td style={{ padding: '8px' }}>Safe, chip</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+4,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i14</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-4</td>
                <td style={{ padding: '8px' }}>14f punish</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i19</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-9</td>
                <td style={{ padding: '8px' }}>Defensive</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>PRF.3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-8</td>
                <td style={{ padding: '8px' }}>From PRF</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>IAI.d+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-2</td>
                <td style={{ padding: '8px' }}>From IAI/oki</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
