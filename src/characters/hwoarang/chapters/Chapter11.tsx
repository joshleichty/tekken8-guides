import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Heat System"
      intro="Heat is Tekken 8's signature mechanic, and Hwoarang benefits massively. His hell sweep becomes a full combo, RFS f+4,4 becomes guaranteed, and his chip damage is among the best in the game."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Defense & Panic Moves"
    >
      <Section title="Heat Basics">
        <p>
          You get <span className="highlight">one Heat activation per round</span>. When activated, 
          your health bar glows, a timer appears, and Hwoarang gets several powerful benefits:
        </p>

        <KeyConcept title="Hwoarang's Heat Benefits" icon="🔥">
          <ul>
            <li><strong>RFS d+4,3,4 full combo</strong> — Hell sweep becomes natural on hit</li>
            <li><strong>RFS f+4,4 guaranteed</strong> — No longer just CH, always combos</li>
            <li><strong>Massive chip damage</strong> — Pressure drains health on block</li>
            <li><strong>Recoverable health</strong> — White health regenerates in Heat</li>
            <li><strong>Heat Dash extensions</strong> — Extend combos with Heat Dash</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Heat Transforms Your 50/50">
          Without Heat, your hell sweep doesn't naturally combo (except on CH). In Heat, 
          it's a full knockdown with guaranteed follow-up. This makes your RFS mixup 
          terrifying — they take big damage either way.
        </TipBox>
      </Section>

      <Section title="Heat Engagers">
        <p>
          <span className="highlight">Heat Engagers</span> activate Heat on hit. Hwoarang has 
          several, most of which are safe:
        </p>

        <MoveCard character="hwoarang"
          move={{
            input: 'RFF.df+3',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i22-24',
            onBlock: '+1',
            onHit: '+6 (Heat Engager)',
            tags: ['Mid', 'Heat Engager', 'Plus on Block', 'Homing', 'Long Range'],
            description: 'Your BEST heat engager. Plus on block (!), homing, insane range.',
          }}
          showVideo
        />

        <p>
          RFF df+3 is <span className="highlight">plus on block AND a heat engager</span>. This 
          move has ridiculous range, tracks both directions, and leaves you at +1 on block or 
          +6 on hit. This is your go-to Heat activation.
        </p>

        <KeyConcept title="Why RFF df+3 is Broken" icon="💀">
          <ul>
            <li>+1 on block — You're PLUS after activating Heat</li>
            <li>Homing — Can't be sidestepped</li>
            <li>Range 3.2+ — Reaches from almost full screen</li>
            <li>Wall splats — At the wall, get a combo after Heat activation</li>
            <li>Safe approach — Use it to get in AND activate Heat</li>
          </ul>
        </KeyConcept>

        <MoveCard character="hwoarang"
          videoId="f,F+4"
          move={{
            input: 'ff+4',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i17-18',
            onBlock: '-7',
            onHit: '+19a (Heat Engager)',
            tags: ['Mid', 'Heat Engager', 'Safe', 'RFF.Transition'],
            description: 'Running heat engager. Safe, good range, goes to RFF.',
          }}
          showVideo
        />

        <MoveCard character="hwoarang"
          move={{
            input: 'LFS.f+3',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i19-20',
            onBlock: '+4',
            onHit: '+26a (Heat Engager)',
            tags: ['Mid', 'Heat Engager', 'Plus on Block', 'LFS.Only'],
            description: 'Heat engager from LFS. +4 on block, stays in LFS.',
          }}
          showVideo
        />

        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.b+3',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i16-17',
            onBlock: '-9',
            onHit: '+7 (Heat Engager)',
            tags: ['Mid', 'Heat Engager', 'Safe', 'RFS.Only'],
            description: 'Heat engager from RFS. Safe at -9.',
          }}
          showVideo
        />

        <MoveCard character="hwoarang"
          move={{
            input: 'df+3+4',
            hitLevel: ['m', 'h', 'm'],
            damage: '7, 4, 17',
            startup: 'i13',
            onBlock: '-14',
            onHit: '+4c (Heat Engager)',
            tags: ['Mid', 'High', 'Mid', 'Heat Engager', '13f Punish'],
            description: '13f heat engager. Use as punishment to activate Heat.',
          }}
          showVideo
        />

        <KeyConcept title="Which Engager to Use?" icon="🎯">
          <ul>
            <li><strong>RFF df+3</strong> — Default. Safe, plus, homing, range.</li>
            <li><strong>ff+4</strong> — Running approach engager.</li>
            <li><strong>LFS f+3</strong> — From LFS pressure, +4 on block.</li>
            <li><strong>RFS b+3</strong> — From RFS when you want Heat.</li>
            <li><strong>df+3+4</strong> — 13f punishment into Heat.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Enhancements">
        <p>
          In Heat, these moves become significantly stronger:
        </p>

        <MoveCard character="hwoarang"
          move={{
            input: 'H.RFS.d+4,3,4',
            hitLevel: ['l', 'h', 'h'],
            damage: '15, 12, 30',
            startup: 'i20-21',
            onBlock: '-9',
            onHit: '+28a (Natural Combo)',
            tags: ['Low', 'High', 'High', 'Heat Enhanced', 'Full Combo'],
            description: 'IN HEAT: Full natural combo! Wall splats, floor breaks. Your power low.',
          }}
          showVideo
        />

        <p>
          <span className="highlight">This is the big one.</span> In Heat, RFS d+4,3,4 becomes 
          natural on hit — all three kicks combo. This transforms your RFS 50/50:
        </p>

        <KeyConcept title="Heat 50/50 vs Non-Heat 50/50" icon="🔥">
          <div style={{ display: 'grid', gap: '12px', marginTop: '12px' }}>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <strong>Without Heat</strong>
              <ul style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
                <li>Hell sweep: Knockdown only (no combo unless CH)</li>
                <li>They might take the risk and stand block</li>
              </ul>
            </div>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent-secondary)' }}>
              <strong style={{ color: 'var(--accent-secondary)' }}>With Heat</strong>
              <ul style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
                <li>Hell sweep: FULL COMBO, wall splat, floor break</li>
                <li>They MUST duck or take massive damage</li>
              </ul>
            </div>
          </div>
        </KeyConcept>

        <MoveCard character="hwoarang"
          move={{
            input: 'H.RFS.f+4,4',
            hitLevel: ['h', 'h', 'h'],
            damage: '8, 10, 9',
            startup: 'i8',
            onBlock: '-6',
            onHit: '+75a (Natural Tornado)',
            tags: ['High', 'High', 'High', 'Heat Enhanced', 'Natural Combo'],
            description: 'IN HEAT: Natural combo! No CH required. Full Tornado.',
          }}
          showVideo
        />

        <p>
          In Heat, RFS f+4,4 always combos — not just on counter-hit. This makes your RFS 
          pressure even scarier because both options (f+4,4 and hell sweep) now lead to 
          full combos.
        </p>
      </Section>

      <Section title="Heat Smash">
        <MoveCard character="hwoarang"
          move={{
            input: 'H.2+3',
            hitLevel: ['m', 't', 'm', 'h'],
            damage: '~80',
            startup: 'i17-18',
            onBlock: '+11',
            onHit: 'Attack Throw',
            tags: ['Heat Smash', 'Plus on Block', 'RFS.Transition'],
            description: 'Heat Smash. Jails into attack throw on hit. +11 on block with RFS transition.',
          }}
          showVideo
        />

        <p>
          Hwoarang's Heat Smash is unique because it's <span className="highlight">plus on block</span>. 
          At +11, if they block it, you're in RFS with massive advantage. This makes it safe 
          to throw out even without confirming.
        </p>

        <TipBox variant="warning" title="The Second Hit is Duckable">
          Like many Heat Smashes, there's a high hit in the string that can be ducked. 
          Good players will duck after blocking the first hit. Use Heat Smash in combos 
          or when you have a hard read.
        </TipBox>
      </Section>

      <Section title="Heat Chip Damage">
        <p>
          Hwoarang has <span className="highlight">some of the best chip damage in Heat</span>. 
          His multi-hit strings drain health even on block:
        </p>

        <KeyConcept title="High Chip Moves" icon="💥">
          <ul>
            <li><code>RFS f+4,4</code> — 2 chip per kick (6 total)</li>
            <li><code>RFS d+4,3,4</code> — 9 chip if fully blocked</li>
            <li><code>LFS 4~3</code> — 7-8 chip with power-up version</li>
            <li><code>4,4,4,4</code> — 6 chip, forces backroll</li>
            <li><code>Backlash (RFF 3~4)</code> — 10 chip</li>
          </ul>
        </KeyConcept>

        <p>
          In Heat, your pressure becomes a health bar eraser. Even if they block everything, 
          they're taking damage. This forces them to take risks to stop your pressure.
        </p>
      </Section>

      <Section title="Heat Strategy">
        <KeyConcept title="When to Activate Heat" icon="⏱️">
          <ul>
            <li><strong>After landing d+3,4</strong> — You're in RFS, do RFS b+3 to engage</li>
            <li><strong>From neutral with RFF df+3</strong> — Safe, plus, approach tool</li>
            <li><strong>As 13f punishment</strong> — df+3+4 activates Heat from a punish</li>
            <li><strong>In combos</strong> — Heat Dash extends combos</li>
            <li><strong>To close rounds</strong> — Heat chip finishes low HP opponents</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Heat Pressure Plan" icon="🔥">
          <ol>
            <li><strong>Engage with RFF df+3</strong> — Start Heat safely at +1</li>
            <li><strong>d+3,4 → RFS</strong> — Start your 50/50</li>
            <li><strong>Hell sweep or 4,3</strong> — Both lead to full combos now</li>
            <li><strong>Chip them out</strong> — If they block, they still lose health</li>
            <li><strong>Heat Smash to finish</strong> — Use when you have them locked</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Heat is Your Win Condition">
          Hwoarang's Heat is so strong that you should plan your rounds around it. 
          Get a life lead, activate Heat, and pressure them into oblivion. The chip 
          damage alone can close rounds.
        </TipBox>
      </Section>

      <Section title="Heat Dash Combos">
        <p>
          Heat Dash lets you extend combos after Heat Engagers:
        </p>

        <div style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '16px', borderRadius: '8px', marginTop: '12px' }}>
          <p><strong>Heat Dash from RFF df+3:</strong></p>
          <p>RFF df+3 → Heat Dash → f+4 → RFS 3~4 → LFS uf+4 T! → uf+3,4,3</p>
          <p style={{ marginTop: '12px' }}><strong>Heat Dash from ff+4:</strong></p>
          <p>ff+4 → Heat Dash → f+4 → RFS 3~4 → LFS uf+4 T! → uf+3,4,3</p>
        </div>
      </Section>

      <Collapsible title="Heat Move Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Type</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>RFF df+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>Best engager, +1 on block, homing</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ff+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>Running engager, safe</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>LFS f+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>+4 on block from LFS</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RFS b+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>Safe from RFS</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+3+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>13f punish engager</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>H.RFS d+4,3,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Enhanced</td>
                <td style={{ padding: '8px' }}>Natural combo in Heat!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>H.RFS f+4,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Enhanced</td>
                <td style={{ padding: '8px' }}>Natural combo in Heat!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>H.2+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Smash</td>
                <td style={{ padding: '8px' }}>+11 on block, duckable high</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
