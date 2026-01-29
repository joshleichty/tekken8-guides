import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, Flowchart, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Plus Frames & Pressure"
      intro="Armor King's throw game becomes truly scary when you're at plus frames. Let's learn which moves give you plus frames and how to capitalize on them."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Continue to Whiff Punishment"
    >
      <KeyConcept title="Why Plus Frames Matter" icon="🔑">
        <p>When you're plus, your opponent is in a terrible situation:</p>
        <ul>
          <li><strong>They can't press</strong> — Your next move will beat theirs</li>
          <li><strong>They must guess</strong> — Throw or mid?</li>
          <li><strong>Throws become unreactable</strong> — No time to see and duck</li>
        </ul>
        <p>Armor King lives for this. Get plus, then make them guess.</p>
      </KeyConcept>

      <Section title="Your Plus Frame Tools">
        <MoveCard character="armor-king"
          input="ub+1"
          tags={['high', 'homing', '+5 on block']}
          description={
            <>
              <span className="highlight">+5 on block!</span> This is your primary "get plus" move. 
              It's a high so it can be ducked, but it tracks both ways. Knocks down on hit for oki.
            </>
          }
          stats={{
            startup: 'i24',
            onBlock: '+5',
            onHit: '+39d KND',
          }}
        showVideo
        />

        <MoveCard character="armor-king"
          input="CD+1"
          tags={['mid', '+5 on block']}
          description={
            <>
              From crouch dash, this mid is <span className="highlight">+5 on block</span> and +16 on hit! 
              Chip damage too. Your opponent must respect your follow-ups.
            </>
          }
          stats={{
            startup: 'i15',
            onBlock: '+5',
            onHit: '+16a',
          }}
        showVideo
        />

        <MoveCard character="armor-king"
          input="f+4"
          tags={['mid', '+3 on block']}
          description={
            <>
              A simple mid that's <span className="highlight">+3 on block</span> and +7 on counter hit. 
              Forces crouch on hit.
            </>
          }
          stats={{
            startup: 'i23',
            onBlock: '+3c',
            onHit: '+7c',
            onCH: '+12c',
          }}
        showVideo
        />

        <MoveCard character="armor-king"
          input="BAD 1+2"
          tags={['mid', 'stance', '+5 on block']}
          description={
            <>
              From Bad Jaguar stance, this headbutt is <span className="highlight">+5 on block</span> and 
              +12 on counter hit. Launches airborne.
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
      </Section>

      <Section title="What to Do When Plus">
        <Flowchart
          title="Plus Frame Decision Tree"
          startNode="You're +3 to +5"
          middleNode="What does opponent do?"
          branches={[
            { label: 'They stand block', action: 'Giant Swing / Tombstone → They eat throw' },
            { label: 'They duck', action: 'df+3 / ff+2 → Mid hits, possible CH launch' },
            { label: 'They press', action: 'Your move beats theirs → Free damage' },
            { label: 'They sidestep', action: 'ub+1 / b+3+4 → Homing catches them' },
          ]}
        />

        <KeyConcept title="The Core Mixup" icon="🎯">
          <p>At +5 from ub+1 or CD+1:</p>
          <ul>
            <li><strong>Giant Swing (f,hcf+1)</strong> — 12f throw, 1 break, huge damage</li>
            <li><strong>Tombstone (qcb+1+2)</strong> — 11f throw, 1+2 break, oki setup</li>
            <li><strong>df+3</strong> — 17f mid, beats duck, CH launches</li>
            <li><strong>Delayed throw</strong> — Catches people pressing late</li>
          </ul>
          <p>If they guess wrong, they take 40-70 damage. If they guess right, they escape a throw or block a mid. <strong>The math favors you.</strong></p>
        </KeyConcept>
      </Section>

      <Section title="Setting Up Plus Frames">
        <p>You don't always start at plus. Here's how to get there:</p>
        <ul>
          <li><strong>Raw ub+1</strong> — High risk but high reward if they don't duck</li>
          <li><strong>Wave dash CD+1</strong> — Mix crouch dash into your movement</li>
          <li><strong>b+1,2 on hit → BAD</strong> — From a punish, enter stance at +8</li>
          <li><strong>ff,n+2 on hit → BAD</strong> — Low into stance at +8</li>
          <li><strong>After knockdown</strong> — Tech roll situations often leave you plus</li>
        </ul>

        <TipBox title="The Conditioning Game">
          <p>
            At first, opponents will duck your throw attempts. That's fine! This means your mids will counter hit. 
            After they eat a few CH df+3 combos, they'll start standing... and your throws will land. 
            <strong>It's a constant dance.</strong>
          </p>
        </TipBox>
      </Section>

      <PracticeBox
        title="Plus Frame Practice"
        setup="Set dummy to Guard All first. Then change to After Block → Random (duck or jab) to simulate real opponents."
        tasks={[
          { id: 'ch6-ub1', text: 'Land ub+1 on block and note +5 frames', detail: 'This is your setup move — memorize the timing', type: 'counter', target: 10 },
          { id: 'ch6-cd1', text: 'Do wave dash → CD+1 on block', detail: 'Practice entering crouch dash smoothly into the +5 mid', type: 'counter', target: 10 },
          { id: 'ch6-throw', text: 'Do ub+1 (blocked) → Giant Swing', detail: 'Input: ub+1, then f,hcf+1', type: 'counter', target: 10 },
          { id: 'ch6-mid', text: 'Do ub+1 (blocked) → df+3', detail: 'This beats opponents who duck the throw', type: 'counter', target: 10 },
        ]}
      />

      <Quiz
        question="You land ub+1 on block (+5). Your opponent has been ducking your throws. What's the best choice?"
        options={[
          { text: 'Giant Swing — they have to respect the throw eventually', isCorrect: false },
          { text: 'df+3 — punish their duck with a mid that CH launches', isCorrect: true },
          { text: 'Another ub+1 — stack plus frames', isCorrect: false },
          { text: 'Backdash — reset to neutral', isCorrect: false },
        ]}
        correctFeedback="Correct! If they're ducking your throws, punish them with df+3. It's a safe mid that CH launches ducking opponents. Once they respect the mid, your throws will land again."
        incorrectFeedback="Not quite. If they're consistently ducking, throw attempts will whiff. Use df+3 — it's a safe mid that catches ducking opponents with a CH launch!"
      />
    </Chapter>
  )
}
