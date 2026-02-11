import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Roda"
      intro="In capoeira, the roda is the circle where everything happens. Players enter, exchange, and the energy builds. That's Eddy Gordo in one image — a character who enters your space, forces an exchange, and gets stronger with every revolution."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Your First Weapons"
    >
      <Section title="The Flywheel">
        <p>
          Most Tekken characters have a gameplan. Eddy has a <strong>cycle</strong>. It works like this:
        </p>
        <ol>
          <li><strong>Approach</strong> — close distance with a move that leaves you plus on block</li>
          <li><strong>Enter stance</strong> — your approach deposits you into Handstand (HSP) or Relax (RLX) with frame advantage</li>
          <li><strong>Force a 50/50</strong> — from stance, threaten a devastating low or a punishing mid</li>
          <li><strong>Build Mandinga</strong> — the low that hits hardest also charges your install meter</li>
          <li><strong>Get deadlier</strong> — Mandinga unlocks new moves from Handstand, making step 3 even scarier</li>
        </ol>
        <p>
          Then the cycle restarts. Each revolution feeds the next. The low that deals damage also builds your
          install. The install makes your stances more threatening. More threatening stances force harder
          decisions. Harder decisions create more openings. That's the flywheel — and once it's spinning,
          it doesn't stop until the round ends.
        </p>

        <KeyConcept title="Why Eddy Feels Different" icon="🌀">
          <p>
            Other stance characters treat their stances as separate toolkits — learn stance A, learn stance B,
            figure out when to use each. Eddy's stances aren't separate. They're two phases of <em>one
            engine</em>. HSP and RLX flow into each other constantly. Moves from standing put you in RLX.
            Moves from RLX transition to HSP. Moves from HSP drop you back to RLX. The character is
            always in motion, always cycling.
          </p>
          <p style={{ marginTop: '12px' }}>
            Your job isn't to memorize two stance move lists. It's to understand <strong>one flowing
            system</strong> and learn where each piece fits in the cycle.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Who Is Eddy For?">
        <p>
          Eddy rewards a specific kind of player. If these resonate, you're in the right place:
        </p>
        <ul>
          <li>
            <strong>You like momentum.</strong> Eddy doesn't play neutral forever. He gets in, starts
            the machine, and rides the wave. If you enjoy characters that build pressure over time rather
            than fishing for single big moments, Eddy is your character.
          </li>
          <li>
            <strong>You enjoy 50/50s.</strong> Eddy's damage comes from forcing binary decisions — block
            low or block mid. If you like making your opponent guess wrong and paying the full price for
            it, you'll love this.
          </li>
          <li>
            <strong>You appreciate creativity.</strong> The stance system gives you enormous freedom. No
            two Eddy players look the same because the transitions allow for personal expression in a
            way most characters don't.
          </li>
          <li>
            <strong>You can handle risk.</strong> Eddy's best lows are punishable. His stances leave him
            airborne and vulnerable to jab floats. The payoffs are huge, but so is the price of being
            predictable. You need to read your opponent, not autopilot.
          </li>
        </ul>
      </Section>

      <Section title="The Honest Truth">
        <KeyConcept title="Where Eddy Dominates" icon="💪">
          <ul>
            <li><strong>Devastating mixups</strong> — RLX 3,3 and RLX 4,3 force a true 50/50 that hits brutally hard on both sides</li>
            <li><strong>Win-win approach tools</strong> — WR 3 is +8 on block into HSP. <code>f,f+3</code> is +6 on hit into RLX. Getting blocked is still your turn.</li>
            <li><strong>Strong punishment from crouch</strong> — <code>ws+1,3</code> launches at i13, punishing lows that most characters can only jab after</li>
            <li><strong>Snowball potential</strong> — Mandinga makes his stances scarier as the round progresses. Eddy in round 1 is not the same as Eddy with two stacks.</li>
            <li><strong>Evasion</strong> — Low stances crush highs naturally. <code>uf+2</code> sidesteps and hits. He's hard to pin down.</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Where Eddy Struggles" icon="⚠️">
          <ul>
            <li><strong>Linear</strong> — His best approach tools (<code>f,f+3</code>, WR 3, HSP 1) can be sidestepped left. Good movement players will frustrate you.</li>
            <li><strong>Airborne vulnerability</strong> — Many strings leave Eddy flipping through the air. A simple jab can float him for a full combo.</li>
            <li><strong>Weak i10 punish</strong> — His standing 1,2 is standard but leads to nothing special. No Acid Rain equivalent here.</li>
            <li><strong>Committal lows</strong> — <code>d+3</code>, <code>f,f+3</code>, <code>db+3</code> are all -14. The hell sweep (RLX 3,3) is -13. Getting blocked hurts.</li>
            <li><strong>No reversals</strong> — No parry, no sabaki, no reversal. When you're on defense, you have generic tools and reads.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Beginner Trap">
          Eddy is famous as a "button masher's character." Pressing 3 and 4 randomly will carry you
          through low ranks. It will also build terrible habits that make you hit a wall hard.
          This guide teaches you to play Eddy <strong>deliberately</strong> — understanding why each move
          exists, when to use it, and what you're risking. Deliberate Eddy is vastly stronger than
          random Eddy, and the gap only widens as your opponents improve.
        </TipBox>
      </Section>

      <Section title="Your First Move: f,f+3">
        <p>
          Before we talk stances or Mandinga or any of that — one move. This is where the flywheel starts.
        </p>

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
            description: 'Eddie\'s signature approach low. Hits from enormous range, high crushes early, and deposits you directly into Relax stance on hit. On counter hit, guarantees a follow-up into heat activation. This single move starts the entire engine.',
            notes: [
              'Transitions to RLX on hit — your 50/50 starts immediately',
              '+6 on hit means your RLX options are enforced',
              'On CH: +15, guarantees RLX 4,3 (heat engager) or crouch throw',
              '-14 on block — punishable but not launch punishable for most characters',
              'High crushes from frame 15 — goes under jabs and standing highs',
            ],
          }}
          showVideo
        />

        <p>
          <strong>On hit:</strong> You're +6 in RLX, directly in front of your opponent. They have
          to guess — are you going for the hell sweep (<code>RLX 3,3</code>) or the mid heat engager
          (<code>RLX 4,3</code>)? Both options deal massive damage.
        </p>

        <p>
          <strong>On counter hit:</strong> +15. <code>RLX 4,3</code> is guaranteed — a 50-damage heat
          engager that puts you directly into heat mode. If you're already in heat, that same confirm
          leads to a full combo for 80+ damage. From a single low poke.
        </p>

        <p>
          <strong>On block:</strong> -14 in full crouch. You'll eat a punish — but from full crouch,
          most characters get a while standing 4 for around 15 damage. That's the price. The reward is
          everything above.
        </p>

        <KeyConcept title="The Win-Win Pattern" icon="🔑">
          <p>
            <code>f,f+3</code> introduces the most important concept in Eddy's game:
            your <strong>approach tools are win-win</strong>. On hit, you get stance with plus frames.
            On block, some of your approach tools are <em>still</em> plus. The opponent doesn't escape
            the cycle by blocking — they just delay it.
          </p>
          <p style={{ marginTop: '12px' }}>
            Not every move is like this. <code>f,f+3</code> is punishable on block. But WR 3 (+8 on
            block into HSP), HSP 1 (+6 on block into RLX), and FC <code>df+3</code> (+6 on block
            into RLX) all share this trait. You'll learn them all. For now, just understand the
            principle: Eddy's entries are designed so that blocking doesn't save the opponent — it
            just changes which side of the mixup comes next.
          </p>
        </KeyConcept>
      </Section>

      <Section title="First Contact">
        <p>
          Open Practice Mode. Set the dummy to stand guard. We're going to do exactly one thing:
          get in with <code>f,f+3</code> and feel what happens next.
        </p>

        <PracticeBox
          title="The First Revolution"
          setup="Practice Mode. Eddy vs any opponent. Set dummy to Stand Guard. Start at round-start distance."
          tasks={[
            { id: 'eddy-ff3-raw', text: 'Dash into f,f+3 ten times', detail: 'Tap f,f then press 3. Feel the range — this move reaches from surprisingly far. Don\'t worry about what comes after yet.', type: 'counter', target: 10 },
            { id: 'eddy-ff3-rlx', text: 'After f,f+3 hits, notice you\'re in RLX', detail: 'You\'ll be sitting low to the ground. This is Relax stance. Just observe it for now — don\'t press anything.', type: 'counter', target: 5 },
            { id: 'eddy-ff3-33', text: 'After f,f+3 hits, press 3,3 from RLX', detail: 'This is the hell sweep. Watch Eddy trip the opponent. This is the low side of your 50/50. You\'re +6 so it connects clean.', type: 'counter', target: 5 },
            { id: 'eddy-ff3-43', text: 'After f,f+3 hits, press 4,3 from RLX', detail: 'This is the mid heat engager. The other side of the guess. Notice the orange glow — this activates heat if it connects.', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="What You Just Felt">
          That sequence — approach, enter stance, force a guess — is Eddy's entire game compressed
          into three seconds. Every chapter in this guide expands on it. More ways to approach. More
          options from stance. More reasons the opponent has to guess. But the skeleton is always the
          same: get in, get plus, force the 50/50.
        </TipBox>
      </Section>

      <Section title="What's Next">
        <p>
          <code>f,f+3</code> starts the engine, but it's a low — -14 on block, linear, and people will
          start looking for it. Before we go deeper into stances, you need tools that work <em>outside</em>{' '}
          of them. Pokes, keepout moves, things that control space and set up your entries. A
          character built entirely on stance 50/50s with no neutral game is a character who gets stepped
          and launched.
        </p>

        <KeyConcept title="The Engine Has Two Parts" icon="🌀">
          <p>
            Eddy's game has a <strong>neutral half</strong> and a <strong>stance half</strong>. The
            neutral half controls space, builds small advantages, and creates the openings for stance
            entry. The stance half converts those openings into damage and Mandinga stacks. You need both.
          </p>
          <p style={{ marginTop: '12px' }}>
            Next chapter: the neutral tools that keep you alive between flywheels.
          </p>
        </KeyConcept>
      </Section>
    </Chapter>
  )
}
