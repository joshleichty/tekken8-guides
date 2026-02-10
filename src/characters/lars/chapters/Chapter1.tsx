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
      title="The Lion of the Rebellion"
      intro="Lars Alexandersson doesn't rush you down. He waits for you to make a mistake, punishes it, and then never gives you your turn back."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Full Punishment Arsenal"
    >
      <Section title="Who Is Lars?">
        <p>
          Lars is Heihachi's illegitimate son — a rebel leader who turned against the Mishima Zaibatsu.
          In gameplay, he plays nothing like a Mishima. No electrics, no hellsweeps, no wavedash 50/50.
          Lars is a <span className="highlight">counter-puncher with a stance engine</span>. He waits for
          mistakes, punishes them with surgical precision, and chains that punishment into stance mixups the
          opponent can't escape.
        </p>

        <p>
          In Season 2, he went from bottom-tier to arguably the best character in the game. His punishment
          at every frame level — 10, 12, 14 — is best-in-class. His three stances (Limited Entry, Silent
          Entry, Dynamic Entry) chain into each other. He's S-tier for a reason, and it's not gimmicks.
          It's that every mistake you make against Lars costs you the round.
        </p>

        <p>
          Lars is for players who believe defense wins games. If you enjoy blocking, recognizing what's
          unsafe, and making opponents regret every reckless move, Lars gives you the best toolkit in
          Tekken for that. His weakness is that he needs opponents to act — his lows are risky, and
          he's less self-sufficient in neutral than characters who can force their way in. But most
          opponents press buttons. And that's when Lars thrives.
        </p>
      </Section>

      <Section title="The Move That Defines Lars">
        <p>
          Every Lars round revolves around one move: <strong>2,1</strong>. It's his 10-frame punish,
          and it does something no other character's 10-frame punish does — it automatically transitions
          into Limited Entry stance at +8 on hit.
        </p>

        <MoveCard character="lars"
          move={{
            input: '2,1',
            hitLevel: ['h', 'm'],
            damage: '10, 12',
            startup: 'i10',
            onBlock: '-6',
            onHit: '+8',
            tags: ['10f Punish', 'LEN Transition', 'Mixup Starter'],
            description: 'Your 10-frame punish that transitions into Limited Entry. +8 on hit means the opponent MUST guess.',
            notes: ['Auto-transitions to LEN', '+8 on hit = uninterruptable mixup', '-6 on block = don\'t go to LEN']
          }}
          showVideo
        />

        <p>
          +8 means your opponent cannot press any button fast enough to interrupt what comes next. From
          LEN, you have two options: <strong>LEN 1</strong> (a low that's only -12 on block and
          high-crushes) or <strong>LEN 2</strong> (a safe mid at -9 that does chip damage and becomes a
          tornado launcher in Heat). Low or mid. They guess.
        </p>

        <KeyConcept title="The Critical Distinction" icon="🔑">
          <p>
            When 2,1 <strong>hits</strong>, you're +8 and the LEN mixup is real — they can't interrupt.
            When 2,1 is <strong>blocked</strong>, you're -6 and the mixup is fake — they can jab you
            out of LEN options.
          </p>
          <p style={{ marginTop: '8px' }}>
            At lower ranks, opponents won't know to jab after a blocked 2,1. Take advantage. As you
            climb, only go to LEN on hit. That discipline is the difference between Warrior Lars
            and Fujin Lars.
          </p>
        </KeyConcept>
      </Section>

      <Section title="What's Coming Next">
        <p>
          2,1 is your 10-frame punish. But Lars has the best punishment in the game at <em>every</em> frame
          level — including <strong>f,b+2,1</strong>, a 14-frame launcher most characters don't have. Next
          chapter builds the full punishment arsenal and teaches you how to turn every opponent mistake into
          maximum damage.
        </p>

        <TipBox variant="tip" title="The Core Identity">
          Lars doesn't hope to land a lucky hit. He waits for a mistake, punishes it perfectly, and
          never gives the turn back. Punish, mixup, pressure, repeat — that's the Lion of the Rebellion.
        </TipBox>
      </Section>
    </Chapter>
  )
}
