import { Chapter, Section } from '../../../components/guide'
import { MoveCard, SpacingGame, DecisionGrid, TipBox, ExecutionBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Make It Miss"
      intro="Kazuya’s neutral is not about being busy. It is about creating a whiff and cashing out."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Learn The Oki Tax"
    >
      <Section title="The Whiff Punish King">
        <MoveCard
          character="kazuya"
          move={{
            input: 'f,n,d,df+2',
            hitLevel: ['h'],
            damage: '23',
            startup: 'i14',
            onBlock: '+5',
            onHit: '+39a',
            tags: ['Launcher', 'Whiff Punish'],
            description: 'EWGF is the best whiff punish in the game. If they swing and miss, they pay.',
          }}
          showVideo
        />
      </Section>

      <Section title="Approach Tool: Devil Fist">
        <MoveCard
          character="kazuya"
          move={{
            input: 'f,f+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i16',
            onBlock: '-9',
            onHit: '+13c',
            tags: ['Mid', 'Heat Engager'],
            description: 'Long-range mid that advances and starts heat. Use after a whiff or hesitation.',
          }}
          videoId="f,F+2"
          showVideo
        />

        <TipBox variant="tip" title="Spacing First">
          Devil Fist is safest when you are already at mid range. Dash-block first, then swing.
        </TipBox>
      </Section>

      <Section title="Stop Sidesteps: b+4">
        <MoveCard
          character="kazuya"
          move={{
            input: 'b+4',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i17',
            onBlock: '-5',
            onHit: '+16g',
            tags: ['Homing', 'Heat Engager'],
            description: 'Homing engager that keeps side-steppers honest.',
          }}
          showVideo
        />
      </Section>

      <Section title="Decision Map">
        <DecisionGrid
          title="Neutral Choices"
          rows={[
            {
              situation: 'Opponent swings and whiffs',
              response: 'EWGF',
              reason: 'Max damage and knockdown',
              risk: 'If late, you lose your turn'
            },
            {
              situation: 'Opponent freezes at mid range',
              response: 'f,f+2',
              reason: 'Safe approach that starts heat',
              risk: 'If they sidestep, you whiff'
            },
            {
              situation: 'Opponent sidesteps repeatedly',
              response: 'b+4',
              reason: 'Homing heat engager',
              risk: 'High attack; can be ducked if predictable'
            },
          ]}
        />
      </Section>

      <Section title="Wave Dash Entry">
        <ExecutionBox title="The Entry Motion" icon="🧭">
          <p>
            Crouch Dash is <code>f,n,d,df</code>. Repeating it creates wave dash. 
            Wave dash is how you force the 50/50 at the right range.
          </p>
        </ExecutionBox>
      </Section>

      <Section title="Spacing Game">
        <SpacingGame
          title="Hold Range 2"
          description="Kazuya wins when he is in mid range. Your goal is to stay there, bait, and punish."
          targetRange="Mid"
          ranges={[
            {
              name: 'Close',
              description: 'Jab range. Stabilize with 1 and df+1, then step out.',
              yourTools: ['1', 'df+1', 'sidestep'],
              danger: 'You have no panic tools here.'
            },
            {
              name: 'Mid',
              description: 'Ideal range. ff3, f,f+2, and EWGF all reach.',
              yourTools: ['EWGF', 'f,F+3', 'f,F+2'],
            },
            {
              name: 'Far',
              description: 'Outside of threat range. Close distance with movement only.',
              yourTools: ['dash block', 'wave dash'],
              danger: 'Whiffing here loses rounds.'
            },
          ]}
          cpuBehavior="CPU on Guard: Stand, occasional sidestep"
          successMetric="Whiff punish with EWGF or f,f+2"
          duration="6 minutes"
          tips={[
            'Dash-block in, then wait for the swing.',
            'Do not press ff3 unless they freeze.'
          ]}
          whyThisMatters="If you control mid range, your vortex begins on your terms."
        />
      </Section>
    </Chapter>
  )
}
