import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  StanceBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Waltz"
      intro="A waltz has a rhythm: step, step, close. Lili plays Tekken the same way. She steps into range with long limbs, locks the opponent behind plus frames, and closes the distance into her stances where they have to guess. When the guess goes wrong, the round is over. When it goes right, she steps back out and starts the waltz again."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Your Neutral Tools"
    >
      <Section title="Who Lili Is">
        <p>
          Lili de Rochefort is arguably the strongest version of herself in the entire history of Tekken.
          She's a mid-range controller with the best sidestep in the game, a devastating array of
          plus-on-block tools, and stance transitions that force opponents into binary guesses where both
          answers cost them health.
        </p>
        <p>
          She doesn't play like a rushdown character even though she can suffocate you. She doesn't play
          like a keepout character even though her legs reach from across the stage. She plays like a
          <strong> rhythm character</strong> — someone who dictates the tempo of the match, decides when
          the exchanges happen, and punishes anyone who tries to play at a speed she hasn't set.
        </p>
        <p>
          Her tools are simple. Her execution requirements are low. What separates a good Lili from a
          great one isn't how many combos you memorize — it's how well you read the rhythm of the
          opponent and choose the right tool at the right beat.
        </p>
      </Section>

      <Section title="The Three Beats">
        <p>
          Lili's game revolves around three phases that cycle throughout the round. Understanding
          these phases — and recognizing which one you're in — is the foundation of everything.
        </p>

        <KeyConcept title="Beat 1: Control Space" icon="👣">
          <p>
            Lili uses her long-range mids (<code>f+4</code>, <code>d+3</code>, <code>df+1</code>) and
            her sidestep to stay at arm's length. She pokes, she moves, she watches. The goal isn't
            damage — it's to make the opponent commit to something punishable or freeze up under
            pressure.
          </p>
        </KeyConcept>

        <KeyConcept title="Beat 2: Lock Them Down" icon="🔒">
          <p>
            When the opponent starts respecting your space, Lili shifts to plus-frame tools.
            <code> qcf+3+4</code> at +6 on block. <code>df+3</code> at +3 on block. <code>f,f+4~B</code>{' '}
            at +10 on hit. These moves don't deal big damage on their own, but they buy something
            more valuable: the right to act next. Each plus frame tool chains into the next, building
            a cage of frame advantage around the opponent.
          </p>
        </KeyConcept>

        <KeyConcept title="Beat 3: Force the Guess" icon="🎭">
          <p>
            From backturn or Feisty Rabbit, Lili presents a loaded question: block low or block mid?
            Both options hurt. <code>BT d+2</code> chips them from below while <code>BT 3,4</code>{' '}
            crunches from above. In heat, <code>Feisty Rabbit 3</code> becomes a knockdown low and{' '}
            <code>Feisty Rabbit 2</code> becomes a launching heat engager. The opponent who guesses
            wrong loses half their life bar.
          </p>
        </KeyConcept>

        <p>
          These three beats repeat. Control space, build advantage, cash out. When a guess goes wrong
          for the opponent, you loop back to beat 1 with a massive life lead. When it goes right for
          them, you retreat to your preferred range and start the waltz over. Lili rarely loses both
          the exchange <em>and</em> her positioning.
        </p>
      </Section>

      <Section title="Your Three Stances">
        <p>
          Lili has three stances, but they're not the complex web of transitions you see on characters
          like Hwoarang or Yoshimitsu. They're simple, clearly defined positions that each serve a
          specific role in her gameplan.
        </p>

        <StanceBox name="Dew Glide" input="qcf (quarter circle forward)" icon="💨">
          <p>
            A crouching dash that goes under highs and some mids. Lili can enter Dew Glide manually
            with a <code>qcf</code> motion, or by holding forward after certain moves
            like <code>b+1</code>, <code>b+2,1</code>, and <code>f,f+3</code>. From here she has
            access to her best plus-frame tool (<code>DEW 3+4</code>), a homing mid
            (<code>DEW 2</code>), a heat engager (<code>DEW 2,1</code>), and the tornado move
            that powers her combos (<code>DEW 3</code>). You can cancel Dew Glide into a sidestep
            by tapping <code>u</code>, making it a mind game by itself.
          </p>
        </StanceBox>

        <StanceBox name="Backturn" input="b+3+4 or after certain moves" icon="🔄">
          <p>
            Lili faces away from the opponent. This sounds risky — and it is if you're reckless. But
            backturn is where her real damage lives. She enters it from <code>1,1</code>,
            <code> d+1,2~B</code>, <code>f,f+4~B</code>, <code>df+3+4</code>, <code>ss+4</code>, and
            many other moves. From backturn, she has an 8-frame jab, high-crushing lows, a power crush,
            and a homing mid-mid string. The opponent has to decide what to do about each one — and
            wrong answers lead to full combos.
          </p>
        </StanceBox>

        <StanceBox name="Feisty Rabbit" input="b+3 (background) or b+4 (foreground)" icon="🐇">
          <p>
            Lili jumps and spins to one side. Outside of heat, this is mostly a movement tool
            and a way to set up her heat engager (<code>FYR 2</code>). In heat, Feisty Rabbit
            becomes one of the scariest 50/50s in the game: <code>FYR 3</code> becomes a knockdown
            low with guaranteed follow-up, and <code>FYR 2</code> becomes a launching heat dash. The
            opponent has to guess, and both answers hurt massively. You can also hold <code>b+3</code>{' '}
            or <code>b+4</code> to double-jump and recover heat meter.
          </p>
        </StanceBox>
      </Section>

      <Section title="Why Lili Works">
        <KeyConcept title="Strengths" icon="💪">
          <ul>
            <li><strong>Best sidestep in the game.</strong> Lili evades things other characters simply cannot. This turns even slight frame disadvantage into opportunities.</li>
            <li><strong>Long-range, safe mids.</strong> Moves like <code>f+4</code>, <code>3,1</code>, and <code>ss+4</code> reach from surprisingly far and are safe on block. Her legs are a weapon.</li>
            <li><strong>Deep plus-frame toolkit.</strong> <code>qcf+3+4</code> (+6), <code>df+3</code> (+3), <code>f,f+4~B</code> (+10), <code>WR 1+2</code> (+4) — she accumulates advantage steadily until the opponent is locked in place.</li>
            <li><strong>Devastating counter hit game.</strong> <code>f+4</code>, <code>ss+4</code>, <code>df+3</code>, <code>db+3</code> — all safe or near-safe counter hit launchers that punish anyone who presses at the wrong time.</li>
            <li><strong>Enormous combo damage.</strong> Thanks to <code>qcf+3</code> as a tornado filler, Lili's combos hit extremely hard for minimal execution.</li>
            <li><strong>Low execution barrier.</strong> Most of her key moves are single inputs. No electrics, no just frames, no complex stance cancels required.</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Weaknesses" icon="⚠️">
          <ul>
            <li><strong>Tracking is her Achilles' heel.</strong> Most of her best moves are linear. Good movement players can step her pressure consistently, especially to her right.</li>
            <li><strong>Key moves hover around 20 frames.</strong> <code>df+3</code>, <code>ss+4</code>, <code>d+3</code>, <code>df+3+4</code> — all slow enough to be counter-hit or interrupted by fast mids.</li>
            <li><strong>Backturn is a commitment.</strong> If the opponent reads your backturn option, the punish is severe. Backturn mids are all unsafe on block.</li>
            <li><strong>Lacks a generic d/f+2 launcher.</strong> Her <code>df+2</code> is i16 and minus on block, so she has to earn her launches through spacing, counter hits, or punishment.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Kind of Player Lili Rewards">
          Lili rewards patience over aggression. If you like characters who control the pace,
          who bait reactions and then punish them, who build small advantages into devastating
          positions — Lili is your character. She's not about overwhelming the opponent with speed.
          She's about making every move feel like a trap, and making the opponent walk into it willingly.
        </TipBox>
      </Section>

      <Section title="Your First Move: qcf+3+4">
        <p>
          Before anything else, one move. This is the heartbeat of Lili's pressure. Dew Glide into
          Cloisonne.
        </p>

        <MoveCard character="lili"
          videoId="DEW.3+4"
          move={{
            input: 'qcf+3+4',
            hitLevel: ['h', 'h'],
            damage: '6, 19',
            startup: 'i12~14',
            onBlock: '+6',
            onHit: '+17g',
            tags: ['Plus on Block', 'High Crush', 'Approach'],
            description: 'Lili\'s signature pressure starter. A double-high out of Dew Glide that is +6 on block, +17 on hit, and goes under highs during the crouch dash. This single move locks the opponent behind plus frames and starts your entire pressure game.',
            notes: [
              '+6 on block — your df+1, df+4, and throws are all enforced',
              '+17 on hit — df+3 and f+4 become uninterruptible frame traps',
              'Goes under highs during the Dew Glide crouch dash animation',
              'Jails on block — both hits are guaranteed if the first connects',
              'Double high — can be ducked on read, so mix with mids from Dew Glide',
              'Tailspins airborne opponents in combos (Season 2)',
            ],
          }}
          showVideo
        />

        <p>
          <strong>On block (+6):</strong> Your turn. The opponent cannot press anything
          faster than your <code>df+1</code> (i13). They can't sidestep your <code>df+4</code> (tracking mid).
          They can't jump or power crush without eating a counter hit. You've built a cage.
        </p>

        <p>
          <strong>On hit (+17):</strong> Massive advantage. <code>df+3</code> (i20) cannot be
          interrupted. <code>f+4</code> (i17) becomes a guaranteed frame trap — if they press anything,
          they eat a counter hit launch. You can also enter Feisty Rabbit for a mix if you have heat.
        </p>

        <p>
          <strong>The risk:</strong> Both hits are high. A sharp opponent who reads the timing can duck
          and launch you. That's why you don't use this in a vacuum — you set it up with your neutral
          tools from the previous beat. After a blocked <code>b+1~F</code> or a poke that puts you at
          neutral, the crouch dash covers your approach and the double-high jails on block.
        </p>

        <PracticeBox
          title="Feel the Rhythm"
          setup="Practice Mode. Lili vs any opponent. Set dummy to Stand Guard. Start at round-start distance."
          tasks={[
            { id: 'lili-qcf34-raw', text: 'Perform qcf+3+4 ten times from various ranges', detail: 'Input: d, df, f+3+4 in one smooth motion. Feel the crouch dash before the hits come out. This is your main approach tool.', type: 'counter', target: 10 },
            { id: 'lili-qcf34-df1', text: 'On block: follow up with df+1 five times', detail: 'After qcf+3+4 gets blocked, immediately press df+1. Notice you\'re at +6 — your mid poke comes out clean. This is your basic "I\'m plus, now what?" check.', type: 'counter', target: 5 },
            { id: 'lili-qcf34-f4', text: 'On hit: follow up with f+4 five times', detail: 'Set dummy to "After Block: Stand" so it gets hit. After qcf+3+4 lands (+17), press f+4. It cannot be interrupted. If they try to press, they get counter hit launched.', type: 'counter', target: 5 },
            { id: 'lili-qcf34-d3', text: 'On block: follow up with d+3 three times', detail: 'After qcf+3+4 gets blocked, do d+3. At +6, your 19-frame low is unreactable and undeniable. This is how you chip opponents who freeze.', type: 'counter', target: 3 },
          ]}
        />

        <TipBox variant="tip" title="What You Just Felt">
          That sequence — approach with Dew Glide, lock them behind plus frames, then choose between
          a mid check, a counter hit launcher, or a chipping low — is Lili's game in miniature. Every
          chapter in this guide expands the options at each step. But the skeleton never changes:
          approach, lock, choose.
        </TipBox>
      </Section>

      <Section title="What's Next">
        <p>
          <code>qcf+3+4</code> is the lock — but you can't lock someone down if you can't get to them.
          Lili's neutral game is what creates the openings. Her long-range mids, her pokes, her
          movement — these are the tools that control the dance floor and force the opponent into
          positions where your pressure becomes inescapable.
        </p>
        <p>
          Next chapter: the neutral tools that put you in charge of the match before the first stance
          transition ever happens.
        </p>
      </Section>
    </Chapter>
  )
}
