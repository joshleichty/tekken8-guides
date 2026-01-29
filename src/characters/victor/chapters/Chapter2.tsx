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
      title="First Buttons & Jabs"
      intro="Every Tekken character starts with jabs. Victor's jab strings are unique — they have mental frame pressure and multiple extensions that keep opponents guessing. Master these and you'll control the pace of every match."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Learn Core Mids"
    >
      <Section title="Your Fastest Button: The Jab">
        <MoveCard character="victor"
          move={{
            input: '1',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '+1',
            onHit: '+8',
            tags: ['High', 'Plus on Block', 'Mental Frame Tool'],
            description: 'Your fastest button. +1 on block means you maintain pressure even when they block it.',
          }}
          showVideo
        />

        <p>
          Victor's jab is <span className="highlight">plus on block</span>. This is huge — 
          most jabs are neutral. Being +1 means if they press a button after blocking your jab, 
          your next move will trade or beat theirs.
        </p>

        <KeyConcept title="When to Use Jab" icon="👊">
          <ul>
            <li><strong>To interrupt</strong> — If opponent is pressuring, jab shuts them down</li>
            <li><strong>To start offense</strong> — Jab → your next move comes out faster</li>
            <li><strong>Quick check</strong> — Throw it out to see what they do</li>
            <li><strong>Mental stack</strong> — Set up your extensions</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The 1,1 Extension">
        <MoveCard character="victor"
          move={{
            input: '1,1',
            hitLevel: ['h', 'h'],
            damage: '5, 5',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+8',
            tags: ['High', 'High', 'Weapon', 'Safe'],
            description: 'Double jab with a knife. Safe on block but both hits are high.',
          }}
          showVideo
        />

        <p>
          1,1 is safe but <strong>both hits are high</strong> — opponents can duck. The real 
          value is the mental stack it creates. Opponents expecting the second hit will hold 
          back longer, giving you more time to mix up.
        </p>
      </Section>

      <Section title="The 1,1,2 String (10-Frame Punish)">
        <MoveCard character="victor"
          move={{
            input: '1,1,2',
            hitLevel: ['h', 'h', 'h', 'h'],
            damage: '5, 5, 5, 7',
            startup: 'i10',
            onBlock: '-12',
            onHit: '+3',
            tags: ['High', 'Weapon', '10f Punish', 'PRF.Transition'],
            description: 'Your 10-frame punish. Hit confirmable, transitions to Perfumer with ~f.',
          }}
          showVideo
        />

        <p>
          1,1,2 is Victor's <span className="highlight">10-frame punish</span>. When you block 
          something -10 or worse, this is your default punish. It does 27 damage and you can 
          hit confirm it.
        </p>

        <KeyConcept title="Hit Confirming 1,1,2" icon="👁️">
          <p>
            You can delay the 2 to see if 1,1 connected:
          </p>
          <ol>
            <li>Press <code>1,1</code></li>
            <li>Watch if it hits</li>
            <li>If hit: press <code>2</code> to complete the string</li>
            <li>If blocked: stop at 1,1 (safe)</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="PRF Transition">
          You can hold forward after 1,1,2 (<code>1,1,2~f</code>) to transition into Perfumer 
          stance at +7 on hit. This is covered more in Chapter 5.
        </TipBox>
      </Section>

      <Section title="The 1,2 String">
        <MoveCard character="victor"
          move={{
            input: '1,2',
            hitLevel: ['h', 'h'],
            damage: '5, 12',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+8',
            tags: ['High', 'Weapon', 'Safe'],
            description: 'Alternative jab string. Has a powerful counter-hit extension.',
          }}
          showVideo
        />

        <p>
          1,2 is an alternative to 1,1. The key difference is the extension:
        </p>

        <MoveCard character="victor"
          move={{
            input: '1,2,1',
            hitLevel: ['h', 'h', 'm'],
            damage: '5, 12, 20',
            startup: 'i10',
            onBlock: '-12',
            onHit: '+18a',
            onCH: 'T! Launch',
            tags: ['High', 'High', 'Mid', 'Tornado', 'CH Launcher'],
            description: 'The third hit is a mid that launches on counter-hit! Tornado move.',
          }}
          showVideo
        />

        <p>
          <span className="highlight">1,2,1 launches on counter-hit</span>. If your opponent 
          presses a button after blocking 1,2, the third hit will counter-hit launch them 
          for a full combo.
        </p>

        <KeyConcept title="The 1,2 Mental Game" icon="🧠">
          <ol>
            <li>Do <code>1,2,1</code> — They mash, they get launched</li>
            <li>They start respecting — Now you can stop at <code>1,2</code></li>
            <li>Mix up — Sometimes 1,2, sometimes 1,2,1</li>
            <li>They freeze — Take your turn with other pressure</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="-12 on Block">
          1,2,1 is -12 on block. Good players will punish it. Don't autopilot the full string — 
          use the threat of the third hit to make them respect, then mix up your options.
        </TipBox>
      </Section>

      <Section title="The 1,3 Low String">
        <MoveCard character="victor"
          move={{
            input: '1,3',
            hitLevel: ['h', 'l'],
            damage: '5, 11',
            startup: 'i10',
            onBlock: '-12',
            onHit: '-1',
            tags: ['High', 'Low', 'Round Ender'],
            description: 'Jab into low. Great for closing out rounds when they expect highs.',
          }}
          showVideo
        />

        <p>
          1,3 is your <span className="highlight">round-ender string</span>. When the opponent 
          has low health and is blocking everything, this jab-low catches them standing.
        </p>

        <TipBox variant="tip" title="When to Use 1,3">
          Save this for:
          <ul>
            <li>Round-ending situations (low HP opponent)</li>
            <li>After conditioning with 1,1 and 1,2 (they expect highs)</li>
            <li>Chip damage when you need a few points</li>
          </ul>
          Don't spam it — it's -12 on block and creates no pressure on hit.
        </TipBox>
      </Section>

      <Section title="The 2,1 String">
        <MoveCard character="victor"
          move={{
            input: '2,1',
            hitLevel: ['h', 'h'],
            damage: '10, 12',
            startup: 'i12-13',
            onBlock: '-6 / -4 PRF',
            onHit: '+5 / +7 PRF',
            tags: ['High', 'Weapon', 'PRF.Transition'],
            description: 'Slightly slower than 1-strings but transitions into Perfumer for mixups.',
          }}
          showVideo
        />

        <p>
          2,1 is <span className="highlight">your main PRF transition string</span>. Hold forward 
          after 2,1 to go into Perfumer stance at +7 on hit. This opens up Victor's low game.
        </p>

        <KeyConcept title="2,1 vs 1,1" icon="🔄">
          <ul>
            <li><strong>1,1</strong> — Faster (i10), use for interrupts and quick checks</li>
            <li><strong>2,1</strong> — Transitions to PRF, use when you want mixup potential</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            In neutral, prefer 2,1 over 1,1 because the stance transition gives you options.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The 2,2,2 String (Knowledge Check)">
        <MoveCard character="victor"
          move={{
            input: '2,2,2',
            hitLevel: ['h', 'm', 'm', 'h'],
            damage: '10, 5, 5, 12',
            startup: 'i12-13',
            onBlock: '-3',
            onHit: '+4',
            tags: ['High', 'Mid', 'Mid', 'High', 'Gun', 'IAI.Transition', 'Knowledge Check'],
            description: 'The infamous Victor string. Safe on block, goes into IAI stance. A true knowledge check.',
          }}
          showVideo
        />

        <p>
          2,2,2 is <span className="highlight">Victor's knowledge check</span>. At low-to-mid 
          ranks, nobody knows how to deal with this string. It's safe, does chip damage, and 
          goes into IAI stance.
        </p>

        <KeyConcept title="Why 2,2,2 Works" icon="🎓">
          <ul>
            <li>The string is h-m-m-h (gunshot at the end)</li>
            <li>It's only -3 on block — completely safe</li>
            <li>Transitions into IAI stance for mixups</li>
            <li>To punish it, opponents must DUCK the last hit and launch</li>
            <li>Most players don't know this</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="At Higher Ranks">
          Good players will recognize this string and duck-launch the gun shot. Once you 
          notice opponents ducking, stop using the full string. Use 2,2 by itself or 
          transition to IAI early with <code>2,2,2 → IAI mixup</code>.
        </TipBox>

        <TipBox variant="tip" title="The IAI Mixup After 2,2,2">
          After 2,2,2 connects or is blocked, you're in IAI stance. From here:
          <ul>
            <li><code>IAI.2</code> — Safe mid</li>
            <li><code>IAI.d+1+2</code> — Power low (risky but rewarding)</li>
            <li><code>IAI.1,1</code> — Fast mid check</li>
          </ul>
          These options are covered in Chapter 6.
        </TipBox>
      </Section>

      <Section title="Putting It Together">
        <p>
          With these jab strings, you have the foundation of Victor's pressure:
        </p>

        <KeyConcept title="The Basic Pressure Flow" icon="🔄">
          <ol>
            <li><strong>Start with jab (1)</strong> — +1 on block, check the opponent</li>
            <li><strong>Mix 1,1 and 1,2</strong> — Create mental stack</li>
            <li><strong>Use 1,2,1 on readers</strong> — CH launch those who press</li>
            <li><strong>Go to PRF with 2,1~f</strong> — Opens low game</li>
            <li><strong>Use 2,2,2 for pressure</strong> — Knowledge check into IAI</li>
            <li><strong>Finish with 1,3</strong> — Round-ender when they freeze</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice This">
          Go to Practice Mode and cycle through these strings:
          <br/><code>1 → 1,1 → 1,2 → 2,1~f → 2,2,2</code>
          <br/>Feel the rhythm. Notice how each has a different purpose.
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
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+8</td>
                <td style={{ padding: '8px' }}>h-h, weapon</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,1,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+3</td>
                <td style={{ padding: '8px' }}>10f punish, ~f to PRF</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+8</td>
                <td style={{ padding: '8px' }}>h-h, weapon</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>T!</td>
                <td style={{ padding: '8px' }}>CH launches!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-1</td>
                <td style={{ padding: '8px' }}>h-l, round ender</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+5</td>
                <td style={{ padding: '8px' }}>~f to PRF (+7)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>2,2,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4</td>
                <td style={{ padding: '8px' }}>Goes to IAI, duckable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
