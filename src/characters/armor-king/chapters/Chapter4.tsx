import { Chapter, Section } from '../../../components/guide'
import { MoveCard, TipBox, KeyConcept, ExecutionBox, Collapsible, Flowchart, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Lows"
      intro="Armor King's lows aren't the highlight of his kit, but they're essential for opening up turtling opponents. Let's understand each one and when to use them."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Continue to Counter Hits"
    >
      <Section title="d+3 — Your Standard Low Poke">
        <MoveCard character="armor-king"
          input="d+3"
          tags={['low']}
          description={
            <>
              A quick low poke that's good for harassing. On <span className="highlight-secondary">counter hit</span>, 
              you get +9 which is enough to set up a crouch throw mix. Safe-ish at -12.
            </>
          }
          stats={{
            startup: 'i17',
            onBlock: '-12',
            onHit: '+2',
            onCH: '+9',
          }}
        />
      </Section>

      <Section title="d+4 — The Tiny Poke">
        <MoveCard character="armor-king"
          input="d+4"
          tags={['low', 'homing']}
          description="Fast at 14 frames and tracks both sides. Garbage damage (6), but useful as a round closer or to interrupt. Very negative at -15 on block though."
          stats={{
            startup: 'i14',
            onBlock: '-15c',
            onHit: '-4',
          }}
        />
      </Section>

      <Section title="SS+2 — Sidestep Low">
        <MoveCard character="armor-king"
          input="SS+2"
          tags={['low']}
          description={
            <>
              Your key low for pressure. On hit you're +3, on <span className="highlight-secondary">counter hit</span> you're +6. 
              At +6, a ws+2 frame trap works beautifully — if they press, they get launched!
            </>
          }
          stats={{
            startup: 'i19',
            onBlock: '-12',
            onHit: '+3',
            onCH: '+6c',
          }}
        />

        <KeyConcept title="SS+2 into ws+2 Frame Trap" icon="🔑">
          <p>This is one of your key low setups:</p>
          <ul>
            <li><strong>SS+2 on hit</strong> → +3 → ws+2 (12f) beats anything they can do</li>
            <li><strong>SS+2 on CH</strong> → +6 → ws+2 is essentially guaranteed</li>
            <li>If they try to press after SS+2 hit and you do ws+2, they get <span className="highlight-secondary">counter hit launched!</span></li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="ff,n+2 — The Kilo Low">
        <MoveCard character="armor-king"
          input="ff,n+2"
          tags={['low']}
          description={
            <>
              Input: Dash forward, release to neutral, then press 2. This low <span className="highlight">high crushes</span> and 
              is +5 on hit. <strong>Hold forward to enter Bad Jaguar at +8!</strong> On counter hit, you get a guaranteed follow-up.
            </>
          }
          stats={{
            startup: 'i19',
            onBlock: '-13',
            onHit: '+5',
            onCH: '+10',
          }}
        />

        <ExecutionBox title="How to Execute ff,n+2" icon="🎮">
          <p>The notation "ff,n+2" means:</p>
          <ol>
            <li><strong>ff</strong> — Tap forward twice (start a dash)</li>
            <li><strong>n</strong> — Return stick to neutral briefly</li>
            <li><strong>+2</strong> — Press 2 (the punch comes out)</li>
          </ol>
          <p>The neutral is important — it makes the low come out instead of a running move. Think of it as: dash, let go, punch.</p>
        </ExecutionBox>

        <TipBox title="ff,n+2~F into Bad Jaguar">
          <p>
            When this low hits, hold forward to enter Bad Jaguar at +8. From +8 you have a full mixup 
            with BAD 4 (low), BAD 2,4 (mid), or throws!
          </p>
        </TipBox>
      </Section>

      <Section title="d+3+4 — The Risky Low with Extensions">
        <MoveCard character="armor-king"
          input="d+3+4"
          tags={['low']}
          description={
            <>
              A low that high crushes and has extensions. Very negative at -16 on block, so use carefully. 
              On <span className="highlight-secondary">counter hit</span>, you can confirm the extensions.
            </>
          }
          stats={{
            startup: 'i17',
            onBlock: '-16c',
            onHit: '-2',
          }}
        />

        <Collapsible title="d+3+4 Extensions" icon="📖">
          <p><strong>d+3+4,1</strong> — Low-high. On counter hit, wallsplats! The ,1 is -9 and balcony breaks.</p>
          <p><strong>d+3+4,3</strong> — Low-mid. Tornado on counter hit. Safer option at -15.</p>
          <p>Use d+3+4,1 for wall carry/wallsplat. Use d+3+4,3 for a safer tornado option.</p>
        </Collapsible>
      </Section>

      <Section title="db+3 — Homing Low (High Risk)">
        <MoveCard character="armor-king"
          input="db+3"
          tags={['low', 'homing']}
          description={
            <>
              Your homing low. On <span className="highlight-secondary">counter hit</span>, you get a Tornado launcher! 
              Extremely punishable at -26 on block. Use sparingly as a hard read.
            </>
          }
          stats={{
            startup: 'i22',
            onBlock: '-26',
            onHit: '+6',
            onCH: 'Tornado',
          }}
        />

        <TipBox title="Launch Punishable" variant="danger">
          <p>
            db+3 is -26 on block — everyone can launch punish this. Only use it when you have a hard read 
            that they'll stand or try to step.
          </p>
        </TipBox>
      </Section>

      <Flowchart
        title="Low Selection Flowchart"
        startNode="What do you need?"
        branches={[
          { label: 'Quick chip / round closer', action: 'd+4 (14f, tracks, tiny damage)' },
          { label: 'Standard low poke', action: 'd+3 (17f, +9 on CH)' },
          { label: 'Pressure with follow-up', action: 'SS+2 → ws+2 frame trap' },
          { label: 'Stance entry low', action: 'ff,n+2~F → Bad Jaguar at +8' },
        ]}
      />

      <PracticeBox
        title="Low Practice — Frame Trap Drill"
        setup="Step 1: Set dummy to Guard All. Practice the low inputs first. Step 2: Then set dummy to After Recovery → 1 (jab) to practice the SS+2 → ws+2 frame trap."
        tasks={[
          { id: 'ch4-d3', text: 'Do d+3 repeatedly', detail: 'Standard low poke — note the -12 on block', type: 'counter', target: 10 },
          { id: 'ch4-ffn2', text: 'Practice ff,n+2 (dash, neutral, 2)', detail: 'The key is releasing to neutral before pressing 2', type: 'counter', target: 15 },
          { id: 'ch4-ffn2f', text: 'Do ff,n+2 and hold F to enter Bad Jaguar', detail: 'You should see AK crouch into stance after the low', type: 'counter', target: 10 },
          { id: 'ch4-ss2', text: 'Do SS+2 → ws+2 sequence', detail: 'Set dummy to jab after recovery. If ws+2 counter hits, you got the frame trap!', type: 'counter', target: 10 },
        ]}
      />

      <Quiz
        question="Your SS+2 hits the opponent. What's the best follow-up for a frame trap?"
        options={[
          { text: 'Another SS+2 for more low damage', isCorrect: false },
          { text: 'ws+2 — if they press, they get counter hit launched', isCorrect: true },
          { text: 'Giant Swing — throws beat everything', isCorrect: false },
          { text: 'df+1 — go back to poking', isCorrect: false },
        ]}
        correctFeedback="Correct! SS+2 on hit gives +3 (or +6 on CH). ws+2 is 12 frames, so if they press anything, they'll get counter hit launched!"
        incorrectFeedback="Not quite. After SS+2 hits, you're +3 to +6. ws+2 at 12 frames creates a frame trap — if they press, they get counter hit launched for a full combo!"
      />
    </Chapter>
  )
}
