import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  Flowchart,
  DecisionGrid,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="The Best Punish in the Game"
      intro="Every character can punish. Azucena turns punishment into pressure. Her 1,1 at i10 transitions directly into Libertador at +8 on hit — meaning every blocked move your opponent does becomes a free stance mixup. No other character in the game gets this."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Libertador"
    >
      <Section title="Punishment Is Momentum">
        <p>
          Most characters punish a blocked move, take their damage, and reset to neutral. Azucena doesn't
          reset. She punishes with <code>1,1</code> and immediately enters Libertador at +8 on hit. Their
          blocked move didn't just cost them damage — it cost them their turn, their positioning, and now
          they're staring down a 50/50 they can't escape.
        </p>

        <p>
          This is why Azucena's punishment chapter isn't just a frame data table. It's about understanding
          that every single punish is a <strong>momentum generator</strong>. You're not just taking damage —
          you're starting the pressure machine.
        </p>
      </Section>

      <Section title="The 10-Frame Punish: 1,1">
        <MoveCard character="azucena"
          move={{
            input: '1,1',
            hitLevel: ['h', 'h'],
            damage: '5, 6',
            startup: 'i10',
            onBlock: '-1',
            onHit: '+8 → LIB',
            tags: ['10f Punish', 'LIB Transition', 'Best i10 in the Game'],
            description: 'The best 10-frame punish in Tekken. On hit, transitions automatically to Libertador at +8. Every punishable move your opponent does becomes a free stance 50/50.',
            notes: ['Auto-transitions to LIB on hit at +8', '-1 on block — essentially neutral', '11 damage is low, but the LIB entry is worth infinitely more', 'Use this for every -10 punish situation']
          }}
          showVideo
        />

        <KeyConcept title="Why 1,1 Changes Everything" icon="⚡">
          <p>
            11 damage doesn't sound impressive. It's not about the damage. It's about what happens <em>after</em>.
          </p>
          <p style={{ marginTop: '12px' }}>
            At +8 in Libertador, your fastest LIB options come out before anything your opponent can do.
            LIB 4,1 (mid) and LIB d+4,4 (low) are both uninterruptible. They <strong>must guess</strong>.
            A wrong guess means 40+ more damage plus wall carry. A right guess means you reset to neutral —
            which just means you're waiting for their next punishable move.
          </p>
        </KeyConcept>

        <Flowchart
          title="The 1,1 Pressure Chain"
          nodes={[
            { type: 'start', label: 'Opponent does a -10 or worse move' },
            { type: 'decision', label: 'Punish with 1,1 → +8 LIB', branches: [
              { label: 'LIB 4,1 (mid)', action: 'Safe, +4 on hit. Pressure continues.' },
              { label: 'LIB d+4,4 (low)', action: 'Hellsweep. Launch punishable but devastating on hit.' },
            ]},
            { type: 'end', label: 'Win the guess → more damage. Lose → reset to neutral. Either way, you profited.' }
          ]}
        />
      </Section>

      <Section title="The Alternative: 1,2">
        <MoveCard character="azucena"
          move={{
            input: '1,2',
            hitLevel: ['h', 'm'],
            damage: '5, 11',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+4',
            tags: ['10f Punish', 'Mid Ender', 'Whiff Punish'],
            description: 'A second i10 option with a mid second hit. Does more damage than 1,1 but doesn\'t transition to LIB. Use for whiff punishment at range when the LIB entry would be wasted.',
            notes: ['16 total damage vs 11 for 1,1', 'Mid second hit can\'t be ducked', 'No LIB transition — use when you don\'t want stance', 'Better for whiff punishment at distance']
          }}
          showVideo
        />

        <TipBox variant="tip" title="1,1 vs 1,2">
          In almost every punish situation, use 1,1. The LIB entry at +8 is worth far more than the extra 5
          damage from 1,2. Only use 1,2 when you're at a range where the LIB mixup wouldn't connect, or when
          you specifically want the mid ender for a high-crushing opponent.
        </TipBox>
      </Section>

      <Section title="Standing Punishment Table">
        <p>
          Azucena's standing punishment covers every frame level. Each punisher is listed with its best use case.
        </p>

        <MoveCard character="azucena"
          move={{
            input: '4,1',
            hitLevel: ['m', 'm'],
            damage: '15, 10',
            startup: 'i12',
            onBlock: '-7',
            onHit: 'KND → BT',
            tags: ['12f Punish', 'BT Transition'],
            description: 'Your 12-frame punish. Knocks down and transitions to Back Turn on hit, giving you BT pressure. Solid damage upgrade over 1,1 when the frames allow it.',
            notes: ['Knockdown on hit into BT stance', '-7 on block — safe', 'Use for -12 or worse moves', '25 total damage']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: '3,3',
            hitLevel: ['h', 'h'],
            damage: '14, 21',
            startup: 'i14',
            onBlock: '-5',
            onHit: '+6',
            tags: ['14f Punish', 'Heat Engager', 'New S2'],
            description: 'Season 2 heat engager that doubles as a 14-frame punish. On hit at +6, you\'re in strong position. In heat, use this for the heat dash cancel pressure.',
            notes: ['Heat engager — use to activate heat', 'Both hits are high — risky as a poke, great as a punish', '-5 on block, safe', 'New in Season 2']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i15',
            onBlock: '-13',
            onHit: 'Launch',
            tags: ['15f Launcher', 'Full Combo'],
            description: 'Your 15-frame launcher. Full combo on hit. This is what you use when you block a hopkick, a snake edge, or any -15 or worse move.',
            notes: ['Full combo on hit — see Chapter 7 for routes', '-13 on block — punishable but rarely comes up as a punisher', 'Standard 15f launch punish']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: 'f+1+2',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i16',
            onBlock: '-12',
            onHit: 'KND',
            tags: ['16f Punish', 'Power Crush', 'Range'],
            description: 'Power crush that doubles as a long-range punisher. Excellent for punishing moves at distance where df+2 won\'t reach.',
            notes: ['Power crush — absorbs hits during startup', 'Long range — punishes moves other tools can\'t reach', '-12 on block', '30 damage + knockdown']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: 'db+1+2',
            hitLevel: ['m'],
            damage: '28',
            startup: 'i20',
            onBlock: '-14',
            onHit: 'Launch',
            tags: ['20f Launcher', 'Heavy Punish'],
            description: 'Big launcher for heavily punishable moves (-20 or worse). Full combo for maximum damage on the biggest mistakes.',
            notes: ['Full combo on hit', 'Only use for -20 or worse', '-14 on block — punishable', 'Maximum damage punish option']
          }}
          showVideo
        />

        <DecisionGrid
          title="Standing Punishment Quick Reference"
          description="Use the most damaging punisher that fits the frame window."
          rows={[
            { situation: '-10 to -11', response: '1,1', reason: '+8 into LIB — free 50/50', risk: 'Low (11 dmg but huge reward)' },
            { situation: '-12 to -13', response: '4,1', reason: 'KND into BT pressure', risk: 'None — always correct' },
            { situation: '-13 to -14', response: 'df+1,4', reason: '25 dmg, +7 on hit', risk: 'None' },
            { situation: '-14 (with heat)', response: '3,3', reason: 'Heat engager, 35 dmg', risk: 'Both hits are high' },
            { situation: '-15 or worse', response: 'df+2', reason: 'Full combo launcher', risk: 'None — maximum damage' },
            { situation: '-16 at range', response: 'f+1+2', reason: '30 dmg, long range', risk: 'None' },
            { situation: '-20 or worse', response: 'db+1+2', reason: 'Bigger launcher, more damage', risk: 'None — use when available' },
          ]}
        />
      </Section>

      <Section title="While Standing (WS) Punishment">
        <p>
          After blocking a low, you're in crouch. These are your while-standing punishers — and they're
          just as momentum-driven as your standing options.
        </p>

        <MoveCard character="azucena"
          videoId="ws4,1"
          move={{
            input: 'ws+4,1',
            hitLevel: ['m', 'm'],
            damage: '12, 8',
            startup: 'i11',
            onBlock: '-6',
            onHit: '+5 → LIB',
            tags: ['11f WS Punish', 'LIB Transition'],
            description: 'Your go-to WS punish. Transitions to LIB on hit with good plus frames, mirroring the 1,1 philosophy — every punish feeds the pressure machine.',
            notes: ['Transitions to LIB with hold F', '+5 on hit — LIB options are strong', '11f covers most blocked lows', '-6 on block — safe']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          videoId="ws1"
          move={{
            input: 'ws+1',
            hitLevel: ['m'],
            damage: '18',
            startup: 'i13',
            onBlock: '-8',
            onHit: '+3',
            onCH: 'Launch',
            tags: ['13f WS', 'CH Launcher', 'Safe'],
            description: 'A safe mid that launches on counter hit. At -8 on block, nobody punishes this. Use it as a WS punish for -13 lows and as a CH fishing tool after blocking lows.',
            notes: ['Counter hit launcher — full combo', 'Safe at -8', 'One of your best CH tools from crouch', 'Use after blocking low pokes to catch their follow-up']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          videoId="ws2"
          move={{
            input: 'ws+2',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i15',
            onBlock: '-13',
            onHit: 'Launch',
            tags: ['15f WS Launcher', 'Full Combo'],
            description: 'Your WS launcher. Punishes any low that\'s -15 or worse with a full combo.',
            notes: ['Full combo on hit', '-13 on block', 'Standard 15f WS launch punish', 'Same combo routes as df+2']
          }}
          showVideo
        />
      </Section>

      <Section title="Whiff Punishment">
        <p>
          When your opponent misses a move entirely, you have time for bigger, slower punishers.
        </p>

        <KeyConcept title="Whiff Punish Options" icon="🎯">
          <ul>
            <li><strong>1,2</strong> — Fast and reliable. 16 damage. Use when you barely have time.</li>
            <li><strong>df+2</strong> — 15-frame launcher. Your best whiff punish when you have time. Full combo.</li>
            <li><strong>f+1+2</strong> — Long range. 30 damage. When df+2 won't reach but you need to punish.</li>
            <li><strong>f+3,4</strong> — Heat engager with good range. The second hit can be ducked on block, but on whiff punish it's guaranteed.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Practice: Punishment Fundamentals">
        <PracticeBox
          title="1,1 Punishment Drill"
          setup="Practice Mode. Record the opponent doing a -10 move (like a jab string). Set to repeat."
          tasks={[
            { id: 'az-11-punish', text: 'Block and punish with 1,1 ten times', detail: 'Get the muscle memory of block → 1,1 automatic. Don\'t think about it.', type: 'counter', target: 10 },
            { id: 'az-11-lib', text: 'After 1,1 hits, do LIB 4,1 (mid) five times', detail: 'Get used to the LIB transition. You should be pressing 4,1 immediately after 1,1 connects.', type: 'counter', target: 5 },
            { id: 'az-11-low', text: 'After 1,1 hits, do LIB d+4,4 (low) five times', detail: 'The hellsweep option. Alternate between this and LIB 4,1 to build decision-making.', type: 'counter', target: 5 },
            { id: 'az-df2-punish', text: 'Record a -15 move. Punish with df+2 into combo five times', detail: 'Block the move → df+2 → full combo. See Chapter 7 for the route.', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="The Habit That Wins Rounds">
          Most Azucena players at intermediate ranks use 1,2 or df+1,4 for punishment because those do more
          raw damage. But 1,1 into LIB at +8 generates FAR more total damage over the course of a round
          because the stance mixup is worth 40+ damage on average. Train yourself to default to 1,1. The
          damage adds up.
        </TipBox>
      </Section>

      <Section title="What's Next">
        <p>
          You know how to approach (WR 3,2), how to poke (df+1,4), and how to punish (1,1 into LIB). But
          every one of those roads leads to the same place: <strong>Libertador stance</strong>. It's time to
          learn what you do when you get there.
        </p>
      </Section>
    </Chapter>
  )
}
