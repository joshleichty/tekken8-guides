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
      title="Core Mids & Lows"
      intro="Now we'll cover Zafina's essential mid and low tools. These moves form the backbone of your neutral game and set up your stance pressure."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Scarecrow Stance"
    >
      <Section title="d+3 — The Essential Low">
        <MoveCard character="zafina"
          move={{
            input: 'd+3',
            hitLevel: ['l'],
            damage: '14',
            startup: 'i22',
            onBlock: '-15 / -13 (MNT)',
            onHit: '+5c / +7c (MNT)',
            onCH: '+24d (Launch)',
            tags: ['Low', 'CH Launcher', 'MNT Transition', 'Evasive'],
            description: 'Signature low poke. Evades highs and some mids. CH launches. Hold D for Mantis.',
          }}
          showVideo
        />

        <p>
          d+3 is one of Zafina's <span className="highlight">signature moves</span>. It's a low poke 
          with natural evasion that counter-hit launches, and it can transition to Mantis stance.
        </p>

        <KeyConcept title="d+3 Options" icon="🔄">
          <ul>
            <li><strong>d+3 (no hold)</strong> — -15 on block, +5c on hit, stays neutral</li>
            <li><strong>d+3~D (hold down)</strong> — -13 on block, +7c on hit, enters Mantis</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Always go into Mantis on block — it's -13 vs -15, and you can block in Mantis.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Counter-Hit Combo">
          On CH, you get a full combo. Without MNT transition: <code>ws+3 → SCR 4 T!</code>. 
          With MNT transition: <code>MNT 4,3 T!</code>. We'll cover these in the combo chapter.
        </TipBox>

        <TipBox variant="warning" title="Reactable at High Level">
          At 22 frames, very good players can react to d+3. Don't spam it against players 
          who are consistently blocking it. Mix up your timing and use it sparingly.
        </TipBox>
      </Section>

      <Section title="db+3 — Quick Low into SCR">
        <MoveCard character="zafina"
          move={{
            input: 'db+3',
            hitLevel: ['l'],
            damage: '13',
            startup: 'i18',
            onBlock: '-11 / -8 (SCR)',
            onHit: '+0 / +3 (SCR)',
            tags: ['Low', 'SCR Transition', 'Fast'],
            description: 'Quick low that can transition to Scarecrow. Safer than d+3 on block.',
          }}
          showVideo
        />

        <p>
          db+3 is a <span className="highlight">faster low poke</span> at 18 frames. It's less 
          rewarding than d+3 but safer and faster.
        </p>

        <KeyConcept title="db+3 vs d+3" icon="⚖️">
          <ul>
            <li><strong>db+3</strong> — Faster (i18), safer (-11 no trans), goes to SCR</li>
            <li><strong>d+3</strong> — Slower (i22), riskier (-15), CH launches, goes to MNT</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            db+3 for pressure, d+3 for CH fishing. Both are essential.
          </p>
        </KeyConcept>
      </Section>

      <Section title="db+4 — Long Range Low">
        <MoveCard character="zafina"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '14',
            startup: 'i21',
            onBlock: '-12 / -13 (MNT)',
            onHit: '-3 / -4 (MNT)',
            onCH: '+3 (Launch)',
            tags: ['Low', 'Long Range', 'High Crush', 'MNT Transition'],
            description: 'Long range low with high crush. Can go into Mantis. Has a mid extension.',
          }}
          showVideo
        />

        <p>
          db+4 is a <span className="highlight">long range low</span> with excellent high crush. 
          It also has an extension that catches punish attempts.
        </p>

        <KeyConcept title="db+4 Extensions" icon="📋">
          <ul>
            <li><strong>db+4</strong> alone — -12 on block</li>
            <li><strong>db+4,2</strong> — Mid extension, CH launches, -13 on block</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            If opponent tries to punish db+4, the db+4,2 extension catches them. Mix it up.
          </p>
        </KeyConcept>
      </Section>

      <Section title="f,f+3 — The Pressure Mid">
        <MoveCard character="zafina"
          videoId="f,F+3"
          move={{
            input: 'f,f+3',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i20',
            onBlock: '+4 (SCR)',
            onHit: '+9c (SCR)',
            onCH: '+14c (SCR 2,1 guaranteed)',
            tags: ['Mid', 'Plus on Block', 'SCR Transition', 'CH Combo'],
            description: 'Key pressure tool. +4 on block in Scarecrow. CH gives guaranteed SCR 2,1.',
          }}
          showVideo
        />

        <p>
          f,f+3 is one of Zafina's <span className="highlight">most important moves</span>. It's a 
          mid that's plus on block and transitions to Scarecrow — prime mixup territory.
        </p>

        <KeyConcept title="f,f+3 Properties" icon="⭐">
          <ul>
            <li><strong>On block</strong> — +4 in Scarecrow. Opponent must respect.</li>
            <li><strong>On hit</strong> — +9c in Scarecrow. Your mixup is strong.</li>
            <li><strong>On CH</strong> — +14c. Guaranteed SCR 2,1 (heat engager, 52 damage)!</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="CH Confirm">
          When you see the counter-hit spark and hear the sound, immediately do SCR 2,1. 
          This is one of your best heat engages and does massive damage.
        </TipBox>

        <Collapsible title="f,f+3 Extensions" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <ul>
              <li><strong>f,f+3~B (hold back)</strong> — Same frames but stays neutral, no SCR</li>
              <li><strong>f,f+3,1</strong> — -16 on block but catches button presses</li>
              <li><strong>f,f+3,1+2</strong> — Wall splats, good for pressure, -16</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="f,f+4 — The Homing Mid">
        <MoveCard character="zafina"
          videoId="f,F+4"
          move={{
            input: 'f,f+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i17',
            onBlock: '-8',
            onHit: '+6',
            tags: ['Mid', 'Homing', 'Safe', 'Wall Splat', 'Long Range'],
            description: 'One of the best homing mids in the game. Long range, safe, wall splats.',
          }}
          showVideo
        />

        <p>
          f,f+4 is Zafina's <span className="highlight">best homing move</span>. It has incredible 
          range, tracks both sides, wall splats, and is safe at -8.
        </p>

        <KeyConcept title="When to Use f,f+4" icon="🎯">
          <ul>
            <li><strong>Catching sidesteps</strong> — Tracks both directions</li>
            <li><strong>Keep-out</strong> — Excellent range for mid-range control</li>
            <li><strong>Wall splat fishing</strong> — Near wall, this is deadly</li>
            <li><strong>Round ender</strong> — Great for closing out rounds</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Can't Float Anymore">
          In Tekken 7, you could float Zafina if she whiffed f,f+4. In Tekken 8, they 
          removed this weakness. It's even better now.
        </TipBox>
      </Section>

      <Section title="f,f+3+4 — The Starfish">
        <MoveCard character="zafina"
          videoId="f,F+3+4"
          move={{
            input: 'f,f+3+4',
            hitLevel: ['m', 'm'],
            damage: '10, 21',
            startup: 'i21',
            onBlock: '-11 / -12 (MNT)',
            onHit: '+15a (+6)',
            tags: ['Mid', 'Mid', 'Hits Grounded', 'Long Range', 'MNT Transition'],
            description: 'Iconic two-hit mid. Second hit tracks well and hits grounded. Great oki tool.',
          }}
          showVideo
        />

        <p>
          f,f+3+4 (nicknamed "the starfish") is a <span className="highlight">fantastic approach tool</span>. 
          The second hit has excellent tracking, hits grounded opponents, and wall splats.
        </p>

        <KeyConcept title="f,f+3+4 Uses" icon="⭐">
          <ul>
            <li><strong>Oki</strong> — Second hit catches grounded opponents</li>
            <li><strong>Approach</strong> — Good range and tracking</li>
            <li><strong>Wall carry</strong> — Can be used in combos</li>
            <li><strong>MNT entry</strong> — Hold D to enter Mantis (becomes -12)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Not Truly Safe">
          At -11, it's technically punishable by 10f moves. However, the pushback makes 
          it difficult. If they try to punish, you can go into Mantis and block.
        </TipBox>
      </Section>

      <Section title="WR1+2 — Plus Frame Running Move">
        <MoveCard character="zafina"
          videoId="f,f,F+1+2"
          move={{
            input: 'WR1+2 (f,f,F+1+2)',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i20',
            onBlock: '+6 (TRT)',
            onHit: '+32a (TRT df+1 guaranteed)',
            tags: ['High', 'Plus on Block', 'TRT Transition', 'Homing'],
            description: 'Running high that goes into Tarantula. Now homing. +6 on block, df+1 guaranteed on hit.',
          }}
          showVideo
        />

        <p>
          WR1+2 (while running 1+2) is a <span className="highlight">crucial approach tool</span> 
          that was buffed to be homing. It's plus on block and guarantees TRT df+1 on hit.
        </p>

        <KeyConcept title="WR1+2 Properties" icon="🏃">
          <ul>
            <li><strong>On block</strong> — +6 in Tarantula. Opponent must respect.</li>
            <li><strong>On hit</strong> — TRT df+1 guaranteed for 44 damage!</li>
            <li><strong>Homing</strong> — Can't sidestep it anymore</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="It's a High">
          WR1+2 is a high. Good players will duck it. Mix with WR3 (mid) to keep them honest.
        </TipBox>
      </Section>

      <Section title="WR3 — Running Mid Alternative">
        <MoveCard character="zafina"
          videoId="f,f,F+3"
          move={{
            input: 'WR3 (f,f,F+3)',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i23',
            onBlock: '+7 (SCR)',
            onHit: '+19a (+9)',
            tags: ['Mid', 'Plus on Block', 'SCR Transition', 'High Damage'],
            description: 'Running mid alternative to WR1+2. Plus on block in Scarecrow.',
          }}
          showVideo
        />

        <p>
          WR3 is your <span className="highlight">running mid option</span>. Use it to catch 
          opponents who duck WR1+2.
        </p>

        <KeyConcept title="WR1+2 vs WR3" icon="⚖️">
          <ul>
            <li><strong>WR1+2</strong> — High, +6 TRT, df+1 guaranteed on hit</li>
            <li><strong>WR3</strong> — Mid, +7 SCR, great damage on hit</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Mix these two. If they duck, WR3 hits. If they stand, WR1+2 gives you Tarantula pressure.
          </p>
        </KeyConcept>
      </Section>

      <Section title="df+2 — Your Launcher">
        <MoveCard character="zafina"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i16',
            onBlock: '-12',
            onHit: '+32a (Launch)',
            tags: ['Mid', 'Launcher', 'High Crush', 'Launches Crouchers'],
            description: 'Main launcher. 16f, high crushes, launches crouching opponents. -12 on block.',
          }}
          showVideo
        />

        <p>
          df+2 is Zafina's <span className="highlight">primary launcher</span>. It high crushes, 
          launches crouching opponents, and has deceptively good range.
        </p>

        <KeyConcept title="When to Use df+2" icon="🚀">
          <ul>
            <li><strong>Whiff punishment</strong> — Excellent range for catching whiffs</li>
            <li><strong>Against ducks</strong> — Launches crouching opponents</li>
            <li><strong>Reading highs</strong> — High crushes during startup</li>
            <li><strong>16f punish</strong> — Your standing launcher for punishment</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="-12 Risk">
          df+2 is -12 on block. Don't throw it out randomly or you'll eat punishment. 
          Use it when you expect to land it.
        </TipBox>
      </Section>

      <Section title="Key Moves Summary">
        <KeyConcept title="Your Essential Toolkit" icon="🧰">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--accent)' }}>Mids</p>
              <ul>
                <li><strong>df+1</strong> — Main mid poke</li>
                <li><strong>f,f+3</strong> — Plus on block, CH combo</li>
                <li><strong>f,f+4</strong> — Homing, safe, wall splat</li>
                <li><strong>df+2</strong> — Launcher</li>
              </ul>
            </div>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--accent)' }}>Lows</p>
              <ul>
                <li><strong>d+3</strong> — CH launcher, MNT entry</li>
                <li><strong>db+3</strong> — Fast low, SCR entry</li>
                <li><strong>db+4</strong> — Long range, high crush</li>
              </ul>
            </div>
          </div>
        </KeyConcept>

        <TipBox variant="tip" title="The Core Mix">
          Your neutral game is: poke with df+1 and lows, use f,f+3 for plus frames and CH fishing, 
          use f,f+4 to catch stepping, and threaten with df+2 when they respect too much.
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
                <td style={{ padding: '8px' }}><code>d+3~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i22</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13 (MNT)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+7c (MNT)</td>
                <td style={{ padding: '8px' }}>CH launches, evasive</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+3~B</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-11</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+0</td>
                <td style={{ padding: '8px' }}>Fast low, SCR entry</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i21</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-3</td>
                <td style={{ padding: '8px' }}>Long range, high crush</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i20</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4 (SCR)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+9c (SCR)</td>
                <td style={{ padding: '8px' }}>Key pressure mid</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+6</td>
                <td style={{ padding: '8px' }}>Homing, wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Launch</td>
                <td style={{ padding: '8px' }}>Main launcher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>WR1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i20</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6 (TRT)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+32a (TRT)</td>
                <td style={{ padding: '8px' }}>Homing high, TRT entry</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
