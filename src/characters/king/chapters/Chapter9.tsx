import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="When They Duck"
      intro="Good players will duck your throws. When they do, launch them. This chapter teaches you how to punish duck attempts."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Learn Jaguar Sprint"
    >
      <Section title="The Ducking Problem">
        <p>
          Good players will <span className="highlight-secondary">duck your throws</span>. When they duck, 
          throws whiff, and you're vulnerable. That's why you need launchers.
        </p>

        <KeyConcept title="The Solution" icon="💡">
          <ul>
            <li><strong>They duck</strong> — Throws whiff</li>
            <li><strong>You launch</strong> — Hit them with a mid launcher</li>
            <li><strong>Full combo</strong> — Deal 70+ damage</li>
            <li><strong>They stop ducking</strong> — Now throws work again</li>
          </ul>
        </KeyConcept>

        <p>
          This is the <span className="highlight">strike-throw mixup</span>. If they duck, mids hit them. 
          If they stand, throws hit them. They can't win.
        </p>
      </Section>

      <Section title="uf+4 — The Hopkick">
        <MoveCard character="king"
          move={{
            input: 'uf+4',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i15',
            onBlock: '-13',
            onHit: '+33a',
            tags: ['Mid', 'Launcher', 'Hopkick', 'Low Crush'],
            description: 'King\'s main launcher. Low crushes, launches on hit. Standard 15-frame launcher.',
          }}
          showVideo
        />

        <p>
          uf+4 is <span className="highlight">King's primary launcher</span>. At i15, it's the standard 
          launcher speed. It low crushes, meaning it goes over low attacks.
        </p>

        <KeyConcept title="Using uf+4" icon="🚀">
          <ul>
            <li><strong>When they duck</strong> — Launch them with hopkick</li>
            <li><strong>Low crushes</strong> — Goes over low attacks</li>
            <li><strong>Standard launcher</strong> — i15 is normal launcher speed</li>
            <li><strong>Safe on block</strong> — -13 is not launch punishable</li>
            <li><strong>Full combo</strong> — Launches for 70+ damage</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Duck Punish">
          When you think your opponent will duck your throw, use hopkick instead. If they duck, hopkick 
          launches them. If they stand, throw connects. This is the strike-throw mixup.
        </TipBox>
      </Section>

      <Section title="df+2,1 — The Counter-Hit Launcher">
        <MoveCard character="king"
          move={{
            input: 'df+2,1',
            hitLevel: ['m', 'h'],
            damage: '12, 15',
            startup: 'i13',
            onBlock: '-4',
            onHit: '+24a',
            onCH: '+24a (Launch!)',
            tags: ['Mid', 'High', 'CH Launcher'],
            description: 'Counter-hit launcher. On CH, launches for 76 damage combo. Use when opponent presses.',
          }}
          showVideo
        />

        <p>
          df+2,1 is <span className="highlight-secondary">King's best counter-hit tool</span>. On counter-hit, 
          it launches for a 76 damage combo. Use it when you think your opponent will press buttons.
        </p>

        <KeyConcept title="Using df+2,1" icon="⚡">
          <ul>
            <li><strong>As a check</strong> — If they press, counter-hit launches them</li>
            <li><strong>After plus frames</strong> — From +1 or more, it's uninterruptible</li>
            <li><strong>Has delayable second hit</strong> — Can delay to catch different timings</li>
            <li><strong>Conditions standing</strong> — Opponents fear the counter-hit</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="FC df+2 — The Crouch Launcher">
        <MoveCard character="king"
          videoId="FC.df+2"
          move={{
            input: 'FC df+2',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i15',
            onBlock: '-14',
            onHit: '+56a',
            tags: ['Mid', 'Launcher', 'Crouch'],
            description: 'Crouch launcher. Same speed as hopkick but from crouch. Use when you\'re already crouching.',
          }}
          showVideo
        />

        <p>
          FC df+2 is King's <span className="highlight">crouch launcher</span>. It's the same speed as hopkick 
          (i15) but from crouch. Use it when you're already crouching or want to stay low.
        </p>

        <KeyConcept title="Using FC df+2" icon="⬇️">
          <ul>
            <li><strong>From crouch</strong> — Use when you're already crouching</li>
            <li><strong>Same speed as hopkick</strong> — i15 launcher</li>
            <li><strong>Full combo</strong> — Launches for 70+ damage</li>
            <li><strong>Alternative to hopkick</strong> — Use when you want to stay low</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Complete Mixup">
        <p>
          Here's the complete picture:
        </p>

        <KeyConcept title="The Strike-Throw Mixup" icon="🔄">
          <ol>
            <li><strong>Get plus frames</strong> — Jab (+1), f+1+4 (+3), etc.</li>
            <li><strong>They must guess</strong>:
              <ul>
                <li><strong>Stand</strong> → Throw them</li>
                <li><strong>Duck</strong> → Launch them with hopkick</li>
                <li><strong>Press</strong> → Counter-hit them with df+2,1</li>
                <li><strong>Break throw</strong> → You're still plus, throw again</li>
              </ul>
            </li>
            <li><strong>If they guess wrong</strong> → They eat damage</li>
            <li><strong>If they guess right</strong> → You're still plus, mix again</li>
            <li><strong>Repeat</strong> — The pressure never stops</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="The Mental Stack">
          Your opponent has to think about: standing (throws), ducking (launchers), pressing (counter-hits), 
          breaking throws (1, 1+2, 2), sidestepping, backdashing. That's 8+ options. <strong>You only think 
          about: throw, launcher, or counter-hit.</strong> The mental advantage is massive.
        </TipBox>
      </Section>

      <Section title="Practice Time">
        <PracticeBox
          title="Duck Punish Practice"
          setup="Set dummy to Crouch. Practice launching duck attempts."
          tasks={[
            { id: 'ch9-hopkick', text: 'Launch ducking opponent 10 times', detail: 'uf+4 when they duck', type: 'counter', target: 10 },
            { id: 'ch9-mixup', text: 'Mix throw and hopkick 10 times', detail: 'Make them guess', type: 'counter', target: 10 },
            { id: 'ch9-ch', text: 'Counter-hit with df+2,1 5 times', detail: 'When opponent presses', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Section title="The Complete Picture">
        <p>
          When opponents duck your throws, launch them. This is the <span className="highlight">strike-throw 
          mixup</span>. If they duck, mids hit them. If they stand, throws hit them. They can't win.
        </p>

        <KeyConcept title="Master the Mixup" icon="👑">
          <ul>
            <li><strong>When they stand</strong> — Throw them</li>
            <li><strong>When they duck</strong> — Launch them</li>
            <li><strong>When they press</strong> — Counter-hit them</li>
            <li><strong>Keep mixing</strong> — Don't be predictable</li>
            <li><strong>Adapt</strong> — Switch based on what they do</li>
          </ul>
        </KeyConcept>

        <p>
          Master this mixup, and you'll dominate. Opponents will be stuck between standing (throws) and 
          ducking (launchers). They can't win.
        </p>
      </Section>
    </Chapter>
  )
}
