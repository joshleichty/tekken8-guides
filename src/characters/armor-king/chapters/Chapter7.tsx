import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, ExecutionBox, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Whiff Punishment"
      intro="Armor King has elite whiff punishment. Dark Upper alone makes him terrifying at punishing mistakes. Let's learn all your options."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Continue to Bad Jaguar"
    >
      <Section title="Dark Upper — CD+2">
        <p>The signature Armor King whiff punish. Fast, long range, and only -10 on block.</p>

        <MoveCard character="armor-king"
          input="CD+2 (f,n,d,df+2)"
          tags={['high', 'launcher']}
          description={
            <>
              The legendary Dark Upper. Incredible range, fast startup, full combo on hit, and only -10 on block. 
              This is your primary whiff punisher.
            </>
          }
          stats={{
            startup: 'i11-12',
            onBlock: '-10',
            onHit: '+36a Launch',
          }}
        />

        <ExecutionBox title="How to Execute Dark Upper (CD+2)" icon="🎮">
          <ol>
            <li><strong>f</strong> — Tap forward</li>
            <li><strong>n</strong> — Return to neutral (brief)</li>
            <li><strong>d,df+2</strong> — Roll to down, then down-forward while pressing 2</li>
          </ol>
          <p><strong>Execution Tips:</strong></p>
          <ul>
            <li>The 2 button should be pressed as you hit df, not before</li>
            <li>Think "swoop" — forward, release, swoop down+2</li>
            <li>Practice from sidestep: SS → CD+2 to punish linear moves</li>
          </ul>
          <p><strong>Alternative notation:</strong> Some players find f,n,df+2 easier (skipping d)</p>
        </ExecutionBox>
      </Section>

      <Section title="b+3 — Homing Tornado Launcher">
        <MoveCard character="armor-king"
          input="b+3"
          tags={['high', 'homing', 'Tornado']}
          description="Long range homing high. Great for catching backdashes and whiffs at range. Tornado launcher on hit for massive damage."
          stats={{
            startup: 'i16',
            onBlock: '-12',
            onHit: '+66a Tornado',
          }}
        />

        <TipBox title="b+3 for Push-Back Punishes">
          <p>
            Use b+3 to punish moves with push-back that are -16 or worse, like Heihachi's ff+2, Paul's Deathfist, 
            or Jack's df+1,2,1,2. The range is excellent!
          </p>
        </TipBox>
      </Section>

      <Section title="db+2 Strings — 14-Frame Whiff Punish">
        <MoveCard character="armor-king"
          input="db+2,3"
          tags={['mid', 'mid']}
          description="Excellent range for a 14-frame punish. Mid-mid, balcony breaks. Use when Dark Upper is too risky or you need a mid."
          stats={{
            startup: 'i14',
            onBlock: '-12',
            onHit: '+11a',
          }}
        />
      </Section>

      <Section title="b+1,2 — 12-Frame Range Monster">
        <MoveCard character="armor-king"
          input="b+1,2"
          tags={['high', 'mid']}
          description={
            <>
              Outstanding range for a 12-frame punish. Remember to hold forward for Bad Jaguar entry at +8!
            </>
          }
          stats={{
            startup: 'i12',
            onBlock: '-12',
            onHit: '+8',
          }}
        />
      </Section>

      <Section title="f+1+4 — The Shoulder">
        <MoveCard character="armor-king"
          input="f+1+4"
          tags={['mid']}
          description="13-frame shoulder tackle. Great range but -19 on block — only use as a whiff punish! Balcony breaks."
          stats={{
            startup: 'i13',
            onBlock: '-19',
            onHit: '+17d',
          }}
        />

        <TipBox title="Shoulder is -19!" variant="danger">
          <p>
            Only use f+1+4 as a whiff punish. If blocked, you're eating a launch. The range is great, but the risk is huge.
          </p>
        </TipBox>
      </Section>

      <Section title="ff+4 — Heat Engager Whiff Punish">
        <MoveCard character="armor-king"
          input="ff+4"
          tags={['mid', 'Heat Engager']}
          description="14-frame startup, safe at -8, and a heat engager. Great for punishing whiffs when you want to go into Heat."
          stats={{
            startup: 'i14',
            onBlock: '-8',
            onHit: '+13c',
          }}
        />
      </Section>

      <KeyConcept title="Whiff Punishment Strategy" icon="🎯">
        <p>When to use each whiff punish:</p>
        <ul>
          <li><strong>CD+2</strong> — Your go-to. Best range, safest, launches.</li>
          <li><strong>b+3</strong> — For push-back moves or when you need homing</li>
          <li><strong>db+2,3</strong> — When you need a mid or want balcony break</li>
          <li><strong>b+1,2</strong> — Quick punish that leads to Bad Jaguar</li>
          <li><strong>f+1+4</strong> — Only on guaranteed whiffs (very risky)</li>
          <li><strong>ff+4</strong> — When you want to activate Heat</li>
        </ul>
      </KeyConcept>

      <PracticeBox
        title="Whiff Punishment Practice"
        setup="Set dummy to After Block → 1 (jab). Block the jab, then sidestep and whiff punish with Dark Upper. This simulates real whiff punish situations."
        tasks={[
          { id: 'ch7-cd2', text: 'Sidestep → CD+2 (Dark Upper)', detail: 'Practice the SS → crouch dash → Dark Upper sequence', type: 'counter', target: 15 },
          { id: 'ch7-b3', text: 'Punish a backdash with b+3', detail: 'Set dummy to backdash, then whiff punish', type: 'counter', target: 10 },
          { id: 'ch7-b12', text: 'Whiff punish with b+1,2~F', detail: 'Practice entering Bad Jaguar after whiff punish', type: 'counter', target: 10 },
          { id: 'ch7-ff4', text: 'Whiff punish with ff+4 (Heat Engager)', detail: 'Activate Heat from a whiff punish', type: 'counter', target: 5 },
        ]}
      />

      <Quiz
        question="Your opponent whiffs a move at range 2. What's your best whiff punish option?"
        options={[
          { text: 'f+1+4 — it has the most range', isCorrect: false },
          { text: 'CD+2 — best range, safest, launches', isCorrect: true },
          { text: 'df+3 — fastest option', isCorrect: false },
          { text: 'Just block and wait', isCorrect: false },
        ]}
        correctFeedback="Correct! Dark Upper (CD+2) is your primary whiff punisher. It has incredible range, launches for full combo, and is only -10 on block if they somehow block it."
        incorrectFeedback="Not quite. While f+1+4 has good range, it's -19 on block which is launch punishable. CD+2 is safer, has great range, and launches. It's your go-to whiff punish!"
      />
    </Chapter>
  )
}
