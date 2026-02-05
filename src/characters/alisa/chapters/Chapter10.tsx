import { Chapter, Section } from '../../../components/guide'
import { ConstraintPlay, MatchScenario, MoveCard, TipBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Ranked Playbook"
      intro="This chapter combines everything into a practical ranked system: opening script, adaptation triggers, and closeout rules."
      onPrevious={() => goToChapter(9)}
      hasNext={false}
    >
      <Section title="How This All Comes Together">
        <p>
          Your full Alisa round should now have a clear arc: establish contact, earn entry, run layered stance pressure,
          and close with wall or Heat conversion. This is no longer “using good moves.” This is piloting a complete plan.
        </p>
        <p>
          The final jump in rank usually comes from adaptation speed. Keep your structure, but rotate options earlier than
          your opponent expects.
        </p>
      </Section>

      <Section title="Round Script">
        <MoveCard
          character="alisa"
          videoId="f,f,F+2"
          showVideo
          move={{
            input: 'f,f,f+2',
            hitLevel: ['h'],
            startup: 'i13',
            onBlock: '+5',
            onHit: '+28a',
            tags: ['approach', 'plus on block'],
            description: 'Primary approach to start offense and force immediate respect.',
            notes: ['Rotate with dash-guard so high timing is less predictable.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: '3,2',
            hitLevel: ['m', 'h'],
            startup: 'i13',
            onBlock: '-2',
            onHit: '+20a',
            tags: ['heat engager', 'punish'],
            description: 'Universal stabilizer: punishment, engage, and momentum starter all in one.',
            notes: ['When in doubt on -13, this is your answer.'],
          }}
        />
      </Section>

      <Section title="Adaptation Scenario">
        <MatchScenario
          title="Opponent Starts Ducking Running Pressure"
          situation="You used f,f,f+2 twice and now they hard duck at range."
          options={[
            {
              action: 'Switch to f,f,f+3,4',
              input: 'f,f,F+3,4',
              result: 'Mid route checks ducking and keeps your approach threat honest.',
              isOptimal: true,
            },
            {
              action: 'Keep spamming running 2',
              input: 'f,f,F+2',
              result: 'You eventually get duck-launched and lose tempo.',
            },
            {
              action: 'Stop approaching entirely',
              result: 'You give up Alisa\'s strongest phase and let them reset neutral for free.',
            },
          ]}
          keyTakeaway="Your ranked strength comes from switching layers quickly, not from forcing one favorite option."
        />
      </Section>

      <Section title="Final Mastery Challenge">
        <ConstraintPlay
          title="Two-Round Fujin Test"
          description="Play two full rounds using the full Alisa loop with deliberate phase changes."
          allowedMoves={[
            { input: 'Neutral phase', purpose: 'df+1, b+1, d+4, movement' },
            { input: 'Entry phase', purpose: 'f+2, uf+2, 3,2' },
            { input: 'Pressure phase', purpose: 'DES.f+1, DES.1, DES.d+1, DBT.1+2, DBT.3' },
          ]}
          duration="15 minutes"
          goal="Win one set while correctly cycling neutral -> entry -> pressure at least 5 times."
          whatYouLearn={[
            'How to avoid autopilot chainsaw play',
            'How to earn pressure instead of gambling for it',
            'How to close rounds with chip and wall control',
          ]}
          setup={{ cpuBehavior: 'Hard', rounds: 5 }}
          progressionHint="When this feels easy, start matchup-specific punish notes for your top 5 ranked opponents."
        />

        <TipBox variant="warning" title="Keep Improving This Guide In Your Notes">
          Add your own matchup observations after every ranked session. Alisa scales hard with good notes.
        </TipBox>
      </Section>
    </Chapter>
  )
}
