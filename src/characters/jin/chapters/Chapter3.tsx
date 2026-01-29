import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Core Mids & Lows"
      intro="Jabs are great, but they're highs — opponents can duck them. To have complete offense, you need mids that hit crouching opponents and lows that force them to block low."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Feel Your Neutral"
    >
      <Section title="The High-Mid-Low Triangle">
        <p>
          Tekken offense is built on three attack heights:
        </p>

        <KeyConcept title="Attack Heights" icon="📐">
          <ul>
            <li><strong>Highs</strong> — Fast, but can be ducked</li>
            <li><strong>Mids</strong> — Hit crouching opponents, can't be ducked</li>
            <li><strong>Lows</strong> — Must be blocked crouching, force reaction</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Good offense mixes all three. If you only use one height, opponents adapt and shut you down.
          </p>
        </KeyConcept>
      </Section>

      <Section title="f+4 — The Star of Jin's Gameplan">
        <MoveCard
          move={{
            input: 'f+4',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i16-17',
            onBlock: '-8',
            onHit: '+4',
            onCH: '+42a (Launch)',
            tags: ['Mid', 'Counter-Hit Launcher', 'Safe', 'Long Range'],
            description: 'One of Jin\'s best moves. Safe, long range, and LAUNCHES on counter-hit for a full combo.',
          }}
          showVideo
        />

        <p>
          f+4 is arguably <span className="highlight">Jin's most important move</span>. Let's break down why:
        </p>

        <ul>
          <li><strong>Safe on block</strong> — At -8 with pushback, most characters can only jab punish</li>
          <li><strong>Great range</strong> — Reaches surprisingly far</li>
          <li><strong>Counter-hit launches</strong> — If they press a button, full combo</li>
          <li><strong>ZEN transition</strong> — Can go into stance with <code>f+4~f</code></li>
        </ul>

        <TipBox variant="tip" title="How to Confirm Counter-Hits">
          When f+4 lands on counter-hit, the opponent crumples slowly. This is your cue to 
          dash up and combo. Practice recognizing this animation — it's distinct from normal hit.
        </TipBox>

        <KeyConcept title="When to Use f+4" icon="🎯">
          <ul>
            <li><strong>When opponent approaches</strong> — They walk into it, eat CH combo</li>
            <li><strong>After plus frames</strong> — Jab (+1) → f+4 catches button presses</li>
            <li><strong>At round start</strong> — Catches aggressive openers</li>
            <li><strong>To check spacing</strong> — The range is incredible</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="df+3 — The Fast Mid">
        <MoveCard
          move={{
            input: 'df+3',
            hitLevel: ['m'],
            damage: '16',
            startup: 'i12',
            onBlock: '-8',
            onHit: '+3',
            tags: ['Mid', 'Fast', 'Safe'],
            description: 'Jin\'s fastest standing mid at i12. Use when you need speed over range.',
          }}
          showVideo
        />

        <p>
          df+3 is <span className="highlight">faster than df+1</span> (i12 vs i13). Use it when you 
          need a quick mid check and f+4 would be too slow.
        </p>

        <p>
          It doesn't have the range or CH reward of f+4, but the speed makes it valuable in 
          tight situations.
        </p>

        <Collapsible title="df+3~3 — The Breaking Step Transition" icon="⚡">
          <div style={{ marginTop: '12px' }}>
            <p>
              <code>df+3~3</code> transitions into Breaking Step, giving you access to easy electrics.
              It's +6c on hit, leaving them crouching with you at advantage.
            </p>
            <p style={{ marginTop: '8px' }}>
              We'll cover Breaking Step more in Chapter 6 (The Electric).
            </p>
          </div>
        </Collapsible>
      </Section>

      <Section title="d+4 — The Quick Low">
        <MoveCard
          move={{
            input: 'd+4',
            hitLevel: ['l'],
            damage: '11',
            startup: 'i16-17',
            onBlock: '-12',
            onHit: '-1',
            tags: ['Low', 'Poke', 'High Crush'],
            description: 'Quick low poke that crushes highs. Chips damage and keeps them honest.',
          }}
          showVideo
        />

        <p>
          d+4 is Jin's <span className="highlight">quick low</span>. It doesn't do much damage, 
          but it's fast and <strong>crushes highs</strong> — it goes under high attacks.
        </p>

        <KeyConcept title="When to Use d+4" icon="👇">
          <ul>
            <li><strong>To chip turtles</strong> — Opponents blocking everything? d+4 hits low.</li>
            <li><strong>To crush highs</strong> — Predict a jab string? d+4 ducks and hits.</li>
            <li><strong>At round end</strong> — Low HP opponent? d+4 can finish them.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="-12 on Block">
          d+4 is -12 on block — opponents can punish with ws4 or similar. Don't overuse it 
          against players who block and punish consistently.
        </TipBox>
      </Section>

      <Section title="db+4 — The Chunky Low">
        <MoveCard
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '18',
            startup: 'i20-21',
            onBlock: '-13',
            onHit: '+3',
            onCH: '+13g',
            tags: ['Low', 'Plus on Hit', 'Long Range'],
            description: 'Your main damage low. Plus on hit lets you continue pressure.',
          }}
          showVideo
        />

        <p>
          db+4 is Jin's <span className="highlight">real low threat</span>. It does actual damage 
          (18) and you're <strong>+3 on hit</strong>. That means after landing db+4, your jab 
          comes out faster than their jab — you get to continue pressure.
        </p>

        <KeyConcept title="Why +3 Matters" icon="➕">
          <p>When you're +3, your i10 jab effectively becomes i7 from the opponent's perspective.</p>
          <ol>
            <li>Land db+4 (you're +3)</li>
            <li>They have to respect your frame advantage</li>
            <li>You can do another low, a mid, or throw</li>
            <li>Eventually they stop respecting, you jab them</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="-13 on Block">
          db+4 is launch punishable by some characters. Use it when you've conditioned them 
          to stand block, not randomly. The risk-reward is 18 damage vs potential 40+ punish.
        </TipBox>
      </Section>

      <Section title="The Basic Gameplan">
        <p>
          With your jabs (Chapter 2) and these mids/lows, you now have functional Jin offense:
        </p>

        <KeyConcept title="Mixing Your Offense" icon="🎲">
          <ol>
            <li><strong>Poke with jabs</strong> — Build respect, check opponents</li>
            <li><strong>Fish with f+4</strong> — Catch them pressing, get CH combos</li>
            <li><strong>Chip with d+4</strong> — Force them to block low</li>
            <li><strong>Punish blocking with db+4</strong> — Real damage, plus frames</li>
            <li><strong>Repeat and adapt</strong></li>
          </ol>
        </KeyConcept>

        <p>
          Opponents who block everything eat lows. Opponents who try to duck your lows eat f+4. 
          Opponents who press buttons eat counter-hits. This triangle wins games.
        </p>
      </Section>

      <Collapsible title="Other Mids to Know" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Jin has more mids beyond f+4 and df+3. These are situationally useful:
          </p>

          <p><strong>b+4</strong> (i17, -7 oB, knockdown)</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Safe mid that knocks down on hit</li>
            <li>Good for ending rounds</li>
          </ul>

          <p><strong>df+4</strong> (i20, +0 oB, spike)</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Neutral on block — completely safe</li>
            <li>Heat engager</li>
            <li>Slower but zero risk</li>
          </ul>

          <p><strong>b+2,1</strong> (i15, -9 oB)</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Mid-mid string with good range</li>
            <li>Safe, good for ending rounds</li>
          </ul>

          <p><strong>ff+3</strong> (i22, +6 oB when running)</p>
          <ul>
            <li>While-running mid that's PLUS on block</li>
            <li>Chip damage, can transition to ZEN</li>
          </ul>
        </div>
      </Collapsible>

      <Collapsible title="Other Lows to Know" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Jin's other lows have specific uses:
          </p>

          <p><strong>d+2</strong> (i22, -14 oB, +4c oH)</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Chunky low that high crushes</li>
            <li>Hits grounded opponents — key for oki (Chapter 12)</li>
            <li>-14 on block so be careful</li>
          </ul>

          <p><strong>d+3</strong> (i15, -14 oB)</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Fast low kick</li>
            <li>Has extensions: d+3,4 and d+3,4,3</li>
          </ul>

          <p><strong>FC.df+4</strong> (i21, -26 oB, launches on CH)</p>
          <ul>
            <li>Full crouch sweep</li>
            <li>Counter-hit LAUNCHES for full combo</li>
            <li>Very risky but huge reward</li>
            <li>Can transition to ZEN on hit</li>
          </ul>
        </div>
      </Collapsible>

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
                <td style={{ padding: '8px' }}><code>f+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4</td>
                <td style={{ padding: '8px' }}>CH launches!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+3</td>
                <td style={{ padding: '8px' }}>Fastest mid</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-1</td>
                <td style={{ padding: '8px' }}>Quick low, high crush</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i20</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3</td>
                <td style={{ padding: '8px' }}>Chunky, plus on hit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
