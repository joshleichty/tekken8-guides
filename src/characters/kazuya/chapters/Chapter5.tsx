import { Chapter, Section } from '../../../components/guide'
import { MoveCard, DecisionGrid, TipBox, SituationDrill, KeyConcept } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="The Oki Tax"
      intro="Every time the opponent hits the floor, they owe you a decision. Your job is to make that decision hurt."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Build Punish Architecture"
    >
      <Section title="The Grounded Threat">
        <MoveCard
          character="kazuya"
          input="d+3+4"
          tags={['Low', 'Knockdown']}
          description="Grounded stomp that flips opponents and forces them to stand into your mixup."
          videoId="d+3+4"
          showVideo
        />

        <TipBox variant="tip" title="Stomp is Your Tax">
          If they stay grounded to avoid the 50/50, stomp them. This removes their safest option.
        </TipBox>
      </Section>

      <Section title="The Mixup That Follows">
        <MoveCard
          character="kazuya"
          move={{
            input: 'f,F+3',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i20',
            onBlock: '-3',
            onHit: '+46a',
            tags: ['Mid', 'Launcher'],
            description: 'Your mid launcher after knockdown. The fear of this makes hellsweep land.',
          }}
          showVideo
        />
      </Section>

      <Section title="Decision Map">
        <DecisionGrid
          title="Wake-Up Responses"
          description="You are not guessing. You are responding to the option they picked."
          rows={[
            {
              situation: 'They stay grounded',
              response: 'd+3+4',
              reason: 'Forces stand and keeps the vortex alive',
              risk: 'If they tech late, you may whiff'
            },
            {
              situation: 'They tech roll',
              response: 'Dash in → mix (ff3 / hellsweep)',
              reason: 'They are standing, so run the 50/50',
              risk: 'If they wake with a button, you must block'
            },
            {
              situation: 'They get-up kick',
              response: 'Block → punish',
              reason: 'You get a full launcher for free',
              risk: 'If you swing, you eat it'
            },
            {
              situation: 'They side roll',
              response: 'Realign with wave dash or b+4',
              reason: 'You want to face them before mixing',
              risk: 'If you guess wrong, they escape'
            },
          ]}
        />
      </Section>

      <Section title="Oki Priorities">
        <KeyConcept title="Oki Rules" icon="⚖️">
          <ul>
            <li><strong>Stomp if grounded</strong> — remove their safest option</li>
            <li><strong>Block get-up kicks</strong> — never give free damage</li>
            <li><strong>Mix only when aligned</strong> — wave dash to re-center</li>
            <li><strong>Reset if uncertain</strong> — patience beats gambling</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Situation Drill">
        <SituationDrill
          title="Read Wake-Up Options"
          situation="You land hellsweep and the opponent is grounded."
          context="Record common wake-up options and drill your responses."
          opponentActions={[
            { slot: 1, action: 'Stay grounded', yourResponse: 'd+3+4 stomp', timing: 'Short delay' },
            { slot: 2, action: 'Tech roll → stand guard', yourResponse: 'Dash in → mix', timing: 'As they stand' },
            { slot: 3, action: 'Get-up kick', yourResponse: 'Block → launch punish', timing: 'Hold guard' },
          ]}
          setup={{
            cpuBehavior: 'Playback',
            playbackMode: 'Random',
            position: 'Mid screen',
            otherSettings: ['Guard All', 'Counter Hit Off']
          }}
          goal="Respond correctly 10 times"
          successCriteria="You never eat a get-up kick and always tax the grounded opponent"
          commonMistakes={[
            'Mixing while off-axis',
            'Forgetting to stomp grounded opponents',
            'Over-committing before you see their option'
          ]}
          mentalCue="Stand = mix. Grounded = stomp. Kick = block."
        />
      </Section>
    </Chapter>
  )
}
