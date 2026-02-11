import { Chapter, Section } from '../../../components/guide'
import {
  KeyConcept,
  TipBox,
  PracticeBox,
  Flowchart,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="The Complete Eddy"
      intro="You have every tool. Now learn to use them together. This chapter is about the flow of a real round — how decisions chain, how you adapt mid-match, and how to think about the game at a higher level than move selection."
      hasPrevious={true}
      onPrevious={() => goToChapter(10)}
    >
      <Section title="The Round Lifecycle">
        <p>
          An Eddy round has a natural rhythm. Understanding where you are in this rhythm tells
          you what to do next.
        </p>

        <Flowchart
          title="The Round Arc"
          nodes={[
            { type: 'start', label: 'Round Start — Mandinga 0, No Heat' },
            { type: 'decision', label: 'Opening: Establish Respect', branches: [
              { label: 'Opponent is passive', action: 'Approach with WR 3 or f,f+3' },
              { label: 'Opponent rushes in', action: 'Check with b+1, d+3, or SS 3+4' },
            ]},
            { type: 'decision', label: 'Mid-Round: Build Mandinga', branches: [
              { label: 'Land RLX 3,3 or combo db+4,4', action: 'Mandinga level 1 → HSP 50/50 unlocked' },
              { label: 'Get heat via RLX 4,3', action: 'Heat + free Mandinga level' },
            ]},
            { type: 'decision', label: 'Late Round: Convert Advantage', branches: [
              { label: 'Life lead', action: 'Chip safely, run timer, don\'t gamble' },
              { label: 'Behind', action: 'Go for the 50/50s, use heat aggressively' },
            ]},
            { type: 'end', label: 'Close the Round' },
          ]}
        />

        <h3>Phase 1: The Opening (Round Start → First Knockdown)</h3>
        <p>
          Don't sprint in. Eddy's round-start distance is awkward — too far for most pokes,
          close enough that the opponent can challenge your approaches. Start with information
          gathering:
        </p>
        <ul>
          <li><strong>Dash block</strong> — close distance while blocking. See what they do.</li>
          <li><strong>WR 3</strong> — your safest approach. +8 even if blocked. Tests their reaction.</li>
          <li><strong><code>df+2</code></strong> — checks their advance and creates space if they rush you.</li>
          <li><strong><code>b+1</code></strong> — if they sidestep your first WR 3, this catches them.</li>
        </ul>
        <p>
          The goal of phase 1 is simple: get into stance with plus frames and land your first
          RLX 3,3 for Mandinga level 1. Everything else is secondary.
        </p>

        <h3>Phase 2: The Engine (Mandinga 1 → Heat)</h3>
        <p>
          With Mandinga level 1, HSP transforms. Now you have a real 50/50 from both stances.
          This is where Eddy comes alive:
        </p>
        <ul>
          <li><strong>HSP pressure</strong> — HSP b+4 (+7 mid) vs HSP 3+4 (low). Auto low parry active.</li>
          <li><strong>RLX pressure</strong> — RLX 3,3 (hell sweep) vs RLX 4,3 (mid heat engager).</li>
          <li><strong>Natural heat</strong> — if RLX 4,3 connects, you're in heat with Mandinga level 2.</li>
        </ul>
        <p>
          End every combo with <code>db+4,4</code> to keep building Mandinga. By mid-round, you
          should have level 1 at minimum.
        </p>

        <h3>Phase 3: The Kill (Heat + Mandinga → Round End)</h3>
        <p>
          In heat with Mandinga level 2, Eddy is at peak power. <code>H.3+4</code> is +9 into
          HSP with full Mandinga options. HSP b+4 now knocks down and wall splats. HSP 3+4
          floor breaks. The opponent has to guess correctly multiple times to survive.
        </p>
        <p>
          Don't get greedy. If you have a life lead and heat pressure, you don't need to go for
          risky 50/50s. Chip them out with plus-on-block moves and heat chip damage. If you're
          behind, that's when you go all-in on the mixups.
        </p>
      </Section>

      <Section title="The Wall Game">
        <KeyConcept title="Wall = Win" icon="🧱">
          <p>
            Eddy is devastating at the wall. Here's why:
          </p>
          <ul>
            <li><strong>WR 3</strong> wall splats on hit — approach that ends rounds at the wall.</li>
            <li><strong>RLX 1+2</strong> wall splats — safe mid from RLX that converts into wall combos.</li>
            <li><strong><code>df+1,3</code></strong> wall splats and tornadoes — 13-frame punishment at the wall is a death sentence.</li>
            <li><strong>HSP b+4 (MND 2)</strong> wall splats — Mandinga mid at the wall is game over.</li>
            <li><strong>Wall combos</strong> — <code>b+2,3,3</code> or the Mandinga route for 50+ damage.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            <strong>Carry them there.</strong> Use <code>4,4</code> and <code>uf+3+4</code> as combo enders
            for wall carry when you're mid-stage. Use <code>f+3+4</code> to break walls for stage
            transitions. And use <code>u+1+2</code> or <code>f,f+3+4</code> for floor breaks on
            applicable stages.
          </p>
        </KeyConcept>

        <h3>Wall Pressure</h3>
        <p>
          At the wall, Eddy's game compresses. The opponent can't backdash to escape your linear
          approaches. This neutralizes Eddy's biggest weakness. At the wall:
        </p>
        <ul>
          <li><code>f,f+3</code> is safer — the opponent can't step it easily with their back to the wall.</li>
          <li>HSP pressure is stronger — they can't retreat from the 50/50.</li>
          <li>Every hit has extra damage potential — wall splats from multiple moves.</li>
          <li>Heat pressure with <code>H.3+4</code> is nearly inescapable — +9 into HSP at the wall with Mandinga is the strongest position in Eddy's game.</li>
        </ul>
      </Section>

      <Section title="Adapting to Opponents">
        <KeyConcept title="Read and React" icon="🧠">
          <p>
            Eddy has no autopilot. The same string of moves won't work against every opponent.
            Here's how to adapt:
          </p>
          <ul>
            <li><strong>They sidestep everything</strong> → Switch to <code>b+1</code>, <code>qcb+4</code>, and <code>uf+4</code>. Re-establish linear pressure once they stop stepping.</li>
            <li><strong>They duck your throws</strong> → Punish with HSP 4 (mid) or HSP 1+2 (power crush mid). The throw threat still forces respect — you just need to mix it less.</li>
            <li><strong>They jab float your stances</strong> → Only enter stances with earned plus frames. Never enter HSP at negative. Use <code>d+3+4</code> to enter RLX from a distance where their jab won't reach.</li>
            <li><strong>They block your lows consistently</strong> → They're being defensive. Abuse your mids and throws. RLX 1+2 (safe mid), HSP throw (unbreakable), <code>df+2</code> (space control). Make them afraid to crouch, then the lows work again.</li>
            <li><strong>They punish your lows hard</strong> → Reduce low frequency, increase chip lows (<code>d+4</code>, <code>SS 4</code>). Use the big lows only with plus frames where they're harder to block.</li>
            <li><strong>They press through your pressure</strong> → Let them. HSP 4 at +8 counter hits anything they press. <code>b+3+4</code> power crush absorbs their aggression. <code>d+3</code> CH gives guaranteed follow-up.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Stage Awareness">
        <p>
          Eddy's game changes based on the stage. Pay attention to:
        </p>
        <ul>
          <li><strong>Walls:</strong> Prioritize wall carry in combos when you're mid-stage. Eddy's wall game is elite — getting there is worth sacrificing some combo damage.</li>
          <li><strong>Floor breaks:</strong> On stages with breakable floors, HSP 3+4 at MND level 2 breaks the floor for a combo. <code>u+1+2</code> and <code>f,f+3+4</code> also floor break. Stage transitions mean extra damage.</li>
          <li><strong>Wall breaks:</strong> <code>f+3+4</code> breaks walls. On stages with multiple rooms, breaking walls can reset positioning in your favor.</li>
          <li><strong>Infinite stages:</strong> On stages with no walls, your wall game is gone. Focus on raw combo damage (end with <code>db+4,4</code> for Mandinga instead of wall carry). Your 50/50 game still works — you just won't get the wall bonus.</li>
          <li><strong>Balcony breaks:</strong> Some stages have balcony breaks. A well-timed combo ender can send the opponent off the edge for massive damage. Check which moves break balconies in practice mode.</li>
        </ul>
      </Section>

      <Section title="The Growth Path">
        <p>
          This guide gave you the foundation. Here's how to keep improving:
        </p>

        <h3>Immediate Goals</h3>
        <ul>
          <li>Combo consistency — land your staple combos 9 out of 10 times in practice</li>
          <li>Punishment accuracy — punish at the correct level every time</li>
          <li>Natural Mandinga building — reach level 1 by mid-round without thinking about it</li>
          <li>Stance transitions — flow between HSP and RLX without hesitation</li>
        </ul>

        <h3>Intermediate Goals</h3>
        <ul>
          <li>Counter hit confirms — react to CH <code>b+3,3</code>, CH <code>4,4</code>, CH <code>HSP 4</code></li>
          <li>Whiff punishment — backdash and launch with <code>df+3</code> consistently</li>
          <li>Opponent-specific adaptation — know what works against specific characters and ranks</li>
          <li>Wall carry optimization — choose enders based on wall distance</li>
        </ul>

        <h3>Advanced Goals</h3>
        <ul>
          <li>Hit confirmable RLX 4,3 — only commit to the second hit when the first connects</li>
          <li>Mandinga timing optimization — heat activation at level 1 for instant level 2</li>
          <li>Movement mastery — Korean backdash, iWR 3 from close range, sidestep launch</li>
          <li>Mental game — conditioning opponents to block wrong, varying your timing, reading habits</li>
        </ul>

        <TipBox variant="tip" title="The Real Skill">
          The most important skill in Tekken isn't execution. It's <strong>decision-making</strong>.
          A player who throws the right move at the wrong time will always lose to a player who
          throws the right move at the right time — even if the second player's combos are shorter
          and their execution is rougher. Focus on understanding <em>when</em> to do things, not
          just <em>how</em> to do things. The "how" becomes muscle memory. The "when" is what
          separates ranks.
        </TipBox>
      </Section>

      <Section title="The Complete Flywheel">
        <p>
          Let's end where we started. Eddy Gordo is a cycle:
        </p>
        <ol>
          <li><strong>Approach</strong> — WR 3, <code>f,f+3</code>, <code>FC df+3</code></li>
          <li><strong>Enter stance</strong> — HSP at +8, RLX at +6</li>
          <li><strong>Force the 50/50</strong> — RLX 3,3 vs RLX 4,3, HSP b+4 vs HSP 3+4</li>
          <li><strong>Build Mandinga</strong> — RLX 3,3, HSP 2,3, <code>db+4,4</code> enders</li>
          <li><strong>Stances get deadlier</strong> — Mandinga unlocks HSP low, auto low parry, powered-up moves</li>
          <li><strong>Activate heat</strong> — RLX 4,3 → heat + Mandinga level → peak power</li>
          <li><strong>Close the round</strong> — <code>H.3+4</code> into HSP Mandinga 50/50, heat chip, heat smash</li>
        </ol>
        <p>
          Every piece you learned — neutral tools, stance entries, the 50/50, Mandinga, combos,
          punishment, heat, lows, defense — fits into this cycle. The cycle doesn't always run
          perfectly. Opponents disrupt it. You adapt. But the skeleton is always the same:
          get in, get plus, force the guess, build power, convert.
        </p>
        <p>
          That's Eddy Gordo. The roda never stops spinning.
        </p>

        <PracticeBox
          title="The Full Round"
          setup="Versus Mode or Ranked. Play real matches and focus on the round lifecycle."
          tasks={[
            { id: 'eddy-final-mnd1', text: 'Reach Mandinga level 1 by mid-round', detail: 'Land RLX 3,3 or end a combo with db+4,4. Check the Mandinga icon under your health bar.', type: 'toggle' },
            { id: 'eddy-final-heat', text: 'Activate heat via RLX 4,3 with Mandinga', detail: 'Build Mandinga first, then land RLX 4,3 for heat. You should be at MND 2 with heat active.', type: 'toggle' },
            { id: 'eddy-final-h34', text: 'Use H.3+4 into HSP Mandinga pressure', detail: 'In heat with MND, press H.3+4. On block, you\'re +9 in HSP. Use HSP b+4 or HSP 3+4 for the 50/50.', type: 'toggle' },
            { id: 'eddy-final-wall', text: 'Carry an opponent to the wall and close the round', detail: 'Use wall carry combo enders, then run wall pressure. Feel how Eddy\'s linearity weakness disappears at the wall.', type: 'toggle' },
            { id: 'eddy-final-adapt', text: 'Identify one opponent habit and exploit it', detail: 'Do they sidestep? Track them. Do they block low? Throw them. Do they press? Counter hit them. One adaptation per match.', type: 'toggle' },
          ]}
        />
      </Section>
    </Chapter>
  )
}
