import { Chapter, Section } from '../../../components/guide'
import { MoveCard, PracticeBox, SituationDrill, TipBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Punishment and Whiff Game"
      intro="Alisa gets stronger when your punish game is clean. This is where many players leave free damage on the table."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Optimize Heat"
    >
      <Section title="Punishment Is Your Skill Multiplier">
        <p>
          Strong punishment makes every matchup easier because your opponent pays real damage for bad decisions.
          Without this, you are working harder than you need to, especially with a character built to snowball.
        </p>
        <p>
          This chapter connects directly to your pressure chapters: the more reliably you punish, the more often you
          get to run your preferred offense cycle.
        </p>
      </Section>

      <Section title="Standing and Crouch Punish Core">
        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: '1,1',
            hitLevel: ['h', 'h'],
            startup: 'i10',
            onBlock: '-3',
            onHit: '+5',
            tags: ['punish'],
            description: 'Your 10f check and stable punish starter. Can route into DES with 1+2 hold.',
            notes: ['Use as default when unsure.', 'Consistency first, style second.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: '2,2',
            hitLevel: ['h', 'h'],
            startup: 'i12',
            onBlock: '-13',
            onHit: '+15a',
            tags: ['punish', 'knockdown'],
            description: '12f punish that gives stronger reward than 1,1.',
            notes: ['Use when move is clearly -12 or worse.'],
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
            tags: ['punish', 'heat engager'],
            description: '13f punishment route that pushes momentum directly into Heat offense.',
            notes: ['Excellent against unsafe pressure strings.', 'Converts into DES in Heat routing.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'ws1,2,3',
            videoId: 'ws1,2,3',
            hitLevel: ['m', 'h', 'm'],
            startup: 'i13',
            onBlock: '-10',
            onHit: '+33a',
            tags: ['crouch punish'],
            description: 'Bread-and-butter while-standing punish route with stable conversion.',
            notes: ['Core punish for lows around -13 and worse.'],
          }}
        />
      </Section>

      <Section title="Whiff Punish Drill">
        <SituationDrill
          title="Backdash, Whiff, Launch"
          situation="Opponent throws long poke at range 2 after your backdash cancel."
          context="You need immediate conversion without hesitation."
          opponentActions={[
            { slot: 1, action: 'Mid poke whiff (range 2)', yourResponse: 'df+2 launch', timing: 'Press as hurtbox retracts' },
            { slot: 2, action: 'Approach high', yourResponse: 'ub+2 power crush check', timing: 'Only as a read, not default' },
            { slot: 3, action: 'Dash guard bait', yourResponse: 'Hold position, re-space with movement', timing: 'No panic swing' },
          ]}
          setup={{
            cpuBehavior: 'Repeat Action',
            playbackMode: 'Random',
            position: 'Mid screen',
            otherSettings: ['Display frame data', 'Counter hit on'],
          }}
          goal="Punish 8/10 true whiffs with df+2 or better."
          successCriteria="No random button presses between backdash and punish input."
          commonMistakes={[
            'Swinging too early and getting clipped',
            'Using slow options when df+2 is available',
            'Autopiloting power crush instead of whiff punishing',
          ]}
          mentalCue="If it misses in front of you, launch. If it does not miss, do nothing."
        />

        <PracticeBox
          title="Punish Repetition Set"
          setup="Pick 5 enemy unsafe moves from your matchup notes"
          tasks={[
            { id: 'alisa-punish-1', text: 'Hit 10f punish 10 times', type: 'counter', target: 10 },
            { id: 'alisa-punish-2', text: 'Hit 13f 3,2 punish 10 times', type: 'counter', target: 10 },
            { id: 'alisa-punish-3', text: 'Hit ws1,2,3 punish 10 times', type: 'counter', target: 10 },
          ]}
        />

        <TipBox variant="warning" title="Do Not Skip This Chapter">
          If your punish game is weak, your pressure must work too hard and your win rate plateaus.
        </TipBox>
      </Section>
    </Chapter>
  )
}
