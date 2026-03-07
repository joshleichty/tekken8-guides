import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  Collapsible,
  DecisionGrid,
  CoachCallout,
  OptionTest,
  LabProtocol,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter14({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={14}
      title="Reading the Opponent"
      intro="This chapter uses Victor as a case study to teach a process that works against every character. The specific answers matter less than the method. By the end, you'll know how to lab any matchup — not just this one. The Victor breakdown is a worked example. The process is the real lesson."
      hasPrevious
      onPrevious={() => goToChapter(13)}
      onNext={() => goToChapter(15)}
    >
      <Section title="The Process">
        <p>
          When you face something you don't understand — a stance, a string, a setup — don't
          tilt. Go to practice mode after the match and test five things: interrupt, power crush,
          sidestep left, sidestep right, and block. Record the results. Keep what works. This
          takes 10 minutes and saves you dozens of losses.
        </p>

        <CoachCallout
          quote="You don't need to know the frame data. You don't need to know the matchup. You need to test five options and see which one wins. That's it. Five tests, ten minutes, and you have your answer for the next hundred games."
        />

        <KeyConcept title="The Five-Option Test" icon="🧪">
          <p>
            For any move or situation you don't understand, test these five responses in order.
            Record whether each one works, loses, or trades. The one that works most consistently
            becomes your default.
          </p>
          <ol>
            <li><strong>Interrupt</strong> — Press your fastest button (jab or RFS f+4). Does it beat them?</li>
            <li><strong>Power crush</strong> — Do df+3,4 or backlash. Does it absorb and punish?</li>
            <li><strong>Sidestep left</strong> — Step left and punish. Does the move track?</li>
            <li><strong>Sidestep right</strong> — Step right and punish. Does it track?</li>
            <li><strong>Block and punish</strong> — Just block. Is it minus enough to punish? Is it your turn?</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Spacing and Range">
        <p>
          Before you learn an opponent's moves, learn their <strong>range</strong>. Every character
          has a distance where they're dangerous and a distance where they're helpless. Your job is
          to find that boundary and dance on it — close enough to bait their attacks, far enough
          to whiff-punish them.
        </p>

        <p>
          Hwoarang has a unique advantage here: RFS stance switching at distance. You can enter
          RFS (via 3+4 or db+4~F) and use the stance's movement to bait whiffs. The opponent sees
          flamingo and thinks you're attacking — but you're at range 3, waiting for them to commit.
          When they whiff, b+3 or exit stance and punish.
        </p>

        <TipBox variant="tip" title="Range Testing Method">
          In practice mode, record the opponent doing their main approach moves. Stand at different
          distances and see where they whiff. That "just barely whiffs" distance is your sweet spot.
          Backdash to that range, wait, punish. This works against every character.
        </TipBox>
      </Section>

      <Section title="Case Study: Victor's Weapons">
        <p>
          Victor's offense revolves around four stances you'll see in every match. The coaching
          session tested systematic options against each one. Here's what works — and more
          importantly, here's how the testing was done so you can replicate it against any character.
        </p>

        <OptionTest
          title="Victor's EI Stance (After Block)"
          situation="You just blocked a Victor move that transitions into EI stance. He's +5 or +6 in your face. What do you do?"
          frameData="EI stance: +5 to +6 on block depending on the move. The key move: running two puts Victor at +5 into EI. EI2 (knee) is i16. That's a one-frame gap to interrupt."
          testResults={[
            {
              option: 'Interrupt with jab',
              input: '1 or 2',
              result: 'loses',
              successRate: '2/5',
              detail: 'At +5 or +6, Victor\'s fastest options beat your jab. You\'re swinging into a frame disadvantage. Sometimes works if they\'re slow to press, but it\'s not reliable. If you use an i11 move (like 2,f+4), you\'ll trade with their fastest EI option — still not great.',
              verdict: 'Too risky as a default.',
            },
            {
              option: 'Interrupt with 2,f+4 (read)',
              input: '2,f+4',
              result: 'situational',
              successRate: '3/5',
              detail: 'If you READ that they\'re going to do running two → EI2 (knee) specifically, 2,f+4 can interrupt the one-frame gap. This is a hard read, not a reaction. Victor also has a power crush from EI that beats your jab. Use this when you notice them always doing running two → EI2.',
              verdict: 'Read-based interrupt. Don\'t default to this.',
            },
            {
              option: 'Power crush',
              input: 'df+3,4',
              result: 'works',
              successRate: '3/5',
              detail: 'Power crush absorbs their follow-up attack and you get your damage. Loses to throws and lows from EI, but those are rarer options. Most Victors will press a mid or high from EI. Also beats Victor\'s power crush from EI because yours absorbs first.',
              verdict: 'Solid default against aggressive EI follow-ups.',
            },
            {
              option: 'Sidestep left',
              result: 'situational',
              successRate: '2/5',
              detail: 'Some EI options track left, some don\'t. Inconsistent. EI stance frame trap (jab sequence) can be sidestepped left, but the knee tracks.',
              verdict: 'Not reliable without matchup-specific knowledge.',
            },
            {
              option: 'Block and wait',
              result: 'works',
              successRate: '4/5',
              detail: 'Block absorbs whatever they throw. You might eat a low for chip, but you don\'t eat a launch. After blocking the EI knee, Victor is -8 — it\'s clearly your turn. Many other EI follow-ups are also minus on block.',
              verdict: 'Safest default. After blocking EI knee (-8), punish or start your pressure.',
            },
          ]}
          bestOption="Block → punish, with power crush or 2,f+4 as your read option"
          reasoning="Blocking the EI follow-up is almost always safe. After blocking the EI knee, Victor is -8 — take your turn. When you notice them always doing running two → EI2, interrupt with 2,f+4 or power crush. Victor has a power crush from EI too, so be aware that jabbing isn't always safe."
          practiceNote="Record Victor entering EI from running two, with different follow-ups: (1) EI2 knee, (2) EI power crush, (3) EI low. Set random playback. Practice blocking all three. Then start reading the knee and interrupting with 2,f+4 when you see it coming."
        />

        <OptionTest
          title="Victor's Sword (The Blue Flash Mid)"
          situation="Victor does his Sword attack — the blue-flash mid that looks scary. How do you handle it?"
          testResults={[
            {
              option: 'Sidestep left',
              result: 'works',
              successRate: '4/5',
              detail: 'Sword is linear. Stepping left consistently avoids it. After stepping, you get a free punish — b+3 or df+2 depending on recovery.',
              verdict: 'Best option. Step left, punish hard.',
            },
            {
              option: 'Sidestep right',
              result: 'loses',
              successRate: '1/5',
              detail: 'Sword tracks to your right. Stepping right gets you hit almost every time.',
              verdict: 'Wrong direction.',
            },
            {
              option: 'Duck',
              result: 'loses',
              detail: 'Sword is a mid. Ducking eats the full hit. Don\'t duck this.',
            },
            {
              option: 'Block and punish',
              result: 'works',
              successRate: '3/5',
              detail: 'Sword is minus on block. You can punish depending on the distance, but the block pushback can make it hard to reach.',
              verdict: 'Safe but less rewarding than stepping left.',
            },
          ]}
          bestOption="Sidestep left"
          reasoning="Sword is linear and tracks right. Stepping left is free evasion into full punish. Blocking works as a backup. Never duck, never step right."
        />

        <OptionTest
          title="Victor's Knife (Quick Stab Move)"
          situation="Victor does Knife — a quick poking mid. What's the answer?"
          testResults={[
            {
              option: 'Sidestep right',
              result: 'works',
              successRate: '4/5',
              detail: 'Knife tracks left but not right. Stepping right consistently avoids it.',
              verdict: 'Best option.',
            },
            {
              option: 'Sidestep left',
              result: 'loses',
              detail: 'Knife tracks left. You walk into it.',
            },
            {
              option: 'Duck',
              result: 'loses',
              detail: 'Knife is a mid. Ducking eats the hit.',
            },
            {
              option: 'Block and punish',
              result: 'situational',
              successRate: '3/5',
              detail: 'You can block it, but the reward depends on how minus it is. Often safe or only slightly minus.',
              verdict: 'Backup option. Stepping right is strictly better.',
            },
          ]}
          bestOption="Sidestep right"
          reasoning="Knife and Sword have opposite tracking. Sword = step left. Knife = step right. If you can identify which one is coming, you have a free sidestep every time."
          practiceNote="Record Victor alternating Sword and Knife randomly. Practice identifying which one is coming and stepping the correct direction. This is a visual recognition drill."
        />

        <OptionTest
          title="Victor's Gun (The Pistol Shot)"
          situation="Victor pulls the gun — the ranged attack that looks impossible to deal with. What do you do?"
          testResults={[
            {
              option: 'Duck',
              result: 'works',
              successRate: '5/5',
              detail: 'Every gunshot is a high. Every single one. Duck and it whiffs completely. You get a full ws punish — ws+2,3 for a Tornado launch.',
              verdict: 'The answer. Always duck the gun.',
            },
            {
              option: 'Sidestep',
              result: 'situational',
              successRate: '2/5',
              detail: 'Some gun options track, some don\'t. Inconsistent and unnecessary since ducking beats all of them.',
            },
            {
              option: 'Block',
              result: 'works',
              successRate: '5/5',
              detail: 'Blocking works but wastes the opportunity. Why block a high when you can duck and launch?',
              verdict: 'Functional but suboptimal.',
            },
          ]}
          bestOption="Always duck"
          reasoning="This is the single most valuable piece of Victor matchup knowledge: the gun is always a high. Duck it, ws+2,3 for a full Tornado combo. This one rule changes the entire matchup."
          practiceNote="Record Victor doing various gun attacks from different ranges. Practice ducking every one and punishing with ws+2,3. This should be 100% consistent — there's no mixup here."
        />

        <OptionTest
          title="Victor's Lows at -4"
          situation="You blocked something and you're at -4. Victor does a low. How do you handle his low game?"
          frameData="-4 on block, Victor presses a low"
          testResults={[
            {
              option: 'Sidestep',
              result: 'works',
              successRate: '4/5',
              detail: 'At -4, you still have time to sidestep before the low connects. Most of Victor\'s lows are linear enough to step.',
              verdict: 'Best primary option.',
            },
            {
              option: 'Sidestep → block',
              result: 'works',
              successRate: '5/5',
              detail: 'Sidestep first, then immediately hold back/down-back. This covers both the low AND a mid follow-up. If they did the low, you stepped it. If they did a mid, you block it after the step.',
              verdict: 'The complete answer. Covers both options.',
            },
            {
              option: 'Low parry',
              result: 'situational',
              successRate: '2/5',
              detail: 'Works if you read the low correctly, but at -4 the timing is tight and you eat a mid if you guess wrong.',
              verdict: 'Only when you have a hard read.',
            },
            {
              option: 'Hopkick',
              result: 'loses',
              successRate: '1/5',
              detail: 'At -4, your hopkick is slow enough that their low hits you before you\'re airborne. Not reliable.',
              verdict: 'Too slow from this position.',
            },
          ]}
          bestOption="Sidestep → block"
          reasoning="Sidestep-block is the universal answer to lows from slight minus. You dodge the linear low, and if they did a mid instead, your block catches it. This covers both options with one action."
          practiceNote="Record Victor at +4: slot 1 = low, slot 2 = mid, random playback. Practice sidestepping first, then blocking. You should avoid the low and block the mid consistently."
        />
        <OptionTest
          title="Victor's Stance Low Loop"
          situation="Victor hits you with a low that transitions back into his stance. From stance, he can go mid, go low again, or press other options. What's the best default?"
          frameData="After blocking the stance low, Victor can: mid (gives up turn, -8ish on block), another low (full crouch low, loops back into stance), or other options"
          testResults={[
            {
              option: 'Interrupt with jab',
              result: 'loses',
              successRate: '2/5',
              detail: 'Jab interrupt only beats two of Victor\'s five main options from this position. That\'s a bad ratio — you\'re eating damage more often than not.',
              verdict: 'Not reliable enough.',
            },
            {
              option: 'Power crush',
              input: 'df+3,4',
              result: 'works',
              successRate: '3/5',
              detail: 'Power crush beats three of five options. Same success rate as blocking but with higher reward when it works. The risk is that you eat the low or throw.',
              verdict: 'Best aggressive option. Tied with blocking as the default.',
            },
            {
              option: 'Block (stand block)',
              result: 'works',
              successRate: '3/5',
              detail: 'Standard blocking beats three of five options. You block the mid (which is -15, so Victor has to take risks to use it), you block the stance options, but you eat the low. Importantly, Victor\'s mid from this position is unsafe — he\'s taking a risk too.',
              verdict: 'Solid default. Victor\'s mids give up his turn.',
            },
            {
              option: 'Sidestep → block',
              result: 'works',
              successRate: '4/5',
              detail: 'Sidestep first, then immediately hold back. The sidestep evades the low, and if Victor did the mid instead, your block catches it. This one action covers both the low and the mid — the two most common options.',
              verdict: 'Best overall. Covers both low and mid with one action.',
            },
          ]}
          bestOption="Sidestep → block, with power crush as your aggressive read"
          reasoning="Sidestep-block covers the two most common options (low and mid) with a single action. The sidestep dodges the linear low, and if they did the mid, your block catches it. Power crush is your read option when you think they'll press a mid or high from stance."
          practiceNote="Record Victor doing: (1) stance low → stance low, (2) stance low → mid. Set random playback. Practice sidestep → block against both. You should evade the low and block the mid consistently."
        />

        <Collapsible title="Victor's Other Key Moves">
          <KeyConcept title="Victor's Counter-Hit Low at Range" icon="⚠️">
            <p>
              At range 2, Victor has a counter-hit low that catches you when you throw out highs
              or slow moves. The answer: <strong>use mids at that range, not highs</strong>.
              Hwoarang's running 3 also low-crushes Victor's counter-hit low — it goes airborne
              and flies over it. If you're getting counter-hit at range, either throw mids or
              approach with running 3 to crush the low.
            </p>
          </KeyConcept>

          <KeyConcept title="Victor's Heat Smash: +10 on Block" icon="🔥">
            <p>
              Victor's heat smash is <strong>+10 on block</strong>. Do not press anything after
              blocking it. Nothing. Their fastest move at +10 is effectively i0. Your i10 jab
              is coming out at effective i20 from their perspective. Just block, wait for their
              follow-up, and take your turn after that. This applies to most heat smashes in
              the game — they're massively plus on block.
            </p>
          </KeyConcept>

          <KeyConcept title="Victor's f+3+4: Sidestep After" icon="👣">
            <p>
              Victor's f+3+4 approach move is <strong>-1 on block for Victor</strong> — meaning
              you're +1. At +1, the move is to <strong>sidestep</strong>. You're slightly plus,
              which gives you the first move advantage on a step. If Victor presses a button at -1,
              your sidestep evades it. If they do f+3+4 twice in a row, step the second one.
            </p>
          </KeyConcept>
        </Collapsible>
      </Section>

      <Section title="Universal Rules">
        <p>
          Some rules apply to every character in the game. These aren't Victor-specific — they're
          Tekken-specific. Learn them once, use them in every matchup.
        </p>

        <KeyConcept title="Heat Burst: Always the Same" icon="🔥">
          <p>
            Heat burst is <strong>+1 on block</strong> and <strong>+2 on hit</strong> for every
            character in the game. No exceptions. This means:
          </p>
          <ul>
            <li>If you BLOCK heat burst, it's basically neutral — your jab trades with theirs. Don't panic, just play normally.</li>
            <li>If you GET HIT by heat burst, you're only -2. Not your turn, but not a disaster. Block and wait.</li>
            <li>Never challenge immediately after getting hit by heat burst unless you have a specific read.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Heat Burst Shortcut">
          Stop guessing what to do after heat burst. Just block. +1 on block means their fastest
          follow-up is effectively i9. Your i10 jab loses by one frame. Just block their follow-up,
          then it's your turn.
        </TipBox>
      </Section>

      <Section title="Character Weak Sides">
        <p>
          Every character in Tekken has a <strong>weak side</strong> — a direction where most
          of their key moves don't track. Knowing this turns sidestepping from a guess into
          a system. But there's a critical caveat: the weak side doesn't apply to every single
          move. Individual moves can break the pattern.
        </p>

        <KeyConcept title="How Weak Sides Work" icon="🧭">
          <p>
            A character's weak side is the direction where their <strong>most-used</strong> moves
            whiff. In neutral or at slight frame disadvantage (-1 to +1), sidestepping to their
            weak side is your default. But specific moves can have opposite tracking — the weak
            side is a starting point, not an absolute rule.
          </p>
          <ul>
            <li><strong>Hwoarang's weak side: sidestep LEFT.</strong> Your main mixup (d+3,4 low and
              JFSR/Scarecrow mid) both lose to sidestep left. Opponents who step left beat your core
              offense. This is why you need tracking moves like df+4 and homing mids.</li>
            <li><strong>Victor:</strong> Sword = step left. Knife = step right. The two main moves
              have opposite weak sides — you need to identify which one is coming.</li>
            <li><strong>Paul's weak side: sidestep RIGHT generally.</strong></li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Charts Are Not Enough">
          Sidestep charts tell you the character's general weak side. But individual moves can
          break the pattern. Example: Nina's general weak side is sidestep right. But her heat
          smash is weak to sidestep LEFT — the opposite direction. If you blindly follow the
          chart, you'll step into her heat smash. Understand WHY a character is weak to a side,
          and know which specific moves break the rule.
        </TipBox>

        <CoachCallout
          quote="There are sidestep charts out there which say this is the character's weak side. If you have the knowledge and understand why, they're good. If you don't know why, it's not the best thing. You need to understand the reason behind the weak side."
        />

        <p>
          The rule of thumb: when you're at -1 to +1 in a neutral situation and you expect the
          opponent to press a button, sidestep to their weak side. When they do a specific move
          you recognize, sidestep based on that move's tracking, not the general chart.
        </p>
      </Section>

      <Section title="Sidestep-Block">
        <p>
          This technique appeared multiple times in the coaching sessions because it solves a
          universal problem: how do you beat a low without eating the mid follow-up? The answer
          is <strong>sidestep first, then immediately hold back to block</strong>.
        </p>

        <KeyConcept title="The Input" icon="🎮">
          <p>
            Tap sidestep (up or down), then immediately hold back (or down-back) to block.
            Two things happen:
          </p>
          <ul>
            <li><strong>If they did a linear low:</strong> your sidestep evades it entirely. Free punish.</li>
            <li><strong>If they did a mid:</strong> your block catches it after the sidestep recovery. You eat the block, but you don't eat a combo.</li>
          </ul>
          <p>
            One input sequence covers both options. This is the universal answer to "they mix lows
            and mids from slight plus." Use it whenever you're at -1 to -4 and expect a low or mid.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Practice the Timing">
          In practice mode, record the opponent doing: slot 1 = low, slot 2 = mid. Random
          playback. Sidestep → block every time. You should dodge the low and block the mid.
          If you're getting hit by the mid, you're sidestepping too long — tap and immediately
          block.
        </TipBox>
      </Section>

      <Section title="Reading Heat">
        <p>
          When the opponent's heat timer is winding down — almost expired — they're going to
          spend it. The question is how: <strong>heat dash</strong> (canceling a move into a
          dash for pressure) or <strong>heat smash</strong> (the big committal attack). Reading
          this correctly gives you a free punish or a full launch.
        </p>

        <KeyConcept title="Heat Timer Reads" icon="⏱️">
          <ul>
            <li><strong>Watch the timer.</strong> When it's nearly gone, the opponent will use their remaining heat. This is when you read their tendency.</li>
            <li><strong>If they always heat smash:</strong> Sidestep or prepare to block and punish. Most heat smashes are linear and launch-punishable on block.</li>
            <li><strong>If they always heat dash:</strong> They'll cancel a move into a dash for continued pressure. This is harder to punish but less rewarding for them than heat smash.</li>
            <li><strong>If they heat burst → heat smash immediately:</strong> Some players always do heat burst into heat smash right away. If you see this pattern, sidestep after blocking heat burst.</li>
          </ul>
        </KeyConcept>

        <CoachCallout
          quote="If their heat is winding down, about to be gone, I think: okay, they're gonna spend it. Are they gonna do a heat dash? Are they gonna do a heat smash? You have to start understanding the opponent you're playing against. Some people never use heat smash — they always heat dash. Some people heat burst, heat smash straight away."
          context="This is a read, not a reaction. Watch what they do in the first two rounds and exploit the pattern."
        />
      </Section>

      <Section title="Other Matchup Examples">
        <p>
          Victor is the deep case study, but the process works the same against every character.
          Here are two more examples showing how the Five-Option Test applies to different characters.
        </p>

        <Collapsible title="Paul: Deathfist Punishment" defaultOpen>
          <p>
            Paul's Deathfist (qcf+2) is his signature move — a massive mid punch that does
            enormous damage. But it's <strong>-19 on block</strong>. Hwoarang can launch it
            for free with any i15 launcher (df+2, for example).
          </p>
          <p>
            <strong>The heat exception:</strong> When Paul is in heat, Deathfist becomes only
            -13 on block. You can't launch it in heat — but you can still punish with ws+4,4
            or a jab string. Know this going in so you don't whiff a launch attempt.
          </p>
          <p>
            On whiff, always punish Deathfist with b+3. It has huge recovery on whiff and
            b+3 reaches from range 3. This is exactly the spacing dance from Chapter 12 —
            shimmy at range 3, bait the Deathfist, b+3 when it whiffs.
          </p>
        </Collapsible>

        <Collapsible title="Claudio: Running Two">
          <p>
            Claudio's running two is one of the best approach tools in the game — a high that
            does chip damage, is +6 on block, and has massive range. A big part of Claudio's
            gameplan is to just keep running twos at you.
          </p>
          <p>
            <strong>It's a high.</strong> You can duck it and launch with ws+2,3. But it's fast,
            so ducking on prediction is risky — if he does a mid instead, you eat it.
          </p>
          <p>
            <strong>Weak side: sidestep LEFT.</strong> Claudio's running two is weak to step left.
            If you go right, you'll get clipped. Step left from range and it whiffs consistently.
          </p>
          <p>
            <strong>Claudio's mix:</strong> He also has f,f+4, a mid approach tool that tracks
            better to the left. It's only -1 on block. Claudio players mix running two (high)
            with f,f+4 (mid) to cover your sidestep. The answer: sidestep left is still your
            default, but be ready to block the mid. Sidestep-block covers both.
          </p>
        </Collapsible>
      </Section>

      <Section title="Punishing the Ducker">
        <p>
          When opponents figure out that Hwoarang has a lot of highs, they start ducking. This is
          actually good for you — because your mid punishment for ducking is devastating, especially
          from flamingo.
        </p>

        <MoveCard
          character="hwoarang"
          move={{
            input: 'RFS df+4',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i17',
            onBlock: '+1',
            onHit: '+8 (RFF)',
            onCH: 'Launch',
            tags: ['CH launcher', 'anti-duck'],
            description: 'Your primary anti-duck tool from RFS. +1 on block means it\'s safe. On normal hit you get +8 in RFF for continued pressure. On CH — which happens when they were pressing a button while ducking — full launch combo.',
          }}
          videoId="RFS.df+4"
          showVideo
        />

        <Collapsible title="The df+4 Chain" defaultOpen>
          <p>
            When you land RFS df+4 on normal hit (+8 in RFF), what do you do next? Another df+4.
            You're in RFF. Do RFF d+3,4 to get back to RFS, then df+4 again. If they keep ducking,
            you keep hitting them. Each df+4 on hit gives +8, which means the next one is uninterruptible.
          </p>
          <p>
            <strong>The chain:</strong> RFS df+4 (hit) → RFF d+3,4 → RFS df+4 (hit) → repeat
          </p>
          <p>
            They MUST stop ducking or they eat this loop forever. Once they start blocking, switch
            back to your regular RFS pressure (lows, throws, frame traps).
          </p>
        </Collapsible>

        <MoveCard
          character="hwoarang"
          move={{
            input: 'b+2',
            hitLevel: ['m'],
            damage: '18',
            startup: 'i16',
            onBlock: '+4',
            onHit: '+8',
            tags: ['mid', 'plus on block'],
            description: 'b+2 is a mid that\'s +4 on block. Excellent for punishing duckers from neutral. On hit, +8 gives you full follow-up options. The +4 on block means even if they stop ducking and start blocking, you\'re plus.',
          }}
          videoId="b+2"
          showVideo
        />

        <MoveCard
          character="hwoarang"
          move={{
            input: 'ws+4,4',
            hitLevel: ['m', 'm'],
            damage: '10, 13',
            startup: 'i11',
            onBlock: '-9 (RFF)',
            onHit: '+4 (RFF)',
            tags: ['ws punish', 'into stance'],
            description: 'When you duck a high and need a while-standing punish, ws+4,4 transitions to RFF at +4 on hit. From there, do d+3,4 to enter RFS, or df+4 if they\'re still ducking. This converts their one ducked high into a full pressure sequence.',
          }}
          videoId="ws4,4"
          showVideo
        />
      </Section>

      <Section title="CH df+4 Confirmation">
        <p>
          When RFS df+4 hits on counter-hit, you get a full launch. But confirming CH is hard at
          first. The trick is the <strong>sound cue</strong> — counter-hits in Tekken 8 have a
          distinct audio pop. Listen for it, then input the follow-up.
        </p>

        <KeyConcept title="df+4 CH Confirm" icon="👂">
          <p>
            On CH: RFS df+4 → df+4,2,3 (wall splat) → b+3 (pickup) → full combo. The damage
            with wall is approximately 76. Without wall, the df+4,2,3 string still gives a
            knockdown for okizeme.
          </p>
          <ul>
            <li><strong>Listen</strong> for the CH sound effect. It's a higher-pitched, sharper hit sound.</li>
            <li><strong>Input df+4,2,3</strong> immediately on CH confirmation. The window is generous.</li>
            <li><strong>At the wall:</strong> b+3 picks up after the wall splat for full combo damage.</li>
            <li><strong>No wall:</strong> df+4,2,3 knockdown → okizeme pressure or back to neutral.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Training the Confirm">
          In practice mode, record the opponent doing a jab from close range (random playback
          with an empty slot for "no attack"). Do RFS df+4 every time. When you hear/see the
          CH, confirm into df+4,2,3. When it's a normal hit, just take the +8 and continue
          pressure. The drill trains you to react to the CH, not guess.
        </TipBox>
      </Section>

      <Section title="Poke Selection at Range">
        <p>
          At range 2, you need to choose the right low poke. Each one trades something different.
          The right choice depends on what you need in the moment.
        </p>

        <DecisionGrid
          title="Low Poke Decision Map"
          description="Your three low pokes each serve a different purpose. Pick based on what you need."
          rows={[
            {
              situation: 'Need safe chip damage',
              response: 'db+4',
              reason: '-12 on block. Most characters can\'t launch this. Consistent, low-risk poke for steady damage accumulation.',
              risk: 'Low reward per hit — needs many reps to matter',
            },
            {
              situation: 'Want to start flamingo loops',
              response: 'd+3',
              reason: 'The low portion of d+3,4. Can stop at d+3 if they\'re ducking the high follow-up. On hit, +4 and you can manually enter flamingo.',
              risk: '-17 on block — some characters can launch. High risk.',
            },
            {
              situation: 'Need range and high crush',
              response: 'db+3',
              reason: 'Longer range than db+4, and high crushes. Great when they\'re using standing highs or jabs to keep you out at range 2.',
              risk: 'Slower, but safe enough',
            },
          ]}
        />
      </Section>

      <Section title="Getting Off the Wall">
        <p>
          When you're at the wall, your options shrink. Most of Hwoarang's game is about closing
          distance and running offense — hard to do when there's a wall behind you. The answer is
          simple: <strong>sidestep away</strong>.
        </p>

        <TipBox variant="warning" title="Wall Escape">
          When you're at the wall with space to your sides, sidestep toward the open side. This
          moves you away from the wall without moving backward. Once you're off the wall axis,
          you can resume normal movement and create the distance you need for b+3 whiff
          punishment or approach tools. Don't try to fight with your back to the wall unless
          you have a specific setup — Hwoarang's pressure requires room to operate.
        </TipBox>
      </Section>

      <Section title="Lab Any Matchup: The Method">
        <p>
          Everything above used Victor as a worked example. Here's the distilled process you can
          use against any character. This is the real takeaway — a repeatable system that works
          forever, against every character, in any season.
        </p>

        <LabProtocol
          title="Universal Matchup Lab Protocol"
          objective="Develop a basic gameplan against any character you're struggling with. In 30 minutes, you'll have answers for their most common situations."
          estimatedTime="25–30 min"
          difficulty="intermediate"
          frequency="After losing 3+ games to a character you don't understand"
          phases={[
            {
              name: 'Identify Their Top 3',
              objective: 'Find the moves that are actually beating you',
              setup: {
                action: 'Watch your replay. Write down the 3 moves/situations that caused the most damage.',
                settings: ['Watch your last 2-3 losses to this character'],
              },
              method: 'Don\'t guess what beats you — look at the actual replay. Write down exactly what moves hit you and in what situation. Ignore anything that only happened once. Focus on the patterns: what did they do repeatedly?',
              successLooksLike: 'You have 3 specific moves or situations written down that accounted for 60%+ of your losses.',
              commonPitfall: 'Writing down too many things. THREE. Not five, not seven. The top three covers most of your losses.',
            },
            {
              name: 'Run the Five-Option Test',
              objective: 'Find your answers',
              setup: {
                character: 'The character you\'re labbing',
                action: 'Record their #1 problem move from close range',
              },
              method: 'Test all five options against their move: interrupt, power crush, sidestep left, sidestep right, block and punish. Record which works, which loses, which trades. Do 5 tries of each option (25 total tests). This takes 5 minutes.',
              targetReps: 25,
              successLooksLike: 'You have a clear "best default" for their #1 move. One option should work 3+ out of 5 times.',
              commonPitfall: 'Testing only one option and stopping. Test ALL FIVE. Sometimes the answer surprises you — stepping works when you expected blocking.',
            },
            {
              name: 'Repeat for Top 3',
              objective: 'Cover all three problem situations',
              setup: {
                action: 'Record their #2 and #3 problem moves and test the same way',
              },
              method: 'Same five-option test for each of their top 3 moves. By the end, you have a best default for each of their main threats. Write these down somewhere — "vs [Character]: #1 = block, #2 = step left, #3 = duck."',
              successLooksLike: 'You have a one-line answer for each of their 3 biggest threats. Something like: "EI stance = block, Sword = step left, Gun = duck."',
            },
            {
              name: 'Drill the Answers',
              objective: 'Make the answers automatic',
              setup: {
                action: 'Record all 3 problem moves in random playback',
                settings: ['Playback: Random'],
              },
              method: 'Random playback. React to each move with the correct answer. Don\'t pre-decide — wait to see which move comes out, then respond. This trains recognition, not memorization.',
              targetReps: 30,
              successLooksLike: 'You respond correctly 80%+ of the time across all three recordings. You\'re reacting to the animation, not the playback order.',
              commonPitfall: 'Using one answer for everything. If you\'re blocking all three, you\'re not using the answers you found. Force yourself to step when stepping is the answer.',
            },
            {
              name: 'Test Live',
              objective: 'Verify the answers work in real matches',
              setup: {
                action: 'Queue into ranked or player match',
                settings: ['Play 3-5 games against the character'],
              },
              method: 'Focus exclusively on applying your three answers. Don\'t worry about winning. Track how many times you successfully applied each answer. Even 2-3 successful applications per match is a massive improvement.',
              successLooksLike: 'You successfully apply at least one of your answers in every game. You feel less confused when they do their key moves.',
              commonPitfall: 'Reverting to old habits under pressure. This is normal. The answers will feel unnatural at first. Commit to them even when you mess up.',
            },
          ]}
          coachingNote="This protocol works against any character in any fighting game. The specific answers change, but the method doesn't. The next time you lose to someone you don't understand, don't queue up again and hope for the best. Spend 30 minutes in the lab and go back with real answers."
        />

        <CoachCallout
          quote="The method is more valuable than the answers. Answers are for one matchup. The method is for all thirty. Learn the process and you'll never feel helpless against a character again."
          context="This applies to every character, every season, every update. When the patch changes, your answers might change. Your method never does."
        />
      </Section>
    </Chapter>
  )
}
