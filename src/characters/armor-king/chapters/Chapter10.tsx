import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, ExecutionBox, Flowchart, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Essential Throws"
      intro="Throws are the heart of Armor King's game. Unlike King who relies on chain throws, AK focuses on single throws with devastating damage. Let's master them."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Continue to Throw Mixups"
    >
      <KeyConcept title="Throw Philosophy" icon="🔑">
        <p>Armor King's throws are designed for:</p>
        <ul>
          <li><strong>High damage</strong> — Giant Swing does 40-45 damage</li>
          <li><strong>Oki setups</strong> — Most throws leave opponent grounded near you</li>
          <li><strong>Break diversity</strong> — 1, 2, and 1+2 breaks force guessing</li>
          <li><strong>Heat synergy</strong> — Throws become homing in Heat!</li>
        </ul>
      </KeyConcept>

      <Section title="Giant Swing">
        <MoveCard character="armor-king"
          input="f,hcf+1"
          tags={['throw', '1 break']}
          variant="throw"
          description={
            <>
              Armor King's signature throw. 40 damage (45 with blue spark). Insane range for a throw. 
              <span className="highlight">Becomes homing in Heat!</span> At the wall, it's unbreakable.
            </>
          }
          stats={{
            startup: 'i10',
            damage: '40-45',
          }}
        />

        <ExecutionBox title="Giant Swing Execution" icon="🎮">
          <p>The input is f, hcf+1 which means:</p>
          <ol>
            <li><strong>f</strong> — Tap forward</li>
            <li><strong>hcf</strong> — Half circle forward (b, db, d, df, f)</li>
            <li><strong>+1</strong> — Press 1 at the end</li>
          </ol>
          <p><strong>Blue Spark:</strong> For +5 damage, input the throw perfectly within a dash. The input window is tight but the damage is worth it.</p>
          <p><strong>Shortcut:</strong> f, d, df, f+1 also works and is easier for some players.</p>
        </ExecutionBox>

        <TipBox title="Wall Giant Swing" variant="warning">
          <p>
            When your opponent's back is to the wall, Giant Swing becomes <strong>unbreakable</strong>! 
            This is 40+ free damage. Always look for wall GS opportunities.
          </p>
        </TipBox>
      </Section>

      <Section title="Tombstone Piledriver">
        <MoveCard character="armor-king"
          input="qcb+1+2"
          tags={['throw', '1+2 break']}
          variant="throw"
          description={
            <>
              The iconic Tombstone. 40 damage (45 with perfect input). Leaves opponent at your feet for oki. 
              <span className="highlight">Becomes homing in Heat!</span>
            </>
          }
          stats={{
            startup: 'i11',
            damage: '40-45',
          }}
        />

        <ExecutionBox title="Tombstone Execution" icon="🎮">
          <p>The input is qcb+1+2:</p>
          <ol>
            <li><strong>qcb</strong> — Quarter circle back (d, db, b)</li>
            <li><strong>+1+2</strong> — Press 1+2 at the end</li>
          </ol>
          <p>This throw has excellent recovery — you recover standing while they're grounded at your feet.</p>
        </ExecutionBox>
      </Section>

      <Section title="Shining Wizard">
        <MoveCard character="armor-king"
          input="f,f,F+2+4"
          tags={['throw', '1+2 break']}
          variant="throw"
          description={
            <>
              Running throw with incredible range. 40 damage (45 with blue spark). 
              <span className="highlight">Becomes homing in Heat!</span> Great for catching backdashers.
            </>
          }
          stats={{
            startup: 'i10 (from run)',
            damage: '40-45',
          }}
        />
      </Section>

      <Section title="Other Key Throws">
        <MoveCard character="armor-king"
          input="1+3"
          tags={['throw', '1 or 2 break']}
          variant="throw"
          description="Generic throw. 35 damage. Mixup with 2+4 for different break."
          stats={{
            startup: 'i12',
            damage: '35',
          }}
        />

        <MoveCard character="armor-king"
          input="db+1+2"
          tags={['throw', '1+2 break']}
          variant="throw"
          description="Tackle. 40 damage. Leaves AK in FUFA for oki. Good mixup option."
          stats={{
            startup: 'i12',
            damage: '40',
          }}
        />

        <MoveCard character="armor-king"
          input="FC 1+2"
          tags={['throw', '1+2 break', 'crouch']}
          variant="throw"
          description="Crouch throw that catches standing and crouching opponents. Use from crouch dash or full crouch."
          stats={{
            startup: 'i26',
            damage: 'Varies',
          }}
        />
      </Section>

      <Flowchart
        title="Throw Break Chart"
        startNode="Which throw?"
        branches={[
          { label: 'Giant Swing', action: '1 break' },
          { label: 'Tombstone', action: '1+2 break' },
          { label: 'Shining Wizard', action: '1+2 break' },
          { label: 'Generic 1+3', action: '1 or 2 break' },
          { label: 'Generic 2+4', action: '1 or 2 break' },
        ]}
      />

      <KeyConcept title="The Throw Mixup" icon="🎯">
        <p>From plus frames, your opponent must guess:</p>
        <ul>
          <li><strong>Giant Swing</strong> — 1 break</li>
          <li><strong>Tombstone</strong> — 1+2 break</li>
          <li><strong>Generic throws</strong> — 1 or 2 break</li>
        </ul>
        <p>Even the best players can't react to throw breaks. They have to guess. And if they guess duck or sidestep, your mids punish them.</p>
      </KeyConcept>

      <PracticeBox
        title="Throw Execution Practice"
        setup="Set dummy to Stand, No Guard. Practice until you can execute each throw consistently."
        tasks={[
          { id: 'ch10-gs', text: 'Land 10 Giant Swings (f,hcf+1)', detail: 'Focus on the half circle motion — b, db, d, df, f+1', type: 'counter', target: 10 },
          { id: 'ch10-gs-blue', text: 'Land a Blue Spark Giant Swing', detail: 'Dash into the throw input for +5 damage', type: 'counter', target: 3 },
          { id: 'ch10-ts', text: 'Land 10 Tombstones (qcb+1+2)', detail: 'Quarter circle back then 1+2', type: 'counter', target: 10 },
          { id: 'ch10-sw', text: 'Land Shining Wizard (f,f,F+2+4)', detail: 'Run forward then 2+4', type: 'counter', target: 10 },
          { id: 'ch10-fc', text: 'Land FC 1+2 from crouch dash', detail: 'CD.then hold d for crouch, then 1+2', type: 'counter', target: 5 },
        ]}
      />

      <Quiz
        question="You're at +5 after ub+1. Your opponent has been breaking your Giant Swings (1 break). What throw should you use?"
        options={[
          { text: 'Keep doing Giant Swing — they might mess up', isCorrect: false },
          { text: 'Tombstone (qcb+1+2) — different break (1+2)', isCorrect: true },
          { text: 'Just do mids instead — forget throws', isCorrect: false },
          { text: 'Generic 1+3 — same break but faster', isCorrect: false },
        ]}
        correctFeedback="Correct! If they're breaking 1, switch to Tombstone which requires 1+2 to break. Mix between 1 breaks and 1+2 breaks to keep them guessing."
        incorrectFeedback="Not quite. If they're breaking 1, Giant Swing won't work. Switch to Tombstone (1+2 break) to make them guess a different break!"
      />
    </Chapter>
  )
}
