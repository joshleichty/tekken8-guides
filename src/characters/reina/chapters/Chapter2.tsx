import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  ConceptBuilder,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="Why This Works"
      intro="The f,f+2 loop isn't magic. It works because of frame advantage—the invisible currency that determines who gets to attack. Understanding this will make you dangerous."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Master Sentai"
    >
      <Section title="The Invisible Clock">
        <p>
          Every move in Tekken has recovery frames. When your opponent blocks your attack, 
          both players recover at different speeds. The difference is called <strong>frame advantage</strong>.
        </p>

        <KeyConcept title="Frame Advantage in 30 Seconds" icon="⏱️">
          <ul>
            <li><strong>Positive frames (+)</strong> — You recover first. It's your turn.</li>
            <li><strong>Negative frames (-)</strong> — They recover first. It's their turn.</li>
            <li><strong>Zero (0)</strong> — Even. Whoever has the faster move wins.</li>
          </ul>
        </KeyConcept>

        <p>
          When f,f+2~F is blocked, you're <span className="highlight">+2</span>. That means you recover 
          2 frames before your opponent. Their fastest move (a jab) is 10 frames. Your fastest Sentai 
          option (SEN 3) is 12 frames.
        </p>

        <ConceptBuilder
          title="The Math That Wins Games"
          subtitle="Why +2 means you get to attack"
          foundation={[
            { label: 'Your frame advantage', input: '+2' },
            { label: 'SEN 3 startup', input: 'i12' },
          ]}
          newAddition={{
            label: 'Your effective speed',
            input: '12 - 2 = 10 frames',
            description: 'Same speed as their jab!'
          }}
          result="If they press jab (i10), you TRADE at worst. But SEN 3 is a homing high that does 22 damage and gives heat. Their jab does 5 damage. You win the trade MASSIVELY."
        />
      </Section>

      <Section title="What Happens When They Press">
        <p>
          Most players don't understand frame advantage. They see you in a stance and think 
          "I should interrupt!" Let's see what happens:
        </p>

        <KeyConcept title="The Jab Test" icon="🥊">
          <p><strong>Scenario:</strong> f,f+2~F on block (+2). They jab (i10).</p>
          <ul>
            <li><strong>Your SEN 3</strong> — You trade at frame 10 vs their frame 10</li>
            <li><strong>Result</strong> — Both moves connect. You deal 22. They deal 5. You get heat.</li>
            <li><strong>Reality</strong> — Most people press slower moves. You counter-hit them.</li>
          </ul>
        </KeyConcept>

        <p>
          But here's where it gets scary. If they press anything slower than a jab (like a mid check, 
          which is usually i13-15), they get <strong>counter-hit</strong>.
        </p>

        <MoveCard character="reina"
          videoId="SEN.3"
          move={{
            input: 'SEN 3 (on counter-hit)',
            hitLevel: ['h'],
            damage: '22',
            startup: 'i12~13',
            onBlock: '+1',
            onHit: '+7',
            onCH: '+7 (still heat engager)',
            tags: ['High', 'Heat Engager', 'Homing'],
            description: 'Counter-hits are common because you\'re plus. Same move, same reward, free heat.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="This Is Why They Stop Pressing">
          After getting hit by SEN 3 two or three times, most opponents realize: 
          "I can't press buttons here." That's when Reina's mixup game truly begins.
        </TipBox>
      </Section>

      <Section title="When They Block: The Real Mixup">
        <p>
          Smart opponents won't press after f,f+2~F. They'll just block. Now what?
        </p>

        <p>
          Remember: you're +2 in Sentai. You have time to choose ANY Sentai option, and your 
          opponent has to react. Here's what opens up:
        </p>

        <KeyConcept title="Your On-Block Options (Preview)" icon="🎲">
          <ul>
            <li><strong>SEN 3</strong> — Fast high, +1 on block, keeps pressure going</li>
            <li><strong>SEN 4</strong> — Slower mid, +4 on block, more advantage</li>
            <li><strong>SEN 2</strong> — i13 mid, -4 on block, tornado on hit</li>
            <li><strong>SEN 1+2</strong> — Transition to Heaven's Wrath stance</li>
            <li><strong>SEN 3+4</strong> — Low option (risky but mixup)</li>
            <li><strong>SEN grab</strong> — Unbreakable throw (Chapter 3)</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            We'll cover all of these in Chapter 3. For now, understand: you have OPTIONS.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Get Greedy">
          Just because you have options doesn't mean you should use all of them immediately. 
          In this chapter, we're learning WHY the system works. Chapter 3 teaches WHAT to do.
        </TipBox>
      </Section>

      <Section title="The Frame Trap Principle">
        <p>
          A <strong>frame trap</strong> is when you're plus enough that if your opponent presses, 
          they get hit. But not so plus that they can't make a choice.
        </p>

        <p>
          +2 is the perfect frame trap territory. They CAN press—their jab is "only" 10 frames. 
          But if they do, they eat your follow-up. The doubt is what makes Reina terrifying.
        </p>

        <KeyConcept title="Reina's Frame Trap Situations" icon="🪤">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Situation</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>Your Frames</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>What Can You Do?</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>f,f+2~F on block</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+2</td>
                <td style={{ padding: '8px' }}>Any SEN option is a frame trap</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>1,1,2 on hit</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+11 (SEN)</td>
                <td style={{ padding: '8px' }}>SEN options are guaranteed</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>SEN 3 on block</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ padding: '8px' }}>Can jab or continue pressure</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>SEN 4 on block</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                <td style={{ padding: '8px' }}>Strong frame trap into df+1</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>
      </Section>

      <Section title="What If They Duck?">
        <p>
          SEN 3 is a high. Good players will eventually crouch to make it whiff. 
          This is actually what you want.
        </p>

        <p>
          When they start ducking, you switch to <strong>mid options</strong>. SEN 4, SEN 2, 
          SEN 1+2. All mids that launch or give advantage on crouchers.
        </p>

        <KeyConcept title="The Crouch-Stand Mixup" icon="🎭">
          <ul>
            <li><strong>They stand block</strong> → SEN 3 chips, keeps pressure, gets heat</li>
            <li><strong>They crouch</strong> → SEN 4 or SEN 2 hit them for big damage</li>
            <li><strong>They press</strong> → Your faster option counter-hits them</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            This is why Reina's offense feels "unfair" — every defense has a counter.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Watch for the Crouch">
          If you see your opponent crouch after f,f+2, that's your cue to go for SEN 4 or SEN 2 
          next time. Conditioning is how you break open opponents.
        </TipBox>
      </Section>

      <Section title="Practice: Feel the Frame Advantage">
        <PracticeBox
          title="Frame Trap Drill"
          setup="Set opponent to Guard All, then 2nd Action: After Blocking → 1,1 (jab string)"
          tasks={[
            { id: 'ft-1', text: 'Do f,f+2~F → SEN 3. See the trade.', detail: 'Both moves should connect', type: 'toggle' },
            { id: 'ft-2', text: 'Set 2nd Action to df+1. Do f,f+2~F → SEN 3.', detail: 'You should counter-hit their mid', type: 'toggle' },
            { id: 'ft-3', text: 'Set opponent to crouch after blocking. Do f,f+2~F → SEN 4.', detail: 'Watch the mid hit their crouch', type: 'toggle' },
          ]}
        />

        <PracticeBox
          title="Human Simulation Drill"
          setup="Set opponent to Random Guard. Mix f,f+2~F → SEN 3 and SEN 4."
          tasks={[
            { id: 'mix-1', text: 'Land 3 SEN 3s on standing opponents', type: 'counter', target: 3 },
            { id: 'mix-2', text: 'Land 3 SEN 4s on crouching opponents', type: 'counter', target: 3 },
            { id: 'mix-3', text: 'Notice when they crouch vs stand', detail: 'This is the read you\'ll make in real matches', type: 'toggle' },
          ]}
        />
      </Section>

      <Section title="The Bigger Picture">
        <p>
          You've now learned the two core principles of Reina's offense:
        </p>

        <KeyConcept title="Reina's Pressure Philosophy" icon="⚡">
          <ol>
            <li><strong>Get plus frames</strong> — f,f+2~F is your entry ticket</li>
            <li><strong>Make them guess</strong> — High (SEN 3) vs Mid (SEN 4) vs Low (SEN 3+4)</li>
          </ol>
          <p style={{ marginTop: '12px' }}>
            Every stance option, every transition, every move you'll learn builds on this foundation. 
            Plus frames → Options → Opponent guesses wrong → You win.
          </p>
        </KeyConcept>

        <p>
          In the next chapter, we'll dive deep into Sentai stance itself—every option, 
          when to use it, and how to layer your offense for maximum confusion.
        </p>

        <TipBox variant="tip" title="Before You Move On">
          Can you answer these questions?
          <ul style={{ marginTop: '8px' }}>
            <li>Why is +2 on block so powerful?</li>
            <li>What happens if they press jab after f,f+2~F?</li>
            <li>What do you do if they start crouching?</li>
          </ul>
          If yes, you understand Reina's foundation. Let's build on it.
        </TipBox>
      </Section>

      <Collapsible title="Key Terms Reference" icon="📖">
        <div style={{ marginTop: '12px' }}>
          <ul>
            <li><strong>Frame Advantage</strong> — Who recovers first after a move. + means you, - means them.</li>
            <li><strong>Frame Trap</strong> — Using plus frames to make opponent's buttons get beat.</li>
            <li><strong>i10, i12, etc.</strong> — Startup frames. i10 = 10 frames to come out.</li>
            <li><strong>Counter Hit (CH)</strong> — Hitting someone during their attack startup. Extra damage/stun.</li>
            <li><strong>Trade</strong> — Both moves connect at the same time.</li>
            <li><strong>Conditioning</strong> — Making opponent expect one option, then using another.</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
