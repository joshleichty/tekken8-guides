import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, DecisionGrid } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Controlling the Arena"
      intro="Most characters need to approach their opponent. Lidia doesn't. She controls the space and lets the opponent come to her — then punishes them for it. This chapter teaches you how Lidia wins the neutral game without running in."
      hasPrevious
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="The Approach"
    >
      <Section title="Political Storm as Space Control">
        <p>
          You already know Political Storm (f+1+2,3,1+2) as a punisher. But its real power is as a
          neutral tool. From mid-range, Lidia becomes a moving projectile — the move covers enormous
          distance and activates heat on hit. The <em>threat</em> of Political Storm is often more
          valuable than actually using it.
        </p>
        <p>
          Here's how it works in practice: you stand at about range 3 (roughly two backdashes away).
          The opponent wants to approach you. They dash forward, or throw out a running move, or try
          to sidestep in. That's when you throw Political Storm. The first hit catches their forward
          movement, and you hit confirm the rest.
        </p>

        <KeyConcept title="Hit Confirming Political Storm" icon="🎯">
          <p>
            This is the most important execution skill for Lidia. You must practice this until
            it's second nature.
          </p>
          <ol>
            <li>Always input <code>f+1+2,3</code> (through the knee). Never stop before the knee, never commit to the full string blindly.</li>
            <li>Watch the first hit (the f+1+2). If it connects with the opponent, you'll see and hear the impact.</li>
            <li>If it hit: press <code>1+2</code> to complete the string and activate heat.</li>
            <li>If it was blocked: do nothing. You're at -13 (the knee), which is punishable but not launch punishable. Acceptable risk for the reward.</li>
          </ol>
          <p>
            You have a surprisingly long window after the knee to input the final 1+2. Practice
            in training mode with the opponent on random block until you can confirm this 9 out
            of 10 times.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Throw the Full String on Block">
          The full Political Storm is -15 on block — launch punishable. If you always complete
          the string hoping it hits, good opponents will block it and kill you. The hit confirm
          is non-negotiable. Learn it.
        </TipBox>
      </Section>

      <Section title="The Tracking Problem">
        <p>
          Lidia is <strong>very linear</strong>. Most of her key moves lose to sidestep right.
          Political Storm, 1,2, b+1, f,f+2 — all beaten by SSR. This is her biggest weakness
          and you need two specific tools to handle it.
        </p>

        <MoveCard
          character="lidia"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i13',
            onBlock: '-5',
            onHit: '+2',
            tags: ['tracking'],
            description: "Tracks sidestep RIGHT. This is your answer to Lidia's weak side. When opponents are stepping everything, df+1 catches them. The extension df+1,3 is a counter-hit launcher if they press buttons after the first hit. The extension df+1,2 is a natural combo for quick damage.",
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i15',
            onBlock: '0 (-8 real)',
            onHit: '+11',
            onCH: '+14 (+24g)',
            tags: ['tracking'],
            description: "Tracks sidestep LEFT. Transitions to CAT stance on hit and block. On counter-hit, guarantees CAT 3 (heat engager). The best way to use df+2 is to throw it out and hold back — if it hit on counter-hit, you'll see the unique animation, then press CAT 3 for heat activation.",
            notes: ['On block: hold back to exit CAT safely', 'On CH: react to the stagger animation, press 3 for heat engager'],
          }}
          showVideo
        />

        <KeyConcept title="The Tracking Pair" icon="🔑">
          <p>
            df+1 tracks right. df+2 tracks left. Together, they cover both sidestep directions.
            When you're up close and the opponent keeps sidestepping, alternate between these two
            to shut down their movement. If you notice they favor one side, lean on the move that
            catches it.
          </p>
          <p>
            For actual homing moves, you have <strong>b+4</strong> (h, i16, -3, homing, CH knockdown
            into f,f+3) and <strong>db+3</strong> (L, i16-17, -11, homing, into HRS). But these
            have drawbacks — b+4 is a high with short range, and db+3 is a punishable low. The
            tracking pair is almost always the better choice.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Keepout">
        <p>
          When the opponent is approaching and you want to keep them at range, these are your tools
          beyond Political Storm.
        </p>

        <MoveCard
          character="lidia"
          move={{
            input: 'b+3',
            hitLevel: ['m'],
            damage: '16',
            startup: 'i17',
            onBlock: '-7',
            onHit: '+4',
            description: "Mid kick with decent range. The real value is the extensions: b+3,4,1+2 (or b+3,4,qcf+1+2) is three guaranteed hits for ~45 damage. The last hit is launch punishable but hit confirmable — throw out b+3,4 and finish only if it connects. b+3,1 is a safer mid-mid option (+5 on hit). If the first hit whiffs and they try to whiff punish, b+3,1 on counter-hit gives +14 and a guaranteed Political Storm.",
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          move={{
            input: 'df+4',
            hitLevel: ['m'],
            damage: '12',
            startup: 'i15',
            onBlock: '-4',
            onHit: '+6',
            description: "Safe mid poke with good range. Extension df+4,2 is a tornado move useful for combos and whiff punishment. At -4 on block, it's one of your safest poking options from range.",
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          videoId="df+3+4"
          move={{
            input: 'df+3+4',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i22',
            onBlock: '-9',
            onHit: '+12g',
            tags: ['homing'],
            description: "Slow but homing mid. Use this when sidestep-happy opponents are making your faster tools whiff. The speed makes it predictable, but the homing property means it catches everything.",
          }}
          showVideo
        />

        <DecisionGrid
          title="Neutral Response Map"
          description="What to do based on what the opponent is doing from mid-range."
          rows={[
            { situation: 'They dash forward', response: 'f+1+2,3 (confirm)', reason: 'Political Storm catches approaches', risk: '-13 on block if they block the knee' },
            { situation: 'They whiff a move', response: 'f+1+2,3,1+2 or b+3,4,1+2', reason: 'Full punish into heat or damage', risk: 'Must confirm the whiff quickly' },
            { situation: 'They sidestep right', response: 'df+1', reason: 'Tracks their weak-side step', risk: '-5 on block, minor' },
            { situation: 'They sidestep left', response: 'df+2', reason: 'Tracks left, into CAT on CH', risk: '-8 real on block' },
            { situation: 'They stay back / turtle', response: 'Walk forward, d+2 or db+3', reason: 'Claim space, force them to act', risk: 'Low commitment required' },
            { situation: 'They run at you', response: 'Backdash → b+3,4 or PS', reason: 'Make them whiff, punish', risk: 'Requires spacing awareness' },
          ]}
        />
      </Section>

      <Section title="Playing at Range">
        <p>
          Lidia's mid-range game might feel awkward compared to characters with strong running moves
          or long-range approach tools. She doesn't have a safe running mid that forces a mixup on block.
          That's okay. She doesn't need one.
        </p>
        <p>
          Instead, use the <em>threat</em> of Political Storm and b+3 to make opponents afraid to
          approach. When they stop approaching, you can walk forward without pressing a button. Close
          the gap for free. Once you're at range 1-2, that's when your pokes (df+1, 1,2), approach
          tools (f,f+2, Chapter 4), and lows (d+2, Chapter 8) take over.
        </p>
        <p>
          The mistake new Lidia players make is feeling pressured to "do something" at range. You
          don't. Backdash, sidestep, watch. When they commit to an approach, punish it. When they
          don't, walk in and take your turn. The patience IS the gameplan.
        </p>

        <PracticeBox
          title="Neutral Control Drill"
          setup="Practice Mode, opponent set to approach with running moves (random timing)"
          tasks={[
            { id: 'ps-confirm-drill', text: 'Hit confirm Political Storm 10 times (stop at the knee on block)', type: 'counter', target: 10 },
            { id: 'b3-confirm', text: 'Hit confirm b+3,4,1+2 — throw b+3,4, finish only on hit', type: 'counter', target: 10 },
            { id: 'tracking-pair', text: 'Set opponent to SSR then SSL. Catch SSR with df+1, SSL with df+2', type: 'toggle' },
            { id: 'backdash-whiff', text: 'Backdash an approach, whiff punish with Political Storm', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="The First 10 Seconds">
          In the first 10 seconds of a round, don't attack. Move back and forth, watch what the
          opponent does. Do they run in? Sidestep? Throw out a move from range? That information
          tells you exactly which tools to use for the rest of the round.
        </TipBox>
      </Section>
    </Chapter>
  )
}
