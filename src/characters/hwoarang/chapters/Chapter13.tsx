import { Chapter, Section } from '../../../components/guide'
import {
  KeyConcept,
  TipBox,
  GameChallenge,
  CoachCallout,
  LabProtocol,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter13({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={13}
      title="The Lab"
      intro="You know Hwoarang's moves. You know the strategic framework. Now you need to make it automatic. This chapter gives you the exact training protocols coaches use with tournament players. Not random practice — structured sessions with clear targets, methods, and success criteria. Each protocol trains one specific skill until it lives in your hands, not just your head."
      hasPrevious
      onPrevious={() => goToChapter(12)}
      onNext={() => goToChapter(14)}
    >
      <Section title="Why Practice Methods Matter">
        <p>
          Unfocused practice is worse than no practice. When you load up Practice Mode and just
          "mess around," your brain learns the wrong things — random combos that don't connect,
          muscle memory for sequences you'll never use, and habits that feel productive but
          don't transfer to real matches.
        </p>
        <p>
          Every training session should have three things: a <strong>target</strong> (what specific
          skill you're building), a <strong>method</strong> (how you're going to train it), and a
          <strong>success criterion</strong> (how you know when you've got it). Without all three,
          you're just grinding hours for nothing.
        </p>

        <CoachCallout
          quote="If you don't have a target, you're not practicing — you're playing with training wheels. Playing is fun. Training is uncomfortable. If practice feels easy, you're probably not learning anything."
        />
      </Section>

      <Section title="The Whiff Punishment Protocol">
        <p>
          b+3 is one of the best whiff punishers in Tekken 8. But knowing that and actually
          landing it in matches are completely different things. This protocol trains the full
          chain: see the whiff → react → input b+3 → convert the combo.
        </p>

        <LabProtocol
          title="b+3 Whiff Punishment"
          objective="Train yourself to punish whiffed moves with b+3 on reaction, not prediction. By the end, you should be punishing 80%+ of obvious whiffs in real matches."
          estimatedTime="15–20 min"
          difficulty="intermediate"
          frequency="Before every ranked session"
          phases={[
            {
              name: 'Single Whiff Drill',
              objective: 'Build the basic reaction pattern',
              setup: {
                character: 'Paul or Kazuya (big whiff animations)',
                action: 'Record them doing a whiffing df+2 from range 3, then standing still',
                settings: ['CPU Guard: Stand', 'Recovery: Normal'],
              },
              method: 'Stand at range 3. Backdash once, wait for the recording to whiff df+2, then punish with b+3. Focus on SEEING the whiff, not timing it. You should react to the animation, not anticipate the rhythm.',
              targetReps: 50,
              successLooksLike: 'b+3 connects on 45+ out of 50 whiffs. You\'re reacting to the animation, not the recording timing.',
              commonPitfall: 'Pressing b+3 before you see the whiff. If you\'re punishing before the animation starts, you\'re reading the recording rhythm, not reacting. Mix up when you start backdashing to break the timing.',
            },
            {
              name: 'Randomized Whiff',
              objective: 'Remove timing prediction',
              setup: {
                character: 'Same opponent',
                action: 'Record 3 slots: (1) whiff df+2, (2) whiff a different move, (3) just walk forward and block',
                settings: ['Playback: Random'],
              },
              method: 'Same position. Backdash and watch. Only punish when you SEE a whiff — do NOT press b+3 when they walk forward. If you punish the walk-forward recording, you\'re still timing, not reacting.',
              targetReps: 30,
              successLooksLike: 'You punish 25+ of the whiff recordings AND you never press b+3 on the walk-forward recording. Both conditions matter.',
              commonPitfall: 'Getting frustrated when you miss the reaction window. The window for b+3 is generous — if you\'re missing it, you\'re either pressing too early (prediction) or standing at wrong range.',
            },
            {
              name: 'Live Application',
              objective: 'Transfer the skill to dynamic situations',
              setup: {
                character: 'CPU set to aggressive',
                action: 'Play neutral at range 3',
                settings: ['CPU Difficulty: Hard or Very Hard'],
              },
              method: 'Play 5 minutes against the CPU. Your ONLY goal is to land b+3 whiff punishes. Don\'t try to win. Don\'t run offense. Just backdash, watch for whiffs, and punish. Count how many clean b+3 punishes you land.',
              targetTime: '5 min',
              successLooksLike: 'You land 5+ clean b+3 whiff punishes in 5 minutes against the CPU. You\'re not guessing — you\'re reacting to whiffed moves.',
              commonPitfall: 'Getting pulled into playing "normally." The CPU will hit you. That\'s fine. Your only job is whiff punishing. Stay disciplined.',
            },
          ]}
          coachingNote="Run this before ranked sessions. It primes your brain for whiff punishment. After two weeks of consistent practice, b+3 whiff punishing will become automatic — you'll start landing it in matches without thinking about it."
        />
      </Section>

      <Section title="Throw Break Training">
        <p>
          Throw breaks are a reaction skill that most players neglect until they've lost hundreds
          of rounds to grabs. The good news: throw breaking is trainable. The bad news: it takes
          structured repetition, not just "play more."
        </p>

        <LabProtocol
          title="Throw Break Reactions"
          objective="Train throw break reactions until you can break 90%+ of throws in real matches. Focus on the animation, not the grab type."
          estimatedTime="10–15 min"
          difficulty="beginner"
          frequency="Twice per week"
          phases={[
            {
              name: 'Three Throws Randomized',
              objective: 'Learn the three throw break animations',
              setup: {
                character: 'Paul (big throw animations, easy to see)',
                action: 'Record 3 slots: (1) 1 throw, (2) 2 throw, (3) 1+2 throw — all from close range',
                settings: ['Playback: Random'],
              },
              method: 'Stand close and let the recordings play. Focus on the hand animation: left hand = 1 break, right hand = 2 break, both hands = 1+2 break. Break as many as you can. Don\'t worry about speed yet — focus on seeing the correct hand.',
              targetReps: 100,
              successLooksLike: 'You can break 100 throws in a row without errors. Not speed — accuracy. If you break 95 but miss 5, restart the count.',
              commonPitfall: 'Guessing instead of reacting. If you break before you see the hand, you\'re guessing. Slow down — accuracy first, speed comes from repetition.',
            },
            {
              name: 'Throws + Mid Attacks',
              objective: 'Don\'t break when there\'s no throw',
              setup: {
                character: 'Same opponent',
                action: 'Record 4 slots: (1) 1 throw, (2) 2 throw, (3) 1+2 throw, (4) mid attack (like df+2)',
                settings: ['Playback: Random'],
              },
              method: 'Same as before, but now one recording is a mid attack instead of a throw. If you press a button during the mid, you get hit. This trains you to only break when you actually see a throw, not mash break on every approach.',
              targetReps: 50,
              successLooksLike: 'You break 90%+ of the throws AND you block the mid attack recording 100% of the time. Breaking the throw at the cost of eating mids defeats the purpose.',
              commonPitfall: 'Pressing 1 as a "default" break. That works against 1 throws but eats 2 and 1+2 throws plus the mid. You need to see the hand.',
            },
          ]}
          coachingNote="Throw breaking is one of the highest-value drills in Tekken. At most online ranks, opponents throw 3-5 times per match. Breaking even half of those swings rounds in your favor. The skill transfers to every matchup instantly."
        />
      </Section>

      <Section title="Low Reaction Training">
        <p>
          This is the Pakistani method — the training approach used by some of the best Tekken
          players in the world. The key insight: don't try to block lows FAST. Try to block
          them LATE. Blocking as late as possible trains your brain to <em>see</em> the low,
          not to <em>predict</em> it. Prediction fails against good players. Seeing works forever.
        </p>

        <LabProtocol
          title="Low Reaction (Pakistani Method)"
          objective="Train yourself to see and react to lows instead of predicting them. This builds genuine reaction skills that transfer to any matchup."
          estimatedTime="15–20 min"
          difficulty="advanced"
          frequency="Three times per week"
          phases={[
            {
              name: 'Single Low Recognition',
              objective: 'Learn to see one specific low animation',
              setup: {
                character: 'Choose the character you\'re struggling against',
                action: 'Record them doing their key low from close range (e.g., Dragunov d+2, Bryan db+3, etc.)',
                settings: ['Your character: Hwoarang'],
              },
              method: 'Let the low hit you 10 times. Watch the animation. Notice the character\'s body — what moves first? The shoulder? The hand? The knee? Then start blocking. Your goal is NOT to block it fast. Your goal is to block it as LATE as possible while still blocking. If you\'re blocking before the animation starts, you\'re predicting.',
              targetReps: 50,
              successLooksLike: 'You block 45+ of 50, and you\'re blocking AFTER you see the startup animation, not before. The timing should feel late.',
              commonPitfall: 'Blocking on prediction. If you\'re blocking before the low animation starts, you aren\'t training anything. Force yourself to wait until you SEE it. Missing some is fine — that means you\'re actually reacting.',
            },
            {
              name: 'Late Block Practice',
              objective: 'Push the reaction window to its limits',
              setup: {
                character: 'Same opponent',
                action: 'Same low recording',
              },
              method: 'Block the low as LATE as humanly possible. You should be getting hit occasionally — that means you\'re pushing the edge of your reaction. If you\'re blocking 100% comfortably, you\'re not pushing hard enough. The goal is to find the absolute latest moment you can block.',
              targetReps: 50,
              successLooksLike: 'You\'re getting hit 10-20% of the time because you\'re deliberately blocking late. Your brain is learning to see the FULL animation before committing to block.',
              commonPitfall: 'Being satisfied with 100% block rate. If you never get hit, you\'re blocking early (predicting). Push later until you start getting hit, then find the sweet spot.',
            },
            {
              name: 'Low vs Mid Discrimination',
              objective: 'React to lows without eating mids',
              setup: {
                character: 'Same opponent',
                action: 'Record 2 slots: (1) the low, (2) a mid from the same range. Set random playback.',
                settings: ['Playback: Random'],
              },
              method: 'Block standing by default. Only crouch-block when you SEE the low. If you\'re crouching on the mid recordings, you\'re guessing. This is the real test — can you tell the difference between the low and mid animation fast enough to react?',
              targetReps: 40,
              successLooksLike: 'You block 80%+ of the lows AND stand-block 100% of the mids. Both conditions. If you\'re blocking all the lows but also crouching on mids, you\'re guessing low.',
              commonPitfall: 'Defaulting to crouch-block. Stand block should be your default. Only crouch when you see a low. This is the opposite of what most players do and it\'s why most players can\'t react to lows.',
            },
          ]}
          coachingNote="This is the most transferable drill in Tekken. Once you can react to one character's low, the skill partially transfers to similar animations from other characters. Over months, your low-blocking will improve across every matchup, not just the one you drilled."
        />
      </Section>

      <Section title="Replay Study Method">
        <p>
          Watching replays without structure is entertainment, not study. Here's the method that
          actually works: follow top players, filter by matchup, watch specifically, steal one
          thing, and apply it immediately.
        </p>

        <KeyConcept title="The Five-Step Replay Method" icon="📺">
          <ol>
            <li><strong>Follow top Hwoarang players.</strong> Find 2-3 players whose style you want to emulate. Watch their ranked replays or tournament matches.</li>
            <li><strong>Filter by matchup.</strong> If you're struggling against Kazuya, only watch their games against Kazuya. Don't watch random matches.</li>
            <li><strong>Watch 2 replays maximum.</strong> After two replays, you have enough information. More than that and you're just watching, not studying.</li>
            <li><strong>Identify ONE thing.</strong> One approach tool they use that you don't. One defensive pattern. One setup. Just one. Write it down.</li>
            <li><strong>Go to Practice Mode.</strong> Drill that one thing for 10 minutes. Then queue into ranked and try to use it at least 3 times in your first match.</li>
          </ol>
        </KeyConcept>

        <KeyConcept title="The In-Game Replay Workflow" icon="🎮">
          <p>
            Tekken 8's built-in replay system is more powerful than most players realize. Here's the
            exact workflow:
          </p>
          <ol>
            <li><strong>Go to the leaderboard.</strong> Find top-ranked players who play Hwoarang.</li>
            <li><strong>Follow them.</strong> This adds their replays to your feed permanently.</li>
            <li><strong>Search by matchup.</strong> Filter replays by character AND opponent character. Struggling against Kazuya? Search for your followed Hwoarang player's replays against Kazuya specifically.</li>
            <li><strong>Watch winning replays.</strong> Filter for wins. You want to see what works, not what doesn't.</li>
            <li><strong>Watch 2 maximum, then go drill.</strong> Don't binge-watch. Two replays, one takeaway, Practice Mode.</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Take Over the Replay">
          When you're watching a replay, you can take over at any moment. Pause at a key decision
          point — the pro is at range 3, the opponent just whiffed. What would YOU do? Then unpause
          and see what they did. If it's different, that's your lesson. You can also rewind and
          literally take control to test: "Could I have done this instead? Would this have worked?"
          This active method is 10x more effective than passive watching.
        </TipBox>

        <CoachCallout
          quote="If there's a matchup giving you issues, search it up on the people you're following. You can literally just follow the best players that play your character and watch their online games. Search by character, search by opponent. Watch winning replays. Take over and test what would have happened if you did something different."
        />
      </Section>

      <Section title="Mode-Switching Practice">
        <p>
          Chapter 12 introduced Attack Mode and Defense Mode. Knowing about them isn't enough —
          you need to practice switching between them consciously until it becomes automatic.
        </p>

        <GameChallenge
          title="Conscious Mode Switching"
          scenario="You're playing ranked matches and need to practice switching between Attack Mode and Defense Mode consciously."
          setup={{
            cpuBehavior: 'Play against real opponents in ranked or player match',
            otherSettings: [
              'Before each round, decide: Attack or Defense based on life totals',
              'Switch modes at least twice per round',
              'Say your mode out loud when switching',
            ],
          }}
          goal="Switch between Attack Mode (loops, approach tools, no backdashing) and Defense Mode (backdash, b+3, punish only) intentionally — not because you got hit."
          successCriteria="You switch modes intentionally (not forced by damage) at least twice per round for 5 matches straight."
          whyThisWorks="It will feel unnatural at first. You'll want to attack when you should be defending, and defend when you should be attacking. That friction IS the learning. Lean into it."
        />

        <TipBox variant="warning" title="Common Mistake">
          Most players only switch modes when forced — they play Attack Mode until they're
          behind, then panic into Defense Mode. The goal is to switch BEFORE you're forced.
          Switch to Defense Mode when you're AHEAD, not when you're losing.
        </TipBox>
      </Section>

      <Section title="Combo Practice Tips">
        <p>
          Hwoarang's combos are uniquely valuable for learning because they force you through
          stance transitions. The more combos you practice, the more natural stances become —
          you start understanding how RFS, LFS, and RFF connect because your hands have done
          it hundreds of times in combo routes.
        </p>

        <KeyConcept title="Awkward Combo Solutions" icon="💡">
          <p>
            Hwoarang combos sometimes put you in weird positions — wrong angle, wrong distance,
            wrong stance. Here are the shortcuts that always work:
          </p>
          <ul>
            <li>
              <strong>Awkward screw situation → b+3 Tornado:</strong> If you haven't used your
              Tornado yet and the combo feels off — wrong angle, opponent at a weird height —
              just go straight into b+3 for Tornado. Don't try to force the planned route. b+3
              reaches far and always converts.
            </li>
            <li>
              <strong>Back-turned combo → orbital (uf+4) → b+3:</strong> When the opponent is
              facing away from you (back splat, backward-facing launch), use uf+4 (orbital heel)
              to spike them, then b+3 for pickup. This always works when they're turned around.
              uf+2 also works but orbital has more range, so default to uf+4.
            </li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Combos Teach Stances">
          Don't skip combo practice because you think it's "just execution." Hwoarang's combo
          routes go through multiple stance transitions. Every combo you learn makes stance
          switching more natural in pressure situations too. The muscle memory transfers directly.
        </TipBox>
      </Section>

      <Section title="Build Your Own Protocols">
        <p>
          These four protocols — whiff punishment, throw breaking, low reaction, mode switching —
          are templates. They share a structure you can use for any skill gap:
        </p>

        <KeyConcept title="Protocol Template" icon="📋">
          <ol>
            <li><strong>Isolate the skill.</strong> What specific thing can't you do? Be precise: not "defense is bad" but "I can't block Dragunov's d+2 on reaction."</li>
            <li><strong>Set a target.</strong> How many reps? What success rate? What time limit? Numbers keep you honest.</li>
            <li><strong>Define success.</strong> What does it look like when you've got it? "I block 80% of the lows" or "I land b+3 5 times in 5 minutes."</li>
            <li><strong>Drill to target.</strong> Not past it. Not beyond it. When you hit the target, stop. Move on. Overdrilling builds fatigue, not skill.</li>
            <li><strong>Apply immediately.</strong> Queue into ranked within 10 minutes of finishing the drill. The neural pathways are fresh — use them or lose them.</li>
          </ol>
        </KeyConcept>

        <CoachCallout
          quote="Every skill gap is the same shape: you can't do something. The solution is always the same shape too: isolate it, drill it, test it live. Don't make this more complicated than it is. The hard part isn't the method — it's the discipline to actually do it."
        />

        <p>
          The most important thing about training is consistency. Fifteen minutes of focused
          practice before each ranked session will improve you faster than two hours of random
          Practice Mode once a week. The protocols in this chapter are designed to be short enough
          that you can run one before every play session. Pick the one that matches your current
          weakest skill, and run it until it stops being your weakness. Then move to the next one.
        </p>
      </Section>
    </Chapter>
  )
}
