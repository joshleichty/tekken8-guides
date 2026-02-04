import { Chapter, Section } from '../../../components/guide'
import { MoveCard, TipBox, DecisionGrid, PracticeBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Hold Them Still"
      intro="Kazuya’s mixup only works if the opponent is forced to hesitate. These are the tools that slow them down."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Learn To Make Them Miss"
    >
      <Section title="Speed Limit: Jab (1)">
        <MoveCard
          character="kazuya"
          move={{
            input: '1',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '+1',
            onHit: '+8',
            tags: ['High', 'Plus on Block'],
            description: 'Your fastest check. +1 on block means your next action wins the exchange.',
          }}
          showVideo
        />
      </Section>

      <Section title="Mid Check: df+1">
        <MoveCard
          character="kazuya"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '11',
            startup: 'i15',
            onBlock: '-7',
            onHit: '+9',
            tags: ['Mid', 'Poke'],
            description: 'Your stable mid. Use it when they crouch or try to sidestep.',
          }}
          showVideo
        />
      </Section>

      <Section title="Low Check: db+4">
        <MoveCard
          character="kazuya"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '18',
            startup: 'i20',
            onBlock: '-12',
            onHit: '+4',
            tags: ['Low', 'Plus on Hit'],
            description: 'Your best low poke. On hit you are +4, which sets up frame traps.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="db+4 → df+2">
          After db+4 hits, df+2 will beat most jabs. This is your simplest trap.
        </TipBox>
      </Section>

      <Section title="Emergency Turn-Take: d+1">
        <MoveCard
          character="kazuya"
          move={{
            input: 'd+1',
            hitLevel: ['sl'],
            damage: '5',
            startup: 'i10',
            onBlock: '-5',
            onHit: '+6',
            tags: ['Low', 'Evasive'],
            description: 'A quick low to steal a turn. Use sparingly; it is a commitment.',
          }}
          showVideo
        />
      </Section>

      <Section title="Decision Map">
        <DecisionGrid
          title="Keep Them Still"
          rows={[
            {
              situation: 'Opponent is holding back and waiting',
              response: 'db+4',
              reason: 'Forces them to react and opens traps',
              risk: 'If they read it, you take damage'
            },
            {
              situation: 'Opponent is twitch-ducking',
              response: 'df+1',
              reason: 'Stops crouching without huge commitment',
              risk: 'You lose your turn if blocked'
            },
            {
              situation: 'Opponent is pressing after block',
              response: '1',
              reason: 'Fastest check and +1 on block',
              risk: 'If they step, you whiff'
            },
          ]}
        />
      </Section>

      <Section title="Practice: Three Checks">
        <PracticeBox
          title="Hold Them Still Drill"
          setup="CPU Guard All, Random Counter Hit Off"
          tasks={[
            { id: 'jab', text: 'Land 10 jab checks without getting counter-hit', type: 'counter', target: 10 },
            { id: 'df1', text: 'Land 10 df+1 checks from mid range', type: 'counter', target: 10 },
            { id: 'db4', text: 'Hit db+4 then confirm a frame trap 5 times', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
