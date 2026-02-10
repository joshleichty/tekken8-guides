import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="First Buttons"
      intro="The moves you'll press in every single match. Not a list to memorize — a toolkit built around situations."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="The Counter-Hit Game"
    >
      <Section title="Your Mid Check">
        <p>
          In Tekken, the most important thing you can do is check your opponent with fast mids.
          If they're pressing buttons, you interrupt them. If they're ducking, you hit them.
          Lee's mid check is one of the cleanest in the game.
        </p>

        <MoveCard
          character="lee"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '10',
            startup: 'i13',
            onBlock: '-1',
            onHit: '+5',
            tags: ['Mid', 'Core Poke'],
            description: 'Your main mid poke. -1 on block means your opponent barely gets a turn back. +5 on hit means your counter-hit tools become terrifying.',
          }}
          showVideo
        />

        <KeyConcept title="Why -1 is Amazing on Lee" icon="🧠">
          <p>
            Most characters use df+1 as a simple check. On Lee, it's a <strong>trap</strong>.
            After df+1 on block (-1), the opponent thinks it's "their turn." So they press a button.
            That's exactly when your i11 magic 4 catches them for a counter-hit launch.
          </p>
          <p>
            After df+1 on hit (+5), you're plus enough that almost anything you press will trade in
            your favor. This is where the counter-hit game begins — and that's Chapter 3.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Your Fastest Tools">
        <p>
          Sometimes you need speed over everything. These are your i10 options — the fastest buttons
          in your kit.
        </p>

        <MoveCard
          character="lee"
          move={{
            input: '1',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '+1',
            onHit: '+8',
            tags: ['High'],
            description: 'Standard jab. +1 on block keeps your turn. +8 on hit sets up everything. Use it to check, interrupt, and set up counter-hit traps.',
          }}
          showVideo
        />

        <MoveCard
          character="lee"
          move={{
            input: '2,2,3',
            hitLevel: ['h', 'm', 'h'],
            damage: '10, 14, 23',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+17a',
            tags: ['High-Mid-High', 'Wallsplat', 'Heat Engager'],
            description: 'Your fastest CH string. On counter-hit from the first hit, the full string combos naturally. Wallsplats. At i10, this is the fastest CH conversion in the game.',
            notes: ['Balcony Break. Combos from 1st hit on CH.'],
          }}
          showVideo
        />

        <TipBox variant="tip" title="2,2,3 — The Invisible Punish">
          Because 2,2,3 starts with a jab and wallsplats, it's devastating near walls. Opponents
          who press buttons when it's not their turn eat the full string. At -3 on block, it's
          essentially safe. Throw this out liberally when you think the opponent is pressing.
        </TipBox>
      </Section>

      <Section title="Your Approach Tool">
        <p>
          Lee doesn't want to be in the opponent's face for long — but sometimes you need to close
          distance. This is your go-to.
        </p>

        <MoveCard
          character="lee"
          videoId="f,F+3"
          move={{
            input: 'f,f+3',
            hitLevel: ['m'],
            damage: '14',
            startup: 'i14',
            onBlock: '-9',
            onHit: '+16a',
            tags: ['Mid', 'Launcher', 'Heat Engager'],
            description: 'Safe long-range mid knee. Launches on hit. Your primary way to close distance and start heat. Low crushes, so it beats people trying to poke you out of your approach.',
            notes: ['Low crush. Becomes a launcher in Heat.'],
          }}
          showVideo
        />

        <KeyConcept title="f,f+3 Is Your Swiss Army Knife" icon="🔑">
          <p>
            This move does everything. It's a ranged approach tool, a launcher on hit, a heat engager,
            and it low crushes. At -9 on block, it's punishable by i10 jabs but nothing more. When you
            don't know what to do at range, f,f+3 is almost always a reasonable answer.
          </p>
          <p>
            <strong>In Heat:</strong> f,f+3 becomes a full launcher on block or hit. This completely
            changes your ranged game — covered in Chapter 10.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Your Low Pokes">
        <p>
          Lee's lows are his biggest weakness — they're all risky. But you still need them. These two
          are your most practical options.
        </p>

        <MoveCard
          character="lee"
          videoId="b+3,3"
          move={{
            input: 'b+3,3',
            hitLevel: ['l', 'h'],
            damage: '9, 12',
            startup: 'i15',
            onBlock: '-12',
            onHit: '-1',
            tags: ['Low-High', 'Mist Step'],
            description: 'Your main low poke string. The first hit is a low that transitions to Mist Step with F. The full string is -12 on block — punishable by ws punishment but not launch punishable.',
            notes: ['Transition to Mist Step with F. Combos from 1st hit.'],
          }}
          showVideo
        />

        <MoveCard
          character="lee"
          move={{
            input: 'd+4',
            hitLevel: ['l'],
            damage: '7',
            startup: 'i12',
            onBlock: '-13',
            onHit: '-14',
            tags: ['Low', 'Fast'],
            description: 'Fast low check at i12. Low damage but fast enough to interrupt. Has extensions (d+4,4 and d+4,4,4) but they\'re risky. Best as a quick poke to remind them lows exist.',
          }}
          showVideo
        />

        <TipBox variant="warning" title="Lee's Low Dilemma">
          Notice something? b+3,3 is -12 on block and only -1 on hit. d+4 does 7 damage. Neither
          of these is going to chip someone to death. <strong>That's by design.</strong> Lee's lows
          exist to force respect — to make the opponent hesitate so your mids and counter-hit
          tools land. You don't spam lows with Lee. You sprinkle them.
        </TipBox>
      </Section>

      <Section title="The Poke Pattern">
        <p>
          With these five tools, you already have a basic gameplan. Here's how they work together:
        </p>

        <KeyConcept title="The Loop" icon="🔄">
          <ul>
            <li><strong>df+1</strong> — Check them. Are they pressing after? Use magic 4 (Chapter 3).</li>
            <li><strong>1 jab</strong> — Interrupt and set up. +8 on hit leads into anything.</li>
            <li><strong>2,2,3</strong> — Throw this out when you think they're pressing. Wallsplats on CH.</li>
            <li><strong>f,f+3</strong> — Close distance safely. Use at range 2-3 when they're standing.</li>
            <li><strong>b+3,3 or d+4</strong> — Sprinkle lows to keep them honest. Don't overuse.</li>
          </ul>
          <p>
            This isn't complicated, and that's the point. Lee's basic game is simple: check with mids,
            poke at range, and use lows sparingly to prevent the opponent from just blocking everything.
            The <em>magic</em> happens when you layer counter-hit tools on top of this — that's next.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Drill: Building the Habit">
        <PracticeBox
          title="Core Poke Drill"
          setup="Set dummy to Guard All. Practice at different ranges."
          tasks={[
            { id: 'df1-10', text: 'Land df+1 ten times from close range', type: 'counter', target: 10 },
            { id: 'jab-check', text: 'Land 1 jab into 2,2,3 — feel the speed difference', type: 'toggle' },
            { id: 'ff3-range', text: 'Land f,f+3 from max range five times', type: 'counter', target: 5 },
            { id: 'low-mix', text: 'Alternate df+1 and b+3,3 — mix mids and lows', type: 'toggle' },
          ]}
        />

        <PracticeBox
          title="Against a Pressing Dummy"
          setup="Set dummy to 2nd Action: Jab after blocking. This simulates an opponent who presses buttons."
          tasks={[
            { id: 'df1-ch', text: 'Do df+1, then press 4,4 — watch for the CH launch', type: 'toggle' },
            { id: 'jab-ch', text: 'Do jab (1), then press 4,4 — feel the timing when they press back', type: 'toggle' },
            { id: '223-ch', text: 'Throw out 2,2,3 while the dummy jabs — see the full string connect on CH', type: 'toggle' },
          ]}
        />

        <TipBox variant="tip" title="What You Should Feel">
          By the end of this drill, you should feel the rhythm: <strong>poke, watch, punish</strong>.
          You throw out a mid, you see what they do, and you use the right tool. Right now, your
          only "punish" tool is 2,2,3. In the next chapter, you get the full counter-hit arsenal.
        </TipBox>
      </Section>
    </Chapter>
  )
}
