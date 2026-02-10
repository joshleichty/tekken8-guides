import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Trap"
      intro="Jun doesn't overwhelm you with offense. She creates situations where every choice you make is wrong."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="The Jab String Web"
    >
      <Section title="The Kazama Philosophy">
        <p>
          Most characters in Tekken want to hit you. Jun wants you to <em>try</em> to hit her.
        </p>

        <p>
          When an opponent presses a button at the wrong time against Jun, they don't just lose their
          turn — they get launched, combo'd, and carried to the wall. Jun's entire gameplan is built
          around one idea: <strong>create situations where pressing buttons is suicide.</strong>
        </p>

        <p>
          Jun is for players who like reading opponents. She's not a character who autopilots through
          pressure sequences — she's a character who sets a trap, watches what the opponent does, and
          punishes the wrong choice with devastating damage. If you enjoy the psychological side of
          fighting games, Jun rewards that more than almost anyone in the cast.
        </p>
      </Section>

      <Section title="The Magic Number: +3">
        <p>
          Jun has multiple moves that leave her +3 to +6 on block. That's the range where your
          opponent can't interrupt a throw. And Jun has a command throw — <code>df+2+3</code> — that
          requires a 2 break instead of the usual 1. At intermediate ranks, this throw lands constantly
          because players instinctively break with 1.
        </p>

        <p>
          The primary way you reach +3 or better is <strong>SS4</strong> — a sidestep kick that's
          your signature move.
        </p>

        <MoveCard character="jun"
          videoId="SS.4"
          move={{
            input: 'SS 4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i18~20',
            onBlock: '+6',
            onHit: '+8c',
            tags: ['Mid', 'Heat Engager', 'Plus on Block'],
            description: 'Sidestep into a spinning kick. +6 on block — your opponent cannot interrupt your next move.',
            notes: ['Press up or down, then 4', 'Heat engager on hit', '+6 means throw is uninterruptible']
          }}
          showVideo
        />

        <p>
          When SS4 gets blocked, your opponent is frozen at -6. They can't jab. They can't hopkick.
          They have to guess: are you going to throw them (<code>df+2+3</code>), or launch them for
          pressing a button (<code>df+2</code>)?
        </p>

        <KeyConcept title="The Core Mix" icon="🔀">
          <p>After SS4 on block (+6):</p>
          <ul>
            <li><strong>Opponent blocks/stands still</strong> → Throw them with df+2+3</li>
            <li><strong>Opponent presses buttons</strong> → Launch them with df+2</li>
            <li><strong>Opponent ducks the throw</strong> → df+2 catches crouchers too</li>
          </ul>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            Every choice they make is wrong. That's Jun.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Force It">
          SS4 requires a sidestep, so it's a commitment. If your opponent reads it, you get clipped.
          Use it after blocked pokes — especially jab into SS4 — rather than raw from neutral.
        </TipBox>
      </Section>

      <Section title="What's Coming Next">
        <p>
          You now know one trap — SS4 into throw or launch. That's enough to win rounds. Next chapter
          expands your pressure with the 1,2,2 jab string and introduces Izumo stance. The trap gets
          deeper.
        </p>

        <TipBox variant="tip" title="Your One Goal">
          In your first matches with Jun, focus on one thing: land SS4, then choose throw or df+2.
          Watch what the opponent does. Start reading. Every Jun win starts here.
        </TipBox>
      </Section>
    </Chapter>
  )
}
