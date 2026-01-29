import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Jab String Extensions"
      intro="You know 1,2 and 2,1 from Chapter 2. Now it's time to learn the extensions — when to use each one and what you gain (and risk) from each."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="First Combos"
    >
      <Section title="The 1,2 Family">
        <p>
          Jin's 1,2 has three main extensions. Each serves a different purpose, and each has 
          different risks. Knowing <strong>when</strong> to use each is more important than 
          knowing they exist.
        </p>

        <MoveCard
          move={{
            input: '1,2,3',
            hitLevel: ['h', 'h', 'm'],
            damage: '5, 12, 20',
            startup: 'i10',
            onBlock: '+0',
            onHit: 'KND',
            tags: ['High', 'High', 'Mid', 'Neutral on Block', 'Knockdown'],
            description: 'Your safest extension. The mid ender is neutral on block and knocks down on hit.',
          }}
          showVideo
        />

        <p>
          1,2,3 ends with a <span className="highlight">mid</span> that's <strong>neutral on block</strong>. 
          This is huge — even if they block the whole thing, it's your turn again. On hit, it knocks down.
        </p>

        <KeyConcept title="When to Use 1,2,3" icon="🛡️">
          <ul>
            <li>When you want guaranteed safety</li>
            <li>When opponent is too passive to punish</li>
            <li>To check if they're mashing after 1,2</li>
          </ul>
        </KeyConcept>

        <MoveCard
          move={{
            input: '1,2,4',
            hitLevel: ['h', 'h', 'h'],
            damage: '5, 12, 26',
            startup: 'i10',
            onBlock: '-4',
            onHit: 'KND',
            tags: ['High', 'High', 'High', 'Heat Engager', 'Duckable'],
            description: 'Heat engager ender. High damage but the third hit is a HIGH — can be ducked and launched.',
          }}
          showVideo
        />

        <p>
          1,2,4 is a <span className="highlight">heat engager</span>. When it connects, you go 
          into Heat if available. However, the third hit is <strong>high</strong> — good players 
          will duck and launch you.
        </p>

        <TipBox variant="warning" title="Risk vs Reward">
          1,2,4 is a knowledge check. Bad players won't duck. Good players will. 
          Use sparingly against competent opponents.
        </TipBox>

        <MoveCard
          move={{
            input: '1,2,1',
            hitLevel: ['h', 'h', 'm'],
            damage: '5, 12, 20',
            startup: 'i10',
            onBlock: '-16',
            onHit: 'T!',
            tags: ['High', 'High', 'Mid', 'Tornado', 'Launch Punishable'],
            description: 'Tornado move — extends combos. BUT it\'s -16 on block (launch punishable).',
          }}
          showVideo
        />

        <p>
          1,2,1 gives you a <span className="highlight">Tornado (T!)</span>, which lets you 
          extend combos. This is a combo tool, not a pressure tool.
        </p>

        <TipBox variant="danger" title="-16 on Block">
          1,2,1 is LAUNCH PUNISHABLE. Never use this in neutral — only in combos where it's 
          guaranteed to hit. If they block this, you lose half your health.
        </TipBox>

        <KeyConcept title="1,2 Extensions Summary" icon="📋">
          <ul>
            <li><strong>1,2,3</strong> — Safe, use freely</li>
            <li><strong>1,2,4</strong> — Heat engager, risk of duck</li>
            <li><strong>1,2,1</strong> — Combo only, never in neutral</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The 2,1 Family">
        <p>
          Remember 2,1 from Chapter 2? The high-mid string that catches duckers? It also has 
          powerful extensions.
        </p>

        <MoveCard
          move={{
            input: '2,1,4',
            hitLevel: ['h', 'm', 'm'],
            damage: '9, 9, 18',
            startup: 'i10',
            onBlock: '-10',
            onHit: '+3',
            onCH: 'Knockdown + Wall Splat',
            tags: ['High', 'Mid', 'Mid', 'CH Knockdown'],
            description: 'Powerful string that wall splats on counter-hit. The third hit catches people pressing.',
          }}
          showVideo
        />

        <p>
          2,1,4 ends in a mid that <span className="highlight">wall splats on counter-hit</span>. 
          If they try to press after blocking 2,1, the third hit catches them for big damage at the wall.
        </p>

        <p>
          The third hit can be delayed, making it a frame trap. Hit-confirm the first two, then 
          decide whether to continue.
        </p>

        <MoveCard
          move={{
            input: '2,1,4~4',
            hitLevel: ['h', 'm', 'l'],
            damage: '9, 9, 20',
            startup: 'i10',
            onBlock: '-12',
            onHit: 'KND',
            onCH: 'Guaranteed followup',
            tags: ['High', 'Mid', 'Low', 'Low Ender', 'Knockdown'],
            description: 'Low alternative. The fourth hit is a sweep that knocks down.',
          }}
          showVideo
        />

        <p>
          2,1,4~4 changes the ender to a <span className="highlight">low sweep</span>. This catches 
          opponents who expect the mid ender and stand-block.
        </p>

        <KeyConcept title="2,1 Mix-up" icon="🎲">
          <p>After 2,1, you have a 50/50:</p>
          <ul>
            <li><strong>2,1,4</strong> — Mid ender, beats duckers</li>
            <li><strong>2,1,4~4</strong> — Low ender, beats stand blockers</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Condition them with one, then hit them with the other.
          </p>
        </KeyConcept>
      </Section>

      <Section title="2,4 — The Star Punish">
        <MoveCard
          move={{
            input: '2,4',
            hitLevel: ['h', 'h'],
            damage: '9, 20',
            startup: 'i10',
            onBlock: '-13',
            onHit: '+7',
            tags: ['High', 'High', '10f Punish', 'Wall Splats', 'ZEN Transition', 'Tornado'],
            description: 'Jin\'s preferred 10f punish. Wall splats, can transition to ZEN, and is a Tornado move for combos.',
          }}
          showVideo
        />

        <p>
          2,4 is Jin's <span className="highlight">primary punishment tool</span>. It does more 
          damage than 1,2 and has three massive benefits:
        </p>

        <ul>
          <li><strong>Wall splats</strong> — Even from far away, it carries to the wall</li>
          <li><strong>ZEN transition</strong> — Hold forward to go into stance</li>
          <li><strong>Tornado move</strong> — Used in combos to extend damage</li>
        </ul>

        <TipBox variant="tip" title="2,4 is Your Go-To Punish">
          When you block something that's -10 or worse, use 2,4. It does more damage than 1,2 
          and puts you in ZEN stance if you hold forward. At the wall, it leads to massive combos.
        </TipBox>

        <KeyConcept title="2,4 vs 1,2 for Punishment" icon="⚖️">
          <ul>
            <li><strong>2,4</strong> — More damage, wall splats, ZEN transition</li>
            <li><strong>1,2</strong> — Has extensions (1,2,3 for safety, 1,2,4 for heat)</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Generally use 2,4. Use 1,2 if you need the extensions or aren't near a wall.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Putting It Together">
        <p>
          Now you have a complete jab game. Here's how to think about it:
        </p>

        <KeyConcept title="Jab String Decision Tree" icon="🌳">
          <ol>
            <li><strong>Start with 1 or 1,2</strong> — Basic pressure</li>
            <li><strong>If they duck</strong> → Use 2,1 (mid catches duck)</li>
            <li><strong>If they press after 2,1</strong> → Finish with 2,1,4 (CH wall splat)</li>
            <li><strong>If they stand block 2,1,4</strong> → Mix in 2,1,4~4 (low)</li>
            <li><strong>For punishment</strong> → Use 2,4 (wall splat + ZEN)</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Tip">
          Set the training dummy to guard all, then practice: 1,2 → see them block → 1,2,3 (safe). 
          Then: 2,1 → 2,1,4 (frame trap). Get comfortable switching between these.
        </TipBox>
      </Section>

      <Collapsible title="Other Strings to Know" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p><strong>3,1</strong> (h, h)</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>High-high string that can go to ZEN with <code>3,1~f</code></li>
            <li>+12 on hit in ZEN transition</li>
            <li>Has a low ender: <code>3,1,4</code></li>
          </ul>

          <p><strong>1,3</strong> (h, L) and <strong>1,3,4</strong> (h, L, l)</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Jab into low — catches people pressing after jab</li>
            <li>The second hit is a LOW (-12)</li>
            <li>1,3,4 has a third low that CH launches</li>
          </ul>

          <p><strong>b+1,2</strong> (h, h)</p>
          <ul>
            <li>12f startup, -10 on block</li>
            <li>Tornado move — used in combos</li>
            <li>Good for wall combos</li>
          </ul>
        </div>
      </Collapsible>

      <Collapsible title="Frame Data Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>String</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Hit</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Use Case</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+6</td>
                <td style={{ padding: '8px' }}>Base punish, has extensions</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+0</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>KND</td>
                <td style={{ padding: '8px' }}>Safe ender</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-4</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>KND</td>
                <td style={{ padding: '8px' }}>Heat engager (duckable)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-16</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>T!</td>
                <td style={{ padding: '8px' }}>Combos only!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+6</td>
                <td style={{ padding: '8px' }}>Catches duckers</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>2,1,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-10</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+3</td>
                <td style={{ padding: '8px' }}>CH wall splats</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>2,1,4~4</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>KND</td>
                <td style={{ padding: '8px' }}>Low ender mix</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>2,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+7</td>
                <td style={{ padding: '8px' }}>Punish, wall splat, ZEN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
