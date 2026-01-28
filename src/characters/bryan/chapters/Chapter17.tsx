import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Flowchart,
  DrillMode,
  MatchScenario
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter17({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={17}
      title="Frame Traps & Conditioning"
      intro="Advanced Bryan is about reads and conditioning. This chapter teaches you how to layer your options to create no-win situations for opponents."
      onPrevious={() => goToChapter(16)}
      onNext={() => goToChapter(18)}
      nextLabel="Complete Bryan"
    >
      <Section title="What is a Frame Trap?">
        <p>
          A <span className="highlight">frame trap</span> is a sequence where even if the 
          opponent tries to press a button, your next move beats theirs. You're using frame 
          advantage to "trap" their response.
        </p>

        <KeyConcept title="Frame Trap Formula" icon="🪤">
          <p><strong>Your plus frames + your move startup &lt; their fastest option startup</strong></p>
          <p>
            Example: You're +5 (qcb+1 blocked). You do d+2 (i14). Total: 14 frames until d+2 
            is active. Opponent's jab is i10. Your d+2 comes out at frame 14, their jab at 
            frame 10... but they started 5 frames behind. Their jab actually comes out at 
            frame 15 from your perspective. <strong>You win.</strong>
          </p>
        </KeyConcept>
      </Section>

      <Section title="Bryan's Frame Traps">
        <SubSection title="qcb+1 (+5) Traps">
          <ul>
            <li><strong>qcb+1 → df+2</strong> — i13 mid, beats jabs, CH extension available</li>
            <li><strong>qcb+1 → d+2</strong> — i14 mid, beats jabs, CH extension available</li>
            <li><strong>qcb+1 → qcb+3</strong> — Not a true trap, but +5 into power low is scary</li>
            <li><strong>qcb+1 → throw</strong> — They're blocking, so eat the throw</li>
          </ul>
        </SubSection>

        <SubSection title="b+1 (+4) Traps">
          <ul>
            <li><strong>b+1 → df+2</strong> — Beats 11f or slower responses</li>
            <li><strong>b+1 → f+3</strong> — CH launcher, beats 12f responses</li>
            <li><strong>b+1 → b+1</strong> — Fish again, they can't interrupt</li>
            <li><strong>b+1 → qcb+3</strong> — Power low after plus frames</li>
          </ul>
        </SubSection>

        <SubSection title="Post-Hatchet (+5) Traps">
          <ul>
            <li><strong>qcb+3 → f+3</strong> — +5 into 0-on-block CH launcher</li>
            <li><strong>qcb+3 → 1,2,1</strong> — Jab string, CH extension catches mashers</li>
            <li><strong>qcb+3 → throw</strong> — They're blocking the next low</li>
          </ul>
        </SubSection>

        <DrillMode
          title="Frame Trap Drill"
          objective="Practice frame trap sequences"
          setup="Dummy set to jab after blocking your move"
          difficulty="intermediate"
          estimatedTime="5 min"
          steps={[
            { instruction: 'qcb+1 (blocked) → df+2 (beats their jab)', targetReps: 10 },
            { instruction: 'qcb+1 (blocked) → d+2 (beats their jab)', targetReps: 10 },
            { instruction: 'b+1 (blocked) → f+3 (CH launches their response)', targetReps: 10 },
            { instruction: 'b+1 (blocked) → b+1 (fish twice)', targetReps: 10 },
          ]}
        />
      </Section>

      <Section title="Conditioning">
        <p>
          <span className="highlight">Conditioning</span> is training your opponent to respond 
          a certain way, then exploiting that response. Bryan excels at this because of 
          his CH extensions.
        </p>

        <KeyConcept title="The Conditioning Loop" icon="🔄">
          <ol>
            <li><strong>Establish a pattern:</strong> Do df+2 repeatedly without the extension</li>
            <li><strong>Opponent adapts:</strong> They start pressing back after df+2</li>
            <li><strong>Punish the adaptation:</strong> Now do df+2,3 → CH launch them</li>
            <li><strong>Opponent adapts again:</strong> They start blocking the extension</li>
            <li><strong>Exploit new adaptation:</strong> df+2 → low (qcb+3) or throw</li>
          </ol>
        </KeyConcept>

        <Flowchart
          title="Conditioning Decision Tree"
          nodes={[
            { 
              type: 'start', 
              label: 'You do df+2' 
            },
            { 
              type: 'decision', 
              label: 'Does opponent press after?',
              branches: [
                { label: 'Yes', action: '→ Use df+2,3 to launch them' },
                { label: 'No (blocks)', action: '→ Use lows or throws' },
              ]
            },
            {
              type: 'decision',
              label: 'Did they adapt?',
              branches: [
                { label: 'Now blocking extension', action: '→ Stop at df+2, use lows' },
                { label: 'Still pressing', action: '→ Keep using df+2,3' },
              ]
            },
            {
              type: 'end',
              label: 'Repeat: observe → adapt → exploit'
            }
          ]}
        />
      </Section>

      <Section title="Layer Your Offense">
        <p>
          Great Bryan players have <span className="highlight">multiple layers</span> of 
          options from each situation. This makes them unpredictable.
        </p>

        <MatchScenario
          title="Post-qcb+1 Layering"
          situation="Your qcb+1 was blocked. You're +5."
          context="Opponent must respect your plus frames. What do you do?"
          options={[
            {
              action: 'df+2 (mid poke)',
              input: 'df+2',
              result: 'Beats their press, gives you mental frames. Safe option.',
            },
            {
              action: 'qcb+3 (power low)',
              input: 'qcb+3',
              result: '23 damage, +5 on hit. Punishes blocking.',
              isOptimal: true,
              followup: 'If hit, you\'re +5 again — repeat the mixup'
            },
            {
              action: 'Throw',
              result: 'If they\'re frozen blocking, eat the throw damage.',
            },
            {
              action: 'Another qcb+1',
              result: 'You\'re +5, qcb+1 is i13... this is actually a frame trap!',
            },
          ]}
          keyTakeaway="From +5, you have FOUR viable options. Mix them up so opponents can't predict you."
        />
      </Section>

      <Section title="Reading Your Opponent">
        <KeyConcept title="Opponent Analysis" icon="🔍">
          <p>Pay attention to patterns:</p>
          <ul>
            <li><strong>Do they press after pokes?</strong> → Use CH extensions</li>
            <li><strong>Do they block everything?</strong> → Use lows and throws</li>
            <li><strong>Do they sidestep?</strong> → Use tracking moves (1+2, qcb+3)</li>
            <li><strong>Do they duck?</strong> → Use mids like b+1, 3+4</li>
            <li><strong>Are they predictable?</strong> → Hard read with extensions</li>
            <li><strong>Are they random?</strong> → Play it safe, win on fundamentals</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Round 1 Information">
          Use round 1 to gather information. Do a poke without the extension. Watch their 
          response. Adjust your strategy for rounds 2 and 3.
        </TipBox>
      </Section>

      <Section title="Mental Stack">
        <p>
          <span className="highlight">Mental stack</span> is the accumulation of options your 
          opponent has to worry about. Bryan creates mental stack through his extensions.
        </p>

        <KeyConcept title="Building Mental Stack" icon="🧱">
          <p>After df+2 is blocked, opponent must consider:</p>
          <ol>
            <li>Will he do df+2,3? (If I press, I get launched)</li>
            <li>Will he do a low? (If I keep blocking high...)</li>
            <li>Will he throw me? (If I freeze up...)</li>
            <li>Will he do another mid? (My turn might be gone)</li>
          </ol>
          <p>
            They can't defend against everything. Their brain is overloaded. 
            <strong>That's mental stack.</strong>
          </p>
        </KeyConcept>
      </Section>
    </Chapter>
  )
}
