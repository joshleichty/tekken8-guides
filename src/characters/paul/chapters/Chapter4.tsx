import { Chapter, Section, SubSection } from '../../../components/guide'
import { MoveCard, TipBox, PracticeBox, KeyConcept, SpacingGame, DecisionGrid } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Closing In"
      intro="Paul's 50/50 requires you to be in their face. But rounds don't start point blank. You need tools that close distance, control space, and — critically — fish for Heat Engagers. These moves do all three."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Learn The Sway"
    >
      <Section title="Why Range Matters for Paul">
        <p>
          Paul's biggest weakness at mid-range isn't his tools — they're actually quite good. The issue is that Demo Man
          doesn't work from range. The clean hit requirement means you need to be practically touching them for the sweep
          to trip. So while Death Fist has excellent range, the full 50/50 only works point blank.
        </p>
        <p>
          This chapter teaches you the moves that close that gap. Most of these are also Heat Engagers, which means
          landing any one of them starts the chain: Heat Engager → +17 → point blank → guess Death Fist or Demo Man.
          Learning to fish with these moves IS learning Paul's game plan.
        </p>
      </Section>

      <Section title="uf+2 — The Sky Fist">
        <MoveCard
          character="paul"
          move={{
            input: 'uf+2',
            hitLevel: ['h'],
            damage: '26',
            startup: 'i22~23',
            onBlock: '+5',
            onHit: '+17d',
            tags: ['high', 'heat engager', 'plus on block'],
            description: 'A jumping high punch with absurd range. +5 on block with chip damage. Heat Engager on hit (+17). One of Paul\'s best approach tools. Transitions into Deep Dive with df.',
            notes: [
              '+5 on block — you are plus AND it does chip damage',
              'Heat Engager on hit — +17 into immediate crouch dash mixup',
              'Enormous range — connects from further than you\'d expect',
              'Low crush 9~24 — hops over lows',
              'The one weakness: it\'s a high. Can be ducked on prediction.',
            ],
          }}
          showVideo
        />

        <SubSection title="Why uf+2 Is Elite">
          <p>
            +5 on block. Read that again. Your opponent blocks this, and you're at +5 with chip damage dealt. That means
            after a blocked uf+2, your next df+1 comes out at 9 effective frames — faster than any jab in the game.
            And if uf+2 hits? Heat Engager. +17. Crouch dash. Guess.
          </p>
          <p>
            The range on this move is absurd for a high. From just outside of jab range, uf+2 connects comfortably.
            And since it low crushes (frames 9-24), it hops over lows while approaching. The only real weakness is that
            it's a high — if someone ducks on prediction, they launch you. But they have to commit to the duck before
            seeing the move, which means it's a read, not a reaction.
          </p>
        </SubSection>

        <TipBox title="uf+2 vs f+1+2" variant="tip">
          Both uf+2 and f+1+2 are plus on block with chip damage. Use uf+2 from range (it reaches further and is a Heat Engager).
          Use f+1+2 up close (it's a mid and transitions into Deep Dive). Think of uf+2 as the long-range version and f+1+2
          as the close-range version of the same concept: safe plus-frame pressure.
        </TipBox>
      </Section>

      <Section title="f+4 — The Stone Lion">
        <MoveCard
          character="paul"
          move={{
            input: 'f+4',
            hitLevel: ['m'],
            damage: '24',
            startup: 'i22',
            onBlock: '-5',
            onHit: '+6',
            tags: ['mid', 'heat engager', 'homing'],
            description: 'Safe homing mid kick with great range. Heat Engager on hit. Full circle tracking means no sidestepping this. Low crushes on startup. Your complete coverage approach tool.',
            notes: [
              'Heat Engager on hit — same +17 into mixup as other engagers',
              'Homing — tracks both directions. Cannot be sidestepped.',
              '-5 on block at range means jabs often whiff after',
              'Low crush 9~22 — beats low pokes',
              'Your answer when uf+2 is getting ducked',
            ],
          }}
          showVideo
        />

        <SubSection title="The Complete Coverage Button">
          <p>
            uf+2 is incredible, but it's a high. Sidesteppers can evade it, and people who duck on prediction launch you.
            f+4 exists to cover those options. It's a mid (can't be ducked), it's homing (can't be sidestepped),
            it's safe on block (-5), and it's a Heat Engager. This is your "covers everything from range" button.
          </p>
          <p>
            The trade-off is it doesn't give you plus frames on block like uf+2. But at -5 with the pushback f+4 creates,
            most jabs won't reach, so the frame disadvantage is often academic. Use f+4 when you want to guarantee
            something lands — no ducking, no stepping, no exceptions.
          </p>
        </SubSection>
      </Section>

      <Section title="f,f+2:1 — The Approach Elbow">
        <MoveCard
          character="paul"
          move={{
            input: 'f,F+2:1',
            hitLevel: ['m', 'h'],
            damage: '14, 24',
            startup: 'i15~17',
            onBlock: '-4',
            onHit: '+37d',
            tags: ['mid', 'high', 'wall splat'],
            description: 'The elbow-punch approach string. First hit is a mid elbow. The second hit (just frame) is a high with a very relaxed just frame window. -4 on block, chip damage, and wall splats with enormous carry.',
            notes: [
              'Just frame 1 input: after 2 connects, press 1 timing',
              'Wall splats from incredible distance due to pushback',
              'Ledge break on stages with ledges',
              'If they duck the high: use f,F+2,1 (mid-mid, natural combo) instead',
              'Can also go f,F+2,2 for a low follow-up (launch on hit)',
            ],
          }}
          videoId="f,F+2,1"
          showVideo
        />

        <SubSection title="The Just Frame That Isn't Hard">
          <p>
            Don't let "just frame" scare you. The window for f,f+2:1 is very relaxed. All you do is press the elbow (f,f+2),
            see it connect, then press 1. Don't mash 1 before the elbow — just wait for it to land, then press 1. That's it.
          </p>
          <p>
            If they start ducking the just frame (it's a high), you have options: f,f+2,1 (press 1 before the elbow) gives you
            a mid-mid natural combo instead. And f,f+2,2 gives you a low follow-up that launches. The full f,f+2 family
            creates a small mixup of its own: high (safe), mid-mid (punishable but beats duck), or low (launches but risky).
          </p>
        </SubSection>

        <TipBox title="Wall Carry Monster" variant="tip">
          f,f+2:1 sends your opponent an enormous distance on hit. If there's a wall anywhere behind them,
          this move will find it. It also ledge breaks on stages like Fallen Destiny. In combos, use 4,4,2:1 
          (which ends with a similar just frame) for maximum wall carry.
        </TipBox>
      </Section>

      <Section title="qcb+4 — The Spinning Keep-Out">
        <MoveCard
          character="paul"
          move={{
            input: 'qcb+4',
            hitLevel: ['h'],
            damage: '17',
            startup: 'i15~16',
            onBlock: '+1',
            onHit: '+23d',
            onCH: '+59a',
            tags: ['high', 'homing', 'plus on block'],
            description: 'Homing high from back sway. +1 on block with chip damage. On counter hit, crumples for a full combo. Excellent keep-out and counter-hit bait tool.',
            notes: [
              '+1 on block — you stay plus with chip',
              'Homing — full circle tracking',
              'Counter hit crumple — devastating damage on CH',
              'It\'s a high — can be ducked',
              'Use after back sway transitions for maximum threat',
            ],
          }}
          showVideo
        />

        <p>
          qcb+4 is the back sway version of a keep-out tool. It's a homing high that's +1 on block with chip.
          On counter hit, it crumples for a full combo. The move tracks both directions, so sidestepping doesn't work.
          The weakness is it's a high, but at 15 frames with full tracking, opponents rarely have the confidence to duck.
        </p>
        <p>
          This move shines in the Scholar Paul game: backdash, back sway, and if they chase with buttons, qcb+4 counter hits
          for enormous damage. It's the "did I catch you pressing a button?" check.
        </p>
      </Section>

      <Section title="Heat Engager Strategy">
        <DecisionGrid
          title="Which Heat Engager, When?"
          description="Paul has multiple Heat Engagers. Using the right one for the situation is key to activating Heat efficiently."
          rows={[
            {
              situation: 'Opponent at long range, standing',
              response: 'uf+2',
              reason: 'Best range of all engagers, +5 on block. If they\'re standing, this reaches.',
              risk: 'High — can be ducked on hard read',
            },
            {
              situation: 'Opponent sidestepping or at range',
              response: 'f+4',
              reason: 'Homing mid. Cannot be ducked or stepped. Guaranteed to track.',
              risk: '-5 on block, not plus. But safe at range.',
            },
            {
              situation: 'Approaching from mid-range',
              response: 'qcf+2',
              reason: 'Death Fist itself is a Heat Engager. If it lands, heat + wall splat.',
              risk: '-17 on block, punishable up close',
            },
            {
              situation: 'From back sway offense',
              response: 'qcb+2',
              reason: 'Mid Heat Engager from sway. Safe at -9 with pushback.',
              risk: 'Only available from back sway transitions',
            },
            {
              situation: 'Quick punish situation',
              response: 'f+2',
              reason: 'Fast high Heat Engager at i13. Transitions to throw on hit.',
              risk: 'High — can be ducked. Use in punish situations where they\'re standing.',
            },
          ]}
        />

        <KeyConcept title="Fish, Don't Force" icon="🎣">
          <p>
            The single most important Paul habit: <strong>fish for Heat Engagers, don't force the 50/50 raw.</strong>
          </p>
          <p>
            A raw crouch dash into Death Fist or Demo Man without Heat is good. But a Heat Engager into the 50/50 is
            game-ending. The difference between +2 (raw heat burst) and +17 (heat engager) is the difference between
            "they might escape" and "they have to guess and both guesses might kill them."
          </p>
          <p>
            Use your approach tools (uf+2, f+4, qcf+2) to fish. When one lands, you're in Heat, you're plus, you're in
            their face, and the kill chain is complete. Don't rush it.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Range Awareness">
        <SpacingGame
          title="Paul's Three Zones"
          description="Paul operates in three distinct ranges. Knowing which tools belong to which range prevents you from throwing the wrong move at the wrong time."
          targetRange="Kill Range"
          ranges={[
            {
              name: 'Far Range',
              description: 'Outside of f+4 range. Too far for most of your offense. Use movement to close distance.',
              yourTools: ['Backdash', 'Sidestep', 'f+4 (at tip range)', 'uf+2 (tip range)'],
              danger: 'Don\'t throw Death Fist from here — even if it connects, no clean hit damage.',
            },
            {
              name: 'Approach Range',
              description: 'Where uf+2 and f+4 are comfortable. Your Heat Engager fishing zone. This is where Scholar Paul lives.',
              yourTools: ['uf+2', 'f+4', 'f,F+2:1', 'qcf+2 (Death Fist)', 'df+2 (launcher)'],
              danger: 'Demo Man doesn\'t clean hit from here. Don\'t try it.',
            },
            {
              name: 'Kill Range',
              description: 'Point blank. This is where Paul is the most dangerous character in Tekken. Demo Man works. Death Fist works. Everything works.',
              yourTools: ['qcf+2 (Death Fist)', 'd+4,2:1+2 (Demo Man)', 'df+1~b (sway pressure)', 'Throws', 'f+1+2 (pressure mid)'],
            },
          ]}
          cpuBehavior="CPU Guard All, Random Counter"
          successMetric="Identify your current range and use the appropriate tool"
          duration="5 minutes"
          tips={[
            'Use uf+2 and f+4 to fish for Heat Engagers from Approach Range',
            'Only go for Demo Man when you are in Kill Range',
            'Death Fist has great range — it works from both Approach and Kill Range',
            'df+2 is your keep-out launcher for aggressive opponents at Approach Range',
          ]}
          whyThisMatters="Understanding range prevents the #1 Paul mistake: throwing Demo Man from too far and getting nothing. Your approach tools exist to get you from Approach Range to Kill Range safely."
        />
      </Section>

      <Section title="Practice: Closing Distance">
        <PracticeBox
          title="Heat Engager Fishing"
          setup="Practice Mode. CPU set to Guard After First Hit. Any walled stage."
          tasks={[
            { id: 'uf2-range', text: 'From max range, land uf+2 five times. Feel the distance where it connects.', type: 'counter', target: 5 },
            { id: 'f4-track', text: 'Record CPU sidestepping, then use f+4 to track them. Land 5 times.', type: 'counter', target: 5 },
            { id: 'ff21-carry', text: 'Land f,f+2:1 three times and observe the wall carry distance.', type: 'counter', target: 3 },
            { id: 'engager-mix', text: 'Alternate between uf+2, f+4, and qcf+2 as approach tools. Get comfortable choosing the right one.', type: 'toggle' },
          ]}
        />
      </Section>
    </Chapter>
  )
}
