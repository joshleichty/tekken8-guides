import { Chapter, Section } from '../../../components/guide'
import { ProgressMilestone, SkillCheck, DrillMode, TipBox, DecisionGrid } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="The Long Set"
      intro="Kazuya is not about single games. He is about sets. Your win condition is to adapt faster than they can."
      onPrevious={() => goToChapter(11)}
      hasNext={false}
    >
      <Section title="Progress Milestones">
        <ProgressMilestone
          title="Kazuya Progression"
          steps={[
            { id: 'foundation', label: 'Foundation', description: '1,1,2 punish + ff3 / hellsweep mix' },
            { id: 'vortex', label: 'Vortex Control', description: 'Oki decisions are automatic' },
            { id: 'electric', label: 'Electric Consistency', description: 'EWGF reliable on both sides' },
            { id: 'setplay', label: 'Set Adaptation', description: 'You can read and adjust between games' },
          ]}
        />
      </Section>

      <Section title="Skill Check">
        <SkillCheck
          title="Are You Match-Ready?"
          subtitle="Check off what you can do consistently."
          skills={[
            { id: 'punish', skill: 'React 1,1,2 to -10', description: 'No hesitation' },
            { id: 'ws', skill: 'Block a low → ws1,2 launcher', description: 'Automatic response' },
            { id: 'ewgf', skill: '10 clean electrics in a row', description: 'Both sides' },
            { id: 'oki', skill: 'Punish get-up kicks', description: 'Block → launch punish' },
            { id: 'mix', skill: 'Run ff3 / hellsweep mix without autopilot', description: 'Adapt based on their habits' },
          ]}
          requiredToPass={4}
        />
      </Section>

      <Section title="Decision Map: Adapting in a Set">
        <DecisionGrid
          title="How You Adapt"
          rows={[
            {
              situation: 'They start ducking more',
              response: 'Increase ff3 and df+1 pressure',
              reason: 'Mid launchers punish ducking',
              risk: 'If they stand again, you lose low damage'
            },
            {
              situation: 'They stop pressing after f+4',
              response: 'Run more mixups',
              reason: 'They are respecting your trap',
              risk: 'If they resume pressing, you need df+2 again'
            },
            {
              situation: 'They sidestep often',
              response: 'Use b+4 and realign before mix',
              reason: 'Stops the escape route',
              risk: 'High attack can be ducked if spammed'
            },
          ]}
        />
      </Section>

      <Section title="Daily 15-Minute Routine">
        <DrillMode
          title="Kazuya Daily"
          objective="Maintain execution and decision speed"
          setup="Practice Mode: CPU Stand, Guard Off"
          steps={[
            { instruction: '10x 1,1 hit-confirm into 1,1,2', targetReps: 10 },
            { instruction: '10x EWGF from P1 side', targetReps: 10 },
            { instruction: '10x EWGF from P2 side', targetReps: 10 },
            { instruction: '5x hellsweep → stomp sequence', targetReps: 5 },
          ]}
          estimatedTime="15 minutes"
          difficulty="beginner"
        />
      </Section>

      <Section title="Final Reminder">
        <TipBox variant="tip" title="Win by Discipline">
          Kazuya is not hard because he has many moves. He is hard because he demands discipline. 
          If you punish well and control the vortex, you will win.
        </TipBox>
      </Section>
    </Chapter>
  )
}
