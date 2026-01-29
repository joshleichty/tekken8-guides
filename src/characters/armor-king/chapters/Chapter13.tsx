import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, Flowchart, SituationCard, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter13({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={13}
      title="Oki & Ground Game"
      intro="Armor King's oki (wake-up pressure) is among the best in the game. Ground throws, stomps, and shoulder setups make getting up a nightmare for your opponent."
      onPrevious={() => goToChapter(12)}
      onNext={() => goToChapter(14)}
      nextLabel="Continue to Parries"
    >
      <Section title="Ground Throws">
        <p>When your opponent is on the ground, you can throw them!</p>

        <MoveCard character="armor-king"
          input="db+1+3 (face up opponent)"
          tags={['throw', 'ground throw']}
          variant="throw"
          description="Ground throw for face up opponents. 35-40 damage depending on position. Sets up more oki."
        showVideo
        />

        <MoveCard character="armor-king"
          input="db+2+4 (any position)"
          tags={['throw', 'ground throw']}
          variant="throw"
          description={
            <>
              Picks opponent up and puts them back on their feet at <span className="highlight">+12</span>! 
              From +12, b+1,2 is guaranteed for more damage and Bad Jaguar entry!
            </>
          }
        showVideo
        />

        <KeyConcept title="db+2+4 is Amazing!" icon="🔑">
          <p>db+2+4 puts opponent on feet at +12. This means:</p>
          <ul>
            <li><strong>b+1,2</strong> is guaranteed (12f startup)</li>
            <li>Hold F after b+1,2 for Bad Jaguar at +8</li>
            <li>At wall, this loops into terrifying pressure!</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Stomp: d+4,4,3+4">
        <MoveCard character="armor-king"
          input="d+4,4,3+4"
          tags={['low', 'low', 'mid']}
          description="The multi-hit stomp! Hits grounded opponents. Guaranteed after CD1 hit. Floor breaks on the last hit."
        showVideo
        />
      </Section>

      <Section title="BAD db+1+2 — Grounded Tackle">
        <MoveCard character="armor-king"
          input="BAD db+1+2"
          tags={['throw', 'stance']}
          variant="throw"
          description="From Bad Jaguar stance, tackles grounded or airborne opponents. High crushes and hits grounded!"
        showVideo
        />
      </Section>

      <Section title="f+1+4 — The Shoulder">
        <MoveCard character="armor-king"
          input="f+1+4"
          tags={['mid']}
          description="Use when they try to get up with attacks. The shoulder catches wake-up kicks. Also guaranteed after ub+1 hit!"
        showVideo
        />
      </Section>

      <Section title="Oki Decision Tree">
        <Flowchart
          title="What to Do After Knockdown"
          startNode="Opponent is knocked down"
          branches={[
            { label: 'They Stay Down', action: 'db+2+4 (pick up, +12) or d+4,4,3+4 (stomp)' },
            { label: 'They Roll', action: 'Chase and re-pressure or ff+2 (CH launcher)' },
            { label: 'They Wake-Up Kick', action: 'Block → punish, or f+1+4 through it' },
            { label: 'They Quick Stand', action: 'Throw mixup or CH tool' },
          ]}
        />
      </Section>

      <Section title="Wall Oki">
        <p>At the wall, your oki becomes even scarier:</p>

        <SituationCard title="Wall Oki Setup">
          <ul>
            <li><strong>db+2+4</strong> → b+1,2~F → BAD mixup</li>
            <li>If they stay down: stomp or ground throw</li>
            <li>If they tech roll into wall: f+1+4 wallsplats!</li>
            <li>Wall Giant Swing is unbreakable!</li>
          </ul>
        </SituationCard>
      </Section>

      <PracticeBox
        title="Oki Practice — Ground Game"
        setup="Set dummy to No Guard. Knock them down with CD2, then practice oki options."
        tasks={[
          { id: 'ch13-db24', text: 'Knock down → db+2+4 (pick up throw)', detail: 'Practice timing the ground throw', type: 'counter', target: 10 },
          { id: 'ch13-stomp', text: 'Knock down → d+4,4,3+4 (stomp)', detail: 'Multi-hit stomp on grounded opponent', type: 'counter', target: 10 },
          { id: 'ch13-db24b12', text: 'db+2+4 → b+1,2~F → BAD', detail: 'The oki loop: pick up → punish → stance', type: 'counter', target: 10 },
          { id: 'ch13-shoulder', text: 'After ub+1 hit → f+1+4 (shoulder)', detail: 'Guaranteed shoulder after ub+1 knockdown', type: 'counter', target: 10 },
        ]}
      />

      <Quiz
        question="You knock down your opponent and they stay on the ground. What's the best oki option?"
        options={[
          { text: 'Wait for them to get up and throw', isCorrect: false },
          { text: 'db+2+4 — picks them up at +12 for guaranteed b+1,2', isCorrect: true },
          { text: 'Just backdash and reset', isCorrect: false },
          { text: 'Do another launcher', isCorrect: false },
        ]}
        correctFeedback="Correct! db+2+4 picks them up and leaves you at +12, which guarantees b+1,2. This leads to Bad Jaguar at +8 for even more pressure. It's one of AK's best oki tools!"
        incorrectFeedback="Not quite. db+2+4 is amazing because it picks them up at +12, guaranteeing b+1,2 which leads to Bad Jaguar. This creates a pressure loop that's very hard to escape!"
      />
    </Chapter>
  )
}
