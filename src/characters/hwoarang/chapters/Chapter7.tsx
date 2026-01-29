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
      title="Right Flamingo Mastery"
      intro="Right Flamingo Stance (RFS) is where Hwoarang becomes terrifying. The 8-frame counter-hit launcher, the hell sweep, the plus-frame mids — this is your pressure engine."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Learn Just Frame Skyrocket"
    >
      <Section title="Why RFS is Everything">
        <p>
          You've been entering RFS throughout this guide — from d+3,4, from 1,2,4, from RFF 2,4~f. 
          Now it's time to understand <strong>why</strong> this stance is so important and how to 
          maximize your pressure from it.
        </p>

        <KeyConcept title="RFS Is Your Destination" icon="🎯">
          <p>
            Think of Hwoarang's gameplan as a map. LFF is your base. RFF is a waypoint. 
            But <strong>RFS is where you want to be</strong>. Every flowchart, every string, 
            every pressure sequence should eventually lead to RFS.
          </p>
          <p style={{ marginTop: '12px' }}>
            Why? Because RFS has:
          </p>
          <ul style={{ marginTop: '8px' }}>
            <li>An 8-frame counter-hit launcher</li>
            <li>A full hell sweep mixup</li>
            <li>Plus-frame mids</li>
            <li>Safe options that loop back into pressure</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="RFS f+4,4 — The 8-Frame Monster">
        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.f+4',
            hitLevel: ['h', 'h'],
            damage: '8, 10',
            startup: 'i8',
            onBlock: '+0',
            onHit: '+5',
            onCH: '+6',
            tags: ['High', 'High', '8-Frame', 'Jails', 'RFS.Only'],
            description: 'First two hits of RFS f+4. Lightning fast at 8 frames. Jails on block.',
          }}
          showVideo
        />

        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.f+4,4',
            hitLevel: ['h', 'h', 'h'],
            damage: '8, 10, 9',
            startup: 'i8',
            onBlock: '-6',
            onHit: '+75a (Tornado)',
            onCH: '+75a (Tornado)',
            tags: ['High', 'High', 'High', 'CH Launcher', 'Tornado', 'RFS.Only'],
            description: 'THE move. 8-frame CH launcher. Full Tornado combo on counter-hit.',
          }}
          showVideo
        />

        <p>
          <span className="highlight">RFS f+4,4 is an 8-frame counter-hit launcher.</span> This 
          is extraordinarily rare in Tekken. Most counter-hit launchers are 12-16 frames. Having 
          one at 8 frames means you can challenge almost anything.
        </p>

        <KeyConcept title="Why 8 Frames Matters" icon="⚡">
          <p>
            When you enter RFS at +3 (from d+3,4 on block), your RFS f+4,4 is effectively 
            <strong>5 frames</strong> from your opponent's perspective. They CANNOT jab you.
          </p>
          <ul style={{ marginTop: '12px' }}>
            <li>d+3,4 on block = +8 to +10 → f+4,4 is uninterruptible</li>
            <li>1,2,4 on block = +3 → f+4,4 beats 10f jabs</li>
            <li>RFF 2,4~f on block = +4 → f+4,4 beats everything</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="All Three Hits Are High">
          RFS f+4,4 can be ducked. If your opponent ducks the first hit, they launch you. 
          This is the risk of the move. But if they ever press a button instead of ducking, 
          they die.
        </TipBox>

        <p>
          <strong>The mind game:</strong> They have to choose between ducking (beats f+4,4) or 
          pressing (loses to f+4,4). If they duck, your mids hit them. If they press, they die. 
          This is Hwoarang's core pressure.
        </p>
      </Section>

      <Section title="RFS d+4,3,4 — Hell Sweep">
        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.d+4,3',
            hitLevel: ['l', 'h'],
            damage: '15, 12',
            startup: 'i20-21',
            onBlock: '-9',
            onHit: '-1 / +20a on CH',
            tags: ['Low', 'High', 'RFS.Only'],
            description: 'First two hits of hell sweep. Combos on CH.',
          }}
          showVideo
        />

        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.d+4,3,4',
            hitLevel: ['l', 'h', 'h'],
            damage: '15, 12, 30',
            startup: 'i20-21',
            onBlock: '-9',
            onHit: '+28a (+2 non-heat) / +10a in Heat',
            tags: ['Low', 'High', 'High', 'Power Low', 'Heat Enhanced', 'RFS.Only'],
            description: 'The hell sweep. Knockdown. FULL COMBO in Heat!',
          }}
          showVideo
        />

        <p>
          RFS d+4,3,4 is your <span className="highlight">power low from RFS</span>. Without Heat, 
          the last hit doesn't combo on normal hit (only on CH). But <strong>in Heat, all three 
          hits are guaranteed</strong>, and you get a full knockdown with follow-up.
        </p>

        <KeyConcept title="The Hell Sweep 50/50" icon="🎲">
          <div style={{ display: 'grid', gap: '12px', marginTop: '12px' }}>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
              <strong style={{ color: 'var(--danger)' }}>They Stand Block</strong>
              <p style={{ marginTop: '4px', color: 'var(--text-secondary)' }}>
                Hell sweep hits. In Heat, full combo. Without Heat, knockdown.
              </p>
            </div>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
              <strong style={{ color: 'var(--accent)' }}>They Duck</strong>
              <p style={{ marginTop: '4px', color: 'var(--text-secondary)' }}>
                Use RFS 4,3 (mid-mid). +4 on block, wall splats on CH.
              </p>
            </div>
          </div>
        </KeyConcept>

        <TipBox variant="tip" title="Counter-Hit Confirm">
          Without Heat, RFS d+4,3 combos on counter-hit into the third hit. You have time to 
          confirm — if you see the CH flash, complete the string. If not, stop at d+4,3 and 
          you're only -9.
        </TipBox>
      </Section>

      <Section title="RFS 4,3 — The Safe Mid">
        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.4,3',
            hitLevel: ['m', 'm'],
            damage: '17, 21',
            startup: 'i14',
            onBlock: '+4',
            onHit: '+25a (Tornado)',
            onCH: '+25a (Tornado)',
            tags: ['Mid', 'Mid', 'Plus on Block', 'Safe', 'Wall Splat', 'Tornado', 'RFS.Only'],
            description: 'Your mid mixup option. +4 on block (!), wall splats, Tornado on hit.',
          }}
          showVideo
        />

        <p>
          RFS 4,3 is <span className="highlight">one of the best moves in Hwoarang's kit</span>. 
          It's a mid-mid that's +4 on block, wall splats on hit and CH, and gives Tornado for 
          combo extension.
        </p>

        <KeyConcept title="Why RFS 4,3 is Broken" icon="💀">
          <ul>
            <li><strong>+4 on block</strong> — You're PLUS after they block your mid mixup</li>
            <li><strong>Transitions to LFS</strong> — Loop back into pressure</li>
            <li><strong>Wall splats</strong> — Near wall, this leads to huge damage</li>
            <li><strong>Low crushes</strong> — Beats d+1 attempts</li>
          </ul>
        </KeyConcept>

        <p>
          After RFS 4,3 is blocked, you're in LFS at +4. From here:
        </p>

        <ul>
          <li><code>LFS 1</code> — Quick check (+5 on block)</li>
          <li><code>LFS f+3</code> — Heat engager, stays in LFS (+4 on block)</li>
          <li><code>LFS d+3,4</code> — Go back to RFS!</li>
        </ul>
      </Section>

      <Section title="RFS df+4 — Plus Mid">
        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.df+4',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i17-19',
            onBlock: '+1',
            onHit: '+8c',
            onCH: '+26a (launcher)',
            tags: ['Mid', 'Plus on Block', 'CH Launcher', 'Forces Crouch', 'RFS.Only'],
            description: '+1 on BLOCK. Forces crouch on hit. Counter-hit launches.',
          }}
          showVideo
        />

        <p>
          RFS df+4 is your <span className="highlight">plus-frame mid</span>. When you want to 
          keep pressure without committing to the 50/50, this is your move. At +1 on block, 
          you can continue pressure. On hit, they're crouching at -8 — you can mixup.
        </p>

        <TipBox variant="tip" title="RFS df+4 → df+4 Loop">
          After RFS df+4 is blocked (+1), you can do another RFS df+4. The animation looks 
          very plus, and many opponents think they need to keep blocking. Loop this until 
          they challenge, then use RFS f+4,4 to blow them up.
        </TipBox>
      </Section>

      <Section title="RFS 2 — The Reset">
        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.2',
            hitLevel: ['h'],
            damage: '6',
            startup: 'i13',
            onBlock: '+5',
            onHit: '+7',
            tags: ['High', 'Plus on Block', 'RFF.Transition', 'RFS.Only'],
            description: 'Jab that goes to RFF. +5 on block lets you continue.',
          }}
          showVideo
        />

        <p>
          RFS 2 is your <span className="highlight">reset button</span>. It transitions to RFF 
          at +5 on block, letting you loop back into RFF 2,4~f → RFS. This is how you maintain 
          pressure indefinitely.
        </p>

        <KeyConcept title="The Infinite Pressure Loop" icon="🔄">
          <div style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '16px', borderRadius: '8px', marginTop: '12px' }}>
            <p>Enter RFS (d+3,4, 1,2,4, etc.)</p>
            <p>RFS f+4,4 (check) / RFS df+4 (plus mid)</p>
            <p>RFS 2 → RFF (+5)</p>
            <p>RFF 2,4~f → RFS (+4)</p>
            <p>Repeat...</p>
          </div>
        </KeyConcept>
      </Section>

      <Section title="RFS b+3 — Heat Engager">
        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.b+3',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i16-17',
            onBlock: '-9',
            onHit: '+7',
            tags: ['Mid', 'Heat Engager', 'Safe', 'RFS.Only'],
            description: 'Heat engager from RFS. Safe at -9. Good range.',
          }}
          showVideo
        />

        <p>
          RFS b+3 is your <span className="highlight">safe heat engager from RFS</span>. When 
          you're in RFS and want to activate Heat, this is your go-to. At -9, it's safe against 
          most of the cast.
        </p>
      </Section>

      <Section title="RFS 3~4 — Flying Eagle">
        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.3~4',
            hitLevel: ['m', 'm'],
            damage: '11, 21',
            startup: 'i16',
            onBlock: '-3',
            onHit: '+26a (+16)',
            tags: ['Mid', 'Mid', 'Safe', 'Balcony Break', 'RFS.Only'],
            description: 'Flying Eagle from RFS. Safe mid-mid. Key combo filler.',
          }}
          showVideo
        />

        <p>
          RFS 3~4 (slide from 3 to 4 quickly) is a safe mid-mid. You've been using it in combos, 
          but it's also good in pressure. At -3, it's safe, and it low crushes.
        </p>

        <TipBox variant="tip" title="Power Up Version">
          If you input 4 on the exact frame after 3, you get a powered-up version that does 
          more damage (+1 on block, 37 damage on hit). This is the "perfect" Flying Eagle.
        </TipBox>
      </Section>

      <Section title="Complete RFS Pressure">
        <KeyConcept title="RFS Decision Tree" icon="🌳">
          <p>When you're in RFS with advantage, here's your decision tree:</p>
          
          <div style={{ marginTop: '16px', display: 'grid', gap: '8px' }}>
            <div style={{ padding: '8px 12px', background: 'var(--background-secondary)', borderRadius: '4px' }}>
              <strong>Opponent mashing?</strong> → RFS f+4,4 (CH launcher)
            </div>
            <div style={{ padding: '8px 12px', background: 'var(--background-secondary)', borderRadius: '4px' }}>
              <strong>Opponent ducking?</strong> → RFS 4,3 (mid, +4 on block) or RFS df+4 (+1)
            </div>
            <div style={{ padding: '8px 12px', background: 'var(--background-secondary)', borderRadius: '4px' }}>
              <strong>Opponent stand blocking?</strong> → RFS d+4,3,4 (hell sweep)
            </div>
            <div style={{ padding: '8px 12px', background: 'var(--background-secondary)', borderRadius: '4px' }}>
              <strong>Want to reset?</strong> → RFS 2 → RFF → loop
            </div>
            <div style={{ padding: '8px 12px', background: 'var(--background-secondary)', borderRadius: '4px' }}>
              <strong>Want Heat?</strong> → RFS b+3 (safe engager)
            </div>
          </div>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Be Predictable">
          If you always do the same option, they'll adapt. Mix up your RFS pressure. Sometimes 
          f+4,4, sometimes df+4, sometimes hell sweep, sometimes just RFS 2 to reset. The threat 
          of each option makes the others stronger.
        </TipBox>
      </Section>

      <Collapsible title="RFS Move Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Height</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Use</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>RFS f+4,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>h,h,h</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i8</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ padding: '8px' }}>CH launcher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RFS 4,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m,m</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i14</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                <td style={{ padding: '8px' }}>Mid mixup, wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RFS df+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ padding: '8px' }}>Plus mid, CH launch</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RFS d+4,3,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>l,h,h</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i20</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Hell sweep</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RFS 2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>h</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+5</td>
                <td style={{ padding: '8px' }}>Reset to RFF</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RFS b+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Heat engager</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RFS 3~4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m,m</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ padding: '8px' }}>Safe mid, combo filler</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RFS uf+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i24</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-7</td>
                <td style={{ padding: '8px' }}>Safe mid, ground hit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
