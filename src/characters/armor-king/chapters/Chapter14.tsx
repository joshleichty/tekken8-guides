import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter14({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={14}
      title="Parries"
      intro="Armor King has two parries that can turn defense into offense. Let's learn when and how to use them."
      onPrevious={() => goToChapter(13)}
      onNext={() => goToChapter(15)}
      nextLabel="Continue to Punishers"
    >
      <Section title="b+1+3 — Punch Parry">
        <MoveCard
          input="b+1+3"
          tags={['parry', 'punches only']}
          description={
            <>
              Parries high or mid <strong>punches only</strong> (attacks using 1 or 2). On successful parry, 
              you can follow up with b+1+3,2 for a counter hit launcher (True Dark Smash)!
            </>
          }
          stats={{
            startup: 'i17',
          }}
        />

        <TipBox title="Parry Follow-up">
          <p>
            After a successful parry, immediately input <strong>b+1+3,2</strong> for True Dark Smash. 
            This is guaranteed and launches for a full combo!
          </p>
        </TipBox>
      </Section>

      <Section title="f+3+4 — Stance Parry">
        <MoveCard
          input="f+3+4"
          tags={['parry', 'stance']}
          description={
            <>
              Enters Bad Jaguar stance while parrying mid and high <strong>punches</strong>. Cannot block 
              in this stance. On successful parry, follow up with f+3+4,P for a special stun that makes 
              throws unbreakable!
            </>
          }
          stats={{
            startup: 'i25-34',
          }}
        />

        <KeyConcept title="Stance Parry Follow-up" icon="🔑">
          <p>After f+3+4 parries a punch, press <strong>P</strong> (any punch button) for a special stun:</p>
          <ul>
            <li>Opponent is stunned</li>
            <li><strong>Throws become unbreakable</strong> for the stun duration!</li>
            <li>Perfect setup for Giant Swing or Tombstone</li>
          </ul>
        </KeyConcept>
      </Section>

      <TipBox title="Parries Only Work on Punches" variant="warning">
        <p>
          Both parries only catch punches (attacks using 1 or 2). They will NOT parry kicks, knees, 
          elbows, or weapon attacks.
        </p>
      </TipBox>

      <Section title="When to Use Parries">
        <p>Parries are risky but rewarding:</p>
        <ul>
          <li><strong>Against predictable strings</strong> — If they always do 1,2,1, parry the second hit</li>
          <li><strong>As a read</strong> — When you think they'll press a button</li>
          <li><strong>At the wall</strong> — Parry → unbreakable throw is devastating</li>
          <li><strong>Don't spam</strong> — They're reactable and punishable if whiffed</li>
        </ul>
      </Section>

      <PracticeBox
        title="Parry Practice"
        setup="Set dummy to After Block → 1 (jab). Block the first move, then parry the follow-up jab."
        tasks={[
          { id: 'ch14-b13', text: 'Parry a jab with b+1+3', detail: 'Practice the timing', type: 'counter', target: 10 },
          { id: 'ch14-b132', text: 'Parry → b+1+3,2 (True Dark Smash)', detail: 'Practice the follow-up after parry', type: 'counter', target: 10 },
          { id: 'ch14-f34', text: 'Parry with f+3+4', detail: 'Enter stance parry', type: 'counter', target: 5 },
          { id: 'ch14-f34p', text: 'f+3+4 parry → P → Giant Swing', detail: 'Unbreakable throw setup', type: 'counter', target: 5 },
        ]}
      />

      <Quiz
        question="Your opponent keeps doing 1,2,1 strings. What's the best way to counter this?"
        options={[
          { text: 'Always block and punish', isCorrect: false },
          { text: 'Parry the second hit with b+1+3, then do b+1+3,2', isCorrect: true },
          { text: 'Duck the whole string', isCorrect: false },
          { text: 'Sidestep and whiff punish', isCorrect: false },
        ]}
        correctFeedback="Correct! If they're doing predictable punch strings, parry the second hit with b+1+3, then immediately do b+1+3,2 for True Dark Smash. This launches for a full combo!"
        incorrectFeedback="Not quite. While blocking and punishing works, parrying predictable punch strings with b+1+3 gives you a guaranteed True Dark Smash (b+1+3,2) which launches for massive damage!"
      />
    </Chapter>
  )
}
