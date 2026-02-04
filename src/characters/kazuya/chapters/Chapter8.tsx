import { Chapter, Section } from '../../../components/guide'
import { MoveCard, Flowchart, TipBox, MatchScenario, GameChallenge } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Containment & Traps"
      intro="Kazuya does not win long exchanges. He wins by making the opponent freeze or swing into your counter-hit tools."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Lock in Combos"
    >
      <Section title="f+4: Plus Frames">
        <MoveCard
          character="kazuya"
          move={{
            input: 'f+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i19',
            onBlock: '+4',
            onHit: '+7',
            tags: ['Mid', 'Plus on Block'],
            description: 'Slow but strong. On block you are +4 and can run frame traps.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="Simple Trap">
          f+4 on block → df+2. This beats jabs and forces respect.
        </TipBox>
      </Section>

      <Section title="df+2: Counter-Hit Launcher">
        <MoveCard
          character="kazuya"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i14',
            onBlock: '-12',
            onHit: '+5',
            onCH: '+59a',
            tags: ['Mid', 'Homing', 'CH Launcher'],
            description: 'Fast homing mid that launches on counter hit. The button that stops mashers.',
          }}
          showVideo
        />
      </Section>

      <Section title="db+4: Trap Starter">
        <MoveCard
          character="kazuya"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '18',
            startup: 'i20',
            onBlock: '-12',
            onHit: '+4',
            tags: ['Low', 'Plus on Hit'],
            description: 'On hit you are +4. That makes df+2 uninterruptible by jabs.',
          }}
          showVideo
        />
      </Section>

      <Section title="Risky Surprise: d+1+2">
        <MoveCard
          character="kazuya"
          move={{
            input: 'd+1+2',
            hitLevel: ['l'],
            damage: '20',
            startup: 'i23',
            onBlock: '-14',
            onHit: '+3',
            onCH: '+27a',
            tags: ['Low', 'High Crush', 'CH Launcher'],
            description: 'Slow low that crushes highs and launches on CH. Use sparingly as a callout.',
          }}
          showVideo
        />
      </Section>

      <Section title="Flowchart">
        <Flowchart
          title="Containment Flow"
          nodes={[
            { type: 'start', label: 'You are +4 (f+4 on block or db+4 on hit)' },
            {
              type: 'decision',
              label: 'Do they press?',
              branches: [
                { label: 'Yes', action: 'df+2 CH launcher' },
                { label: 'No', action: 'Run ff3 / hellsweep mix' },
              ],
            },
            { type: 'end', label: 'Knockdown → vortex' },
          ]}
        />
      </Section>

      <Section title="Match Scenario">
        <MatchScenario
          title="After f+4 on Block"
          situation="You land f+4 and they block."
          context="You are +4 and in their face."
          options={[
            { action: 'Immediate ff3', input: 'f,F+3', result: 'Big mid threat but can be challenged by fast buttons.' },
            { action: 'Frame trap', input: 'df+2', result: 'Beats jabs and launches on CH.', isOptimal: true, followup: 'Convert into combo.' },
            { action: 'Backdash', result: 'Resets spacing but gives up momentum.' },
          ]}
          keyTakeaway="Use df+2 to punish mashers. If they freeze, run the mix."
        />
      </Section>

      <Section title="Game Challenge">
        <GameChallenge
          title="Stop the Mash"
          scenario="Set the CPU to jab after blocking f+4. Train your trap timing."
          setup={{
            cpuBehavior: 'Repeat Action',
            recordings: ['Block f+4 → jab', 'Block f+4 → duck', 'Block f+4 → backdash'],
            otherSettings: ['Guard All', 'Counter Hit On']
          }}
          goal="Land df+2 counter hits 5 times and mix correctly when they stop pressing"
          successCriteria="You can alternate between trapping and mixing on reaction"
          failureTeaches="If you autopilot, you either get ducked or you lose pressure."
          hints={[
            'Watch their first response after f+4.',
            'If they stop pressing, go back to your 50/50.'
          ]}
          duration="8 minutes"
          whyThisWorks="Kazuya becomes oppressive once the opponent is scared to press."
        />
      </Section>
    </Chapter>
  )
}
