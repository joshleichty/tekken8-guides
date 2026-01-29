import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="Defense & Back Turn"
      intro="Law is an aggressive character, but you still need defensive options. Here's Law's defensive toolkit and his Back Turn stance for escaping pressure."
      onPrevious={() => goToChapter(11)}
      onNext={() => goToChapter(13)}
      nextLabel="Complete Law"
    >
      <Section title="Defensive Options">
        <p>
          Law isn't a defensive character, but he has tools for when you need to escape:
        </p>

        <MoveCard character="law"
          move={{
            input: 'b+1+3',
            hitLevel: ['Parry'],
            damage: '—',
            startup: 'i5~11',
            onBlock: '—',
            onHit: '+7 (DSS transition)',
            tags: ['Parry', 'Punches Only', 'DSS.Transition'],
            description: 'Punch parry. Only works on punches (not knees, elbows, weapons). Hold forward to go to DSS.',
          }}
          showVideo
        />

        <p>
          Law's punch parry (b+1+3) is decent but limited. It only works on <strong>punches</strong> — 
          not knees, elbows, shoulders, weapons, or Kuma's butt. On successful parry, you can 
          hold forward to transition to DSS and get guaranteed DSS.f+1.
        </p>

        <MoveCard character="law"
          move={{
            input: 'b+2+4',
            hitLevel: ['Reversal'],
            damage: '34 (38 in Heat)',
            startup: 'i5~?',
            onBlock: '—',
            onHit: 'KND',
            tags: ['Reversal', 'Punches Only', 'Throw'],
            description: 'Punch reversal. Similar to parry but automatically throws. Does more damage in Heat.',
          }}
          showVideo
        />

        <TipBox variant="warning" title="Parry Limitations">
          Law's parries only work on punches. Many characters have strong pressure with kicks, 
          knees, and elbows. Don't rely on parry too much — it's situational.
        </TipBox>

        <MoveCard character="law"
          move={{
            input: 'b+1+2',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i20',
            onBlock: '-14',
            onHit: '+31a',
            tags: ['Power Crush', 'Wall Splat', 'Unsafe'],
            description: 'Power crush. Absorbs mids and highs. Unsafe at -14 but good damage and wall splats.',
          }}
          showVideo
        />

        <p>
          b+1+2 is Law's <span className="highlight">power crush</span>. It absorbs mids and 
          highs, does good damage, and wall splats. However, it's -14 on block — launch punishable.
        </p>

        <KeyConcept title="When to Power Crush" icon="💪">
          <ul>
            <li>When trapped in pressure and need to escape</li>
            <li>When you read an attacking string and want to trade</li>
            <li>Near wall for guaranteed wall splat on hit</li>
            <li>NOT randomly in neutral — it's very unsafe</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Panic Moves">
        <p>
          When you're under pressure, these moves can help:
        </p>

        <MoveCard character="law"
          move={{
            input: 'd+2,3',
            hitLevel: ['sl', 'm'],
            damage: '8, 21',
            startup: 'i11',
            onBlock: '-15',
            onHit: '+30a (T!)',
            onCH: 'Launch',
            tags: ['Counter-Hit Launcher', 'Fast', 'Launch Punishable'],
            description: 'Super fast counter-hit launcher. Use when opponents are pressing. Very unsafe on block.',
          }}
          showVideo
        />

        <p>
          d+2,3 is Law's <span className="highlight">panic button</span>. At i11, it's incredibly 
          fast and counter-hit launches. When opponents are mashing in your face, this often 
          catches them. However, it's -15 on block — very risky.
        </p>

        <MoveCard character="law"
          move={{
            input: 'UF+4,3',
            hitLevel: ['m', 'm'],
            damage: '23, 16',
            startup: 'i18',
            onBlock: '-14',
            onHit: '+78a (Launch T!)',
            tags: ['Launcher', 'Low Crush', 'Tornado'],
            description: 'Flip kicks. Low crushes and launches. Use to crush low attacks.',
          }}
          showVideo
        />

        <p>
          Flip kicks (UF+4,3) low crush and launch. When opponents are doing lots of lows and 
          you have a read, flip kicks blow through and give massive damage.
        </p>

        <TipBox variant="warning" title="Don't Mash Panic Moves">
          d+2,3 and flip kicks are both launch punishable. Use them on reads, not randomly. 
          If opponents start baiting these, you'll eat huge punishes.
        </TipBox>
      </Section>

      <Section title="Back Turn Stance">
        <p>
          Several of Law's moves can transition to <span className="highlight">Back Turn (BT)</span> 
          by holding back:
        </p>

        <KeyConcept title="Entering Back Turn" icon="🔙">
          <ul>
            <li><code>b+3~B</code> — Homing mid into BT</li>
            <li><code>b+4~B</code> — Homing mid into BT</li>
            <li><code>db+2~B or db+2~db</code> — Mid into BT (can crouch)</li>
            <li><code>2,b+2</code> — Jab string into BT (press nothing after)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Back Turn Options">
        <p>
          From Back Turn, you have these options:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          <MoveCard character="law"
            move={{
              input: 'BT 2,2',
              hitLevel: ['m', 'm'],
              damage: '17, 20',
              startup: 'i15',
              onBlock: '-14',
              onHit: '+31d',
              onCH: 'Launch',
              tags: ['Hit Confirmable', 'Counter-Hit Launcher'],
              description: 'Hit confirmable mid-mid. Counter-hit launcher. Your main BT option.',
            }}
          />

          <MoveCard character="law"
            move={{
              input: 'BT 1+2',
              hitLevel: ['h'],
              damage: '20',
              startup: 'i15',
              onBlock: '+1',
              onHit: '+16g',
              tags: ['Homing', 'High', 'Plus on Block'],
              description: 'Homing high. Plus on block. Use against steppers.',
            }}
          />

          <MoveCard character="law"
            move={{
              input: 'BT uf+4',
              hitLevel: ['m'],
              damage: '25',
              startup: 'i9',
              onBlock: '-12',
              onHit: 'Launch',
              tags: ['9 Frame Launcher', 'Fast'],
              description: '9 frame launcher from back turn. Very fast. -12 on block.',
            }}
          />

          <MoveCard character="law"
            move={{
              input: 'BT d+4',
              hitLevel: ['l'],
              damage: '17',
              startup: 'i23',
              onBlock: '-13',
              onHit: '+6c',
              onCH: '+26d',
              tags: ['Low', 'Plus on Hit'],
              description: 'Back turn low. Plus on hit. Can transition to FUFA.',
            }}
          />
        </div>

        <KeyConcept title="BT Game Plan" icon="🔄">
          <ul>
            <li><strong>BT 2,2</strong> — Main option. Hit confirm and counter-hit launch.</li>
            <li><strong>BT uf+4</strong> — Fast launcher if they press.</li>
            <li><strong>BT d+4</strong> — Low option to mix.</li>
            <li><strong>BT 1+2</strong> — Catches steppers.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Back Turn is Situational">
          Back Turn is not Law's main game. Use it occasionally to mix up your offense, 
          especially at the wall, but don't rely on it. Your standard DSS pressure is usually 
          better.
        </TipBox>
      </Section>

      <Section title="Movement Tips">
        <p>
          Law's movement isn't the best, but here's how to maximize it:
        </p>

        <KeyConcept title="Law Movement" icon="🏃">
          <ul>
            <li><strong>Sidestep right</strong> — Best against many characters</li>
            <li><strong>Korean backdash</strong> — Practice your backdash cancel</li>
            <li><strong>Run-in pressure</strong> — wr+3 is +6 on block</li>
            <li><strong>Wavedash/crouch walk</strong> — For slide mixup approach</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Against Law">
          Good anti-Law players will sidestep right (Law's left) to avoid his jabs, df+1, 
          and b+1 string. Use b+4 (homing), db+3 (tracks left), or read their step with df+2.
        </TipBox>
      </Section>

      <Collapsible title="Back Turn Reference" icon="📊">
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
                <td style={{ padding: '8px' }}><code>BT 1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>High</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ padding: '8px' }}>Fast jab</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>BT 2,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m, m</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ padding: '8px' }}>Main BT option, CH launches</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>BT 1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>High</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ padding: '8px' }}>Homing</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>BT uf+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ padding: '8px' }}>9f launcher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>BT d+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Low</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ padding: '8px' }}>BT low</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>BT d+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Low</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-15</td>
                <td style={{ padding: '8px' }}>Launch punishable now</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
