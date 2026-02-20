import { Chapter, Section } from '../../../components/guide'
import { KeyConcept, TipBox, StanceBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="Blood Talon"
      intro="Hwoarang has 156 moves across four stances. That sounds insane. It's not. Every expert who teaches this character arrives at the same conclusion: learn the loops first, and 80% of the stances teach themselves."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="The First Loop"
    >
      <Section title="What It Feels Like">
        <p>
          Playing Hwoarang feels like driving a manual transmission with no brakes. You shift between stances
          the way a boxer shifts between orthodox and southpaw — each position opens different angles, different
          threats. When it clicks, your opponent is blocking a kick that came from your left leg, then your right
          leg, then you're in a completely different stance throwing a low they've never seen before, and before
          they can react you've already transitioned again.
        </p>
        <p>
          The character doesn't have one big move that wins rounds. He has <strong>pressure that never ends</strong>.
          His kicks chain into stances that chain into more kicks that chain into more stances. Each transition point
          is a decision — for both you and your opponent. You pick the option that beats what they're doing. They
          try to escape. You adapt. The round ends with accumulated damage from twenty small decisions, not one
          explosive launcher.
        </p>
        <p>
          This is what makes Hwoarang simultaneously the most fun and most misunderstood character in Tekken.
          People see the button mashing and think it's random. It's not. Every kick in a pressure sequence has
          specific frame data, specific tracking, specific counters. The Hwoarang player who understands <em>why</em> each
          kick matters will always beat the one who just presses buttons and hopes.
        </p>
      </Section>

      <Section title="The Four Stances">
        <p>
          Hwoarang has four stances. That's a lot. But here's the mental model that makes it manageable: two stances
          are <strong>safe</strong> (you can block), and two are <strong>committed</strong> (you can't block). Everything
          flows between them.
        </p>

        <StanceBox name="Left Foot Forward (LFF)" input="Default stance" icon="🦶">
          <p>
            Your home base. Full movement, full blocking. Most of your neutral tools live here — df+1, df+2, b+3,
            and the critical d+3,4 that starts everything. You'll always return here when you need to play safe.
          </p>
          <ul>
            <li><strong>df+1:</strong> i13 safe mid poke</li>
            <li><strong>d+3,4:</strong> Low-high into RFS</li>
            <li><strong>df+2:</strong> i15 safe mid launcher</li>
            <li><strong>b+3:</strong> i16 whiff punisher</li>
          </ul>
        </StanceBox>

        <StanceBox name="Right Foot Forward (RFF)" input="3+4 from LFF" icon="🦶">
          <p>
            Your secondary safe stance. You can block and move forward/backward, but sidestepping returns you to LFF.
            Many of your best pressure tools live here — RFF b+2, RFF f+3 into LFS, RFF df+3 (homing heat engager).
            Think of RFF as where your loops pass through.
          </p>
          <ul>
            <li><strong>RFF 2:</strong> +2 on block high jab</li>
            <li><strong>RFF b+2:</strong> +4~5 on block mid</li>
            <li><strong>RFF f+3:</strong> +12~15 into LFS</li>
            <li><strong>RFF df+3:</strong> +1 homing heat engager</li>
          </ul>
        </StanceBox>

        <StanceBox name="Left Flamingo (LFS)" input="f+3 from LFF" icon="🔥">
          <p>
            Committed. You cannot block. Your left leg is raised and you have access to powerful mids (LFS f+3 heat
            engager, +4 on block) and the same d+3,4 low that starts your loops. LFS is where your mixups live —
            the opponent has to guess between your plus-frame mid and your lows.
          </p>
          <ul>
            <li><strong>LFS 1:</strong> +5 on block high jab</li>
            <li><strong>LFS f+3:</strong> +4 mid heat engager</li>
            <li><strong>LFS d+3,4:</strong> Low-high into RFS</li>
            <li><strong>LFS d+4:</strong> +4 low into RFF</li>
          </ul>
        </StanceBox>

        <StanceBox name="Right Flamingo (RFS)" input="f,n,4 from LFF" icon="🔥">
          <p>
            Committed. You cannot block. Your right leg is raised. This is where you land after d+3,4 —
            and it's where your fastest move lives. RFS f+4 is 8 frames. Nobody can interrupt it. RFS is your
            string-ending stance: you use it to cash out pressure with mids, lows, or the hell sweep.
          </p>
          <ul>
            <li><strong>RFS f+4:</strong> i8 fastest option</li>
            <li><strong>RFS 2:</strong> +5 high into RFF</li>
            <li><strong>RFS df+4:</strong> +1 mid CH launcher</li>
            <li><strong>RFS d+4,3:</strong> Hell sweep (low-high)</li>
          </ul>
        </StanceBox>

        <KeyConcept title="Safe vs. Committed" icon="🔑">
          <p>
            In LFF and RFF, you can block. If you're unsure, you can hold back and nothing bad happens.
            In LFS and RFS, you <strong>cannot block</strong>. If you enter flamingo and the opponent reads it,
            you eat whatever they throw. This is the core tension: flamingo stances have the best moves, but
            you're vulnerable while you're there.
          </p>
          <p>
            This is why Hwoarang's pressure works through <strong>transitions</strong>, not through sitting in one
            stance. You flow in, throw one or two options, and flow back out. The opponent never gets a clean
            opening because you're never standing still long enough to be predictable.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Secret Nobody Tells You">
        <p>
          Here's what every guide gets wrong about Hwoarang: they list moves by stance. "Here are 15 LFF moves.
          Here are 12 RFF moves. Here are 8 LFS moves. Memorize them all." That's backwards.
        </p>
        <p>
          The real way to learn Hwoarang — the way every top player actually learned him — is through
          <strong> loops</strong>. A loop is a sequence of moves that chains through multiple stances and comes
          back to where it started. When you learn a loop, you're not memorizing individual moves. You're learning
          a <em>flow</em> that carries you through the stance system automatically.
        </p>
        <p>
          One coach put it perfectly: "If you just know the infinites, knowing the infinites teaches you damn near
          eighty percent of all the stances. And then we can fill in the gaps."
        </p>
        <p>
          That's how this guide works. Chapter 2 teaches you one loop. Chapter 3 connects it to more loops.
          By the time you're done with Chapter 3, you'll be comfortable in all four stances without ever having
          sat down and memorized a stance-by-stance move list.
        </p>

        <TipBox variant="warning" title="The 'Fake Plus Frames' Truth">
          You'll notice Hwoarang has a lot of moves that are +4, +5, even +8 on block. On paper, that looks
          insane — those are free frame traps, right? Not exactly. His fastest mid from flamingo is i13 or slower.
          So being +5 in flamingo means your fastest mid comes out at frame 8 — the same speed as your opponent's
          jab. Your plus frames <strong>don't guarantee frame traps the way a normal character's do</strong>.
          <br /><br />
          So why does the pressure work? Because <strong>it never stops</strong>. Your opponent can jab you out of
          one option, but you have six other options from the same position. They can sidestep one thing, but the
          next transition tracks. They can duck one high, but you have a mid that crushes lows. Hwoarang wins
          through volume and variety, not through any single devastating mixup point.
        </TipBox>
      </Section>

      <Section title="Who Is Hwoarang For?">
        <ul>
          <li><strong>You like being in your opponent's face.</strong> Hwoarang is one of the most aggressive characters in Tekken. His entire design rewards constant offense. If you enjoy keeping pressure and forcing reactions, he's your character.</li>
          <li><strong>You want to express yourself.</strong> No two Hwoarang players look the same. The loop system gives you massive creative freedom — you choose which transitions to use, which mixups to run, which stances to favor. Your Hwoarang will be unique to you.</li>
          <li><strong>You're willing to invest time.</strong> He has 156 moves. The loops shortcut the learning process massively, but he still has more mechanical depth than almost any other character. If you want a character that keeps revealing new layers after hundreds of hours, Hwoarang delivers.</li>
          <li><strong>You can handle risk.</strong> Flamingo stances can't block. Many of his best options are highs that can be ducked and launched. When the opponent reads you, they get big damage. Hwoarang players need composure — the pressure works because you commit to it, not because it's safe.</li>
        </ul>
      </Section>

      <Section title="Strengths and Weaknesses">
        <h3>Why Hwoarang Wins</h3>
        <ul>
          <li><strong>Relentless pressure:</strong> His stance transitions create chains of plus-frame situations. The opponent has to make correct decisions repeatedly, and one mistake opens them up to more pressure or a full combo.</li>
          <li><strong>Counter-hit power:</strong> b+4 (i13 high CH launcher), RFS df+4 (CH launcher), SS4 (CH launcher into RFF), and in heat, his 8-frame RFS f+4,4 becomes a normal-hit launcher. He punishes mashers harder than almost anyone.</li>
          <li><strong>Punishment feeds offense:</strong> His 10-frame punish (1,2,3 or 1,2,4) transitions directly into flamingo. His ws+4,4 goes to RFF at +4. Every successful punishment starts a pressure sequence.</li>
          <li><strong>One of the best whiff punishers:</strong> b+3 is i16, hits from massive range, and does tornado damage. At range, Hwoarang plays a patient game backed by one of the scariest whiff punishers in Tekken 8.</li>
          <li><strong>Safe launchers:</strong> df+2 is -7 on block. JFSR is -8 on block. Both launch standing opponents for full combos. Very few characters have two safe mid launchers.</li>
        </ul>

        <h3>Why Hwoarang Struggles</h3>
        <ul>
          <li><strong>Vulnerable to sidesteps:</strong> Many of his key stance moves can be sidestepped. At higher levels, opponents who move well force Hwoarang to use his limited homing options or risk getting launched from the side.</li>
          <li><strong>Can't block in flamingo:</strong> Entering LFS or RFS is a commitment. If the opponent reads it with a rage art, a power crush, or a well-timed punish, you eat the full damage with no way to defend.</li>
          <li><strong>High-dependent pressure:</strong> Many of his best stance transitions involve high attacks (d+3,4's second hit, RFS 2, RFF 2). Opponents who duck at the right moments get free launches. This is why Hwoarang's lows and mids matter so much — they keep the opponent standing.</li>
          <li><strong>Limited neutral pokes:</strong> From LFF, he really only has df+1 and f+2 as traditional mid pokes. Everything else requires entering a stance or using a move with commitment. Against characters with dominant neutral like Dragunov, he has to work harder to establish his game.</li>
        </ul>

        <TipBox variant="tip" title="The Key Insight">
          Hwoarang's weaknesses share one solution: <strong>learning when to press and when to stop</strong>.
          The character rewards constant pressure — but not <em>infinite</em> pressure. The best Hwoarang players
          know when to flow through three stance transitions and when to block and reset. This guide teaches both.
        </TipBox>
      </Section>

      <Section title="What This Guide Builds">
        <p>
          Each chapter adds one layer. You can stop at any chapter and play competently with what you've learned.
        </p>
        <ul>
          <li><strong>Chapter 2:</strong> The d+3,4 loop — one move that teaches you two stances and starts every pressure sequence</li>
          <li><strong>Chapter 3:</strong> The infinite machine — connecting loops through all four stances</li>
          <li><strong>Chapter 4:</strong> Punishment that feeds directly into your loops</li>
          <li><strong>Chapter 5:</strong> Getting in — approach tools, pokes, and controlling space</li>
          <li><strong>Chapter 6:</strong> Combo routes for every launcher</li>
          <li><strong>Chapter 7:</strong> Heat system and what it changes for Hwoarang</li>
          <li><strong>Chapter 8:</strong> Defense — surviving when it's not your turn</li>
          <li><strong>Chapter 9:</strong> Adaptation — what to do when opponents learn your loops</li>
          <li><strong>Chapter 10:</strong> Advanced tech — JFSR, fox step, blue spark 3~4</li>
        </ul>

        <Collapsible title="Quick-Start: Try These Right Now" defaultOpen>
          <p>If you're in Practice Mode, try these three things to feel how Hwoarang flows:</p>
          <ol>
            <li><strong>d+3,4 → RFS 2 → repeat</strong> — The most basic loop. Low-high into flamingo, jab out to RFF, and you're right back in position to pressure. Just do this ten times and feel the rhythm.</li>
            <li><strong>b+3 at range 3</strong> — Walk back, let the dummy whiff, and punish with b+3. Feel how far this move reaches. This is your whiff punisher — one of the best in the game.</li>
            <li><strong>3+4 → RFF f+3 → LFS f+3</strong> — Switch to RFF, kick into LFS at +12, then throw the heat engager at +4 on block. This is what it feels like to flow between stances with plus frames.</li>
          </ol>
        </Collapsible>
      </Section>
    </Chapter>
  )
}
