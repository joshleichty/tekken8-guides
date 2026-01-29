import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="The Poke Empire"
      intro="Jack's poke game is among the best in Tekken. This chapter expands your toolkit with the mid pokes that make opponents fear pressing buttons. Combined with your lows, you become relentless."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Master Lows"
    >
      <Section title="The Philosophy of Poking">
        <p>
          Jack doesn't win with big 50/50 mixups. He wins by <span className="highlight">constantly 
          making you guess between low and mid</span>. Each poke is a small decision for your 
          opponent. Make them guess wrong 20 times? They die.
        </p>

        <KeyConcept title="Poke Mentality" icon="🎯">
          <ul>
            <li><strong>Every poke is a mini-mixup</strong> — Low or mid? They have to guess.</li>
            <li><strong>Plus frames compound</strong> — +1 here, +3 there, suddenly you're +8</li>
            <li><strong>Chip damage adds up</strong> — 5 damage × 20 pokes = a full lifebar</li>
            <li><strong>Mental fatigue is real</strong> — Constant decisions exhaust opponents</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Goal">
          You want your opponent to <strong>stop pressing buttons</strong> because they're 
          afraid of getting counter-hit. Once they freeze up, your lows eat them alive.
        </TipBox>
      </Section>

      <Section title="df+1 — The Mid Check">
        <MoveCard character="jack-8"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '12',
            startup: 'i14',
            onBlock: '-4',
            onHit: '+3',
            onCH: '+5',
            tags: ['Mid', 'Check', 'Safe', 'Has Extensions'],
            description: 'Your go-to mid poke. Safe, has follow-ups that discourage button mashing.',
            notes: [
              'Respectable range for a df+1',
              'Extensions punish people who try to take their turn',
              'df+1,1 launches on CH',
              'df+1,2,1 launches naturally'
            ]
          }}
        showVideo
        />

        <SubSection title="Why df+1 Matters">
          <p>
            At i14, df+1 is slightly slower than some characters' df+1s. But it has 
            <span className="highlight">exceptional follow-ups</span> that make opponents 
            terrified to press after blocking it:
          </p>
          <ul>
            <li><strong>df+1,1</strong> — Second hit launches on counter-hit. If they press, they die.</li>
            <li><strong>df+1,2,1</strong> — Natural combo launcher. Even riskier to challenge.</li>
          </ul>
        </SubSection>

        <SubSection title="df+1 Extensions">
          <MoveCard character="jack-8"
            move={{
              input: 'df+1,1',
              hitLevel: ['m', 'm'],
              damage: '12, 20',
              startup: 'i14',
              onBlock: '-11',
              onHit: '+21cg',
              onCH: '+72a (+56)',
              tags: ['Mid', 'CH Launcher', 'Extension'],
              description: 'If opponents press buttons after df+1, this launches them on counter-hit.',
            }}
          />

          <MoveCard character="jack-8"
            move={{
              input: 'df+1,2,1',
              hitLevel: ['m', 'h', 'h'],
              damage: '12, 10, 2',
              startup: 'i14',
              onBlock: '-10',
              onHit: '-2',
              tags: ['Mid', 'High', 'High', 'Natural Launcher'],
              description: 'Launches naturally — doesn\'t need counter-hit. Catches mashers.',
              notes: [
                'Full string df+1,2,1,2 is available',
                'Use sparingly — good players will duck the second hit'
              ]
            }}
          />

          <TipBox variant="tip" title="Mix It Up">
            Sometimes do df+1 alone. Sometimes do df+1,1. Sometimes df+1,2,1. Keep them 
            guessing. The threat of extensions makes the single df+1 scarier.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="f+4,1 — The Jackhammer">
        <MoveCard character="jack-8"
          move={{
            input: 'f+4,1',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i15',
            onBlock: '-6',
            onHit: '+8c',
            onCH: '+16d',
            tags: ['Mid', 'Long Range', 'CH Knockdown', 'GMH Transition'],
            description: 'THE mid-range poke. Massive range, plus on hit, CH knockdown.',
            notes: [
              'Look at the range — it hits from almost fullscreen',
              'Can transition to GMH with D (hold down)',
              'On CH, db+1,2 is guaranteed for ~46 total damage',
              '-6 on block but huge pushback makes it safe'
            ]
          }}
        showVideo
        />

        <SubSection title="The Jackhammer is Your Friend">
          <p>
            f+4,1 might be <span className="highlight">Jack's best neutral tool</span>. Here's why:
          </p>
          <ul>
            <li><strong>Absurd range</strong> — Hits from distances that seem impossible</li>
            <li><strong>+8 on hit</strong> — Huge advantage, continue with anything</li>
            <li><strong>CH knockdown</strong> — They press into it, they're on the ground</li>
            <li><strong>Effectively safe</strong> — -6 but pushback means most punishes whiff</li>
            <li><strong>GMH transition</strong> — Hold down to enter stance with advantage</li>
          </ul>
        </SubSection>

        <SubSection title="The Linear Weakness">
          <TipBox variant="warning" title="Can Be Stepped">
            f+4,1 is <span className="highlight-secondary">very linear</span>. Good players 
            who read it coming will sidestep and launch you. Don't spam it from the same 
            range repeatedly. Mix it up with tracking moves like 1+2 or f+1+2.
          </TipBox>
        </SubSection>

        <SubSection title="GMH Transition">
          <p>
            After f+4,1 hits or is blocked, you can <strong>hold down</strong> to transition 
            into Gamma Howl stance:
          </p>
          <ul>
            <li><strong>On block → GMH:</strong> You're now advantaged in stance</li>
            <li><strong>On hit → GMH:</strong> Neutral, but stance mixup begins</li>
            <li><strong>On CH → GMH:</strong> You get guaranteed stance moves</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="2,1 — The Jab String">
        <MoveCard character="jack-8"
          move={{
            input: '2,1',
            hitLevel: ['h', 'm'],
            damage: '10, 12',
            startup: 'i11',
            onBlock: '-3',
            onHit: '+2',
            tags: ['High', 'Mid', 'Jab String', 'Safe'],
            description: 'High-mid string. If they duck the jab, the mid catches them.',
            notes: [
              'Great for conditioning opponents to stand-block',
              'Has further extensions: 2,1,1+2 and 2,1,2',
              'Sets up your low game'
            ]
          }}
        showVideo
        />

        <SubSection title="Why 2,1 Works">
          <p>
            The second hit is a <span className="highlight">mid that jails from the first 
            block</span>. If they block the jab and try to duck, they eat the mid. This 
            trains them to stand-block... which opens them up to your lows.
          </p>
        </SubSection>
      </Section>

      <Section title="ss2 — Sidestep Pressure">
        <MoveCard character="jack-8"
          move={{
            input: 'ss2',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i17',
            onBlock: '+9',
            onHit: '+35d (+27)',
            tags: ['High', 'Plus on Block', 'Knockdown', 'Chip Damage'],
            description: 'Sidestep attack that\'s monstrous +9 on block with huge range.',
            notes: [
              'Can transition to GMH with D',
              'Incredible range for a sidestep move',
              'Does chip damage on block (6)',
              'On hit, f,f+4 is guaranteed'
            ]
          }}
        showVideo
        />

        <SubSection title="The Secret Pressure Tool">
          <p>
            Even though Jack's sidestep is weak, <span className="highlight">ss2 is still 
            excellent</span>. The range is insane — it hits from distances you wouldn't expect. 
            And at +9 on block, you can do almost anything after.
          </p>

          <KeyConcept title="ss2 Usage" icon="⚡">
            <ul>
              <li><strong>After creating angles</strong> — Sidestep then ss2 for approach</li>
              <li><strong>From range</strong> — The hitbox reaches surprisingly far</li>
              <li><strong>On hit</strong> — f,f+4 (Big Boot) is guaranteed</li>
              <li><strong>Duckable</strong> — It's high, so use sparingly against aware opponents</li>
            </ul>
          </KeyConcept>
        </SubSection>
      </Section>

      <Section title="Poke Decision Tree">
        <Flowchart
          title="Mid-Poke Decision Making"
          nodes={[
            { 
              type: 'start', 
              label: 'You\'re at Range 1-2' 
            },
            { 
              type: 'decision', 
              label: 'What are they doing?',
              branches: [
                { label: 'Pressing buttons', action: '→ df+1,1 (CH launch) or f+4,1' },
                { label: 'Blocking high', action: '→ db+1 or FC db+1 (lows)' },
                { label: 'Trying to sidestep', action: '→ 1+2 (homing) or f+1+2' },
              ]
            },
            {
              type: 'decision',
              label: 'Did f+4,1 connect?',
              branches: [
                { label: 'Hit', action: '→ +8, continue pressure or GMH' },
                { label: 'CH', action: '→ db+1,2 guaranteed (46 damage)' },
                { label: 'Blocked', action: '→ Reset, they\'re too far to punish' },
              ]
            },
            {
              type: 'end',
              label: 'Continue the poke loop'
            }
          ]}
        />
      </Section>

      <Section title="Putting the Empire Together">
        <p>
          Your mid pokes exist to <strong>make opponents block mid</strong>. Once they're 
          blocking mid, your lows tear them apart. The loop:
        </p>

        <KeyConcept title="The Poke Loop" icon="🔄">
          <ol>
            <li><strong>df+1 or 2,1</strong> — Establish you're using mids</li>
            <li><strong>df+1,1 extension</strong> — Catch them pressing buttons</li>
            <li><strong>Now they block mid...</strong> — db+1 starts connecting</li>
            <li><strong>They start blocking low...</strong> — df+1,2,1 launches them</li>
            <li><strong>Repeat forever</strong> — They can't win this guessing game</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Never Stop Poking">
          Jack's poke game is a <strong>war of attrition</strong>. You don't need to hit 
          the big move. You need to hit 20 small moves. Each poke is +1, +3, +8 frames. 
          Each poke is 5, 10, 12 damage. It adds up. They break eventually.
        </TipBox>
      </Section>

      <Section title="Chapter Summary">
        <p>Your mid poke toolkit:</p>
        <ul>
          <li><strong>df+1</strong> — i14 mid check with CH launching extensions</li>
          <li><strong>f+4,1</strong> — Long range mid, +8 on hit, CH knockdown</li>
          <li><strong>2,1</strong> — Jab string that conditions stand-blocking</li>
          <li><strong>ss2</strong> — +9 on block pressure, knockdown on hit</li>
        </ul>
        <p>
          Next chapter covers your low game in depth — the other half of the poke empire.
        </p>
      </Section>
    </Chapter>
  )
}
