import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  GameChallenge,
  SkillCheck,
  CompletionBadge,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter17Integration({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={17}
      title="Integration Challenges"
      intro="This is where it all comes together. These challenges simulate real match situations that require you to combine everything: execution, pressure, reading, and adaptation. Complete these and you'll be playing Jin, not just knowing Jin."
      onPrevious={() => goToChapter(16)}
      onNext={() => goToChapter(18)}
      nextLabel="Offensive Flowcharts"
    >
      <Section title="The Integration Test">
        <p>
          Until now, you've practiced skills in isolation. Frame traps. ZEN transitions. 
          Reading opponents. Real matches require all of these simultaneously.
        </p>

        <KeyConcept title="What Integration Means" icon="🔗">
          <p>
            A real Jin round looks something like this:
          </p>
          <ol style={{ marginTop: '12px' }}>
            <li>Round starts — you probe with df+1 (Cold)</li>
            <li>They mash after df+1 — you note the pattern</li>
            <li>You land db+4 — frame trap with f+4 (Hot)</li>
            <li>They die, you carry to wall</li>
            <li>Wall pressure with ZEN transitions</li>
            <li>They freeze — you throw or low (reading)</li>
            <li>They adapt and start ducking — you launch with mid</li>
            <li>Round over</li>
          </ol>
          <p style={{ marginTop: '12px' }}>
            This wasn't random. It was: <strong>Cold → Pattern → Hot → Pressure → Read → Adapt</strong>
          </p>
        </KeyConcept>

        <p>
          The following challenges force you to execute this loop against simulated opponents. 
          They're hard. You'll fail some. That's the point.
        </p>
      </Section>

      <Section title="Challenge 1: The Full Round">
        <GameChallenge
          title="One Round, Every Tool"
          scenario="Play one complete round using the full Hot/Cold framework. Start cold, find a pattern, go hot, carry to wall, maintain pressure."
          setup={{
            opponent: "Any character",
            cpuBehavior: "Normal or Hard",
            recordings: [
              "Optional: Record various wake-up options for oki practice"
            ],
            otherSettings: [
              "No specific settings — this is as close to real as it gets"
            ]
          }}
          goal="Win a round while consciously using the Hot/Cold framework"
          successCriteria="Win without autopiloting. Every action should be a conscious choice."
          levels={[
            {
              name: "Level 1: The Probe",
              description: "Start the round COLD. Use df+1, d+4, or backdash. Note what they do.",
              goal: "Gather at least one piece of data before committing to pressure.",
              successCriteria: "You can describe what they do after your first 2-3 moves."
            },
            {
              name: "Level 2: The Read",
              description: "Based on their response, pick your approach. Masher → frame trap. Turtle → mixup.",
              goal: "Make a conscious decision to go HOT based on data.",
              successCriteria: "You land a frame trap OR open up a turtle with low/throw."
            },
            {
              name: "Level 3: The Wall",
              description: "After landing a launcher, carry to wall. Execute wall pressure.",
              goal: "Reach the wall and execute at least one ZEN mixup sequence.",
              successCriteria: "You maintain wall pressure for 5+ seconds or kill them."
            },
            {
              name: "Level 4: The Adaptation",
              description: "If they're still alive, check: are they adapting? Adjust accordingly.",
              goal: "Recognize if they've changed their behavior and respond appropriately.",
              successCriteria: "You either kill them with continued pressure OR successfully adapt to their adaptation."
            }
          ]}
          hints={[
            "Verbally narrate what you're doing. 'Cold... probe... they mashed... go hot...'",
            "If you catch yourself autopiloting, reset and try again.",
            "It's okay if the round is slower at first. Speed comes with practice."
          ]}
          whyThisWorks="You're building the mental habit of running the game loop. Once it's automatic, you'll do it without thinking."
        />
      </Section>

      <Section title="Challenge 2: The Comeback">
        <GameChallenge
          title="Down but Not Out"
          scenario="You're at 30% health. They're at 70%. No Heat. No Rage yet. You need to win this round."
          setup={{
            cpuBehavior: "Hard or Ultra Hard",
            otherSettings: [
              "Set your health to 30%",
              "Set CPU health to 70%",
              "Heat: OFF for both"
            ]
          }}
          goal="Win the round from a significant life deficit"
          successCriteria="Come back and win without getting hit more than once"
          levels={[
            {
              name: "Level 1: Survive",
              description: "Don't get hit. Use movement, blocks, and parry to avoid damage.",
              goal: "Go 10 seconds without taking damage.",
              successCriteria: "You've successfully defended for 10 seconds."
            },
            {
              name: "Level 2: Punish",
              description: "Wait for them to make a mistake. Punish it with your best option.",
              goal: "Land a launch punish or whiff punish.",
              successCriteria: "You've launched them and executed a full combo."
            },
            {
              name: "Level 3: Control",
              description: "After your combo, maintain pressure. Don't let them reset to neutral.",
              goal: "Keep pressure until you've evened the life lead or won.",
              successCriteria: "You've either tied the health or killed them."
            }
          ]}
          hints={[
            "When behind, COLD is often better. Don't take unnecessary risks.",
            "One launch + wall carry can flip a round. Be patient for the opportunity.",
            "Their life lead makes them confident. Use that against them.",
            "Parry can turn their pressure into your damage."
          ]}
          whyThisWorks="Real matches have comebacks. Learning to play from behind without panicking is essential."
        />
      </Section>

      <Section title="Challenge 3: The Download">
        <GameChallenge
          title="First-to-5 Download"
          scenario="Play a full FT5 set against the CPU. Your goal isn't just to win — it's to download their patterns and adapt faster each game."
          setup={{
            cpuBehavior: "Ultra Hard (so they have actual patterns)",
            otherSettings: [
              "FT5 format",
              "Note patterns after each game"
            ]
          }}
          goal="Win the set while consciously tracking and exploiting patterns"
          successCriteria="By game 5, you should be winning faster than game 1 because you've downloaded them"
          levels={[
            {
              name: "Game 1: Scout",
              description: "Mostly COLD. Your goal is to identify their patterns, not to win.",
              goal: "Note at least 3 things they do repeatedly.",
              successCriteria: "You can list their: 1) Round start habit, 2) Response to your pressure, 3) Wake-up tendency"
            },
            {
              name: "Game 2: Test",
              description: "Test your reads from Game 1. Did they do those things again?",
              goal: "Verify or invalidate your patterns.",
              successCriteria: "You've confirmed at least one pattern you can exploit."
            },
            {
              name: "Game 3: Exploit",
              description: "Go HOT. Target the patterns you've confirmed.",
              goal: "Win convincingly using your reads.",
              successCriteria: "You win at least 2 rounds with frame traps or punishes based on reads."
            },
            {
              name: "Games 4-5: Dominate",
              description: "Close out the set. Adjust if they've adapted.",
              goal: "Win the set.",
              successCriteria: "You win 5 games total."
            }
          ]}
          hints={[
            "CPU has patterns too. Ultra Hard CPU will do specific things consistently.",
            "Write down what you notice between games. Physical notes help.",
            "If you lose Game 1, that's fine. The download is the goal."
          ]}
          whyThisWorks="Tournament sets are about adaptation. Whoever downloads faster wins. Practice the download process."
        />
      </Section>

      <Section title="Challenge 4: The Specialist">
        <GameChallenge
          title="Wall Specialist"
          scenario="Every round, your ONLY goal is to carry to the wall and execute wall pressure. Nothing else matters."
          setup={{
            cpuBehavior: "Normal",
            position: "Open (far from walls)"
          }}
          goal="Win 10 rounds where every kill happens at or near the wall"
          successCriteria="10 round wins where the opponent dies within 1-2 moves of wall contact"
          hints={[
            "Pick combos specifically for wall carry",
            "Work on recognition: 'I'm close enough to carry'",
            "Practice wall pressure flowcharts from earlier chapters",
            "ZEN at the wall is your strongest position"
          ]}
          whyThisWorks="Jin's wall game is elite. Forcing yourself to always use it builds the habit of working towards the wall."
        />

        <GameChallenge
          title="Neutral Specialist"
          scenario="Win rounds WITHOUT carrying to wall. Open stage wins only."
          setup={{
            cpuBehavior: "Hard",
            position: "Infinite stage (if available) or center stage"
          }}
          goal="Win 5 rounds in open space through neutral game"
          successCriteria="Win without relying on wall carry or wall pressure"
          hints={[
            "This is harder for Jin. Wall is his strength.",
            "Focus on: pokes, whiff punishment, frame traps",
            "Electric whiff punish is your friend here",
            "Oki becomes more important when there's no wall"
          ]}
          whyThisWorks="You can't always get wall. Learning to win in open space makes you well-rounded."
        />
      </Section>

      <Section title="Challenge 5: The Real Test">
        <GameChallenge
          title="Online Ranked Application"
          scenario="Take everything you've learned into online ranked. Play 10 matches with intention."
          setup={{
            cpuBehavior: "N/A - Real opponents",
            otherSettings: [
              "Ranked mode",
              "10 match session",
              "No rage quitting allowed"
            ]
          }}
          goal="Apply the Hot/Cold framework against real human opponents"
          successCriteria="Win at least 5/10 while consciously using everything you've learned"
          levels={[
            {
              name: "Matches 1-3: Warm-up",
              description: "Focus on staying present. No autopilot.",
              goal: "Make conscious decisions every round.",
              successCriteria: "You can describe why you did what you did after each round."
            },
            {
              name: "Matches 4-7: Application",
              description: "Full framework: Cold → Pattern → Hot → Adapt",
              goal: "Execute the loop against real opponents.",
              successCriteria: "You've successfully read and exploited at least one pattern per match."
            },
            {
              name: "Matches 8-10: Refinement",
              description: "Focus on what's working and what isn't.",
              goal: "Identify your weak points for future practice.",
              successCriteria: "You can list 2-3 specific things to lab after the session."
            }
          ]}
          hints={[
            "Humans are less predictable than CPU. Expect adaptation.",
            "If you lose a match, ask: 'What did I not know how to answer?'",
            "Wins mean less than understanding why you won.",
            "Losses mean less than understanding why you lost."
          ]}
          whyThisWorks="All the practice in the world means nothing until you apply it against real opponents. This is the test."
        />
      </Section>

      <Section title="Skill Check">
        <p>
          Before you consider yourself a complete Jin player, verify you can do all of 
          these consistently:
        </p>

        <SkillCheck
          title="Jin Mastery Checklist"
          subtitle="Check off each skill you can confidently perform"
          skills={[
            { id: "execution_frametraps", skill: "Execute db+4 → f+4 frame trap without thinking" },
            { id: "execution_zen", skill: "Transition to ZEN from 3+ different moves naturally" },
            { id: "execution_tracking", skill: "Catch sidesteps with b,f+2 series or magic 4" },
            { id: "execution_wallpressure", skill: "Maintain wall pressure for 15+ seconds" },
            { id: "execution_combos", skill: "Execute BnB combos from every starter" },
            { id: "reading_plusframes", skill: "Recognize what opponents do after your plus frames" },
            { id: "reading_patterns", skill: "Identify patterns within 2-3 instances" },
            { id: "reading_adaptation", skill: "Recognize when opponents adapt and adjust" },
            { id: "gameplan_hotcold", skill: "Consciously switch between Hot and Cold playstyles" },
            { id: "gameplan_wallwork", skill: "Work towards wall in every match" },
            { id: "gameplan_comeback", skill: "Come back from health deficit without panicking" },
            { id: "mental_present", skill: "Stay present without autopiloting" }
          ]}
          requiredToPass={10}
        />
      </Section>

      <Section title="The Journey Continues">
        <CompletionBadge
          title="Advanced Jin Complete"
          message="You've finished the advanced training."
          description="You now have the tools, the drills, and the framework. What happens next is up to you."
        />

        <KeyConcept title="What Now?" icon="🚀">
          <ul>
            <li><strong>Ranked grind</strong> — Apply everything in real matches</li>
            <li><strong>Match analysis</strong> — Record and review your games</li>
            <li><strong>Matchup study</strong> — Learn specific character counters</li>
            <li><strong>Execution refinement</strong> — Perfect your electrics, parry timing</li>
            <li><strong>Mental game</strong> — Work on tilt control, focus, adaptation speed</li>
          </ul>
        </KeyConcept>

        <Collapsible title="Further Resources" icon="📚" defaultOpen>
          <ul style={{ marginTop: '12px' }}>
            <li><strong>Frame data</strong> — TekkenDocs Jin page for specific matchup information</li>
            <li><strong>Match VODs</strong> — Watch tournament Jin players, note their patterns</li>
            <li><strong>Community</strong> — Jin Discord for matchup discussion and tech</li>
            <li><strong>This guide</strong> — Come back to drills when something feels weak</li>
          </ul>
        </Collapsible>

        <TipBox variant="tip" title="The Real Secret">
          There is no secret tech that makes you good at Jin. There's no combo or setup that 
          auto-wins. The players who reach the highest ranks are the ones who:
          <ol>
            <li>Put in the practice hours</li>
            <li>Stay mentally present</li>
            <li>Learn from every loss</li>
            <li>Keep adapting</li>
          </ol>
          You have everything you need. Now go earn it.
        </TipBox>

        <p style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600, textAlign: 'center' }}>
          The lightning is yours now. Make it count. ⚡
        </p>
      </Section>
    </Chapter>
  )
}
