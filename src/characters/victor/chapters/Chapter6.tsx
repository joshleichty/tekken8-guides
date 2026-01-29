import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="IAI Stance"
      intro="IAI stance is where Victor becomes truly terrifying. With long-range mids that wall splat and a devastating power low, IAI at the wall creates some of the scariest 50/50 pressure in Tekken 8."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Stance Transitions"
    >
      <Section title="Understanding IAI Stance">
        <p>
          IAI stance is <span className="highlight">read-heavy and committal</span>. Unlike PRF, 
          most IAI options are unsafe. But the reward is massive — wall splats, knockdowns, 
          and huge damage.
        </p>

        <KeyConcept title="IAI Philosophy" icon="⚔️">
          <ul>
            <li><strong>High commitment</strong> — Most options are unsafe</li>
            <li><strong>High reward</strong> — Wall splats, big damage, mixups</li>
            <li><strong>Best at the wall</strong> — 50/50 becomes truly scary</li>
            <li><strong>Requires conditioning</strong> — You need mental stack to apply IAI</li>
            <li><strong>Enhanced in heat</strong> — IAI.d+2 becomes even better</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="IAI is Committal">
          You cannot block in IAI stance. Every option you choose leaves you vulnerable if 
          wrong. This is why IAI works best after conditioning or at the wall where opponents 
          are trapped.
        </TipBox>
      </Section>

      <Section title="How to Enter IAI">
        <KeyConcept title="IAI Entry Options" icon="🚪">
          <ul>
            <li><code>3+4</code> — Manual entry</li>
            <li><code>uf+1,1~d</code> or <code>uf+1,1~3+4</code> — From wall splat tool</li>
            <li><code>2,2,2</code> — From knowledge check string</li>
            <li><code>qcf+2</code> — From projectile</li>
            <li><code>PRF.2,2</code> — From PRF string</li>
            <li><code>f,f,f+2~d</code> — From running mid (+5)</li>
            <li><code>f,f,f+1+2</code> — From running low (+4)</li>
            <li><code>f+4,2~d</code> — From f+4 string (combo/pressure)</li>
            <li><code>df+4,2</code> — Automatically enters IAI</li>
            <li><code>h.db+1+2</code> — Heat-only entry (+6!)</li>
          </ul>
        </KeyConcept>

        <p>
          The most common entries are from <code>f,f,f+2~d</code> (approaching), <code>2,2,2</code> 
          (pressure), and <code>PRF.2,2</code> (from PRF). At the wall, <code>f+4,2~d</code> after 
          combos is devastating.
        </p>
      </Section>

      <Section title="IAI Movement & Cancel">
        <KeyConcept title="IAI Movement Options" icon="🦶">
          <ul>
            <li><code>IAI~f</code> — Move forward (has auto low-parry window!)</li>
            <li><code>IAI~b</code> — Move backward</li>
            <li><code>IAI~d</code> — Duck (high crushes)</li>
            <li><code>IAI~u</code> — Teleport forward (evades attacks!)</li>
            <li><code>IAI~db</code> or <code>IAI~3+4</code> — Cancel stance (exit to neutral)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Forward Low Parry">
          Tapping forward in IAI has a low-parry window. The timing is strict, but it's 
          useful against predictable lows. It also moves you forward for spacing.
        </TipBox>

        <TipBox variant="tip" title="The Teleport (IAI~u)">
          Pressing up in IAI teleports Victor forward about 14-17 frames. This evades many 
          attacks and repositions you for pressure. Very useful after df+4,2 in combos 
          for oki setups.
        </TipBox>
      </Section>

      <Section title="IAI.1,1 — Fast Mid Check">
        <MoveCard character="victor"
          move={{
            input: 'IAI.1,1',
            hitLevel: ['m', 'm'],
            damage: '9, 21',
            startup: 'i13-14',
            onBlock: '-14',
            onHit: '+15g',
            tags: ['Mid', 'Mid', 'Tornado', 'Wall Splat', 'Fast', 'PRF/IAI Transition'],
            description: 'Same as uf+1,1. Fastest IAI option. Wall splats, can cancel into stances.',
          }}
          showVideo
        />

        <p>
          IAI.1,1 is <span className="highlight">your fastest IAI option</span> (i13). It wall 
          splats, gives tornado on hit, and can cancel into PRF or back into IAI. Use it 
          to check opponents pressing buttons in your IAI pressure.
        </p>

        <MoveCard character="victor"
          move={{
            input: 'IAI.1,1+2',
            hitLevel: ['m', 'h'],
            damage: '9, 23',
            startup: 'i13-14',
            onBlock: '+3',
            onHit: '+20a',
            tags: ['Mid', 'High', 'PLUS on Block', 'Homing'],
            description: 'Alternative extension. Plus on block but second hit is HIGH.',
          }}
          showVideo
        />

        <p>
          IAI.1,1+2 is <span className="highlight">plus on block</span> (+3), but the second 
          hit is high (can be ducked). The second hit is homing though, so it catches sidesteps.
        </p>

        <KeyConcept title="IAI.1 Mix" icon="🎲">
          <ul>
            <li><code>IAI.1,1</code> — Mid-mid, wall splats, -14 on block</li>
            <li><code>IAI.1,1+2</code> — Mid-high, +3 on block, duckable</li>
            <li><code>IAI.1,1~d</code> — Cancel into IAI, restart pressure</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Mix these to keep opponents guessing. If they duck expecting 1,1+2, 
            they eat the full IAI.1,1.
          </p>
        </KeyConcept>
      </Section>

      <Section title="IAI.2 — Safe Wall Splat Mid">
        <MoveCard character="victor"
          move={{
            input: 'IAI.2',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i16-17',
            onBlock: '-9',
            onHit: '+15 (+5)',
            onCH: 'u+1+2 guaranteed',
            tags: ['Mid', 'Safe', 'Wall Splat', 'Tornado', 'Tracks Both Sides'],
            description: 'Safe mid slash that wall splats. Your go-to IAI mid. Tracks fully.',
          }}
          showVideo
        />

        <p>
          IAI.2 is <span className="highlight">your primary IAI mid</span>. It's safe (-9), 
          wall splats, gives tornado in combos, and <strong>tracks fully to both sides</strong>. 
          On CH, u+1+2 is guaranteed.
        </p>

        <KeyConcept title="Why IAI.2 is Key" icon="⭐">
          <ul>
            <li><strong>Safe</strong> — Can't be launch punished</li>
            <li><strong>Wall splats</strong> — Devastating at the wall</li>
            <li><strong>Tracks both ways</strong> — Beats sidesteps</li>
            <li><strong>CH bonus</strong> — Free u+1+2 on CH</li>
            <li><strong>Combo tool</strong> — Tornado in combos</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="IAI.d+2 — Plus-Frame Pressure">
        <MoveCard character="victor"
          move={{
            input: 'IAI.d+2',
            hitLevel: ['m', 'sm'],
            damage: '31',
            startup: 'i23-24',
            onBlock: '+4 (IAI)',
            onHit: '+0 (-7)',
            tags: ['Mid', 'Special Mid', 'PLUS on Block', 'IAI.Loop', 'Chip Damage', 'Enhanced in Heat'],
            description: 'Plus on block pressure tool. Keeps you in IAI for loops. Amazing in heat.',
          }}
          showVideo
        />

        <p>
          IAI.d+2 is Victor's <span className="highlight">IAI pressure loop tool</span>. At +4 
          in IAI on block with chip damage, this move lets you continue pressuring. In heat, 
          it becomes even better (+8 on block with more chip).
        </p>

        <KeyConcept title="The IAI.d+2 Loop" icon="🔁">
          <ol>
            <li>Do <code>IAI.d+2</code> — They block (+4 in IAI)</li>
            <li>You're plus in IAI — Mix between IAI.2 and IAI.d+1+2</li>
            <li>If they try to interrupt — IAI.1,1 or IAI.3 beats them</li>
            <li>Repeat — The pressure is relentless</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Wall Pressure Monster">
          At the wall, IAI.d+2 on block sets up a terrifying situation. They must guess 
          between IAI.2 (wall splat) and IAI.d+1+2 (knockdown). Both options hurt badly.
        </TipBox>
      </Section>

      <Section title="IAI.d+1+2 — The Power Low">
        <MoveCard character="victor"
          move={{
            input: 'IAI.d+1+2',
            hitLevel: ['l', 'l'],
            damage: '10, 20',
            startup: 'i20-21',
            onBlock: '-29',
            onHit: '-3',
            tags: ['Low', 'Low', 'Power Low', 'Full Tracking', 'Knockdown'],
            description: 'Devastating power low. Tracks fully to both sides. Very risky but rewarding.',
          }}
          showVideo
        />

        <p>
          IAI.d+1+2 is Victor's <span className="highlight">IAI power low</span>. It tracks 
          fully to both sides, does 30 damage, and knocks down for oki. But it's -29 on 
          block — launch punishable by everyone.
        </p>

        <KeyConcept title="IAI 50/50" icon="🎲">
          <p>At the wall with plus frames:</p>
          <ul>
            <li><code>IAI.2</code> — Mid, wall splat, safe</li>
            <li><code>IAI.d+1+2</code> — Low, knockdown, risky</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            This is Victor's main wall 50/50. They have to guess — both options lead to 
            devastating damage.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Use Sparingly">
          IAI.d+1+2 is a READ, not a spam tool. Use it when you've conditioned them to 
          block mids, or at round-ending situations where the risk is worth it.
        </TipBox>
      </Section>

      <Section title="IAI.4,2 — Counter-Hit Launcher">
        <MoveCard character="victor"
          move={{
            input: 'IAI.4,2',
            hitLevel: ['l', 'h'],
            damage: '17, 20',
            startup: 'i18-19',
            onBlock: '-5',
            onHit: '+26 (+0)',
            onCH: 'T! Launch',
            tags: ['Low', 'High', 'CH Launcher', 'Wall Splat', 'Safe-ish'],
            description: 'Low-high string. The second hit is guaranteed on hit. CH launches!',
          }}
          showVideo
        />

        <p>
          IAI.4,2 is Victor's <span className="highlight">IAI CH launcher low</span>. The 
          first hit is a low, and the second hit is guaranteed on hit. On CH, it launches 
          for a full combo and wall splats.
        </p>

        <KeyConcept title="IAI.4,2 Properties" icon="⚡">
          <ul>
            <li><strong>Low-high string</strong> — Second hit guaranteed on hit</li>
            <li><strong>CH launches</strong> — Full combo on counter-hit</li>
            <li><strong>Jails on hit</strong> — Can't duck the second hit</li>
            <li><strong>-5 on block</strong> — Safer than IAI.d+1+2</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Beats Power Crush">
          IAI.4,2 is great against opponents who try to power crush or heat burst out of 
          IAI pressure. The low catches their armor and the CH gives you a full combo.
        </TipBox>
      </Section>

      <Section title="IAI.3 — Power Crush">
        <MoveCard character="victor"
          move={{
            input: 'IAI.3',
            hitLevel: ['m'],
            damage: '13 + throw',
            startup: 'i17',
            onBlock: '-13',
            onHit: '+25 (+10)',
            tags: ['Mid', 'Power Crush', 'Knee', 'Attack Throw'],
            description: 'Power crush from IAI. Use when opponents try to interrupt.',
          }}
          showVideo
        />

        <p>
          IAI.3 is your <span className="highlight">IAI power crush</span>. Use it when you 
          predict opponents will try to interrupt your IAI pressure. It's -13 on block but 
          gives an attack throw on hit.
        </p>
      </Section>

      <Section title="IAI.d+1 — Heat Engager Mid">
        <MoveCard character="victor"
          move={{
            input: 'IAI.d+1',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i18',
            onBlock: '-2',
            onHit: '+24a (+9) / HE',
            tags: ['Mid', 'Heat Engager', 'Safe', 'Hits Grounded', 'Wall Splat'],
            description: 'Safe mid heat engager from IAI. Hits grounded, tracks to weak side.',
          }}
          showVideo
        />

        <p>
          IAI.d+1 is a <span className="highlight">safe heat engager</span> from IAI. It's 
          only -2 on block, hits grounded, and tracks to Victor's weak side (SSR). Great 
          for oki situations.
        </p>
      </Section>

      <Section title="Wall Pressure with IAI">
        <KeyConcept title="IAI Wall Game" icon="🧱">
          <ol>
            <li><strong>Get to the wall</strong> — Via combo or pressure</li>
            <li><strong>Enter IAI</strong> — Via f+4,2~d, 2,1~f PRF.2,2, etc.</li>
            <li><strong>Apply pressure with IAI.d+2</strong> — Plus on block</li>
            <li><strong>Mix IAI.2 and IAI.d+1+2</strong> — The 50/50</li>
            <li><strong>Check with IAI.1,1</strong> — If they try to press</li>
            <li><strong>IAI.4,2 for power crush reads</strong> — Beats armor</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The Ultimate Goal">
          Victor wants to get opponents to the wall and apply IAI pressure. This is where 
          he becomes truly elite. His combos have massive wall carry specifically to enable 
          this game plan.
        </TipBox>
      </Section>

      <Collapsible title="IAI Frame Data" icon="📊">
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
                <td style={{ padding: '8px' }}><code>IAI.1,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+15g T!</td>
                <td style={{ padding: '8px' }}>Fast, wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>IAI.1,1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+20a</td>
                <td style={{ padding: '8px' }}>Plus, but high</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>IAI.2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+15 T!</td>
                <td style={{ padding: '8px' }}>Safe, wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>IAI.d+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i23</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4 IAI</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+0</td>
                <td style={{ padding: '8px' }}>Loop tool, +8 in heat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>IAI.d+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i20</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-29</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-3</td>
                <td style={{ padding: '8px' }}>Power low, full track</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>IAI.4,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-5</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+26</td>
                <td style={{ padding: '8px' }}>CH launches!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>IAI.3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+25</td>
                <td style={{ padding: '8px' }}>Power crush</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>IAI.d+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-2</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>HE</td>
                <td style={{ padding: '8px' }}>Safe HE, hits grounded</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
