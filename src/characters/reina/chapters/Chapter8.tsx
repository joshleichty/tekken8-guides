import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, Flowchart, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="The Complete Reina"
      intro="You've learned the Sentai engine, punishment, Heaven's Wrath, neutral tools, combos, and heat. This final chapter connects everything — Unsoku stance, the parry system, okizeme, stance transitions, and the mental framework that ties it all together. This is the chapter that turns a Reina player into a Reina main."
      hasPrevious
      onPrevious={() => goToChapter(7)}
    >
      <Section title="Unsoku — The Evasion Stance">
        <p>
          Unsoku is Reina's movement stance. Unlike Sentai (pressure) and Heaven's Wrath (frame traps),
          Unsoku is about evasion, repositioning, and picking your spots. It has two variants:
        </p>
        <ul>
          <li><strong>Unsoku Gen (b+3):</strong> Evasive backstep. Covers a lot of distance backward. Cannot block during the stance.</li>
          <li><strong>Unsoku Kou (u+3 or d+3):</strong> Sidestep variants. Has a punch parry window (similar to Fusatsu Jin). Cannot block during the stance.</li>
        </ul>
        <p>
          From any Unsoku, you can cancel into Sentai (f+3), crouch dash (df), or other Unsoku variants.
          In heat, entering Unsoku recovers some heat timer.
        </p>

        <MoveCard
          character="reina"
          videoId="UNS.4"
          move={{
            input: 'UNS 4',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i18',
            onBlock: '-8',
            onHit: 'KND',
            tags: ['Mid', 'Heat Engager', 'Safe', 'High Crush'],
            description: 'Unsoku\'s signature move. Massive range, safe on block, high crushes for most of its frames. In heat, fully launches for a combo. Use from b+3 to bait a whiff then punish with this. Cancel with db during startup if you change your mind.',
          }}
          showVideo
        />

        <KeyConcept title="Unsoku in Practice" icon="🌀">
          <p>
            The primary use of Unsoku is as a whiff punishment tool and movement option:
          </p>
          <ul>
            <li><strong>b+3 → UNS 4:</strong> Backstep away from an attack, then punish the whiff with the long-range heat engager.</li>
            <li><strong>b+3 → df → hellsweep:</strong> Cancel into crouch dash for a mixup from evasion.</li>
            <li><strong>b+3 → f+3 → SEN options:</strong> Cancel into Sentai for a surprise approach.</li>
            <li><strong>Chaining Unsoku:</strong> b+3 → d+3 → u+3 → repeat. In heat, this recovers your heat timer while making you incredibly hard to hit.</li>
          </ul>
          <p>
            Yagami describes Unsoku as "not that useful" on its own — its power comes from canceling
            into other stances and creating unpredictable movement patterns.
          </p>
        </KeyConcept>

        <Collapsible title="Other Unsoku Options" icon="📋">
          <ul>
            <li><strong>UNS 3 (i16-17):</strong> Essentially the same as CD3 (f,n+3). Counter hit launcher. Fastest Unsoku option.</li>
            <li><strong>UNS d+4 (i20):</strong> Same as f,n+4 — high-crushing low that transitions to Sentai on hit. -12 on block.</li>
            <li><strong>UNS → f+1+2:</strong> Forward roll (f+3+4) with all its options — the mid kick, the guard break charge, the low cancel. Accessible from Unsoku.</li>
            <li><strong>UNS → df → electric:</strong> If you time it right, you can get the electric versions of moves from Unsoku's crouch dash cancel. High execution.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="The Parry System">
        <p>
          Reina has three parries, each with different properties and uses:
        </p>

        <KeyConcept title="Fusatsu Jin (f,n punch parry)" icon="👊">
          <p>
            Tap forward in neutral — Reina does a small hand motion with a 2-8 frame parry window for
            <strong> punches only</strong>. On success, forced into crouch dash at +10. You can crouch
            cancel into 1,1,2, 2,2, or 2,2,1 as guaranteed follow-ups.
          </p>
          <p>
            In practice, this happens mostly by accident — the forward tap parry triggers during approach.
            When you see the animation, crouch cancel into 1,1,2 for the Sentai mixup. It's also triggered
            from Unsoku Kou (d+3, u+3) with a more lenient window.
          </p>
        </KeyConcept>

        <KeyConcept title="Tatenashi (b+1+3 / b+2+4)" icon="🛡️">
          <p>
            Parries mid and high attacks including knees, elbows, and weapons. Activates at frame 3.
            On success, Reina takes 10 recoverable damage and transitions to Heaven's Wrath. The frame
            advantage depends on the move parried.
          </p>
          <ul>
            <li>Against fast moves (jabs): minimal advantage — mostly just a free WRA mixup</li>
            <li>Against slower moves: WRA 2 may be guaranteed (heat engager)</li>
            <li>In heat: the 10 recoverable damage is restored by the WRA auto-parry, and parrying lets you heat engage into a full combo</li>
          </ul>
          <p>
            Best used to parry multi-hit strings that opponents like to heat dash from. Don't spam it —
            it loses to throws, lows, and reversal breaks (Paul's deathfist in heat, all heat smashes,
            all rage arts).
          </p>
        </KeyConcept>

        <KeyConcept title="WRA Auto-Parry (Heat Only)" icon="🔥">
          <p>
            Covered in Chapter 7. In heat, Heaven's Wrath automatically parries limb-based mids and
            highs for 40 damage. Beats with hopkicks, lows, or throws. The parry that makes SEN 1+2
            and ws+4,4 → WRA effectively unpunishable in heat.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Parry Setups">
          <p>These are the most practical parry setups:</p>
          <ul>
            <li><strong>SEN 2 → Tatenashi:</strong> If opponent jabs after -4 SEN 2, the parry catches it. Transitions to WRA for a mixup.</li>
            <li><strong>ws+4,4 → WRA auto-parry (heat):</strong> Opponent tries to punish your -10 ws punish and gets parried for 40 damage.</li>
            <li><strong>df+1 → Fusatsu Jin:</strong> After -3 df+1, tapping forward can catch jab retaliations. Accidental but rewarding when it happens.</li>
            <li><strong>SEN 1+2 → WRA auto-parry (heat):</strong> The big one. -6 in WRA, but the parry catches anything except lows, throws, and hopkicks.</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Okizeme — Attacking the Wake-Up">
        <p>
          Reina's okizeme is about reading how the opponent wakes up and choosing the right option:
        </p>

        <Flowchart
          title="Okizeme Decision Tree"
          nodes={[
            { type: 'start', label: 'Opponent is knocked down' },
            { type: 'decision', label: 'How do they wake up?', branches: [
              { label: 'Tech roll', action: 'Wave dash to realign → hellsweep/f,f+2 mixup' },
              { label: 'Stay down', action: 'CD3 (hits grounded, pancake flips) or d+4,1 stomp' },
              { label: 'Wake-up kick', action: 'Block → launch punish (most are -15 or worse)' },
              { label: 'Spring kick', action: 'Backdash or block → launch punish (-14 or worse)' },
            ]},
            { type: 'end', label: 'Continue pressure or return to neutral' },
          ]}
        />

        <KeyConcept title="Reactive Okizeme" icon="👁️">
          <p>
            Yagami plays okizeme <strong>reactively</strong>. Instead of guessing what the opponent
            will do, he watches their character model:
          </p>
          <ul>
            <li>If they don't tech roll, hit them with d+4,1 stomp — it's guaranteed while they're on the ground</li>
            <li>Keep stomping until they tech roll — each stomp is free damage</li>
            <li>Once they tech roll, react to the roll and hellsweep them</li>
            <li>If they stay down and you want to be safe, use CD3 — it hits grounded and counter-hit launches wake-up kicks</li>
          </ul>
          <p>
            Don't anticipate. React. The half-second delay of watching before acting is almost always
            worth it compared to guessing wrong and getting launched.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Wall Okizeme">
          <p>
            At the wall, your oki depends on which wall combo you used. After the optimal
            b+1,1,3 wall combo, WRA 3+4 hits grounded and gives guaranteed CD3. After any
            wall combo, f+4 (plus frames, forces crouch) mixed with hellsweep and throws is
            the standard wall oki. Use <strong>qcb,f+2</strong> throw at the wall — it
            activates wall gimmicks without side-switching.
          </p>
          <p>
            Track which direction the opponent tech rolls at the wall. Follow with a sidestep
            to keep them cornered. If they tech roll into the corner, they're trapped. If they
            tech away, you need to adjust your spacing.
          </p>
        </TipBox>
      </Section>

      <Section title="The Stance Web">
        <p>
          What makes Reina truly unique isn't any individual stance — it's how all her stances
          connect. Every stance can transition into every other stance:
        </p>
        <ul>
          <li><strong>Sentai → Heaven's Wrath:</strong> SEN 2 hold D, SEN 1+2 (automatic)</li>
          <li><strong>Sentai → Unsoku:</strong> SEN → df (crouch dash) → b+3</li>
          <li><strong>Heaven's Wrath → Sentai:</strong> WRA → f+3, or WRA 1 hold F</li>
          <li><strong>Heaven's Wrath → Unsoku:</strong> WRA 1 hold u/d</li>
          <li><strong>Heaven's Wrath → Crouch Dash:</strong> WRA → df (cancel)</li>
          <li><strong>Unsoku → Sentai:</strong> UNS → f+3</li>
          <li><strong>Unsoku → Crouch Dash:</strong> UNS → df (hold)</li>
          <li><strong>Unsoku → Unsoku:</strong> b+3 → d+3 → u+3 (chain)</li>
        </ul>

        <KeyConcept title="Why Transitions Matter" icon="🔄">
          <p>
            Opponents learn to handle individual stances. They learn to jab after f,f+2 → SEN.
            They learn to step WRA 2. They learn to respect your plus frames in WRA.
          </p>
          <p>
            What breaks them is <strong>variety in how you enter stances</strong>. Instead of
            only doing f,f+2 → SEN, try f+2,3 → SEN, or df+4,2 → WRA, or WRA 1 → SEN, or
            Unsoku → SEN. Each entry comes from a different distance, timing, and frame situation.
            The opponent can't build a single defensive response because the setup is never the same.
          </p>
          <p>
            This is what Reina is about at the highest level. Not one big gamble, but constantly
            varying your approach until the opponent runs out of answers.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Miscellaneous Tools">
        <Collapsible title="Back-Turn Situations" icon="🔄">
          <p>
            When you end up at the opponent's back (sidestep a slow move, certain combos):
          </p>
          <ul>
            <li><strong>2,2,2,qcf+2:</strong> Full string is guaranteed from back turn. Quick and reliable.</li>
            <li><strong>b+1,1,3 → SEN:</strong> Powerful option. After the SEN transition, if they don't duck, the back-turn throw is guaranteed for 92 total damage.</li>
            <li><strong>f,f+2 → SEN 1+2 → WRA 3+4:</strong> Good when the opponent is a bit far.</li>
            <li><strong>BT 4:</strong> Normal hit launcher from back turn. -14 on block but extremely rewarding on hit. Robbery tool.</li>
          </ul>
        </Collapsible>

        <Collapsible title="The Forward Roll (f+1+2 / f+3+4)" icon="📋">
          <ul>
            <li><strong>f+3+4:</strong> Rolling mid kick. -14 on block, CH launcher. High crushes for most of the animation. Cancel with db into crouch.</li>
            <li><strong>f+3+4 (hold):</strong> Guard break version. +10 on block — guarantees 1,1,2. In heat, gains a safe extension.</li>
            <li><strong>f+1+2:</strong> Roll into options — press 3 for a launch-punishable low, uf for empty jump or running moves.</li>
          </ul>
          <p>
            These are accessible from Unsoku by pressing 1+2 or 3+4. Niche but useful for mental
            stacking — opponents see you roll and don't know which option is coming.
          </p>
        </Collapsible>

        <Collapsible title="Fuki and Swift Shadow (1+4, u+1+2)" icon="📋">
          <p>
            Two purely evasive stances with no direct attacks:
          </p>
          <ul>
            <li><strong>1+4 (Fuki):</strong> High crush. Can cancel into crouch dash with df. With precise timing, you can get instant electrics from this stance.</li>
            <li><strong>u+1+2 (Swift Shadow):</strong> Also evasive. Same crouch dash cancel. Accessible from Unsoku.</li>
          </ul>
          <p>
            These are advanced tools for mixing up your movement and timing. Not necessary, but
            they add another layer of unpredictability for opponents trying to track your stances.
          </p>
        </Collapsible>
      </Section>

      <Section title="The Reina Mental Model">
        <p>
          After eight chapters, here's how it all fits together:
        </p>

        <Flowchart
          title="The Complete Game Plan"
          nodes={[
            { type: 'start', label: 'Neutral: approach with f,f+2, f+4, df+1, WR moves' },
            { type: 'decision', label: 'Did your move hit or get blocked?', branches: [
              { label: 'On hit', action: 'Confirm guaranteed follow-up (SEN 3, CD3, df+1,2)' },
              { label: 'On block', action: 'Enter stance → read the opponent → pick the option that beats their response' },
            ]},
            { type: 'decision', label: 'Are you in Sentai, WRA, or neutral?', branches: [
              { label: 'Sentai', action: 'SEN 3 (default), SEN 2 (safe), SEN 1+2 (power mid), throw, low' },
              { label: 'Heaven\'s Wrath', action: 'WRA 1 (frame trap), WRA 2 (safe mid), WRA 3,4 (chip loop), throw' },
              { label: 'Neutral', action: 'Poke, approach, punish → feed back into stances' },
            ]},
            { type: 'end', label: 'Win through accumulated pressure — not one big gamble' },
          ]}
        />

        <TipBox variant="tip" title="The Key Insight">
          <p>
            Reina doesn't win by landing one devastating blow. She wins by never giving the opponent
            room to breathe. Every punish starts a mixup. Every blocked approach starts pressure.
            Every stance flows into another stance. The opponent has to be right every single time.
            You only have to be right once to start the cycle again.
          </p>
          <p>
            The best Reina players — Yagami, Tech, Chaotic Perfection — all describe the same thing:
            <strong> accumulated pressure</strong>. Small advantages that stack. Chip damage that adds up.
            Throws that condition ducking. Mids that condition standing. Until the opponent cracks.
          </p>
        </TipBox>
      </Section>

      <Section title="What's Next">
        <p>
          You now have the complete Reina toolkit. But knowing the tools isn't the same as wielding
          them in a real match. Here's how to continue improving:
        </p>
        <ul>
          <li><strong>Play matches.</strong> Practice mode teaches mechanics. Ranked teaches decision-making. You need both.</li>
          <li><strong>Focus on one thing per session.</strong> Don't try to implement everything at once. Spend a session on hit confirming f,f+2. Another on ws+4,4 → WRA pressure. Another on okizeme.</li>
          <li><strong>Watch your replays.</strong> After losses, ask: "Did I lose because of execution, or because of a bad decision?" Fix the decisions first — execution improves with time.</li>
          <li><strong>Study matchups.</strong> Reina's weakness is linearity. Different characters step in different directions. Learn which of your moves track against each opponent.</li>
          <li><strong>Don't abandon the basics.</strong> At every rank, the core loop works: approach with f,f+2, punish with 1,1,2, enter stance, run mixup. The complexity is added on top of this foundation, never instead of it.</li>
        </ul>

        <PracticeBox
          title="Integration Drill"
          setup="Ranked or Player Match. Focus on integrating the full game plan."
          tasks={[
            { id: 'confirm', text: 'Hit confirm every f,f+2 and 1,1,2 correctly for an entire match', type: 'counter', target: 1 },
            { id: 'punish-stance', text: 'Punish 3 unsafe moves with stance transitions (1,1,2→SEN or ws+4,4→WRA)', type: 'counter', target: 3 },
            { id: 'adapt', text: 'Identify what your opponent does after f,f+2 on block and counter it', type: 'counter', target: 3 },
            { id: 'heat', text: 'Use heat efficiently — engage from a confirm, follow up with d+2,1+2', type: 'counter', target: 1 },
            { id: 'wall', text: 'Land an optimal wall combo (b+1,1,3 delayed) in a real match', type: 'counter', target: 1 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
