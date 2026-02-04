import { Chapter, Section } from '../../../components/guide'
import { DecisionGrid, TipBox, PracticeBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="A Round in One Sentence"
      intro="Kazuya is a character who wins rounds in four decisions. If you understand those decisions, you understand Kazuya."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn The Contract Moves"
    >
      <Section title="The Sentence">
        <p>
          Picture one round. You backdash, they swing and whiff. You electric. They hit the ground. 
          You run a 50/50. They guess wrong. The round ends. That is Kazuya in one sentence.
        </p>
      </Section>

      <Section title="Decision Map">
        <DecisionGrid
          title="Four Decisions That Win Rounds"
          description="If you can execute these four decisions consistently, you do not need a giant move list."
          rows={[
            {
              situation: 'They whiff in front of you',
              response: 'EWGF',
              reason: 'Max damage and immediate knockdown pressure',
              risk: 'If late, you eat a counter-hit'
            },
            {
              situation: 'You block something unsafe',
              response: '1,1,2',
              reason: 'Fastest knockdown punish',
              risk: 'If you hesitate, they recover'
            },
            {
              situation: 'They stand after knockdown',
              response: 'f,F+3 or Hellsweep',
              reason: 'This is your 50/50 win condition',
              risk: 'Wrong guess loses momentum'
            },
            {
              situation: 'They stay grounded',
              response: 'd+3+4 (stomp)',
              reason: 'Forces them back into the mix',
              risk: 'If they tech late, you may whiff'
            },
          ]}
        />
      </Section>

      <Section title="What You Are Not Doing">
        <TipBox variant="warning" title="No Poke Wars">
          You are not trying to out-poke specialist characters. You are not trading tiny hits for two minutes. 
          Kazuya’s identity is <strong>punish → knockdown → guess</strong>.
        </TipBox>
      </Section>

      <Section title="First Drill: The Four Decisions">
        <PracticeBox
          title="Four-Decision Warmup"
          setup="Practice Mode: CPU Guard All, Random Counter Hit Off"
          tasks={[
            { id: 'whiff', text: 'Backdash into EWGF after a whiff (record a whiffed jab)', type: 'counter', target: 5 },
            { id: 'punish', text: 'Block a -10 move and punish with 1,1,2', type: 'counter', target: 10 },
            { id: 'mix', text: 'After knockdown, run ff3 / hellsweep mix 5 times', type: 'counter', target: 5 },
            { id: 'stomp', text: 'Stomp a grounded opponent with d+3+4', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
