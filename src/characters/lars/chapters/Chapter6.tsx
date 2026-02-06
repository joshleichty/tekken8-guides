import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Counter Hits & Frame Traps"
      intro="Frame traps force your opponent to respect you. Counter-hit tools destroy them when they don't. Together, they create the fear that makes your stances work."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Combos"
    >
      <Section title="What's a Frame Trap?">
        <p>
          A frame trap is when you're plus on block and follow with a move that's fast enough 
          to beat your opponent's jab. If they press, they get counter-hit. If they don't press, 
          you get free pressure.
        </p>

        <KeyConcept title="Frame Trap Formula" icon="🧮">
          <p>
            <strong>Your plus frames + opponent's jab speed &gt; your next move's speed?</strong>
          </p>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            If yes, their jab comes out before your move = NOT a frame trap.<br/>
            If no, your move comes out first = Frame trap. If they press, counter-hit.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Lars' Key Frame Traps">
        <KeyConcept title="Frame Trap Situations" icon="🪤">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Setup</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>Frames</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Follow-Up</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Result if They Press</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2</code> on hit</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8</td>
                <td style={{ padding: '8px' }}><code>b+4</code> (i15)</td>
                <td style={{ padding: '8px' }}>CH knee for 55 no-recoverable damage</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+4</code> on hit</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+5c</td>
                <td style={{ padding: '8px' }}><code>FC df+2</code> (i15)</td>
                <td style={{ padding: '8px' }}>CH mid launcher from crouch</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DEN 3</code> on block</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+5</td>
                <td style={{ padding: '8px' }}><code>SEN 1</code> (i12)</td>
                <td style={{ padding: '8px' }}>CH heat engager mid</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DEN 1</code> on block</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ padding: '8px' }}><code>1,1,1</code> (i10)</td>
                <td style={{ padding: '8px' }}>CH into heat engager wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+1,2</code> on hit</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px' }}><code>1,1,1</code> (i10)</td>
                <td style={{ padding: '8px' }}>CH heat engager from SEN cancel</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 3+4</code> on block</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>0c</td>
                <td style={{ padding: '8px' }}><code>1,1,1</code> (i10)</td>
                <td style={{ padding: '8px' }}>Trades or beats slow responses</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <TipBox variant="tip" title="The Mixup Within the Frame Trap">
          When your opponent starts respecting the frame trap (they stop pressing), 
          that's when you go for lows. db+4 on hit → they hold back expecting FC df+2? 
          Go for FC 1+2 (low) instead. The frame trap THREAT is as valuable as the frame trap itself.
        </TipBox>
      </Section>

      <Section title="The db+4 Situation">
        <MoveCard character="lars"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '19',
            startup: 'i20~21',
            onBlock: '-26',
            onHit: '+5c',
            onCH: '+29a (Launch!)',
            tags: ['Low', 'High Crush', 'CH Launcher', 'Key Move'],
            description: 'Lars\' signature low. +5c on hit leads into the most important frame trap. CH gives a full combo. -26 on block = launch punishable.',
            notes: ['High crush from frame 6', '+5c on hit into FC df+2 frame trap', 'Counter-hit = full combo', 'VERY risky: -26 on block']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="FC.df+2"
          move={{
            input: 'FC df+2',
            hitLevel: ['m'],
            damage: '19',
            startup: 'i15~16',
            onBlock: '-8',
            onHit: '+5',
            onCH: '+63a (Launch!)',
            tags: ['Full Crouch', 'Mid', 'Safe', 'CH Launcher', 'Tracks'],
            description: 'The perfect partner to db+4. Safe CH-launching mid from crouch. After db+4 hits (+5c), if they press, this counter-hit launches.',
            notes: ['Safe at -8', 'Counter-hit = full combo', 'Tracks well to Lars\' weak side', 'Use after any move that leaves you crouching']
          }}
          showVideo
        />

        <KeyConcept title="The db+4 → FC df+2 Flowchart" icon="🔄">
          <ol>
            <li><code>db+4</code> hits → You're +5 in crouch</li>
            <li>Opponent presses? → <code>FC df+2</code> counter-hit launches them</li>
            <li>Opponent blocks? → <code>FC 1+2</code> (low) for more chip, or <code>ws mixups</code></li>
            <li>Opponent ducks? → <code>ws+1</code> or <code>ws+4</code> hits them</li>
          </ol>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            This is one of the most important sequences in Lars' game. It's been a staple since 
            Tekken 6 and it's stronger than ever.
          </p>
        </KeyConcept>
      </Section>

      <Section title="b+4 — The Magnetic Knee">
        <MoveCard character="lars"
          move={{
            input: 'b+4',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i15',
            onBlock: '-8',
            onHit: '+8',
            tags: ['Knee', 'Mid', 'Safe', '55 Unrecoverable'],
            description: 'The Magnetic Knee. Safe mid at -8. On counter-hit, 55 damage with NO recoverable health. In S2, b+4,1+2 is now a normal-hit throw extension.',
            notes: ['Safe at -8', 'CH: 55 unrecoverable damage (no combo needed)', 'S2: b+4,1+2 throw on normal hit too', 'Knee property = beats parries']
          }}
          showVideo
        />

        <KeyConcept title="b+4,1+2 — The Season 2 Buff" icon="💀">
          <p>
            In Season 1, the 1+2 throw extension required a counter-hit. In Season 2, it works 
            on <strong>normal hit</strong> too (just-frame input, but lenient). This means:
          </p>
          <ul>
            <li>Normal hit b+4 → 1+2 = 38 damage + knockdown</li>
            <li>Counter-hit b+4 = 55 unrecoverable damage</li>
            <li>Both from a safe, -8 mid knee</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="When to Fish for b+4">
          Use b+4 after you've conditioned your opponent to press with your pokes. 
          Do df+1, 1,2, some lows — they'll start retaliating. That's when you stand back 
          and let the knee fly. 55 unrecoverable damage from a safe move is devastating.
        </TipBox>
      </Section>

      <Section title="b+2,1 — The Delayed String">
        <MoveCard character="lars"
          videoId="b+2,1"
          move={{
            input: 'b+2,1',
            hitLevel: ['m', 'm'],
            damage: '12, 17',
            startup: 'i15',
            onBlock: '-10',
            onHit: '+4',
            onCH: '+32a (Launch!)',
            tags: ['Mid', 'Delayable', 'CH Launcher', 'Mind Game'],
            description: 'Delayable mid-mid string. The second hit can be delayed significantly. If opponent presses after b+2 thinking you won\'t continue, the delayed 1 counter-hits for a full combo.',
            notes: ['Second hit delayable by 10+ frames', 'CH second hit = full combo', 'b+2 alone is -7, safe', 'Mind game: delay forces opponent to guess']
          }}
          showVideo
        />

        <KeyConcept title="The Delay Mind Game" icon="🧠">
          <ol>
            <li>Do <code>b+2</code> on block → opponent sees you only did one hit</li>
            <li>They think "it's my turn" and press a button</li>
            <li>You delay the <code>1</code> → counter-hit → full combo</li>
            <li>Next time, they hesitate. Now you can do <code>b+2</code> → low instead</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Getting Timing Reads">
        <p>
          Beyond frame traps (which are mathematical), there's the art of <strong>reading your 
          opponent's timing</strong>. This is an advanced skill that develops over time.
        </p>

        <KeyConcept title="How to Read Timing" icon="👁️">
          <ul>
            <li><strong>Watch patterns</strong> — Does your opponent always press after blocking your 
            df+1? Note it. Next time, use b+4 instead of another df+1.</li>
            <li><strong>Dash blocking</strong> — Dash forward while holding back between dashes. 
            This baits them into pressing, then you counter-hit with b+4.</li>
            <li><strong>Provoke and punish</strong> — Poke with df+1 a few times, then back dash. 
            If they retaliate into empty space, whiff punish with f+1+2.</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            This isn't something you practice in the lab. You learn this by playing matches, 
            watching top players, and trying things out. Accept that you'll fail early — 
            that's part of the process.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Practice: Counter Hit Drills">
        <PracticeBox
          title="The db+4 → FC df+2 Drill"
          setup="Set opponent to: After Getting Hit → 1,1 (jab string)"
          tasks={[
            { id: 'ch-1', text: 'Hit db+4 → FC df+2 for counter-hit five times', detail: 'db+4 hits, they press, FC df+2 counter-hits them', type: 'counter', target: 5 },
            { id: 'ch-2', text: 'Hit db+4 → FC 1+2 when they DON\'T press five times', detail: 'Set to guard after hit. Go low when they block.', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Frame Trap Mix Drill"
          setup="Set opponent to After Blocking → Random (jab or nothing)"
          tasks={[
            { id: 'ft-1', text: 'Do 1,2 on hit → b+4. Watch for counter-hit.', detail: '+8 on hit into i15 knee = frame trap', type: 'toggle' },
            { id: 'ft-2', text: 'Do DEN 3 on block → SEN 1. Watch for counter-hit.', detail: '+5 into i12 = guaranteed frame trap', type: 'toggle' },
            { id: 'ft-3', text: 'Practice b+2 delay: b+2 (pause) 1', detail: 'Delay as long as possible. Get the CH.', type: 'toggle' },
          ]}
        />
      </Section>

      <Collapsible title="Counter Hit Tools Summary" icon="📋">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '6px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '6px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '6px', color: 'var(--accent)' }}>Risk</th>
                <th style={{ textAlign: 'left', padding: '6px', color: 'var(--accent)' }}>CH Reward</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
              <tr><td style={{ padding: '6px' }}><code>b+4</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i15</td><td style={{ textAlign: 'center', padding: '6px' }}>-8</td><td style={{ padding: '6px' }}>55 unrecoverable damage</td></tr>
              <tr><td style={{ padding: '6px' }}><code>db+4</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i20</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--danger)' }}>-26</td><td style={{ padding: '6px' }}>Full combo</td></tr>
              <tr><td style={{ padding: '6px' }}><code>FC df+2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i15</td><td style={{ textAlign: 'center', padding: '6px' }}>-8</td><td style={{ padding: '6px' }}>Full combo</td></tr>
              <tr><td style={{ padding: '6px' }}><code>b+2,1</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i15</td><td style={{ textAlign: 'center', padding: '6px' }}>-10</td><td style={{ padding: '6px' }}>Full combo (delayable)</td></tr>
              <tr><td style={{ padding: '6px' }}><code>DEN 2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i17</td><td style={{ textAlign: 'center', padding: '6px' }}>-7</td><td style={{ padding: '6px' }}>Full combo from stance</td></tr>
              <tr><td style={{ padding: '6px' }}><code>ff+1+2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i16</td><td style={{ textAlign: 'center', padding: '6px' }}>-9</td><td style={{ padding: '6px' }}>Full combo approach</td></tr>
              <tr><td style={{ padding: '6px' }}><code>SEN 2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i17</td><td style={{ textAlign: 'center', padding: '6px' }}>-12</td><td style={{ padding: '6px' }}>Tornado full combo</td></tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
