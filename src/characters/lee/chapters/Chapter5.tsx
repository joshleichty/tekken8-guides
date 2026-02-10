import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, ExecutionBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Just Frame Mastery"
      intro="The execution chapter. Lee's just frame inputs turn good punishment into devastating punishment. Here's how to learn them without losing your mind."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Punishment"
    >
      <Section title="Why Just Frames Matter">
        <p>
          Most characters have a fixed punishment table: -10 gets X damage, -14 gets Y. Lee is different.
          His punishment damage <em>scales with execution</em>. A Lee who can't do Acid Rain gets 20 damage
          from -10 moves. A Lee who can gets 50+. Same move, same situation, wildly different outcome.
        </p>
        <p>
          This chapter teaches four just frame inputs. You don't need all of them immediately — but each
          one you master makes your Lee measurably stronger.
        </p>

        <KeyConcept title="The Execution Ladder" icon="🪜">
          <ul>
            <li><strong>Acid Rain (1,3:3:3)</strong> — The most impactful. Turns your i10 punish into a combo starter. Learn this first.</li>
            <li><strong>Magic 4 (4,4:4)</strong> — Upgrades your CH launcher with more damage and heat engage. Learn second.</li>
            <li><strong>b+1:1,2</strong> — Enhanced i14 punish with knockdown. Learn third.</li>
            <li><strong>f+4:1</strong> — Tornado combo ender with chip damage. Learn when you're ready for combo optimization.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Acid Rain (1,3:3:3)">
        <MoveCard
          character="lee"
          videoId="1,3"
          move={{
            input: '1,3:3:3',
            hitLevel: ['h', 'h', 'm', 'h'],
            damage: '5, 5, 4, 14',
            startup: 'i10',
            onBlock: '-17',
            onHit: '+14',
            tags: ['Just Frame', 'i10 Punish', 'Timestop'],
            description: 'The best 10-frame punish in Tekken. Just frame inputs on each :3. On hit, timestops and leads to a full combo. 5 chip damage. This single move changes how opponents play against you.',
            notes: ['Timestop on hit. 5 chip damage. Just-frame on each :3.'],
          }}
          showVideo
        />

        <ExecutionBox title="Acid Rain Drill Method" icon="🎯">
          <p>Don't try the full input immediately. Build it up in layers:</p>
          <ol>
            <li><strong>Step 1: 1,3</strong> — Just the first two hits. Get the rhythm of 1 into 3. Do this 20 times.</li>
            <li><strong>Step 2: 1,3:3</strong> — Add one just frame. The timing is a slight delay after the 3. Not instant, not slow — think "1,3... 3". Do this until you hit it 5 times in a row.</li>
            <li><strong>Step 3: 1,3:3:3</strong> — The full input. Same timing for the last :3 as the middle one. The rhythm is "1,3... 3... 3".</li>
          </ol>
          <p>
            <strong>The trick:</strong> Each :3 is pressed just as the previous kick <em>connects</em>. Watch the animation — when the kick lands, press the next 3. It's visual timing, not rhythmic timing.
          </p>
        </ExecutionBox>

        <TipBox variant="tip" title="The Fallback">
          If you drop Acid Rain in a match, <strong>1,2,4</strong> is your safe i10 punish. Less damage,
          but it comes out every time. Use 1,2,4 until your Acid Rain is consistent, then start
          going for it in matches. A dropped Acid Rain that whiffs is worse than a clean 1,2,4.
        </TipBox>
      </Section>

      <Section title="Magic 4 Just Frame (4,4:4)">
        <MoveCard
          character="lee"
          videoId="4,4,4"
          move={{
            input: '4,4:4',
            hitLevel: ['h', 'h', 'h'],
            damage: '14, 5, 12',
            startup: 'i11',
            onBlock: '-9',
            onHit: '+15a',
            onCH: '+29a',
            tags: ['Just Frame', 'CH Launcher', 'Heat Engager'],
            description: 'The just frame upgrade to magic 4. The third :4 adds damage, heat engage, and balcony break. Without the just frame, 4,4 still launches on CH — so you always have the fallback.',
            notes: ['Heat Engager. Balcony Break.'],
          }}
          showVideo
        />

        <ExecutionBox title="4,4:4 Timing" icon="⏱️">
          <p>
            Unlike Acid Rain, the magic 4 just frame is about <strong>delaying</strong> rather than
            precise timing. The first two hits (4,4) come out fast. The third (:4) needs a
            <em>deliberate pause</em> before pressing.
          </p>
          <p>
            <strong>Rhythm:</strong> "4,4......4" — two quick taps, then wait a beat, then the third.
            If you press all three quickly, the third hit won't come out. The delay is roughly the
            time of one animation frame of the second kick connecting.
          </p>
        </ExecutionBox>
      </Section>

      <Section title="b+1:1,2 — The Enhanced Punish">
        <MoveCard
          character="lee"
          videoId="b+1,1,2"
          move={{
            input: 'b+1:1,2',
            hitLevel: ['h', 'm', 'h'],
            damage: '12, 6, 23',
            startup: 'i14',
            onBlock: '-6',
            onHit: '+39d',
            tags: ['Just Frame', 'Punish', 'Knockdown'],
            description: 'i14 just frame punish with knockdown. The :1 is the just frame — press it as the first b+1 connects. Full string knockdowns and leads to oki. Enhanced in Heat.',
            notes: ['Balcony Break. Just-frame input on the :1.'],
          }}
          showVideo
        />

        <ExecutionBox title="b+1:1,2 Input" icon="🔧">
          <p>
            The just frame here is between b+1 and the second 1. Press 1 as the first b+1 animation
            makes contact. Then the ,2 is just a natural extension.
          </p>
          <p>
            <strong>Fallback:</strong> Without the just frame, b+1,1,2 has different properties. The
            just frame version is what gives you the full knockdown damage. Practice until consistent.
          </p>
        </ExecutionBox>
      </Section>

      <Section title="f+4:1 — The Combo Ender">
        <MoveCard
          character="lee"
          videoId="f+4,1"
          move={{
            input: 'f+4:1',
            hitLevel: ['h', 'h'],
            damage: '13, 27',
            startup: 'i11',
            onBlock: '+5',
            onHit: '+20a',
            tags: ['Just Frame', 'Tornado', 'Plus on Block', 'Chip'],
            description: 'Tornado with 10 chip damage. +5 on block. Used primarily as a combo ender for tornado, but the plus frames and chip make it useful in pressure too.',
            notes: ['Tornado. Balcony Break. 10 chip damage.'],
          }}
          showVideo
        />

        <TipBox variant="tip" title="Combo Priority">
          f+4:1 is the just frame you learn last because it's primarily a combo ender. Your combos
          work fine without it using other tornado options. But when you master it, every combo does
          more damage and chips on block during pressure.
        </TipBox>
      </Section>

      <Section title="Heat and Just Frames">
        <KeyConcept title="Heat Gives Free Just Frames" icon="🔥">
          <p>
            During Heat, Lee's just frame inputs become automatic — you don't need the precise timing.
            This is powerful for two reasons:
          </p>
          <ul>
            <li><strong>Guaranteed punishment:</strong> Acid Rain in Heat never drops. Every -10 move gets full combo punishment.</li>
            <li><strong>Experience the payoff:</strong> Use Heat to feel what full-execution Lee plays like before you can do it manually.</li>
          </ul>
          <p>
            But Heat costs meter. Every time you use Heat for "free" just frames, you're spending a resource.
            The goal is to learn the manual inputs so you can save Heat for offensive tools (Chapter 10).
          </p>
        </KeyConcept>
      </Section>

      <Section title="Drill: Execution Lab">
        <PracticeBox
          title="Acid Rain Progression"
          setup="Go to Practice Mode. No dummy settings needed — just practice the input."
          tasks={[
            { id: 'ar-13', text: 'Land 1,3 cleanly 20 times', type: 'counter', target: 20 },
            { id: 'ar-133', text: 'Land 1,3:3 (one just frame) 10 times', type: 'counter', target: 10 },
            { id: 'ar-1333', text: 'Land full Acid Rain (1,3:3:3) 5 times', type: 'counter', target: 5 },
            { id: 'ar-row', text: 'Land Acid Rain 3 times in a row without dropping', type: 'counter', target: 3 },
          ]}
        />

        <PracticeBox
          title="Just Frame in Context"
          setup="Set dummy to do a -10 move (like a blocked jab string). Practice punishing with Acid Rain."
          tasks={[
            { id: 'ar-punish', text: 'Punish the -10 move with Acid Rain 5 times', type: 'counter', target: 5 },
            { id: 'jf44-ch', text: 'Set dummy to press after df+1. Land CH 4,4:4 (with just frame) 3 times', type: 'counter', target: 3 },
            { id: 'b11-punish', text: 'Set dummy to do a -14 move. Punish with b+1:1,2 three times', type: 'counter', target: 3 },
          ]}
        />

        <TipBox variant="warning" title="Execution Patience">
          Just frames take days, sometimes weeks of practice to become consistent. Don't grind
          for hours in one session — your hands get tired and you develop bad habits. Practice for
          15-20 minutes, then play matches using the fallback versions. Come back to the lab fresh.
        </TipBox>
      </Section>
    </Chapter>
  )
}
