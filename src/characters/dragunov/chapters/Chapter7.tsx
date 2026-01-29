import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Full Crouch Mix"
      intro="Tekken 8 gave Dragunov a powerful new low: FC df+1,4. Combined with his while standing options, this creates one of the scariest crouch mixups in the game."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Learn Combos"
    >
      <Section title="Entering Full Crouch">
        <p>
          To use crouch moves, you need to be in <span className="highlight">Full Crouch (FC)</span>. 
          There are several ways to get there:
        </p>

        <KeyConcept title="FC Entry Methods" icon="⬇️">
          <ul>
            <li><strong>Hold d or db</strong> — Just crouch</li>
            <li><strong>b+2</strong> — This move leaves you in FC</li>
            <li><strong>b+4,2~d</strong> — Hold d after b+4,2</li>
            <li><strong>d+2 hit</strong> — You're in crouch after d+2</li>
            <li><strong>qcf+4 block</strong> — You're in crouch at +7</li>
            <li><strong>After blocking a low</strong> — You're already crouching</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="b+2 is Your FC Gateway">
          b+2 is a fast (i15) mid that's only -3 on block and +8 on hit. After it connects, 
          you're in FC ready to mix. This is your cleanest way to access FC game in neutral.
        </TipBox>
      </Section>

      <Section title="FC df+1,4 — The Star Low">
        <MoveCard character="dragunov"
          videoId="FC.df+1,4"
          move={{
            input: 'FC df+1,4',
            hitLevel: ['l', 'm'],
            damage: '8, 10 (8, 14 powered)',
            startup: 'i16-17',
            onBlock: '-13 (first hit)',
            onHit: '+7 (SNK)',
            tags: ['Low', 'Mid', 'Plus on Hit', 'SNK Transition', 'New in T8'],
            description: 'Tekken 8\'s gift to Dragunov. Low-mid string that\'s +7 in Sneak on hit. Delay the 4 for powered version.',
            notes: ['Delay 4 for blue spark (14 damage instead of 10)', 'Goes into SNK automatically'],
          }}
          showVideo
        />

        <p>
          FC df+1,4 is <span className="highlight">Dragunov's new Tekken 8 low</span>. It's a 
          low-mid string that leaves you +7 in Sneak on hit. This means after it connects, 
          you're in the exact same position as after qcf+4 block — massive pressure.
        </p>

        <KeyConcept title="FC df+1,4 Properties" icon="⭐">
          <ul>
            <li><strong>Low-mid</strong> — First hit is low, second hit is mid</li>
            <li><strong>+7 in SNK on hit</strong> — Continue with full Sneak mixup</li>
            <li><strong>Delayable</strong> — Delay the 4 for blue spark version (+4 damage)</li>
            <li><strong>-13 on block</strong> — Punishable, but not launch punishable</li>
            <li><strong>Long range</strong> — Excellent reach for a low</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Delay for Damage">
          If you time the 4 input perfectly (delay it slightly), you get blue sparks and 
          14 damage on the second hit instead of 10. Practice this timing — it adds up.
        </TipBox>

        <TipBox variant="warning" title="First Hit is Steppable">
          The first hit of FC df+1,4 can be sidestepped. Mix it with ws moves to catch steppers.
        </TipBox>
      </Section>

      <Section title="While Standing Options">
        <p>
          From crouch, you can do "while standing" moves by releasing crouch and pressing a button. 
          These are your mid options to mix with FC df+1,4.
        </p>

        <MoveCard character="dragunov"
          videoId="ws4"
          move={{
            input: 'ws+4',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i11-12',
            onBlock: '-5',
            onHit: '+6',
            tags: ['Mid', 'Fast', 'Safe'],
            description: 'Fastest while standing mid. Use for quick checks and punishment.',
          }}
          showVideo
        />

        <MoveCard character="dragunov"
          videoId="ws3"
          move={{
            input: 'ws+3',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i16-17',
            onBlock: '-9',
            onHit: '+15a (KND)',
            onCH: '+36a (Launch!)',
            tags: ['Mid', 'Knockdown', 'CH Launcher', 'Wall Splat'],
            description: 'Same speed as FC df+1,4. The mid option in your 50/50. Wall splats.',
          }}
          showVideo
        />

        <MoveCard character="dragunov"
          videoId="ws2"
          move={{
            input: 'ws+2',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i15-16',
            onBlock: '-12',
            onHit: '+28a (Launch!)',
            tags: ['Mid', 'Launcher', 'Punisher'],
            description: 'While standing launcher. Your i15 crouch punisher.',
          }}
          showVideo
        />

        <MoveCard character="dragunov"
          videoId="ws1+2"
          move={{
            input: 'ws+1+2',
            hitLevel: ['m'],
            damage: '28',
            startup: 'i12-13',
            onBlock: '-14',
            onHit: '+19a (KND)',
            tags: ['Mid', 'Heat Engager', 'Wall Splat', 'Punisher'],
            description: 'i12 heat engager from crouch. Great punishment and wall splats.',
          }}
          showVideo
        />
      </Section>

      <Section title="The 50/50">
        <p>
          The core crouch mixup is simple: <span className="highlight">FC df+1,4 or ws+3</span>. 
          Both moves have the same startup (i16-17), so the opponent must guess.
        </p>

        <KeyConcept title="The FC 50/50" icon="🎲">
          <ul>
            <li><strong>FC df+1,4</strong> — Low option, +7 in SNK on hit</li>
            <li><strong>ws+3</strong> — Mid option, knockdown on hit, wall splats</li>
            <li><strong>Both are i16-17</strong> — Same speed, pure guess</li>
          </ul>
        </KeyConcept>

        <p>
          If they block standing → FC df+1,4 hits them.<br />
          If they crouch → ws+3 launches them.
        </p>

        <TipBox variant="tip" title="ws+3 is Preferred at Wall">
          ws+3 wall splats, leading to massive damage. At the wall, favor ws+3 in your mix 
          because the reward is so much higher.
        </TipBox>
      </Section>

      <Section title="b+2 — The Setup Move">
        <MoveCard character="dragunov"
          move={{
            input: 'b+2',
            hitLevel: ['m'],
            damage: '14',
            startup: 'i15',
            onBlock: '-3',
            onHit: '+8c',
            tags: ['Mid', 'Safe', 'FC Transition'],
            description: 'Fast safe mid that leaves you in FC. The gateway to your crouch game.',
          }}
          showVideo
        />

        <p>
          b+2 is how you access the crouch mix cleanly. On block, you're -3 but in crouch — 
          opponents often don't realize they need to attack. On hit, you're +8 in crouch.
        </p>

        <KeyConcept title="After b+2 on Hit (+8c)" icon="➕">
          <ul>
            <li><strong>FC df+1,4</strong> — Uninterruptible low</li>
            <li><strong>ws+3</strong> — Uninterruptible mid</li>
            <li><strong>Crouch throw</strong> — If they freeze</li>
            <li><strong>ws+1+2</strong> — Heat engager option</li>
          </ul>
        </KeyConcept>

        <Collapsible title="b+2,1 Extension" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <MoveCard character="dragunov"
              videoId="b+2,1"
              move={{
                input: 'b+2,1',
                hitLevel: ['m', 'h'],
                damage: '14, 11',
                startup: 'i15',
                onBlock: '-5',
                onHit: '+6',
                tags: ['Mid', 'High', 'Safe'],
                description: 'b+2 with high extension. Safe string but second hit can be ducked.',
              }}
              showVideo
            />
            <p style={{ marginTop: '12px' }}>
              The extension is high and can be ducked. Use mainly b+2 alone for FC access. 
              The extension catches people pressing after b+2 block.
            </p>
          </div>
        </Collapsible>
      </Section>

      <Section title="After qcf+4 Block">
        <p>
          Remember, qcf+4 on block leaves you +7 in crouch. This is a perfect FC mix situation:
        </p>

        <KeyConcept title="qcf+4 Block Flow" icon="🔄">
          <ol>
            <li><strong>qcf+4 blocked</strong> — You're +7 in crouch</li>
            <li><strong>FC df+1,4</strong> — Low, beats standing block</li>
            <li><strong>ws+3</strong> — Mid, beats crouch</li>
            <li><strong>Crouch throw</strong> — Beats freeze</li>
            <li><strong>ws+4</strong> — Safe check option</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="After d+2 Counter-Hit">
        <p>
          d+2 on counter-hit gives +13 in crouch — guaranteed mix:
        </p>

        <KeyConcept title="d+2 CH Flow" icon="💥">
          <ul>
            <li><strong>d+2 CH</strong> — +13 in crouch</li>
            <li><strong>Crouch throw</strong> — GUARANTEED (i12 throw vs -13)</li>
            <li><strong>FC df+1,4</strong> — Guaranteed low</li>
            <li><strong>ws+2</strong> — i15 launcher, uninterruptible</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Crouch Throw is Free">
          After d+2 CH (+13c), crouch throw is guaranteed because throws are i12. 
          This is 14 + 35 = 49 damage from a poke. Don't forget it.
        </TipBox>
      </Section>

      <Section title="Complete Crouch Gameplan">
        <p>
          Here's how to incorporate the crouch game into your overall strategy:
        </p>

        <KeyConcept title="The FC Integration" icon="🎯">
          <ol>
            <li><strong>From neutral</strong> — b+2 to enter FC safely</li>
            <li><strong>After WR+2</strong> — Dash up b+2 for FC access</li>
            <li><strong>After plus frames</strong> — d+2 to enter crouch, or b+2</li>
            <li><strong>After qcf+4</strong> — Already in crouch at +7</li>
            <li><strong>After d+2 CH</strong> — Massive advantage for guaranteed mix</li>
            <li><strong>In crouch</strong> — FC df+1,4 or ws+3 50/50</li>
            <li><strong>On hit</strong> — Continue pressure in SNK or standing</li>
          </ol>
        </KeyConcept>
      </Section>

      <Collapsible title="FC/WS Frame Data" icon="📊">
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
                <td style={{ padding: '8px' }}><code>FC df+1,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16-17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+7 (SNK)</td>
                <td style={{ padding: '8px' }}>Low-mid, delay 4 for blue spark</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i11-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-5</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+6</td>
                <td style={{ padding: '8px' }}>Fastest WS mid</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16-17</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-9</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+15a</td>
                <td style={{ padding: '8px' }}>50/50 mid, wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15-16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+28a</td>
                <td style={{ padding: '8px' }}>Launcher, i15 punisher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12-13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+19a</td>
                <td style={{ padding: '8px' }}>Heat engager, i12 punisher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8c</td>
                <td style={{ padding: '8px' }}>FC entry tool</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
