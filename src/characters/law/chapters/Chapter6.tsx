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
      title="Dragon Charge (DSS)"
      intro="Dragon Charge (formerly called DSS - Dragon Sign Stance) is Law's signature mechanic. It lets him cancel move recovery into plus frames and access powerful options. This is where Law goes from good to terrifying."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="The Slide"
    >
      <Section title="How to Enter Dragon Charge">
        <p>
          There are two ways to enter Dragon Charge:
        </p>

        <div style={{ display: 'grid', gap: '16px', marginTop: '16px', marginBottom: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <code style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>d+1+2</code>
            <span style={{ marginLeft: '12px' }}>Manual Entry</span>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Press d+1+2 to enter Dragon Charge from neutral. Law does a shoulder shimmy animation.
            </p>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent-secondary)' }}>
            <code style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem' }}>~f (Hold Forward)</code>
            <span style={{ marginLeft: '12px' }}>After Certain Moves</span>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Many moves can transition to DSS by holding forward during their recovery. 
              This is Law's main way to get plus frames.
            </p>
          </div>
        </div>

        <p>
          The <strong>move transitions</strong> are what make DSS powerful. You're canceling move 
          recovery into a stance with its own options.
        </p>
      </Section>

      <Section title="Key DSS Transitions">
        <p>
          These are the most important moves that transition to DSS:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>ws+4~f</code>
              <span style={{ color: 'var(--success)' }}>+5 on block</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <strong>Your main DSS entry.</strong> While standing 4 into DSS. This is +5 on block 
              and gives you frame advantage to use DSS options.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>4,3~f</code>
              <span style={{ color: 'var(--success)' }}>+8 on block</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              High-high string into DSS. Very plus but both hits are high (can be ducked).
              Use for combos and pressure when they're standing.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>ws+3</code>
              <span style={{ color: 'var(--success)' }}>+16 on block (auto DSS)</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              While standing 3 automatically goes into DSS. Massively plus, but it's a HIGH 
              so can be ducked. Incredible when it hits.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>b+1~f</code>
              <span style={{ color: 'var(--danger)' }}>-4 on block</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Mid into DSS. Not plus, but in Heat mode the auto-parry makes it strong.
              Can also do b+1,2~f for -10 with DSS.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>f,f+2,f+1+2~f</code>
              <span style={{ color: 'var(--success)' }}>+5 on block</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Poison arrow into DSS. Good for approach and plus frame setup.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>ss+3</code>
              <span style={{ color: 'var(--success)' }}>+7 on hit (auto DSS)</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Side step low that auto-transitions to DSS on hit. Incredible mixup tool.
            </p>
          </div>
        </div>

        <TipBox variant="tip" title="ws+4~f is King">
          ws+4 into DSS is your main pressure tool. When you get opponents crouching (from f+1+2, 
          db+3, or slide threat), use ws+4~f to get +5 and start DSS pressure.
        </TipBox>
      </Section>

      <Section title="Dragon Charge Options">
        <MoveCard character="law"
          move={{
            input: 'DSS.1',
            hitLevel: ['h'],
            damage: '14',
            startup: 'i12',
            onBlock: '-1',
            onHit: '+7',
            onCH: '+17c',
            tags: ['High', 'Auto-loops to DSS', 'Chip Damage'],
            description: 'Fast high that loops back to DSS. Good for chip and pressure at the wall.',
          }}
          showVideo
        />

        <MoveCard character="law"
          move={{
            input: 'DSS.2',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i14',
            onBlock: '+1',
            onHit: '+15d',
            onCH: '+50a (Launch)',
            tags: ['High', 'Plus on Block', 'Counter-Hit Launcher', 'Chip Damage'],
            description: 'Plus on block high that counter-hit launches. Your main DSS frame trap.',
          }}
          showVideo
        />

        <MoveCard character="law"
          move={{
            input: 'DSS.f+1',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i14',
            onBlock: '-11',
            onHit: '+39d (Heat Engager)',
            tags: ['Mid', 'Heat Engager', 'Chip Damage', 'Unsafe'],
            description: 'Fast mid heat engager. Unsafe but becomes safe-ish in Heat with DSS transition.',
          }}
          showVideo
        />

        <MoveCard character="law"
          move={{
            input: 'DSS.4',
            hitLevel: ['l'],
            damage: '21',
            startup: 'i21',
            onBlock: '-13',
            onHit: '+6c',
            onCH: '+38a',
            tags: ['Low', 'Plus on Hit', 'Counter-Hit Launch'],
            description: 'DSS.low. Plus on hit, can micro-dash into full combo on counter-hit.',
          }}
          showVideo
        />

        <MoveCard character="law"
          move={{
            input: 'DSS.f+4',
            hitLevel: ['h'],
            damage: '40',
            startup: 'i19',
            onBlock: '+7',
            onHit: '+31d',
            tags: ['High', 'Massively Plus', 'Chip Damage', 'Legend Kick'],
            description: 'The infamous Legend Kick. +7 on block with huge chip. Can be ducked.',
          }}
          showVideo
        />

        <MoveCard character="law"
          move={{
            input: 'DSS.f+3',
            hitLevel: ['m'],
            damage: '27',
            startup: 'i20',
            onBlock: '-9',
            onHit: '+22d (Heat Engager)',
            tags: ['Mid', 'Heat Engager', 'Safe', 'Wall/Floor Break'],
            description: 'Safe mid heat engager. Breaks walls and floors. Use when they\'re ducking f+4.',
          }}
          showVideo
        />

        <KeyConcept title="DSS Option Select" icon="🎲">
          <p>After +5 or more from DSS transitions:</p>
          <ul>
            <li><strong>They stand</strong> → DSS.2 (plus, CH launches) or DSS.f+4 (Legend Kick)</li>
            <li><strong>They duck</strong> → DSS.f+1 or DSS.f+3 (mids)</li>
            <li><strong>They press</strong> → DSS.2 counter-hit launches</li>
            <li><strong>They sidewalk right</strong> → DSS.4 catches some stepping</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="DSS to Slide Step">
        <p>
          From DSS, you can transition to <span className="highlight">Slide Step</span> by holding 
          down-forward. This opens up Law's full crouch mixup:
        </p>

        <KeyConcept title="DSS → Slide Step" icon="⬇️">
          <p><code>d+1+2 → hold df</code> or any DSS transition <code>→ hold df</code></p>
          <p style={{ marginTop: '12px' }}>
            From Slide Step, you can:
          </p>
          <ul>
            <li><strong>Press 3</strong> — Do the slide (FC df,d,df+3)</li>
            <li><strong>Release df</strong> — Access while standing moves (ws+4, ws+3, etc.)</li>
            <li><strong>uf+3</strong> — Mid heat engager</li>
          </ul>
        </KeyConcept>

        <p>
          This is how Law's offense flows: hit confirming strings → DSS transitions → plus frames → 
          Slide Step → full crouch mixup → repeat.
        </p>
      </Section>

      <Section title="DSS Practice Plan">
        <KeyConcept title="Learning DSS Step by Step" icon="📈">
          <ol>
            <li><strong>Manual entry</strong> — Practice d+1+2 to enter DSS from neutral</li>
            <li><strong>ws+4~f</strong> — Get comfortable with the main transition</li>
            <li><strong>DSS options</strong> — Learn DSS.2, DSS.f+1, DSS.4 responses</li>
            <li><strong>Timing</strong> — Practice blue spark timing (Chapter 8)</li>
            <li><strong>Slide Step</strong> — Add DSS → df → slide/ws options</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Blue Spark Timing">
          When you do DSS moves with perfect timing, they get a blue spark and extra damage. 
          The timing cue is when Law makes a little sound as he enters DSS. Practice until 
          you consistently see the blue spark.
        </TipBox>
      </Section>

      <Collapsible title="All DSS Transition Moves" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>DSS Frames</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+4~f</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+5 oB</td>
                <td style={{ padding: '8px' }}>Main pressure tool</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+16 oB</td>
                <td style={{ padding: '8px' }}>Auto-DSS, but HIGH</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>4,3~f</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8 oB</td>
                <td style={{ padding: '8px' }}>Both hits high</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+3,1~f</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4 oB</td>
                <td style={{ padding: '8px' }}>Good approach mid-mid</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+1~f</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-4 oB</td>
                <td style={{ padding: '8px' }}>Strong in Heat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+1,2~f</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-10 oB</td>
                <td style={{ padding: '8px' }}>Unsafe but auto-parry in Heat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f+2,f+1+2~f</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+5 oB</td>
                <td style={{ padding: '8px' }}>Poison arrow route</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,2,2~f</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-4 oB</td>
                <td style={{ padding: '8px' }}>Jab string into DSS</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ss+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+7 oH</td>
                <td style={{ padding: '8px' }}>Auto-DSS on hit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>

      <Collapsible title="DSS Move Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Height</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Use</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>DSS.1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>High</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-1</td>
                <td style={{ padding: '8px' }}>Loop pressure, chip</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DSS.2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>High</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ padding: '8px' }}>Frame trap, CH launches</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DSS.3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>High</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3</td>
                <td style={{ padding: '8px' }}>Homing, chip damage</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DSS.4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Low</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ padding: '8px' }}>Low option</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DSS.f+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-11</td>
                <td style={{ padding: '8px' }}>Heat engager, fast mid</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DSS.f+2~1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+5</td>
                <td style={{ padding: '8px' }}>CH launcher, wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DSS.f+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Safe heat engager</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DSS.f+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>High</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+7</td>
                <td style={{ padding: '8px' }}>Legend Kick, massive plus</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DSS.1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ padding: '8px' }}>Tornado move</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
