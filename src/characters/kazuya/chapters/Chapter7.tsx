import { Chapter, Section } from '../../../components/guide'
import { ExecutionBox, DrillMode, TipBox, DecisionGrid, InputNotation } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Electric School"
      intro="EWGF is the single most important move in Tekken. For Kazuya, it is the difference between good and terrifying."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Containment & Traps"
    >
      <Section title="The Input">
        <ExecutionBox title="EWGF Motion" icon="⚡">
          <div style={{ marginBottom: '8px' }}>
            <strong>Input:</strong> <InputNotation notation="f,n,d,df+2" />
          </div>
          <p>
            The electric happens when <strong>2 is pressed on the same frame as df</strong>. 
            If you are late, you get a weaker Wind God Fist.
          </p>
        </ExecutionBox>

        <TipBox variant="warning" title="Consistency Beats Speed">
          The goal is not to do fast electrics. The goal is to do clean electrics on command.
        </TipBox>
      </Section>

      <Section title="Decision Map">
        <DecisionGrid
          title="Where You Use Electric"
          rows={[
            {
              situation: 'Opponent whiffs a long move',
              response: 'EWGF',
              reason: 'Best whiff punish in the game',
              risk: 'If you hesitate, the punish is gone'
            },
            {
              situation: 'You block a -15 or worse move',
              response: 'EWGF',
              reason: 'Max damage punish',
              risk: 'If you mis-input, you lose damage'
            },
            {
              situation: 'You want to check in neutral',
              response: 'EWGF (from range)',
              reason: 'Controls space and forces respect',
              risk: 'High attack; can be ducked if predictable'
            },
          ]}
        />
      </Section>

      <Section title="Daily Drill">
        <DrillMode
          title="EWGF Consistency"
          objective="Land clean electrics from both sides"
          setup="Practice Mode: CPU Stand, Guard Off"
          steps={[
            { instruction: '10x WGF (no electric) from P1 side', detail: 'Smooth motion only', targetReps: 10 },
            { instruction: '10x EWGF from P1 side', detail: 'Press 2 on df', targetReps: 10 },
            { instruction: '10x EWGF from P2 side', detail: 'Mirror the input', targetReps: 10 },
          ]}
          estimatedTime="10 minutes"
          difficulty="intermediate"
        />
      </Section>

      <Section title="Common Misses">
        <TipBox variant="tip" title="Fix These Fast">
          <ul>
            <li><strong>Getting regular WGF</strong> — you pressed 2 too late</li>
            <li><strong>Getting df+2</strong> — you skipped the crouch dash motion</li>
            <li><strong>Nothing comes out</strong> — you dropped the neutral input</li>
          </ul>
        </TipBox>
      </Section>
    </Chapter>
  )
}
