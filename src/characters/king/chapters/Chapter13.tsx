import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter13({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={13}
      title="Punishment"
      intro="King's punishment is unique — you can punish with throws for massive damage, or with normal attacks for combos. Learn when to use each."
      onPrevious={() => goToChapter(12)}
      onNext={() => goToChapter(14)}
      nextLabel="Learn Heat System"
    >
      <Section title="Punishment Philosophy">
        <p>
          King's punishment is <span className="highlight">unique</span>. Most characters punish with 
          launchers for combos. King can punish with throws for massive damage, or with launchers for combos. 
          Learn when to use each.
        </p>

        <KeyConcept title="Punishment Options" icon="⚖️">
          <ul>
            <li><strong>Throw punish</strong> — Giant Swing, Tombstone for 45-53 damage</li>
            <li><strong>Combo punish</strong> — uf+4, FC df+2 for 70+ damage</li>
            <li><strong>Counter-hit punish</strong> — df+2,1 CH for 76 damage</li>
            <li><strong>Frame advantage</strong> — Jab, f+1+4 for plus frames</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Throw Punishment">
          Throw punishment is King's signature. Punishing with Giant Swing (45-50 damage) is often better 
          than a combo because it's guaranteed and deals psychological damage.
        </TipBox>
      </Section>

      <Section title="10-Frame Punishment">
        <MoveCard character="king"
          move={{
            input: '2,1',
            hitLevel: ['h', 'm'],
            damage: '10, 15',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+8',
            tags: ['High', 'Mid', '10f Punish'],
            description: '10-frame punisher. Plus on hit, can throw after.',
          }}
          showVideo
        />

        <KeyConcept title="10-Frame Options" icon="⚡">
          <ul>
            <li><strong>2,1</strong> — Standard 10f punish, +8 on hit</li>
            <li><strong>1</strong> — Jab, +1 on block, can throw after</li>
            <li><strong>Throw</strong> — Can't throw punish i10 moves (too fast)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="11-14 Frame Punishment">
        <p>
          For moves that are -11 to -14, you have throw options:
        </p>

        <KeyConcept title="Throw Punishment" icon="👑">
          <ul>
            <li><strong>-11</strong> — Tombstone (qcb+1+2) works, 53 damage</li>
            <li><strong>-12</strong> — b+1,2 for combo, or throw</li>
            <li><strong>-13</strong> — b+1,2 for combo, or throw</li>
            <li><strong>-14</strong> — b+2,1 for combo, or throw</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Throw vs Combo">
          For -11 to -14 moves, you can throw punish for guaranteed damage, or combo punish for more damage 
          but requires execution. Choose based on situation — if you need guaranteed damage, throw. If you 
          need maximum damage, combo.
        </TipBox>
      </Section>

      <Section title="15-Frame Punishment">
        <MoveCard character="king"
          move={{
            input: 'uf+4',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i15',
            onBlock: '-13',
            onHit: '+33a',
            tags: ['Mid', 'Launcher'],
            description: '15-frame launcher. Standard punish for -15 moves.',
          }}
          showVideo
        />

        <MoveCard character="king"
          videoId="FC.df+2"
          move={{
            input: 'FC df+2',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i15',
            onBlock: '-14',
            onHit: '+56a',
            tags: ['Mid', 'Launcher', 'Crouch'],
            description: 'Crouch launcher. Use when you\'re already crouching.',
          }}
          showVideo
        />

        <KeyConcept title="15-Frame Options" icon="🚀">
          <ul>
            <li><strong>uf+4</strong> — Hopkick, launches for combo</li>
            <li><strong>FC df+2</strong> — Crouch launcher, same speed</li>
            <li><strong>Throw</strong> — Can throw punish, but combo is better</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="While Standing Punishment">
        <MoveCard character="king"
          videoId="ws4"
          move={{
            input: 'ws+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i11',
            onBlock: '-6',
            onHit: '+5',
            tags: ['Mid', 'WS Punish'],
            description: '11-frame while standing punisher. Plus on hit.',
          }}
          showVideo
        />

        <MoveCard character="king"
          videoId="ws1+2"
          move={{
            input: 'ws+1+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i18',
            onBlock: '-10',
            onHit: '+35a',
            tags: ['Mid', 'WS Launcher'],
            description: '18-frame while standing launcher. Use for -18 or more.',
          }}
          showVideo
        />

        <KeyConcept title="WS Punishment" icon="⬆️">
          <ul>
            <li><strong>ws+4</strong> — i11 WS punisher, +5 on hit</li>
            <li><strong>FC d+1</strong> — i10 WS punisher, but low</li>
            <li><strong>ws+1+2</strong> — i18 WS launcher, use for -18+</li>
          </ul>
        </KeyConcept>
      </Section>

      <Collapsible title="Punishment Table" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Frames</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Standing</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>While Standing</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>i10</td>
                <td style={{ padding: '8px' }}><code>2,1</code> or <code>1</code></td>
                <td style={{ padding: '8px' }}><code>FC d+1</code></td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i11</td>
                <td style={{ padding: '8px' }}><code>Tombstone</code> (53 dmg) or <code>b+1,2</code></td>
                <td style={{ padding: '8px' }}><code>ws+4</code></td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i12</td>
                <td style={{ padding: '8px' }}><code>b+1,2</code> or throw</td>
                <td style={{ padding: '8px' }}><code>ws+4</code></td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i13-14</td>
                <td style={{ padding: '8px' }}><code>b+1,2</code> or throw</td>
                <td style={{ padding: '8px' }}><code>ws+4</code></td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i15</td>
                <td style={{ padding: '8px' }}><code>uf+4</code> or <code>FC df+2</code></td>
                <td style={{ padding: '8px' }}><code>ws+4</code></td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i18</td>
                <td style={{ padding: '8px' }}><code>uf+4</code> or <code>FC df+2</code></td>
                <td style={{ padding: '8px' }}><code>ws+1+2</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>

      <Section title="The Complete Picture">
        <p>
          King's punishment is unique because you can punish with throws. Learn when to throw punish vs 
          combo punish, and you'll maximize your damage.
        </p>

        <KeyConcept title="Master Punishment" icon="👑">
          <ul>
            <li><strong>10f</strong> — 2,1 or 1</li>
            <li><strong>11-14f</strong> — Throw or combo</li>
            <li><strong>15f+</strong> — Combo punish</li>
            <li><strong>WS</strong> — ws+4 for i11, ws+1+2 for i18+</li>
            <li><strong>Choose wisely</strong> — Throw for guaranteed damage, combo for maximum damage</li>
          </ul>
        </KeyConcept>

        <p>
          Master punishment, and you'll maximize your damage output. Remember: throw punishment is King's 
          signature. Use it to establish dominance.
        </p>
      </Section>
    </Chapter>
  )
}
