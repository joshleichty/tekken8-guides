import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter13({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={13}
      title="Oki & Pressure"
      intro="Oki (wake-up pressure) is where Jin truly shines. After knocking down an opponent, you have opportunities for massive damage. Let's learn to capitalize."
      onPrevious={() => goToChapter(12)}
      onNext={() => goToChapter(14)}
      nextLabel="Learn Counter-Hit Game"
    >
      <Section title="What is Oki?">
        <p>
          <strong>Oki</strong> (short for "okizeme") is the pressure you apply when your opponent 
          is on the ground. They have to get up eventually, and you control what happens when they do.
        </p>

        <KeyConcept title="Wake-up Options" icon="🛏️">
          <p>When knocked down, opponents can:</p>
          <ul>
            <li><strong>Stay down</strong> — Avoid attacks, tech roll later</li>
            <li><strong>Quick getup</strong> — Stand up immediately</li>
            <li><strong>Tech roll</strong> — Roll to the side</li>
            <li><strong>Wake-up kick</strong> — Attack while getting up</li>
            <li><strong>Spring kick</strong> — Low attack from the ground</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Jin's Oki Tools">
        <SubSection title="d+2 — The Ground Hit">
          <MoveCard character="jin"
            move={{
              input: 'd+2',
              hitLevel: ['l'],
              damage: '22',
              startup: 'i22-23',
              onBlock: '-14',
              onHit: '+4c',
              tags: ['Low', 'High Crush', 'Ground Hit'],
              description: 'Low that hits grounded opponents. Key oki tool.',
              notes: [
                'Hits grounded opponents',
                'If they stay down, they eat this',
                '+4 on standing hit for continued pressure'
              ]
            }}
          />
          <p>
            d+2 <strong>hits grounded opponents</strong>. If they try to stay on the ground to 
            avoid your mixup, d+2 punishes them. This forces them to get up and deal with your pressure.
          </p>
        </SubSection>

        <SubSection title="ZEN 4 — The Dive">
          <MoveCard character="jin"
            move={{
              input: 'ZEN 4',
              hitLevel: ['m'],
              damage: '25',
              startup: 'i27-33',
              onBlock: '+2~+8',
              onHit: '+17d~+23d',
              tags: ['Ground Hit', 'Knockdown', 'Plus on Block'],
              description: 'Hits grounded. If they block getting up, you\'re plus.',
              notes: [
                'Hits grounded opponents',
                'Knockdown on hit — d+2 is guaranteed after',
                'Plus on block for continued pressure'
              ]
            }}
          />
          <p>
            ZEN 4 is one of Jin's best oki tools. It hits grounded, and if they block it on wakeup, 
            you're <strong>plus</strong>. This lets you continue pressure indefinitely.
          </p>
        </SubSection>

        <SubSection title="CD+1 — Electric Ground Hit">
          <MoveCard character="jin"
            move={{
              input: 'f,n,d,df:1',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i16-17',
              onBlock: '-13',
              onHit: '+36a (+26)',
              tags: ['Ground Hit', 'Launcher', 'Tornado'],
              description: 'The electric version (CD+1) hits grounded and relaunches.',
              notes: [
                'Must be the just-frame version to hit grounded',
                'Relaunches for another combo',
                'Loops into itself for devastating oki'
              ]
            }}
          />
          <p>
            CD+1 <strong>hits grounded</strong> when done correctly. This can loop into itself — 
            knock them down, CD+1, combo, knock down, CD+1 again. Devastating when mastered.
          </p>
        </SubSection>
      </Section>

      <Section title="Oki Situations">
        <SubSection title="After Combo Knockdown">
          <p>
            Your standard combo ends with a knockdown. From here:
          </p>
          <ol>
            <li><strong>If they stay down</strong> → d+2 or ZEN 4 hits them</li>
            <li><strong>If they quick getup</strong> → Wave dash mixup (hell sweep vs mid)</li>
            <li><strong>If they tech roll</strong> → Chase and continue pressure</li>
          </ol>
        </SubSection>

        <SubSection title="After Hellsweep">
          <p>
            CD+4,2 (hellsweep) knocks down and leaves them close:
          </p>
          <ul>
            <li><strong>d+2</strong> hits them staying down</li>
            <li><strong>df+4</strong> catches quick getup (neutral on block)</li>
            <li><strong>db+4</strong> catches standing opponents</li>
          </ul>
        </SubSection>

        <SubSection title="After df+1,4 Knockdown">
          <p>
            df+1,4 counter hit knocks down:
          </p>
          <ul>
            <li>Walk up ZEN 4 for ground hit</li>
            <li>Or wait for getup and mixup</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="The Wave Dash Mixup">
        <p>
          Jin's core offensive mixup comes from his <strong>crouch dash (wave dash)</strong>:
        </p>

        <KeyConcept title="Wave Dash Options" icon="🌊">
          <ul>
            <li><strong>CD+4 (Hellsweep)</strong> — Low, knocks down, into more oki</li>
            <li><strong>CD+2 (Electric)</strong> — High, plus on block, launches</li>
            <li><strong>CD+1</strong> — Mid, launches, unsafe</li>
            <li><strong>ff+3</strong> — Mid, safe, wall splats</li>
            <li><strong>ff+2</strong> — Mid Heat engager, safe</li>
            <li><strong>Throw</strong> — Command grabs from crouch dash</li>
          </ul>
        </KeyConcept>

        <p>
          This creates a classic Mishima mixup: <strong>hellsweep (low) vs mid launcher</strong>. 
          If they stand block, hellsweep hits. If they crouch, they eat a mid launcher.
        </p>
      </Section>

      <Section title="Wall Pressure">
        <p>
          At the wall, Jin becomes extremely dangerous with ZEN:
        </p>

        <SubSection title="ZEN 3+4 Loop">
          <ol>
            <li>Get them to the wall</li>
            <li>Enter ZEN (b+3+4)</li>
            <li>Do ZEN 3+4 — if they block, you're massively plus</li>
            <li>You're plus — do it again, or mix with ZEN 4 (mid)</li>
            <li>If they try to duck → ZEN 4 hits them mid</li>
            <li>Repeat until they guess wrong or die to chip</li>
          </ol>
        </SubSection>

        <SubSection title="Wall Options">
          <ul>
            <li><strong>ZEN 3+4</strong> — High, plus on block, chip damage</li>
            <li><strong>ZEN 4</strong> — Mid, plus on block, knockdown</li>
            <li><strong>ZEN 1+2</strong> — Low for mixup</li>
            <li><strong>EWHF</strong> — Plus on block, launches pressers</li>
            <li><strong>Throw</strong> — For opponents who freeze</li>
          </ul>
        </SubSection>

        <TipBox variant="tip" title="Wall Chip">
          ZEN 3+4 does chip damage even on block. Multiple blocked ZEN 3+4s can chip kill 
          a low-health opponent. Don't let them breathe at the wall.
        </TipBox>
      </Section>

      <Section title="Pressure Flowchart">
        <KeyConcept title="General Pressure Flow" icon="🔄">
          <ol>
            <li><strong>Start with jab (1)</strong> — You're +1</li>
            <li><strong>If they block → df+1 or f+4</strong> — Check with mids</li>
            <li><strong>If they press → Counter hit damage</strong></li>
            <li><strong>If they respect → db+4 or d+4</strong> — Chip with lows</li>
            <li><strong>If they freeze → Throw</strong></li>
            <li><strong>On knockdown → Oki</strong> — d+2, ZEN 4, or mixup</li>
            <li><strong>At wall → ZEN pressure</strong></li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Chapter Summary">
        <ul>
          <li><strong>d+2</strong> — Hits grounded opponents</li>
          <li><strong>ZEN 4</strong> — Hits grounded, plus on block</li>
          <li><strong>CD+1</strong> — Hits grounded (just-frame), relaunches</li>
          <li><strong>Wave dash mixup</strong> — Hellsweep vs mid launcher</li>
          <li><strong>Wall ZEN loop</strong> — ZEN 3+4 into itself or ZEN 4</li>
        </ul>
        <p>
          Jin's oki and wall game are where matches are won. Knockdowns lead to more knockdowns 
          when you apply pressure correctly.
        </p>
      </Section>
    </Chapter>
  )
}
