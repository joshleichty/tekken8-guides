import { Chapter, Section } from '../../../components/guide'
import { ConceptBuilder, DecisionGrid, MoveCard, PracticeBox, TipBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="Your Entry Buttons"
      intro="These are your real openers. Use them to reach DES while staying fundamentally solid."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Build DES Pressure"
    >
      <Section title="The Theory Behind Entry Buttons">
        <p>
          These moves are not just “good buttons.” They each solve a specific problem in Alisa's progression.
          <strong> df+1</strong> keeps neutral honest, <strong>f+2</strong> advances safely, and <strong>uf+2</strong>
          denies movement. Together, they create controlled entries into DES.
        </p>
        <p>
          If Chapter 1 taught the win condition, this chapter teaches the doorway into it. Your pressure only becomes
          scary when opponents feel they have to respect your grounded buttons first. That is the theme here:
          build respect, then transition.
        </p>

        <ConceptBuilder
          title="From Neutral to Pressure"
          subtitle="How Chapter 2 builds directly on Chapter 1"
          foundation={[
            { label: 'Neutral control', input: 'df+1 / b+1', description: 'Win first contact safely' },
            { label: 'Timing checks', input: 'df+1,4', description: 'Punish predictable mash patterns' },
          ]}
          newAddition={{
            label: 'Earned stance transition',
            input: 'f+2 -> DES',
            description: 'Only enter stance after establishing neutral respect',
          }}
          result="Your DES entries become credible, harder to interrupt, and more repeatable over long sets."
        />
      </Section>

      <Section title="Neutral Buttons That Start Everything">
        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            startup: 'i13',
            onBlock: '-6',
            onHit: '+5',
            onCH: '+8',
            tags: ['mid', 'poke'],
            description: 'Your safest mid check. Use it to lock turns and test mash timing.',
            notes: ['Use as your default range-1 button.', 'Condition with df+1 before committing to extensions.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'df+1,4',
            hitLevel: ['m', 'm'],
            startup: 'i13',
            onBlock: '-11',
            onHit: '+3',
            onCH: '+13',
            tags: ['mid', 'extension', 'heat engager'],
            description: 'Counter-hit callout extension. Strong when opponents challenge your df+1 rhythm.',
            notes: ['On CH, confirm into 3,2 for Heat conversion.', 'Do not overuse on block.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'f+2',
            hitLevel: ['m'],
            startup: 'i17',
            onBlock: '-4',
            onHit: '+7',
            tags: ['mid', 'approach'],
            description: 'Excellent advancing mid that naturally sets up DES transitions.',
            notes: ['Press 1+2 after f+2 routes to enter DES when spacing is right.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'uf+2',
            hitLevel: ['h'],
            startup: 'i16',
            onBlock: '-2',
            onHit: '+20a',
            tags: ['homing', 'heat engager', 'keepout'],
            description: 'Homing Heat engager. Use to deny side-step plus start offense.',
            notes: ['Very strong at range 1.5 as a movement check.', 'Transition into DES pressure after engage.'],
          }}
        />
      </Section>

      <Section title="When to Enter DES">
        <DecisionGrid
          title="Safe Entry Checklist"
          rows={[
            {
              situation: 'You hit f+2 or 3,2 at mid range',
              response: 'Take DES transition',
              reason: 'You earned tempo and can start chip/mix safely.',
              risk: 'Overextending if spacing is poor.',
            },
            {
              situation: 'Opponent is mashing after light minus',
              response: 'Stay in neutral and frame trap first',
              reason: 'Raw DES entry loses to interruption.',
              risk: 'You delay your pressure phase.',
            },
            {
              situation: 'Opponent freezes after blocking approach',
              response: 'Use running pressure then DES',
              reason: 'Layered entry is harder to challenge.',
              risk: 'Predictable running timings can be ducked.',
            },
          ]}
        />

        <TipBox variant="tip" title="Use One Layer Before Stance">
          If your first action is always stance, opponents prepare for it. Use one clean poke first, then transition.
        </TipBox>
      </Section>

      <Section title="Drill: Entry Discipline">
        <PracticeBox
          title="Only Earned Entries"
          setup="CPU Guard Random, record jab mash after block in one slot"
          tasks={[
            {
              id: 'alisa-entry-1',
              text: 'Land f+2 into DES safely 10 times',
              type: 'counter',
              target: 10,
            },
            {
              id: 'alisa-entry-2',
              text: 'Use uf+2 to catch 5 sidesteps',
              type: 'counter',
              target: 5,
            },
            {
              id: 'alisa-entry-3',
              text: 'Do not raw DES entry for one full round',
              type: 'toggle',
            },
          ]}
        />
        <p>
          When this chapter clicks, you will notice one big change in matches: your stance entries stop feeling like a
          gamble and start feeling like a reward for good neutral.
        </p>
      </Section>
    </Chapter>
  )
}
