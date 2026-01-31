import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Punishment"
      intro="Blocking isn't enough—you need to punish. This chapter teaches you exactly what to do after blocking unsafe moves. Turn their mistakes into your damage."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Defense & Movement"
    >
      <Section title="Standing Punishment">
        <p>
          When you block a move and your opponent is at negative frames, you can punish. 
          The more negative they are, the bigger your punish.
        </p>

        <KeyConcept title="Standing Punisher Chart" icon="👊">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Frames</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Punisher</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Damage</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-10</td>
                <td style={{ padding: '8px' }}><code>1,1,2</code></td>
                <td style={{ padding: '8px' }}>23</td>
                <td style={{ padding: '8px' }}>Goes to SEN (+11)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-10</td>
                <td style={{ padding: '8px' }}><code>1,2,2</code></td>
                <td style={{ padding: '8px' }}>25</td>
                <td style={{ padding: '8px' }}>More damage, no SEN</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-12</td>
                <td style={{ padding: '8px' }}><code>2,2,1</code></td>
                <td style={{ padding: '8px' }}>30</td>
                <td style={{ padding: '8px' }}>Wall splat</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-13</td>
                <td style={{ padding: '8px' }}><code>df+1,2</code></td>
                <td style={{ padding: '8px' }}>28</td>
                <td style={{ padding: '8px' }}>Heat engager</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-13</td>
                <td style={{ padding: '8px' }}><code>f+2,3</code></td>
                <td style={{ padding: '8px' }}>24</td>
                <td style={{ padding: '8px' }}>More range</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-14</td>
                <td style={{ padding: '8px' }}><code>2~1</code></td>
                <td style={{ padding: '8px' }}>22/26</td>
                <td style={{ padding: '8px' }}>Just frame for more dmg</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-15</td>
                <td style={{ padding: '8px' }}><code>df+2</code></td>
                <td style={{ padding: '8px' }}>LAUNCH</td>
                <td style={{ padding: '8px' }}>No-execution launcher</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-15</td>
                <td style={{ padding: '8px' }}><code>EWGF</code></td>
                <td style={{ padding: '8px' }}>LAUNCH+</td>
                <td style={{ padding: '8px' }}>Best damage if you can</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <MoveCard character="reina"
          videoId="1,1,2"
          move={{
            input: '1,1,2 (10f Punish)',
            hitLevel: ['h', 'h', 'm'],
            damage: '5, 6, 12',
            startup: 'i10',
            onBlock: '-17',
            onHit: '+11 (SEN)',
            tags: ['Punish', 'SEN Transition', '10f'],
            description: 'Your bread-and-butter punish. Fast and transitions to Sentai on hit.',
          }}
          showVideo
        />

        <MoveCard character="reina"
          videoId="2,2,1"
          move={{
            input: '2,2,1 (12f Punish)',
            hitLevel: ['h', 'h', 'm'],
            damage: '5, 5, 20',
            startup: 'i12',
            onBlock: '-14',
            onHit: '+12a',
            tags: ['Punish', 'Wall Splat', '12f'],
            description: '12f punish that wall splats. Big damage at walls.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="The Key Decision">
          <strong>-10 to -12:</strong> Use 1,1,2 (safe, SEN pressure) or 2,2,1 (damage, wall splat).<br/>
          <strong>-13 to -14:</strong> Use df+1,2 (heat) or 2~1 (just frame damage).<br/>
          <strong>-15+:</strong> Always launch with df+2 or EWGF.
        </TipBox>
      </Section>

      <Section title="While Standing Punishment">
        <p>
          After blocking lows, you're in crouch and need while-standing moves.
        </p>

        <KeyConcept title="While Standing Punisher Chart" icon="⬇️">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Frames</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Punisher</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-11</td>
                <td style={{ padding: '8px' }}><code>ws+4,4~D</code></td>
                <td style={{ padding: '8px' }}>Goes to WRA (+6)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-13</td>
                <td style={{ padding: '8px' }}><code>ws+1 → SEN 2/3</code></td>
                <td style={{ padding: '8px' }}>Auto-SEN, follow with 2 or 3</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-15</td>
                <td style={{ padding: '8px' }}><code>FC df+4</code></td>
                <td style={{ padding: '8px' }}>LAUNCH</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>-20</td>
                <td style={{ padding: '8px' }}><code>FC df+3</code></td>
                <td style={{ padding: '8px' }}>LAUNCH (more damage)</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <MoveCard character="reina"
          videoId="ws4,4"
          move={{
            input: 'ws+4,4~D (11f WS Punish)',
            hitLevel: ['m', 'm'],
            damage: '10, 15',
            startup: 'i11~12',
            onBlock: '-10',
            onHit: '+6 (WRA)',
            tags: ['Punish', 'WRA Transition', '11f'],
            description: '11f while standing punish. Hold D to enter WRA at +6.',
          }}
          showVideo
        />

        <MoveCard character="reina"
          videoId="ws1"
          move={{
            input: 'ws+1 → SEN 3 (13f WS Punish)',
            hitLevel: ['m', 'h'],
            damage: '12, 22',
            startup: 'i13',
            onBlock: '-13',
            onHit: '+7',
            tags: ['Punish', 'Heat Engager', '13f'],
            description: 'Auto-enters SEN on hit. Follow with SEN 3 for heat or SEN 2 for damage.',
          }}
          showVideo
        />
      </Section>

      <Section title="Whiff Punishment">
        <p>
          When opponent's attacks whiff (miss), you have more time to punish. Your best options:
        </p>

        <KeyConcept title="Whiff Punish Priority" icon="💨">
          <ol>
            <li><strong>EWGF</strong> — If you have the execution (best damage)</li>
            <li><strong>df+2</strong> — No-execution launcher, good range</li>
            <li><strong>1,1,2</strong> — If too far for launcher, get pressure</li>
            <li><strong>3+4,4</strong> — Good range mid-mid</li>
            <li><strong>UNS 4</strong> — Massive range from Unsoku stance</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The UNS 4 Option">
          If you're using b+3 chains for defense, UNS 4 has incredible range for whiff punishment. 
          It's also a heat engager—so you get heat activation from whiff punishment.
        </TipBox>
      </Section>

      <Section title="Practice: Punishment">
        <PracticeBox
          title="Standing Punish Drill"
          setup="Record opponent doing a -10 move (like a blocked jab string)."
          tasks={[
            { id: 'punish-1', text: 'Punish with 1,1,2 five times', type: 'counter', target: 5 },
            { id: 'punish-2', text: 'Punish -12 move with 2,2,1 five times', type: 'counter', target: 5 },
            { id: 'punish-3', text: 'Punish -15 move with df+2 five times', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="WS Punish Drill"
          setup="Record opponent doing a blocked low (like a generic d+4)."
          tasks={[
            { id: 'ws-1', text: 'Punish with ws+4,4~D five times', type: 'counter', target: 5 },
            { id: 'ws-2', text: 'Punish -15 low with FC df+4 five times', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Collapsible title="Punishment Quick Reference" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Standing</h4>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li><strong>-10:</strong> 1,1,2 (23 dmg, SEN) or 1,2,2 (25 dmg)</li>
            <li><strong>-12:</strong> 2,2,1 (30 dmg, wall splat)</li>
            <li><strong>-13:</strong> df+1,2 (heat) or f+2,3 (range)</li>
            <li><strong>-15:</strong> df+2 or EWGF (LAUNCH)</li>
          </ul>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px', marginTop: '16px' }}>While Standing</h4>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li><strong>-11:</strong> ws+4,4~D (WRA +6)</li>
            <li><strong>-13:</strong> ws+1 → SEN 3 (heat engager)</li>
            <li><strong>-15:</strong> FC df+4 (LAUNCH)</li>
            <li><strong>-20:</strong> FC df+3 (bigger LAUNCH)</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
