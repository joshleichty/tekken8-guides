import { Chapter, Section } from '../../../components/guide'
import { MoveCard, DecisionGrid, Flowchart, TipBox, KeyConcept } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Heat & Devil"
      intro="Heat turns Kazuya from dangerous to oppressive. Your goal is simple: enter heat, force a mix, and end the round."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Defense Without Panic"
    >
      <Section title="Reliable Heat Engagers">
        <MoveCard
          character="kazuya"
          move={{
            input: 'f,f+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i16',
            onBlock: '-9',
            onHit: '+13c',
            tags: ['Heat Engager', 'Mid'],
            description: 'Long-range engager that starts heat safely in neutral.',
          }}
          videoId="f,F+2"
          showVideo
        />

        <MoveCard
          character="kazuya"
          move={{
            input: 'b+4',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i17',
            onBlock: '-5',
            onHit: '+16g',
            tags: ['Heat Engager', 'Homing'],
            description: 'Homing engager that stops side-step escape.',
          }}
          showVideo
        />

        <MoveCard
          character="kazuya"
          move={{
            input: 'df+1,2',
            hitLevel: ['m', 'h'],
            damage: '11, 20',
            startup: 'i15',
            onBlock: '+0',
            onHit: '+9g',
            tags: ['Heat Engager', 'Mid'],
            description: 'Safe check string that grants heat on hit.',
          }}
          showVideo
        />
      </Section>

      <Section title="Heat Smash">
        <MoveCard
          character="kazuya"
          move={{
            input: 'H.2+3',
            hitLevel: ['l', 'm'],
            damage: '9, 14 (20), 17 (34)',
            startup: 'i18',
            onBlock: '-14',
            onHit: '+0d',
            tags: ['Heat'],
            description: 'Long-range low-to-mid heat smash. Great for closing a round.',
          }}
          videoId="H.2+3"
          showVideo
        />

        <TipBox variant="tip" title="Do Not Auto-Smash">
          Heat smash is strongest when it ends a round or punishes hesitation. 
          Heat is more valuable when it forces another 50/50.
        </TipBox>
      </Section>

      <Section title="Decision Map">
        <DecisionGrid
          title="How to Spend Heat"
          rows={[
            {
              situation: 'You land a heat engager close',
              response: 'Heat Dash → mix',
              reason: 'Guaranteed pressure and instant vortex',
              risk: 'Consumes heat quickly'
            },
            {
              situation: 'You are mid range',
              response: 'Stay in heat',
              reason: 'Enhanced electrics and strong neutral',
              risk: 'Heat timer runs out if you do nothing'
            },
            {
              situation: 'Opponent is low on life',
              response: 'Heat Smash',
              reason: 'Safe round closer with huge damage',
              risk: 'If blocked, you lose heat'
            },
          ]}
        />
      </Section>

      <Section title="Heat Flow">
        <Flowchart
          title="Heat Pressure Flow"
          nodes={[
            { type: 'start', label: 'Land heat engager' },
            {
              type: 'decision',
              label: 'Are they in range?',
              branches: [
                { label: 'Yes', action: 'Heat Dash → ff3 / hellsweep' },
                { label: 'No', action: 'Hold heat → look for whiff' },
              ],
            },
            { type: 'end', label: 'Use heat smash if it closes the round' },
          ]}
        />
      </Section>

      <Section title="Devil Form Benefits">
        <KeyConcept title="Why Heat Is So Dangerous" icon="🔥">
          <ul>
            <li><strong>Easier electrics</strong> — more consistency under pressure</li>
            <li><strong>Stronger conversions</strong> — better damage on hits</li>
            <li><strong>Psychological threat</strong> — opponents freeze, and you gain control</li>
          </ul>
        </KeyConcept>
      </Section>
    </Chapter>
  )
}
