import { Chapter, Section } from '../../../components/guide'
import { ConstraintPlay, DecisionGrid, MoveCard, TipBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Neutral and Low Game"
      intro="Your neutral wins come from compact mids plus annoying, low-risk lows. This chapter makes your Alisa hard to approach and hard to block."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Build Punish Consistency"
    >
      <Section title="Why This Chapter Is the Backbone">
        <p>
          This is the chapter that decides whether your Alisa is fundamentally strong or just explosive when things go
          right. Neutral and low game are what let you start offense on your terms instead of hoping for mistakes.
        </p>
        <p>
          If you feel stuck in ranked, it is usually not because your chainsaw layer is weak. It is because your pre-stance
          game is predictable. This chapter fixes that.
        </p>
      </Section>

      <Section title="Low and Mid Spine">
        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'd+4',
            hitLevel: ['l'],
            startup: 'i17',
            onBlock: '-12',
            onHit: '-1',
            onCH: '+8g',
            tags: ['low', 'poke'],
            description: 'Fast, repeatable low poke to keep defensive players occupied.',
            notes: ['Use in small doses to set up mids.', 'At wall, extension becomes dangerous.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'd+4,1+2',
            hitLevel: ['l', 'h'],
            startup: 'i17',
            onBlock: '+0',
            onHit: '+11a',
            tags: ['low', 'extension', 'wall splat'],
            description: 'Season 2 jail pressure extension that punishes delayed retaliation.',
            notes: ['Strong wall threat.', 'Condition with single d+4 before using extension.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'db+3',
            hitLevel: ['l'],
            startup: 'i16',
            onBlock: '-13',
            onHit: '-2',
            onCH: '+3',
            tags: ['low', 'high crush'],
            description: 'Slightly riskier low, but better for clipping highs and rhythm checks.',
            notes: ['Use when opponent challenges with jab after your pressure reset.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'b+1',
            hitLevel: ['m'],
            startup: 'i15',
            onBlock: '-5',
            onHit: '+8',
            tags: ['mid', 'poke'],
            description: 'Reliable mid check with range and momentum control.',
            notes: ['Good at clipping movement after backdash cancel timing.'],
          }}
        />
      </Section>

      <Section title="Decision Layering">
        <DecisionGrid
          title="Low-Mid Sequence Builder"
          rows={[
            {
              situation: 'Opponent stands still and blocks mids',
              response: 'd+4, then d+4,1+2',
              reason: 'First low establishes annoyance, extension punishes delayed response.',
              risk: 'If they hard duck early, extension loses.',
            },
            {
              situation: 'Opponent mashes jab after reset',
              response: 'db+3 or b+1',
              reason: 'db+3 crushes highs, b+1 checks slower retaliation.',
              risk: 'db+3 is punishable at -13.',
            },
            {
              situation: 'Opponent starts crouching often',
              response: 'Lean into df+1 and f+2 mids',
              reason: 'Cash out their anti-low adaptation.',
              risk: 'Need patience to avoid overcommitting.',
            },
          ]}
        />
      </Section>

      <Section title="Constraint Drill">
        <ConstraintPlay
          title="Three-Button Neutral"
          description="Play two rounds using only neutral checks that represent Alisa fundamentals."
          allowedMoves={[
            { input: 'df+1', purpose: 'Primary mid check and turn control' },
            { input: 'd+4', purpose: 'Low poke for life lead pressure' },
            { input: 'b+1', purpose: 'Range-based mid interruption' },
          ]}
          duration="8 minutes"
          goal="Win one full round without using stance transitions."
          whatYouLearn={[
            'How Alisa wins without gimmicks',
            'How to create stance entries from fundamentals',
            'When your lows are actually earning value',
          ]}
          setup={{ cpuBehavior: 'Defend then attack', rounds: 3 }}
          progressionHint="After this is stable, add f+2 into DES entry as your fourth button."
        />

        <TipBox variant="tip" title="If Neutral Is Weak, Stance Is Fake">
          The fastest way to improve Alisa is improving pre-stance neutral. Keep this drill in your weekly routine.
        </TipBox>
      </Section>
    </Chapter>
  )
}
