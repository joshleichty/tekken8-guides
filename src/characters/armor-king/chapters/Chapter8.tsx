import { Chapter, Section } from '../../../components/guide'
import { MoveCard, StanceBox, KeyConcept, TipBox, Collapsible, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Bad Jaguar Stance"
      intro="Bad Jaguar (BAD) is Armor King's signature stance. Understanding when to enter it and what to do from it is essential for high-level AK play."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Continue to Crouch Dash"
    >
      <StanceBox name="Bad Jaguar Stance" input="f+3+4" icon="🦁">
        <p>A crouching stance that gives access to powerful mixups. Can also be entered from various moves with ~F (hold forward).</p>
        <ul>
          <li>Crushes some highs</li>
          <li>Has throws, lows, mids, and a power crush</li>
          <li>Frame advantage depends on how you enter</li>
        </ul>
      </StanceBox>

      <Section title="Ways to Enter Bad Jaguar">
        <KeyConcept title="Stance Entry Options" icon="🔑">
          <ul>
            <li><strong>f+3+4</strong> — Raw entry, neutral</li>
            <li><strong>b+1,2~F on hit</strong> — Enter at +8</li>
            <li><strong>ff,n+2~F on hit</strong> — Enter at +8</li>
            <li><strong>1,2,1~F</strong> — Risky, -19 on block</li>
            <li><strong>ub+1~F on hit</strong> — Enter with knockdown advantage</li>
          </ul>
          <p>The key is entering at <span className="highlight">+8 or better</span> — this is where your mixup becomes truly scary.</p>
        </KeyConcept>
      </Section>

      <Section title="Bad Jaguar Moves">
        <MoveCard character="armor-king"
          input="BAD 4"
          tags={['low', 'stance']}
          description={
            <>
              Your main low from stance. At +8 entry, this is a 17f low that's only -13 on block. 
              On hit you're +3, on <span className="highlight-secondary">counter hit</span> you get a combo.
            </>
          }
          stats={{
            startup: 'i17',
            onBlock: '-13',
            onHit: '+3c',
            onCH: 'Launch +26a',
          }}
        showVideo
        />

        <MoveCard character="armor-king"
          input="BAD 2,4"
          tags={['mid', 'throw', 'stance']}
          description="Mid into attack throw. The throw only comes out on front hit. Safe-ish option that leads to good oki."
          stats={{
            startup: 'i15',
            onBlock: '-12',
            onHit: 'Throw',
          }}
        showVideo
        />

        <MoveCard character="armor-king"
          input="BAD 2,3"
          tags={['mid', 'high', 'Tornado', 'stance']}
          description={
            <>
              Mid-high Tornado string. On hit, forces crouch and gives Tornado for combo. 
              The high can be ducked so use carefully.
            </>
          }
          stats={{
            startup: 'i15',
            onBlock: '-7',
            onHit: 'Tornado',
          }}
        showVideo
        />

        <MoveCard character="armor-king"
          input="BAD 1+2"
          tags={['mid', 'stance', '+5 on block']}
          description={
            <>
              Headbutt that's <span className="highlight">+5 on block</span>! On CH, launches airborne. 
              Use this to maintain pressure or reset your mixup.
            </>
          }
          stats={{
            startup: 'i26',
            onBlock: '+5',
            onHit: '+12c',
            onCH: 'Launch +40a',
          }}
        showVideo
        />

        <MoveCard character="armor-king"
          input="BAD 1,2"
          tags={['high', 'mid', 'Heat Engager', 'stance']}
          description={
            <>
              High-mid Heat Engager. Use this to activate Heat from stance. On block, you can Heat Dash for safety.
            </>
          }
          stats={{
            startup: 'i11',
            onBlock: '-12',
            onHit: '+18a',
          }}
        showVideo
        />

        <MoveCard character="armor-king"
          input="BAD 3"
          tags={['mid', 'Power Crush', 'stance']}
          description="Power crush from stance. Absorbs attacks and launches on CH. In Heat, can follow up with BAD 3,2."
          stats={{
            startup: 'i20',
            onBlock: '-13',
            onHit: '+11a',
            onCH: 'Launch +26d',
          }}
        showVideo
        />
      </Section>

      <Section title="Throws from Stance">
        <p>From Bad Jaguar, you have access to all your standing throws plus some stance-specific options:</p>

        <MoveCard character="armor-king"
          input="BAD 1+3"
          tags={['throw', 'stance']}
          description="Giant Swing from stance. Same properties as standing Giant Swing."
          variant="throw"
        showVideo
        />

        <MoveCard character="armor-king"
          input="BAD db+1+2"
          tags={['throw', 'stance']}
          description="A ground throw that catches grounded, airborne, and backturn opponents. Leaves you FDFA on whiff."
          variant="throw"
        showVideo
        />

        <TipBox title="The BAD Mixup at +8">
          <p>When you enter Bad Jaguar at +8 (from b+1,2 or ff,n+2 on hit), your opponent must guess:</p>
          <ul>
            <li><strong>BAD 4</strong> (low) — 17f, so it comes out at effective i9</li>
            <li><strong>BAD 2,4</strong> (mid throw) — 15f, effective i7</li>
            <li><strong>BAD 1+3</strong> (Giant Swing) — Can't be stepped</li>
            <li><strong>BAD 1+2</strong> (headbutt) — Reset to +5</li>
          </ul>
          <p>They literally cannot react. It's a pure guess.</p>
        </TipBox>
      </Section>

      <Collapsible title="Frame Data Summary" icon="📊" defaultOpen>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
              <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Type</th>
              <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Startup</th>
              <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
            </tr>
          </thead>
          <tbody style={{ color: 'var(--text-secondary)' }}>
            <tr><td style={{ padding: '8px' }}>BAD 4</td><td style={{ textAlign: 'center' }}>Low</td><td style={{ textAlign: 'center' }}>i17</td><td style={{ textAlign: 'center', color: 'var(--danger)' }}>-13</td></tr>
            <tr><td style={{ padding: '8px' }}>BAD 2,4</td><td style={{ textAlign: 'center' }}>Mid, Throw</td><td style={{ textAlign: 'center' }}>i15</td><td style={{ textAlign: 'center', color: 'var(--danger)' }}>-12</td></tr>
            <tr><td style={{ padding: '8px' }}>BAD 2,3</td><td style={{ textAlign: 'center' }}>Mid, High T!</td><td style={{ textAlign: 'center' }}>i15</td><td style={{ textAlign: 'center', color: 'var(--danger)' }}>-7</td></tr>
            <tr><td style={{ padding: '8px' }}>BAD 1+2</td><td style={{ textAlign: 'center' }}>Mid</td><td style={{ textAlign: 'center' }}>i26</td><td style={{ textAlign: 'center', color: 'var(--success)' }}>+5</td></tr>
            <tr><td style={{ padding: '8px' }}>BAD 1,2</td><td style={{ textAlign: 'center' }}>High, Mid HE</td><td style={{ textAlign: 'center' }}>i11</td><td style={{ textAlign: 'center', color: 'var(--danger)' }}>-12</td></tr>
            <tr><td style={{ padding: '8px' }}>BAD 3</td><td style={{ textAlign: 'center' }}>Mid PC</td><td style={{ textAlign: 'center' }}>i20</td><td style={{ textAlign: 'center', color: 'var(--danger)' }}>-13</td></tr>
          </tbody>
        </table>
      </Collapsible>

      <PracticeBox
        title="Bad Jaguar Practice"
        setup="Set dummy to Guard All. Practice entering stance and doing each option."
        tasks={[
          { id: 'ch8-entry', text: 'Enter Bad Jaguar with f+3+4', detail: 'Raw entry — get comfortable with the stance', type: 'counter', target: 10 },
          { id: 'ch8-b12f', text: 'Do b+1,2 (on hit) → hold F → BAD 4', detail: 'This is your main punish → stance → low route', type: 'counter', target: 10 },
          { id: 'ch8-bad24', text: 'From BAD, do BAD 2,4 (mid throw)', detail: 'The throw only comes out on hit', type: 'counter', target: 10 },
          { id: 'ch8-bad12', text: 'From BAD, do BAD 1+2 (headbutt)', detail: 'Note the +5 on block — you can keep pressing', type: 'counter', target: 10 },
          { id: 'ch8-throw', text: 'From BAD, do BAD 1+3 (Giant Swing)', detail: 'Same input as standing Giant Swing', type: 'counter', target: 10 },
        ]}
      />

      <Quiz
        question="You land b+1,2 as a punish and enter Bad Jaguar at +8. Your opponent has been blocking low. What's the best option?"
        options={[
          { text: 'BAD 4 — they have to start respecting the low', isCorrect: false },
          { text: 'BAD 2,4 — mid into throw beats their crouch block', isCorrect: true },
          { text: 'BAD 1+2 — stay plus and reset', isCorrect: false },
          { text: 'Exit stance and backdash', isCorrect: false },
        ]}
        correctFeedback="Correct! If they're crouch blocking to avoid BAD 4, use BAD 2,4 — the mid will hit their crouch and lead into the throw for good damage."
        incorrectFeedback="Not quite. If they're crouch blocking, BAD 4 will be blocked. BAD 2,4 is a mid that will hit their crouch and follow up with a throw!"
      />
    </Chapter>
  )
}
