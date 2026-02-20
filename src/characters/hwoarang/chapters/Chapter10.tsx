import { Chapter, Section } from '../../../components/guide'
import { ExecutionBox, DrillMode, SkillCheck, KeyConcept, TipBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="The Master's Toolkit"
      intro="Everything up to this point makes you dangerous. This chapter makes you terrifying. JFSR, blue spark 3~4, fox step, power crush cancel — these are the tools that separate good Hwoarang players from great ones. None of them are required to win. All of them multiply your effectiveness when you can execute them."
      hasPrevious
      onPrevious={() => goToChapter(9)}
    >
      <Section title="JFSR: The Just Frame Skyrocket">
        <p>
          You met JFSR in Chapter 5. Now you master it. f,n,df+4 is a safe mid launcher at -8 on
          block, i16 startup, Tornado on hit. When you can do this consistently, your neutral game
          transforms — the opponent can never feel safe at range 2 again.
        </p>

        <ExecutionBox title="JFSR Input Breakdown">
          <p>The input is <strong>f,n,df+4</strong> — a crouch dash into 4.</p>
          <ol>
            <li><strong>f</strong> — Tap forward once. This starts the crouch dash.</li>
            <li><strong>n</strong> — Return to neutral. This is the "just frame" part — you need a clean neutral between the forward tap and the diagonal.</li>
            <li><strong>df</strong> — Press down-forward. This completes the crouch dash motion.</li>
            <li><strong>4</strong> — Press 4 during the df input. The timing must be precise — too early gives nothing, too late gives a generic crouch dash move.</li>
          </ol>
          <p>
            The motion feels like a Mishima crouch dash (f,n,df) but with 4 instead of 2. If you've
            ever done EWGF or electric with Kazuya, the motion is similar. If not, think of it as:
            forward, let go, down-forward+4 in one fluid motion.
          </p>
          <p><strong>Common mistakes:</strong></p>
          <ul>
            <li>Holding forward too long — you need a clean neutral input</li>
            <li>Pressing 4 too late — you get a generic crouch dash kick instead</li>
            <li>Pressing 4 before df — you get a standing 4 or nothing</li>
            <li>Not committing to the forward motion — the crouch dash needs forward momentum</li>
          </ul>
        </ExecutionBox>

        <DrillMode
          title="JFSR Execution Drill"
          objective="Build the muscle memory for JFSR in stages. Don't move to the next step until the current one is consistent."
          steps={[
            {
              instruction: 'Crouch Dash Only',
              detail: 'Do f,n,df without pressing any button. Watch your character crouch dash forward. Get comfortable with the motion before adding the button.',
              targetReps: 20,
            },
            {
              instruction: 'Slow JFSR',
              detail: 'f,n,df+4 at slow speed. Don\'t worry about consistency — just find the timing where the Skyrocket comes out. You\'ll see the Tornado spin on success.',
              targetReps: 10,
            },
            {
              instruction: 'Standing JFSR',
              detail: 'From standing LFF, do JFSR cleanly. Aim for 3 out of 5 success rate before moving on.',
              targetReps: 20,
            },
            {
              instruction: 'Moving JFSR',
              detail: 'Backdash once, then JFSR. Sidestep, then JFSR. Get comfortable doing it from movement, not just standing still.',
              targetReps: 20,
            },
            {
              instruction: 'Whiff Punish JFSR',
              detail: 'Record the dummy doing a whiffable move. Backdash to make it whiff, then punish with JFSR. This is the real application.',
              targetReps: 10,
            },
          ]}
        />

        <TipBox variant="tip" title="JFSR From RFF">
          JFSR is available from both LFF and RFF. From RFF, the input is the same (f,n,df+4). This
          means mid-loop, if you're in RFF and see a whiff, JFSR is available. Practice it from RFF
          specifically — during loops you're often in RFF and the whiff punish opportunity appears there.
        </TipBox>
      </Section>

      <Section title="Blue Spark 3~4">
        <p>
          You've seen [3~4] throughout this guide — in RFS 3~4 (Flying Eagle), RFF [3~4] (Backlash),
          and in combos. The just-frame version (pressing 3 for exactly one frame, then 4) gives a
          blue spark, more damage, and better frame data.
        </p>

        <ExecutionBox title="Just Frame 3~4">
          <p>The input: press <strong>3</strong> for exactly <strong>one frame</strong>, then immediately press <strong>4</strong>.</p>
          <p>
            In practice, you need to press 3 and 4 almost simultaneously but with 3 very slightly
            before 4. Think of it as a slide from 3 to 4 with your fingers — not two distinct
            button presses.
          </p>
          <p><strong>From RFS (RFS [3~4]):</strong></p>
          <ul>
            <li>Normal RFS 3~4: -3 on block, mid-mid, low crushes</li>
            <li>Blue spark RFS [3~4]: <strong>+1 on block</strong> instead of -3, more damage</li>
            <li>The +1 on block difference is massive — it means you stay plus and can continue pressure</li>
          </ul>
          <p><strong>From RFF (RFF [3~4] / Backlash):</strong></p>
          <ul>
            <li>Normal: +4~+7 on block, power crush, homing, high</li>
            <li>Blue spark: same properties but <strong>more damage and slightly more plus</strong></li>
            <li>The execution here is less critical since Backlash is already plus on block</li>
          </ul>
          <p><strong>In combos:</strong></p>
          <ul>
            <li>Blue spark [3~4] after f+4 in combos gives <strong>5-8 more damage</strong> than normal 3~4</li>
            <li>Over a full combo, this adds up to a significant damage increase</li>
            <li>Practice the just frame in combos separately — the timing is different mid-juggle</li>
          </ul>
        </ExecutionBox>
      </Section>

      <Section title="Fox Step">
        <ExecutionBox title="Fox Step (3+4 → Backdash)">
          <p>The input: <strong>3+4 → b,b</strong> (switch to RFF, then immediately backdash).</p>
          <p>
            Fox step is a movement technique, not a move. You switch to RFF with 3+4 and immediately
            backdash. Because the RFF backdash has different properties than LFF backdash, you cover
            distance quickly and can whiff punish with RFF tools.
          </p>
          <p><strong>Why it matters:</strong></p>
          <ul>
            <li>Creates space faster than a normal backdash</li>
            <li>Ends in RFF, giving you access to RFF b+2 (+4~+5 on block), RFF [3~4] (Backlash), and RFF df+3 (homing heat engager)</li>
            <li>The opponent sees the stance switch and might react, creating openings</li>
            <li>Advanced players use fox step to bait whiffs and punish with JFSR from RFF</li>
          </ul>
          <p><strong>How to practice:</strong></p>
          <ol>
            <li>3+4 → b,b at standing. Get the rhythm of switching and immediately moving back.</li>
            <li>3+4 → b,b → RFF b+2. The poke should come out cleanly after the backstep.</li>
            <li>3+4 → b,b → JFSR. The ultimate punish sequence — step back, bait a whiff, launch.</li>
          </ol>
        </ExecutionBox>
      </Section>

      <Section title="Power Crush Cancel">
        <ExecutionBox title="df+3~F (Power Crush Cancel)">
          <p>The input: <strong>df+3 then immediately press F</strong> to cancel into LFS.</p>
          <p>
            df+3 is the first hit of df+3,4 (your power crush). Normally you'd press df+3,4 for
            the full string. But if you press df+3 alone and cancel with F, you get just the first
            hit and transition into LFS. The first hit absorbs attacks (power crush property) and
            the LFS transition gives you stance options.
          </p>
          <p><strong>Applications:</strong></p>
          <ul>
            <li>Absorb an attack and immediately enter LFS for d+3,4 or LFS f+3 heat engage</li>
            <li>Use it as a frame trap into LFS — the power crush property makes it safe against mashers</li>
            <li>At the wall, absorbing an attack into LFS pressure is devastating</li>
          </ul>
          <p><strong>The risk:</strong> df+3 alone is minus on block. You're entering LFS (can't block)
          while minus. Only use this when the power crush property absorbs an attack, or when the
          opponent is respecting enough that the minus frames don't matter.</p>
        </ExecutionBox>
      </Section>

      <Section title="Final Skill Check">
        <p>
          If you've worked through all ten chapters, you've built a complete Hwoarang. This skill
          check confirms you have all the tools. You don't need to master every item — but you
          should be comfortable with at least 8 out of 12.
        </p>

        <SkillCheck
          title="The Complete Hwoarang"
          subtitle="Can you do all of these in Practice Mode?"
          skills={[
            { id: 'loop', skill: 'd+3,4 → RFS 2 loop (3+ cycles without dropping)', description: 'The fundamental. If nothing else, this should be automatic.' },
            { id: 'rfs-menu', skill: 'Use 4+ different RFS options after d+3,4', description: 'RFS f+4, RFS 2, RFS df+4, RFS d+4,3, RFS 4,3, RFS 3~4 — you should be comfortable choosing any of them.' },
            { id: 'full-cycle', skill: 'Full 4-stance cycle (LFF → RFS → RFF → LFS → back)', description: 'Flow through all four stances without breaking the chain.' },
            { id: 'punish-10', skill: 'Punish a -10 move with 1,2,4 → RFS pressure', description: 'Turn punishment into your loop system.' },
            { id: 'punish-ws', skill: 'Punish a -12 low with ws+1,4 → RFS pressure', description: 'The Season 2 crouching punish that enters your loops.' },
            { id: 'df2-combo', skill: 'df+2 → full combo (standard route)', description: 'Convert your safe launcher into damage.' },
            { id: 'whiff-b3', skill: 'Backdash → b+3 whiff punish at range 3', description: 'The patient game that opponents don\'t expect.' },
            { id: 'heat-engage', skill: 'Heat engage mid-loop (RFS b+3 or LFS f+3)', description: 'Activate heat from inside your pressure, not just from neutral.' },
            { id: 'heat-rfs', skill: 'Use RFS f+4,4 and RFS d+4,3,4 in heat', description: 'Your heat-enhanced options — the i8 launcher and the natural combo hell sweep.' },
            { id: 'adapt', skill: 'Switch entry point when d+3,4 is downloaded', description: 'Use f+2 → RFF, db+4~F, or punishment to enter stances instead.' },
            { id: 'jfsr', skill: 'JFSR from standing (3 out of 5 success rate)', description: 'The just frame that transforms your neutral game.' },
            { id: 'blue-spark', skill: 'Blue spark [3~4] in combos', description: 'The just frame that maximizes your combo damage.' },
          ]}
          requiredToPass={8}
        />

        <KeyConcept title="What Comes Next" icon="🏆">
          <p>
            Hwoarang is a character that rewards thousands of hours. You now have the tools,
            the understanding, and the practice structure. From here, improvement comes from:
          </p>
          <ul>
            <li><strong>Match experience:</strong> Take everything into ranked. The real learning starts when you face opponents who fight back. Every loss teaches you something if you're paying attention.</li>
            <li><strong>Execution refinement:</strong> JFSR and blue spark get more consistent with time. Don't force them — let them develop naturally as your hands learn the motions.</li>
            <li><strong>Matchup knowledge:</strong> Learn what to punish from each character. Your punishment system (Chapter 4) is only as good as your knowledge of what's unsafe.</li>
            <li><strong>Pattern recognition:</strong> Over time, you'll start reading opponents faster. You'll see the duck before it happens. You'll feel the sidestep. You'll know when to power crush cancel and when to run the loop one more time.</li>
          </ul>
          <p>
            The best Hwoarang players never stop learning. The stance system is deep enough that
            new options and transitions reveal themselves years into playing. That depth is the
            reward — and it's why Hwoarang players stay loyal to the character.
          </p>
        </KeyConcept>

        <Collapsible title="Resources">
          <ul>
            <li><strong>Frame data:</strong> TekkenDocs (tekkendocs.com/t8/hwoarang) — always updated for the current season</li>
            <li><strong>Match VODs:</strong> Watch high-level Hwoarang players and study their entry point choices, loop variations, and when they choose to stop pressing</li>
            <li><strong>Practice routine:</strong> 10 minutes of JFSR, 10 minutes of loop variations, 10 minutes of punishment drills. Do this before ranked sessions to warm up your hands and your decision-making.</li>
          </ul>
        </Collapsible>
      </Section>
    </Chapter>
  )
}
