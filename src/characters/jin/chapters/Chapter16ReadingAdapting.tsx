import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  MatchScenario,
  ReadingChallenge,
  Collapsible,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter16ReadingAdapting({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={16}
      title="Reading & Adapting"
      intro="Execution means nothing if you can't read your opponent. This chapter teaches you what to look for, how to gather information, and how to adapt your gameplan in real-time."
      onPrevious={() => goToChapter(15)}
      onNext={() => goToChapter(17)}
      nextLabel="Integration Challenges"
    >
      <Section title="Stop Looking at Jin">
        <KeyConcept title="The Most Important Habit" icon="👁️">
          <p>
            Most players watch their own character. They're focused on their inputs, their 
            combos, their pressure. This is backwards.
          </p>
          <p style={{ marginTop: '12px' }}>
            <strong>Watch your opponent's character.</strong> Everything you need to know 
            is in their movement, their timing, their habits. Jin's inputs should be muscle 
            memory — your eyes belong on them.
          </p>
        </KeyConcept>

        <p>
          This takes practice. You've spent hundreds of hours watching Jin. Breaking that 
          habit requires conscious effort. Start with this exercise:
        </p>

        <TipBox variant="tip" title="The Focus Drill">
          In your next 5 matches, pick ONE thing to watch on your opponent:
          <ol>
            <li>Match 1: Watch their movement (do they sidestep? backdash? stand still?)</li>
            <li>Match 2: Watch their hands during strings (are they mashing? holding back?)</li>
            <li>Match 3: Watch what they do after blocking your lows</li>
            <li>Match 4: Watch their wake-up habits (roll? attack? stay down?)</li>
            <li>Match 5: Watch their round start habits</li>
          </ol>
          You'll lose some of these matches. That's fine. You're building the habit of 
          watching them instead of yourself.
        </TipBox>
      </Section>

      <Section title="The Questions to Ask">
        <p>
          Reading opponents isn't mystical. It's asking the right questions and paying 
          attention to the answers. Here's what to look for:
        </p>

        <KeyConcept title="After They Block Your Moves" icon="❓">
          <p><strong>Question:</strong> What do they do when I'm plus?</p>
          <ul style={{ marginTop: '8px' }}>
            <li><strong>They press buttons</strong> → Frame trap them</li>
            <li><strong>They freeze</strong> → Throw or go for mixups</li>
            <li><strong>They sidestep</strong> → Use tracking moves</li>
            <li><strong>They backdash</strong> → Forward momentum (ff+2, running 3)</li>
            <li><strong>They duck</strong> → Use mids, launch the duck</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="After You Hit Them" icon="❓">
          <p><strong>Question:</strong> How do they respond to getting hit?</p>
          <ul style={{ marginTop: '8px' }}>
            <li><strong>They get aggressive</strong> → Counter-hit fish with f+4</li>
            <li><strong>They turtle</strong> → Mix lows and throws</li>
            <li><strong>They rage quit... mentally</strong> → Keep doing what worked</li>
            <li><strong>They adapt</strong> → Time to change your approach</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="At Round Start" icon="❓">
          <p><strong>Question:</strong> What's their default gameplan?</p>
          <ul style={{ marginTop: '8px' }}>
            <li><strong>They rush in</strong> → Backdash, punish whiffs</li>
            <li><strong>They wait</strong> → You can approach safely</li>
            <li><strong>They do a move immediately</strong> → Note it, prepare the answer</li>
            <li><strong>They sidestep immediately</strong> → Homing moves or delay your approach</li>
          </ul>
        </KeyConcept>

        <ReadingChallenge
          title="Reading Plus Frame Responses"
          scenario="You've just landed db+4 (+3). What does your opponent do?"
          whatToWatch="Their hands and their character's animation in the moment after the hit."
          tells={[
            {
              observation: "Their character immediately throws a punch",
              meaning: "They're mashing. They press after every hit.",
              response: "Frame trap with f+4. They'll eat full combos."
            },
            {
              observation: "Their character doesn't move at all",
              meaning: "They're blocking. They respect plus frames.",
              response: "Go for throw or low. They're giving you free mixups."
            },
            {
              observation: "Their character moves sideways",
              meaning: "They're trying to sidestep your follow-up.",
              response: "Use b,f+2 series or magic 4 to track them."
            },
            {
              observation: "Their character ducks slightly",
              meaning: "They're crouch-blocking, expecting a high or throw.",
              response: "Use a mid like df+1 or b+2,1 to open them up."
            }
          ]}
          practiceSetup={{
            cpuBehavior: "Record 4 slots: 1=Jab, 2=Block, 3=Sidestep R, 4=Crouch",
            recordings: [
              "Slot 1: Standing, then jab",
              "Slot 2: Standing, hold back",
              "Slot 3: Standing, sidestep right",
              "Slot 4: Standing, crouch"
            ],
            position: "Open"
          }}
          levels={[
            {
              name: "Level 1",
              description: "CPU on single recording. Know what's coming, practice the response."
            },
            {
              name: "Level 2",
              description: "CPU on 'Random'. React to what they do after each db+4."
            },
            {
              name: "Level 3",
              description: "Real match. Apply this read against actual opponents."
            }
          ]}
          realMatchApplication="After landing db+4 in a real match, mentally ask 'what did they do?' If they mashed, note it — you can frame trap them all game. If they respect it, note it — free mixups."
        />
      </Section>

      <Section title="Pattern Recognition">
        <p>
          Humans are predictable. Once someone finds something that works, they repeat it. 
          Your job is to notice the pattern and punish it.
        </p>

        <KeyConcept title="The Three-Time Rule" icon="📊">
          <p>
            If they do something <strong>twice</strong>, note it. If they do it <strong>three 
            times</strong>, assume it's a pattern and prepare the counter.
          </p>
          <ul style={{ marginTop: '12px' }}>
            <li>They ducked your 2,1,4 twice → Stop using 2,1,4, or delay it massively</li>
            <li>They jabbed after your db+4 three times → Frame trap is free damage</li>
            <li>They sidestep right every time you're plus → b,f+2 series tracks</li>
          </ul>
        </KeyConcept>

        <MatchScenario
          title="The Pattern Read"
          situation="It's Round 3. In Round 1, they jabbed after your db+4. In Round 2, they jabbed after your db+4. You just landed db+4 again."
          context="You have data. Three instances of the same behavior."
          options={[
            {
              action: "db+4 → df+1 (safe mid)",
              input: "df+1",
              result: "You get your turn, but you're only getting 10 damage. You're not capitalizing on the read."
            },
            {
              action: "db+4 → f+4 (frame trap)",
              input: "f+4",
              result: "They mash, you counter-hit, full combo for 65+ damage. Pattern exploited.",
              isOptimal: true,
              followup: "They'll either stop mashing (free mixups) or keep dying."
            },
            {
              action: "db+4 → throw",
              result: "If they're mashing jab, throw gets beaten. Wrong read application."
            },
            {
              action: "db+4 → electric",
              input: "EWHF",
              result: "Also a frame trap, but harder to execute. f+4 is more consistent."
            }
          ]}
          keyTakeaway="Data is only useful if you act on it. When you see a pattern, commit to punishing it. Don't play safe when you have reads."
        />

        <MatchScenario
          title="The Adaptation Check"
          situation="You've frame trapped them with db+4 → f+4 three times. They're down 0-2 in rounds. You land db+4 again."
          context="They've been dying to this. Will they adapt?"
          options={[
            {
              action: "db+4 → f+4 again",
              result: "If they haven't adapted, free combo. But if they've learned to block...",
              followup: "They might be waiting. Check first."
            },
            {
              action: "db+4 → check with df+1",
              input: "df+1",
              result: "Safe way to see if they're still mashing or if they've adapted.",
              isOptimal: true,
              followup: "If they block, they've adapted — time for mixups. If they mash, back to f+4."
            },
            {
              action: "db+4 → throw",
              result: "Smart if they've started blocking. Bad if they're still mashing.",
              followup: "This is the next layer — throw beats their adaptation."
            },
            {
              action: "db+4 → nothing (watch)",
              result: "Advanced read. See what they do when you don't commit.",
              followup: "If they whiff a jab, you can whiff punish."
            }
          ]}
          keyTakeaway="Reads expire. Once opponents adapt, you need to adapt too. The game is constant adjustment."
        />
      </Section>

      <Section title="Adapting Your Gameplan">
        <Flowchart
          title="Hot vs Cold Decision Tree"
          start={{
            label: "What information do I have?",
            nextNodes: ["info_none", "info_some", "info_pattern"]
          }}
          nodes={[
            {
              id: "info_none",
              type: "decision",
              label: "No info (early game)",
              action: "Start COLD",
              nextNodes: ["cold_outcome"]
            },
            {
              id: "info_some",
              type: "decision",
              label: "Some data (1-2 interactions)",
              action: "Stay COLD, gather more",
              nextNodes: ["cold_outcome"]
            },
            {
              id: "info_pattern",
              type: "decision",
              label: "Clear pattern (3+ instances)",
              action: "Go HOT, exploit the pattern",
              nextNodes: ["hot_outcome"]
            },
            {
              id: "cold_outcome",
              type: "decision",
              label: "Did they show a pattern?",
              nextNodes: ["yes_pattern", "no_pattern"]
            },
            {
              id: "yes_pattern",
              type: "end",
              label: "GO HOT - Exploit",
              action: "Switch to aggressive pressure targeting their pattern"
            },
            {
              id: "no_pattern",
              type: "end",
              label: "STAY COLD - Wait",
              action: "Keep probing until you find something"
            },
            {
              id: "hot_outcome",
              type: "decision",
              label: "Are they adapting?",
              nextNodes: ["adapting_yes", "adapting_no"]
            },
            {
              id: "adapting_yes",
              type: "end",
              label: "GO COLD - Reset",
              action: "They've figured you out. Back to information gathering."
            },
            {
              id: "adapting_no",
              type: "end",
              label: "STAY HOT - Keep Winning",
              action: "Free damage. Keep exploiting until they stop you."
            }
          ]}
        />

        <KeyConcept title="The Adaptation Loop" icon="🔁">
          <ol>
            <li><strong>Probe (Cold)</strong> — Use safe moves to see what they do</li>
            <li><strong>Pattern (Data)</strong> — Note what they do 2-3 times</li>
            <li><strong>Exploit (Hot)</strong> — Punish the pattern with optimal counters</li>
            <li><strong>Check (Validate)</strong> — Did they adapt? Are they blocking now?</li>
            <li><strong>Reset or Continue</strong> — If they adapted, go back to Cold. If not, stay Hot.</li>
          </ol>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            This loop runs constantly throughout a match. High-level play is just running 
            this loop faster than your opponent.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Common Opponent Types">
        <p>
          While every player is different, most fall into recognizable categories. Learn 
          to identify them quickly and apply the appropriate strategy.
        </p>

        <Collapsible title="The Masher" icon="🔨" defaultOpen>
          <p><strong>Signs:</strong></p>
          <ul>
            <li>Presses buttons when it's not their turn</li>
            <li>Uses unsafe moves constantly</li>
            <li>Doesn't respect plus frames</li>
          </ul>
          <p style={{ marginTop: '12px' }}><strong>Jin's Answer:</strong></p>
          <ul>
            <li>Frame trap with f+4 — they'll eat full combos</li>
            <li>Let them kill themselves on your defense</li>
            <li>Punish everything they do that's minus</li>
            <li>Don't bother with mixups — they die before you need them</li>
          </ul>
          <p style={{ marginTop: '12px' }}><strong>Mental Note:</strong> This is the easiest opponent type. Go Hot early and stay Hot.</p>
        </Collapsible>

        <Collapsible title="The Turtle" icon="🐢">
          <p><strong>Signs:</strong></p>
          <ul>
            <li>Blocks everything</li>
            <li>Rarely takes risks</li>
            <li>Waits for you to make mistakes</li>
          </ul>
          <p style={{ marginTop: '12px' }}><strong>Jin's Answer:</strong></p>
          <ul>
            <li>Use lows — db+4, d+4, hellsweep</li>
            <li>Mix in throws — they're holding back</li>
            <li>Work towards wall — they can't run forever</li>
            <li>Use ZEN chip damage (ZEN.3+4 chips on block)</li>
          </ul>
          <p style={{ marginTop: '12px' }}><strong>Mental Note:</strong> Be patient. You have more tools than they do. Chip them down.</p>
        </Collapsible>

        <Collapsible title="The Stepper" icon="🚶">
          <p><strong>Signs:</strong></p>
          <ul>
            <li>Sidesteps constantly</li>
            <li>Makes your attacks whiff</li>
            <li>Launches your whiffed moves</li>
          </ul>
          <p style={{ marginTop: '12px' }}><strong>Jin's Answer:</strong></p>
          <ul>
            <li>b,f+2 series tracks right sidesteps</li>
            <li>Magic 4 is homing</li>
            <li>Delay your attacks to catch their step</li>
            <li>Electric tracks both ways</li>
          </ul>
          <p style={{ marginTop: '12px' }}><strong>Mental Note:</strong> Their weakness is committing to movement. Catch them mid-step for full combos.</p>
        </Collapsible>

        <Collapsible title="The Gimmick Player" icon="🎪">
          <p><strong>Signs:</strong></p>
          <ul>
            <li>Does the same string/setup repeatedly</li>
            <li>Relies on you not knowing the answer</li>
            <li>Falls apart when their gimmick stops working</li>
          </ul>
          <p style={{ marginTop: '12px' }}><strong>Jin's Answer:</strong></p>
          <ul>
            <li>Go to lab after the match — learn the counter</li>
            <li>Once you know the answer, they have nothing</li>
            <li>Be patient — don't panic because you don't know something</li>
            <li>If their gimmick is a string, check if it can be parried</li>
          </ul>
          <p style={{ marginTop: '12px' }}><strong>Mental Note:</strong> Knowledge checks only work once. Lab it, remember it, never lose to it again.</p>
        </Collapsible>

        <Collapsible title="The Adaptor" icon="🧠">
          <p><strong>Signs:</strong></p>
          <ul>
            <li>Changes their approach when something fails</li>
            <li>Doesn't repeat the same mistake</li>
            <li>Seems to have an answer for everything</li>
          </ul>
          <p style={{ marginTop: '12px' }}><strong>Jin's Answer:</strong></p>
          <ul>
            <li>This is the hardest opponent type — stay sharp</li>
            <li>Mix your timings — don't be predictable</li>
            <li>Use the "do nothing" technique to bait reactions</li>
            <li>Stay Cold longer — gather information before committing</li>
            <li>Accept you might lose — use it to learn</li>
          </ul>
          <p style={{ marginTop: '12px' }}><strong>Mental Note:</strong> Adaptors make you better. Even if you lose, you're learning.</p>
        </Collapsible>
      </Section>

      <Section title="The Real Match Mindset">
        <KeyConcept title="It's Not About Combos" icon="🧠">
          <p>
            By now you know Jin's combos. You know his frame traps. You know his pressure. 
            None of that matters if you can't read your opponent.
          </p>
          <p style={{ marginTop: '12px' }}>
            The player who wins is the one who <strong>understands their opponent better</strong>. 
            You can have worse execution, worse combos, worse knowledge — and still win because 
            you're reading them and they're not reading you.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Every Match Is Data">
          You will lose matches. That's fine. Every loss teaches you something:
          <ul>
            <li>What did I get hit by? (Lab it later)</li>
            <li>What patterns did I fall into? (Break those habits)</li>
            <li>When did I stop reading and start autopiloting? (Stay present)</li>
          </ul>
          A loss where you learned something is more valuable than a win where you learned nothing.
        </TipBox>
      </Section>

      <Section title="What's Next">
        <p>
          You've learned execution. You've learned reading. Now it's time to put everything 
          together. The final chapter contains integration challenges that combine all your 
          skills into real match scenarios.
        </p>

        <TipBox variant="warning" title="Before Moving On">
          Complete at least one ReadingChallenge from this chapter. You need to practice 
          actually watching your opponent, not just knowing you should. Do the "Reading Plus 
          Frame Responses" challenge against CPU recordings.
        </TipBox>
      </Section>
    </Chapter>
  )
}
