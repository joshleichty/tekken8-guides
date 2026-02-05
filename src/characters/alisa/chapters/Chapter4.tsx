import { Chapter, Section } from '../../../components/guide'
import { MatchScenario, MoveCard, TipBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="DBT Mixups That Matter"
      intro="DBT is your chase layer when DES pushback creates distance. Use it to keep offense alive without getting reckless."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Stabilize Neutral"
    >
      <Section title="DBT as Pursuit, Not Roulette">
        <p>
          DBT matters because real opponents eventually create space from DES pushback. This stance is your pursuit
          layer, not a random coin flip layer. You use it to keep your turn alive when neutral would otherwise reset.
        </p>
        <p>
          The key theory: start with stable mids so they hesitate, then tax that hesitation with lows. DBT is strongest
          when it is a continuation of your earlier pressure story.
        </p>
      </Section>

      <Section title="Primary DBT Options">
        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'DBT.1+2',
            videoId: 'DBT.1+2',
            hitLevel: ['m'],
            startup: 'i12',
            onBlock: '+0',
            onHit: '+21a',
            tags: ['stance', 'mid', 'chip'],
            description: 'Reliable mid check with strong chip and safe pressure continuation.',
            notes: ['Default when you need low risk and control.', 'Great at catching impatient challenges.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'DBT.3',
            videoId: 'DBT.3',
            hitLevel: ['l'],
            startup: 'i16',
            onBlock: '-14',
            onHit: '+4c',
            onCH: '+28a',
            tags: ['stance', 'low'],
            description: 'Fast low to make DBT mids meaningful.',
            notes: ['Use when opponent over-guards after DBT approach.', 'Do not spam into low parry habits.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'DBT.2,1',
            videoId: 'DBT.2,1',
            hitLevel: ['m', 'h'],
            startup: 'i16',
            onBlock: '-11c',
            onHit: '+14a',
            tags: ['stance', 'spike', 'wall carry'],
            description: 'Rewarding follow-through route when you commit to damage and carry.',
            notes: ['Use sparingly as a read, not autopilot.'],
          }}
        />
      </Section>

      <Section title="Applied Guessing Game">
        <MatchScenario
          title="You Entered DBT at Mid Screen"
          situation="Opponent blocked your DES sequence and is now looking for your next layer."
          context="You need to keep pressure without giving a launch for free."
          options={[
            {
              action: 'Use DBT.1+2',
              input: 'DBT.1+2',
              result: 'Safe chip and continued control. Keeps game stable.',
              isOptimal: true,
              followup: 'Re-check with movement or re-enter DES later.',
            },
            {
              action: 'Force DBT.3 immediately every time',
              input: 'DBT.3',
              result: 'Works once, then gets low-parried when pattern is obvious.',
            },
            {
              action: 'Commit to DBT.2,1 constantly',
              input: 'DBT.2,1',
              result: 'Big reward when right, but punishable rhythm if repeated.',
            },
          ]}
          keyTakeaway="DBT is best as a weighted mix: stable mids first, lows as punctuation, commitment routes as reads."
        />

        <TipBox variant="tip" title="Design the Opponent's Fear">
          If they fear your mid, your low works. If they fear your low, your mid racks chip. That is the entire DBT plan.
        </TipBox>
      </Section>
    </Chapter>
  )
}
