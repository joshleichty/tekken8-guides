import { Chapter, Section } from '../../../components/guide'
import { DecisionGrid, MoveCard, PracticeBox, TipBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Defense and Anti-Stepping"
      intro="Great Alisa players are hard to open up. This chapter makes your defense stable so your offense starts from better situations."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Final Playbook"
    >
      <Section title="Defensive Identity for Alisa Players">
        <p>
          Good defense on Alisa is not passive blocking forever. It is selective interruption, clean movement, and
          knowing when to take your guaranteed punish instead of forcing a hero read.
        </p>
        <p>
          This chapter exists so your offense has a stable launchpad. If you survive pressure phases with confidence,
          you get more chances to return to your own game.
        </p>
      </Section>

      <Section title="Defensive Tools You Actually Need">
        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'b+1+3',
            hitLevel: ['special'],
            startup: 'i3~15',
            onBlock: '-',
            onHit: 'Parry',
            tags: ['parry', 'defense'],
            description: 'High parry to hard-call predictable high pressure.',
            notes: ['Use as read-based defense, not default escape.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'b+1+2',
            hitLevel: ['m'],
            startup: 'i19',
            onBlock: '-13',
            onHit: '+8',
            tags: ['power crush', 'defense'],
            description: 'Power crush interruption that can stabilize momentum when under pressure.',
            notes: ['Good against obvious linear strings.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'ub+2',
            hitLevel: ['h'],
            startup: 'i16',
            onBlock: '-9',
            onHit: '+38a',
            tags: ['power crush', 'counter tool'],
            description: 'Defensive armor option with bigger reward and better callout value.',
            notes: ['Use when you expect timing-heavy challenge, not fast lows.'],
          }}
        />

        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'ws1+2',
            videoId: 'ws1+2',
            hitLevel: ['m'],
            startup: 'i20',
            onBlock: '-8',
            onHit: '+21',
            tags: ['homing', 'crouch tool'],
            description: 'While-standing homing control to discourage step after crouch states.',
            notes: ['Excellent with FC low threats.'],
          }}
        />
      </Section>

      <Section title="Defense Decision Rules">
        <DecisionGrid
          title="Under Pressure"
          rows={[
            {
              situation: 'Opponent repeats high-based strings',
              response: 'b+1+3 parry read',
              reason: 'Immediate mental damage and momentum swing.',
              risk: 'Loses hard to mids or delays.',
            },
            {
              situation: 'Opponent commits to armored pace',
              response: 'Block, then exact punish',
              reason: 'Defense should still prioritize certainty first.',
              risk: 'Requires matchup familiarity.',
            },
            {
              situation: 'Opponent side-steps after your crouch pressure',
              response: 'ws1+2 homing check',
              reason: 'Reclaims axis and stops free movement.',
              risk: 'Slow if they just mash fast mids.',
            },
          ]}
        />

        <PracticeBox
          title="Defensive Consistency"
          setup="Record three pressure strings from a bad matchup"
          tasks={[
            { id: 'alisa-def-1', text: 'Parry correct high string 5 times', type: 'counter', target: 5 },
            { id: 'alisa-def-2', text: 'Power crush interrupt timing 5 times', type: 'counter', target: 5 },
            { id: 'alisa-def-3', text: 'Block then punish correctly 10 times', type: 'counter', target: 10 },
          ]}
        />

        <TipBox variant="tip" title="Defense Creates Better Offense">
          Every defensive stop gives you a cleaner entry into Alisa's pressure loop. Think of defense as setup for offense.
        </TipBox>
      </Section>
    </Chapter>
  )
}
