import { Chapter, Section } from '../../../components/guide'
import { MoveCard, DecisionGrid, TipBox, MatchScenario, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Punish Architecture"
      intro="Kazuya is balanced around punishment. If you do not punish, you do not get to play your character."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Enter Electric School"
    >
      <Section title="Standing Punish: 1,1,2">
        <MoveCard
          character="kazuya"
          move={{
            input: '1,1,2',
            hitLevel: ['h', 'h', 'm'],
            damage: '5, 6, 14',
            startup: 'i10',
            onBlock: '-17',
            onHit: '+20a',
            tags: ['Punish', 'Knockdown'],
            description: 'Your default -10 punish. This is how you start okizeme.',
          }}
          showVideo
        />
      </Section>

      <Section title="Low Punish: ws1,2">
        <MoveCard
          character="kazuya"
          move={{
            input: 'ws1,2',
            hitLevel: ['m', 'm'],
            damage: '10, 12',
            startup: 'i13',
            onBlock: '-12',
            onHit: '+73a',
            tags: ['Launcher', 'Punish'],
            description: 'Your default low-block punish. Converts into a full combo.',
          }}
          videoId="ws1,2"
          showVideo
        />
      </Section>

      <Section title="Maximum Punish: EWGF">
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
            description: 'Your best punish and whiff punish. The move that defines Kazuya.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="Fallback If You Miss">
          If EWGF is not consistent yet, use <strong>df+2</strong> as a safe launcher. 
          It is worse, but it keeps you from losing the punish entirely.
        </TipBox>
      </Section>

      <Section title="Decision Map">
        <DecisionGrid
          title="Punish Bands"
          rows={[
            {
              situation: 'You block a -10 move',
              response: '1,1,2',
              reason: 'Fastest knockdown punish',
              risk: 'If you hesitate, you lose the punish'
            },
            {
              situation: 'You block an unsafe low',
              response: 'ws1,2',
              reason: 'Launcher into full combo',
              risk: 'If you stand too early, you miss the punish'
            },
            {
              situation: 'They whiff in front of you',
              response: 'EWGF',
              reason: 'Max reward whiff punish',
              risk: 'If late, you get clipped'
            },
          ]}
        />
      </Section>

      <Section title="Match Scenario">
        <MatchScenario
          title="Blocked Low"
          situation="You block a slow low that leaves them unsafe."
          context="You are crouching after block."
          options={[
            { action: 'Stand guard', result: 'You give up your punish.' },
            { action: 'While standing launcher', input: 'ws1,2', result: 'Full combo conversion.', isOptimal: true, followup: 'Run your combo route.' },
            { action: 'Quick mid', input: 'ws4', result: 'Safe but lower reward.' },
          ]}
          keyTakeaway="If you block an unsafe low, ws1,2 is your default answer."
        />
      </Section>

      <Section title="Quick Quiz">
        <Quiz
          question="You block a -10 move. What is your default punish?"
          options={[
            { text: 'EWGF', isCorrect: false },
            { text: '1,1,2', isCorrect: true },
            { text: 'df+2', isCorrect: false },
          ]}
          correctFeedback="Correct. 1,1,2 is your 10f punish and gives knockdown."
          incorrectFeedback="Not quite. Save EWGF for bigger punish windows."
        />
      </Section>
    </Chapter>
  )
}
