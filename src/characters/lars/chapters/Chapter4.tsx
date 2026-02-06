import { Chapter, Section } from '../../../components/guide'
import {
  KeyConcept,
  TipBox,
  PracticeBox,
  Flowchart,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Stance Pressure"
      intro="Knowing the stances is step one. Knowing WHEN and WHY to use each option — that's what makes opponents feel helpless. This chapter teaches you to read your opponent and pick the right tool."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Neutral Control"
    >
      <Section title="DEN 3 — Your Main Approach">
        <p>
          DEN 3 is the single most important stance approach move Lars has. At +5 on block 
          into SEN, it gives you a guaranteed frame advantage to start your mixup game.
        </p>

        <Flowchart
          title="The DEN 3 Decision Tree"
          nodes={[
            { type: 'start', label: 'DEN 3 on block (+5 into SEN)' },
            { type: 'decision', label: 'What is your opponent doing?', branches: [
              { label: 'Standing/Blocking', action: 'SEN 2 (low) or SEN 1 (safe mid heat engager)' },
              { label: 'Pressing buttons', action: 'SEN 1 beats them (i12 from +5 = effective i7)' },
              { label: 'Sidestepping', action: 'SEN 4 (homing high, +4 on block)' },
              { label: 'Ducking', action: 'SEN 3 (launching mid) or SEN 1+2 (power crush mid)' }
            ]},
            { type: 'end', label: 'Every defensive option has an answer' }
          ]}
        />

        <KeyConcept title="The SEN 1 Frame Trap After DEN 3" icon="🪤">
          <p>
            DEN 3 on block is +5. SEN 1 is i12. Your SEN 1 comes out at effective frame 7. 
            Your opponent's jab (i10) comes out at frame 10. <strong>SEN 1 wins by 3 frames.</strong>
          </p>
          <p style={{ marginTop: '12px' }}>
            This means after DEN 3 on block, SEN 1 is a guaranteed frame trap. If they press 
            ANY button, they get hit. SEN 1 is also a heat engager, so you can activate heat 
            right off your approach tool.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="The Sidestep Problem">
          Experienced players will sidestep left after blocking DEN 3 to avoid SEN 1. 
          When you notice this, switch to SEN 4 (homing) or SEN 1+2 (tracks). 
          Analyze your opponent — if they keep stepping, use homing. If they block, use lows.
        </TipBox>
      </Section>

      <Section title="Reading Your Opponent in Stance">
        <p>
          This is the skill that separates good Lars players from great ones. 
          Every opponent falls into patterns. Your job is to identify the pattern and exploit it.
        </p>

        <KeyConcept title="The Four Opponent Types" icon="🔍">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Opponent Does</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>You Do</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Why</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>Holds back (blocks)</td>
                <td style={{ padding: '8px' }}><code>SEN 2</code> (low) or <code>DEN 4</code></td>
                <td style={{ padding: '8px' }}>Lows punish passive blocking</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Mashes buttons</td>
                <td style={{ padding: '8px' }}><code>SEN 1</code> or <code>DEN 2</code></td>
                <td style={{ padding: '8px' }}>Frame trap them. DEN 2 CH launches.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Ducks (crouches)</td>
                <td style={{ padding: '8px' }}><code>SEN 3</code> (launcher) or <code>SEN 1</code></td>
                <td style={{ padding: '8px' }}>Mids destroy crouchers</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Sidesteps</td>
                <td style={{ padding: '8px' }}><code>SEN 4</code> or <code>SEN 1+2</code></td>
                <td style={{ padding: '8px' }}>Homing/tracking catches movement</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <TipBox variant="tip" title="The Real Game">
          At beginner ranks, go for whatever you want — opponents don't know the options. 
          As you climb, you'll start noticing patterns. "This guy always ducks when I'm in SEN." 
          That's your cue to launch with SEN 3. Tekken is a conversation, and stances are 
          how Lars asks questions.
        </TipBox>
      </Section>

      <Section title="Recovering Momentum With Punishment">
        <p>
          Here's something many players don't realize: <strong>you can use punishment to start 
          your stance pressure</strong>. When your opponent is constantly attacking you and 
          you feel overwhelmed, wait for a punishable move.
        </p>

        <KeyConcept title="Punishment → Pressure Pipeline" icon="🔄">
          <ol>
            <li>Opponent pressures you with moves</li>
            <li>They do something -10 or worse → <strong>Punish with 2,1</strong></li>
            <li>You're now +8 in LEN → <strong>Force the 50/50</strong></li>
            <li>Momentum is YOURS now</li>
          </ol>
          <p style={{ marginTop: '12px' }}>
            Similarly, blocking a -13 low → <strong>ws+2,3~D into LEN</strong> → you're now in 
            stance with plus frames. The defender becomes the attacker in one motion.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="This Is Lars' Superpower">
          Most characters need to "reset" to neutral before building offense. Lars goes directly 
          from punishment to pressure. There's no gap. Your opponent makes a mistake and suddenly 
          they're guessing.
        </TipBox>
      </Section>

      <Section title="Stance Canceling">
        <p>
          Stance canceling is an advanced technique that makes your movement unpredictable. 
          You enter DEN and immediately cancel it, creating a wave-like motion.
        </p>

        <KeyConcept title="How to Stance Cancel" icon="🎮">
          <ol>
            <li>Hold forward and press 3 (<code>f+3</code>) — enter DEN</li>
            <li>Press down while still holding forward — cancel DEN</li>
            <li>Repeat: <code>f+3, D, f+3, D, f+3, D</code></li>
          </ol>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            The key: hold forward the entire time and just tap down repeatedly. 
            Don't rush it. Start slow: <code>f+3... down... f+3... down...</code>
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Prioritize This Early">
          Stance canceling looks cool and feels advanced, but it's NOT something you need 
          as a beginner. It's useful for baiting opponents at higher ranks. Focus on the 
          actual stance options first. Come back to this when you're comfortable with everything else.
        </TipBox>

        <PracticeBox
          title="Stance Cancel Practice (Advanced)"
          setup="Go to Practice Mode. No opponent actions needed."
          tasks={[
            { id: 'cancel-1', text: 'Do f+3 → D (enter DEN, cancel) 10 times slowly', detail: 'Hold F, tap 3, tap D. Repeat.', type: 'counter', target: 10 },
            { id: 'cancel-2', text: 'Speed it up: 5 cancels in a row without stopping', detail: 'f+3,D,f+3,D,f+3,D,f+3,D,f+3,D', type: 'toggle' },
            { id: 'cancel-3', text: 'Cancel 3 times then do DEN 3', detail: 'f+3,D,f+3,D,f+3 → DEN 3. This is how you bait and approach.', type: 'toggle' },
          ]}
        />
      </Section>

      <Section title="Combining Stances in Real Matches">
        <p>
          Here's what a typical Lars pressure sequence looks like in a real match:
        </p>

        <KeyConcept title="Example Pressure Sequences" icon="⚡">
          <div style={{ marginBottom: '16px' }}>
            <strong style={{ color: 'var(--accent)' }}>Sequence 1: The Classic</strong>
            <div style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
              <code>DEN 3</code> (+5 block) → <code>SEN 1</code> (frame trap / heat engager)
            </div>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <strong style={{ color: 'var(--accent)' }}>Sequence 2: The Low Mix</strong>
            <div style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
              <code>DEN 3</code> (+5 block) → <code>SEN 2</code> (low, +6c hit) → <code>FC df+2</code> (frame trap from crouch)
            </div>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <strong style={{ color: 'var(--accent)' }}>Sequence 3: The Chain</strong>
            <div style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
              <code>df+2</code> (+9 hit in SEN) → <code>SEN 4</code> (homing, +4 block) → jab → <code>2,1</code> → LEN mixup
            </div>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <strong style={{ color: 'var(--accent)' }}>Sequence 4: The Storm</strong>
            <div style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
              <code>DEN 3+4</code> (storm low) → hold F → <code>SEN 1</code> (if CH) guaranteed
            </div>
          </div>
          <div>
            <strong style={{ color: 'var(--accent)' }}>Sequence 5: Punishment to Pressure</strong>
            <div style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
              Block -10 move → <code>2,1</code> (+8 LEN) → <code>LEN 1</code> (low) → crouch → <code>FC df+2</code> (frame trap)
            </div>
          </div>
        </KeyConcept>
      </Section>

      <Section title="When NOT to Use Stances">
        <p>
          Stances are powerful but not invincible. Here's when to pull back:
        </p>

        <KeyConcept title="Stance Danger Zones" icon="⚠️">
          <ul>
            <li><strong>Opponent knows the matchup</strong> — If they're consistently interrupting your stance options, switch to pokes and counter-hit tools (Chapters 5-6).</li>
            <li><strong>You're being sidestepped</strong> — If SEN 1 keeps whiffing, they're stepping. Use homing options or go to neutral.</li>
            <li><strong>You're at the wall (defending)</strong> — Don't enter stances when your back is to the wall. You need to move first.</li>
            <li><strong>You're entering stances on block</strong> — Remember: most stance entries from blocked moves are MINUS. Only the LEN mixup after 2,1 hit is truly real.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Balance">
          Lars is about balance between aggression and defense. Play aggressive with stances 
          until your opponent shows they can handle it. Then switch to defensive play — 
          punishment, counter-hits, whiff punishment. When they relax, go aggressive again. 
          This toggle is the essence of high-level Lars play.
        </TipBox>
      </Section>

      <Section title="Practice: Stance Pressure Scenarios">
        <PracticeBox
          title="DEN 3 Approach Drill"
          setup="Set opponent to Guard All. Stand at mid-range."
          tasks={[
            { id: 'den3-1', text: 'Do DEN 3 → SEN 1 ten times', detail: 'The frame trap approach', type: 'counter', target: 10 },
            { id: 'den3-2', text: 'Do DEN 3 → SEN 2 five times', detail: 'The low option when they block', type: 'counter', target: 5 },
            { id: 'den3-3', text: 'Do DEN 3 → SEN 4 five times', detail: 'The homing option for steppers', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Read-and-React Drill"
          setup="Set opponent to Random Guard + random jab/crouch after blocking."
          tasks={[
            { id: 'react-1', text: 'Do DEN 3 and react to what they do', detail: 'Press? Use SEN 1. Duck? Use SEN 3. Stand? Use SEN 2.', type: 'toggle' },
            { id: 'react-2', text: 'Complete 10 rounds choosing the correct SEN option', detail: 'Watch their body animation for clues', type: 'counter', target: 10 },
          ]}
        />
      </Section>

      <Collapsible title="Real vs Fake Mixup Quick Reference" icon="📋">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Entry</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Frames</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Real?</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>2,1 on hit → LEN</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>Yes</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>DEN 3 block → SEN</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+5</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>Frame trap (SEN 1)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>df+2 hit → SEN</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+9</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>Yes</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>f+2,1 hit → SEN</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>Yes-ish (can trade)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>2,1 on block → LEN</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>Fake</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>df+2 block → SEN</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>Fake</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>b+3~F block → SEN</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-5</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>Fake</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
