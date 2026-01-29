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
      title="Keepout Tools"
      intro="This is where Yoshimitsu shines. His keepout game is among the best in Tekken — long-range mids that recover so fast they're nearly impossible to whiff punish. Make your opponent scared to approach."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Learn Low Attacks"
    >
      <Section title="The Star: df+2">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i15-16',
            onBlock: '-7',
            onHit: '+34a (launches)',
            tags: ['Mid', 'Launcher', 'Safe', 'Keepout King'],
            description: 'Safe mid launcher with incredible range. Recovers so fast it\'s borderline impossible to whiff punish. Your primary keepout tool.',
          }}
          showVideo
        />

        <p>
          df+2 is Yoshimitsu's <span className="highlight">signature keepout move</span>. At i15-16, 
          it's a mid launcher that's SAFE on block (-7). But here's what makes it special: the 
          recovery is so fast that even when it whiffs, opponents struggle to punish it.
        </p>

        <KeyConcept title="Why df+2 is Broken" icon="🎯">
          <ul>
            <li><strong>Safe launcher</strong> — -7 on block, no punish possible</li>
            <li><strong>Insane whiff recovery</strong> — Opponents can't punish your whiffs</li>
            <li><strong>Full combo on hit</strong> — Launches for 60+ damage</li>
            <li><strong>Great range</strong> — Controls mid-range spacing</li>
            <li><strong>+4s vs crouching</strong> — Even catches crouchers with frame advantage</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Keepout Game">
          Stand at mid-range and throw out df+2. If they approach, they get launched. If they 
          block, you're safe. If it whiffs, they probably can't punish. This is Yoshimitsu's 
          element — make them come to you, then punish their approach.
        </TipBox>
      </Section>

      <Section title="The d+2 Series">
        <p>
          The d+2 series is another keepout staple. These moves have massive range and sword properties.
        </p>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'd+2',
            hitLevel: ['M'],
            damage: '12',
            startup: 'i16-17',
            onBlock: '-9 to -8',
            onHit: '+0 to +1',
            tags: ['Mid', 'Sword', 'Long Range'],
            description: 'Long-range sword poke. Safe and sets up the d+2 extensions.',
          }}
          showVideo
        />

        <MoveCard character="yoshimitsu"
          move={{
            input: 'd+2,2',
            hitLevel: ['M', 'm'],
            damage: '12, 15',
            startup: 'i16-17',
            onBlock: '-12',
            onHit: '+7g',
            tags: ['Mid', 'Mid', 'NSS.Transition'],
            description: 'Combo from first hit. Can transition to NSS with back input. Key combo filler.',
          }}
          showVideo
        />

        <MoveCard character="yoshimitsu"
          move={{
            input: 'd+2,2,2',
            hitLevel: ['M', 'm', 'M'],
            damage: '12, 15, 19',
            startup: 'i16-17',
            onBlock: '-13',
            onHit: '+16a',
            tags: ['Mid', 'Mid', 'Mid', 'Tornado', 'Knockdown'],
            description: 'Full extension. -13 on block but huge knockdown on hit. Good combo ender.',
          }}
          showVideo
        />

        <KeyConcept title="d+2,2~B — The NSS Transition" icon="🔄">
          <p>
            After <code>d+2,2</code>, you can hold back to transition to No Sword Stance. This is 
            crucial for combos — the notation is <code>d+2,2~B</code>. In combos, you'll often see:
          </p>
          <p style={{ fontFamily: 'monospace', marginTop: '12px', padding: '8px', background: 'var(--background-secondary)', borderRadius: '4px' }}>
            d+2,2~B → df+1,2,1 → NSS 1+4
          </p>
          <p style={{ marginTop: '12px' }}>
            This NSS transition is a core combo tool. Practice the input.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Poison Breath — The Unwhiffpunishable">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'db+1+2, 1 (BDS 1)',
            hitLevel: ['h!'],
            damage: '25',
            startup: 'i21-40',
            onBlock: '—',
            onHit: '+32a to +51a',
            tags: ['High', 'Unblockable', 'Cannot Be Whiff Punished'],
            description: 'Yoshimitsu breathes poison. CANNOT BE WHIFF PUNISHED. Seriously, the recovery is insane.',
          }}
          showVideo
        />

        <p>
          Poison Breath is <span className="highlight">literally impossible to whiff punish</span>. 
          There is no punish showing up because there is none. The recovery is so good that even 
          if you whiff at point blank, opponents can't hit you.
        </p>

        <KeyConcept title="How Poison Breath Works" icon="☠️">
          <ol>
            <li>Input <code>db+1+2</code> — Yoshimitsu crouches and holds his stomach</li>
            <li>Press <code>1</code> to release the poison breath</li>
            <li>You can hold the stance and release later for timing mixups</li>
            <li>Opponent gets hit? Full combo opportunity (high knockdown)</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="It's Still a High">
          Poison Breath is an unblockable HIGH. Opponents can duck it. Use it to catch people 
          approaching or pressing buttons, not against patient crouchers.
        </TipBox>

        <TipBox variant="tip" title="Mix the Timing">
          You can delay the breath release. Sometimes instant <code>db+1+2,1</code>, sometimes 
          hold it for a second, sometimes cancel with <code>db+1+2,3</code> (jump back). Keep 
          them guessing.
        </TipBox>
      </Section>

      <Section title="FC df+4 — The Crouch Game">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'FC df+4',
            hitLevel: ['L'],
            damage: '18',
            startup: 'i18-19',
            onBlock: '-26',
            onHit: '+4c',
            onCH: '+31a (launches)',
            tags: ['Low', 'CH Launcher', 'Homing', 'From Crouch'],
            description: 'One of the longest reaching CH launchers in the game. Launch punishable but devastating when it lands.',
          }}
          showVideo
        />

        <p>
          FC df+4 is a <span className="highlight">counter-hit launching low</span> with ridiculous range. 
          On CH, you get a full combo. It's launch punishable (-26) but the reward is worth the risk.
        </p>

        <KeyConcept title="FC df+4 Applications" icon="⚡">
          <ul>
            <li><strong>Catch approaches</strong> — They run in, you sweep them</li>
            <li><strong>Punish highs</strong> — High crushes during the move</li>
            <li><strong>CH launch</strong> — On counter-hit, full combo</li>
            <li><strong>Plus on normal hit</strong> — +4c gives you momentum</li>
            <li><strong>Transitions to IND</strong> — Can go to Indian Sit for mindgames</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Instant Crouch">
          You can do FC df+4 almost instantly from standing by quickly tapping down then df+4. 
          Practice this input — it makes the move much more threatening when you can throw it 
          out from standing.
        </TipBox>
      </Section>

      <Section title="The Homing Mid: uf+4">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'uf+4',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i20-22',
            onBlock: '-9',
            onHit: '+22a',
            tags: ['Mid', 'Homing', 'Safe', 'Low Crushes', 'Floor Break'],
            description: 'Avoiding the Puddle. Homing mid that low crushes. -9 is safe, and it knocks down on hit.',
          }}
          showVideo
        />

        <p>
          uf+4, nicknamed "Avoiding the Puddle," is your <span className="highlight">homing mid</span>. 
          It tracks sidesteps, crushes lows, and is safe on block. On hit, it knocks down.
        </p>

        <KeyConcept title="When to Use uf+4" icon="🎯">
          <ul>
            <li><strong>Against sidestepping</strong> — Tracks both directions</li>
            <li><strong>Against lows</strong> — Crushes low attacks</li>
            <li><strong>Safe approach</strong> — -9 can't be punished</li>
            <li><strong>Knockdown pressure</strong> — Hit leads to oki</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Keepout Gameplan">
        <p>
          Here's how to use these tools together:
        </p>

        <KeyConcept title="Yoshimitsu's Keepout Strategy" icon="🛡️">
          <ol>
            <li><strong>Stand at mid-range</strong> — Just outside their effective range</li>
            <li><strong>Use df+2</strong> — Safe launcher that controls space</li>
            <li><strong>Mix in d+2 series</strong> — Long-range sword pokes</li>
            <li><strong>Poison Breath for reads</strong> — When you predict approach</li>
            <li><strong>FC df+4 vs aggressive players</strong> — CH launch opportunity</li>
            <li><strong>uf+4 for sidestepping</strong> — Homing keeps them honest</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The Philosophy">
          Yoshimitsu's keepout is about making your opponent scared to approach. If they can't 
          come to you, you dictate the pace. This is Yoshimitsu's comfort zone — when they're 
          forced to approach through your wall of mids.
        </TipBox>

        <TipBox variant="warning" title="Don't Turtle Forever">
          Keepout is strong, but eventually you need to open them up. Once they're respecting 
          your mids, work in lows and approach options. Pure keepout loses to patient turtling.
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
                <td style={{ padding: '8px' }}><code>df+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15-16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-7</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Launch</td>
                <td style={{ padding: '8px' }}>Safe launcher, insane recovery</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16-17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9~-8</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+0~+1</td>
                <td style={{ padding: '8px' }}>Long range sword poke</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+2,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16-17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+7g</td>
                <td style={{ padding: '8px' }}>NSS transition with ~B</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>BDS 1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i21-40</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+32a~+51a</td>
                <td style={{ padding: '8px' }}>Unblockable, can't be whiff punished</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>FC df+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18-19</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-26</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4c / CH Launch</td>
                <td style={{ padding: '8px' }}>Long range CH launcher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>uf+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i20-22</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>KND</td>
                <td style={{ padding: '8px' }}>Homing, low crushes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
