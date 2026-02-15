import { Chapter, Section } from '../../../components/guide'
import { KeyConcept, TipBox, Flowchart, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="Simpler Than You Think"
      intro="Reina has 140 moves and seven stances. Ignore that number. You need one pattern to start winning, and everything else layers on top of it."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="The Sentai Engine"
    >
      <Section title="The Pattern">
        <p>
          Go to Practice Mode right now. Set the opponent to stand guard. Do <strong>f,f+2</strong>. It hits
          their block. Now hold forward. Reina spins into Sentai stance. Now press <strong>3</strong>. A fast
          kick fires out and connects — they were too slow to interrupt.
        </p>
        <p>
          That sequence — <strong>f,f+2 → hold forward → Sentai 3</strong> — is the foundation of
          everything Reina does. It is a safe mid approach that transitions into a stance where you have
          a heat engager, a power crush, a low, an unbreakable throw, and a counter-hit launcher.
          All from one move.
        </p>
        <p>
          Now do <strong>1,1,2</strong> — her jab string. It hits. Notice she automatically enters the same
          Sentai stance, but now she's <strong>+11</strong>. Every option from the stance is uninterruptible.
          Your opponent has to guess.
        </p>
        <p>
          That's it. That's the core of Reina. Do something safe. Enter a stance. Run a mixup. Repeat.
        </p>

        <Flowchart
          title="The Core Loop"
          nodes={[
            { type: 'start', label: 'Approach with a safe move (f,f+2, 1,1,2, f+2,3)' },
            { type: 'decision', label: 'Did it hit or get blocked?', branches: [
              { label: 'On hit', action: 'Confirm into guaranteed follow-up (SEN 3)' },
              { label: 'On block', action: 'Enter Sentai stance → run mixup' },
            ]},
            { type: 'decision', label: 'What does the opponent do?', branches: [
              { label: 'They press buttons', action: 'SEN 3 trades favorably, or SEN 1,2 power crushes' },
              { label: 'They block standing', action: 'Low (SEN 3+4) or unbreakable throw (SEN 1+3)' },
              { label: 'They duck', action: 'SEN 1+2 (safe mid, 51 damage) or SEN 4 (+4 on block)' },
            ]},
            { type: 'end', label: 'Back to neutral or continue pressure' },
          ]}
        />
      </Section>

      <Section title="Two Arts, One Fighter">
        <p>
          Reina is Heihachi Mishima's secret apprentice. She inherited two fighting styles and fused them
          into something unique.
        </p>
        <p>
          The <strong>Mishima side</strong> gives her the crouch dash, the electric wind god fist, hellsweeps,
          and the oppressive wavedash that defines the Mishima archetype. These tools are about raw power —
          launching from punishment, forcing 50/50s on knockdown, and controlling space with the threat of
          a +5 on block high that leads to full combos.
        </p>
        <p>
          The <strong>Taido side</strong> gives her flowing stance transitions, acrobatic evasion, and
          relentless pressure. Sentai, Heaven's Wrath, and Unsoku — three stances that feed into each other,
          creating a web of options that keeps the opponent guessing at every turn.
        </p>
        <p>
          Most Mishima characters win by executing one big thing perfectly — the electric, the hellsweep,
          the wavedash pressure. Reina can do that too. But she can <em>also</em> win by flowing between
          stances, layering pressure on top of pressure until the opponent cracks. You get to choose which
          Reina you want to be in any given match.
        </p>

        <KeyConcept title="Jack of All Trades" icon="⚔️">
          <p>
            Reina can poke, she can play Mishima fundamentals, and she can run stance trickery. But she
            doesn't do any of these <em>better</em> than the specialists. Dragunov outpokes her. Kazuya's
            Mishima tools are stronger. Xiaoyu's stances are more evasive.
          </p>
          <p>
            Her strength is <strong>versatility</strong>. She can shift between all three styles
            mid-match. An opponent who's figured out your poke game gets blindsided by stance pressure. An
            opponent locking down your stances gets blown up by an electric.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Who Is Reina For?">
        <ul>
          <li><strong>You like pressure that never stops.</strong> Reina's moves flow into stances, which flow into other stances, which flow back into neutral tools. When it clicks, you feel like a machine that never gives the opponent room to breathe.</li>
          <li><strong>You want depth without a ceiling.</strong> You can start with the basics and win immediately. But hundreds of hours later, you're still discovering new transitions, new confirms, new setups. The character grows with you.</li>
          <li><strong>You enjoy making reads.</strong> Reina's stances are strongest when you understand what your opponent wants to do and pick the option that beats it. She rewards attention and adaptation.</li>
          <li><strong>You're okay with linearity.</strong> Reina's biggest weakness is that many of her key moves can be sidestepped. You'll need to learn when to use homing moves and how to realign.</li>
        </ul>

        <TipBox variant="warning" title="The Honest Truth About Execution">
          Reina is playable without the electric wind god fist. Her df+2 is a perfectly good i15 launcher.
          Her punishment works without just frames. Her stance game doesn't require Mishima execution at all.
          But if you want to reach the highest levels, the electric is where her damage ceiling lives.
          This guide teaches both paths — the practical version and the optimal version — so your hands
          can catch up to your brain at whatever pace they need to.
        </TipBox>
      </Section>

      <Section title="Strengths and Weaknesses">
        <h3>Why Reina Wins</h3>
        <ul>
          <li><strong>Punishment feeds offense:</strong> Her 10-frame punish (1,1,2) goes directly into Sentai at +11. Her crouching punish (ws+4,4) goes into Heaven's Wrath at +6. Every time the opponent makes a mistake, Reina doesn't just punish — she starts a mixup.</li>
          <li><strong>Stance pressure is oppressive:</strong> f,f+2 into Sentai on block is +2. At the wall, 1,1,2 is +14 with the wall crush. Running four into Heaven's Wrath is +8. She creates advantage from safe tools and then forces guesses.</li>
          <li><strong>High damage potential:</strong> Electric combos and optimized wall routes push her damage above average. She can end rounds fast when the execution is there.</li>
          <li><strong>Versatile approach:</strong> f,f+2 at range, wavedash up close, Unsoku for evasion — she has tools for every distance and situation.</li>
        </ul>

        <h3>Why Reina Struggles</h3>
        <ul>
          <li><strong>Weak lows:</strong> Her best lows are locked behind stances or crouch dash. From standing, db+2 is -16 on block and only -3 on hit. db+4 is fast but does chip damage. Hellsweep is launch punishable. You can't chip people down with safe lows like Dragunov can.</li>
          <li><strong>Linearity:</strong> f,f+2, the electric, and many of her key mids can be sidestepped. Opponents who move well will force you to use homing moves (b+2, standing 3) to keep them honest.</li>
          <li><strong>Stance vulnerability:</strong> Reina cannot block during Sentai. If you transition on block and the opponent knows the matchup, they can sometimes interrupt your options.</li>
          <li><strong>Risk-reward on offense:</strong> Most of her scariest stance options (SEN 1,2 power crush, SEN 3+4 low) are launch punishable. The reward for a blocked f,f+2 into Sentai mixup often favors the defender. You win through accumulated pressure, not one big gamble.</li>
        </ul>

        <TipBox variant="tip" title="The Key Insight">
          Reina's weaknesses are real, but they share one solution: <strong>conditioning</strong>. You don't
          open people up with raw lows. You make them so scared of your mids and stances that they
          stop ducking — then the lows land for free. You don't force one big guess. You layer small
          advantages until the opponent runs out of answers.
        </TipBox>
      </Section>

      <Section title="What This Guide Builds">
        <p>
          Each chapter adds one layer to your Reina. By the end, you'll have the complete picture — but you
          can stop at any chapter and play competently with what you've learned so far.
        </p>
        <ul>
          <li><strong>Chapter 2:</strong> The Sentai stance and the f,f+2 game — the engine that drives everything</li>
          <li><strong>Chapter 3:</strong> Punishment that feeds directly into your offense</li>
          <li><strong>Chapter 4:</strong> Heaven's Wrath — the second stance and its frame trap game</li>
          <li><strong>Chapter 5:</strong> Neutral tools — pokes, keepout, lows, and tracking</li>
          <li><strong>Chapter 6:</strong> Practical combo routes for every situation</li>
          <li><strong>Chapter 7:</strong> The heat system and what it unlocks for Reina specifically</li>
          <li><strong>Chapter 8:</strong> Unsoku, parries, okizeme, and the full stance web</li>
        </ul>

        <Collapsible title="Quick-Start: Try These Right Now" defaultOpen>
          <p>If you're in Practice Mode, try these three sequences to feel how Reina flows:</p>
          <ol>
            <li><strong>f,f+2 → hold forward → press 3</strong> — Your bread-and-butter approach into heat engager</li>
            <li><strong>1,1,2</strong> — Feel how the jab string flows into Sentai automatically</li>
            <li><strong>f+4 → df+1</strong> — Plus frames into a mid poke. Simple, effective, no stance required.</li>
          </ol>
        </Collapsible>
      </Section>
    </Chapter>
  )
}
