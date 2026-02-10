import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  MatchScenario,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="The Workhorse"
      intro="One move. Five layers. df+1,4 is the backbone of Azucena's close-range game — a single poke that becomes a counter-hit trap, a mid check, a stance entry, and a BT transition depending on what your opponent does after they block it."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Punishment Arsenal"
    >
      <Section title="Why This Move Matters">
        <p>
          Most pokes in Tekken do one thing: they hit, push back, and reset. <code>df+1,4</code> does five
          things, and which one matters depends entirely on your opponent's habits. It's a 13-frame mid-high
          that <strong>jails on block</strong> — meaning if the first hit is blocked, the second hit is
          guaranteed to be blocked too. Opponents can't duck or sidestep between the hits.
        </p>

        <p>
          That might sound minor. It's not. Jailing means your opponent has to sit there and take both hits.
          And after both hits, <em>you</em> get to decide what happens next based on what you've noticed
          about their tendencies.
        </p>
      </Section>

      <Section title="Layer 1: The Poke">
        <MoveCard character="azucena"
          move={{
            input: 'df+1,4',
            hitLevel: ['m', 'h'],
            damage: '13, 12',
            startup: 'i13',
            onBlock: '-2',
            onHit: '+7',
            tags: ['Mid-High', 'Jails', '13f Poke', 'Many Extensions'],
            description: 'Your workhorse poke. 13 frames, mid start that jails into the high, and -2 on block means you\'re barely minus. On hit at +7, you have strong follow-up pressure.',
            notes: ['Jails — both hits are guaranteed on block', '-2 on block is nearly neutral', '+7 on hit gives you strong advantage', '13f makes it your go-to mid check']
          }}
          showVideo
        />

        <p>
          At its simplest, <code>df+1,4</code> is a mid check. You press it, it's safe, it gives you
          information. On hit, you're +7 and can continue pressing. On block, you're -2 — essentially neutral.
          Use it ten times a round and it's already earning its keep.
        </p>
      </Section>

      <Section title="Layer 2: The Counter-Hit Trap">
        <p>
          Your opponent blocks df+1,4 and wants to press a button after. They're only +2, so they think
          it's their turn. This is where the trap springs.
        </p>

        <MoveCard character="azucena"
          move={{
            input: 'df+1,4,1',
            hitLevel: ['m', 'h', 'h'],
            damage: '13, 12, 20',
            startup: 'i13',
            onBlock: '-7',
            onHit: 'KND',
            onCH: 'Crumple',
            tags: ['Extension', 'CH Trap', 'Counter Hit Crumple'],
            description: 'The third hit is a high that causes crumple on counter hit. If the opponent mashes after blocking df+1,4, this catches them for a full combo.',
            notes: ['On normal hit: knockdown', 'On counter hit: crumple → full combo', 'The third hit IS a high — they can duck it on read', '-7 on block — safe but slightly minus']
          }}
          showVideo
        />

        <KeyConcept title="The Trap Logic" icon="🪤">
          <p>
            After df+1,4 on block, you're -2. Your opponent is +2. If they press a jab (i10),
            it effectively comes out at frame 8. Your df+1,4,1 extension... also comes out fast enough
            to trade. And when it trades? <strong>Counter hit crumple. Full combo.</strong>
          </p>
          <p style={{ marginTop: '12px' }}>
            The key: they have to <em>decide</em> to press a button. If they've been pressing after every
            df+1,4, start throwing out the 1 extension. They'll learn to stop pressing. And when they stop
            pressing, layers 3, 4, and 5 become free.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Layer 3: The Mid Catch">
        <p>
          Your opponent learned not to press buttons after df+1,4. Smart. Now they're ducking the high
          extension instead. Time for layer 3.
        </p>

        <MoveCard character="azucena"
          videoId="df+1,4,1~2"
          move={{
            input: 'df+1,4,1~2',
            hitLevel: ['m', 'h', 'h', 'm'],
            damage: '13, 12, 20, 25',
            startup: 'i13',
            onBlock: '-13',
            onHit: 'KND',
            tags: ['Mid Extension', 'Catches Duckers', 'Guaranteed Follow-up'],
            description: 'Instead of just the high, the 1~2 adds a mid spike that catches opponents ducking the third hit. Punishable on block, but devastating when it lands.',
            notes: ['Catches opponents who duck the 1 extension', '-13 on block — launch punishable by some characters', 'Guaranteed follow-up on hit', 'Use ONLY when you\'ve conditioned them to duck']
          }}
          showVideo
        />

        <TipBox variant="warning" title="Risk vs Reward">
          df+1,4,1~2 is -13 on block. That's launch punishable for many characters. Don't throw this out
          randomly. Use it when you've seen your opponent duck after the 1 extension at least twice. It's a
          read, not a default.
        </TipBox>
      </Section>

      <Section title="Layer 4: The Stance Cancel">
        <p>
          Your opponent respects everything. They block df+1,4, they don't press buttons, they don't duck.
          They just... wait. Perfect. That means Libertador is free.
        </p>

        <MoveCard character="azucena"
          videoId="df+1,4"
          move={{
            input: 'df+1,4~F',
            hitLevel: ['m', 'h'],
            damage: '13, 12',
            startup: 'i13',
            onBlock: '-2 → LIB',
            onHit: '+7 → LIB',
            tags: ['LIB Transition', 'Stance Cancel', 'Free Mixup'],
            description: 'Hold forward after df+1,4 to cancel into Libertador stance. On block you\'re -2 in LIB — risky but rewarding against passive opponents. On hit, the LIB mixup is real.',
            notes: ['On hit at +7 → LIB 50/50 is real', 'On block at -2 → technically their turn, but passive players won\'t punish', 'Only use on block against opponents who\'ve stopped pressing', 'On hit, this is one of your best LIB entry points']
          }}
          showVideo
        />

        <KeyConcept title="The Conditioning Payoff" icon="🎯">
          <p>
            This is where the layers come together. You used df+1,4,1 to teach them not to press. You used
            df+1,4,1~2 to teach them not to duck. Now they're frozen. And a frozen opponent against Libertador
            is a dead opponent.
          </p>
          <p style={{ marginTop: '12px' }}>
            On hit, df+1,4~F puts you in LIB at +7 — your fastest LIB options beat everything they can do.
            This is the ideal flow: poke → condition → free stance entry.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Layer 5: The Back Turn Entry">
        <p>
          Season 2 added a new option: <code>df+1,4~B</code>. Instead of forward into Libertador, hold back
          to enter Back Turn stance. This gives you access to a completely different set of mixups — BT 1+2
          for a counter-hit launcher, BT 3 for a low that loops back to LIB, and BT 3+4 for an evasive
          launcher.
        </p>

        <TipBox variant="tip" title="When to Use BT Entry">
          The BT entry from df+1,4 is most effective on hit (+7 into BT). On block, it's risky because BT
          options are generally slower. Save this layer for when opponents have fully adapted to your LIB
          entries and need a new angle to worry about. Chapter 5 covers Back Turn in depth.
        </TipBox>
      </Section>

      <Section title="Reading Your Opponent">
        <MatchScenario
          title="The df+1,4 Decision"
          situation="You landed df+1,4 on block. You're at -2. Your opponent is deciding what to do."
          context="You've been using df+1,4 a lot this round. They blocked the last three. What do you do next?"
          options={[
            {
              action: 'Do df+1,4,1 (the CH extension)',
              input: 'df+1,4,1',
              result: 'If they press a button, counter hit crumple into full combo. If they block, you\'re -7 but safe.',
              isOptimal: false,
              followup: 'Best when they\'ve been mashing after the blocked poke.',
            },
            {
              action: 'Do df+1,4 and stop',
              input: 'df+1,4',
              result: 'Safe at -2. Resets to neutral. No risk, no reward. Good when you don\'t have a read.',
              isOptimal: false,
            },
            {
              action: 'Do df+1,4~F into Libertador',
              input: 'df+1,4~F',
              result: 'Transitions into LIB at -2 on block. Against a passive opponent who\'s been conditioned not to press, this gives you a free stance mixup.',
              isOptimal: true,
              followup: 'The best option when you\'ve already conditioned them with the 1 extension.',
            },
            {
              action: 'Do df+1,4,1~2 (mid spike)',
              input: 'df+1,4,1~2',
              result: 'Catches duckers for huge damage. But -13 on block means you eat a launcher if they stood.',
              isOptimal: false,
              followup: 'Only when you\'ve SEEN them duck the 1 extension.',
            },
          ]}
          keyTakeaway="There's no single best option — it depends on what your opponent has been doing. The power of df+1,4 is that it has the right answer for every habit. Your job is to watch and choose."
        />
      </Section>

      <Section title="Practice: The Five Layers">
        <PracticeBox
          title="df+1,4 Mastery Drill"
          setup="Practice Mode. Set opponent to Stand Guard first, then switch to various guard options."
          tasks={[
            { id: 'az-df14-poke', text: 'Do df+1,4 by itself 10 times', detail: 'Get the timing clean. Feel the -2 on block. This is your default.', type: 'counter', target: 10 },
            { id: 'az-df14-ch', text: 'Do df+1,4,1 as a CH trap 10 times', detail: 'Set opponent to "After Block: 2 (Jab)" and watch the counter hit crumple.', type: 'counter', target: 10 },
            { id: 'az-df14-mid', text: 'Do df+1,4,1~2 against a ducking opponent 5 times', detail: 'Set opponent to "After Block: Crouch" and catch them with the mid spike.', type: 'counter', target: 5 },
            { id: 'az-df14-lib', text: 'Do df+1,4~F to enter LIB 10 times', detail: 'Hold forward right after the 4. You should see the LIB stance animation.', type: 'counter', target: 10 },
            { id: 'az-df14-mix', text: 'Alternate between all options based on opponent behavior', detail: 'Set opponent to random after-block actions. Read their response and choose the right layer.', type: 'toggle' },
          ]}
        />

        <TipBox variant="tip" title="The Real Drill">
          The practice mode drill teaches your hands. The real drill happens in matches. Every time you land
          df+1,4 on block, ask yourself: "What did they do after?" That observation, over dozens of reps,
          builds the instinct to choose the right layer automatically.
        </TipBox>
      </Section>

      <Section title="What's Next">
        <p>
          df+1,4 is your close-range engine. But Azucena has something even more special: the best 10-frame
          punish in the game. Every time your opponent does something unsafe, <code>1,1</code> into Libertador
          at +8 turns their mistake into a free 50/50. It's the single most efficient punish in Tekken.
        </p>
      </Section>
    </Chapter>
  )
}
