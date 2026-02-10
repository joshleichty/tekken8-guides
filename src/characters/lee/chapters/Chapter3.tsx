import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, DecisionGrid } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Reading Buttons — The Counter-Hit Game"
      intro="This is Lee's soul. Not a list of counter-hit launchers — a way of seeing when opponents give you free damage."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Keepout"
    >
      <Section title="Counter-Hits Are a Mindset">
        <p>
          Every character has counter-hit launchers. What makes Lee special isn't the <em>moves</em> — it's
          the <em>situations</em>. Lee creates more counter-hit opportunities than almost anyone because
          his poke game is designed to make opponents press buttons at the wrong time.
        </p>
        <p>
          Chapter 2 taught you the pokes. Now you learn what happens when the opponent tries to
          respond to them. The answer, almost always, is that they eat a counter-hit launcher.
        </p>

        <KeyConcept title="When Counter-Hits Happen" icon="🎯">
          <p>Counter-hits happen in three situations:</p>
          <ul>
            <li><strong>After your poke is blocked:</strong> You did df+1 (-1). The opponent thinks it's their turn and presses a button. But you pressed your CH tool first.</li>
            <li><strong>After your poke hits:</strong> You landed df+1 (+5). The opponent doesn't realize they're minus and presses. You're already ahead.</li>
            <li><strong>When the opponent approaches:</strong> They dash forward to close distance. You press a keepout CH tool. They run into it.</li>
          </ul>
          <p>
            The key insight: <strong>you don't guess when to use CH tools</strong>. You create the
            situation, then deploy the correct tool for that situation.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Crown Jewel: Magic 4">
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
            tags: ['High', 'CH Launcher', 'Heat Engager', 'Just Frame'],
            description: 'The fastest counter-hit launcher in Tekken. i11 startup means it beats almost everything after your plus-frame pokes. The third hit (:4) is a just frame — without it, 4,4 still gives a launch on CH from the second hit.',
            notes: ['Balcony Break. Just-frame input on 3rd hit. Second hit launches on CH.'],
          }}
          showVideo
        />

        <KeyConcept title="The 4,4 System" icon="⚡">
          <p>You don't need the just frame to use this move effectively:</p>
          <ul>
            <li><strong>4,4 (no just frame):</strong> The second 4 still launches on counter-hit. Less damage but completely reliable. Start here.</li>
            <li><strong>4,4:4 (just frame):</strong> Adds a third hit that gives more combo potential and is a heat engager. Learn this over time.</li>
          </ul>
          <p>
            <strong>When to use it:</strong> After df+1 block (-1), after jab hit (+8), whenever you think the
            opponent is about to press a button. At i11, only i10 jabs beat it — and if you're plus, nothing beats it.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="The Timing Secret">
          4,4:4 is <strong>not</strong> three fast taps. It's two taps, then a <em>delayed</em> third.
          Think of it as "4,4... 4" — the delay is what makes the just frame connect. If you mash
          all three fast, the third hit won't come out. Practice the rhythm: quick-quick-pause-press.
        </TipBox>
      </Section>

      <Section title="The Close-Range Trade Tool">
        <MoveCard
          character="lee"
          move={{
            input: '1+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i21',
            onBlock: '-1',
            onHit: '+3',
            onCH: '+26a',
            tags: ['Mid', 'Homing', 'CH Launcher'],
            description: 'Safe homing mid that launches on counter-hit. Catches sidesteps AND pressing. -1 on block means they can\'t punish it. Transitions to Hitman Stance with 3+4.',
            notes: ['Homing. Floor Break. HMS transition with 3+4.'],
          }}
          showVideo
        />

        <p>
          1+2 fills a gap that magic 4 can't: it's a <strong>mid</strong> and it <strong>homes</strong>.
          Magic 4 is high (duckable) and linear (steppable). When the opponent starts ducking your
          4,4 or sidestepping, 1+2 catches both. At -1 on block, there's no risk.
        </p>
      </Section>

      <Section title="The High-Crush Read">
        <MoveCard
          character="lee"
          move={{
            input: 'd+3',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i16',
            onBlock: '-15',
            onHit: '-1',
            onCH: '+17a',
            tags: ['Low', 'CH Launcher', 'High Crush'],
            description: 'High-crushing low that launches on counter-hit. Use when you READ that the opponent will jab. The high crush means their jab whiffs over you while your low connects.',
            notes: ['High crush from frame 6. HMS transition with 4.'],
          }}
          showVideo
        />

        <TipBox variant="warning" title="-15 On Block">
          d+3 is <strong>launch punishable</strong> on block. This is not a poke — it's a <strong>read</strong>.
          Use it when you're confident the opponent is about to press a high. If they block it,
          you eat a full combo. The reward (CH launch) matches the risk.
        </TipBox>
      </Section>

      <Section title="The Ranged Counter-Hit">
        <MoveCard
          character="lee"
          videoId="f,F+4"
          move={{
            input: 'f,f+4',
            hitLevel: ['h'],
            damage: '22',
            startup: 'i16',
            onBlock: '-5',
            onHit: '+29a',
            tags: ['High', 'Launcher', 'High Crush'],
            description: 'High-crushing launcher at range. Use at range 2-3 when you expect the opponent to press a button or whiff something. Crushes lows on approach.',
            notes: ['High crush from frame 5.'],
          }}
          showVideo
        />

        <p>
          f,f+4 is your answer to opponents who try to check your approach with jabs or fast highs.
          It high-crushes from frame 5, meaning it goes under their buttons while launching them.
          At -5 on block, only the fastest punishment reaches it.
        </p>
      </Section>

      <Section title="Choosing the Right Tool">
        <p>
          The difference between a good Lee and a great Lee isn't execution — it's <em>selection</em>.
          Which counter-hit tool you pick depends on the situation.
        </p>

        <DecisionGrid
          title="Counter-Hit Decision Map"
          description="What the opponent does determines which CH tool you use."
          rows={[
            {
              situation: 'They press after your df+1 block (-1)',
              response: '4,4(:4) — Magic 4',
              reason: 'i11 beats everything except their jab, and at -1 even jabs trade in your favor',
              risk: 'They duck — magic 4 is high',
            },
            {
              situation: 'They press after your jab hit (+8)',
              response: '4,4(:4) — Magic 4',
              reason: 'You\'re +8, so your i11 move hits before their fastest option',
              risk: 'They block — but 4,4 is only -9, so you\'re safe',
            },
            {
              situation: 'They duck your highs',
              response: '1+2',
              reason: 'Mid and homing — catches ducking and stepping. Launches on CH.',
              risk: 'None meaningful — -1 on block',
            },
            {
              situation: 'They sidestep your pressure',
              response: '1+2',
              reason: 'Homing catches all sidesteps. CH launch punishes movement.',
              risk: 'Slower at i21 — can be jabbed on read',
            },
            {
              situation: 'They jab you out of pokes',
              response: 'd+3',
              reason: 'Crushes high attacks. CH launches them for pressing.',
              risk: '-15 on block. Only use on a read.',
            },
            {
              situation: 'They approach from range 2-3',
              response: 'f,f+4 or b+4',
              reason: 'Catches forward movement with high-crush or keepout mid',
              risk: 'Both whiff if they don\'t commit',
            },
          ]}
        />
      </Section>

      <Section title="The Counter-Hit Trap">
        <p>
          Here's how it all connects in a real match. This is the pattern you'll run hundreds of times:
        </p>
        <ol>
          <li><strong>Poke:</strong> df+1 or jab. Establish that you're pressing buttons.</li>
          <li><strong>Watch:</strong> Do they press back? Duck? Step? Stand and block?</li>
          <li><strong>Deploy:</strong> They press → magic 4. They duck → 1+2. They step → 1+2. They jab → d+3.</li>
          <li><strong>Adapt:</strong> After eating a CH launcher, they'll change behavior. Read the adaptation and cycle back to step 1.</li>
        </ol>

        <KeyConcept title="The Beautiful Cycle" icon="🔄">
          <p>
            This cycle is why Lee is so satisfying. You're not executing a flowchart — you're
            <strong> reading a human being</strong>. Every opponent responds differently to your pokes.
            Your job is to figure out their pattern and punish it with the right tool. The more you
            play, the faster you read. That's the Lee experience.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Drill: Counter-Hit Reactions">
        <PracticeBox
          title="Magic 4 Timing"
          setup="Set dummy to 2nd Action: Jab after blocking. Do df+1, then immediately 4,4."
          tasks={[
            { id: 'ch-44-5', text: 'Land CH 4,4 five times after df+1 block', type: 'counter', target: 5 },
            { id: 'ch-44-hit', text: 'Land CH 4,4 after df+1 hit (dummy set to jab after hit)', type: 'counter', target: 5 },
            { id: 'try-jf', text: 'Try 4,4:4 — land the just frame version at least once', type: 'toggle' },
          ]}
        />

        <PracticeBox
          title="Reading the Response"
          setup="Set dummy to random: jab, duck, sidestep, or block. Use different CH tools for each."
          tasks={[
            { id: 'press-44', text: 'Use 4,4 when they press buttons', type: 'toggle' },
            { id: 'duck-12', text: 'Use 1+2 when they duck', type: 'toggle' },
            { id: 'step-12', text: 'Use 1+2 when they sidestep', type: 'toggle' },
            { id: 'jab-d3', text: 'Use d+3 when they jab — feel the high crush', type: 'toggle' },
          ]}
        />
      </Section>
    </Chapter>
  )
}
