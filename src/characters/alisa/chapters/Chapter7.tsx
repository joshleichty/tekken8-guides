import { Chapter, Section } from '../../../components/guide'
import { DecisionGrid, MoveCard, PracticeBox, TipBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Heat Conversion Plan"
      intro="Alisa's Heat is about one thing: making chainsaw chip oppressive. Enter Heat with a route, not a panic button."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Wall and Oki"
    >
      <Section title="Heat as a Story, Not a Button">
        <p>
          Heat should feel like Act 2 of your round, not a panic mechanic. You have already built context with neutral
          and pressure; Heat is where that context gets amplified through chip and forced decisions.
        </p>
        <p>
          The best Alisa Heat usage is disciplined: enter with purpose, spend it where guard pressure matters most, and
          avoid burning resources in situations that do not advance your win condition.
        </p>
      </Section>

      <Section title="Best Heat Starters">
        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: '1+2',
            hitLevel: ['m'],
            startup: 'i19',
            onBlock: '-4',
            onHit: '+15a',
            tags: ['heat engager', 'mid'],
            description: 'Simple safe Heat engager from neutral control range.',
            notes: ['Reliable when you need guaranteed Heat access.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'f+2,1',
            hitLevel: ['m', 'm'],
            startup: 'i17',
            onBlock: '-12',
            onHit: '+14c',
            tags: ['heat engager', 'approach'],
            description: 'Longer-range engager route that naturally drives offense forward.',
            notes: ['Pair with movement so this does not become predictable.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'DES.f+2,1,2',
            videoId: 'DES.f+2,1,2',
            hitLevel: ['m', 'm', 'm'],
            startup: 'i15',
            onBlock: '-13',
            onHit: '+30d',
            tags: ['stance', 'heat engager', 'chip'],
            description: 'Stance engager that chunks guard and amplifies your Heat pressure loop.',
            notes: ['Great when opponent respects early DES layer.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'H.2+3',
            videoId: 'H.2+3',
            hitLevel: ['m'],
            startup: 'i20',
            onBlock: '+8',
            onHit: '-15d',
            tags: ['heat smash'],
            description: 'Heat Smash to force plus frames and transition options.',
            notes: ['Use to close rounds or force last defensive guess.'],
          }}
        />
      </Section>

      <Section title="How to Spend Heat">
        <DecisionGrid
          title="Heat Budget Rules"
          rows={[
            {
              situation: 'You have life lead and wall position',
              response: 'Spend Heat on chip loops (DES.f+1 / DES.1+2)',
              reason: 'Force guard damage and deny comeback attempts.',
              risk: 'Overextending can still get stepped/ducked.',
            },
            {
              situation: 'You are behind and need swing momentum',
              response: 'Use Heat engager into immediate pressure',
              reason: 'Alisa converts one touch into sustained offense quickly.',
              risk: 'If entry is blocked poorly, momentum is lost.',
            },
            {
              situation: 'Opponent near death with Rage available',
              response: 'Use safe chip string before Heat Smash',
              reason: 'Chip narrows Rage threat and limits armor options.',
              risk: 'Telegraphed Smash can be defended or avoided.',
            },
          ]}
        />

        <PracticeBox
          title="Heat Route Reps"
          setup="Start each rep with Heat on, guard random"
          tasks={[
            { id: 'alisa-heat-1', text: 'Trigger Heat from 1+2 ten times', type: 'counter', target: 10 },
            { id: 'alisa-heat-2', text: 'Land DES.f+2,1,2 Heat engager five times', type: 'counter', target: 5 },
            { id: 'alisa-heat-3', text: 'Close 3 rounds using chip before Heat Smash', type: 'counter', target: 3 },
          ]}
        />

        <TipBox variant="tip" title="Heat Is a Pressure Multiplier">
          Treat Heat as a way to make your existing gameplan deadlier, not as a separate gameplan.
        </TipBox>
      </Section>
    </Chapter>
  )
}
