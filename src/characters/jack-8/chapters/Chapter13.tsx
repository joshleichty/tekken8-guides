import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Quiz
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter13({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={13}
      title="Heat System"
      intro="Jack's Heat is unique — he gains permanent access to Gamma Charge moves and has the fastest Heat Smash in the game. This chapter teaches you how to maximize Heat."
      onPrevious={() => goToChapter(12)}
      onNext={() => goToChapter(14)}
      nextLabel="Throws & Grabs"
    >
      <Section title="What Jack Gets in Heat">
        <p>
          Unlike some characters whose Heat is underwhelming, Jack's Heat is 
          <span className="highlight">genuinely powerful</span>. Here's why:
        </p>

        <KeyConcept title="Jack's Heat Benefits" icon="🔥">
          <ul>
            <li><strong>Permanent GMC access</strong> — GMC 1 and GMC 2 always available</li>
            <li><strong>Fastest Heat Smash (i10)</strong> — 50 damage, best in game</li>
            <li><strong>Heat-only moves</strong> — H.f+3+4 and H.uf+3</li>
            <li><strong>Chip damage on everything</strong> — All moves chip in Heat</li>
            <li><strong>GMH extends Heat timer</strong> — Entering GMH recovers 0.5s</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Key Difference">
          In Heat, <strong>GMC moves are always powered up</strong>. You don't need to absorb 
          an attack first. GMC 1 is always safe and launches. GMC 2 is always a guard break.
        </TipBox>
      </Section>

      <Section title="Heat Engagers">
        <SubSection title="b+2 — Primary Engager">
          <MoveCard character="jack-8"
            move={{
              input: 'b+2',
              hitLevel: ['m'],
              damage: '27',
              startup: 'i19',
              onBlock: '+2',
              onHit: '+2a',
              tags: ['Mid', 'Heat Engager', 'Plus on Block', 'Wall Splat'],
              description: 'Your main Heat engager. Plus on block, wall splats.',
              notes: [
                'Heat Dash gives +5, +36a (+26)',
                'Can charge for more damage and GMC',
                'Gains GMC on Heat activation'
              ]
            }}
          />
        </SubSection>

        <SubSection title="b+1+2 — Long Range Engager">
          <MoveCard character="jack-8"
            move={{
              input: 'b+1+2',
              hitLevel: ['m'],
              damage: '28',
              startup: 'i14',
              onBlock: '-19',
              onHit: '-1d (-10)',
              tags: ['Mid', 'Heat Engager', 'Long Range'],
              description: 'Long range Heat engager. Use for punishing.',
              notes: [
                '-19 on block — punish use only',
                'Excellent range for an i14',
                'Gains GMC on Heat activation'
              ]
            }}
          />
        </SubSection>

        <SubSection title="GMH 4 — Stance Engager">
          <MoveCard character="jack-8"
            move={{
              input: 'GMH 4',
              hitLevel: ['h'],
              damage: '30',
              startup: 'i14-18',
              onBlock: '+4',
              onHit: '+21d (+11)',
              tags: ['High', 'Heat Engager', 'Plus on Block', 'Chip'],
              description: 'Fast high from GMH. Heat engager.',
              notes: [
                '+4 on block',
                '9 chip damage',
                'Gains GMC on Heat activation'
              ]
            }}
          />
        </SubSection>

        <SubSection title="GMH 3+4 — Power Crush Engager">
          <MoveCard character="jack-8"
            move={{
              input: 'GMH 3+4',
              hitLevel: ['sm'],
              damage: '20',
              startup: 'i20',
              onBlock: '-13',
              onHit: '+40d (-18)',
              tags: ['SM', 'Heat Engager', 'Power Crush'],
              description: 'Power crush Heat engager from GMH.',
              notes: [
                'Power crush frames 6+',
                'Gains GMC on Heat activation'
              ]
            }}
          />
        </SubSection>

        <SubSection title="d+2+4 — Crouch Throw Engager">
          <MoveCard character="jack-8"
            move={{
              input: 'd+2+4',
              hitLevel: ['th'],
              damage: '25',
              startup: 'i12',
              onBlock: '-',
              onHit: '+6d',
              tags: ['Throw', 'Heat Engager', 'Crouch Throw'],
              description: 'Crouch throw that activates Heat. Unbreakable.',
              notes: [
                'Unbreakable crouch throw',
                'Cannot cancel into Heat Dash',
                'Also available as GMH 2+4'
              ]
            }}
          />
        </SubSection>
      </Section>

      <Section title="Heat Smash">
        <MoveCard character="jack-8"
          move={{
            input: 'H.2+3',
            hitLevel: ['h', 'm', 't'],
            damage: '50',
            startup: 'i10',
            onBlock: '-9',
            onHit: '-2d (-12)',
            tags: ['Heat Smash', 'i10', 'Fastest in Game', 'Wall Break'],
            description: 'THE FASTEST HEAT SMASH IN TEKKEN 8. i10 for 50 damage.',
            notes: [
              'i10 startup — fastest in the game',
              'Can wall break',
              '10 chip damage on block',
              'Ends your Heat'
            ]
          }}
        showVideo
        />

        <SubSection title="Why i10 Matters">
          <p>
            Most Heat Smashes are i15-i20. Jack's is <span className="highlight">i10</span>. 
            This means:
          </p>
          <ul>
            <li><strong>i10 punish</strong> — Replaces f+2 for much better damage</li>
            <li><strong>Guaranteed after GMC 2</strong> — Guard break + Heat Smash = 36 damage</li>
            <li><strong>Panic option</strong> — i10 interrupts almost anything</li>
          </ul>
        </SubSection>

        <TipBox variant="warning" title="Don't Waste It">
          Heat Smash ends your Heat. In Heat, you have <strong>permanent GMC access</strong>. 
          Consider whether keeping GMC is more valuable than the Heat Smash damage.
        </TipBox>
      </Section>

      <Section title="Heat-Only Moves">
        <SubSection title="H.f+3+4 — Heat Headbutt">
          <MoveCard character="jack-8"
            move={{
              input: 'H.f+3+4',
              hitLevel: ['m'],
              damage: '30',
              startup: 'i22-23',
              onBlock: '+0',
              onHit: '+9c',
              tags: ['Mid', 'Heat Only', 'Headbutt', 'GMH Transition'],
              description: 'Heat-only headbutt. Transitions to GMH.',
              notes: [
                '+8 on block into GMH, +17c on hit',
                'Uses some heat time',
                '6 chip damage'
              ]
            }}
          />
        </SubSection>

        <SubSection title="H.uf+3 — Heat Jumping Low">
          <MoveCard character="jack-8"
            move={{
              input: 'H.uf+3',
              hitLevel: ['L'],
              damage: '16 (spike)',
              startup: 'i19',
              onBlock: '-12',
              onHit: '+8c GMH',
              tags: ['Low', 'Heat Only', 'Spike', 'Auto GMH'],
              description: 'Heat-only jumping low. Auto-enters GMH on hit.',
              notes: [
                'Only recoverable damage',
                'Cannot KO',
                'Low crush 9',
                '3 chip damage'
              ]
            }}
          />
        </SubSection>
      </Section>

      <Section title="GMC 2 + Heat Smash">
        <p>
          This is Jack's <span className="highlight">scariest Heat option</span>:
        </p>

        <KeyConcept title="The Guard Break Loop" icon="💀">
          <ol>
            <li>Enter GMH (from transition or raw)</li>
            <li>Use GMC 2 (always guard break in Heat)</li>
            <li>If they block → +11 guard break → Heat Smash guaranteed (36 damage)</li>
            <li>If they duck → GMC 1 launches them</li>
          </ol>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            They can't win. Block = eat 36 damage. Duck = eat full combo. This is why 
            Jack in Heat is terrifying.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="The Threat">
          The threat of GMC 2 → Heat Smash makes opponents scared to block. When they're 
          scared to block, your mids (GMC 1, GMH 1) hit them freely. Heat turns Jack into 
          a monster.
        </TipBox>
      </Section>

      <Section title="When to Activate Heat">
        <KeyConcept title="Heat Activation Timing" icon="⏰">
          <ul>
            <li><strong>Mid-combo</strong> — Heat Burst extends combos for extra damage</li>
            <li><strong>After wall splat</strong> — GMC pressure at wall is devastating</li>
            <li><strong>Need i10 punish</strong> — Heat Smash punishes -10 moves for 50</li>
            <li><strong>Opponent is blocking</strong> — GMC 2 guard break forces damage</li>
            <li><strong>Low on time</strong> — Don't waste Heat at round end</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Management">
        <SubSection title="Extending Heat Timer">
          <p>
            Every time you enter GMH, you <strong>recover 0.5 seconds of Heat timer</strong>. 
            This means transitioning in and out of stance extends your Heat duration.
          </p>
        </SubSection>

        <SubSection title="GMC Uses Heat">
          <p>
            Using GMC moves in Heat <strong>costs about 1/3 of your Heat bar</strong>. You 
            can't spam GMC 2 guard breaks forever — use them strategically.
          </p>
        </SubSection>
      </Section>

      <Section title="Quiz">
        <Quiz
          question="What makes Jack's Heat Smash special?"
          options={[
            { text: 'It does the most damage', isCorrect: false },
            { text: 'It\'s i10 — the fastest in the game', isCorrect: true },
            { text: 'It\'s plus on block', isCorrect: false },
            { text: 'It tracks sidesteps', isCorrect: false },
          ]}
          correctFeedback="Correct! Jack's Heat Smash is i10, making it the fastest in Tekken 8. This allows for 50-damage i10 punishes and guaranteed damage after GMC 2."
          incorrectFeedback="Jack's Heat Smash is i10, the fastest in the game. This makes it usable as a punish and guaranteed after GMC 2 guard break."
        />
      </Section>

      <Section title="Chapter Summary">
        <p>Jack's Heat system:</p>
        <ul>
          <li><strong>Permanent GMC</strong> — GMC 1 (safe launcher) and GMC 2 (guard break) always live</li>
          <li><strong>i10 Heat Smash</strong> — Fastest in game, 50 damage punish</li>
          <li><strong>GMC 2 + Heat Smash</strong> — Guaranteed 36 damage if they block</li>
          <li><strong>GMH extends Heat</strong> — +0.5s per stance entry</li>
          <li><strong>Heat-only moves</strong> — H.f+3+4 and H.uf+3</li>
        </ul>
        <p>
          Next chapter covers Jack's throw game — all three breaks with good damage.
        </p>
      </Section>
    </Chapter>
  )
}
