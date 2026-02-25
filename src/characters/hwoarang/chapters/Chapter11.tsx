import { Chapter, Section } from '../../../components/guide'
import { KeyConcept, TipBox, Collapsible, Flowchart } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Match Ready"
      intro="Everything in one place. No drills, no explanations — just what you need to remember before you queue up. Scan the section that matches where you are in the round."
      hasPrevious
      onPrevious={() => goToChapter(10)}
    >
      <Section title="Your Win Condition">
        <p>
          You win by <strong>accumulating damage through pressure loops that never stop</strong>.
          You don't have one explosive move. You have twenty small decisions that add up. Get in,
          start loops, force the opponent to guess, and cash in when they guess wrong. When they
          adapt, switch your entry point and do it again.
        </p>
      </Section>

      <Section title="At Range — Patient Game">
        <KeyConcept title="Range 3+" icon="🎯">
          <ul>
            <li><strong>b+3</strong> — i16 whiff punisher, Tornado on hit. Backdash, wait for a whiff, punish. One of the best whiff punishers in Tekken 8.</li>
            <li><strong>JFSR (f,n,df+4)</strong> — i16 safe mid launcher (-8 on block). If you can hit it, this and b+3 make your long range terrifying.</li>
            <li><strong>Be patient.</strong> Don't run forward into pokes. Let them come to you, then punish.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Approaching — Getting In">
        <KeyConcept title="Range 2: Close the Gap" icon="🦶">
          <ul>
            <li><strong>f,f+4</strong> — High, i18, +5 on block, heat engager. Your fastest way in. Gets ducked at higher levels.</li>
            <li><strong>f,f+3</strong> — Mid, i22, +6 on block, chip damage. Can't be ducked. Slower but safe.</li>
            <li><strong>df+1</strong> — i13 safe mid poke (-1 block). Check the opponent, establish respect. On hit (+6), go into d+3,4.</li>
            <li><strong>f+2</strong> — i16 mid poke, -2 on block, +9 on hit into RFF. More rewarding than df+1 but slower.</li>
            <li><strong>df+4</strong> — Homing mid, -8 on block, +8 on hit into RFF. Use when they start sidestepping.</li>
            <li><strong>b+4</strong> — i13 high, CH launcher. Throw it when you expect them to press a button.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Pattern">
          Poke (df+1 or f+2) to check them → Approach (f,f+4 or f,f+3) to close distance → Start loops.
        </TipBox>
      </Section>

      <Section title="The Loops — Your Core Pressure">
        <Collapsible title="d+3,4 Core Loop" defaultOpen>
          <p>
            <strong>d+3,4 → RFS 2 → d+3,4 → RFS 2 → ...</strong>
          </p>
          <p>d+3,4 puts you in RFS (+8 on block). RFS 2 puts you in RFF (+5 on block). From RFF, d+3,4 again. Infinite loop.</p>
          <p>Second hit of d+3,4 is a <strong>high</strong> — can be ducked and launched. That's the built-in risk.</p>
        </Collapsible>

        <Collapsible title="Full Stance Cycle">
          <p>
            <strong>d+3,4 → RFS 2 → RFF f+3 → LFS f+3 → LFS d+3,4 → back to RFS</strong>
          </p>
          <p>Visits all four stances. RFF f+3 is a high (+12 into LFS). LFS f+3 is a mid heat engager (+4 on block, stays LFS).</p>
        </Collapsible>

        <Collapsible title="RFS 4,3 Path">
          <p>
            <strong>d+3,4 → RFS 4,3 → LFS f+3 or LFS d+3,4</strong>
          </p>
          <p>RFS 4,3 is a safe mid-mid (+4 on block into LFS). All-mid path — can't be ducked. Low crushes d+1 attempts.</p>
        </Collapsible>
      </Section>

      <Section title="The RFS Menu — What to Do After d+3,4">
        <Flowchart
          title="In RFS at +8 — Pick Your Option"
          nodes={[
            { type: 'start', label: 'd+3,4 blocked → RFS at +8~+10' },
            { type: 'decision', label: 'What is the opponent doing?', branches: [
              { label: 'Pressing buttons', action: 'RFS f+4 (i8) — uninterruptible, beats everything' },
              { label: 'Stand blocking', action: 'RFS d+4,3 (hell sweep) or d+3,4 again to re-loop' },
              { label: 'Ducking', action: 'RFS df+4 (mid, +1 block, CH launcher) or RFS 4,3 (mid-mid)' },
              { label: 'Sidestepping', action: 'RFS 4,3 (tracks well) or wait and whiff punish' },
            ]},
            { type: 'end', label: 'After any option → transition back to RFF or LFS → loop continues' },
          ]}
        />

        <Collapsible title="Quick RFS Reference">
          <ul>
            <li><strong>RFS f+4</strong> — i8, fastest move in the game from this position. Beats mashers. Stays in RFS.</li>
            <li><strong>RFS 2</strong> — i13 high, +5 on block, transitions to RFF. The loop reset.</li>
            <li><strong>RFS df+4</strong> — i17 mid, +1 on block, CH launcher. Your mid check.</li>
            <li><strong>RFS 4,3</strong> — i14 mid-mid, +4 on block into LFS. Safe, low crushes. Wall splats on CH.</li>
            <li><strong>RFS d+4,3</strong> — i20 low-high (hell sweep). Only when they're standing still. In heat: full 3-hit natural combo.</li>
            <li><strong>RFS 3~4</strong> — i16 mid-mid, low crushes. Blue spark version is +1 on block.</li>
            <li><strong>RFS b+3</strong> — i16 safe mid heat engager (-9 on block). Cash out with heat from RFS.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Key Connectors Between Stances">
        <Collapsible title="How to Move Between Stances" defaultOpen>
          <ul>
            <li><strong>RFF f+3</strong> — High, +12~+15 into LFS. The golden connector. Duckable but massively plus.</li>
            <li><strong>RFF b+2</strong> — Mid, +4~+5 on block, stays in RFF. Safe alternative when they duck RFF f+3.</li>
            <li><strong>RFF 3,4</strong> — Mid-high, +10 into RFS. Like d+3,4 but starts with a mid.</li>
            <li><strong>LFS f+3</strong> — Mid heat engager, +4 on block, stays in LFS. The reason LFS is scary.</li>
            <li><strong>LFS 1</strong> — High jab, +5 on block. Your "I don't know what to do" button in LFS.</li>
            <li><strong>LFS d+4</strong> — Low, +4 on hit into RFF. Complements LFS f+3 as a low/mid mix.</li>
            <li><strong>LFS d+3,4</strong> — Same as from LFF. Re-enters RFS to restart the whole cycle.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Punishment — Turning Defense Into Offense">
        <Collapsible title="Standing Punishment" defaultOpen>
          <ul>
            <li><strong>10f safe:</strong> 2,f+3 (-8 on block, no risk)</li>
            <li><strong>10f into RFS:</strong> 1,2,4 (-2 on block → RFS, full loop available)</li>
            <li><strong>10f into LFS:</strong> 1,2,3 (-12 on block → LFS, riskier)</li>
            <li><strong>11f:</strong> 4,3 (-6, cancel to LFS with F)</li>
            <li><strong>13f:</strong> df+1,3 (-2 → LFS at +6, your best pressure punish)</li>
            <li><strong>13f heat:</strong> df+3+4 (-14, heat engager — only as guaranteed punish)</li>
            <li><strong>14f:</strong> uf+3+4,4 (-10 → RFF at +7)</li>
            <li><strong>15f:</strong> df+2 (-7, safe launcher → full combo)</li>
            <li><strong>16f:</strong> b+3 (-19, Tornado launcher — max damage)</li>
          </ul>
        </Collapsible>

        <Collapsible title="Crouching Punishment" defaultOpen>
          <ul>
            <li><strong>11f ws:</strong> ws+4,4 (-9 → RFF at +4)</li>
            <li><strong>12f ws:</strong> ws+1,4 (0 on block → RFS at +8 — same as d+3,4 on block)</li>
            <li><strong>14f ws:</strong> ws+3 → uf+3+4,4 guaranteed (+14c on hit)</li>
            <li><strong>15f ws:</strong> ws+2,3 (+3 on block, Tornado launcher → full combo)</li>
          </ul>
        </Collapsible>

        <TipBox variant="tip" title="Remember">
          Every punish transitions into a stance. You're never returning to neutral after a punish — you're starting a loop.
        </TipBox>
      </Section>

      <Section title="Combos — Quick Reference">
        <Collapsible title="Standard Combos" defaultOpen>
          <ul>
            <li><strong>df+2:</strong> df+2 → f+4 → RFS [3~4] → uf+3+4~F → LFS uf+4 T! → uf+3,4,3 (~65)</li>
            <li><strong>b+3:</strong> b+3 T! → 3+4 → RFF f+3 → LFS f+3 → LFS 3,f+4 (~60)</li>
            <li><strong>JFSR:</strong> JFSR → 3+4 → RFF [3~4] → f+4 → RFS [3~4] → d+4,4 T! → uf+3,4,3 (~72)</li>
            <li><strong>u+3+4:</strong> u+3+4 → db+4~F → RFS [3~4] → uf+3+4~F → LFS uf+4 T! → uf+3,4,3 (~63)</li>
            <li><strong>Low parry:</strong> LP → f+4 → RFS [3~4] → uf+3+4~F → uf+3+4~F → uf+3+4 (~50)</li>
          </ul>
        </Collapsible>

        <Collapsible title="Counter-Hit Combos">
          <ul>
            <li><strong>CH b+4:</strong> CH b+4 → RFF [3~4] → uf+3+4~F → LFS uf+4 T! → uf+3,4,3 (~62)</li>
            <li><strong>CH RFS df+4:</strong> Pick up with f+4 → standard screw sequence (~60)</li>
            <li><strong>CH d+4,4:</strong> u+3 → LFS 1 → u+3 → uf+3+4~F → uf+3+4~F → uf+3+4 (~58)</li>
          </ul>
        </Collapsible>

        <Collapsible title="Wall Combos">
          <ul>
            <li><strong>Simple:</strong> SS 3,3 → LFS 3,2</li>
            <li><strong>Stance chain:</strong> RFF f+3 → LFS f+3 → LFS 3,f+4</li>
            <li><strong>With Tornado:</strong> f+4 → RFS uf+4 T! → RFF [3~4] → b+3</li>
          </ul>
        </Collapsible>

        <Collapsible title="Combo Enders by Situation">
          <ul>
            <li><strong>Max damage:</strong> uf+3,4,3</li>
            <li><strong>Wall carry:</strong> u+3 → LFS uf+3+4, uf+3+4</li>
            <li><strong>Wall break:</strong> f,f+4 or df+3,4</li>
            <li><strong>Floor break:</strong> f,f+3 or u+3+4</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Heat — When and How">
        <KeyConcept title="Best Times to Activate" icon="🔥">
          <ul>
            <li><strong>Wall pressure</strong> — Chip damage prevents blocking, loops become a death trap.</li>
            <li><strong>Mid-loop with momentum</strong> — RFS b+3 heat engage from inside your pressure.</li>
            <li><strong>Guaranteed punishment</strong> — df+3+4 at 13f, zero risk.</li>
            <li><strong>Closing a round</strong> — At 30 health or less, chip damage alone might kill.</li>
          </ul>
        </KeyConcept>

        <Collapsible title="Heat Engagers by Situation" defaultOpen>
          <ul>
            <li><strong>Neutral/Approaching:</strong> f,f+4 (high, +5 on block)</li>
            <li><strong>In RFS:</strong> RFS b+3 (safe mid, -9, best heat dash damage)</li>
            <li><strong>In LFS:</strong> LFS f+3 (mid, -12 but hard to punish from stance)</li>
            <li><strong>In RFF:</strong> RFF df+3 (homing mid, +1 on block)</li>
            <li><strong>Punishment:</strong> df+3+4 (i13, guaranteed from -13 moves)</li>
          </ul>
        </Collapsible>

        <Collapsible title="What Changes In Heat">
          <ul>
            <li><strong>RFS f+4,4</strong> becomes a <strong>natural hit launcher</strong> at 8 frames. Safe at -6. CH gives Tornado.</li>
            <li><strong>RFS d+4,3,4</strong> becomes a <strong>natural combo</strong> on hit. Hell sweep → full knockdown.</li>
            <li><strong>Every kick</strong> does chip damage through block. A full loop cycle chips ~15-20.</li>
            <li><strong>Heat Smash (2+3):</strong> 88 damage mid, +11 on block. Use to close rounds or when timer is running out.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Defense — Surviving Their Turn">
        <KeyConcept title="Your Best Defense" icon="🛡️">
          <ul>
            <li><strong>Block → punish into stances.</strong> This IS your defense. Block something unsafe, punish with 1,2,4 or ws+4,4 or ws+1,4, start your loops.</li>
            <li><strong>Backdash → b+3.</strong> Create space, wait for a whiff, punish hard.</li>
            <li><strong>Sidestep → b+4 or SS 4.</strong> Step their linear move, CH launch them.</li>
            <li><strong>Duck → ws+2,3.</strong> Read a high, Tornado launch for free (+3 on block if you're wrong on the timing).</li>
            <li><strong>Low parry → f+4 → combo.</strong> Read a low, convert into your stance system.</li>
          </ul>
        </KeyConcept>

        <Collapsible title="Panic Moves (Use Sparingly)">
          <ul>
            <li><strong>df+3,4</strong> — Power crush, mid-mid. -14 on block (launch punishable). Only on a hard read.</li>
            <li><strong>RFF [3~4] (Backlash)</strong> — Power crush, homing, +4~+7 on block, launches on hit. But it's a high and i27. Requires RFF.</li>
            <li><strong>b+1+3 / b+2+4</strong> — Punch parry. Only works against punches, 8-frame window. Very situational.</li>
          </ul>
        </Collapsible>

        <Collapsible title="Grabs (When They Turtle)">
          <ul>
            <li><strong>qcb+3</strong> — 45 damage, 1 break, floor breaks. Best command grab.</li>
            <li><strong>f+2+3</strong> — 35 damage, 1+2 break. Works from every stance.</li>
            <li>Use grabs when the opponent is blocking 5+ attacks in a row. They're not expecting it.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="When They Adapt — Quick Answers">
        <Collapsible title="They duck d+3,4" defaultOpen>
          <ul>
            <li>Use d+3 alone (just the low, no high follow-up)</li>
            <li>Switch entry: f+2 → RFF, db+4~F → RFS, 3+4 → RFF</li>
            <li>RFS df+4 or RFS 4,3 if you're already in RFS (mids beat ducking)</li>
          </ul>
        </Collapsible>

        <Collapsible title="They sidestep left" defaultOpen>
          <ul>
            <li>df+4 (homing mid → RFF)</li>
            <li>RFF df+3 (homing heat engager)</li>
            <li>d+3+4 (homing low → LFS)</li>
            <li>Slow down your transitions — stepping punishes rhythm, not moves</li>
          </ul>
        </Collapsible>

        <Collapsible title="They mash through flamingo">
          <ul>
            <li>RFS f+4 every time until they stop. i8 beats everything.</li>
            <li>Once they respect f+4, your slower options (df+4, d+4,3, 4,3) open up</li>
          </ul>
        </Collapsible>

        <Collapsible title="They power crush through flamingo">
          <ul>
            <li>Enter RFS → immediately block (press back to exit stance)</li>
            <li>Bait the power crush, block it, launch punish</li>
            <li>Their power crush is usually -14 or worse — you get more than your loop would have</li>
          </ul>
        </Collapsible>

        <Collapsible title="They have rage">
          <ul>
            <li><strong>Do NOT enter flamingo.</strong> Rage art through LFS/RFS is guaranteed death.</li>
            <li>Play neutral: df+1, f+2, b+3 whiff punish</li>
            <li>Force them to waste rage on something punishable</li>
          </ul>
        </Collapsible>

        <Collapsible title="They turtle (block everything)">
          <ul>
            <li>Grabs: qcb+3 or f+2+3</li>
            <li>Lows: RFS d+4,3, d+3+4, db+4</li>
            <li>In heat: chip damage alone can kill a turtling opponent</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Stance Quick Reference">
        <Collapsible title="LFF (Default — Can Block)" defaultOpen>
          <ul>
            <li><strong>df+1</strong> — i13 safe mid poke</li>
            <li><strong>d+3,4</strong> — Starts everything. Low-high into RFS.</li>
            <li><strong>df+2</strong> — i15 safe launcher</li>
            <li><strong>b+3</strong> — i16 whiff punisher (Tornado)</li>
            <li><strong>b+4</strong> — i13 CH launcher (high)</li>
            <li><strong>f+2</strong> — i16 mid into RFF</li>
            <li><strong>f,f+4</strong> — Approach / heat engager (high)</li>
            <li><strong>f,f+3</strong> — Safe mid approach</li>
          </ul>
        </Collapsible>

        <Collapsible title="RFF (Secondary Safe — Can Block)">
          <ul>
            <li><strong>RFF f+3</strong> — High, +12~+15 into LFS. Golden connector.</li>
            <li><strong>RFF b+2</strong> — Mid, +4~+5 on block. Safe pressure.</li>
            <li><strong>RFF 3,4</strong> — Mid-high, +10 into RFS.</li>
            <li><strong>RFF df+3</strong> — Homing mid, heat engager, +1 on block.</li>
            <li><strong>d+3,4</strong> — Same core loop entry (slightly more damage from RFF).</li>
            <li><strong>RFF [3~4]</strong> — Backlash. Power crush, homing, +4~+7 on block (HIGH).</li>
          </ul>
        </Collapsible>

        <Collapsible title="LFS (Committed — Can't Block)">
          <ul>
            <li><strong>LFS f+3</strong> — Mid heat engager, +4 on block. The scary one.</li>
            <li><strong>LFS 1</strong> — High jab, +5. Safe button when unsure.</li>
            <li><strong>LFS d+3,4</strong> — Back into RFS. Restarts the cycle.</li>
            <li><strong>LFS d+4</strong> — Low, +4 on hit into RFF. Mix with LFS f+3.</li>
          </ul>
        </Collapsible>

        <Collapsible title="RFS (Committed — Can't Block)">
          <ul>
            <li><strong>RFS f+4</strong> — i8 fastest option. Beats mashers.</li>
            <li><strong>RFS 2</strong> — +5 high into RFF. Loop reset.</li>
            <li><strong>RFS df+4</strong> — +1 mid, CH launcher. Your mid check.</li>
            <li><strong>RFS 4,3</strong> — +4 mid-mid into LFS. Safe, low crushes.</li>
            <li><strong>RFS d+4,3</strong> — Hell sweep. Only when they stand still.</li>
            <li><strong>RFS 3~4</strong> — Mid-mid, low crushes. Blue spark = +1.</li>
            <li><strong>RFS b+3</strong> — Safe mid heat engager.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="The Two Rules">
        <TipBox variant="warning" title="Before Every Round">
          <strong>Rule 1:</strong> Run the loop twice, then evaluate. Are they blocking? Run mixups.
          Are they adapting? Switch your entry or back off.
          <br /><br />
          <strong>Rule 2:</strong> Check for rage. If they have rage, do NOT enter flamingo. Play neutral
          until it's gone.
        </TipBox>
      </Section>
    </Chapter>
  )
}
