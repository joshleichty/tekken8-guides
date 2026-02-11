import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  DecisionGrid,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="The Low Game"
      intro="Eddy lives and dies by his lows. They're how he opens people up, how he enters stances, how he builds Mandinga, how he wins rounds. But they're also how he dies — every meaningful low is punishable. This chapter teaches you when each low is right, not just what they do."
      hasPrevious={true}
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Defense and Survival"
    >
      <Section title="The Risk Spectrum">
        <p>
          Not all lows are equal. They exist on a spectrum from "chip with low risk" to
          "devastating but punishable." Knowing where each low sits on this spectrum — and
          when to use which end — is the difference between an Eddy who gets launched and
          an Eddy who controls rounds.
        </p>

        <KeyConcept title="The Low Decision Framework" icon="🎲">
          <p>Ask yourself three questions before throwing a low:</p>
          <ol>
            <li><strong>What's my frame situation?</strong> Plus frames let you throw riskier lows. Neutral or minus means stick to safe pokes.</li>
            <li><strong>Is my opponent blocking low?</strong> If they're stand-blocking everything, even a basic <code>d+3</code> adds up. You don't need the hell sweep.</li>
            <li><strong>What's the round state?</strong> Early round, chip with safe lows. Round end with a life lead? Safe lows are fine. Behind and need damage? Time for the big lows.</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Safe Chip Lows">
        <p>
          These are the lows you throw when you don't want to risk a punish. They deal small
          damage but keep the opponent honest about blocking low.
        </p>

        <MoveCard character="eddy"
          videoId="d+4"
          move={{
            input: 'd+4',
            hitLevel: ['l'],
            damage: '9',
            startup: 'i12~13',
            onBlock: '-11',
            onHit: '+0c',
            tags: ['Low', 'Fast', 'Chip'],
            description: 'Your fastest low. i12, minimal damage, minimal risk. Use it purely to condition the opponent to look down. Once they start blocking low, your mids eat them alive.',
            notes: [
              'i12 — very fast for a low',
              '-11 on block — light punish at worst',
              '9 damage — not threatening alone',
              'Leaves you in crouch on hit — FC options available',
              'Conditioning tool, not a damage tool',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="SS.4"
          move={{
            input: 'SS 4',
            hitLevel: ['l'],
            damage: '12',
            startup: 'i18~19',
            onBlock: '-12',
            onHit: '+4c',
            tags: ['Low', 'Sidestep', 'Evasion'],
            description: 'A low from sidestep that evades while poking. +4 on hit in crouch opens your FC game. The sidestep component can dodge linear attacks while you attack low.',
            notes: [
              'Comes from sidestep — natural evasion built in',
              '+4 on hit in crouch — FC df+3 or FC df+4 continues pressure',
              '-12 on block — moderate risk',
              'Good when you want to step and poke simultaneously',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="The Workhorse Lows">
        <p>
          These are the lows you use most often. More reward than chip lows, but punishable
          enough that you can't spam them.
        </p>

        <MoveCard character="eddy"
          move={{
            input: 'd+3',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i21~22',
            onBlock: '-14c',
            onHit: '+4c',
            onCH: '+27g',
            tags: ['Low', 'High Crush', 'CH Knockdown', 'Workhorse'],
            description: 'Your standard low poke. 17 damage, high crushes, and on counter hit knocks down for a guaranteed f,f+4. The counter hit reward makes this excellent in situations where the opponent might be pressing.',
            notes: [
              'High crushes from frame 6 — ducks under jabs',
              'CH knockdown → guaranteed f,f+4 for big follow-up',
              '-14 on block — ws punishable but not launchable by most',
              '+4 on hit in crouch — your turn continues',
              'Use at close range when opponent is likely to press buttons',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="f,F+3"
          move={{
            input: 'f,f+3',
            hitLevel: ['l'],
            damage: '20',
            startup: 'i21~22',
            onBlock: '-14c',
            onHit: '+6c',
            onCH: '+15c',
            tags: ['Low', 'Approach', 'RLX Transition', 'High Crush'],
            description: 'Your signature approach low. Everything you learned in Chapter 1 — long range, high crushes, transitions to RLX on hit with plus frames. On CH, guarantees RLX 4,3 for heat activation.',
            notes: [
              'Approach low — covers enormous range',
              '+6 into RLX on hit — 50/50 starts immediately',
              'CH +15 → guaranteed RLX 4,3 (heat engager)',
              '-14 on block in FC — punishable',
              'High crushes from frame 15',
              'Linear — can be sidestepped left',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="FC.df+4"
          move={{
            input: 'FC df+4',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i20~21',
            onBlock: '-14c',
            onHit: '+9c',
            onCH: 'Launch',
            tags: ['Low', 'Crouch Entry', 'HSP Transition', 'CH Launcher'],
            description: 'The low side of your crouch 50/50 (paired with FC df+3 mid). Transitions to HSP on hit at +9. On counter hit, launches for a full combo. This is how you punish people who don\'t block low after your b+1 or d+3.',
            notes: [
              'Part of the crouch 50/50 (vs FC df+3 mid)',
              'Transitions to HSP at +9 on hit — massive advantage',
              'CH launcher — full combo on counter hit',
              '-14 on block — punishable',
              'Only available from full crouch (after d+3 on hit, b+1 on hit, etc.)',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="The Big Lows">
        <p>
          These are the lows that win rounds. High reward, high risk. Don't throw them when
          a chip low would do the job.
        </p>

        <MoveCard character="eddy"
          videoId="RLX.3,3"
          move={{
            input: 'RLX 3,3',
            hitLevel: ['l', 'h'],
            damage: '12, 30',
            startup: 'i16~17',
            onBlock: '-13',
            onHit: '+12a (+3) / +7a (+6)',
            tags: ['Low', 'Hell Sweep', 'Mandinga Builder', 'Big Reward'],
            description: 'The hell sweep. 42 damage on clean hit, builds Mandinga, and the second hit is guaranteed at close range. This is the low that defines Eddy — the reason opponents have to guess.',
            notes: [
              'Clean hit required for second hit guarantee',
              'Builds 1 Mandinga level on hit',
              '-13 on block — punishable by ws+1,3 from characters with i13 ws',
              'Must be in RLX with plus frames for maximum effectiveness',
              'The low side of the RLX 50/50 vs RLX 4,3 mid',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="db+3"
          move={{
            input: 'db+3',
            hitLevel: ['l'],
            damage: '20',
            startup: 'i23~24',
            onBlock: '-14c',
            onHit: '+4c',
            onCH: '+27g',
            tags: ['Low', 'Evasive', 'High Crush', 'CH Knockdown'],
            description: 'An evasive low that goes very low to the ground, crushing highs and some mids. On CH, knocks down for a guaranteed follow-up. Slower than d+3 but more evasive — use when you expect the opponent to attack high.',
            notes: [
              'Extremely evasive — crushes highs and some mids',
              'Same CH reward as d+3 (knockdown → follow-up)',
              '-14 on block — punishable',
              'Slower startup than d+3 — more committal',
              'Great for Round 1 conditioning when they don\'t know the matchup',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="HSP.3+4"
          move={{
            input: 'HSP 3+4 (MND)',
            hitLevel: ['l', 'm', 'm'],
            damage: '6, 6, 18',
            startup: 'i21~22',
            onBlock: '-13',
            onHit: '+4c',
            tags: ['Low', 'Mandinga', 'HSP', 'Stance Low'],
            description: 'The Mandinga low from Handstand. Only available at MND level 1+. This is the move that transforms HSP from a mid/throw stance into a true 50/50. At MND level 2, it knocks down and floor breaks.',
            notes: [
              'Requires Mandinga level 1 or higher',
              'The other side of the HSP 50/50 (vs HSP b+4 mid)',
              '-13 on block — punishable',
              'MND level 2: knocks down, floor breaks',
              'Without this, HSP has no real low threat',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="Choosing the Right Low">
        <DecisionGrid
          title="Low Selection Guide"
          rows={[
            { situation: 'Neutral, testing the waters', response: 'd+4 or d+3', reason: 'Low risk chip. See if they block low.' },
            { situation: 'Approaching from range 2-3', response: 'f,f+3', reason: 'Approach low that enters RLX. High crushes.', risk: '-14 on block' },
            { situation: 'In RLX with plus frames', response: 'RLX 3,3', reason: 'Hell sweep. Maximum reward. Builds Mandinga.', risk: '-13 on block' },
            { situation: 'In FC after b+1 or d+3 hit', response: 'FC df+4', reason: 'Crouch 50/50. CH launches. Enters HSP.', risk: '-14 on block' },
            { situation: 'In HSP with Mandinga', response: 'HSP 3+4', reason: 'The Mandinga low. Forces standing 50/50.', risk: '-13 on block' },
            { situation: 'Opponent is pressing buttons', response: 'd+3', reason: 'CH knockdown for guaranteed follow-up.', risk: '-14 on block' },
            { situation: 'Need sidestep evasion', response: 'SS 4', reason: 'Step and poke. Opens FC game.', risk: '-12 on block' },
            { situation: 'Expect high retaliation', response: 'db+3', reason: 'Evasive. Crushes highs/mids.', risk: '-14 on block' },
            { situation: 'Closing round with life lead', response: 'd+3 or d+4', reason: "Don't risk it. Chip safely." },
            { situation: 'Behind and need damage', response: 'RLX 3,3 or f,f+3', reason: 'Time to gamble. Go for the big reward.', risk: '-13/-14 on block' },
          ]}
        />

        <TipBox variant="warning" title="The Punishment Tax">
          <p>
            Every meaningful Eddy low is -13 or -14 on block. That means every time you go low,
            you're risking 20-60+ damage depending on the opponent's character. This is the tax
            you pay for having some of the best lows in the game.
          </p>
          <p style={{ marginTop: '8px' }}>
            <strong>The mitigation:</strong> Don't throw lows when you don't need to. If you're +8
            in HSP, you can threaten the throw or use HSP 1 for plus frames without touching a low.
            Use lows when they serve a purpose — conditioning, damage, Mandinga building — not just
            because you feel like it.
          </p>
        </TipBox>
      </Section>

      <Section title="Practice: Low Game Decision-Making">
        <PracticeBox
          title="The Low Arsenal"
          setup="Practice Mode. Set dummy to random guard (high/low). Practice reading guard and choosing the right low."
          tasks={[
            { id: 'eddy-low-d3', text: 'Use d+3 from midrange five times', detail: 'Feel the high crush. When it hits on CH, do f,f+4 for the guaranteed follow-up.', type: 'counter', target: 5 },
            { id: 'eddy-low-ff3', text: 'Use f,f+3 to enter RLX and run the 50/50', detail: 'f,f+3 on hit → RLX 3,3 (low) or RLX 4,3 (mid). Alternate both sides.', type: 'counter', target: 5 },
            { id: 'eddy-low-fc', text: 'Do b+1 on hit → FC df+4 into HSP five times', detail: 'b+1 leaves you crouching. FC df+4 is the low option — feel it transition to HSP.', type: 'counter', target: 5 },
            { id: 'eddy-low-db3', text: 'Use db+3 against an approaching dummy', detail: 'Record the dummy doing a jab string. db+3 will crush under it. Feel the evasion.', type: 'toggle' },
            { id: 'eddy-low-mix', text: 'Alternate safe and risky lows in a 10-hit sequence', detail: 'Mix d+4 chips with d+3 pokes and f,f+3 approaches. Don\'t just spam one low — vary your selection based on the situation.', type: 'toggle' },
          ]}
        />
      </Section>

      <Section title="What's Next">
        <p>
          You know how to attack. But what happens when <em>they</em> attack? Eddy's biggest
          vulnerabilities — linearity, airborne states, lack of reversals — all show up on
          defense. The next chapter teaches you how to survive when the flywheel stops spinning.
        </p>
      </Section>
    </Chapter>
  )
}
