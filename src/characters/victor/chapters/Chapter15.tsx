import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter15({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={15}
      title="Complete Victor"
      intro="You've learned the tools. Now let's put it all together into a cohesive gameplan that adapts to any situation. This chapter covers mindset, adaptation, and what separates good Victor players from great ones."
      onPrevious={() => goToChapter(14)}
      nextLabel="Back to Chapter 1"
      onNext={() => goToChapter(1)}
    >
      <Section title="Victor's Complete Gameplan">
        <KeyConcept title="The Victor Philosophy" icon="🎯">
          <p>
            Victor is a <strong>patient, methodical character</strong> who controls space 
            and punishes mistakes. He's not about overwhelming opponents — he's about 
            making them pay for every error.
          </p>
          <ul>
            <li><strong>Control space</strong> with keep-out tools</li>
            <li><strong>Wait for mistakes</strong> and whiff punish</li>
            <li><strong>Pressure relentlessly</strong> once you have plus frames</li>
            <li><strong>Carry to wall</strong> for devastating IAI pressure</li>
            <li><strong>Close rounds</strong> with chip damage and mixups</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Round Start">
        <KeyConcept title="Opening Options" icon="🏁">
          <ul>
            <li><code>df+1</code> — Safe mid check, see what they do</li>
            <li><code>d+2</code> — Quick heat engager if they press</li>
            <li><code>1+2</code> — CH launcher if they approach</li>
            <li><code>db+4</code> — High crush launch if they jab</li>
            <li><code>Backdash</code> — Create space immediately</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Read Your Opponent">
          Round start tells you a lot about your opponent:
          <ul>
            <li><strong>They press buttons</strong> → Use 1+2 and db+4</li>
            <li><strong>They wait</strong> → Take space with df+1 and d+2</li>
            <li><strong>They backdash</strong> → f,f,f+2 to approach</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Neutral Game">
        <KeyConcept title="Mid-Range Gameplan" icon="📍">
          <p>At mid-range (Victor's preferred range):</p>
          <ol>
            <li><strong>Poke with df+1</strong> — See how they react</li>
            <li><strong>Check with 1+2</strong> — If they approach, CH launch</li>
            <li><strong>Chip with d+2</strong> — Zero on block, builds heat</li>
            <li><strong>f+1+2 for chip</strong> — Plus on block, huge chip</li>
            <li><strong>db+4 to catch highs</strong> — CH launches</li>
          </ol>
        </KeyConcept>

        <KeyConcept title="Close Range" icon="👊">
          <p>When you're close:</p>
          <ol>
            <li><strong>Jab strings</strong> — 1, 2,1~f, 1,2 for pressure</li>
            <li><strong>Low pokes</strong> — d+3, d+4 to open them up</li>
            <li><strong>Go for plus</strong> — f,f,f+2 on block is +2 (+5 with ~d)</li>
            <li><strong>Enter PRF</strong> — Via 2,1~f for mixups</li>
          </ol>
        </KeyConcept>

        <KeyConcept title="Long Range" icon="🏹">
          <p>When they're far:</p>
          <ol>
            <li><strong>qcf+2 projectile</strong> — Forces approach or chip</li>
            <li><strong>f,f,f+2</strong> — Approaching mid</li>
            <li><strong>b+3,1</strong> — Long range whiff punish</li>
            <li><strong>Walk forward</strong> — Take space patiently</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="When You Have Plus Frames">
        <KeyConcept title="Plus Frame Decision Tree" icon="➕">
          <p>When you're plus:</p>
          <ol>
            <li><strong>Small plus (+1 to +3)</strong> → df+1 or d+2 for another plus</li>
            <li><strong>Medium plus (+4 to +7)</strong> → ws2 or 1+2 for CH trap</li>
            <li><strong>Big plus (+8+)</strong> → Anything works, go for mixup</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The +8 Rule">
          At +8 or higher, <code>d+2</code> becomes uninterruptible AND tracks fully. 
          This is Victor's "free pressure" threshold.
        </TipBox>
      </Section>

      <Section title="Offensive Pressure">
        <KeyConcept title="Pressure Routes" icon="🔥">
          <p><strong>Standard Pressure:</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            df+1 → d+2 → 2,1~f → PRF.1 → ws2 (if +4)
          </p>

          <p><strong>Approaching Pressure:</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            f,f,f+2~d → IAI.d+2 → IAI.2 or IAI.d+1+2
          </p>

          <p><strong>Wall Pressure:</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            f+4,2~d → IAI.d+2 → IAI.2 (wall splat) / IAI.d+1+2 (low)
          </p>
        </KeyConcept>
      </Section>

      <Section title="Dealing with Opponent Patterns">
        <Collapsible title="They Press Too Much" defaultOpen>
          <ul>
            <li>Use <code>1+2</code> more — CH launches</li>
            <li><code>db+4</code> — High crush CH launcher</li>
            <li><code>1,2,1</code> — Third hit CH launches</li>
            <li>Stop at minus strings, block their attack, punish</li>
            <li>Frame trap with ws2 after plus moves</li>
          </ul>
        </Collapsible>

        <Collapsible title="They Turtle">
          <ul>
            <li>Throw game — 1+3, 2+4, uf+1+2</li>
            <li><code>PRF.1</code> — Best low, chip away</li>
            <li><code>db+4</code> — Power low threat</li>
            <li><code>f+1+2</code> — Massive chip even on block</li>
            <li>Mental stack with string extensions</li>
          </ul>
        </Collapsible>

        <Collapsible title="They Sidestep">
          <ul>
            <li><code>uf+2</code> and <code>b+4</code> — Homing moves</li>
            <li><code>d+2</code> after +8 — Full tracking</li>
            <li><code>db+4</code> — Tracks to weak side (SSR)</li>
            <li>Delay strings to catch step attempts</li>
            <li>IAI.2 tracks fully to both sides</li>
          </ul>
        </Collapsible>

        <Collapsible title="They Pressure You">
          <ul>
            <li><code>b+1+2</code> — Power crush</li>
            <li><code>1+2</code> — CH interrupt</li>
            <li>Backdash/teleport (ub,b)</li>
            <li>Block and punish</li>
            <li>Don't panic — wait for your turn</li>
          </ul>
        </Collapsible>

        <Collapsible title="They Duck Too Much">
          <ul>
            <li><code>f+4,1</code> — i14 mid-high for punish</li>
            <li><code>df+2</code> — Launch their duck</li>
            <li><code>ws1</code> — If you're in crouch</li>
            <li>Throw them more</li>
            <li>Stop using lows, condition with mids</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Round State Management">
        <KeyConcept title="Life Lead" icon="❤️">
          <p>When you have more health:</p>
          <ul>
            <li>Don't take risks — let them come to you</li>
            <li>Use keep-out: 1+2, db+4, b+1+2</li>
            <li>Chip with f+1+2 and d+2</li>
            <li>Run the clock down safely</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Health Deficit" icon="💔">
          <p>When you have less health:</p>
          <ul>
            <li>Must take risks — go for big damage</li>
            <li>db+4 and CH 1+2 for comebacks</li>
            <li>Activate heat for chip damage</li>
            <li>Push them to wall for 50/50</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Wall Position" icon="🧱">
          <p>When they're at wall:</p>
          <ul>
            <li>This is Victor's best position</li>
            <li>Carry them with combos</li>
            <li>IAI pressure after wall splat</li>
            <li>50/50 with IAI.2 (splat) / IAI.d+1+2 (low)</li>
            <li>Chip with h.u+1+2 in heat</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Matchup Considerations">
        <KeyConcept title="Victor's Strengths" icon="💪">
          <ul>
            <li>Excellent punishment (range, damage, heat engagers)</li>
            <li>Strong keep-out (1+2, db+4, b+1+2)</li>
            <li>Massive wall carry and wall pressure</li>
            <li>Safe chip damage (f+1+2, d+2)</li>
            <li>Unparryable weapon attacks</li>
            <li>Low execution ceiling</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Victor's Weaknesses" icon="⚠️">
          <ul>
            <li><strong>SSR weakness</strong> — Many moves lose to sidestep right</li>
            <li><strong>Mediocre pokes</strong> — df+1 is average at best</li>
            <li><strong>Risky lows</strong> — Most lows are launch punishable</li>
            <li><strong>Large hurtbox</strong> — Gets clipped more than most</li>
            <li><strong>Committal playstyle</strong> — Bad whiff recovery</li>
            <li><strong>No 2-break throw</strong> — Weak throw game</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="SSR Warning">
          Victor struggles against characters with good movement who know to SSR. Against 
          good players, you must use homing moves (uf+2, b+4) and tracking attacks (db+4) 
          to prevent constant stepping.
        </TipBox>
      </Section>

      <Section title="Practice Priorities">
        <KeyConcept title="Learning Path" icon="📈">
          <ol>
            <li><strong>Movement</strong> — Backdash, teleport (ub,b)</li>
            <li><strong>One combo</strong> — Universal route from any launcher</li>
            <li><strong>Punishment</strong> — 10f, 13f, 14f, 15f punishes</li>
            <li><strong>Keep-out</strong> — 1+2, db+4, b+1+2 timing</li>
            <li><strong>PRF basics</strong> — PRF.1 low, PRF.1+2 mid</li>
            <li><strong>IAI basics</strong> — IAI.2, IAI.d+1+2</li>
            <li><strong>Frame traps</strong> — db+4/PRF.1 → ws2</li>
            <li><strong>Wall combos</strong> — Standard and IAI oki setups</li>
            <li><strong>Heat management</strong> — When and how to use</li>
            <li><strong>Advanced combos</strong> — Optimized routes</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Final Words">
        <KeyConcept title="The Victor Mindset" icon="🧠">
          <p>
            Victor rewards <strong>patience, timing, and reads</strong>. You're not playing 
            to overwhelm — you're playing to punish every mistake your opponent makes.
          </p>
          <p style={{ marginTop: '12px' }}>
            Your goal is always the wall. Your combos carry far. Your IAI pressure closes 
            games. But none of that matters if you don't <strong>wait for your turn</strong>.
          </p>
          <p style={{ marginTop: '12px' }}>
            <strong>Be patient. Be precise. Be Victor.</strong>
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Keep Learning">
          This guide covers the fundamentals, but there's always more to learn. Watch high-level 
          Victor players, experiment in practice mode, and adapt to your own style. The best 
          Victor is the one that fits you.
        </TipBox>
      </Section>

      <Collapsible title="Complete Victor Cheat Sheet" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Key Moves</h4>
          <ul>
            <li><code>1+2</code> — Safe CH launcher (keep-out)</li>
            <li><code>d+2</code> — Fast heat engager (0 on block)</li>
            <li><code>f+1+2</code> — Plus on block, huge chip</li>
            <li><code>db+4</code> — Power low, CH launches</li>
            <li><code>PRF.1</code> — Best low, only -12</li>
            <li><code>f,f,f+2~d</code> — Approaching, +5 in IAI</li>
            <li><code>IAI.2</code> — Safe wall splat mid</li>
          </ul>

          <h4 style={{ color: 'var(--accent)', marginTop: '16px', marginBottom: '8px' }}>Key Combos</h4>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px' }}>
            df+2 → df+4,2 → IAI.2 T! → df+4,2 → IAI.4,2 → db+1,1~f → PRF.1+2
          </p>

          <h4 style={{ color: 'var(--accent)', marginTop: '16px', marginBottom: '8px' }}>Key Frame Traps</h4>
          <ul>
            <li><code>db+4 hit (+4 FC)</code> → ws2 (CH launch)</li>
            <li><code>ws1+2 hit (+8)</code> → d+2 (uninterruptible)</li>
            <li><code>f,f,f+2~d block (+5 IAI)</code> → IAI.d+2 → 50/50</li>
          </ul>

          <h4 style={{ color: 'var(--accent)', marginTop: '16px', marginBottom: '8px' }}>Punishment</h4>
          <ul>
            <li><strong>-10</strong>: 1,1,2</li>
            <li><strong>-12</strong>: 2,2,2 or 3,1+2</li>
            <li><strong>-13</strong>: uf+1,1 (wall splats!)</li>
            <li><strong>-14</strong>: f+4,1 (heat engager!)</li>
            <li><strong>-15</strong>: df+2 (LAUNCH)</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
