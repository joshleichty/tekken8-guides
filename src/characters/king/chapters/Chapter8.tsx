import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Low Pokes"
      intro="King doesn't have many good lows, but the ones he has are excellent. Use them to keep opponents honest and chip away at their health."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Learn Launchers"
    >
      <Section title="Why Lows Matter">
        <p>
          Lows serve two purposes for King:
        </p>

        <KeyConcept title="Low Functions" icon="⬇️">
          <ul>
            <li><strong>Chip damage</strong> — Deal damage even when blocked</li>
            <li><strong>Keep them honest</strong> — If they always duck throws, hit them with lows</li>
            <li><strong>Counter-hit launchers</strong> — Some lows launch on CH for big damage</li>
            <li><strong>Frame advantage</strong> — Some lows give plus frames on hit</li>
          </ul>
        </KeyConcept>

        <p>
          King's low game is <span className="highlight-secondary">weaker than his throw game</span>, but 
          lows are still important. They keep opponents from always ducking your throws.
        </p>
      </Section>

      <Section title="f,f,n+2 — King's Best Low">
        <MoveCard character="king"
          videoId="f,f,n,2"
          move={{
            input: 'f,f,n+2',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i18',
            onBlock: '-13',
            onHit: '+7',
            onCH: '+55 (Launch!)',
            tags: ['Low', 'CH Launcher', 'Long Range'],
            description: 'King\'s best low. Long range, high crushes, +7 on hit. On counter-hit, launches for 55 damage combo.',
          }}
          showVideo
        />

        <p>
          f,f,n+2 is <span className="highlight">King's signature low</span>. It has incredible range, high crushes, 
          and on counter-hit launches for 55 damage. This is one of the best lows in Tekken.
        </p>

        <KeyConcept title="Why f,f,n+2 is Broken" icon="⚡">
          <ul>
            <li><strong>Long range</strong> — Hits from further away than most lows</li>
            <li><strong>High crushes</strong> — Goes under jabs and high attacks</li>
            <li><strong>+7 on hit</strong> — Perfect for throwing after</li>
            <li><strong>CH launcher</strong> — On CH, launches for 55 damage combo</li>
            <li><strong>Only -13 on block</strong> — Not launch punishable by most characters</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Counter-Hit">
          f,f,n+2 on counter-hit launches for 55 damage. This is massive damage for a low. Use it when you 
          think your opponent will press buttons.
        </TipBox>
      </Section>

      <Section title="db+3 — The Crouch Low">
        <MoveCard character="king"
          move={{
            input: 'db+3',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i23',
            onBlock: '-14',
            onHit: '+4',
            onCH: '+25a',
            tags: ['Low', 'High Crush', 'Plus on Hit'],
            description: 'Crouching low poke. High crushes, +4 on hit. On CH, leaves opponent in front of you for ground throw.',
          }}
          showVideo
        />

        <p>
          db+3 is a <span className="highlight">crouching low</span> that high crushes. It's slower than 
          f,f,n+2 but gives +4 on hit, perfect for throwing.
        </p>

        <KeyConcept title="Using db+3" icon="⬇️">
          <ul>
            <li><strong>High crushes</strong> — Goes under jabs and high attacks</li>
            <li><strong>+4 on hit</strong> — Perfect for throwing after</li>
            <li><strong>CH leaves opponent grounded</strong> — Can attempt ground throw</li>
            <li><strong>Slower than f,f,n+2</strong> — Use when you have more time</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="d+3 — The Fast Low">
        <MoveCard character="king"
          move={{
            input: 'd+3',
            hitLevel: ['l'],
            damage: '12',
            startup: 'i17',
            onBlock: '-12',
            onHit: '+1',
            tags: ['Low', 'Fast', 'Plus on Hit'],
            description: 'Fast low poke. +1 on hit, good for quick checks.',
          }}
          showVideo
        />

        <p>
          d+3 is King's <span className="highlight-secondary">fastest low</span>. At i17, it's quick enough 
          to catch opponents off guard. +1 on hit means you can throw after.
        </p>

        <KeyConcept title="Using d+3" icon="⚡">
          <ul>
            <li><strong>Fast</strong> — i17 is quick for a low</li>
            <li><strong>+1 on hit</strong> — Can throw after</li>
            <li><strong>Quick check</strong> — Good for testing if opponent will duck</li>
            <li><strong>Less damage</strong> — Only 12 damage, but fast</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Low-Throw Mixup">
        <p>
          Lows and throws create a powerful mixup:
        </p>

        <KeyConcept title="The Low-Throw Game" icon="🔄">
          <ul>
            <li><strong>If they stand</strong> — Throw them</li>
            <li><strong>If they duck</strong> — Hit them with low</li>
            <li><strong>If they block low</strong> — You're still safe (f,f,n+2 is only -13)</li>
            <li><strong>If low hits</strong> — You're plus, throw again</li>
            <li><strong>If low CH</strong> — Launch for big damage</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Complete Mixup">
          Your opponent must think about: standing (throws), ducking (lows), blocking (mids), breaking throws 
          (1, 1+2, 2). That's 7+ options. <strong>You only think about: throw, low, or mid.</strong> The 
          mental advantage is massive.
        </TipBox>
      </Section>

      <Section title="Practice Time">
        <PracticeBox
          title="Low-Throw Mixup Practice"
          setup="Set dummy to Guard All. Practice mixing lows and throws."
          tasks={[
            { id: 'ch8-ffn2-throw', text: 'f,f,n+2 → throw 10 times', detail: 'Hit with low, then throw', type: 'counter', target: 10 },
            { id: 'ch8-low-mix', text: 'Mix f,f,n+2 and throws', detail: 'Keep opponent guessing', type: 'counter', target: 10 },
            { id: 'ch8-ch-launch', text: 'Land f,f,n+2 counter-hit 5 times', detail: 'Practice the CH combo', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Section title="The Complete Picture">
        <p>
          Lows keep opponents honest. If they always duck your throws, hit them with lows. If they always 
          stand, throw them. This is the <span className="highlight">low-throw mixup</span>.
        </p>

        <KeyConcept title="Master the Lows" icon="👑">
          <ul>
            <li><strong>f,f,n+2 is your best low</strong> — Long range, CH launcher, +7 on hit</li>
            <li><strong>db+3 for high crush</strong> — Goes under jabs, +4 on hit</li>
            <li><strong>d+3 for speed</strong> — Fast low check, +1 on hit</li>
            <li><strong>Mix with throws</strong> — Keep opponents guessing</li>
            <li><strong>Use sparingly</strong> — Lows are risky, don't spam them</li>
          </ul>
        </KeyConcept>

        <p>
          Master the low-throw mixup, and you'll dominate. Opponents will be stuck between standing (throws) 
          and ducking (lows). They can't win.
        </p>
      </Section>
    </Chapter>
  )
}
