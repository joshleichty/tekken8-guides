import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  ExecutionBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter16({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={16}
      title="Taunt Fundamentals"
      intro="Taunt is Bryan's signature mechanic — an unblockable that gives +16 on hit for guaranteed follow-ups. This chapter covers the basics. Mastery takes years, but you can start getting value now."
      onPrevious={() => goToChapter(15)}
      onNext={() => goToChapter(17)}
      nextLabel="Frame Traps"
    >
      <Section title="Disclaimer">
        <TipBox variant="warning" title="Taunt is HARD">
          If you're new to Bryan, <strong>taunt is optional</strong>. You can be an effective 
          Bryan player without taunt. Learn the fundamentals first. Come back to taunt when 
          your basics are solid.
        </TipBox>

        <p>
          That said, taunt is <span className="highlight">extremely cool</span> and one of the 
          things that makes Bryan unique. Even basic taunt usage adds threat to your wall game.
        </p>
      </Section>

      <Section title="How Taunt Works">
        <MoveCard character="bryan"
          move={{
            input: '1+3+4',
            hitLevel: ['m!'],
            damage: '0',
            startup: 'i28-31',
            onBlock: 'N/A',
            onHit: '+16',
            tags: ['Unblockable', 'Snake Eyes'],
            description: 'Bryan\'s taunt. Unblockable. +16 on hit for guaranteed follow-ups.',
            notes: [
              'Can be cancelled with any input frames 1-31',
              'Gives Snake Eyes on completion',
              'Extremely slow (i28)',
              '-34 if not cancelled'
            ]
          }}
        showVideo
        />

        <KeyConcept title="Taunt Properties" icon="🎭">
          <ul>
            <li><strong>Unblockable:</strong> Must be avoided, not blocked</li>
            <li><strong>+16 on hit:</strong> Moves up to i16 are guaranteed</li>
            <li><strong>Very slow:</strong> i28 means you need setups to land it</li>
            <li><strong>Snake Eyes:</strong> Completing taunt gives Snake Eyes</li>
            <li><strong>Cancellable:</strong> You can cancel with back or another input</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Taunt Follow-Ups">
        <p>
          When taunt hits, you're +16. The faster your follow-up, the more <span className="highlight">
          frame leniency</span> you have:
        </p>

        <SubSection title="Easy Follow-Ups (More Leniency)">
          <ul>
            <li><strong>1,4</strong> — i10, 6 frames of leniency, 19 damage</li>
            <li><strong>2,3</strong> — i10, 6 frames of leniency, 24 damage</li>
            <li><strong>4,3</strong> — i12, 4 frames of leniency, 27 damage</li>
            <li><strong>df+2,1</strong> — i13, 3 frames of leniency, 23 damage</li>
          </ul>
        </SubSection>

        <SubSection title="Hard Follow-Ups (Tight Timing)">
          <ul>
            <li><strong>uf+2,2,2,3</strong> — i13, 3 frames of leniency, 34 damage</li>
            <li><strong>f+2,1,4</strong> — i15, 1 frame of leniency, 42 damage</li>
            <li><strong>b+4</strong> — i16, JUST FRAME (0 leniency), 18+ damage (wall splat)</li>
            <li><strong>f,b+2</strong> — Just frame timing, launcher (hardest)</li>
          </ul>
        </SubSection>

        <TipBox variant="tip" title="Start Simple">
          Begin with 1,4 or 4,3 follow-ups. They're easy and do decent damage. Only 
          move to b+4 and f,b+2 when you're consistent with the basics.
        </TipBox>
      </Section>

      <Section title="Taunt Setups">
        <SubSection title="Wall Oki Setup">
          <p>
            The most common taunt setup is <strong>after a wall combo when they tech roll</strong>.
          </p>

          <ExecutionBox title="Basic Wall Taunt Setup" icon="🎮">
            <ol>
              <li>Do a wall combo ending with <strong>db+1+2</strong> (leaves them face up)</li>
              <li>Do a <strong>short dash forward</strong></li>
              <li>Input <strong>taunt (1+3+4)</strong></li>
              <li>If they tech roll, taunt hits</li>
              <li>Cancel and input follow-up</li>
            </ol>
            <p>
              <strong>Important:</strong> You must <strong>double tap 1</strong> during taunt 
              to make it track tech rolls properly. Hold 3+4, tap 1 twice quickly.
            </p>
          </ExecutionBox>
        </SubSection>

        <SubSection title="Why Double Taunt?">
          <KeyConcept title="Double Taunt Tracking" icon="🔄">
            <p>
              If you do taunt normally, it doesn't track tech rolls. Bryan's knee stays 
              in place while they roll away. <strong>Double taunt</strong> (tapping 1 twice 
              while holding 3+4) makes taunt track properly.
            </p>
          </KeyConcept>
        </SubSection>

        <Collapsible title="Other Taunt Setups" icon="📖">
          <p>Advanced players use taunt in other situations:</p>
          <ul>
            <li><strong>After heat smash at wall:</strong> +17 gives taunt setups</li>
            <li><strong>Hard read in neutral:</strong> Extremely risky but stylish</li>
            <li><strong>After knockdown:</strong> If opponent doesn't wake up quickly</li>
          </ul>
          <p>
            For now, focus on the wall oki setup. It's the most reliable and practical.
          </p>
        </Collapsible>
      </Section>

      <Section title="Execution Tips">
        <ul>
          <li><strong>Double taunt</strong> (hold 3+4, tap 1 twice) — Better tracking</li>
          <li><strong>Start with 1,4 follow-up</strong> — 6 frames of leniency, most forgiving</li>
          <li><strong>Practice at the wall</strong> — Wall combo ending with db+1+2, then taunt</li>
        </ul>

        <TipBox variant="warning" title="Patience Required">
          Taunt takes <strong>hundreds of hours</strong> to master. The just-frame 
          follow-ups (b+4, f,b+2) are extremely difficult. Don't get frustrated — even 
          pro players drop taunt combos. Start with easy follow-ups and build up.
        </TipBox>
      </Section>

      <Section title="When to Taunt">
        <KeyConcept title="Taunt Decision Making" icon="🤔">
          <ul>
            <li><strong>At the wall:</strong> Primary taunt location. Oki setups.</li>
            <li><strong>When ahead:</strong> You can afford to style</li>
            <li><strong>Against players who tech roll:</strong> They walk into taunt</li>
            <li><strong>NOT when:</strong> You need guaranteed damage, opponent stays down</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Oki Alternative">
          If the opponent stays down to avoid taunt, you can use ground hits like 
          d+4,4,4 or wait for wake-up and pressure. They're giving up oki by avoiding 
          taunt — that's still a win.
        </TipBox>
      </Section>
    </Chapter>
  )
}
