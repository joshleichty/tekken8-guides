import { Chapter, Section } from '../../../components/guide'
import { MoveCard, SituationDrill, TipBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Wall and Oki Control"
      intro="Alisa's pressure gets scarier at the wall because chip, splat routes, and stance re-entry all compress the opponent's options."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Sharpen Defense"
    >
      <Section title="Why Wall Matters for Alisa">
        <p>
          At the wall, Alisa's question loop gets smaller and nastier. The opponent has fewer movement exits, your chip
          becomes more oppressive, and your low/mid threats become harder to rotate out of.
        </p>
        <p>
          This chapter is about composure. Wall offense is not about doing more; it is about doing fewer, sharper things
          in the right order until the round collapses.
        </p>
      </Section>

      <Section title="Wall Threat Toolkit">
        <MoveCard
          character="alisa"
          showVideo
          move={{
            input: 'f+1+2',
            hitLevel: ['m'],
            startup: 'i14',
            onBlock: '-12',
            onHit: '+14g',
            tags: ['wall splat', 'mid'],
            description: 'Reliable wall pressure mid with direct reward on clean reads.',
            notes: ['Excellent after conditioning with lows and jab pressure.'],
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
            tags: ['wall splat', 'low'],
            description: 'Wall-specific harassment tool that makes stand guarding expensive.',
            notes: ['Very strong once opponent starts respecting mids.'],
          }}
        />

        <MoveCard
          character="alisa"
          videoId="f,f,F+3,4"
          showVideo
          move={{
            input: 'f,f,f+3,4',
            hitLevel: ['m', 'm'],
            startup: 'i18',
            onBlock: '-7',
            onHit: '+31a',
            tags: ['approach', 'wall carry'],
            description: 'Running carry ender and pressure stabilizer when you need corner positioning.',
            notes: ['Great for pushing post-combo momentum to wall.'],
          }}
        />
      </Section>

      <Section title="Oki Situation Drill">
        <SituationDrill
          title="Post-Wall Combo Layering"
          situation="You end wall combo and opponent techs immediately."
          context="You need to keep advantage without eating a wake-up launcher."
          opponentActions={[
            { slot: 1, action: 'Tech stand guard', yourResponse: 'd+4 then mid check', timing: 'Use low once then rotate' },
            { slot: 2, action: 'Wake-up jab', yourResponse: 'b+1 or sidestep block', timing: 'Respect wake-up speed first rep' },
            { slot: 3, action: 'Side roll escape', yourResponse: 'Homing check with uf+2', timing: 'Trigger as they recover axis' },
          ]}
          setup={{
            cpuBehavior: 'Repeat Action',
            playbackMode: 'Random',
            position: 'Opponent back to wall',
            otherSettings: ['Wall stage', 'Guard random'],
          }}
          goal="Keep wall position for 20 consecutive seconds without taking a launcher."
          successCriteria="At least 3 successful pressure cycles per round."
          mentalCue="Wall pressure wins by patience. One good read is better than three forced guesses."
        />

        <TipBox variant="warning" title="Don't Burn Momentum on Unsafe Greed">
          Wall advantage is already a win. Keep your offense compact and repeatable.
        </TipBox>
      </Section>
    </Chapter>
  )
}
