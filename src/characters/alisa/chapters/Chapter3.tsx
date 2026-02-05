import { Chapter, Section } from '../../../components/guide'
import { Flowchart, MoveCard, PracticeBox, TipBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="DES Pressure Engine"
      intro="DES is where Alisa snowballs. Your goal is not random strings. Your goal is forcing repeated, uncomfortable decisions with chip and frame traps."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Add DBT Mixups"
    >
      <Section title="How DES Pressure Actually Works">
        <p>
          DES is not about dumping strings. It is about stacking small advantages until the opponent feels trapped
          between bad choices. Plus highs force respect, mids punish ducking, lows punish over-blocking, and homing
          checks punish escape attempts.
        </p>
        <p>
          Think of this chapter as learning the rhythm of pressure: ask one question at a time, read the answer, then
          ask a better question.
        </p>
      </Section>

      <Section title="Core DES Buttons">
        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'DES.f+1',
            videoId: 'DES.f+1',
            hitLevel: ['h'],
            startup: 'i11',
            onBlock: '+3',
            onHit: '+9',
            tags: ['stance', 'plus on block', 'chip'],
            description: 'Fast plus high that keeps DES offense looping.',
            notes: ['Primary pressure starter in DES.', 'Condition with this before using lows.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'DES.1',
            videoId: 'DES.1',
            hitLevel: ['m'],
            startup: 'i13',
            onBlock: '-9',
            onHit: '+17a',
            tags: ['stance', 'mid', 'frame trap'],
            description: 'Mid answer to opponents trying to duck your DES high pressure.',
            notes: ['Great callout once they start ducking DES.f+1.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'DES.d+1',
            videoId: 'DES.d+1',
            hitLevel: ['l'],
            startup: 'i20',
            onBlock: '-13',
            onHit: '+4',
            tags: ['stance', 'low', 'chip'],
            description: 'Main DES low to force crouch commitment and stop passive guarding.',
            notes: ['Use after plus pressure, not raw.', 'Punishable but rewarding over time.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'DES.1+2',
            videoId: 'DES.1+2',
            hitLevel: ['h'],
            startup: 'i16',
            onBlock: '+4',
            onHit: '+15g',
            tags: ['stance', 'homing', 'plus on block'],
            description: 'Homing pressure tool that stops sidestep attempts during chainsaw offense.',
            notes: ['Best used when opponent starts stepping DES.f+1 patterns.'],
          }}
        />
      </Section>

      <Section title="Pressure Flow">
        <Flowchart
          title="DES Loop"
          startNode="Enter DES from Heat engager or f+2 route"
          middleNode="Use DES.f+1 as first check"
          branches={[
            { label: 'They stand still', action: 'DES.d+1 then reset with movement' },
            { label: 'They duck early', action: 'DES.1 for mid interruption' },
            { label: 'They step', action: 'DES.1+2 to recapture axis' },
          ]}
        />

        <TipBox variant="warning" title="One Rule: Do Not Empty the Clip">
          If your full DES sequence gets blocked, disengage and re-enter later. Alisa is strongest when pressure is
          layered, not dumped all at once.
        </TipBox>
      </Section>

      <Section title="Drill: Three-Layer DES">
        <PracticeBox
          title="Layered Offense Reps"
          setup="Set guard random. Record one opponent duck and one sidestep after DES.f+1."
          tasks={[
            {
              id: 'alisa-des-1',
              text: 'Hit confirm 15 DES.f+1 contacts (block or hit)',
              type: 'counter',
              target: 15,
            },
            {
              id: 'alisa-des-2',
              text: 'Punish 5 ducks with DES.1',
              type: 'counter',
              target: 5,
            },
            {
              id: 'alisa-des-3',
              text: 'Stop 5 sidesteps with DES.1+2',
              type: 'counter',
              target: 5,
            },
          ]}
        />
      </Section>
    </Chapter>
  )
}
