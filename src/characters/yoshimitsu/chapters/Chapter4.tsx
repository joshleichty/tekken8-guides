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
      title="Low Attacks"
      intro="Yoshimitsu's low game is about chip damage and conditioning. None of his lows are amazing by themselves, but they force reactions that let your mids land. Learn when and how to use each one."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Learn Important Strings"
    >
      <Section title="The Main Low: db+4">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'db+4',
            hitLevel: ['L'],
            damage: '14',
            startup: 'i17',
            onBlock: '-12',
            onHit: '-1',
            tags: ['Low', 'Unseeable', 'Sets Up Crouch Dash'],
            description: 'Your main low poke. Fast enough to be unseeable, good range, and sets up crouch dash mixups on hit.',
          }}
          showVideo
        />

        <p>
          db+4 is Yoshimitsu's <span className="highlight">standard low poke</span>. At i17, it's 
          fast enough that opponents can't consistently react to it. On hit, you're -1 — essentially 
          neutral — and in a good position to continue pressure.
        </p>

        <KeyConcept title="db+4 Strategy" icon="🎯">
          <ul>
            <li><strong>Chip damage</strong> — 14 damage adds up over a round</li>
            <li><strong>Force crouch</strong> — They have to respect it and block low</li>
            <li><strong>Crouch dash setup</strong> — On hit, <code>f,n,d,df+2</code> crushes jabs</li>
            <li><strong>Punishable but safe-ish</strong> — -12 means only certain punishes work</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The db+4 → CD+2 Setup">
          After db+4 on hit, you're -1 and they might press a jab. If you input <code>f,n,d,df+2</code> 
          (crouch dash 2), you'll high crush their jab and counter-hit launch them. It's a knowledge 
          check that works at all levels.
        </TipBox>
      </Section>

      <Section title="The Multi-Hit Low: db+3,3 Series">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'db+3,3',
            hitLevel: ['l', 'l'],
            damage: '8, 7',
            startup: 'i18-19',
            onBlock: '-19',
            onHit: '-7',
            tags: ['Low', 'Low', 'Multi-Hit', 'IND.Transition'],
            description: 'Multi-hitting low string. Can be extended for more hits or canceled into Indian Sit.',
          }}
          showVideo
        />

        <p>
          The db+3 series is <span className="highlight">Yoshimitsu's tricky low game</span>. You can 
          keep pressing 3 to continue the string, but there's a catch — if you spin too long, 
          Yoshimitsu gets dizzy and falls over.
        </p>

        <KeyConcept title="db+3,3 Extensions" icon="🔄">
          <ul>
            <li><strong>db+3,3</strong> — Two hits, -7 on hit (mental frames)</li>
            <li><strong>db+3,3,4</strong> — Ends with a mid kick, -8 with pushback</li>
            <li><strong>db+3,3,d+3+4</strong> — Transitions to Indian Sit stance</li>
            <li><strong>db+3,3,3,3...</strong> — Keep going but risk getting dizzy</li>
          </ul>
        </KeyConcept>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'db+3,3,4',
            hitLevel: ['l', 'l', 'm'],
            damage: '8, 7, 15',
            startup: 'i18-19',
            onBlock: '-8 (pushback)',
            onHit: '+3',
            onCH: 'Wall Splat',
            tags: ['Low', 'Low', 'Mid', 'Wall Breaks'],
            description: 'Low-low-mid string. The 4 jails from the lows, so opponents can\'t interrupt. Counter-hit wall splats.',
          }}
          showVideo
        />

        <p>
          The key thing about <code>db+3,3,4</code> is that the lows <span className="highlight">jail into the mid</span>. 
          If they block the lows, they can't interrupt the 4 — they have to respect it.
        </p>

        <TipBox variant="warning" title="The Jailing Nuance">
          db+3,3 jails into the 4, but opponents with i13 launchers can interrupt if you DON'T 
          do the 4. Characters like Bryan (ws2) can launch you between hits. Use the full string 
          or go to IND stance instead.
        </TipBox>

        <TipBox variant="tip" title="Mental Frames">
          After db+3,3 on hit, you're -7. Technically they can press, but most players don't 
          because they're scared of the 4 extension. These "mental frames" let you continue offense.
        </TipBox>
      </Section>

      <Section title="The Quick Low: d+4">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'd+4',
            hitLevel: ['l'],
            damage: '6',
            startup: 'i12',
            onBlock: '-15',
            onHit: '-4',
            tags: ['Low', 'Fast', 'High Crushes'],
            description: 'Quick dick jab. Faster than db+4 but less damage and more punishable.',
          }}
          showVideo
        />

        <p>
          d+4 is your <span className="highlight">fastest low</span> at i12. Use it when you need 
          speed over damage — interrupting pressure, checking reactions, or high crushing.
        </p>

        <KeyConcept title="When to Use d+4 vs db+4" icon="⚖️">
          <ul>
            <li><strong>d+4</strong> — When you need speed, high crush situations</li>
            <li><strong>db+4</strong> — Better damage, better range, better frames on hit</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            In general, <code>db+4</code> is your main low. Use <code>d+4</code> for specific speed situations.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Crouch Low: d+3">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'd+3',
            hitLevel: ['L'],
            damage: '12',
            startup: 'i15-17',
            onBlock: '-18 to -16',
            onHit: '-4 to -2',
            tags: ['Low', 'High Crushes', 'Leaves in Crouch'],
            description: 'Low that leaves you in crouch state, enabling FC moves afterward.',
          }}
          showVideo
        />

        <p>
          d+3 is useful because it <span className="highlight">leaves you in crouch</span>. This 
          means you can immediately do FC df+4 or other crouch moves afterward.
        </p>

        <KeyConcept title="d+3 Flow" icon="🔄">
          <p>After d+3, you're in crouch and can do:</p>
          <ul>
            <li><code>FC df+4</code> — The long-range CH launcher</li>
            <li><code>ws+4</code> — Fast while standing mid</li>
            <li><code>FC d+1</code> — The unblockable low (more on this later)</li>
            <li><code>d+3+4</code> — Indian Sit stance</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Slide: 3~4">
        <MoveCard character="yoshimitsu"
          move={{
            input: '3~4',
            hitLevel: ['m', 'm'],
            damage: '6, 22',
            startup: 'i17-18',
            onBlock: '-6',
            onHit: '+3',
            tags: ['Mid', 'Mid', 'Approach', 'DGF.Transition'],
            description: 'Jumping approach tool. Safe on block and can transition to Dragonfly with up input.',
          }}
          showVideo
        />

        <p>
          3~4 (slide input from 3 to 4) is <span className="highlight">not a low despite the animation</span>. 
          It's a mid-mid approach tool that's safe on block and transitions to Dragonfly.
        </p>

        <KeyConcept title="3~4 Properties" icon="🎯">
          <ul>
            <li><strong>-6 on block</strong> — Safe, can't be punished</li>
            <li><strong>+3 on hit</strong> — Slight advantage</li>
            <li><strong>DGF transition</strong> — Hold up during the move to fly</li>
            <li><strong>Low crushes</strong> — Hops over lows during the jump</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The DGF Mixup">
          After 3~4, hold up to go into Dragonfly. You're +5 in DGF if they blocked. This gives 
          you access to DGF mixups — we'll cover those in detail in Chapter 10.
        </TipBox>
      </Section>

      <Section title="Low Strategy">
        <KeyConcept title="Opening Up Opponents" icon="🔓">
          <p>Yoshimitsu's lows aren't scary by themselves. They're tools to make mids land:</p>
          <ol>
            <li><strong>Show the low</strong> — Land db+4 a few times</li>
            <li><strong>They start blocking low</strong> — Now your mids are free</li>
            <li><strong>df+2 becomes even better</strong> — Safe launcher on crouchers</li>
            <li><strong>Mix it up</strong> — Keep them guessing throughout the round</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Over-Rely on Lows">
          Yoshimitsu's lows are all punishable. db+4 is -12, db+3,3 is -19, d+4 is -15. Good 
          players will launch punish your lows on reaction. Use them to condition, not as your 
          main offense.
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
                <td style={{ padding: '8px' }}><code>db+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-1</td>
                <td style={{ padding: '8px' }}>Main low poke</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+3,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18-19</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-19</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-7</td>
                <td style={{ padding: '8px' }}>Multi-hit, IND transition</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+3,3,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18-19</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+3</td>
                <td style={{ padding: '8px' }}>Jails, CH wall splats</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-15</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-4</td>
                <td style={{ padding: '8px' }}>Fast, high crushes</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15-17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-18~-16</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-4~-2</td>
                <td style={{ padding: '8px' }}>Leaves in FC</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3~4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17-18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+3</td>
                <td style={{ padding: '8px' }}>Mid-mid, DGF transition</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
