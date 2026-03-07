import { Chapter, Section, SubSection } from '../../../components/guide'
import { KeyConcept, TipBox, PracticeBox, Collapsible, DecisionGrid } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="The Complete Lidia"
      intro="You've learned the tools. Now let's assemble them into a complete player. This chapter isn't about new moves — it's about the mental framework that ties everything together. How to think at each range, how to shift between patience and aggression, and how to close out rounds when it matters."
      hasPrevious
      onPrevious={() => goToChapter(10)}
    >
      <Section title="Two Modes, One Character">
        <p>
          Lidia has two distinct identities depending on whether heat is available. Understanding
          this duality — and when to shift between them — is the difference between a good Lidia
          and a dangerous one.
        </p>

        <SubSection title="Mode 1: The Patient Neutral (No Heat)">
          <p>
            Without heat, Lidia is a fundamentals character. Your tools are honest, your stances
            require reads, and your reward comes from correct decisions — not from gimmicks. In
            this mode, your priorities are:
          </p>
          <ol>
            <li><strong>Build stacks.</strong> Every heat activation earns an HAE stack. You need to activate heat every single round, even if you can't do much with it. The investment pays off at level 3.</li>
            <li><strong>Fish for heat engagers.</strong> b+1 at close range, f+1+2,3,1+2 as a 14-frame punish, FC.df+2 from crouch, HRS 2 from stance. Your entire neutral game should orbit around finding one of these.</li>
            <li><strong>Control space with mids.</strong> df+1, df+2, f,f+2, b+3 — keep the opponent honest with tracking mids and safe pokes. Don't overcommit.</li>
            <li><strong>Gather information.</strong> Watch how the opponent responds to your stances. Do they jab? Duck? Sidestep? Armor? Store this for when you have heat and can punish their habits with real damage.</li>
          </ol>

          <KeyConcept title="Patience Is the Gameplan" icon="~">
            <p>
              Without heat, you are not trying to win the round with a single read. You're trying
              to activate heat, build stacks, and put yourself in position to dominate the next
              exchange. The patient neutral is about survival and positioning, not damage.
            </p>
            <p>
              A round where you activate heat, build a stack, and deal moderate damage is a
              <strong> successful round</strong> — even if you didn't win it. You're investing in
              rounds 3, 4, and 5 where level 3 HAE makes you terrifying.
            </p>
          </KeyConcept>
        </SubSection>

        <SubSection title="Mode 2: The Heat Predator">
          <p>
            With heat active, Lidia transforms. HAE parry shuts down buttons. HAE 2 does chip
            damage and leaves you +6. HAE 1+2 is unblockable. The Hammer Tech flowchart drains
            health even through block. Your priorities flip entirely:
          </p>
          <ol>
            <li><strong>Spend heat aggressively.</strong> Every second of heat is a second of dominance. Don't save it. Enter HAE as often as possible.</li>
            <li><strong>Run the Hammer Tech.</strong> Charge 1+2 → HAE 2 → WR+1 → HAE 2 → Heat Smash → HAE mixup. Even if everything is blocked, the chip damage is significant.</li>
            <li><strong>Exploit their habits.</strong> You spent the patient neutral observing. Now you know: do they jab after stance? HAE parry. Do they duck? HAE 2. Do they hold back? HAE 1+2. Cash in your reads.</li>
            <li><strong>Close the round.</strong> At level 3 with heat, any hit can be round-ending. Don't play safe — play to win the exchange.</li>
          </ol>
        </SubSection>
      </Section>

      <Section title="Range-Based Game Plan">
        <p>
          Lidia's options change dramatically based on range. Knowing what to do at each distance
          prevents you from forcing the wrong tool for the situation.
        </p>

        <DecisionGrid
          title="Range Map"
          description="What to prioritize at each distance"
          rows={[
            { situation: 'Full screen', response: 'Walk forward, sidestep right', reason: 'No approach tools at this range. Close distance patiently.', risk: 'None — rushing in gets you whiff-punished' },
            { situation: 'Range 3 (outside jab range)', response: 'f,f+2, b+3, df+3+4', reason: 'f,f+2 is your bread and butter approach. b+3 keeps them honest. df+3+4 for range.', risk: 'f,f+2 is linear — SSR beats it' },
            { situation: 'Range 2 (jab range)', response: 'df+1, df+2, b+1, d+2', reason: 'Your strongest range. Mix tracking mids with high-crush d+2. b+1 for heat engage.', risk: 'Overusing df+2 gets you sidestepped right' },
            { situation: 'Range 1 (point blank)', response: '1,2 punish, grabs, d+3,1', reason: 'Punish mistakes with 1,2,2 into CAT. Use grabs against passive opponents.', risk: 'Lidia has no i10 combo launcher — others do' },
            { situation: 'Your back to wall', response: 'Sidestep, jab, d+2', reason: 'Get off the wall. Use high-crush d+2 to discourage jab pressure. Sidestep to create angle.', risk: 'Panic launching gets you baited and combo-ed at the wall' },
          ]}
        />
      </Section>

      <Section title="Dealing With Linearity">
        <p>
          Lidia's biggest weakness is that most of her key moves are linear. f,f+2, df+2,
          CAT 1, HRS 2, WLF 3,1 — all can be sidestepped right. Good opponents will exploit
          this. Here's how to handle it.
        </p>

        <SubSection title="Tracking Moves">
          <p>
            These are your anti-sidestep tools. Use them when you notice the opponent stepping:
          </p>
          <ul>
            <li><strong>df+1:</strong> Tracks SSR. Your fastest tracking mid (i13). Use as a check.</li>
            <li><strong>db+3:</strong> Homing low. Catches both directions. On hit, +7 into HRS.</li>
            <li><strong>CAT 1+2:</strong> Tracks both directions from CAT. Your best stance anti-step.</li>
            <li><strong>HRS 1:</strong> Homing high with power crush. The stance anti-step.</li>
            <li><strong>HRS 3:</strong> Homing mid. Safe at -4. Covers d+1 and sidestep.</li>
          </ul>
        </SubSection>

        <SubSection title="The Tracking Rotation">
          <p>
            When an opponent starts sidestepping right, shift your approach:
          </p>
          <ol>
            <li>Replace f,f+2 with df+1 or db+3 as your approach tool</li>
            <li>Use CAT 1+2 instead of CAT 1 from stance</li>
            <li>Default to HRS 1 or HRS 3 instead of HRS 2 from Horse</li>
            <li>After they start respecting your tracking, go back to the linear moves — they hit harder</li>
          </ol>

          <TipBox variant="warning" title="Don't Abandon Your Linear Moves">
            Tracking moves are checks, not replacements. df+1 is safe but low damage. db+3 is
            homing but -11. Your linear moves (f,f+2, df+2, HRS 2) are where the big rewards
            are. Use tracking to stop the stepping, then go back to your core tools.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Hit Confirming">
        <p>
          Hit confirming separates intermediate Lidia players from advanced ones. Several of
          Lidia's strings have extensions that are unsafe on block but guaranteed on hit. Learning
          to confirm these turns risky moves into safe offense.
        </p>

        <SubSection title="Critical Hit Confirms">
          <ul>
            <li><strong>f+1+2,3,1+2 (Political Storm):</strong> The full string is -12 on block. You can stop at f+1+2,3 which is safer. Confirm the first two hits before pressing 1+2. In practice: buffer the 3, then confirm the hit animation before pressing 1+2.</li>
            <li><strong>d+3,1,2:</strong> On hit, d+3,1 jails (second hit can't be ducked). But the 2 extension is duckable on block. Confirm counter-hit before pressing 2 — on CH the full string is guaranteed for a tornado.</li>
            <li><strong>1,2,2:</strong> The third hit puts you in CAT at -16 on block (real frames). Only use this as a punish (where all hits are guaranteed), never raw. If you accidentally throw it in neutral, you're getting launched.</li>
            <li><strong>WLF 3,1:</strong> The second hit is -6 on block (safe) but the string only combos on counter-hit. On normal hit, the second hit can be blocked. Confirm CH before pressing 1 from WLF 3.</li>
          </ul>
        </SubSection>

        <Collapsible title="Stance Transition Confirms">
          <p>
            Several moves transition into stances on hit but not on block. Learning to confirm
            the hit before committing to stance options prevents you from pressing buttons while
            minus:
          </p>
          <ul>
            <li><strong>f,f+2:</strong> +15 on hit (HRS options are frame traps), +5 on block (some HRS options work, many don't). Confirm the hit animation — the opponent staggers differently on hit vs block.</li>
            <li><strong>db+3:</strong> +7 on hit into HRS. On block, -11 and the HRS transition still happens but you're minus. Confirm hit before pressing HRS 2.</li>
            <li><strong>df+2:</strong> +11 on hit into CAT. On block, -8 (real frames). Confirm hit before pressing CAT options.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Round-Closing Strategies">
        <p>
          When the opponent is low on health, your approach should change. You don't need combos —
          you need guaranteed damage. Here's how to close rounds.
        </p>

        <SubSection title="Chip Them Out (Heat Active)">
          <p>
            If you have heat and they're low, HAE 2 chip damage (7-12 depending on level) can
            finish rounds through block. Run the Hammer Tech and let the chip damage accumulate.
            Even a passive opponent who blocks everything will lose health.
          </p>
        </SubSection>

        <SubSection title="Safe Mids for the Kill">
          <p>
            When you need one hit to end the round, use moves that are safe on block:
          </p>
          <ul>
            <li><strong>df+1 (i13, -1 on block):</strong> Fastest safe mid. Low damage but guaranteed to not lose you the round on block.</li>
            <li><strong>b+1 (i15, +2 on block):</strong> Heat engager. Even on block, you're plus.</li>
            <li><strong>WLF 2 (i15, -7 on block):</strong> Wall splats. If they're near the wall, this ends it.</li>
            <li><strong>f,f+2 (i16, +5 on block):</strong> Safe approach. On hit, guaranteed HRS 2 for even more damage.</li>
          </ul>
        </SubSection>

        <SubSection title="When You're Behind">
          <p>
            If you're the one at low health, Lidia has limited panic tools:
          </p>
          <ul>
            <li><strong>Rage Art:</strong> Standard universal option. Use it when you'd normally launch punish.</li>
            <li><strong>HAE 1 (power crush):</strong> In heat, HAE 1 absorbs one hit and launches. Useful as a desperation reversal.</li>
            <li><strong>d+2 (high crush):</strong> If the opponent gets predictable with jabs at round point, d+2 high crushes for a CH into heat. High-risk, high-reward.</li>
          </ul>

          <TipBox variant="warning" title="Don't Panic Launch">
            When you're behind, the temptation is to throw out uf+4 or 3,2 hoping for a miracle
            launch. Resist this. These moves are unsafe on block and whiff. A desperate hopkick
            that gets blocked gives the opponent a free round. Use safe options and wait for a
            real opening.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Matchup Adjustments">
        <p>
          Lidia's gameplan stays mostly the same across matchups, but small adjustments make
          a big difference.
        </p>

        <Collapsible title="Against Aggressive Opponents">
          <ul>
            <li>d+2 becomes your best friend — high crush their jab pressure for CH into heat</li>
            <li>HRS 3 jumps over d+1 attempts</li>
            <li>In heat, HAE parry shuts down anyone who presses after your stance transitions</li>
            <li>Don't enter stances unless you have plus frames — aggressive opponents will mash you out</li>
          </ul>
        </Collapsible>

        <Collapsible title="Against Defensive Opponents">
          <ul>
            <li>Lows become critical: db+3 (homing), d+3,1 (jail), FC.df+3 (knockdown)</li>
            <li>Grabs — Lidia has standard grabs, use them against opponents who just hold back</li>
            <li>In heat, the Hammer Tech chip damage adds up even through block</li>
            <li>HRS 4 (+8 on block into WLF) is your go-to against opponents who never attack in stance</li>
          </ul>
        </Collapsible>

        <Collapsible title="Against Sidesteppers">
          <ul>
            <li>Switch to tracking tools: df+1, db+3, CAT 1+2, HRS 1, HRS 3</li>
            <li>Once they stop stepping, go back to linear moves for bigger rewards</li>
            <li>HAE 1+2 is homing — in heat, this catches stepping opponents with an unblockable</li>
          </ul>
        </Collapsible>

        <Collapsible title="Against Characters with Strong Lows">
          <ul>
            <li>Low parry into f,f,F+2 combo is Lidia's best low parry reward (~60 damage)</li>
            <li>db+3+4 (low parry stance) for hard reads against predictable lows</li>
            <li>After blocking a punishable low, FC.df+2 is a 12-frame heat engager from crouch</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="The Mental Game">
        <p>
          Lidia's design rewards a specific mindset. If you internalize these principles,
          the specific situations from earlier chapters will come naturally.
        </p>

        <SubSection title="Observe First, Act Second">
          <p>
            Every time you enter a stance, you have two jobs: (1) pick the right option if you
            have a read, or (2) hold back and observe if you don't. New Lidia players feel
            obligated to press a button every time they enter CAT or HRS. Veterans know that
            holding back and watching what the opponent does is often more valuable than any
            stance option.
          </p>
        </SubSection>

        <SubSection title="Invest in Stacks">
          <p>
            The game within the game for Lidia is the HAE stack system. Everything you do in
            the first two rounds is an investment in rounds 3-5. Activate heat every round,
            even if it feels like you're not getting much from it. The payoff at level 3 is
            enormous.
          </p>
        </SubSection>

        <SubSection title="Earn Your Plus Frames">
          <p>
            Lidia doesn't get free pressure. She earns it through correct decisions: landing
            db+3 for +7, blocking into +5 from f,f+2, getting HAE 2 blocked for +6. Each plus
            frame situation is a reward for something you did right. Treat them that way — don't
            waste them by pressing random buttons.
          </p>
        </SubSection>

        <KeyConcept title="The Lidia Mindset" icon="~">
          <p>
            Lidia is not a rushdown character, despite what her four stances suggest. She is a
            <strong> patient predator</strong> who uses honest tools in neutral, transitions into
            stances to test the opponent's reactions, builds stacks for late-game dominance, and
            then unleashes devastating heat pressure once she has the reads and the resources.
          </p>
          <p>
            If you're mashing buttons and hoping stance options work, you're playing the character
            wrong. If you're observing, adapting, earning your plus frames, and spending heat
            aggressively — you're playing Lidia the way she's meant to be played.
          </p>
        </KeyConcept>

        <PracticeBox
          title="The Complete Lidia Test"
          setup="Play 10 ranked matches focusing on these principles"
          tasks={[
            { id: 'heat-every-round', text: 'Activate heat in every round — even if it does not lead to a combo', type: 'toggle' },
            { id: 'observe-stance', text: 'In the first round of each match, hold back after every stance transition. Note opponent habits.', type: 'toggle' },
            { id: 'stack-check', text: 'Reach HAE level 3 in at least 3 of the 10 matches', type: 'counter', target: 3 },
            { id: 'trade-attempt', text: 'Land at least one df+2 or db+3 trade in a real match', type: 'toggle' },
            { id: 'close-round', text: 'Close a round with HAE chip damage (not a combo — pure chip)', type: 'toggle' },
            { id: 'hit-confirm', text: 'Successfully hit-confirm d+3,1,2 on counter-hit (confirm before pressing 2)', type: 'toggle' },
          ]}
        />
      </Section>
    </Chapter>
  )
}
