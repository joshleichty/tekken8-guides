import { Chapter, Section } from '../../../components/guide'
import {
  KeyConcept,
  TipBox,
  CoachCallout,
  DecisionGrid,
  Flowchart,
  PracticeBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter15({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={15}
      title="The Pressure Manual"
      intro="This chapter turns the coaching session into a system. It starts with the way you are supposed to stand and gather information, then gives you the exact learning order the coach described: memorize the infinites, attach frame traps to them, then prepare counterplay for the escapes your opponent will use. Every major loop gets its own practical answer map."
      hasPrevious
      onPrevious={() => goToChapter(14)}
      hasNext={false}
    >
      <Section title="What The Session Is Really Teaching">
        <p>
          Hwoarang is not random pressure. He is a layered pressure character. You do not win by
          pressing forever. You win by entering pressure, seeing how the opponent tries to escape,
          and choosing the option that beats that escape.
        </p>

        <CoachCallout
          quote="Separate the character into one or two interactions at a time. Know what you usually do after this. Know what you usually do after that. Then it looks fluid because you already solved the next decision before the round even started."
        />

        <KeyConcept title="The Three Big Jobs" icon="🧠">
          <ul>
            <li>
              <strong>Gather information first.</strong> Early in the round, stand at a useful
              distance and see whether they approach, mash, duck, sidestep, or freeze.
            </li>
            <li>
              <strong>Run a base layer.</strong> Once you start offense, you should already know
              your default continuation instead of inventing everything live.
            </li>
            <li>
              <strong>Cover the most likely escape.</strong> If they like stepping, cover step. If
              they like ducking, cover duck. If they like mashing, frame trap them.
            </li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Before Offense: Spacing And Information">
        <p>
          The session starts with backing up for a reason. The coach was not stalling. He was
          forcing the opponent to reveal how they wanted to enter the round.
        </p>

        <KeyConcept title="Your Early Round Checklist" icon="🎯">
          <ul>
            <li>
              <strong>Stand where both players have to make a choice.</strong> If they come to you,
              you can interrupt, whiff punish, or keep out. If they do not come to you, you now get
              to choose how you enter.
            </li>
            <li>
              <strong>Test for sidestep early.</strong> The session repeatedly uses pokes and
              checks to see whether the opponent wants to move sideways.
            </li>
            <li>
              <strong>Do not go all in immediately.</strong> Poke first, watch the reaction, then
              commit once you know what habit you are attacking.
            </li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="What The Backdash Was Doing">
          Backing up was not retreat for the sake of retreat. It was a question: will you run in and
          press, will you wait, or will you try to take space carefully? Once that answer appeared,
          the rest of the round became easier to script.
        </TipBox>
      </Section>

      <Section title="The Coach's Learning Order">
        <p>
          The final claim of the session is the clearest learning order in the whole guide. This is
          the order you should actually train in.
        </p>

        <Flowchart
          title="Train Hwoarang In This Order"
          nodes={[
            { type: 'start', label: 'Step 1: Memorize the infinites' },
            { type: 'decision', label: 'What comes after the loops feel automatic?', branches: [
              { label: 'Step 2', action: 'Attach a frame trap or plus frame continuation to each loop ending' },
              { label: 'Step 3', action: 'Prepare counterplay for duck, sidestep, power crush, and block' },
            ]},
            { type: 'end', label: 'Default loop first -> frame trap layer second -> anti-escape layer third' },
          ]}
        />

        <CoachCallout
          quote="First memorize all the infinites. Then figure out how to frame trap the next infinite into them. Then figure out how to stop them from escaping those frame traps."
        />

        <KeyConcept title="What This Means In Practice" icon="🔧">
          <ul>
            <li>
              <strong>Do not start with every option.</strong> Start with your repeatable route.
            </li>
            <li>
              <strong>Do not add the mixup before the route is stable.</strong> First know where
              the loop goes.
            </li>
            <li>
              <strong>Do not think sidestep, duck, mash, armor all at once.</strong> Add one
              defensive answer at a time.
            </li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Four Transitions That Matter">
        <p>
          If you know these transitions, you can follow almost every pressure sequence the coach was
          describing.
        </p>

        <KeyConcept title="Memorize These First" icon="🔑">
          <ul>
            <li>
              <strong>d+3,4 -&gt; RFS</strong>
            </li>
            <li>
              <strong>RFS 2 -&gt; RFF</strong>
            </li>
            <li>
              <strong>RFF f+3 -&gt; LFS</strong>
            </li>
            <li>
              <strong>LFS d+3,4 -&gt; RFS</strong>
            </li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Why The Coach Looked So Fluid">
          He was not choosing from the whole character every second. He already knew where each of
          these transitions usually led next, so the offense looked continuous.
        </TipBox>
      </Section>

      <Section title="Infinite 1: The Core Low Loop">
        <p>
          This is the first infinite and still the most important one.
        </p>

        <KeyConcept title="Route" icon="🔄">
          <p>
            <strong>d+3,4 -&gt; RFS 2 -&gt; d+3,4 -&gt; RFS 2</strong>
          </p>
          <p>
            This is your base loop. It teaches the character because it repeatedly sends you from
            RFS to RFF and back to RFS.
          </p>
        </KeyConcept>

        <DecisionGrid
          title="How To Finish Infinite 1"
          description="Start with the loop itself, then attach the next layer."
          rows={[
            {
              situation: 'You want the default continuation',
              response: 'RFS 2 -> d+3,4 again',
              reason: 'This keeps the route simple and repeatable.',
              risk: 'If they learn the high timing, they will start ducking.',
            },
            {
              situation: 'They mash after RFS entry',
              response: 'RFS f+4',
              reason: 'This is your frame trap check and the move that forces respect.',
              risk: 'If they stop mashing and start ducking, you need the anti-duck branch.',
            },
            {
              situation: 'They duck the high',
              response: 'RFS df+4 or RFS 4,3',
              reason: 'These are your immediate anti-duck answers from the same pressure point.',
              risk: 'Slower options can lose if they are still pressing.',
            },
            {
              situation: 'They just block',
              response: 'RFS d+4,3',
              reason: 'The low exists to punish passive defense and make your mids scary.',
              risk: 'If they are reading low, this becomes the thing they are waiting on.',
            },
            {
              situation: 'They sidestep the route',
              response: 'Leave the loop and use tracking support like df+4 or RFF df+3',
              reason: 'The loop itself is not your anti-step solution.',
              risk: 'If you insist on repeating it, you get stepped cleanly.',
            },
          ]}
        />
      </Section>

      <Section title="Infinite 2: The Full Stance Cycle">
        <p>
          This is the route the coach was describing when he said it looks like one long sequence,
          but it is really just several pre-solved interactions chained together.
        </p>

        <KeyConcept title="Route" icon="🧩">
          <p>
            <strong>d+3,4 -&gt; RFS 2 -&gt; RFF f+3 -&gt; LFS f+3 -&gt; LFS d+3,4</strong>
          </p>
          <p>
            This is the loop that teaches all four pressure stances working together.
          </p>
        </KeyConcept>

        <DecisionGrid
          title="How To Finish Infinite 2"
          description="This is the coach's layering system in its most complete form."
          rows={[
            {
              situation: 'You want the standard route',
              response: 'RFS 2 -> RFF f+3 -> LFS f+3 -> LFS d+3,4',
              reason: 'This gives you the full stance cycle and a repeatable script.',
              risk: 'Both the original d+3,4 route and the RFF f+3 connector can be challenged by good defensive reads.',
            },
            {
              situation: 'They respect the route and stop pressing',
              response: 'Keep the route or cash out with lows from LFS/RFS',
              reason: 'The whole route becomes stronger once they stop swinging.',
              risk: 'If you get greedy without checking for duck or step, you can still be blown up.',
            },
            {
              situation: 'They duck the high connector',
              response: 'Use RFF b+2 instead of always forcing RFF f+3',
              reason: 'The connector must become less predictable once they are waiting for the high.',
              risk: 'You lose some explosiveness, but you keep control.',
            },
            {
              situation: 'They sidestep after the bridge points',
              response: 'Use tracking support before re-entering the route',
              reason: 'This route is strongest once you have convinced them to hold still.',
              risk: 'If you skip the anti-step layer, the full cycle becomes fake.',
            },
            {
              situation: 'They panic with armor or rage',
              response: 'Stop at the bridge, block, and punish',
              reason: 'This is exactly why the coach said not to press forever.',
              risk: 'Full commitment loses if you ignore the stop sign.',
            },
          ]}
        />
      </Section>

      <Section title="Infinite 3: The Safe Mid Route">
        <p>
          This is the branch you need once the opponent starts respecting the low route enough to
          duck or low-check it.
        </p>

        <KeyConcept title="Route" icon="🛡️">
          <p>
            <strong>d+3,4 -&gt; RFS 4,3 -&gt; LFS</strong>
          </p>
          <p>
            This route trades some greed for stability. It is the clean answer when they are too
            ready for the obvious high timing.
          </p>
        </KeyConcept>

        <DecisionGrid
          title="How To Finish Infinite 3"
          description="This is the route you use once the basic loop is being challenged correctly."
          rows={[
            {
              situation: 'They duck after your RFS entry',
              response: 'RFS 4,3',
              reason: 'This is the safe mid route into LFS.',
              risk: 'You still need a plan once you reach LFS.',
            },
            {
              situation: 'They mash low checks',
              response: 'RFS 4,3 or RFS 3~4',
              reason: 'This route is much better than greedier options against low-check habits.',
              risk: 'Do not confuse anti-low-check with anti-step. They are separate problems.',
            },
            {
              situation: 'You reach LFS and they freeze',
              response: 'LFS f+3',
              reason: 'The route naturally turns into a strong all-mid continuation.',
              risk: 'If they start stepping or armoring later, you still need to adjust.',
            },
            {
              situation: 'You want to restart the character',
              response: 'LFS d+3,4 back to RFS',
              reason: 'This re-enters your main pressure state.',
              risk: 'The restart can still be ducked if you become predictable again.',
            },
          ]}
        />
      </Section>

      <Section title="Infinite 4: The RFF Hold-Pressure Route">
        <p>
          This is the answer to the exact problem raised in the session: "I feel like I only have
          the low to start my pressure." You need a non-greedy RFF route too.
        </p>

        <KeyConcept title="Route" icon="🦶">
          <p>
            <strong>f+2 -&gt; RFF</strong>, then usually <strong>RFF b+2</strong>, <strong>RFF f+3</strong>,
            or <strong>d+3,4</strong>
          </p>
          <p>
            The point of this route is that you do not have to force the same low-first entry every
            time. Sometimes your better pressure starter is the mid that gets you into Right Foot
            Forward cleanly.
          </p>
        </KeyConcept>

        <DecisionGrid
          title="How To Finish Infinite 4"
          description="This route is about holding pressure from RFF instead of immediately gambling."
          rows={[
            {
              situation: 'They keep standing and respecting',
              response: 'RFF f+3',
              reason: 'This is your big connector into LFS pressure.',
              risk: 'It is still a high, so the more obvious it becomes, the more dangerous it gets.',
            },
            {
              situation: 'They start ducking the connector',
              response: 'RFF b+2',
              reason: 'This is the safer mid hold-pressure option from RFF.',
              risk: 'You gain control, but less immediate explosive reward.',
            },
            {
              situation: 'They hold still and let you reset',
              response: 'd+3,4 from RFF',
              reason: 'You can go back into the main low loop from here.',
              risk: 'This reintroduces the duckable high timing, so do not become automatic.',
            },
            {
              situation: 'They sidestep from RFF',
              response: 'RFF df+3',
              reason: 'This is your anti-step support from the bridge stance.',
              risk: 'If you refuse to use it, you let them bypass the whole structure.',
            },
          ]}
        />
      </Section>

      <Section title="Infinite 5: The LFS Reset Route">
        <p>
          This is the "small Tekken" route from the session. Not every continuation needs to cash
          out immediately. Sometimes you use a plus-frame reset to keep the next decision simple.
        </p>

        <KeyConcept title="Route" icon="♻️">
          <p>
            <strong>LFS 1 -&gt; next decision</strong>
          </p>
          <p>
            The coach described this exact idea in several ways: use a smaller plus frame, see how
            they react, and only then choose whether to restart the loop, frame trap, or switch to a
            different branch.
          </p>
        </KeyConcept>

        <DecisionGrid
          title="How To Finish Infinite 5"
          description="This is the route for stabilizing pressure instead of overcommitting."
          rows={[
            {
              situation: 'You want to keep pressure simple',
              response: 'LFS 1, then watch',
              reason: 'This is a plus-frame reset that lets you re-check the opponent.',
              risk: 'If you treat it like a magic answer instead of a reset point, you lose the point of using it.',
            },
            {
              situation: 'They freeze after the reset',
              response: 'LFS f+3 or LFS d+3,4',
              reason: 'Now you choose whether to stay mid-heavy or restart the main engine.',
              risk: 'Both choices still need to respect the opponent habits.',
            },
            {
              situation: 'They want to sidestep after the small reset',
              response: 'Slow down and cover step instead of blindly extending',
              reason: 'The whole point of the reset was to learn what they want to do next.',
              risk: 'If you ignore what you learned, the reset did nothing for you.',
            },
          ]}
        />
      </Section>

      <Section title="Micro-Rules From The Session">
        <DecisionGrid
          title="Small Rules That Matter A Lot"
          description="These are the little corrections from the session that make the whole system work better."
          rows={[
            {
              situation: 'You are around -1 to +1',
              response: 'Sidestep as a default',
              reason: 'This was stated directly in the session. Small frame situations are where movement becomes your default answer.',
              risk: 'Stepping without thinking about wall position or tracking still gets clipped.',
            },
            {
              situation: 'You are under pressure at the wall',
              response: 'Block first. Look for duck, sidestep, punish, or power crush. Do not panic backdash.',
              reason: 'The coach explicitly called out backdash as one of the worst choices there because you cannot block during it.',
              risk: 'Backing yourself into the wall again throws away the escape.',
            },
            {
              situation: 'You are plus and the opponent has time to think',
              response: 'Cover the most likely mistake, not every possible mistake',
              reason: 'The session says this directly: you give them room to make a mistake, then cover the mistake they are most likely to choose.',
              risk: 'If you try to beat everything at once, your options become too loose.',
            },
            {
              situation: 'You need to re-establish plus frames after knockdown or reset',
              response: 'Use your approach tools and plus-frame starters deliberately',
              reason: 'The session repeatedly uses plus-frame re-entry as the way to begin the next layer of offense.',
              risk: 'Re-entering without checking their current habit just walks into their answer.',
            },
            {
              situation: 'You want to overload them with pressure',
              response: 'Chain pre-memorized one- and two-step interactions',
              reason: 'This is how strong Hwoarang offense feels overwhelming without actually being random.',
              risk: 'If you never revisit the base layers, the offense falls apart under adaptation.',
            },
          ]}
        />
      </Section>

      <Section title="Your Best Entry Points">
        <p>
          If one entry is downloaded, do not abandon offense. Change the door you use to get in.
        </p>

        <DecisionGrid
          title="How To Start Pressure Cleanly"
          description="These are the entry points most directly supported by the session and the guide."
          rows={[
            {
              situation: 'You want the classic entry',
              response: 'd+3,4',
              reason: 'This is still the main route into RFS pressure.',
              risk: 'The second hit is a high. If they are waiting for it, they duck and launch.',
            },
            {
              situation: 'They are ready for the classic entry',
              response: 'f+2 -> RFF',
              reason: 'This is the mid entry the session specifically points to as underused.',
              risk: 'You still need to choose the correct RFF continuation.',
            },
            {
              situation: 'You want a lower-risk low entry',
              response: 'db+4~F',
              reason: 'This lets you test for step and enter RFS on a different rhythm.',
              risk: 'If you overuse it, they will punish it on block or step the follow-up plan.',
            },
            {
              situation: 'You earned your turn from defense',
              response: '1,2,4 or ws+1,4',
              reason: 'Punishment entries are the cleanest way to begin offense because the risk is already gone.',
              risk: 'Only works if your punishment is correct and immediate.',
            },
            {
              situation: 'You want the deceptive cancel entry from the session',
              response: '4,3 cancel into LFS when appropriate',
              reason: 'The session explains that this works because the opponent expects the string ending, not an immediate stance mixup.',
              risk: 'If they are ready for the cancel or can launch the gap, you cannot treat it as fake-safe.',
            },
          ]}
        />
      </Section>

      <Section title="Stop Signs">
        <p>
          Hwoarang usually loses when the player keeps running the same solved route after the answer
          is already visible.
        </p>

        <KeyConcept title="When Your Pressure Is Over" icon="🛑">
          <ul>
            <li>
              <strong>They ducked the same high twice:</strong> stop giving them the same timing.
            </li>
            <li>
              <strong>They sidestepped the same route twice:</strong> your next job is anti-step, not looping.
            </li>
            <li>
              <strong>They power crushed through your stance pressure:</strong> the next entry should be a bait.
            </li>
            <li>
              <strong>They have rage:</strong> your stance offense now has a giant warning label on it.
            </li>
            <li>
              <strong>You are trapped at the wall:</strong> solve defense first. Pressure can wait.
            </li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Two-Loop Rule">
          Run the route once or twice, then ask what they are trying to do. If the answer is still
          "nothing useful," continue. If the answer is obvious, your next decision should attack the
          answer, not repeat the script.
        </TipBox>
      </Section>

      <Section title="How To Practice This">
        <PracticeBox
          title="Coach System Drill"
          setup="Practice Mode first, then real matches. Train in the same order the session teaches."
          tasks={[
            {
              id: 'infinite-core',
              text: 'Run Infinite 1 cleanly until the route feels automatic',
              type: 'counter',
              target: 10,
            },
            {
              id: 'infinite-full-cycle',
              text: 'Run Infinite 2 cleanly through all four stances',
              type: 'counter',
              target: 10,
            },
            {
              id: 'frame-trap-layer',
              text: 'After each RFS entry, practice RFS f+4 as the anti-mash frame trap',
              type: 'counter',
              target: 10,
            },
            {
              id: 'anti-duck-layer',
              text: 'After each RFS entry, practice RFS df+4 and RFS 4,3 as anti-duck answers',
              type: 'counter',
              target: 10,
            },
            {
              id: 'anti-step-layer',
              text: 'From LFF and RFF, practice df+4 and RFF df+3 as anti-step support',
              type: 'counter',
              target: 10,
            },
            {
              id: 'entry-switch',
              text: 'Alternate your entries between d+3,4, f+2 -> RFF, db+4~F, and a punish entry',
              type: 'counter',
              target: 10,
            },
          ]}
        />

        <CoachCallout
          quote="Do not practice the whole character at once. Practice the infinites first. Then the frame traps that hold them together. Then the counterplay for duck, sidestep, armor, and block. That is the system."
        />
      </Section>
    </Chapter>
  )
}
