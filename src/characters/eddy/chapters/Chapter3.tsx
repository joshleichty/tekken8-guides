import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Into the Flow"
      intro="Every stance entry in Eddy's kit is designed to leave you plus — on hit or on block. These three moves are your main doors into the stance game. Each one deposits you in a different stance with different frame advantages, giving you different options on the other side."
      hasPrevious={true}
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="The Two Stances"
    >
      <Section title="The Three Doors">
        <p>
          Eddy has many ways to enter his stances, but three moves form the core of his approach game.
          Each follows the same principle — <strong>contact starts the mixup</strong> — but they serve
          different situations.
        </p>
        <ul>
          <li><strong><code>f,f+3</code></strong> — Low approach into RLX. You learned this in Chapter 1.</li>
          <li><strong>WR 3 (<code>f,f,F+3</code>)</strong> — Mid approach into HSP. Plus on block.</li>
          <li><strong><code>FC df+3</code></strong> — Mid from crouch into RLX. Plus on block.</li>
        </ul>
        <p>
          Together, these three doors cover low and mid, standing and crouching, RLX and HSP entry.
          They give you a way into the engine from any situation.
        </p>
      </Section>

      <Section title="Door 1: f,f+3 (Low → RLX)">
        <p>
          You drilled this in Chapter 1. Quick recap: i21 low, +6 on hit into RLX, -14 on block in
          FC. Your primary approach from neutral when you want to open the opponent up with a low
          and immediately start the RLX 50/50. High crushes early, so it ducks under retaliatory jabs.
        </p>
        <p>
          <strong>When to use it:</strong> From range 2-3 when the opponent is standing. After landing
          a <code>df+2</code> that pushes them back. Anytime you want to enter RLX and they're not
          expecting the low. Extremely strong as a round ender when they're at low health and have to
          respect the damage.
        </p>
        <p>
          <strong>When NOT to use it:</strong> Against opponents who sidestep left consistently. Against
          characters with strong i14 while standing punishes. When you've used it three times in a row
          and they're clearly looking for it.
        </p>
      </Section>

      <Section title="Door 2: WR 3 (Mid → HSP)">
        <MoveCard character="eddy"
          videoId="f,f,F+3"
          move={{
            input: 'f,f,F+3',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i25~27',
            onBlock: '+8',
            onHit: '+14a',
            tags: ['Mid', 'Approach', 'Plus on Block', 'HSP Transition'],
            description: 'Eddy\'s running mid. +8 on block into Handstand with chip damage. On hit, wall splats. This is your primary "I\'m getting in and you can\'t stop me" button.',
            notes: [
              '+8 on block into HSP — your turn no matter what',
              'Wall splat on hit for big damage',
              '9 chip damage on block',
              'Low crushes from frame 9',
              'Linear — can be sidestepped left',
            ],
          }}
          showVideo
        />

        <p>
          This is the move that defines Eddy's approach game. <strong>+8 on block.</strong> That means
          even when the opponent successfully blocks your approach, you're still in Handstand with a
          massive frame advantage. Their jab is i10 — that comes out at effective frame 18. Your
          HSP 4 is i12 — that comes out at effective frame 4. You win every exchange.
        </p>

        <KeyConcept title="The WR 3 Machine" icon="🔑">
          <p>
            After a blocked WR 3, you're +8 in HSP. Here's what the opponent faces:
          </p>
          <ul>
            <li><strong>They press a button</strong> → HSP 4 counter hits them (i12 mid, +10 on hit, CH leads to HSP 4,2 tornado combo)</li>
            <li><strong>They stand and block</strong> → HSP 1 hits for +8 into RLX, or HSP unbreakable throw grabs them</li>
            <li><strong>They duck the throw</strong> → HSP 4 or HSP 1+2 (power crush mid) hits them</li>
            <li><strong>They sidestep</strong> → This is the real answer. WR 3 and HSP options are both linear.</li>
          </ul>
        </KeyConcept>

        <p>
          <strong>When to use it:</strong> From range 3+ as your main approach tool. When you want
          guaranteed plus frames without risking a punish. When you want to enter HSP specifically
          (especially if you have Mandinga stacks).
        </p>

        <TipBox variant="warning" title="The Linearity Problem">
          WR 3 is extremely linear. Sidestep left beats it cleanly. If your opponent starts stepping,
          you need to mix in <code>b+1</code> (tracks both sides), <code>uf+4</code> (homing mid), or
          <code>qcb+4</code> (homing high) to keep them honest. Don't run into a wall of sidesteps
          with the same linear approach.
        </TipBox>
      </Section>

      <Section title="Door 3: FC df+3 (Crouch Mid → RLX)">
        <MoveCard character="eddy"
          videoId="FC.df+3"
          move={{
            input: 'FC df+3',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i22~23',
            onBlock: '+6',
            onHit: '+9c',
            onCH: '+41a',
            tags: ['Mid', 'Plus on Block', 'RLX Transition', 'Crouch Entry'],
            description: 'A mid from full crouch that transitions to RLX with plus frames on block. On counter hit, launches for a full combo. This is how you weaponize your crouch game.',
            notes: [
              '+6 on block into RLX with chip damage — your turn even on block',
              '+9 on hit into RLX — 50/50 is fully enforced',
              'CH launcher — full combo opportunity',
              'Requires full crouch entry (d+3, b+1 on hit, FC, etc.)',
            ],
          }}
          showVideo
        />

        <p>
          This is where Eddy's crouch game becomes terrifying. After any move that leaves you in
          full crouch — <code>d+3</code> on hit, <code>b+1</code> on hit, generic crouch, blocking
          a low — you can go for <code>FC df+3</code> as the mid option or <code>FC df+4</code>{' '}
          as the low option. The mid puts you in RLX at +6 with chip damage even on block. The low
          leaves you in HSP at +9.
        </p>

        <p>
          <strong>The crouch 50/50:</strong> After any move that leaves you in FC at plus frames,
          your opponent has to guess — <code>FC df+3</code> (mid, +6 RLX on block, launcher on CH) or
          <code>FC df+4</code> (low, transitions to HSP). Both options deposit you into a stance
          with advantage. Both sides of the guess lead to more guessing.
        </p>

        <KeyConcept title="Chain Reactions" icon="🌀">
          <p>
            Notice how the three doors chain together. <code>b+1</code> hits and leaves you in FC at +8.
            From FC, <code>FC df+3</code> puts you in RLX at +6. From RLX, <code>RLX 3,3</code> builds
            Mandinga. Mandinga unlocks new HSP options. And WR 3 gets you into HSP at +8 to use them.
            Every door leads to another door. Every advantage creates a new advantage. That's the flywheel.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Choosing Your Door">
        <p>
          The three doors aren't interchangeable. Each one fits specific situations:
        </p>
        <ul>
          <li><strong><code>f,f+3</code></strong> — When you want to open them up with a low. Best from range 2-3 against standing opponents. Risky but high reward, especially on CH.</li>
          <li><strong>WR 3</strong> — When you want guaranteed plus frames regardless of hit/block. Best from range 3+ as your primary approach. Safe but linear.</li>
          <li><strong><code>FC df+3</code></strong> — When you're already crouching from a previous move. Best after <code>d+3</code> on hit, <code>b+1</code> on hit, or any situation that leaves you in FC.</li>
        </ul>

        <PracticeBox
          title="The Three Doors"
          setup="Practice Mode. Set dummy to Stand Guard. Start at round-start distance."
          tasks={[
            { id: 'eddy-wr3-basic', text: 'Run into WR 3 (f,f,F+3) five times', detail: 'You need a running start — tap f,f then hold F+3. See the +8 and HSP transition on block.', type: 'counter', target: 5 },
            { id: 'eddy-wr3-hsp4', text: 'After blocked WR 3, press 4 from HSP five times', detail: 'This is HSP 4, your fastest HSP mid. At +8, this beats everything they press.', type: 'counter', target: 5 },
            { id: 'eddy-d3-fcdf3', text: 'Do d+3 on hit, then FC df+3 five times', detail: 'd+3 leaves you in crouch at +4. FC df+3 is the mid follow-up that puts you in RLX.', type: 'counter', target: 5 },
            { id: 'eddy-b1-fcdf3', text: 'Do b+1 on hit, then FC df+3 five times', detail: 'b+1 leaves you in crouch at +8. The FC df+3 follow-up is even more enforced here.', type: 'counter', target: 5 },
            { id: 'eddy-mix-doors', text: 'Alternate between all three doors naturally', detail: 'Start with f,f+3, then WR 3, then d+3 → FC df+3. Feel how each one deposits you in stance differently.', type: 'toggle' },
          ]}
        />
      </Section>

      <Section title="What's Next">
        <p>
          You can get in. You can enter both stances with advantage. Now you need to know
          what to <em>do</em> once you're there. The next chapter breaks down HSP and RLX
          together — not as separate move lists, but as two halves of one pressure system.
          You'll learn the core options from each stance, the 50/50 that defines Eddy's damage,
          and how the two stances flow into each other.
        </p>
      </Section>
    </Chapter>
  )
}
