import { Chapter, Section, SubSection } from '../../../components/guide'
import { MoveCard, TipBox, KeyConcept, ConstraintPlay } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Your Buttons"
      intro="The 50/50 is your destination. But you can't crouch dash into someone's face every second — you need moves that keep you alive, win neutral, and create the openings that lead to the kill. These are Paul's foundational buttons."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Learn Approach Tools"
    >
      <Section title="Why Foundation Matters">
        <p>
          Gorilla Paul is fun. Everyone loves the highlight reel of a random Death Fist ending a round. But if all you do
          is crouch dash forward and pray, you'll get jabbed, launched, and sidestepped into oblivion against anyone who
          knows what they're doing.
        </p>
        <p>
          Scholar Paul — the version that actually wins games consistently — uses these moves to control space, check opponents,
          and create the conditions for the 50/50. Think of these buttons as your bread and butter. They're not flashy, but
          they keep you fed.
        </p>
      </Section>

      <Section title="df+1 — The Mid Poke That Does Everything">
        <MoveCard
          character="paul"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '11',
            startup: 'i14',
            onBlock: '-2',
            onHit: '+4',
            tags: ['mid'],
            description: 'Paul\'s most important poke. 14-frame mid that transitions into back sway by holding back. On block with back sway cancel, becomes +3. The gateway drug to Paul\'s entire offense.',
            notes: [
              'Cancel into back sway: df+1~b — becomes +3 on block',
              'Natural combo: df+1,1 — 20 damage',
              'Full string: df+1,1,2 — third hit causes wall splat, guarantees Death Fist',
              'Third hit of df+1,1,2 is punishable, but catches people who press buttons',
            ],
          }}
          showVideo
        />

        <SubSection title="Why df+1 Is Core">
          <p>
            At 14 frames, df+1 is a standard mid poke — nothing special. But the magic is in the back sway cancel.
            Hold back after df+1 and Paul transitions into his back sway stance. This turns a -2 on block move into a
            +3 on block situation — and from +3 with back sway options loaded, your opponent is in serious trouble.
          </p>
          <p>
            You'll learn back sway in detail in Chapter 5, but know this now: df+1~b is where most of Paul's
            offensive sequences begin. It's the Scholar Paul special — a simple, safe mid poke that opens the door
            to everything.
          </p>
        </SubSection>

        <SubSection title="The df+1 String">
          <p>
            df+1 has a natural combo string: df+1,1 does 20 damage on its own and is a natural hit combo. Then there's df+1,1,2 —
            the third hit is a mid that wall splats on hit. If the third hit connects (usually because they were mashing trying
            to escape the back sway), it guarantees a Death Fist. That's huge punish damage for pressing buttons at the wrong time.
          </p>
          <TipBox title="Using the String" variant="tip">
            Don't do df+1,1,2 every time — the third hit is -9 and people will learn to block it. Use df+1 into back sway as your
            primary tool. Throw out df+1,1 occasionally for the chip. And save df+1,1,2 for when you <em>know</em> they're pressing
            buttons — it's your punishment for mashers.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="df+2 — The Best Launcher in the Game">
        <MoveCard
          character="paul"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i15~16',
            onBlock: '-8',
            onHit: '+33a',
            tags: ['mid', 'launcher', 'evasive'],
            description: 'The best generic launcher in Tekken 8. Safe on block (-8), has built-in high evasion due to the animation ducking low, and launches on hit for full combo. +4s on crouching normal hit.',
            notes: [
              'Safe on block — most characters\' launchers are punishable; Paul\'s isn\'t',
              'Built-in high evasion — Paul ducks during the animation',
              'Full combo on hit — your primary combo starter',
              'Use for whiff punishment or as a keep-out tool',
            ],
          }}
          showVideo
        />

        <p>
          Every character has a df+2. Most of them are punishable on block — launch someone, cool; get blocked, you eat a combo.
          Paul's df+2 is -8. That means even if they block it, all they get is their turn back. No punish. No combo. Just
          "okay, you blocked it, moving on."
        </p>
        <p>
          On top of that, Paul's df+2 has built-in evasion. The animation makes Paul duck low to the ground, which means
          certain high attacks will fly right over him. It's not something to rely on, but it occasionally steals rounds
          you had no business winning.
        </p>
        <p>
          Use df+2 for whiff punishment, as a keep-out tool against aggressive opponents, and any time you want to launch
          without risk. This is your safe bet launcher. No fear.
        </p>
      </Section>

      <Section title="d+1+2 — The Shoulder Check">
        <MoveCard
          character="paul"
          move={{
            input: 'd+1+2',
            hitLevel: ['m'],
            damage: '28',
            startup: 'i12~13',
            onBlock: '-18',
            onHit: '+16d',
            onCH: '+24d',
            tags: ['mid'],
            description: 'Fast, high-damage mid shoulder check. Extremely punishable on block but devastating on hit or counter hit. Great as a counter hit tool and guaranteed follow-up from certain situations.',
            notes: [
              '-18 on block — heavily punishable, don\'t throw this out randomly',
              '28 damage for a single hit at i12 — huge reward on read',
              'Guaranteed after guard breaks and certain wall situations',
              'Use when you have a read or as a guaranteed follow-up, not in neutral',
            ],
          }}
          showVideo
        />

        <p>
          The shoulder check is 28 damage at 12 frames. That's obscene for a single mid hit. The catch is it's -18 on block —
          you're getting launched if they block this. So you don't throw it out randomly.
        </p>
        <p>
          Where d+1+2 shines is as a guaranteed punish tool. After Heat guard breaks (+12), d+1+2 is guaranteed. After wall splat situations
          where nothing longer reaches, d+1+2 is your reliable damage. And as a counter-hit fishing tool when you have a hard
          read that they're pressing buttons, 28 damage on hit is a brutal reward.
        </p>
      </Section>

      <Section title="f+1+2 — The Pressure Mid">
        <MoveCard
          character="paul"
          move={{
            input: 'f+1+2',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i20~21',
            onBlock: '+3c',
            onHit: '+8c',
            onCH: '+35d',
            tags: ['mid', 'plus on block'],
            description: 'A slow but plus-on-block mid that generates pressure. Chip damage on block. Can charge for more damage and guard break potential. Transitions into Deep Dive with df. Counter hit launches.',
            notes: [
              '+3 on block with chip damage — your turn continues',
              'Can be charged (f+1+2*) for +7 on block with even more chip',
              'Transitions into Deep Dive (DPD) by holding df',
              'Counter hit causes balcony break — full combo on CH',
              'In Heat, charged version becomes guard break at +12',
            ],
          }}
          showVideo
        />

        <p>
          f+1+2 is Paul's slow-but-safe pressure tool. At i20, it's not fast enough to use in footsies, but it's +3 on block
          with chip damage — meaning after they block it, it's still your turn. The charged version (hold the input) becomes
          +7 on block. In Heat, the charged version becomes a true guard break at +12, guaranteeing d+1+2 or b+1,2.
        </p>
        <p>
          This move also transitions into Deep Dive (DPD) by holding df, which you'll learn about in Chapter 6. For now,
          know that f+1+2 is your "I want to keep pressing buttons safely" move.
        </p>
      </Section>

      <Section title="3,2 — The Natural Combo">
        <MoveCard
          character="paul"
          move={{
            input: '3,2',
            hitLevel: ['m', 'h'],
            damage: '14, 17',
            startup: 'i15~16',
            onBlock: '-3',
            onHit: '+7',
            onCH: '+50a',
            tags: ['mid', 'high'],
            description: 'A natural hit combo string. The first hit is a solid i15 mid kick. The second hit is a high that wall splats on counter hit. Can be cancelled into back sway by holding back.',
            notes: [
              '3,2~b transitions to back sway at +4 on block',
              'Counter hit on second hit causes a devastating wall splat combo',
              'Use in combos and as a mid poke with sway cancel options',
              'Safe on block at -3',
            ],
          }}
          videoId="3,2"
          showVideo
        />

        <p>
          3,2 is a reliable mid-high natural combo. The first hit is a solid i15 mid poke. If the first hit connects,
          the second hit is guaranteed. Like df+1, it can be cancelled into back sway by holding back (3,2~b),
          which gives you +4 on block — even better than df+1~b.
        </p>
        <p>
          This move is also critical in your combo structure. After wall splats, 3,2 into either d+1+2 or back sway 2
          is your standard wall combo ender. You'll use this move constantly.
        </p>
      </Section>

      <Section title="df+4 — The Knee Check">
        <MoveCard
          character="paul"
          move={{
            input: 'df+4',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i17~18',
            onBlock: '-2',
            onHit: '+8',
            onCH: '+14',
            tags: ['mid'],
            description: 'Safe mid knee poke. -2 on block, +8 on hit, +14 on counter hit. Not flashy but a workhorse move that checks opponents and connects in combos.',
            notes: [
              'Important in combo routes — connects after many launchers',
              '+14 on CH gives guaranteed d+1+2 follow-up',
              'A solid "just check them" button when you don\'t want to commit',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="b+4 — The Power Low">
        <MoveCard
          character="paul"
          move={{
            input: 'b+4',
            hitLevel: ['L'],
            damage: '14',
            startup: 'i20~21',
            onBlock: '-12c',
            onHit: '+4',
            onCH: '+17g',
            tags: ['low'],
            description: 'A solid power low that\'s not Demo Man but is much safer to use in neutral. On counter hit, +17 guarantees a crouch dash mixup — Death Fist or Demo Man.',
            notes: [
              '-12 on block — punishable by ws+4 but not launchable',
              'On counter hit: +17 guarantees crouch dash mixup',
              'Use as a mid-range low poke when Demo Man is too risky',
              'Much safer than Demo Man for applying low pressure',
            ],
          }}
          showVideo
        />

        <p>
          Demo Man is your power low when you're point blank. But what about when you need a low poke in neutral
          without the insane risk? That's b+4. It's -12 on block — punishable but not launchable. And on counter hit,
          you're +17, which guarantees a crouch dash mixup. That's right: counter hit b+4 gives you a free Death Fist or Demo Man guess.
        </p>
      </Section>

      <Section title="4 — The Jab Check">
        <MoveCard
          character="paul"
          move={{
            input: '4',
            hitLevel: ['h'],
            damage: '17',
            startup: 'i12',
            onBlock: '-7',
            onHit: '+7',
            onCH: '+32d',
            tags: ['high'],
            description: 'A fast high kick. 12 frames, +7 on hit, and devastating on counter hit — +32d crumple into full combo. A great keep-out and counter-hit fishing tool.',
            notes: [
              'Counter hit gives a crumple into full combo',
              '-7 on block is safe — no punishment',
              'Use as a quick check against aggressive opponents',
              '12 frames — your fastest counter-hit launcher',
            ],
          }}
          showVideo
        />

        <p>
          Standing 4 is Paul's premier counter-hit fishing tool at close range. At i12, it's fast. On counter hit, +32d crumples
          the opponent for a full combo. It's a high so it can be ducked, but at i12, most opponents aren't ducking — they're
          pressing buttons. And that's exactly when you want this out.
        </p>
      </Section>

      <Section title="Putting Your Buttons Together">
        <KeyConcept title="The Foundation Game Plan" icon="🧱">
          <p>
            Your basic neutral game plan with these buttons:
          </p>
          <ul>
            <li><strong>At range:</strong> Use df+2 to check aggression (safe launcher) and b+4 for low pokes</li>
            <li><strong>At mid-range:</strong> Use df+1~b to generate plus frames and enter sway offense</li>
            <li><strong>Up close:</strong> Use 4 to fish for counter hits, df+4 to check, and f+1+2 for chip/plus frames</li>
            <li><strong>Combo filler:</strong> 3,2 and df+4 are your workhorses in combo routes</li>
            <li><strong>When you have a read:</strong> d+1+2 for huge single-hit damage, 4 for counter-hit combos</li>
          </ul>
        </KeyConcept>

        <ConstraintPlay
          title="Scholar Paul — Foundation Only"
          description="Play 5 rounds using only your foundation buttons. No Death Fist. No Demo Man. No crouch dash. Just your pokes, your launcher, and your brain. The goal is to learn that Paul can absolutely win without going full gorilla."
          allowedMoves={[
            { input: 'df+1', purpose: 'Mid poke into back sway' },
            { input: 'df+2', purpose: 'Safe launcher' },
            { input: 'd+1+2', purpose: 'Shoulder check (on reads only)' },
            { input: '4', purpose: 'Counter-hit fishing' },
            { input: 'df+4', purpose: 'Safe mid check' },
            { input: 'b+4', purpose: 'Low poke' },
            { input: '3,2', purpose: 'Natural combo string' },
            { input: '1,2', purpose: 'Jab string' },
          ]}
          duration="10 minutes"
          goal="Win rounds using only fundamental buttons. Prove that Scholar Paul works."
          whatYouLearn={[
            'How Paul\'s pokes control space without relying on the 50/50',
            'When to launch (df+2) vs when to poke (df+1, df+4)',
            'How counter-hit 4 leads to huge damage',
            'That b+4 counter hit gives you free mix — even without crouch dash tools',
          ]}
          setup={{
            cpuBehavior: 'CPU level 3-5',
            rounds: 5,
          }}
          progressionHint="Once you're comfortable winning with these buttons, the 50/50 becomes the finishing move on top of an already solid game plan — not a crutch."
        />
      </Section>
    </Chapter>
  )
}
