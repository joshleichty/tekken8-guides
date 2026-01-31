import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  ConstraintPlay,
  MatchScenario,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter14HotCold({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={14}
      title="The Hot & Cold Mindset"
      intro="You know Jin's moves. Now learn how to think like a Jin player. This chapter introduces the mental framework that separates good Jin players from great ones — and gives you drills to internalize it."
      onPrevious={() => goToChapter(13)}
      onNext={() => goToChapter(15)}
      nextLabel="Drilling Jin's Pressure"
    >
      <Section title="Two Jins, One Character">
        <p>
          Watch high-level Jin players and you'll notice something: they seem to switch 
          personalities mid-match. Sometimes they're patient, defensive, barely throwing attacks. 
          Other times they're relentless, aggressive, never giving an inch.
        </p>

        <p>
          This isn't random. They're consciously switching between two distinct playstyles 
          based on what they're seeing from their opponent. Understanding <em>when</em> to use 
          each style is what makes Jin so dangerous.
        </p>

        <KeyConcept title="Cold Jin (Defensive)" icon="❄️">
          <p><strong>The Goal:</strong> Gather information while taking minimal risk.</p>
          <ul style={{ marginTop: '12px' }}>
            <li><strong>Poke with safe moves</strong> — df+1, d+4, db+4, 2,1</li>
            <li><strong>Fish for whiffs</strong> — Backdash, watch what they do</li>
            <li><strong>Punish mistakes</strong> — Launch what you can launch</li>
            <li><strong>Don't overcommit</strong> — Stay compact, stay safe</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            Use Cold Jin when you don't know your opponent's habits yet, or when you're ahead 
            and don't need to take risks.
          </p>
        </KeyConcept>

        <KeyConcept title="Hot Jin (Offensive)" icon="🔥">
          <p><strong>The Goal:</strong> Overwhelm with pressure and force mistakes.</p>
          <ul style={{ marginTop: '12px' }}>
            <li><strong>Skip neutral</strong> — ff+2, running 3, wave dash in</li>
            <li><strong>Plus frame loops</strong> — ZEN transitions, electric pressure</li>
            <li><strong>50/50s</strong> — Hellsweep vs mid, throw vs attack</li>
            <li><strong>Mental stack</strong> — Make them guess, make them crack</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            Use Hot Jin when you have reads on your opponent, when they're not checking your 
            pressure, or when you need a comeback.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="The Key Insight">
          Cold Jin requires more brain power — you're analyzing, adapting, making decisions. 
          Hot Jin requires less thinking but more reads — you're betting on your opponent 
          not knowing how to stop you. Balance these based on your mental state AND your 
          opponent's skill level.
        </TipBox>
      </Section>

      <Section title="When to Switch">
        <p>
          The art of playing Jin is knowing when to shift gears. Here are the triggers:
        </p>

        <KeyConcept title="Go Cold When..." icon="⬇️">
          <ul>
            <li>Round just started — you don't know their habits yet</li>
            <li>You just got hit by something new — need to figure out the answer</li>
            <li>You have a big life lead — no need to take risks</li>
            <li>You're tilted — safer play prevents blowups</li>
            <li>They're parrying/crushing your pressure — need a new approach</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Go Hot When..." icon="⬆️">
          <ul>
            <li>They're not checking your plus frames — free pressure</li>
            <li>They're mashing buttons predictably — frame trap city</li>
            <li>They're freezing up and blocking everything — throw/low time</li>
            <li>You're behind and need a comeback — calculated risks</li>
            <li>You have Heat and wall position — Jin's strongest situation</li>
          </ul>
        </KeyConcept>

        <MatchScenario
          title="Round Start Decision"
          situation="It's round 1. You've never fought this opponent before. They're playing Kazuya."
          context="No information yet on their tendencies."
          options={[
            {
              action: "Go Hot — ff+2 to start pressure",
              input: "f,f+2",
              result: "Risky without information. If they block and check you correctly, you've given up your turn for nothing. If they sidestep, you whiff.",
              followup: "Can work if they're passive, but you're gambling."
            },
            {
              action: "Go Cold — df+1 to probe",
              input: "df+1",
              result: "Safe mid check. You're -3 on block but you've learned: do they mash? Block? Sidestep?",
              followup: "Now you have information to inform your next decision.",
              isOptimal: true
            },
            {
              action: "Go Cold — backdash and watch",
              result: "Zero risk. You see what they like to do at round start. Information for free.",
              followup: "Good against aggressive players who press buttons early."
            },
            {
              action: "Go Hot — hellsweep immediately",
              input: "CD.df+4",
              result: "Maximum gambling. If they block, you eat a full combo (-31). If they were pressing buttons, you might clip them.",
              followup: "Almost never correct round 1."
            }
          ]}
          keyTakeaway="Start cold against unknown opponents. Gather information before committing to pressure. You can always go hot once you have reads."
        />

        <MatchScenario
          title="Mid-Round Shift"
          situation="You landed db+4 (+3) and they mashed jab. Your f+4 counter-hit them for a full combo. This is the second time they've mashed into your frame trap."
          context="Pattern detected: they don't respect plus frames."
          options={[
            {
              action: "Stay Cold — keep poking with df+1",
              result: "Works, but you're leaving damage on the table. They've shown they mash — punish it.",
            },
            {
              action: "Go Hot — loop plus frames into frame traps",
              result: "Perfect read. Land db+4 again, f+4 when they mash. They either stop pressing (free mixups) or keep dying.",
              isOptimal: true,
              followup: "This is when Hot Jin thrives — against opponents who don't adapt."
            },
            {
              action: "Go Hot — raw hellsweep",
              result: "You don't need to take this risk. They're already giving you free damage by mashing. Don't get greedy.",
            }
          ]}
          keyTakeaway="When opponents don't respect your plus frames, switch to Hot and punish them until they adapt. Free damage is the best damage."
        />
      </Section>

      <Section title="Practice: Cold Jin">
        <p>
          Before you can switch between styles, you need to be comfortable in each one 
          separately. Let's start with Cold Jin — it's the foundation.
        </p>

        <ConstraintPlay
          title="The Poke Master"
          description="Play 10 rounds using ONLY these moves. No launchers, no ZEN, no hellsweep. Just pokes."
          allowedMoves={[
            { input: "df+1", purpose: "Mid check" },
            { input: "d+4", purpose: "Fast low" },
            { input: "db+4", purpose: "Plus frame low" },
            { input: "2,1", purpose: "Jab string" },
            { input: "1", purpose: "Single jab" },
            { input: "Backdash", purpose: "Create space" },
            { input: "Block", purpose: "Defense" }
          ]}
          duration="10 rounds"
          goal="Win rounds using only pokes and punishment. No fancy stuff."
          whatYouLearn={[
            "How much damage pokes actually do over a round",
            "When opponents get impatient and make mistakes",
            "What your opponent does when you're not threatening them with mixups",
            "How to create whiff opportunities with movement"
          ]}
          setup={{
            opponent: "Any character",
            cpuBehavior: "CPU - Normal or Ultra Hard",
            rounds: 10
          }}
          progressionHint="Once you can win consistently with just pokes, you'll appreciate how much more dangerous mixups become."
        />

        <TipBox variant="tip" title="What You'll Discover">
          Most players rely on gimmicks and mixups. When you strip those away, you learn 
          the real fundamentals: spacing, timing, patience. You'll also discover that 
          good pokes + punishment wins a LOT of rounds, even without going crazy.
        </TipBox>

        <ConstraintPlay
          title="The Whiff Punisher"
          description="Play 5 rounds where your ONLY way to deal damage is whiff punishing. No poking allowed — only backdash, sidestep, and punish whiffs."
          allowedMoves={[
            { input: "Backdash", purpose: "Create whiff opportunities" },
            { input: "Sidestep", purpose: "Evade linear attacks" },
            { input: "ff+2", purpose: "Whiff punish from range" },
            { input: "EWHF", purpose: "Whiff punish for max damage" },
            { input: "Block", purpose: "Wait for their move" }
          ]}
          duration="5 rounds"
          goal="Only deal damage by making opponents whiff, then punishing."
          whatYouLearn={[
            "How far back you need to be for moves to whiff",
            "What moves opponents throw out at different ranges",
            "The timing window for whiff punishes",
            "Patience — waiting for the right moment"
          ]}
          setup={{
            opponent: "Any character",
            cpuBehavior: "CPU - Ultra Hard (so they actually attack)",
            rounds: 5
          }}
          progressionHint="This is frustrating at first. Embrace it. Learning to wait for whiffs makes you dangerous."
        />
      </Section>

      <Section title="Practice: Hot Jin">
        <p>
          Now let's practice the offensive side. Hot Jin is about maintaining pressure 
          and forcing your opponent to guess.
        </p>

        <ConstraintPlay
          title="The Plus Frame Loop"
          description="Your only goal is to stay at plus frames as long as possible. Chain plus frame moves together until you get hit."
          allowedMoves={[
            { input: "db+4", purpose: "+3 on hit low" },
            { input: "2,1", purpose: "+6 on hit" },
            { input: "1", purpose: "+8 on hit" },
            { input: "ff+3", purpose: "+6 on block, ZEN access" },
            { input: "EWHF", purpose: "+5 on block" },
            { input: "ZEN.3+4", purpose: "+9~+15 on block" }
          ]}
          duration="5 rounds"
          goal="See how many consecutive plus frame situations you can create before losing your turn."
          whatYouLearn={[
            "Which moves chain together naturally",
            "How opponents react when you're constantly plus",
            "When opponents crack and give you free counter-hits",
            "The rhythm of Jin's pressure"
          ]}
          setup={{
            opponent: "Any character",
            cpuBehavior: "CPU - Normal"
          }}
          progressionHint="Once you feel the rhythm of plus frames, you'll recognize when to stay in vs when to reset."
        />

        <ConstraintPlay
          title="The ZEN Enforcer"
          description="Every time you block something or land a hit, transition to ZEN and do a ZEN mixup. Force yourself to always enter stance."
          allowedMoves={[
            { input: "Any move → ZEN", purpose: "Transition to stance" },
            { input: "ZEN.1,2", purpose: "Mid mid, heat engager" },
            { input: "ZEN.1+2", purpose: "Low grab" },
            { input: "ZEN.3+4", purpose: "Plus frame high" },
            { input: "ZEN.4", purpose: "Plus frame mid" },
            { input: "ZEN.u+1", purpose: "Launch" }
          ]}
          duration="5 rounds"
          goal="Transition to ZEN constantly. Learn the stance inside out."
          whatYouLearn={[
            "Which moves naturally flow into ZEN",
            "ZEN mixup options and opponent reactions",
            "When ZEN is good vs when you're overextending",
            "Muscle memory for ZEN transitions"
          ]}
          setup={{
            opponent: "Any character",
            cpuBehavior: "CPU - Normal"
          }}
          progressionHint="After this, ZEN transitions will feel natural instead of forced."
        />
      </Section>

      <Section title="The Mental Checklist">
        <p>
          Before every round, ask yourself these questions:
        </p>

        <Collapsible title="Pre-Round Checklist" icon="📋" defaultOpen>
          <ol style={{ marginTop: '12px' }}>
            <li><strong>What do I know about this opponent?</strong>
              <ul>
                <li>Do they mash? Turtle? Use gimmicks?</li>
                <li>What have they done after my pressure?</li>
              </ul>
            </li>
            <li><strong>What's my life situation?</strong>
              <ul>
                <li>Am I ahead? (Go Cold, don't give it away)</li>
                <li>Am I behind? (Might need Hot for comeback)</li>
              </ul>
            </li>
            <li><strong>Do I have resources?</strong>
              <ul>
                <li>Heat available? (Consider wall carry into Heat)</li>
                <li>Rage? (Big comeback potential)</li>
              </ul>
            </li>
            <li><strong>What's the stage situation?</strong>
              <ul>
                <li>Near wall? (Go Hot, Jin's domain)</li>
                <li>Open stage? (Cold might be safer)</li>
              </ul>
            </li>
          </ol>
        </Collapsible>

        <KeyConcept title="Mid-Round Check-In" icon="🔄">
          <p>During long pressure sequences, pause mentally and ask:</p>
          <ul style={{ marginTop: '8px' }}>
            <li>Is my pressure working? (Keep going)</li>
            <li>Are they adapting? (Time to switch up)</li>
            <li>Am I autopiloting? (Dangerous — refocus)</li>
            <li>What have they done the last 2-3 times? (Pattern?)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Autopilot Is The Enemy">
          The moment you stop thinking and just do sequences automatically, you become 
          predictable. High-level opponents will download you. Keep asking questions, 
          keep adapting. That's what separates grinders from players.
        </TipBox>
      </Section>

      <Section title="What's Next">
        <p>
          You now understand the mental framework. Cold Jin gathers information. Hot Jin 
          exploits it. Switching between them based on what you're seeing is the key.
        </p>

        <p>
          In the next chapter, we'll drill Jin's pressure tools specifically — the frame 
          traps, the ZEN sequences, the wall pressure. You'll set up practice mode scenarios 
          and build muscle memory for Jin's offense.
        </p>

        <TipBox variant="tip" title="Before Moving On">
          Complete at least one Constraint Play challenge from this chapter. The concepts 
          won't stick until you've <em>felt</em> them in your hands. Go into practice mode 
          and do "The Poke Master" challenge. Then come back.
        </TipBox>
      </Section>
    </Chapter>
  )
}
