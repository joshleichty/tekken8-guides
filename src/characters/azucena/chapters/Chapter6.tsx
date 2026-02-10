import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  DecisionGrid,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Counter Hit Queen"
      intro="Azucena's pressure forces opponents into a choice: sit there and get mixed, or try to take their turn back. When they choose the second option, they walk directly into the most devastating counter-hit arsenal in the game. This chapter isn't a list of CH moves — it's teaching you when to fish for them."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Combos"
    >
      <Section title="Why Counter Hits Define Azucena">
        <p>
          Every character gets something on counter hit. Most get a knockdown. Some get a launcher from one
          or two specific moves. Azucena gets <strong>full combo launchers from six different tools</strong>,
          each designed for a different situation. She doesn't just punish button presses — she makes pressing
          buttons feel genuinely dangerous.
        </p>

        <p>
          This is the other half of the pressure equation. Chapters 1-5 taught you to apply pressure.
          This chapter teaches you what happens when opponents try to escape it. The answer: they lose.
        </p>
      </Section>

      <Section title="The Safe Fishers">
        <p>
          These moves are safe on block, meaning you can throw them out without much risk. If they counter
          hit, you get a full combo. If they're blocked, you're barely minus.
        </p>

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
            tags: ['CH Launcher', 'Safe', 'From Crouch'],
            description: 'Your best safe CH tool. -8 on block means nobody punishes this. On counter hit, full combo. Use after blocking lows, after d+1, or any time you\'re in crouch and expect them to press.',
            notes: ['Counter hit → full combo', '-8 on block — completely safe', 'i13 from crouch', 'Fish after blocking any low']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: '1+2',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i15',
            onBlock: '-8',
            onHit: '+3',
            onCH: 'Crumple',
            tags: ['CH Crumple', 'High Crush', 'Safe', 'Anti-Mash'],
            description: 'High crush that crumples on counter hit. -8 is safe. The high crush means it ducks under jabs during startup, making it the perfect "they\'re going to mash" button.',
            notes: ['High crush — ducks under jabs', 'Crumple on CH → full combo', '-8 on block — safe', 'Beats jab attempts from your plus frames']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: 'd+1',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i20',
            onBlock: '+4',
            onHit: '+8',
            onCH: 'Launch',
            tags: ['Plus on Block', 'CH Launcher', 'Pressure Reset'],
            description: 'A mid that\'s +4 on BLOCK and launches on counter hit. Yes, you read that right — even when they block this, you\'re plus. On CH, full combo. One of the best moves in Azucena\'s kit.',
            notes: ['+4 on block — you\'re plus even when they block it', '+8 on hit → strong follow-ups', 'Counter hit → full combo', 'i20 is slow — use from plus frames or at range']
          }}
          showVideo
        />

        <KeyConcept title="d+1 Is Special" icon="⭐">
          <p>
            Most counter-hit tools have a downside: you're minus if they block. d+1 has <strong>no
            downside</strong>. On block, you're +4 and can follow with ws+1 as a frame trap. On hit, +8 gives
            you strong pressure. On counter hit, full combo.
          </p>
          <p style={{ marginTop: '12px' }}>
            The catch is the i20 startup. It's slow. You can't throw it from neutral. Use it from plus
            frames: after a blocked WR 3,2 (+2), after df+1,4 on hit (+7), or after 1+2 on block (they're
            only +8, but often won't punish fast enough at range).
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Situational Weapons">
        <MoveCard character="azucena"
          move={{
            input: 'df+3',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i17',
            onBlock: '-9',
            onHit: '+2',
            onCH: 'Crumple',
            tags: ['CH Crumple', 'Knee', 'Safe'],
            description: 'A mid knee that crumples on counter hit. -9 on block is safe. Slower than ws+1 but hits from standing. Good mid-range CH option.',
            notes: ['Crumple on CH → full combo', '-9 on block — safe', 'Knee — can\'t be low parried', 'Use at mid range when expecting them to press']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          videoId="BT.1+2"
          move={{
            input: 'BT 1+2',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i14',
            onBlock: '-10',
            onHit: '+5',
            onCH: 'Launch',
            tags: ['BT Frame Trap', 'CH Launcher'],
            description: 'Already covered in Chapter 5, but listed here for completeness. The BT frame trap after db+3 on hit. Counter hit launches for a full combo.',
            notes: ['Frame trap from db+3 on hit (+4)', 'CH launch → full combo', '-10 on block — jab punishable', 'The BT stance\'s primary purpose']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          videoId="LIB.1+2"
          move={{
            input: 'LIB 1+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i16',
            onBlock: '-12',
            onHit: 'KND',
            onCH: 'Launch',
            tags: ['LIB CH Tool', 'Stance Pressure'],
            description: 'A mid from LIB that launches on counter hit. Use when opponents try to interrupt your LIB pressure with buttons.',
            notes: ['CH launch from LIB', '-12 on block — punishable', 'Use when opponents are mashing in your stance', 'Catches button presses during LIB']
          }}
          showVideo
        />
      </Section>

      <Section title="When to Fish">
        <p>
          Counter-hit tools are worthless if you throw them randomly. Every CH move has a specific situation
          where it shines. This is the map.
        </p>

        <DecisionGrid
          title="Counter Hit Fishing Guide"
          description="Match the situation to the right CH tool."
          rows={[
            { situation: 'After blocked WR 3,2 (+2)', response: '1+2', reason: 'High crush beats their jab, CH crumples', risk: '-8 if blocked' },
            { situation: 'After blocked d+1 (+4)', response: 'ws+1', reason: 'Frame trap. Their jab trades = CH launch', risk: '-8 if blocked' },
            { situation: 'After blocking a low', response: 'ws+1', reason: 'From crouch, fastest safe CH option', risk: '-8 if blocked' },
            { situation: 'After df+1,4 on hit (+7)', response: 'd+1', reason: 'Slow but they can\'t interrupt. +4 even on block', risk: 'They can sidestep' },
            { situation: 'After db+3 on hit (+4 BT)', response: 'BT 1+2', reason: 'Frame trap from BT. CH launch', risk: '-10 if blocked' },
            { situation: 'Opponent keeps jabbing at range', response: '1+2', reason: 'High crush + CH crumple', risk: 'High, can be ducked' },
            { situation: 'Mid range, expecting a button', response: 'df+3', reason: 'Safe mid knee, CH crumple', risk: '-9, needs read' },
            { situation: 'Opponent mashing in LIB', response: 'LIB 1+2', reason: 'CH launch from stance', risk: '-12 if blocked' },
          ]}
        />
      </Section>

      <Section title="The Chain: Plus Frames Into Counter Hits">
        <p>
          The real power of Azucena's CH arsenal is how it combines with her plus-frame pressure. Every
          plus-frame situation creates a natural CH fishing opportunity:
        </p>

        <KeyConcept title="The Pressure-to-CH Pipeline" icon="🔗">
          <ul>
            <li><strong>WR 3,2 blocked (+2)</strong> → they jab → <strong>1+2 crushes and CH crumples</strong></li>
            <li><strong>d+1 blocked (+4)</strong> → they jab → <strong>ws+1 CH launches</strong></li>
            <li><strong>df+1,4 hit (+7)</strong> → they try to take turn → <strong>d+1 CH launches</strong></li>
            <li><strong>1,1 hit → LIB (+8)</strong> → they press a button → <strong>LIB 1+2 CH launches</strong></li>
            <li><strong>db+3 hit → BT (+4)</strong> → they jab → <strong>BT 1+2 CH launches</strong></li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Notice the pattern: every time Azucena is plus and the opponent tries to press a button, there's
            a counter-hit tool waiting for them. This is why opponents eventually stop pressing. And when they
            stop pressing, your stances become free.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="The Conditioning Cycle">
          Pressure creates plus frames. Plus frames create CH opportunities. CH punishment creates fear.
          Fear creates passivity. Passivity makes stances free. Free stances create damage. Damage wins rounds.
          The entire cycle starts with step one: approach and pressure.
        </TipBox>
      </Section>

      <Section title="Practice: Counter Hit Timing">
        <PracticeBox
          title="CH Fishing Drill"
          setup="Practice Mode. Record opponent doing a jab (1) after blocking various moves."
          tasks={[
            { id: 'az-ch-1plus2', text: 'Block WR 3,2, opponent jabs, crush with 1+2 for CH', detail: 'Record: opponent blocks, then jabs. Respond: WR 3,2 → 1+2. Watch the crush.', type: 'counter', target: 5 },
            { id: 'az-ch-ws1', text: 'Land d+1, opponent jabs into ws+1 CH launch', detail: 'Do d+1 on block (+4), then ws+1. Opponent\'s jab trades as CH.', type: 'counter', target: 5 },
            { id: 'az-ch-bt', text: 'Land db+3, opponent jabs into BT 1+2 CH launch', detail: 'The BT frame trap. db+3 hit → BT 1+2 catches their jab.', type: 'counter', target: 5 },
            { id: 'az-ch-read', text: 'Against random opponent actions, choose the right CH tool', detail: 'Record 3 slots: opponent jabs, does nothing, or ducks. Pick your response.', type: 'toggle' },
          ]}
        />
      </Section>

      <Section title="What's Next">
        <p>
          You know how to pressure, how to use stances, and how to punish opponents who try to escape.
          Now it's time to learn what to do when all that pressure connects: <strong>combos</strong>. Azucena's
          combo routes are blessedly simple — one universal route covers almost every launcher.
        </p>
      </Section>
    </Chapter>
  )
}
