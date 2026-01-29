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
      intro="Fahkumram excels at controlling space with long-range mids and has solid low options to force opponents to respect. Understanding when to use each is key to his gameplan."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Learn Key Strings"
    >
      <Section title="The High-Mid-Low Triangle">
        <p>
          Tekken offense is built on three attack heights. Fahkumram's unique strength is having 
          <span className="highlight">the longest-range mids in the game</span> while his lows, 
          though risky, are very rewarding.
        </p>

        <KeyConcept title="Attack Heights" icon="📐">
          <ul>
            <li><strong>Highs</strong> — Fast, but can be ducked</li>
            <li><strong>Mids</strong> — Hit crouching opponents, can't be ducked</li>
            <li><strong>Lows</strong> — Must be blocked crouching, force reaction</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Fahkumram's mids have amazing range, but his lows are all at least -13 on block.
            This means you need to condition opponents before throwing lows.
          </p>
        </KeyConcept>
      </Section>

      <Section title="b,f+4 — The Jet Kick">
        <MoveCard character="fahkumram"
          move={{
            input: 'b,f+4',
            hitLevel: ['h'],
            damage: '25',
            startup: 'i18',
            onBlock: '+6',
            onHit: '+47cs (Launch)',
            tags: ['High', 'Launcher', 'Plus on Block', 'Tracks Left', 'Reversal Break'],
            description: 'Fahkumram\'s signature move. A high launcher that\'s +6 ON BLOCK with incredible range and reversal break property.',
          }}
          showVideo
        />

        <p>
          b,f+4 (Jet Kick) is arguably <span className="highlight">Fahkumram's best move</span>. 
          Let's break down why it's so powerful:
        </p>

        <ul>
          <li><strong>+6 on block</strong> — You're at massive advantage even when blocked</li>
          <li><strong>Normal hit launcher</strong> — Full combo on any hit</li>
          <li><strong>Reversal break</strong> — Goes through parries and power crushes</li>
          <li><strong>Tracks left</strong> — Catches sidesteps to the left</li>
          <li><strong>Huge range</strong> — Reaches across the screen</li>
        </ul>

        <KeyConcept title="Jet Kick Strategy" icon="⚡">
          <ul>
            <li><strong>Use at mid-range</strong> — This is where it shines</li>
            <li><strong>After blocking</strong> — +6 means you can pressure or mixup</li>
            <li><strong>Against step left</strong> — Tracks to catch leftward movement</li>
            <li><strong>Whiff punishment</strong> — Incredible range makes it great for this</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="It's a HIGH">
          Jet Kick can be ducked and launch punished. At higher levels, opponents will duck on 
          read. Mix it with 3+4 (tracks right, is a mid) to cover both options.
        </TipBox>
      </Section>

      <Section title="3+4 — The Counter-Hit Monster">
        <MoveCard character="fahkumram"
          move={{
            input: '3+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i18',
            onBlock: '-9',
            onHit: '+18a (+9)',
            onCH: '+58cs (Launch)',
            tags: ['Mid', 'Counter-Hit Launcher', 'Safe', 'Tracks Right'],
            description: 'Safe mid that launches on counter-hit. Tracks right to complement b,f+4 which tracks left.',
          }}
          showVideo
        />

        <p>
          3+4 is your <span className="highlight">safe mid counterhit launcher</span>. It tracks 
          right (opposite of b,f+4), is safe at -9, and gives a full combo on counter-hit.
        </p>

        <KeyConcept title="b,f+4 vs 3+4 — The Perfect Pair" icon="🎯">
          <ul>
            <li><strong>b,f+4</strong> — Tracks LEFT, HIGH, +6 on block, normal hit launcher</li>
            <li><strong>3+4</strong> — Tracks RIGHT, MID, -9 on block, CH launcher only</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Together, these two moves cover both sidestep directions. If they step left, 
            b,f+4 catches them. If they step right, 3+4 catches them.
          </p>
        </KeyConcept>
      </Section>

      <Section title="df+4 — The Safe Mid">
        <MoveCard character="fahkumram"
          move={{
            input: 'df+4',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i16',
            onBlock: '-6',
            onHit: '+3',
            tags: ['Mid', 'Safe', 'Tracks Right', 'Extensions'],
            description: 'Safe mid with great range, tracks right, and has powerful extensions.',
          }}
          showVideo
        />

        <p>
          df+4 is a safer option than 3+4 at -6 on block. It tracks right and has two 
          important extensions:
        </p>

        <Collapsible title="df+4 Extensions" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <p><strong>df+4,1</strong> — Mid-high extension. Safe at -6.</p>
            <ul style={{ marginBottom: '12px' }}>
              <li>Wall splats</li>
              <li>Can be ducked since second hit is high</li>
            </ul>
            
            <p><strong>df+4,3</strong> — Mid-mid extension. Your whiff punish combo ender.</p>
            <ul>
              <li>-12 on block</li>
              <li>Knocks down on hit</li>
              <li>Used in combos for wall carry</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="f,f,f+3 — The Running Knee">
        <MoveCard character="fahkumram"
          move={{
            input: 'f,f,f+3',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i19',
            onBlock: '+6',
            onHit: '+15a (+5)',
            tags: ['Mid', 'Plus on Block', 'Wall Splats', 'Unparryable', 'Low Crush'],
            description: 'Running knee approach that\'s +6 on block. Great for approaching and starting pressure.',
          }}
          showVideo
        />

        <p>
          The running knee is <span className="highlight">+6 on block</span> with chip damage, 
          wall splats, and can't be parried. It's your primary approach tool.
        </p>

        <TipBox variant="tip" title="Use to Approach">
          When you want to close distance safely, use f,f,f+3. Even if blocked, you're +6 
          and can continue pressure. It's one of the best running moves in the game.
        </TipBox>
      </Section>

      <Section title="d+4 — The Fast Low">
        <MoveCard character="fahkumram"
          move={{
            input: 'd+4',
            hitLevel: ['l'],
            damage: '18',
            startup: 'i14',
            onBlock: '-15',
            onHit: '-4',
            onCH: '+0d (Throw)',
            tags: ['Low', 'Fast', 'Great Range', 'Hits Grounded', 'CH Throw'],
            description: 'Fast low with great range. On counter-hit, transitions to a throw for big damage.',
          }}
          showVideo
        />

        <p>
          d+4 is your <span className="highlight">primary low poke</span>. It's fast (i14), 
          has great range, and on counter-hit it transitions into a throw for 41 damage total.
        </p>

        <TipBox variant="warning" title="-15 on Block = Launch Punishable">
          d+4 is launch punishable by most characters. Don't throw it out randomly — use it 
          after conditioning with mids or when you have a read.
        </TipBox>
      </Section>

      <Section title="f,f+3 — The Long Range Low">
        <MoveCard character="fahkumram"
          move={{
            input: 'f,f+3',
            hitLevel: ['l'],
            damage: '20',
            startup: 'i21',
            onBlock: '-14',
            onHit: '+4',
            tags: ['Low', 'Long Range', 'Tracks Left', 'Hits Grounded'],
            description: 'Long range low that\'s plus on hit. Your low for mid-range harassment.',
          }}
          showVideo
        />

        <p>
          f,f+3 is your <span className="highlight">long-range low</span>. At -14, it's punishable 
          but not launchable by most characters. Plus on hit means you can continue pressure.
        </p>

        <KeyConcept title="Low Options Comparison" icon="👇">
          <ul>
            <li><strong>d+4</strong> — Faster (i14), bigger risk (-15), CH throw</li>
            <li><strong>f,f+3</strong> — Slower (i21), safer (-14), plus on hit (+4)</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Use d+4 for quick pokes and f,f+3 when you need range or want to stay safe on block.
          </p>
        </KeyConcept>
      </Section>

      <Section title="df+3 — The Low with a Fake-Out">
        <MoveCard character="fahkumram"
          move={{
            input: 'df+3',
            hitLevel: ['l'],
            damage: '15',
            startup: 'i20',
            onBlock: '-13',
            onHit: '-1c',
            onCH: '+28g',
            tags: ['Low', 'Has Fake-Out', 'CH Knockdown'],
            description: 'Low poke with a mid fake-out in df+3,3. Great for oki situations.',
          }}
          showVideo
        />

        <p>
          df+3 by itself is a standard low, but its power comes from the <strong>fake-out</strong>:
        </p>

        <Collapsible title="df+3 Extensions" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <p><strong>df+3~3</strong> — Cancels into a mid kick.</p>
            <ul style={{ marginBottom: '12px' }}>
              <li>+2 on block!</li>
              <li>Great for oki pressure</li>
              <li>Conditions opponents to not duck</li>
            </ul>
            
            <p><strong>df+3~4</strong> — Another follow-up option.</p>
            <ul>
              <li>-10 on block</li>
              <li>Knockdown on hit</li>
            </ul>
          </div>
        </Collapsible>

        <TipBox variant="tip" title="Use for Oki">
          After knockdowns, df+3~3 is excellent for oki pressure. The opponent has to guess 
          if you're doing the low or the mid fake-out.
        </TipBox>
      </Section>

      <Section title="The Basic Gameplan">
        <p>
          With your pokes and these mids/lows, you have functional Fahkumram offense:
        </p>

        <KeyConcept title="Mixing Your Offense" icon="🎲">
          <ol>
            <li><strong>Control space with 3 and df+4</strong> — Your long-range mids</li>
            <li><strong>Fish with b,f+4 and 3+4</strong> — Cover both sidestep directions</li>
            <li><strong>Chip with d+4 and f,f+3</strong> — Force them to block low</li>
            <li><strong>Approach with f,f,f+3</strong> — Plus on block, safe approach</li>
            <li><strong>Punish blocking with low → pressure</strong></li>
          </ol>
        </KeyConcept>

        <p>
          Opponents who block everything eat lows. Opponents who try to step eat b,f+4 or 3+4.
          Opponents who press buttons get counter-hit. This triangle wins games.
        </p>
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
                <td style={{ padding: '8px' }}><code>b,f+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Launch</td>
                <td style={{ padding: '8px' }}>HIGH, tracks left</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+18a</td>
                <td style={{ padding: '8px' }}>MID, CH launcher, tracks right</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+3</td>
                <td style={{ padding: '8px' }}>Safe mid, extensions</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f,f+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i19</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+15a</td>
                <td style={{ padding: '8px' }}>Running knee, wall splats</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i14</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-15</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-4</td>
                <td style={{ padding: '8px' }}>Fast low, CH throw</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i21</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                <td style={{ padding: '8px' }}>Long range low</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i20</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-1c</td>
                <td style={{ padding: '8px' }}>Has fake-out df+3~3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
