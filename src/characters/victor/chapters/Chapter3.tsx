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
      title="Core Mids & Pokes"
      intro="Victor's true power comes from his mid-range tools. These moves control space, deal chip damage, and set up his entire gameplan. Master these and you'll understand what makes Victor elite at keep-out."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Learn Low Attacks"
    >
      <Section title="Victor's Mid-Range Philosophy">
        <p>
          Unlike characters who excel at close-range poking, Victor thrives at <span className="highlight">mid-range</span>. 
          His stronger moves have great reach, deal chip damage on block, and push opponents 
          back — making it hard for them to retaliate.
        </p>

        <KeyConcept title="The Mid-Range Advantage" icon="📏">
          <ul>
            <li><strong>Space control</strong> — Opponents can't approach safely</li>
            <li><strong>Chip damage</strong> — Even blocked moves hurt them</li>
            <li><strong>Pushback</strong> — Resets neutral in your favor</li>
            <li><strong>Whiff punishment</strong> — Bait attacks, punish with launchers</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="df+1 — The Basic Mid Poke">
        <MoveCard character="victor"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '10',
            startup: 'i13-14',
            onBlock: '-2',
            onHit: '+4',
            tags: ['Mid', 'Poke', 'Safe', 'Tracks SSR'],
            description: 'Your standard mid poke. Only -2 on block — most df+1s are more minus.',
          }}
          showVideo
        />

        <p>
          df+1 is Victor's <span className="highlight">basic mid check</span>. Use it to hit 
          crouching opponents and maintain pressure. At only -2 on block, it's nearly safe 
          to spam.
        </p>

        <MoveCard character="victor"
          move={{
            input: 'df+1,1',
            hitLevel: ['m', 'h', 'h'],
            damage: '10, 7, 7',
            startup: 'i13-14',
            onBlock: '-4',
            onHit: '+7',
            tags: ['Mid', 'High', 'High', 'Extension'],
            description: 'Multi-hit extension. The high hits can be ducked, so use sparingly.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="df+1 Usage">
          Use df+1 by itself 90% of the time. The extension (df+1,1) has high hits that can 
          be ducked and launched. Only use the extension to catch people pressing buttons 
          after the first hit.
        </TipBox>
      </Section>

      <Section title="1+2 — The Counter-Hit King">
        <MoveCard character="victor"
          move={{
            input: '1+2',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i15',
            onBlock: '-9',
            onHit: '+2',
            onCH: 'Launch',
            tags: ['Mid', 'Weapon', 'CH Launcher', 'Safe', 'Keep-Out'],
            description: 'One of Victor\'s best moves. Safe mid that launches on counter-hit.',
          }}
          showVideo
        />

        <p>
          1+2 is <span className="highlight">one of the best counter-hit tools in Tekken</span>. 
          It's a safe mid (only -9) that launches on counter-hit for a full combo. The only 
          weakness is the range — it's not very long.
        </p>

        <KeyConcept title="When to Use 1+2" icon="⚡">
          <ul>
            <li><strong>After plus frames</strong> — Jab (+1) → 1+2 catches button presses</li>
            <li><strong>When they're aggressive</strong> — They press, they die</li>
            <li><strong>As a check</strong> — Safe mid that beats mashing</li>
            <li><strong>Frame traps</strong> — After db+4 hit (+4), ws1+2 (+8), etc.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Range Limitation">
          1+2 has stubby range. Don't throw it out at mid-range hoping it connects — 
          it will whiff and you'll get punished. Use it up close when you have plus 
          frames or predict them pressing.
        </TipBox>
      </Section>

      <Section title="d+2 — The Versatile Mid">
        <MoveCard character="victor"
          move={{
            input: 'd+2',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i18',
            onBlock: '0',
            onHit: '+4 / HE',
            tags: ['Mid', 'Weapon', 'Heat Engager', 'Neutral on Block', 'Chip Damage'],
            description: 'Zero on block with good range. Heat engager that launches on heat dash.',
          }}
          showVideo
        />

        <p>
          d+2 is Victor's <span className="highlight">most versatile mid</span>. It's ZERO on 
          block — neither player has advantage. It has good range, deals 6 chip damage, and 
          is a heat engager that launches when heat dash cancelled.
        </p>

        <KeyConcept title="d+2 Applications" icon="🎯">
          <ul>
            <li><strong>Neutral tool</strong> — Safe to throw out, creates space</li>
            <li><strong>Heat fishing</strong> — Hit it to engage heat</li>
            <li><strong>Heat dash launcher</strong> — Full combo in heat</li>
            <li><strong>After +8</strong> — Becomes uninterruptible and tracks both sides</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The +8 Rule">
          When you're +8 or more (after 1,2 hit, ws1+2 hit, etc.), d+2 becomes <strong>uninterruptible 
          and tracks fully</strong>. This is one of Victor's best situations — d+2 here cannot 
          be stepped or interrupted.
        </TipBox>

        <TipBox variant="warning" title="Linear at Range">
          d+2 is very linear. At range, opponents can sidestep right and launch you. Use 
          homing moves first (uf+2, b+4) before relying on d+2 in neutral.
        </TipBox>
      </Section>

      <Section title="f+1+2 — The Big Sword">
        <MoveCard character="victor"
          move={{
            input: 'f+1+2',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i24-25',
            onBlock: '+3',
            onHit: '+1a / HE',
            tags: ['Mid', 'Weapon', 'Heat Engager', 'PLUS on Block', 'Huge Chip', 'Balcony Break'],
            description: 'Plus on block with massive chip damage. Slow but incredible reward.',
          }}
          showVideo
        />

        <p>
          f+1+2 is Victor's <span className="highlight">plus-on-block heat engager</span>. 
          It's slow (i24), but it's +3 on block and deals a whopping 10 chip damage. Even 
          when blocked, you're winning.
        </p>

        <KeyConcept title="f+1+2 Math" icon="📊">
          <ul>
            <li><strong>On block</strong>: +3 frames, 10 chip damage</li>
            <li><strong>On hit</strong>: Heat engage, knockdown</li>
            <li><strong>Heat dash</strong>: Full combo launcher</li>
            <li><strong>Bad on whiff</strong>: Very punishable if it misses</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="When to Use f+1+2">
          Use f+1+2 for:
          <ul>
            <li>Oki pressure (hits grounded)</li>
            <li>After conditioning with faster moves</li>
            <li>When you need chip damage to close a round</li>
            <li>Against passive/turtling opponents</li>
          </ul>
        </TipBox>

        <TipBox variant="warning" title="Whiff Recovery">
          f+1+2 has TERRIBLE whiff recovery. If it misses, you're getting launched. Only 
          use it when you're confident it will connect or be blocked.
        </TipBox>
      </Section>

      <Section title="f,f,f+2 — The Running Mid">
        <MoveCard character="victor"
          move={{
            input: 'f,f,f+2',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i18-19',
            onBlock: '+2',
            onHit: '+34d',
            onCH: 'Launch',
            tags: ['Mid', 'Weapon', 'PLUS on Block', 'CH Launcher', 'Chip Damage', 'IAI.Transition'],
            description: 'Plus on block approach tool. Launches on counter-hit. Transitions to IAI with d.',
          }}
          showVideo
        />

        <p>
          f,f,f+2 (while running 2) is Victor's <span className="highlight">main approach tool</span>. 
          It's +2 on block, launches on counter-hit, deals chip damage, and can transition 
          to IAI stance by holding down.
        </p>

        <KeyConcept title="f,f,f+2 Power" icon="🏃">
          <ul>
            <li><strong>+2 on block</strong> — You keep your turn</li>
            <li><strong>CH launches</strong> — Big damage for pressing into it</li>
            <li><strong>9 chip damage</strong> — Hurts even on block</li>
            <li><strong>IAI transition</strong> — Hold d for +5 into stance</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Sidestep Weakness">
          f,f,f+2 loses hard to sidestep right. Good players will step and launch you. 
          Use uf+2 (homing) first to condition them, then f,f,f+2 becomes safe.
        </TipBox>

        <TipBox variant="tip" title="The Mixup Pair">
          Victor's running game is <code>f,f,f+2</code> (mid) and <code>f,f,f+1+2</code> (low). 
          The mid is +2 on block, the low is +4 into IAI stance on hit. Use them together 
          to create a running mixup.
        </TipBox>
      </Section>

      <Section title="uf+1,1 — The Fast Mid Check">
        <MoveCard character="victor"
          move={{
            input: 'uf+1,1',
            hitLevel: ['m', 'm'],
            damage: '9, 21',
            startup: 'i13',
            onBlock: '-14',
            onHit: '+15gc',
            tags: ['Mid', 'Mid', 'Tornado', 'Wall Splat', '13f Punish', 'PRF/IAI Transition'],
            description: 'Fast mid-mid string that wall splats. Can cancel into stances. Your i13 punisher.',
          }}
          showVideo
        />

        <p>
          uf+1,1 is Victor's <span className="highlight">fast mid tool and i13 punisher</span>. 
          It wall splats, can transition into PRF or IAI stance, and leaves the opponent 
          crouching on hit.
        </p>

        <KeyConcept title="uf+1,1 Transitions" icon="🔄">
          <ul>
            <li><code>uf+1,1~f</code> — Transition to PRF stance</li>
            <li><code>uf+1,1~d</code> or <code>uf+1,1~3+4</code> — Transition to IAI stance</li>
            <li>On hit: You're at +15 in full crouch (frame trap territory)</li>
            <li>On block: -14 / -10 if cancelled (knowledge check)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Knowledge Check">
          If you cancel uf+1,1 into IAI stance (<code>uf+1,1~d</code>), you're only -11 on 
          block instead of -14. Most players don't know this and won't punish correctly. 
          Use this to get free IAI stance pressure.
        </TipBox>
      </Section>

      <Section title="Homing Moves (Anti-Step)">
        <p>
          Victor's core moves are linear. You NEED homing moves to stop sidesteps:
        </p>

        <MoveCard character="victor"
          move={{
            input: 'uf+2',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i19-20',
            onBlock: '-9',
            onHit: '+7',
            tags: ['Mid', 'Homing', 'Safe'],
            description: 'Your best homing move. Safe, good range, +7 on hit for frame traps.',
          }}
          showVideo
        />

        <p>
          uf+2 is <span className="highlight">Victor's primary homing move</span>. Use it 
          to condition opponents to stop sidestepping. Once they stop stepping, your linear 
          moves become much safer.
        </p>

        <MoveCard character="victor"
          move={{
            input: 'b+4',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i18-19',
            onBlock: '-2',
            onHit: '+13',
            onCH: '+14',
            tags: ['High', 'Homing', 'Safe', 'Balcony Break'],
            description: 'Fast homing high. On counter-hit, guarantees f+4,1 for heat engage.',
          }}
          showVideo
        />

        <p>
          b+4 is a <span className="highlight">homing high</span>. It's -2 on block and +13 
          on normal hit. On counter-hit (+14), you get a guaranteed <code>f+4,1</code> which 
          heat engages and does 44 damage.
        </p>

        <KeyConcept title="Anti-Step Gameplan" icon="🔄">
          <ol>
            <li>Use uf+2 or b+4 early in the round</li>
            <li>Condition them that stepping gets hit</li>
            <li>Now your linear moves (d+2, f+1+2, f,f,f+2) become safer</li>
            <li>If they start stepping again, go back to homing</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="The Projectile: qcf+2">
        <MoveCard character="victor"
          move={{
            input: 'qcf+2',
            hitLevel: ['h'],
            damage: '16',
            startup: 'i22',
            onBlock: '-3',
            onHit: '+4',
            tags: ['High', 'Projectile', 'Chip Damage', 'IAI.Transition', 'Zoning'],
            description: 'Gun projectile. Safe on block, transitions to IAI. Great for zoning.',
          }}
          showVideo
        />

        <p>
          qcf+2 is Victor's <span className="highlight">zoning projectile</span>. It's a 
          high gunshot that's safe on block, deals chip damage, and transitions into IAI 
          stance.
        </p>

        <KeyConcept title="Zoning with qcf+2" icon="🔫">
          <ol>
            <li>Get a life lead</li>
            <li>Backdash (or <code>ub,b</code> teleport) to create space</li>
            <li>Use qcf+2 to zone</li>
            <li>If they run in, you're in IAI for mixups</li>
            <li>If they try to approach slowly, chip them out</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="It's a High">
          qcf+2 is a high — it can be ducked. Don't spam it predictably. Mix it with 
          movement and mid pokes.
        </TipBox>
      </Section>

      <Section title="The Basic Gameplan">
        <KeyConcept title="Putting It Together" icon="🎯">
          <ol>
            <li><strong>Start with jabs and df+1</strong> — Establish your turn</li>
            <li><strong>Use homing (uf+2, b+4)</strong> — Stop sidesteps</li>
            <li><strong>Fish with 1+2</strong> — Catch them pressing for CH launch</li>
            <li><strong>Pressure with d+2 and f+1+2</strong> — Chip damage, plus frames</li>
            <li><strong>Approach with f,f,f+2</strong> — Plus on block, CH launcher</li>
            <li><strong>Zone with qcf+2</strong> — When you have a life lead</li>
          </ol>
        </KeyConcept>

        <p>
          Victor's neutral is about <strong>space control and conditioning</strong>. You're 
          not trying to rush down — you're making opponents respect your tools, then 
          capitalizing when they make mistakes.
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
                <td style={{ padding: '8px' }}><code>df+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-2</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4</td>
                <td style={{ padding: '8px' }}>Basic mid poke</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+2</td>
                <td style={{ padding: '8px' }}>CH launches!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>0</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4 HE</td>
                <td style={{ padding: '8px' }}>Neutral on block, heat engager</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i24</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>HE</td>
                <td style={{ padding: '8px' }}>PLUS on block, 10 chip</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f,f+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+2</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>KND</td>
                <td style={{ padding: '8px' }}>CH launches, ~d to IAI</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>uf+1,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+15gc</td>
                <td style={{ padding: '8px' }}>Wall splat, stance transitions</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>uf+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i19</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+7</td>
                <td style={{ padding: '8px' }}>Homing, safe</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-2</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+13</td>
                <td style={{ padding: '8px' }}>Homing high, CH gives f+4,1</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>qcf+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i22</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4</td>
                <td style={{ padding: '8px' }}>Projectile, to IAI</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
