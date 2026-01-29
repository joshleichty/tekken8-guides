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
      title="Core Mids & Lows"
      intro="To have complete offense, you need mids that hit crouching opponents and lows that force them to block low. These are the moves that create Hwoarang's pressure and mixups."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Learn Jab Strings & Transitions"
    >
      <Section title="d+3,4 — Your Most Important Move">
        <MoveCard character="hwoarang"
          move={{
            input: 'd+3,4',
            hitLevel: ['l', 'h'],
            damage: '7, 13',
            startup: 'i17',
            onBlock: '+8g to +10g',
            onHit: '+14g to +16g',
            onCH: '+19 to +21',
            tags: ['Low', 'High', 'Plus on Block', 'RFS.Transition', 'Core Move'],
            description: 'THE move. Low-high string that puts you in RFS at massive plus frames. The foundation of Hwoarang pressure.',
          }}
          showVideo
        />

        <p>
          <span className="highlight">d+3,4 is the most important move in Hwoarang's kit.</span> 
          It's a low-high string that transitions to Right Flamingo at plus frames on both block 
          AND hit. This is your pressure starter, your punish ender, your everything.
        </p>

        <KeyConcept title="Why d+3,4 is Broken" icon="💀">
          <ul>
            <li><strong>+8 to +10 on BLOCK</strong> — They blocked your low and you're PLUS</li>
            <li><strong>+14 to +16 on HIT</strong> — Huge advantage, any RFS move is guaranteed</li>
            <li><strong>Goes to RFS</strong> — Your best stance with 8-frame CH launcher</li>
            <li><strong>Jails on block</strong> — They can't duck the second hit</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Second Hit is High">
          While d+3,4 jails on block (they can't duck if they blocked the first hit), they CAN 
          duck if they <strong>got hit</strong> by the first hit and guess correctly. Advanced 
          players will sometimes duck the second hit to launch you. Solution: occasionally stop 
          at d+3 and use RFS df+4 instead.
        </TipBox>

        <p>
          After d+3,4 connects (hit or block), you're in RFS with huge plus frames. Your follow-ups:
        </p>

        <ul>
          <li><code>RFS f+4,4</code> — 8-frame CH launcher, catches them pressing</li>
          <li><code>RFS 4,3</code> — Safe mid, wall splats on CH</li>
          <li><code>RFS d+4,3,4</code> — Hell sweep (power low in Heat)</li>
          <li><code>RFS df+4</code> — Plus mid (+1 block, +8 hit)</li>
          <li><code>RFS 2</code> — Reset to RFF for more pressure</li>
        </ul>
      </Section>

      <Section title="df+4 — The Homing Mid">
        <MoveCard character="hwoarang"
          move={{
            input: 'df+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i16-17',
            onBlock: '-8 to -7',
            onHit: '+8 to +9',
            onCH: '+18a (knockdown)',
            tags: ['Mid', 'Homing', 'Safe', 'RFF.Transition', 'CH Knockdown'],
            description: 'Your homing mid. Tracks sidesteps, safe, goes to RFF, CH knockdown at wall.',
          }}
          showVideo
        />

        <p>
          Hwoarang struggles with linear offense — many moves can be sidestepped. df+4 is your 
          answer. It's a <span className="highlight">homing move</span> that tracks both directions, 
          is safe on block, and transitions to RFF.
        </p>

        <KeyConcept title="When to Use df+4" icon="🎯">
          <ul>
            <li><strong>Opponent sidestepping</strong> — Homing catches all movement</li>
            <li><strong>After df+1</strong> — If they step df+1, df+4 catches them</li>
            <li><strong>At round start</strong> — Catches step-happy opponents</li>
            <li><strong>Wall pressure</strong> — CH knockdown wall splats</li>
          </ul>
        </KeyConcept>

        <p>
          On hit, you're +8 in RFF. Follow up with RFF 2,4~f to continue into RFS pressure.
        </p>
      </Section>

      <Section title="db+4 — The Counter-Hit Low">
        <MoveCard character="hwoarang"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '14',
            startup: 'i16',
            onBlock: '-12',
            onHit: '-8',
            onCH: '-1',
            tags: ['Low', 'CH Mixup', 'RFS.Transition'],
            description: 'Low poke with deadly CH mixup. Hold forward after to enter RFS at +3 on CH.',
          }}
          showVideo
        />

        <p>
          db+4 is your <span className="highlight">counter-hit fishing low</span>. On normal hit, 
          you're minus. But if you hold forward (<code>db+4~f</code>), you transition to RFS. 
          On counter-hit, you're +3 in RFS — and your RFS f+4,4 is 8 frames.
        </p>

        <KeyConcept title="The db+4 Trap" icon="🪤">
          <ol>
            <li>Do db+4~f — You're now in RFS</li>
            <li>On CH, you're +3 — RFS f+4,4 (8 frames) beats everything</li>
            <li>If they mash, they eat full combo from CH RFS f+4,4</li>
            <li>If they block, you can loop pressure</li>
          </ol>
        </KeyConcept>

        <MoveCard character="hwoarang"
          move={{
            input: 'db+4,4',
            hitLevel: ['l', 'h'],
            damage: '14, 21',
            startup: 'i16',
            onBlock: '-1 to +1',
            onHit: '+24a to +26a',
            tags: ['Low', 'High', 'CH Combo'],
            description: 'Full string. Second hit only combos on CH but deals huge damage.',
          }}
          showVideo
        />

        <p>
          The full db+4,4 string is incredible on counter-hit — you get a guaranteed follow-up 
          for massive damage. The second hit is HIGH, so don't throw it out randomly.
        </p>

        <TipBox variant="tip" title="db+4 Pressure Pattern">
          <ol>
            <li>Establish d+3,4 pressure</li>
            <li>When they start respecting, throw in db+4~f</li>
            <li>If they mash after (because d+3,4 conditioned them), CH → RFS f+4,4 → full combo</li>
          </ol>
        </TipBox>
      </Section>

      <Section title="db+3 — The High Crush Low">
        <MoveCard character="hwoarang"
          move={{
            input: 'db+3',
            hitLevel: ['l'],
            damage: '12',
            startup: 'i19',
            onBlock: '-13',
            onHit: '-1',
            onCH: '+17g',
            tags: ['Low', 'High Crush', 'Safe-ish'],
            description: 'High crushing low. Goes under jabs and highs. -13 on block (most can\'t launch).',
          }}
          showVideo
        />

        <p>
          db+3 is your <span className="highlight">high crush low</span>. It ducks under jabs and 
          high attacks. Use it when you predict they'll jab or when you need a low that beats 
          their high pressure.
        </p>

        <p>
          At -13 on block, most characters can't launch punish (only characters with i13 launchers 
          like Kazuya or Bryan). It's relatively safe for a chunky low.
        </p>
      </Section>

      <Section title="f+2 — The Safe Mid">
        <MoveCard character="hwoarang"
          move={{
            input: 'f+2',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i16',
            onBlock: '-2',
            onHit: '+9',
            tags: ['Mid', 'Safe', 'RFF.Transition', 'Plus on Hit'],
            description: 'Safe mid poke that goes to RFF. +9 on hit lets you continue pressure.',
          }}
          showVideo
        />

        <p>
          f+2 is your safe mid from LFF. At -2 on block, opponents can't really punish it. On hit, 
          you're +9 in RFF. This is great for checking opponents who try to duck d+3,4.
        </p>

        <KeyConcept title="f+2 Pressure" icon="📊">
          <ul>
            <li><strong>On block (-2)</strong>: Basically neutral. You're in RFF, can check with RFF df+4</li>
            <li><strong>On hit (+9)</strong>: RFF 2,4~f → RFS is uninterruptible at +4</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Mids from Stances">
        <p>
          Your stances have crucial mids that complete your pressure:
        </p>

        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.df+4',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i17-19',
            onBlock: '+1',
            onHit: '+8c',
            onCH: '+26a (launcher)',
            tags: ['Mid', 'Plus on Block', 'CH Launcher', 'RFS.Only'],
            description: 'Plus mid from RFS. +1 on BLOCK is insane. CH launches for full combo.',
          }}
          showVideo
        />

        <p>
          RFS df+4 is <span className="highlight">plus on block</span>. When you're in RFS and they're 
          scared to press because of RFS f+4,4, throw out df+4. You're +1 and can continue. On CH, 
          you get a full combo.
        </p>

        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.4,3',
            hitLevel: ['m', 'm'],
            damage: '17, 21',
            startup: 'i14',
            onBlock: '+4',
            onHit: '+25a (tornado)',
            onCH: '+25a (tornado)',
            tags: ['Mid', 'Mid', 'Plus on Block', 'Safe', 'Wall Splat', 'RFS.Only'],
            description: 'The mid option in your 50/50. Safe, +4 on block, wall splats, tornado on hit.',
          }}
          showVideo
        />

        <p>
          RFS 4,3 is your <span className="highlight">safe mid mixup option</span>. When they duck 
          expecting hell sweep, this launches/wall splats. At +4 on block, you transition to LFS 
          with advantage. This move is incredible.
        </p>

        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.uf+3',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i24-27',
            onBlock: '-7',
            onHit: '+19d',
            tags: ['Mid', 'Safe', 'Ground Hit', 'RFS.Only'],
            description: 'Safe mid from RFS. Slower but hits grounded. Good for when they respect.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="RFS uf+3 vs RFS 4,3">
          Both are safe mids from RFS, but they have different purposes:
          <ul style={{ marginTop: '8px' }}>
            <li><strong>RFS 4,3</strong>: Faster (i14), +4 on block, your go-to</li>
            <li><strong>RFS uf+3</strong>: Slower (i24+), but hits grounded, good oki</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="The Core Mixup">
        <KeyConcept title="The d+3,4 → RFS 50/50" icon="🎲">
          <p>This is Hwoarang's bread and butter. After d+3,4 puts you in RFS:</p>
          <div style={{ marginTop: '16px', display: 'grid', gap: '12px' }}>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
              <strong style={{ color: 'var(--danger)' }}>RFS d+4,3,4 (Hell Sweep)</strong>
              <p style={{ marginTop: '4px', color: 'var(--text-secondary)' }}>
                Low option. Knockdown. Full combo in Heat. They must duck to block.
              </p>
            </div>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
              <strong style={{ color: 'var(--accent)' }}>RFS 4,3 (Safe Mid)</strong>
              <p style={{ marginTop: '4px', color: 'var(--text-secondary)' }}>
                Mid option. +4 on block, wall splats on CH. Catches duckers.
              </p>
            </div>
          </div>
          <p style={{ marginTop: '16px' }}>
            They have to guess. Wrong guess = big damage. This is why Hwoarang is scary.
          </p>
        </KeyConcept>
      </Section>

      <Collapsible title="Frame Data Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Type</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Hit</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>d+3,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Low, High</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8~+10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+14~+16</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+4~f</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Low</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3 (RFS)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Low</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i19</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-1</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-2</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+9</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RFS df+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8c</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RFS 4,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid, Mid</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i14</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+25a (T!)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
