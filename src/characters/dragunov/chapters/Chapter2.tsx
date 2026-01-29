import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="First Blood"
      intro="Before you can hunt, you need weapons. These are Dragunov's basic tools — the jabs and pokes that let you check your opponent and control the pace of the match."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Learn to Close Distance"
    >
      <Section title="The Jab (1)">
        <MoveCard character="dragunov"
          move={{
            input: '1',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '+1',
            onHit: '+8',
            tags: ['High', 'Plus on Block'],
            description: 'One of the best jabs in Tekken. Plus on block and sets up your entire offense.',
          }}
          showVideo
        />

        <p>
          Dragunov's jab is <span className="highlight">plus on block</span>. This is huge. 
          When they block your jab, you're at +1, meaning your next move comes out before theirs.
        </p>

        <KeyConcept title="After Jab on Block (+1)" icon="🎯">
          <ul>
            <li><strong>Jab again</strong> — Interrupt their fastest moves</li>
            <li><strong>df+1</strong> — Mid check, safe at -2</li>
            <li><strong>d+2</strong> — Low poke if they're frozen</li>
            <li><strong>Throw</strong> — If they're respecting</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Jab into Throw">
          One of Dragunov's dirtiest tricks: jab → throw. It's simple, it's stupid, 
          and it works. Your opponent blocks the jab, expects pressure, and eats a throw. 
          Try it.
        </TipBox>
      </Section>

      <Section title="2,1 — Jab String with Sneak Access">
        <MoveCard character="dragunov"
          videoId="2,1"
          move={{
            input: '2,1',
            hitLevel: ['h', 'h'],
            damage: '10, 10',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+8',
            tags: ['High', 'High', '10f Punish', 'SNK Transition'],
            description: 'Your main jab punish. On hit, hold df to enter Sneak for mixups.',
          }}
          showVideo
        />

        <p>
          2,1 is Dragunov's <span className="highlight">standard 10-frame punisher</span>. 
          Unlike some characters who use 1,2, Dragunov reverses it because 2,1 gives access 
          to Sneak stance by holding df.
        </p>

        <KeyConcept title="2,1 on Hit (+8)" icon="🔄">
          <ul>
            <li><strong>Hold df → SNK mixup</strong> — Go into Sneak for plus frame mix</li>
            <li><strong>Continue pressure</strong> — +8 means you can do almost anything</li>
            <li><strong>d+2 is guaranteed</strong> — Uninterruptible low at +8</li>
          </ul>
        </KeyConcept>

        <Collapsible title="2,1 Extensions" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <p style={{ marginBottom: '12px' }}>2,1 has delayable extensions:</p>
            <ul>
              <li><code>2,1,3</code> — High ender, wall splats, -9 on block</li>
              <li><code>2,1,4</code> — Low ender, +3 on hit, -12 on block</li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              Use sparingly. The extensions are high and low, both punishable. 
              Main value is from base 2,1 into Sneak.
            </p>
          </div>
        </Collapsible>
      </Section>

      <Section title="1,2,1 — Counter-Hit String">
        <MoveCard character="dragunov"
          videoId="1,2,1"
          move={{
            input: '1,2,1',
            hitLevel: ['h', 'm', 'm'],
            damage: '5, 8, 20',
            startup: 'i10',
            onBlock: '-14',
            onHit: '+15g (KND)',
            tags: ['High', 'Mid', 'Mid', 'Heat Engager', 'CH Confirmable'],
            description: 'Heat engager string. If 1,2 counter-hits, the third hit is guaranteed. Hit-confirmable with practice.',
          }}
          showVideo
        />

        <p>
          1,2,1 is a <span className="highlight">heat engager</span> that becomes a natural combo 
          on counter-hit. The third hit launches them, and you can heat dash for huge damage.
        </p>

        <KeyConcept title="How to Use 1,2,1" icon="⚡">
          <ul>
            <li><strong>Use as interrupt</strong> — When you expect them to press</li>
            <li><strong>Confirm on CH</strong> — With practice, you can see the counter-hit spark and commit to the third hit</li>
            <li><strong>In heat</strong> — Heat dash after 1,2,1 for big damage</li>
            <li><strong>Don't spam</strong> — Third hit is -14, launch punishable</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Third Hit is Risky">
          Only commit to the full 1,2,1 if you confirm the counter-hit or you're in heat 
          and want to gamble. On block, it's -14 — most characters launch you.
        </TipBox>
      </Section>

      <Section title="df+1 — The Mid Check">
        <MoveCard character="dragunov"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i13',
            onBlock: '-2',
            onHit: '+7',
            tags: ['Mid', 'Safe', 'Poke'],
            description: 'Your main mid poke. Safe, decent range, stops people from ducking.',
          }}
          showVideo
        />

        <p>
          df+1 is Dragunov's <span className="highlight">primary mid poke</span>. It's safe at -2, 
          has decent range, and keeps opponents honest. When they try to duck your throws or lows, 
          df+1 hits them.
        </p>

        <KeyConcept title="df+1 Usage" icon="✅">
          <ul>
            <li><strong>After jab (+1)</strong> — df+1 trades favorably with their options</li>
            <li><strong>Neutral check</strong> — Safe way to test if they're pressing</li>
            <li><strong>Stop ducking</strong> — Punishes crouch attempts</li>
          </ul>
        </KeyConcept>

        <Collapsible title="df+1,4 Extension" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <MoveCard character="dragunov"
              videoId="df+1,4"
              move={{
                input: 'df+1,4',
                hitLevel: ['m', 'h'],
                damage: '13, 23',
                startup: 'i13',
                onBlock: '-7',
                onHit: '+22a (KND)',
                onCH: '+58a (Launch!)',
                tags: ['Mid', 'High', 'CH Launcher', 'Delayable'],
                description: 'Extension catches people who press after df+1 block. Counter-hit launches.',
              }}
              showVideo
            />
            <p style={{ marginTop: '12px' }}>
              If your opponent presses buttons after blocking df+1, use df+1,4 to catch them. 
              The second hit is a high that launches on counter-hit. Can be delayed.
            </p>
          </div>
        </Collapsible>
      </Section>

      <Section title="d+2 — The Hatchet Kick">
        <MoveCard character="dragunov"
          move={{
            input: 'd+2',
            hitLevel: ['l'],
            damage: '14',
            startup: 'i18',
            onBlock: '-13',
            onHit: '-1c',
            onCH: '+13g',
            tags: ['Low', 'High Crush', 'Tracking'],
            description: 'Your signature low poke. Incredible tracking, high crushes, forces crouch on hit.',
          }}
          showVideo
        />

        <p>
          d+2 is Dragunov's <span className="highlight">signature low</span>. It tracks incredibly 
          well (catches sidesteps), high crushes, and leaves both players crouching on hit.
        </p>

        <KeyConcept title="d+2 Properties" icon="🦵">
          <ul>
            <li><strong>High crush</strong> — Goes under jabs and high attacks</li>
            <li><strong>Excellent tracking</strong> — Catches sidesteps that avoid WR+2</li>
            <li><strong>Forces crouch</strong> — After hit, you're both in crouch</li>
            <li><strong>CH +13</strong> — Counter-hit gives massive advantage for FC mix</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="d+2 After WR+2">
          WR+2 is linear (can be stepped). d+2 tracks excellently. Mix them. 
          If they try to sidestep your approach, d+2 clips them.
        </TipBox>

        <TipBox variant="warning" title="Don't Overuse">
          d+2 is -13 on block — punishable by ws punishers. It's also only -1 on hit, 
          meaning your turn is basically over. Use it to condition, not spam.
        </TipBox>
      </Section>

      <Section title="b+4 — Mid Kick with Layers">
        <MoveCard character="dragunov"
          move={{
            input: 'b+4',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i14',
            onBlock: '-7',
            onHit: '+4',
            tags: ['Mid', 'Safe', 'Extensions'],
            description: 'Fast mid kick with multiple extensions. The start of one of his best strings.',
          }}
          showVideo
        />

        <p>
          b+4 is a <span className="highlight">fast 14-frame mid</span> that's the gateway to 
          one of Dragunov's most versatile strings. It hits grounded opponents and has multiple follow-ups.
        </p>

        <KeyConcept title="b+4 Extensions" icon="🔀">
          <ul>
            <li><code>b+4,3</code> — Heat engager, mid-high, -9 on block, wall splats</li>
            <li><code>b+4,2</code> — Mid-mid, -7 on block, can enter SNK or FC</li>
            <li><code>b+4,2,1</code> — Full string, last hit is high, +1 on block</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="b+4,3 for Heat">
          b+4,3 is one of your main ways to activate Heat. It's -9 so it's safe, 
          wall splats, and the heat dash gives you a launcher. Great for punishment too.
        </TipBox>
      </Section>

      <Section title="Basic Pressure Pattern">
        <p>
          With just these tools, you can start playing Dragunov:
        </p>

        <KeyConcept title="The Foundation Loop" icon="🔄">
          <ol>
            <li><strong>Jab (1)</strong> — +1 on block, check the situation</li>
            <li><strong>If they press</strong> — 1,2,1 counter-hits them</li>
            <li><strong>If they block</strong> — df+1 mid check or throw</li>
            <li><strong>If they duck</strong> — df+1 hits them</li>
            <li><strong>Mix in d+2</strong> — Keeps them honest, sets up crouch game</li>
          </ol>
        </KeyConcept>

        <p>
          This is just the beginning. Next chapter, you'll learn how to close distance 
          with WR+2 and actually get into this pressure. For now, get comfortable with 
          these basic pokes in practice mode.
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
                <td style={{ padding: '8px' }}><code>1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+8</td>
                <td style={{ padding: '8px' }}>Plus on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+8</td>
                <td style={{ padding: '8px' }}>10f punish, SNK with df</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+15g</td>
                <td style={{ padding: '8px' }}>Heat engager, CH confirmable</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-2</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+7</td>
                <td style={{ padding: '8px' }}>Main mid poke</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-1c</td>
                <td style={{ padding: '8px' }}>Low, high crush, tracking</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i14</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-7</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4</td>
                <td style={{ padding: '8px' }}>Fast mid, many extensions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
