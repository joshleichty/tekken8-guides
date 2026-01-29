import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  MatchScenario,
  SkillCheck
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Low Poke Mastery"
      intro="Jack's low game is exceptional. This chapter teaches you every low option and when to use each one. Combined with your mids, you become an unstoppable poke machine."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Mid-Range Control"
    >
      <Section title="Why Jack's Lows Are Elite">
        <p>
          Most characters have one good low and a couple mediocre options. Jack has 
          <span className="highlight">multiple excellent lows</span> with different purposes. 
          This variety makes his offense unpredictable.
        </p>

        <KeyConcept title="Jack's Low Tier List" icon="📊">
          <ul>
            <li><strong>S-Tier:</strong> db+1 — i12 fastest standing low, +1c on hit</li>
            <li><strong>S-Tier:</strong> FC db+1 — i14 low with huge range, has extensions</li>
            <li><strong>A-Tier:</strong> db+2 — i22 power low, +3c on hit, CH combo</li>
            <li><strong>A-Tier:</strong> db+1+2 — 29 damage, floor break, high risk/reward</li>
            <li><strong>B-Tier:</strong> d+4 — Generic low, fast, chips</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="db+1 — The Machine Gun Blast">
        <MoveCard character="jack-8"
          move={{
            input: 'db+1',
            hitLevel: ['l'],
            damage: '13',
            startup: 'i12',
            onBlock: '-12',
            onHit: '+1c',
            tags: ['Low', 'Fast', 'Plus on Hit', 'Crouch Transition'],
            description: 'Possibly THE fastest standing low in Tekken. Your bread and butter.',
            notes: [
              'Leaves you crouching (+1c on hit)',
              'At wall, db+1,1 is a natural combo',
              'Can chain: db+1,1 and db+1,1,1,2',
              '-12 means ws4 punish max'
            ]
          }}
        showVideo
        />

        <SubSection title="The Foundation">
          <p>
            You learned db+1 in Chapter 2. It remains <span className="highlight">your most 
            important low</span>. Use it constantly:
          </p>
          <ul>
            <li><strong>After plus frames</strong> — Guaranteed chip</li>
            <li><strong>To start crouch game</strong> — +1c opens mixups</li>
            <li><strong>At the wall</strong> — db+1,1 becomes guaranteed</li>
            <li><strong>To chip</strong> — 13 damage adds up fast</li>
          </ul>
        </SubSection>

        <SubSection title="Wall Extension">
          <TipBox variant="tip" title="Wall Combo">
            At the wall, <strong>db+1,1 is a natural combo</strong>. The pushback normally 
            prevents the second hit, but the wall keeps them in range. Free extra damage.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="FC db+1 — The Crouch Low">
        <MoveCard character="jack-8"
          videoId="FC.db+1"
          move={{
            input: 'FC db+1',
            hitLevel: ['l'],
            damage: '14',
            startup: 'i14',
            onBlock: '-11',
            onHit: '+3',
            tags: ['Low', 'FC Move', 'Huge Range', 'Has Extensions'],
            description: 'Jack\'s best crouch low. Absurd range, extensions that deter punishment.',
            notes: [
              'Must be in crouch to access',
              'Range is incredible for a low',
              'FC db+1,1 is low-mid',
              'FC db+1,1,1 has charged version',
              'Can be unpunishable at max range'
            ]
          }}
        showVideo
        />

        <SubSection title="The Range Monster">
          <p>
            FC db+1's range is <span className="highlight">absurd</span>. It hits from distances 
            where most lows whiff. And the pushback on block can make it <strong>truly 
            unpunishable</strong> at max range — even ws4 can whiff!
          </p>
        </SubSection>

        <SubSection title="Extensions">
          <MoveCard character="jack-8"
            videoId="FC.db+1,1"
            move={{
              input: 'FC db+1,1',
              hitLevel: ['l', 'm'],
              damage: '14, 10',
              startup: 'i14',
              onBlock: '-6',
              onHit: '+5',
              tags: ['Low', 'Mid', 'Extension'],
              description: 'Low-mid extension. Second hit catches people pressing after the low.',
            }}
          />

          <MoveCard character="jack-8"
            videoId="FC.db+1,1,1"
            move={{
              input: 'FC db+1,1,1',
              hitLevel: ['l', 'm', 'm'],
              damage: '14, 10, 20',
              startup: 'i14',
              onBlock: '-14',
              onHit: '+9a',
              tags: ['Low', 'Mid', 'Mid', 'Chargeable'],
              description: 'Full extension. Can charge the third hit for safety.',
              notes: [
                'FC db+1,1,1* (charged) is only -6 with huge pushback',
                'Charged version gives GMC on hit or block'
              ]
            }}
          />

          <KeyConcept title="The Low-Mid Mix" icon="🔀">
            <p>From crouch:</p>
            <ul>
              <li><strong>FC db+1</strong> — Just the low</li>
              <li><strong>FC db+1,1</strong> — Low-mid, catches people pressing</li>
              <li><strong>FC db+1,1,1</strong> — Full string, launches mashers</li>
              <li><strong>FC db+1,1,1*</strong> — Charged, safe with chip damage</li>
            </ul>
            <p>They never know where you'll stop. Beautiful.</p>
          </KeyConcept>
        </SubSection>
      </Section>

      <Section title="db+2 — The Power Low">
        <MoveCard character="jack-8"
          move={{
            input: 'db+2',
            hitLevel: ['l'],
            damage: '24',
            startup: 'i22',
            onBlock: '-18',
            onHit: '+3c',
            onCH: '+33d',
            tags: ['Low', 'Power Low', 'CH Combo', 'Chargeable'],
            description: 'High-damage power low. Risky but rewarding. CH gives combo.',
            notes: [
              'db+2* (charged) is 30 damage but -33',
              'On CH, dash → db+1+2 is guaranteed',
              '+3c on hit sets up crouch mixups',
              'Slower than db+1, use for big damage reads'
            ]
          }}
        showVideo
        />

        <SubSection title="When to Use Power Lows">
          <KeyConcept title="db+2 Situations" icon="💥">
            <ul>
              <li><strong>Hard read</strong> — You KNOW they're going to stand-block</li>
              <li><strong>Momentum swing</strong> — Need big damage to turn the tide</li>
              <li><strong>Mental game</strong> — Show them you have power lows</li>
              <li><strong>NOT for pokes</strong> — Too slow, too risky for constant use</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <TipBox variant="warning" title="High Risk">
          db+2 is <span className="highlight-secondary">-18 on block</span>. That's launch 
          punishable by most characters. Use it sparingly — for reads, not spam.
        </TipBox>
      </Section>

      <Section title="db+1+2 — The Risk/Reward Low">
        <MoveCard character="jack-8"
          move={{
            input: 'db+1+2',
            hitLevel: ['l', 'l'],
            damage: '8, 21',
            startup: 'i18',
            onBlock: '-70',
            onHit: '-5d',
            tags: ['Low', 'Low', 'Floor Break', 'High Damage'],
            description: '29 total damage low. Insanely unsafe but floor breaks.',
            notes: [
              'Floor breaks for combo',
              '-70 on block (yes, seventy)',
              'Only use on hard reads or floor break stages',
              'On hit you\'re -5 but they\'re grounded'
            ]
          }}
        showVideo
        />

        <TipBox variant="warning" title="Extremely Unsafe">
          <strong>-70 ON BLOCK.</strong> This is not a typo. If they block this, you die. 
          Use only when you're certain they won't block, or on stages with floor breaks 
          where the reward justifies the risk.
        </TipBox>
      </Section>

      <Section title="d+4 — The Generic Low">
        <MoveCard character="jack-8"
          move={{
            input: 'd+4',
            hitLevel: ['l'],
            damage: '10',
            startup: 'i16',
            onBlock: '-15',
            onHit: '-4',
            tags: ['Low', 'Generic', 'Quick'],
            description: 'Standard generic low. Use when you need something fast and simple.',
            notes: [
              'Less important than db+1 for Jack',
              '-4 on hit is worse than db+1',
              'Use for variation'
            ]
          }}
        showVideo
        />

        <SubSection title="When to Use d+4">
          <p>
            Honestly? <span className="highlight">db+1 is usually better</span>. But d+4 
            exists for variation. If opponents start reading your db+1 timing, mixing in 
            d+4 keeps them honest.
          </p>
        </SubSection>
      </Section>

      <Section title="Low Poke Scenarios">
        <MatchScenario
          title="They're Blocking High"
          situation="You've hit them with 2,1 multiple times. They're respecting your mids."
          context="You're plus frames. They're in a stand-blocking shell."
          options={[
            {
              action: 'db+1',
              input: 'db+1',
              result: '+1c on hit, into crouch mixups. Perfect.',
              isOptimal: true,
              followup: 'ws4, more lows, or FC db+1'
            },
            {
              action: 'db+2 (power low)',
              result: 'High risk, high reward. Only if you\'re confident.',
            },
            {
              action: 'Keep using mids',
              result: 'Safe but predictable. They\'ll eventually take risks.',
            },
          ]}
          keyTakeaway="When opponents are stand-blocking, db+1 is your go-to. Fast, safe-ish, and leaves you advantaged."
        />

        <MatchScenario
          title="From Crouch Position"
          situation="db+1 just hit. You're +1 and crouching."
          context="Crouch state. They don't know what's coming."
          options={[
            {
              action: 'FC db+1 (another low)',
              input: 'FC db+1',
              result: 'More low damage. Sets up the guessing game.',
              isOptimal: true,
              followup: 'Can add ,1 or ,1,1 for extensions'
            },
            {
              action: 'ws4 (mid)',
              result: 'Quick mid check. +5 on hit. Safe.',
            },
            {
              action: 'FC df+2 (mid)',
              result: 'Has low/mid extensions. More damage potential.',
            },
          ]}
          keyTakeaway="From crouch, you have incredible mixups. Low-low, low-mid, mid-low — make them guess wrong."
        />
      </Section>

      <Section title="The Low Game Flow">
        <KeyConcept title="How to Use Your Lows" icon="🔄">
          <ol>
            <li><strong>Establish mids first</strong> — df+1, 2,1, f+4,1</li>
            <li><strong>Sneak in db+1</strong> — When they start respecting mids</li>
            <li><strong>Land db+1 → crouch</strong> — Now you're in your element</li>
            <li><strong>FC db+1 or ws4</strong> — Low-mid from crouch</li>
            <li><strong>Repeat endlessly</strong> — They can never relax</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The Philosophy">
          Your lows aren't meant to do huge damage (except db+2 reads). They're meant to 
          <strong>chip and build pressure</strong>. 13 damage here, 14 damage there. 
          They add up. And they force opponents to guess constantly.
        </TipBox>
      </Section>

      <Section title="Checkpoint">
        <SkillCheck
          title="Low Mastery Check"
          subtitle="Confirm you understand Jack's low game"
          skills={[
            { id: 'db1-use', skill: 'I use db+1 constantly for chip and crouch transition', description: 'Your main low tool' },
            { id: 'fc-db1', skill: 'I know FC db+1 extensions', description: 'Low-mid from crouch' },
            { id: 'db2-read', skill: 'I use db+2 for hard reads only', description: 'Power low, not spam' },
            { id: 'mix', skill: 'I mix lows with mids effectively', description: 'Not predictable low-only' },
          ]}
          requiredToPass={3}
        />
      </Section>

      <Section title="Chapter Summary">
        <p>Your low arsenal:</p>
        <ul>
          <li><strong>db+1</strong> — i12 bread and butter, +1c into crouch mixups</li>
          <li><strong>FC db+1</strong> — Huge range, extensions, potentially unpunishable</li>
          <li><strong>db+2</strong> — Power low for reads, CH combo potential</li>
          <li><strong>db+1+2</strong> — High risk, floor break reward</li>
          <li><strong>d+4</strong> — Generic option for variation</li>
        </ul>
        <p>
          Next chapter covers mid-range control — how to dominate the space between you and 
          your opponent.
        </p>
      </Section>
    </Chapter>
  )
}
