import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  SituationDrill,
  GameChallenge,
  DrillMode,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter15DrillingPressure({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={15}
      title="Drilling Jin's Pressure"
      intro="Time to build muscle memory. This chapter contains specific practice mode setups and drills for Jin's pressure tools. Open practice mode alongside this guide — you'll need it."
      onPrevious={() => goToChapter(14)}
      onNext={() => goToChapter(16)}
      nextLabel="Reading & Adapting"
    >
      <Section title="How to Use This Chapter">
        <KeyConcept title="Practice Mode Is Open" icon="🎮">
          <p>
            This chapter is designed to be used <strong>with practice mode running</strong>. 
            Each drill tells you exactly what to set up and what to practice.
          </p>
          <ul style={{ marginTop: '12px' }}>
            <li>Read the drill setup</li>
            <li>Configure practice mode exactly as described</li>
            <li>Do the reps until you can do it without thinking</li>
            <li>Move to the next drill</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Skip Drills">
          These drills are sequenced intentionally. Each one builds on the last. If you 
          skip ahead, you'll miss foundational patterns that make the advanced stuff work.
        </TipBox>
      </Section>

      <Section title="Frame Trap Drills">
        <p>
          Frame traps are how Jin converts plus frames into damage. The pattern is simple: 
          get plus frames, then use a move that beats their retaliation attempt.
        </p>

        <DrillMode
          title="The db+4 → f+4 Frame Trap"
          objective="Land db+4, then frame trap mashers with f+4 for a full combo."
          setup="Set CPU to 'After Block/Hit: Jab'. This simulates opponents who mash after getting hit by your low."
          steps={[
            {
              instruction: "Land raw db+4",
              detail: "Practice the low without thinking about follow-ups first",
              targetReps: 10
            },
            {
              instruction: "db+4 → f+4 (wait for their jab to come out)",
              detail: "You're +3, they jab. Your f+4 (16f) counter-hits their jab for full combo.",
              targetReps: 15
            },
            {
              instruction: "db+4 → f+4 → full combo",
              detail: "Pick up the CH with: b+3,f,1 → dash → b+3,f,1 → dash → b+3,2",
              targetReps: 10
            }
          ]}
          difficulty="beginner"
          estimatedTime="10 min"
        />

        <TipBox variant="tip" title="Why This Works">
          At +3, your f+4 (16f) effectively becomes a 13f move. Their 10f jab becomes 
          a 10f counter-hit victim. You trade — but you're +27 on trade, which gives 
          you a guaranteed hopkick. Either way, they die.
        </TipBox>

        <DrillMode
          title="The 2,1 → f+4 Frame Trap"
          objective="Land 2,1 on hit (+6), then catch their retaliation with f+4."
          setup="Set CPU to 'After Block/Hit: Jab'."
          steps={[
            {
              instruction: "2,1 on hit (confirm the +6)",
              detail: "Watch for the hit spark. If it's blocked, you're -3 and shouldn't continue.",
              targetReps: 10
            },
            {
              instruction: "2,1 hit → f+4",
              detail: "At +6, your f+4 is effectively 10f. Beats their jab clean.",
              targetReps: 15
            },
            {
              instruction: "2,1 hit → f+4 → full combo",
              detail: "Same pickup: b+3,f,1 → dash → b+3,f,1 → dash → b+3,2",
              targetReps: 10
            }
          ]}
          difficulty="beginner"
          estimatedTime="10 min"
        />

        <DrillMode
          title="Beating Power Crush"
          objective="Learn to shut down power crush attempts with the correct frame trap timing."
          setup="Set CPU to 'After Block/Hit: Heat Burst'. This simulates the most common power crush mash."
          steps={[
            {
              instruction: "db+4 hit → df+3",
              detail: "+3 from db+4. df+3 is 12f, so effectively 9f. Beats the 7f power crush startup.",
              targetReps: 10
            },
            {
              instruction: "2,1 hit → df+3",
              detail: "+6 from 2,1. df+3 becomes 6f effective. Completely stuffs power crush.",
              targetReps: 10
            },
            {
              instruction: "Electric block → b+2,1",
              detail: "+5 from electric. b+2,1 (14f) becomes 9f effective. Safe mid that beats PC.",
              targetReps: 10
            }
          ]}
          difficulty="intermediate"
          estimatedTime="8 min"
        />

        <Collapsible title="Frame Trap Quick Reference" icon="📊">
          <div style={{ marginTop: '12px', fontSize: '14px' }}>
            <p><strong>Formula:</strong> Your move startup - your plus frames = effective startup</p>
            <p style={{ marginTop: '8px' }}><strong>To beat power crush:</strong> Need effective startup of 10f or faster</p>
            <ul style={{ marginTop: '12px' }}>
              <li><strong>+3 (db+4 hit):</strong> Use 13f or faster → df+3 (12f = 9f effective)</li>
              <li><strong>+5 (electric block):</strong> Use 15f or faster → b+2,1 (14f = 9f effective)</li>
              <li><strong>+6 (2,1 hit):</strong> Use 16f or faster → f+4 (16f = 10f effective)</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="ZEN Pressure Drills">
        <p>
          ZEN stance is where Jin's wall pressure becomes oppressive. These drills build 
          the muscle memory for seamless ZEN transitions and mixups.
        </p>

        <DrillMode
          title="ZEN Entry Routes"
          objective="Practice transitioning into ZEN from different moves until it's automatic."
          setup="Set CPU to 'Stand'. Just practice the transitions, not the follow-ups."
          steps={[
            {
              instruction: "2,4~f → ZEN",
              detail: "Your 10f punish into stance. The ~f must be held.",
              targetReps: 15
            },
            {
              instruction: "b+3~f → ZEN",
              detail: "The classic neutral ZEN entry. Safe mid into stance.",
              targetReps: 15
            },
            {
              instruction: "ff+3~f → ZEN",
              detail: "Plus frame entry (+6 on block). Best way to enter ZEN in pressure.",
              targetReps: 15
            },
            {
              instruction: "f+4~f → ZEN",
              detail: "From your CH launcher. Used when they block f+4 (you're -1 in ZEN).",
              targetReps: 10
            }
          ]}
          difficulty="beginner"
          estimatedTime="10 min"
        />

        <DrillMode
          title="ZEN Mixup Execution"
          objective="Execute ZEN's main mixup options cleanly."
          setup="Set CPU to 'Crouch Guard' first, then 'Stand Guard' to test both options."
          steps={[
            {
              instruction: "ZEN.1,2 (mid mid)",
              detail: "Your safe option. -14 on block but launches if they duck.",
              targetReps: 10
            },
            {
              instruction: "ZEN.1+2 (low grab)",
              detail: "Catches standing guard. +5 into crouch dash on hit.",
              targetReps: 10
            },
            {
              instruction: "ZEN.3+4 (high, big plus)",
              detail: "Plus on block, chip damage. Catches people who freeze.",
              targetReps: 10
            },
            {
              instruction: "ZEN.4 (mid, floor break)",
              detail: "Catches duckers. Guaranteed d+2 follow-up.",
              targetReps: 10
            },
            {
              instruction: "ZEN.u+1 (launch)",
              detail: "Your panic launcher. -16, use sparingly.",
              targetReps: 10
            }
          ]}
          difficulty="intermediate"
          estimatedTime="12 min"
        />

        <SituationDrill
          title="ZEN Wall Pressure"
          situation="Opponent is at the wall. You've just blocked one of their moves."
          context="This is Jin's strongest situation. You want to transition to ZEN and force a mixup."
          opponentActions={[
            {
              slot: 1,
              action: "Jab (1)",
              yourResponse: "Block → b+3~f ZEN → ZEN.1,2 (wallsplat)",
              timing: "Immediate after block"
            },
            {
              slot: 2,
              action: "df+1 (generic mid)",
              yourResponse: "Block → b+3~f ZEN → ZEN.1+2 (low grab)",
              timing: "Mix with slot 1 to condition blocking"
            },
            {
              slot: 3,
              action: "Low poke",
              yourResponse: "Block → ws4 → 2,4~f ZEN → ZEN.3+4 (plus frames)",
              timing: "Punish into stance transition"
            },
            {
              slot: 4,
              action: "Nothing (stands there)",
              yourResponse: "ff+3~f ZEN (+6) → ZEN mixup of choice",
              timing: "Approach into stance"
            }
          ]}
          setup={{
            cpuBehavior: "Repeat Action",
            playbackMode: "Random",
            position: "Wall"
          }}
          goal="React to each option and transition to ZEN pressure. Condition them to respect your stance."
          successCriteria="10 consecutive correct responses with smooth ZEN transitions"
          commonMistakes={[
            "Hesitating after the block — go directly into ZEN",
            "Always doing the same ZEN option — vary your mixups",
            "Forgetting ZEN.4 against duckers"
          ]}
          mentalCue="Block → ZEN → Mixup. Three-beat rhythm."
        />
      </Section>

      <Section title="Plus Frame Loop Drills">
        <p>
          Jin can chain plus frame situations together. When opponents don't know how to 
          interrupt, you get free pressure forever.
        </p>

        <GameChallenge
          title="The Infinite Plus Challenge"
          scenario="See how long you can maintain plus frames against an opponent. Your goal is to never give up your turn."
          setup={{
            cpuBehavior: "Guard All",
            position: "Open"
          }}
          goal="String together 10+ plus frame moves without going minus"
          successCriteria="Complete a sequence of 10 plus frame moves/situations in a row"
          hints={[
            "db+4 on hit is +3",
            "ff+3 on block is +6 (with ZEN transition)",
            "ZEN.3+4 is +9~+15 on block",
            "Electric is +5 on block",
            "1 on hit is +8, 2 on hit is +9"
          ]}
          whyThisWorks="When you're always plus, opponents can only block or eat counter-hits. This builds awareness of your frame advantage."
        />

        <KeyConcept title="Sample Plus Frame Loop" icon="🔄">
          <p>Here's one possible sequence against a blocking opponent:</p>
          <ol style={{ marginTop: '12px' }}>
            <li><code>1</code> hit → <strong>+8</strong></li>
            <li><code>db+4</code> hit → <strong>+3</strong></li>
            <li><code>ff+3~f</code> block → <strong>+6 in ZEN</strong></li>
            <li><code>ZEN.3+4</code> block → <strong>+9~+15</strong></li>
            <li><code>ff+3~f</code> block → <strong>+6 in ZEN</strong></li>
            <li>Loop continues...</li>
          </ol>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            This is theoretical. In real matches, mix in lows, throws, and frame traps to 
            keep them guessing. The point is understanding how long you can stay plus.
          </p>
        </KeyConcept>

        <DrillMode
          title="Breaking Step Electric Loop"
          objective="Practice the Breaking Step into Electric sequence for consistent pressure."
          setup="Set CPU to 'Stand Guard'. Focus on the input, not the opponent."
          steps={[
            {
              instruction: "f+3+4 (enter Breaking Step)",
              detail: "Get comfortable with the stance entry.",
              targetReps: 10
            },
            {
              instruction: "Breaking Step → Electric",
              detail: "The input is: f+3+4 → f,n,d,df+2. The electric comes out faster from BRS.",
              targetReps: 20
            },
            {
              instruction: "Electric block → f+3+4 → Electric",
              detail: "Loop the sequence. Electric (+5) → BRS → Electric.",
              targetReps: 15
            }
          ]}
          difficulty="advanced"
          estimatedTime="15 min"
        />
      </Section>

      <Section title="Tracking Sidesteps">
        <p>
          Jin is vulnerable to sidestepping. These drills teach you how to catch people 
          who try to walk out of your pressure.
        </p>

        <SituationDrill
          title="Catching the Right Sidestep"
          situation="You're +3 after db+4. Opponent sidesteps right (Jin's weak side)."
          context="Right sidestep beats most of Jin's mid options. You need tracking moves."
          opponentActions={[
            {
              slot: 1,
              action: "Sidestep Right → Jab",
              yourResponse: "b,f+2,1 (tracks right, jails)",
              timing: "Immediate after your plus frame move"
            },
            {
              slot: 2,
              action: "Sidestep Right → Launch",
              yourResponse: "b,f+2,3~f (tracks, enters ZEN)",
              timing: "Same timing, different ender"
            },
            {
              slot: 3,
              action: "Sidewalk Right (full)",
              yourResponse: "4 (magic 4, homing)",
              timing: "Use this against full sidewalk"
            }
          ]}
          setup={{
            cpuBehavior: "Repeat Action",
            playbackMode: "Random",
            position: "Open",
            otherSettings: [
              "Set CPU to record: db+4 on hit, then sidestep right",
              "You respond with tracking options"
            ]
          }}
          goal="Catch their sidestep with the correct tracking move"
          successCriteria="10 consecutive catches without them escaping"
          commonMistakes={[
            "Using f+4 (doesn't track right well)",
            "Using electric (tracks but slow, they recover)",
            "Waiting too long — attack while they're still stepping"
          ]}
          mentalCue="Plus frames → they step right → b,f+2 series"
        />

        <Collapsible title="Tracking Reference" icon="🎯" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <p><strong>Beats Sidestep Right:</strong></p>
            <ul>
              <li><code>b,f+2,1</code> — Mid high, safe</li>
              <li><code>b,f+2,3~f</code> — Mid mid, ZEN transition</li>
              <li><code>b+3~f</code> — Done immediately, tracks</li>
            </ul>
            <p style={{ marginTop: '12px' }}><strong>Beats Both Sides (Homing):</strong></p>
            <ul>
              <li><code>4</code> — Magic 4, CH gives followup</li>
              <li><code>ZEN.3</code> — Homing mid from stance</li>
              <li><code>ws3</code> — Homing mid from crouch</li>
              <li><code>Electric</code> — Tracks well both ways</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="Wall Pressure Sequence">
        <p>
          The wall is where Jin dominates. This drill puts together everything you've 
          learned into a complete wall pressure sequence.
        </p>

        <GameChallenge
          title="Wall Pressure Master"
          scenario="You've carried your opponent to the wall. Now maintain pressure until they crack."
          setup={{
            cpuBehavior: "Guard All (first), then Random (advanced)",
            position: "Wall",
            recordings: [
              "Slot 1: Jab mash",
              "Slot 2: Sidestep attempt",
              "Slot 3: Crouch (ducking highs)",
              "Slot 4: Nothing (blocking)"
            ]
          }}
          goal="Maintain wall pressure for 15 seconds without getting hit or pushed away"
          successCriteria="Complete the pressure sequence against all 4 recorded options"
          levels={[
            {
              name: "Level 1",
              description: "CPU set to 'Guard All'. Just practice the wall pressure sequence.",
              goal: "Execute: ff+3~f → ZEN.3+4 → ff+3~f → ZEN mixup → repeat",
              successCriteria: "Complete 3 full loops of the sequence"
            },
            {
              name: "Level 2",
              description: "CPU set to 'After Guard: Jab'. They'll try to interrupt.",
              goal: "When they jab, block and punish with 2,4~f → ZEN pressure",
              successCriteria: "Punish 5 jab attempts and continue pressure"
            },
            {
              name: "Level 3",
              description: "CPU set to 'Random' with all 4 recordings. Adapt to what they do.",
              goal: "React to each option: block jabs, catch steps, open up duckers",
              successCriteria: "Maintain pressure for 20+ seconds, landing at least 3 hits"
            }
          ]}
          hints={[
            "ZEN.3+4 is plus on block — abuse it",
            "If they duck ZEN.3+4, use ZEN.4 or ZEN.1,2",
            "If they sidestep, b,f+2,3~f tracks into ZEN",
            "Mix in ZEN.1+2 when they freeze"
          ]}
          whyThisWorks="Wall pressure is a flowchart. Each opponent response has a counter. Learn the flowchart and you control the wall."
        />

        <TipBox variant="tip" title="Heat at the Wall">
          If you have Heat available, your wall pressure becomes even more oppressive. 
          Heat Smash (H.2+3) at the wall gives you a mixup on block — they must respect it. 
          Heat ff+1+2 gives you Omen options. Save Heat for wall situations when possible.
        </TipBox>
      </Section>

      <Section title="What's Next">
        <p>
          You've drilled the execution. Now you need to learn <em>when</em> to use each 
          tool based on what your opponent is doing. The next chapter covers reading 
          opponents and adapting your gameplan in real-time.
        </p>

        <TipBox variant="warning" title="Checkpoint">
          Before moving on, you should be able to:
          <ul>
            <li>Execute the db+4 → f+4 frame trap without thinking</li>
            <li>Transition into ZEN from at least 3 different moves</li>
            <li>Catch sidesteps with b,f+2 series</li>
            <li>Maintain wall pressure for 15+ seconds</li>
          </ul>
          If any of these feel shaky, go back and drill more. Execution must be automatic 
          before you can focus on reading opponents.
        </TipBox>
      </Section>
    </Chapter>
  )
}
