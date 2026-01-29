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
      number={4}
      title="Key Strings"
      intro="Fahkumram's string system is built around the 3,4 extensions and charged guard breaks. Master these and you'll have access to pressure, mixups, and Garuda Force transitions."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Learn First Combos"
    >
      <Section title="The 3,1 String">
        <MoveCard character="fahkumram"
          move={{
            input: '3,1',
            hitLevel: ['m', 'h'],
            damage: '11, 12',
            startup: 'i13',
            onBlock: '-3',
            onHit: '+7',
            tags: ['Mid', 'High', '13f Punish', 'Long Range'],
            description: 'Your 13f ranged punish. Mid-high that\'s only -3 on block. Excellent for whiff punishment.',
          }}
          showVideo
        />

        <p>
          3,1 is your <span className="highlight">13-frame ranged punish</span>. The range is 
          incredible for a 13f move, making it excellent for whiff punishment at distance.
        </p>

        <TipBox variant="warning" title="Second Hit is High">
          The second hit can be ducked. At high level, stop at just <code>3</code> sometimes 
          to avoid being launched by duck-happy opponents. Mix 3 with 3,1 to keep them guessing.
        </TipBox>
      </Section>

      <Section title="The 3,4 System — Your Bread and Butter">
        <p>
          The 3,4 system is <span className="highlight">Fahkumram's core pressure tool</span>. 
          From standing 3, you have multiple extensions that lead to different outcomes.
        </p>

        <MoveCard character="fahkumram"
          move={{
            input: '3,4',
            hitLevel: ['m', 'm'],
            damage: '11, 18',
            startup: 'i13',
            onBlock: '-12',
            onHit: '+24g',
            onCH: '+34d',
            tags: ['Mid', 'Mid', 'Knockdown', 'Wall Break on CH'],
            description: 'Mid-mid natural combo on CH. Knocks down on hit and wall breaks on counter-hit.',
          }}
          showVideo
        />

        <p>
          3,4 by itself is a mid-mid string that knocks down on hit. It's -12 on block, so use 
          it when you've conditioned them not to duck after 3.
        </p>

        <MoveCard character="fahkumram"
          move={{
            input: '3,4~3',
            hitLevel: ['m', 'm'],
            damage: '11, 20',
            startup: 'i13',
            onBlock: '-7',
            onHit: '+9',
            onCH: '+37d (T!)',
            tags: ['Mid', 'Mid', 'Safe', 'Tornado on CH', 'Can Be Charged'],
            description: 'The "piano" extension. Safe at -7 and gives Tornado on CH. Can be charged for guard break.',
          }}
          showVideo
        />

        <p>
          <code>3,4~3</code> (piano input) is <span className="highlight">safe at -7</span> and 
          gives Tornado on counter-hit for a combo. This is your go-to extension when you want 
          to stay safe.
        </p>

        <KeyConcept title="The Piano Input Explained" icon="🎹">
          <p>
            "Piano" means pressing buttons in rapid sequence. For 3,4~3, you press:
          </p>
          <ol>
            <li>Press <code>3</code></li>
            <li>Quickly press <code>4</code></li>
            <li>Quickly press <code>3</code> again</li>
          </ol>
          <p style={{ marginTop: '12px' }}>
            Think of it like playing three notes on a piano in quick succession: 3-4-3.
          </p>
        </KeyConcept>

        <MoveCard character="fahkumram"
          move={{
            input: '3,4~4',
            hitLevel: ['m', 'h'],
            damage: '11, 20',
            startup: 'i13',
            onBlock: '+3',
            onHit: '+13g',
            onCH: '+30a (Tailspin)',
            tags: ['Mid', 'High', 'Plus on Block', 'Homing', 'Tailspin on CH'],
            description: 'Homing high extension that\'s +3 on block! Tailspin on counter-hit.',
          }}
          showVideo
        />

        <p>
          <code>3,4~4</code> is <span className="highlight">+3 on block</span> — a rare plus frame 
          string extension. It's homing (catches sidesteps) and gives tailspin on CH.
        </p>

        <TipBox variant="warning" title="Second Hit is High">
          The 4 extension can be ducked. Use it to condition opponents to stand block, then 
          mix with 3,4 (mid-mid) to hit them.
        </TipBox>
      </Section>

      <Section title="The Guard Break System">
        <p>
          Fahkumram can <strong>charge</strong> certain extensions to create guard breaks that 
          transition into Rama stance. This is where his mixup game lives.
        </p>

        <MoveCard character="fahkumram"
          move={{
            input: '3,4~3*',
            hitLevel: ['m', 'm'],
            damage: '11, 23',
            startup: 'i13, i36 (charged)',
            onBlock: '+9 (Guard Break)',
            onHit: '+70a (T!)',
            tags: ['Mid', 'Mid', 'Guard Break', 'Rama Transition', 'GRF.Required'],
            description: 'Charged version creates guard break and transitions to Rama stance. Requires Garuda Force.',
          }}
          showVideo
        />

        <p>
          When you have <strong>Garuda Force</strong>, holding the 3 charges the kick into a 
          guard break. On block, the opponent is stunned and you transition to Rama stance for 
          a 5-way mixup.
        </p>

        <KeyConcept title="How Guard Breaks Work" icon="⚡">
          <ol>
            <li>Obtain Garuda Force (from combos, certain moves, or Heat)</li>
            <li>Do a charged extension (hold the button)</li>
            <li>If blocked, opponent is stunned → enter Rama stance</li>
            <li>Execute your 5-way mixup from Rama</li>
          </ol>
          <p style={{ marginTop: '12px' }}>
            We'll cover Garuda Force and Rama stance in Chapters 6 and 7.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Cancel the Charge">
          If you start charging but realize they might interrupt, press <code>F</code> (forward) 
          during frames 16-24 to cancel into full crouch and avoid punishment.
        </TipBox>
      </Section>

      <Section title="The 4,3 System">
        <p>
          Fahkumram also has strings starting from standing 4. These mirror the 3,4 system:
        </p>

        <MoveCard character="fahkumram"
          move={{
            input: '4,3',
            hitLevel: ['h', 'h'],
            damage: '10, 14',
            startup: 'i12',
            onBlock: '-7',
            onHit: '+6',
            onCH: '+29a',
            tags: ['High', 'High', 'Natural Combo'],
            description: 'High-high natural combo. Has the same piano extensions as 3,4.',
          }}
          showVideo
        />

        <p>
          4,3 starts from a high instead of a mid, but has the same extensions:
        </p>

        <ul>
          <li><code>4,3~4</code> — Piano extension, charged version creates guard break</li>
          <li><code>4,4</code> — Low ender that can transition to throw on CH</li>
        </ul>

        <Collapsible title="4,4 Low Extension" icon="📖">
          <MoveCard character="fahkumram"
            move={{
              input: '4,4',
              hitLevel: ['h', 'l'],
              damage: '10, 15',
              startup: 'i12',
              onBlock: '-15',
              onHit: '-4',
              onCH: '+0d (Throw)',
              tags: ['High', 'Low', 'CH Throw Transition'],
              description: 'Low extension from 4. On CH, transitions to throw like d+4.',
            }}
          />
          <p style={{ marginTop: '12px' }}>
            This low extension is launch punishable but can catch people standing. Use sparingly.
          </p>
        </Collapsible>
      </Section>

      <Section title="Other Important Strings">
        <MoveCard character="fahkumram"
          move={{
            input: 'd+3,4',
            hitLevel: ['l', 'h'],
            damage: '11, 10',
            startup: 'i16',
            onBlock: '-9',
            onHit: '+6',
            tags: ['Low', 'High', 'Extensions'],
            description: 'Low-high string with the same 4,3 system extensions available.',
          }}
          showVideo
        />

        <p>
          d+3,4 starts from a low and has the same piano extension system:
        </p>

        <ul>
          <li><code>d+3,4,3</code> — Same piano options as 4,3</li>
          <li><code>d+3,4,3~4</code> — Piano into homing high</li>
          <li><code>d+3,4,3~4*</code> — Charged guard break (with GRF)</li>
        </ul>

        <MoveCard character="fahkumram"
          move={{
            input: 'f+3,2',
            hitLevel: ['m', 'm'],
            damage: '16, 13',
            startup: 'i17',
            onBlock: '-12',
            onHit: '-1',
            tags: ['Mid', 'Mid', 'Multiple Extensions'],
            description: 'Mid-mid string with extensions for pressure and combos.',
          }}
          showVideo
        />

        <Collapsible title="f+3,2 Extensions" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <p><strong>f+3,2,1</strong> — Mid-mid-high. Balcony break, delayable.</p>
            <ul style={{ marginBottom: '12px' }}>
              <li>-5 on block</li>
              <li>Combo on CH from 2nd hit</li>
            </ul>
            
            <p><strong>f+3,2,4</strong> — Mid-mid-mid. Knee extension.</p>
            <ul style={{ marginBottom: '12px' }}>
              <li>-12 on block</li>
              <li>Combo on CH from 2nd hit</li>
            </ul>
            
            <p><strong>f+3,2,4~3</strong> — Piano extension with charge option.</p>
            <ul>
              <li>Same guard break system</li>
              <li>Tornado on CH</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="String Selection Guide">
        <KeyConcept title="When to Use Each String" icon="🎯">
          <ul>
            <li><strong>3,1</strong> — Ranged punishment, whiff punishing</li>
            <li><strong>3,4</strong> — When they don't duck, want knockdown</li>
            <li><strong>3,4~3</strong> — Safe option, fishing for CH Tornado</li>
            <li><strong>3,4~4</strong> — When stepping, want plus frames</li>
            <li><strong>3,4~3* (charged)</strong> — With GRF, going for Rama mixup</li>
            <li><strong>4,3 system</strong> — From standing 4 starter</li>
            <li><strong>d+3,4 system</strong> — Low starter into extensions</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Condition First, Mixup Second">
          Don't immediately go for charged guard breaks. Use the safe extensions (3,4~3) to 
          condition opponents to block, THEN start charging for the Rama mixup.
        </TipBox>
      </Section>

      <Collapsible title="Frame Data Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Hit</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>3,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+7</td>
                <td style={{ padding: '8px' }}>13f punish, m-h</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+24g</td>
                <td style={{ padding: '8px' }}>m-m knockdown</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3,4~3</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-7</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+9</td>
                <td style={{ padding: '8px' }}>Safe, CH Tornado</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3,4~4</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+13g</td>
                <td style={{ padding: '8px' }}>Homing, m-h</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3,4~3*</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+9 (GB)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+70a</td>
                <td style={{ padding: '8px' }}>Guard break → Rama</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>4,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-7</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+6</td>
                <td style={{ padding: '8px' }}>h-h, same extensions</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+3,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+6</td>
                <td style={{ padding: '8px' }}>l-h, same extensions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
